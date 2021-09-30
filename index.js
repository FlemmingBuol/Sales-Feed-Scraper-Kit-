const puppeteer = require('puppeteer-extra')

puppeteer.launch({
    headless: false
}).then(async browser => {
    const page = await browser.newPage();

    await page.goto('https://bandcamp.com/',{waitUntil: 'networkidle2'});

    await page.waitForSelector('acdc')
console.log("Usa")
   
})

