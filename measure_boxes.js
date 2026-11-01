import http from 'http';
import fs from 'fs';

async function main() {
  const json = await new Promise((resolve, reject) => {
    http.get('http://127.0.0.1:9222/json', (res) => {
      let b = '';
      res.on('data', c => b += c);
      res.on('end', () => resolve(JSON.parse(b)));
    }).on('error', reject);
  });

  const page = json.find(t => t.url.includes('localhost:3000'));
  if (!page) {
    console.error('Page not found');
    return;
  }

  const ws = new WebSocket(page.webSocketDebuggerUrl);
  await new Promise(r => ws.addEventListener('open', r));

  let id = 1;
  function send(method, params = {}) {
    return new Promise((resolve) => {
      const msgId = id++;
      const handler = (event) => {
        const msg = JSON.parse(event.data);
        if (msg.id === msgId) {
          ws.removeEventListener('message', handler);
          resolve(msg.result);
        }
      };
      ws.addEventListener('message', handler);
      ws.send(JSON.stringify({ id: msgId, method, params }));
    });
  }

  await send('Page.enable');
  await send('Runtime.enable');

  await send('Emulation.setDeviceMetricsOverride', {
    width: 1440,
    height: 900,
    deviceScaleFactor: 1,
    mobile: false
  });

  // Evaluate bounding rects
  const res = await send('Runtime.evaluate', {
    expression: `
      (() => {
        const h2Brands = document.querySelector('#trusted-brands h2');
        const h2Studio = document.querySelector('#about-studio h2');
        const firstCard = document.querySelector('#about-studio .touch-light-card');
        const firstLogo = document.querySelector('#trusted-brands .touch-lift');
        
        return {
          h2Brands: h2Brands ? {
            left: h2Brands.getBoundingClientRect().left,
            right: h2Brands.getBoundingClientRect().right,
            width: h2Brands.getBoundingClientRect().width,
            textAlign: window.getComputedStyle(h2Brands).textAlign
          } : null,
          h2Studio: h2Studio ? {
            left: h2Studio.getBoundingClientRect().left,
            right: h2Studio.getBoundingClientRect().right,
            width: h2Studio.getBoundingClientRect().width,
            textAlign: window.getComputedStyle(h2Studio).textAlign
          } : null,
          firstCard: firstCard ? {
            left: firstCard.getBoundingClientRect().left
          } : null,
          firstLogo: firstLogo ? {
            left: firstLogo.getBoundingClientRect().left
          } : null
        };
      })()
    `,
    returnByValue: true
  });

  console.log('MEASUREMENTS:', JSON.stringify(res.result.value, null, 2));

  // Take screenshot of trusted-brands
  await send('Runtime.evaluate', {
    expression: `document.getElementById('trusted-brands').scrollIntoView();`
  });
  await new Promise(r => setTimeout(r, 600));
  const scr1 = await send('Page.captureScreenshot');
  fs.writeFileSync('scr_trusted_brands.png', Buffer.from(scr1.data, 'base64'));

  // Take screenshot of about-studio
  await send('Runtime.evaluate', {
    expression: `document.getElementById('about-studio').scrollIntoView();`
  });
  await new Promise(r => setTimeout(r, 600));
  const scr2 = await send('Page.captureScreenshot');
  fs.writeFileSync('scr_about_studio.png', Buffer.from(scr2.data, 'base64'));

  ws.close();
}

main().catch(console.error);
