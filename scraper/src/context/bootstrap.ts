import { Container } from 'inversify';
import 'reflect-metadata';
import { bindApplication } from './application';
import { createContainer } from './container';

export function bootstrap(): Promise<Container> {
    return Promise.all([
        import('./http')
    ]).then(() => {
        let container = createContainer();

        bindApplication(container);

        return container;
    });
}
