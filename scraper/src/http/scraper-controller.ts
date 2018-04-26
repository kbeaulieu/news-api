import { Request, Response } from 'express';
import { inject } from 'inversify';
import { controller, httpGet, interfaces } from 'inversify-express-utils';
import { Scraper } from '../application/scraper';

@controller('/scape')
export class ScraperController implements interfaces.Controller {
    constructor(@inject('Scraper') private scraper: Scraper) {
    }

    @httpGet('/:url')
    index(request: Request, response: Response): Promise<string> {
        let url = request.params['url'];
        let decodedUrl = decodeURIComponent(url);
        return this.scraper.scrape(decodedUrl);
    }
}
