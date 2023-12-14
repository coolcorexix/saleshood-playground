import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({
    headless: false,
    slowMo: 50,
  }); // Or 'firefox' or 'webkit'.
  const page = await browser.newPage();
  //   await page.goto('https://saleshood.lvh.me/', {
  //     timeout: 60000,
  //   });
  //   // other actions...
  //   await browser.close();
})();
