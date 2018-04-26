import { Container } from 'inversify';
import { Scraper } from '../application/scraper';

export function bindApplication(container: Container) {
    container.bind<Scraper>('Scraper').to(Scraper);
}
