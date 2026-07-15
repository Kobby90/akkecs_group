// Configure sharp to prevent memory leaks/spikes in production/containers
try {
  const sharp = require('sharp');
  sharp.cache(false);
  sharp.simd(false);
  sharp.concurrency(1);
  console.log('Sharp cache, SIMD, and thread concurrency configured in server.js.');
} catch (e) {
  // Ignore if sharp is not installed
}

const { createServer } = require('http');
const next = require('next');
const { parse } = require('url');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;

app.prepare().then(() => {
    createServer((req, res) => {
        const parsedUrl = parse(req.url, true);
        handle(req, res, parsedUrl);
    }).listen(port, (err) => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${port}`);
    });
});
