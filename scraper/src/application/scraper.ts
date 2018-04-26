import { injectable } from 'inversify';
import puppeteer, { NavigationOptions } from 'puppeteer';

@injectable()
export class Scraper {
    async scrape(url: string): Promise<string> {
        let browser = await puppeteer.launch();
        let page = await browser.newPage();

        let options: NavigationOptions = {
            timeout: 15 * 1000,
            waitUntil: ['domcontentloaded', 'networkidle2']
        };
        await page.goto(url, options);
        let html = await page.evaluate(() => new XMLSerializer().serializeToString(document));
        await browser.close();

        return html;
    }
}
