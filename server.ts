import { APP_BASE_HREF } from '@angular/common';
import { CommonEngine } from '@angular/ssr';
import express from 'express';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';
import bootstrap from './src/main.server';

export function app(): express.Express {
  const server = express();

  const serverDistFolder = dirname(fileURLToPath(import.meta.url));
  const browserDistFolder = resolve(serverDistFolder, '../browser');
  const indexHtml = join(serverDistFolder, 'index.server.html');
  const commonEngine = new CommonEngine();

  server.set('view engine', 'html');
  server.set('views', browserDistFolder);

  // 1. Serve static SEO files
  server.get('/robots.txt', (req, res) => {
    res.sendFile(join(browserDistFolder, 'robots.txt'), {
      headers: {
        'Cache-Control': 'no-store',
      },
    });
  });

  server.get('/sitemap.xml', (req, res) => {
    res.sendFile(join(browserDistFolder, 'sitemap.xml'), {
      headers: {
        'Cache-Control': 'no-store',
      },
    });
  });

  // 2. Serve static Angular assets
  server.get(
    '*.*',
    express.static(browserDistFolder, {
      maxAge: '1y',
      immutable: true,
    })
  );

  // 3. SSR Render handler with no-cache headers
  server.get('*', (req, res, next) => {
    const { protocol, originalUrl, baseUrl, headers } = req;

    // Prevent caching
    res.setHeader(
      'Cache-Control',
      'no-store, no-cache, must-revalidate, proxy-revalidate'
    );
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
    res.setHeader('Surrogate-Control', 'no-store');

    // Use Angular's CommonEngine to render the page
    commonEngine
      .render({
        bootstrap,
        documentFilePath: indexHtml,
        url: `${protocol}://${headers.host}${originalUrl}`,
        publicPath: browserDistFolder,
        providers: [{ provide: APP_BASE_HREF, useValue: baseUrl }],
      })
      .then((html) => res.send(html))
      .catch((err) => next(err));
  });

  return server;
}

function run(): void {
  const port = process.env['PORT'] || 4000;

  const server = app();
  server.listen(port, () => {
    console.log(`✅ Node Express server listening on http://localhost:${port}`);
  });
}

run();
