const http = require('http');
const fs = require('fs');
const path = require('path');

// Preload critical files into memory
let indexHtml = '';
let stylesCss = '';
let appJs = '';

try {
  indexHtml = fs.readFileSync(path.join(__dirname, 'index.html'));
  stylesCss = fs.readFileSync(path.join(__dirname, 'styles.css'));
  appJs = fs.readFileSync(path.join(__dirname, 'js/app.js'));
} catch (e) {
  console.warn('Preload warning:', e.message);
}

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2'
};

function handler(req, res) {
  let reqPath = decodeURI((req.url || '/').split('?')[0]);

  // Fast in-memory responses
  if (reqPath === '/' || reqPath === '' || reqPath === '/index.html') {
    res.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'public, max-age=3600'
    });
    res.end(indexHtml);
    return;
  }

  if (reqPath === '/styles.css' || reqPath === '/css/styles.css') {
    res.writeHead(200, {
      'Content-Type': 'text/css; charset=utf-8',
      'Cache-Control': 'public, max-age=3600'
    });
    res.end(stylesCss);
    return;
  }

  if (reqPath === '/app.js' || reqPath === '/js/app.js') {
    res.writeHead(200, {
      'Content-Type': 'application/javascript; charset=utf-8',
      'Cache-Control': 'public, max-age=3600'
    });
    res.end(appJs);
    return;
  }

  // Fallback to disk if present, else fallback to indexHtml
  const safePath = path.normalize(path.join(__dirname, reqPath));
  if (safePath.startsWith(__dirname) && fs.existsSync(safePath) && fs.statSync(safePath).isFile()) {
    const ext = path.extname(safePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': 'public, max-age=3600'
    });
    fs.createReadStream(safePath).pipe(res);
  } else {
    // SPA fallback
    res.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'public, max-age=3600'
    });
    res.end(indexHtml);
  }
}

module.exports = handler;

if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  http.createServer(handler).listen(PORT, () => {
    console.log(`NOVA LIVE SERVER RUNNING at http://localhost:${PORT}`);
  });
}
