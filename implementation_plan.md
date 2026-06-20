# Security Remediation Plan — Assexure-X VRA Findings

**Based on:** Vendor Risk Assessment — 2026-06-16  
**Priority Order:** Critical → High → Medium → Documentation

---

## User Review Required

> [!CAUTION]
> **Before any code changes begin, YOU must take these manual actions first** — they cannot be automated:
>
> 1. **Rotate all exposed credentials** in Railway's dashboard (DB password, Redis password, SMTP password, Twilio/Infobip/Vonage/Hubtel keys, JWT secret, Google service account key)
> 2. **Move all secrets from `.env` files to Railway's environment variable UI** so they are never stored on disk in plaintext
> 3. **Regenerate the JWT_SECRET** to a new random 256-bit hex string (e.g. `openssl rand -hex 32`)
>
> The code changes below assume secrets are managed by Railway and referenced via `process.env.*` at runtime.

> [!IMPORTANT]
> The `.env` files will be left in place for **local development only** but must be confirmed to be in `.gitignore` and must contain only non-sensitive placeholder values for local work.

---

## Open Questions

> [!IMPORTANT]
> Please confirm before execution:
> 1. **CORS allowlist** — Should the allowed origins be: `https://assexure-x-client.vercel.app`, `https://demo.akkecsgroup.com`, `https://gateway.up.railway.app`, and `http://localhost:3000` (dev)? Or are there other frontends?
> 2. **JWT expiry** — Reduce access token from 24h to **4 hours** with a 7-day sliding refresh token? Or a different window?
> 3. **API key roles** — Should existing API keys (`sk_live_*`, `sk_test_*`, `sk_dev_*`, `ak_prod_*`, `ak_dev_*`) each get distinct role sets, or is a single `back_office` role sufficient for all integrations?
> 4. **Metrics protection** — Should `/metrics` require an internal IP check only (Railway internal networking) or an API key header?

---

## Proposed Changes

### Sprint 1 — Critical Fixes (All Immediate, No User-Blocking Dependencies)

---

#### [MODIFY] [api-gateway/src/index.js](file:///c:/Users/danie/OneDrive/Documents/Projects/assexure_n/assexure_n/app/services/api-gateway/src/index.js)

**Change 1: Lock down CORS to an explicit allowlist**
- Replace `origin: true` (reflect-all) with a function that checks against a whitelist read from `ALLOWED_ORIGINS` env variable
- Fallback to `localhost:3000` in development

**Change 2: Fix API key role assignment — blanket `admin` → use per-key role map from env**
- Read `API_KEY_ROLES` as a JSON map (`{ "sk_live_abc123": "back_office", "sk_test_xyz": "viewer" }`) instead of a flat list
- Fallback gracefully to a `read_only` role if the key is not in the map

**Change 3: Protect `/metrics` and `/api-docs`**
- Add a middleware guard requiring either internal origin or a `METRICS_SECRET` header
- Swagger docs restricted to `NODE_ENV !== 'production'` or behind the same guard

**Change 4: Remove the API key → `admin` hardcoding in gateway**
- Currently the gateway also issues a system JWT with `roles: ['admin']` for any valid API key — change to use mapped roles

---

#### [NEW] [app/services/shared/middleware/piiScrubber.js](file:///c:/Users/danie/OneDrive/Documents/Projects/assexure_n/assexure_n/app/services/shared/middleware/piiScrubber.js)

**A shared Winston log-format plugin that:**
- Intercepts all log entries and redacts known sensitive fields: `password`, `ssn`, `ghana_card_number`, `bank_account`, `token`, `jwt`, `authorization`, `x-api-key`, `credit_card`, `private_key`, `secret`, `db_password`, `api_key`
- Replaces values with `[REDACTED]`
- Works recursively on nested objects

---

#### [MODIFY] [app/services/api-gateway/src/shared/utils/sharedLogger.js](file:///c:/Users/danie/OneDrive/Documents/Projects/assexure_n/assexure_n/app/services/api-gateway/src/shared/utils/sharedLogger.js)

- Import and apply the PII scrubber as a Winston format
- Apply it in **all** services via `shared/utils/sharedLogger.js`

---

### Sprint 2 — High Risk Fixes

---

#### [MODIFY] [app/services/auth-service/src/index.js](file:///c:/Users/danie/OneDrive/Documents/Projects/assexure_n/assexure_n/app/services/auth-service/src/index.js)

**JWT Access + Refresh Token System:**
- Reduce access token expiry from 24h → **4h**
- Issue a separate `refreshToken` (7-day, stored in HttpOnly cookie)
- Add `POST /api/auth/refresh` endpoint to exchange a valid refresh token for a new access token
- On logout, invalidate the refresh token by storing the `jti` in Redis blocklist

---

#### [NEW] [app/services/auth-service/src/routes/authRefresh.js](file:///c:/Users/danie/OneDrive/Documents/Projects/assexure_n/assexure_n/app/services/auth-service/src/routes/authRefresh.js)

- Refresh token endpoint logic — validate cookie, check blocklist, issue new access token

---

#### [MODIFY] [app/services/api-gateway/src/index.js](file:///c:/Users/danie/OneDrive/Documents/Projects/assexure_n/assexure_n/app/services/api-gateway/src/index.js)

**Add CSRF protection middleware:**
- Use double-submit cookie pattern (no additional package required)
- For all state-changing routes (`POST`, `PUT`, `PATCH`, `DELETE`), require `x-csrf-token` header to match a cookie value
- Exempt API-key authenticated requests (they're server-to-server)

---

#### [MODIFY] [app/services/api-gateway/src/shared/utils/security.js](file:///c:/Users/danie/OneDrive/Documents/Projects/assexure_n/assexure_n/app/services/api-gateway/src/shared/utils/security.js)

**Harden CSP — remove `'unsafe-inline'`:**
- Generate a per-request nonce for `scriptSrc` and `styleSrc`
- Remove `'unsafe-inline'` directive

---

### Sprint 3 — Medium Risk & Tooling

---

#### [MODIFY] [app/package.json](file:///c:/Users/danie/OneDrive/Documents/Projects/assexure_n/assexure_n/app/package.json)

- Add `"audit": "npm audit --audit-level=high"` script
- Add `"audit:fix": "npm audit fix"` script

---

#### [NEW] [app/.github/workflows/security-audit.yml](file:///c:/Users/danie/OneDrive/Documents/Projects/assexure_n/assexure_n/app/.github/workflows/security-audit.yml)

- GitHub Actions workflow running `npm audit --audit-level=high` on every PR
- Runs `npx better-npm-audit audit` for richer reporting

---

### Sprint 4 — Documentation

---

#### [NEW] [docs/incident-response-plan.md](file:///c:/Users/danie/OneDrive/Documents/Projects/assexure_n/assexure_n/docs/incident-response-plan.md)

- Full Incident Response Plan: detection, containment, eradication, recovery, post-incident review
- Data breach notification procedure (NDPC Ghana, clients, internal)
- Contact matrix

---

#### [NEW] [docs/disaster-recovery-runbook.md](file:///c:/Users/danie/OneDrive/Documents/Projects/assexure_n/assexure_n/docs/disaster-recovery-runbook.md)

- RPO/RTO targets
- Database failover steps (Neon PITR)
- Service restart procedure
- Rollback via Railway dashboard

---

#### [NEW] [docs/data-retention-policy.md](file:///c:/Users/danie/OneDrive/Documents/Projects/assexure_n/assexure_n/docs/data-retention-policy.md)

- Per-table retention periods aligned to NPRA 7-year minimum
- Automated archival schedule recommendation

---

## Verification Plan

### Automated Tests
- `npm audit --audit-level=high` — must exit 0
- Unit tests for PII scrubber: ensure `password`, `ssn`, `bank_account` fields are redacted
- Integration test: verify `/metrics` returns 401 without auth, 200 with correct header
- Integration test: verify CORS rejects unknown origins

### Manual Verification
- Login flow still works after JWT expiry reduction
- Token refresh flow works correctly (cookie set, refresh endpoint responds)
- CORS test: `curl -H "Origin: https://evil.com"` to gateway should receive no ACAO header
- API key test: sending `x-api-key` should grant `back_office` role, not `admin`
- Swagger docs: confirm `/api-docs` is inaccessible in production
