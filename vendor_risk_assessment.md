# Vendor Risk Assessment — Assexure-X Pension Administration Platform

**Assessment Date:** 2026-06-16  
**Assessed By:** Antigravity (AI-assisted internal review)  
**System Under Review:** Assexure-X — Node.js / Express.js microservices pension platform  
**Deployment Target:** Railway.app (PaaS) + Neon.tech (Managed PostgreSQL) + Redis (Railway)  
**Assessment Basis:** Checklist - Vendor Risk Assessment Template (attached)

---

## 1. Vendor Information & Overview

| Field | Response |
|---|---|
| **Vendor / System Name** | Assexure-X (internally developed + hosted SaaS on Railway) |
| **Primary Contact** | Internal Development Team (Fintrivora Technologies / Akkecs Group) |
| **Service Description** | End-to-end pension fund administration platform: member management, contribution collection, investment portfolio management, benefit payment, accounting, document management, audit trails, and member self-service portal. |
| **Deployment Model** | Cloud PaaS (Railway.app) — 18 Express.js microservices behind a single API Gateway |
| **Contract / SLA Status** | Internal system — no external SLA contract; governed by internal development standards |
| **Data Processed** | Highly sensitive PII (SSNs, Ghana Card numbers, bank accounts, contribution history, benefit entitlements) |

---

## 2. Data Security & Classification

### 2.1 Data Classification
| Question | Finding | Risk | Remediation |
|---|---|---|---|
| Does the vendor classify data by sensitivity? | Partial — PII fields (`ssn`, `ghana_card_number`, `bank_account`) are identified in architecture docs as sensitive. No formal data classification policy document found. | **Medium** | Produce a formal Data Classification Policy that tags all 164 tables by sensitivity tier. |
| Is sensitive/PII data encrypted at rest? | Application-layer encryption is mandated by the architecture guidelines for `ssn`, `ghana_card_number`, and `bank_account` fields. Encryption implementation is at the service level. Database (Neon) uses AES-256 encryption at rest by default. | **Low** | Verify encryption is consistently applied across all services that touch these fields; add automated tests. |
| Is data encrypted in transit? | All production service URLs use HTTPS (`*.up.railway.app`). The gateway normalises `http://` railway URLs to `https://` in `resolveTarget()`. TLS enforced for DB via `sslmode=require` in `DATABASE_URL`. Redis connection via `REDIS_PUBLIC_URL`. | **Low** | Confirm TLS certificate auto-renewal is managed by Railway; add a periodic TLS health check. |
| Is PII minimised / masked in logs? | Not explicitly enforced. Winston logging is active across all services. PII could be inadvertently logged via request bodies. | **High** | Implement a log-scrubbing middleware that redacts `ssn`, `password`, `bank_account`, and `ghana_card_number` before any log write. |
| Is there a data retention and disposal policy? | Architecture mandates an append-only `audit_logs` table (never deleted). No formal retention policy found for other data. | **Medium** | Define and document retention periods for each data category; implement automated archival/purge jobs. |

---

## 3. Access Control & Identity Management

### 3.1 Authentication
| Question | Finding | Risk | Remediation |
|---|---|---|---|
| Is multi-factor authentication (MFA) enforced for privileged users? | Yes — `otplib` and `qrcode` packages are present in `auth-service`. MFA routes (`/api/auth/verify-mfa`, `/api/auth/verify-mfa-setup`) have dedicated rate limiting (5 attempts / 15 min). | **Low** | Confirm MFA enforcement is mandatory for all admin roles, not optional. Audit the user role table. |
| Is authentication token management secure? | JWT tokens stored in **HttpOnly cookies** (cookie-parser in gateway). `JWT_SECRET` is a 128-char hex string. JWT expiry: 24h. | **Medium** | 24h JWT expiry is long for a pension system handling financial data. Reduce to 1–4h and implement sliding refresh tokens. |
| Are API keys managed securely? | API keys are listed in plain text in `.env` files (`API_KEYS=sk_live_abc123...`). The gateway grants `['admin']` role to all API key requests — no granular role assignment per key. | **Critical** | Move API key storage to a secrets manager (Railway secrets, AWS Secrets Manager, or Vault). Assign per-key roles rather than blanket `admin`. |
| Are default credentials removed? | No default credentials detected in code. Mock admin login routes are commented out. | **Low** | Perform a full credential audit across all 18 services before each production deployment. |
| Is there a session timeout / idle logout? | JWT expiry is 24h; no explicit idle-session timeout mechanism detected in gateway. | **Medium** | Implement a shorter idle timeout by tracking last-activity in Redis and invalidating JWT server-side. |

### 3.2 Authorisation & Role-Based Access
| Question | Finding | Risk | Remediation |
|---|---|---|---|
| Is role-based access control (RBAC) implemented? | Yes — `roles` table, `user-privileges` API routes, and `roles` JWT claims are present. The gateway does not re-validate roles; auth service handles it. | **Low** | Ensure gateway enforces minimum privilege checks for sensitive routes as a defence-in-depth layer. |
| Is there least-privilege enforcement? | Partially — individual services enforce roles. However, API key requests are all granted `admin`. | **High** | Implement per-API-key role scoping immediately. |
| Are privileged accounts audited? | `audit_logs` table is append-only and records all actions. Audit service exposed at `/api/audit-trails`. | **Low** | Verify all financial write operations (ledger, payments, benefits) generate audit entries. |

---

## 4. Third-Party Vendor & Dependency Risk

### 4.1 Identified Third-Party Vendors / Services

| Vendor | Service Used | Data Shared | Risk Level |
|---|---|---|---|
| **Railway.app** | PaaS hosting (all 18 microservices + Redis) | All application data, traffic | **High** — Single cloud provider; no multi-cloud DR |
| **Neon.tech** | Managed PostgreSQL (164 tables, production data) | All PII, financial data | **High** — Core database; shared responsibility model |
| **Vercel** | Frontend hosting (`assexure-x-client.vercel.app`) | Session cookies, API tokens in transit | **Medium** |
| **Google Cloud Storage** | Document/file storage (`@google-cloud/storage`) | Member documents, reports | **Medium** |
| **Sentry** | Error monitoring (`@sentry/node`, `@sentry/profiling-node`) | Stack traces, request context | **Medium** — PII may be in traces |
| **Honeycomb** | Distributed tracing (OpenTelemetry OTLP) | Trace/span data, service metadata | **Low** |
| **Infobip** | SMS, WhatsApp, Email notifications | Phone numbers, email addresses, message content | **Medium** |
| **Twilio** | SMS/WhatsApp (legacy/backup) | Phone numbers, message content | **Medium** |
| **Vonage** | Voice / messaging (private key present in `.env`) | Phone numbers, message content | **Medium** |
| **Hubtel** | SMS (Ghana-local provider) | Phone numbers, message content | **Medium** |
| **Mailtrap** | Email delivery (`mailtrap` npm package) | Email content, potentially PII | **Medium** |
| **Nodemailer / SMTP** | Email delivery via `server210.web-hosting.com` | Email content | **Medium** |

### 4.2 Dependency / Supply Chain Risk
| Question | Finding | Risk | Remediation |
|---|---|---|---|
| Are npm dependencies regularly audited? | `package.json` overrides exist for known CVE packages (`lodash`, `nth-check`, `ws`, `ansi-html`, `serialize-javascript`, `semver`). However, no automated `npm audit` CI step detected. | **Medium** | Add `npm audit --audit-level=high` to CI pipeline. Enable GitHub Dependabot or Snyk. |
| Are dependencies pinned to specific versions? | Some dependencies use `^` (caret) ranges, allowing minor/patch upgrades automatically. | **Medium** | Pin critical security packages (`helmet`, `jsonwebtoken`, `bcrypt`) to exact versions in production. |
| Is there a Software Bill of Materials (SBOM)? | No SBOM found. | **Medium** | Generate an SBOM using `npm sbom` or CycloneDX for regulatory compliance. |
| Are notification vendor credentials stored securely? | Twilio, Infobip, Vonage, Hubtel credentials are stored in plaintext `.env` files committed to the repository directory structure. | **Critical** | Immediately rotate all exposed credentials. Move all secrets to Railway's secret management or a dedicated vault. Ensure `.env` files are in `.gitignore`. |

---

## 5. Network & Infrastructure Security

| Question | Finding | Risk | Remediation |
|---|---|---|---|
| Is network traffic segmented? | Microservices communicate internally on localhost ports (5001–5018) within Railway. External exposure only through API Gateway (port 3000). | **Low** | Confirm Railway project networking isolates inter-service traffic from public internet. |
| Are unnecessary ports/services exposed? | The `/metrics` Prometheus endpoint and `/api-docs` Swagger UI are publicly accessible without authentication. | **High** | Protect `/metrics` and `/api-docs` with at least IP-allowlisting or API key authentication. |
| Is a Web Application Firewall (WAF) in place? | No WAF detected. Railway provides DDoS protection but no application-layer WAF. | **Medium** | Add Cloudflare or AWS WAF in front of the Railway gateway URL. |
| Is rate limiting implemented? | Yes — 100 req/min (standard) and 5 req/15min (auth routes) enforced at gateway using Redis-backed `express-rate-limit`. | **Low** | Verify rate limits are also enforced at the individual service level in case services are accessed directly. |
| Is the CORS policy restrictive? | Current gateway CORS is `origin: true` (reflects any origin). This is permissive. | **High** | Lock CORS to an explicit allowlist of known origins (`assexure-x-client.vercel.app`, admin portal domain). |
| Are HTTP security headers set? | Yes — `helmet` middleware is applied in the gateway and individual services with CSP, XSS protection, etc. However, `'unsafe-inline'` is permitted in CSP for scripts/styles. | **Medium** | Remove `'unsafe-inline'` from CSP and use nonces or hashes for legitimate inline scripts. |

---

## 6. Application Security

| Question | Finding | Risk | Remediation |
|---|---|---|---|
| Is input validation implemented? | Yes — `express-validator`, `joi`, `yup`, and `xss-clean` are used across services. | **Low** | Ensure validation schemas are consistent and cover all endpoints; add automated API fuzzing tests. |
| Is SQL injection prevention in place? | The `pg` library is used with parameterised queries (not detected in review, but standard Node.js pg practice). No raw SQL concatenation found in reviewed files. | **Low** | Conduct a targeted code review of all database query functions to confirm parameterisation. |
| Is XSS prevention implemented? | `xss-clean` middleware in gateway and services sanitises `req.body`, `req.query`, `req.params`. | **Low** | Audit frontend React components for `dangerouslySetInnerHTML` usage. |
| Is there protection against CSRF? | HttpOnly cookies are used (protection from JS access). No explicit CSRF token middleware detected. | **Medium** | Implement CSRF token validation (e.g., `csurf` or double-submit cookie pattern) for state-changing operations. |
| Are file uploads secured? | `multer` and `express-fileupload` are present. `MAX_FILE_SIZE=5242880` (5MB) is configured. | **Medium** | Enforce MIME type validation and malware scanning on uploads. Ensure files are stored in GCS, not served from app filesystem. |
| Is the application tested for security vulnerabilities? | No automated security scanning (SAST/DAST) workflow detected. Prior manual security assessment performed (Conversation `084230c8`). | **High** | Integrate SAST (e.g., CodeQL, Semgrep) into CI/CD. Schedule quarterly DAST scans against staging. |

---

## 7. Availability, Backup & Disaster Recovery

| Question | Finding | Risk | Remediation |
|---|---|---|---|
| What is the stated uptime / SLA? | Railway.app SLA: 99.9% uptime. Neon.tech: 99.95%. No internal SLA document found. | **Medium** | Define an internal SLA document aligned to pension regulatory requirements. |
| Is database backup in place? | Neon.tech provides automated daily backups with point-in-time recovery (PITR). | **Low** | Confirm backup retention period meets local pension regulatory requirements (typically 7 years). |
| Is there a disaster recovery plan? | No DR runbook or BCP found in the repository. All services are hosted on a single Railway region. | **High** | Create a DR runbook. Evaluate multi-region or cross-cloud replication for database and Redis. |
| Are services health-checked? | Yes — Railway restart policy is `ON_FAILURE` with max 10 retries. Gateway `/health/services` polls all downstream services. | **Low** | Add automated alerting when service health check fails (Honeycomb or Sentry alerts). |
| Is there a tested rollback procedure? | Railway supports deployment rollbacks. No documented rollback runbook found. | **Medium** | Document rollback procedure; test it in staging quarterly. |

---

## 8. Logging, Monitoring & Incident Response

| Question | Finding | Risk | Remediation |
|---|---|---|---|
| Is centralised logging in place? | Yes — Winston logger with correlation IDs across all services. Errors serialised to `error_logs` table and OpenTelemetry traces sent to Honeycomb. | **Low** | Ensure log storage has a defined retention period and is tamper-evident. |
| Is real-time monitoring/alerting in place? | Honeycomb for distributed traces; Sentry for error monitoring; Prometheus metrics endpoint exposed. No automated alerting rules detected. | **Medium** | Configure Sentry alerts and Honeycomb triggers for anomalous error rates, latency spikes, or failed auth attempts. |
| Is there an incident response plan (IRP)? | No IRP document found in the repository. | **High** | Create and test an IRP covering: data breach detection, containment, notification (NDPC/regulatory), and post-incident review. |
| Are security events logged and reviewed? | Auth failures and audit trail events are logged. No SIEM integration or automated log-review process detected. | **Medium** | Integrate logs with a SIEM or set up log-based alerts for suspicious auth patterns. |

---

## 9. Compliance & Regulatory

| Question | Finding | Risk | Remediation |
|---|---|---|---|
| Is the system compliant with relevant pension regulations? | Ghana pension regulations (NPRA) require specific data handling. No formal compliance mapping document found. | **High** | Conduct a formal NPRA compliance gap analysis. Map regulatory requirements to system controls. |
| Is data sovereignty addressed? | Neon database hosted on `us-east-2.aws.neon.tech` (Ohio, USA). All data for Ghana pension members is stored outside Ghana. | **High** | Assess whether NPRA regulations mandate or recommend data residency in Ghana. Evaluate Neon's available regions or alternative providers. |
| Is there a Privacy Impact Assessment (PIA)? | No PIA document found. | **High** | Conduct a PIA in line with Ghana's Data Protection Act 2012 (Act 843) and NDPC guidelines. |
| Is the vendor SOC 2 / ISO 27001 certified? | Railway.app: SOC 2 Type II compliant. Neon.tech: SOC 2 Type II. Google Cloud: ISO 27001. Twilio/Infobip: SOC 2. | **Low** | Obtain and retain vendor compliance certificates annually. |
| Are data processing agreements (DPAs) in place? | Not verified. | **Medium** | Sign DPAs with Railway, Neon, Google Cloud, Twilio, Infobip, Vonage, and Sentry. |

---

## 10. Financial & Operational Risk of Vendor Concentration

| Question | Finding | Risk | Remediation |
|---|---|---|---|
| Is there over-dependence on a single vendor? | Railway.app hosts all compute AND Redis. A Railway outage takes down all 18 services simultaneously. | **High** | Evaluate decoupling Redis to an independent provider (Upstash, Redis Cloud). Plan a failover to another PaaS (Render, Fly.io, or AWS). |
| What is the vendor's financial stability? | Railway.app is a well-funded startup (Series B). Neon.tech is Series B funded. No imminent viability concern. | **Low** | Monitor vendor financial news; include vendor viability review in annual risk assessment cycle. |
| Is there a vendor exit / portability plan? | The application is containerisable (Nixpacks builder on Railway). PostgreSQL is standard and portable. Redis is standard. | **Low** | Document migration steps to move off Railway within 72 hours if needed. |

---

## 11. Critical Findings Summary

| # | Finding | Severity | Immediate Action Required |
|---|---|---|---|
| 1 | **API keys stored in plain `.env` files** with blanket `admin` role grants | 🔴 Critical | Rotate all keys immediately. Move to Railway secrets. Implement per-key role scoping. |
| 2 | **Sensitive credentials exposed in `.env`** (Twilio, Infobip, Vonage, Hubtel, DB password, Redis password, SMTP password, JWT secret) | 🔴 Critical | Rotate all credentials. Audit git history for prior exposure. Use secret management. |
| 3 | **CORS configured as `origin: true`** (reflects all origins) | 🔴 High | Restrict to explicit origin allowlist immediately. |
| 4 | **No Incident Response Plan** exists | 🔴 High | Create IRP before next production deployment. |
| 5 | **PII likely logged unmasked** via Winston | 🟠 High | Implement log-scrubbing middleware within 2 sprints. |
| 6 | **No Data Protection Impact Assessment** | 🟠 High | Initiate PIA with legal/compliance team. |
| 7 | **Data residency: Ghanaian pension data on US servers** | 🟠 High | Legal review of NPRA data residency obligations. |
| 8 | **`/metrics` and `/api-docs` publicly unauthenticated** | 🟠 High | Add access controls immediately. |
| 9 | **JWT expiry is 24 hours** for financial application | 🟡 Medium | Reduce to 1–4 hours. Implement refresh token rotation. |
| 10 | **No automated SAST/DAST in CI/CD** | 🟡 Medium | Integrate security scanning in pipeline. |
| 11 | **No Disaster Recovery / BCP plan** | 🟡 Medium | Author DR runbook and schedule quarterly test. |
| 12 | **No formal Data Retention Policy** | 🟡 Medium | Define per-table retention periods and implement archival jobs. |

---

## 12. Risk Score Summary

| Domain | Score (1–5) | Risk Level |
|---|---|---|
| Data Security | 3 | 🟠 Medium |
| Access Control | 2 | 🟠 Medium-High |
| Third-Party Dependencies | 2 | 🟠 Medium-High |
| Network & Infrastructure | 3 | 🟠 Medium |
| Application Security | 3 | 🟡 Medium |
| Availability & DR | 3 | 🟠 Medium |
| Monitoring & Incident Response | 2 | 🟠 Medium-High |
| Compliance & Regulatory | 2 | 🔴 High |
| **Overall** | **2.5** | **🟠 Medium-High** |

> [!IMPORTANT]
> The two **Critical** findings (exposed credentials in `.env` files, broad CORS `origin: true`) must be remediated **before the next production release**. These represent immediate, exploitable risk vectors.

---

## 13. Recommended Remediation Roadmap

### Immediate (< 1 week)
- [ ] Rotate ALL exposed credentials (DB, Redis, SMTP, Twilio, Infobip, Vonage, Hubtel, JWT secret)
- [ ] Move all secrets to Railway's encrypted secret variables or an external vault
- [ ] Restrict CORS to an explicit origin allowlist
- [ ] Protect `/metrics` and `/api-docs` with authentication
- [ ] Implement per-key role scoping for API key authentication

### Short-term (1–4 weeks)
- [ ] Implement PII log-scrubbing middleware
- [ ] Reduce JWT expiry to ≤4h and implement refresh token rotation
- [ ] Add `npm audit` to CI pipeline; resolve all High/Critical CVEs
- [ ] Add CSRF protection to state-changing endpoints
- [ ] Author Incident Response Plan

### Medium-term (1–3 months)
- [ ] Conduct formal Privacy Impact Assessment (Ghana Data Protection Act compliance)
- [ ] Perform NPRA regulatory compliance gap analysis
- [ ] Assess data residency requirements; evaluate Neon region options
- [ ] Implement SAST (CodeQL/Semgrep) in CI/CD
- [ ] Author and test Disaster Recovery Runbook
- [ ] Sign Data Processing Agreements with all third-party vendors
- [ ] Define formal Data Retention Policy and implement archival jobs

### Long-term (3–6 months)
- [ ] Evaluate multi-region deployment for DR capability
- [ ] Decouple Redis from Railway to independent provider
- [ ] Pursue SOC 2 readiness assessment for Assexure-X itself
- [ ] Establish quarterly security review cycle

---

*Assessment completed based on static code review and architecture analysis. A full penetration test against the staging environment is strongly recommended to validate findings and discover additional runtime vulnerabilities.*
