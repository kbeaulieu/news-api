import puppeteer from 'puppeteer';

const URL = 'http://www.lapresse.ca/actualites/justice-et-faits-divers/faits-divers/201804/25/01-5162360-vol-de-20-000-caisses-de-biere-11-000-retrouvees-a-montreal.php';

async function main() {
    let browser = await puppeteer.launch();
    let page = await browser.newPage();

    await page.goto(URL, {
        timeout: 15 * 1000,
        waitUntil: ['domcontentloaded', 'networkidle2']
    });
    let html = await page.evaluate(() => new XMLSerializer().serializeToString(document));
    console.log(html);

    await browser.close();
}

main();
