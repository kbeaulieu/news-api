import { bootstrap } from './context/bootstrap';
import { startServer } from './http/server';

bootstrap().then(ioc => {
    startServer(ioc);
});
