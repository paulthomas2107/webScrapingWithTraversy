const puppeteer = require('puppeteer')

async function run() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage()
    await page.goto('http://www.traversymedia.com')

    await page.screenshot({ path: "./images/example.png"})

    await browser.close()
}

run()