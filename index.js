const puppeteer = require('puppeteer')

async function run() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage()
    await page.goto('http://www.traversymedia.com')

    //await page.screenshot({ path: "./images/example.png", fullPage: true })
    //await page.pdf({ path: "./images/example.pdf", format:'A4' })

    //const html = await page.content();
    //console.log(html)

    //const title = await page.evaluate(() => document.title)
    //console.log(title)

    //const text = await page.evaluate(() => document.body.innerText)
    //console.log(text)

    const links = await page.evaluate(() => Array.from(document.querySelectorAll('a'), (e) => e.href))
    console.log(links)

    await browser.close()
}

run()