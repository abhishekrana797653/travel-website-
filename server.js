import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 3000;
const ROOT = __dirname;
const DIST = path.join(ROOT, 'dist');

const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.js': 'application/javascript; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.json': 'application/json',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
};

function serveFile(res, filePath) {
  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      // Fallback to index.html for SPA routes
      const fallbackPath = path.join(DIST, 'index.html');
      fs.stat(fallbackPath, (fallbackErr, fallbackStats) => {
        if (fallbackErr || !fallbackStats.isFile()) {
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          res.end('Not Found');
          return;
        }
        res.writeHead(200, {
          'Content-Type': 'text/html; charset=UTF-8',
          'Content-Length': fallbackStats.size,
          'Access-Control-Allow-Origin': '*',
        });
        fs.createReadStream(fallbackPath).pipe(res);
      });
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    const headers = {
      'Content-Type': contentType,
      'Content-Length': stats.size,
      'Access-Control-Allow-Origin': '*',
    };

    // Cache static assets (images, js, css) for maximum scroll performance
    if (ext === '.jpg' || ext === '.js' || ext === '.css' || ext === '.png' || ext === '.woff2') {
      headers['Cache-Control'] = 'public, max-age=86400, immutable';
    }

    res.writeHead(200, headers);
    fs.createReadStream(filePath).pipe(res);
  });
}

const server = http.createServer((req, res) => {
  let reqUrl = decodeURI(req.url.split('?')[0]);
  if (reqUrl === '/' || reqUrl === '') {
    reqUrl = '/index.html';
  }

  // 1. Try dist folder first (production build)
  const distPath = path.join(DIST, reqUrl);
  if (distPath.startsWith(DIST) && fs.existsSync(distPath) && fs.statSync(distPath).isFile()) {
    serveFile(res, distPath);
    return;
  }

  // 2. Try root folder (for /frames/...)
  const rootPath = path.join(ROOT, reqUrl);
  if (rootPath.startsWith(ROOT) && fs.existsSync(rootPath) && fs.statSync(rootPath).isFile()) {
    serveFile(res, rootPath);
    return;
  }

  // 3. Fallback to dist/index.html
  serveFile(res, path.join(DIST, 'index.html'));
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
