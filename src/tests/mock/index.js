import {createServer} from 'miragejs';
import mailerHandlers from './handlers/mailerHandlers';
import registerHandlers from './handlers/registerHandlers';

export function makeServer({environment = 'development'} = {}) {
  let server = createServer({
    environment,

    routes() {
      this.urlPrefix = 'http://localhost:5000';

      this.passthrough();
      this.passthrough((request) => {
        if (request.url.startsWith('/_next/')) return true;
      });
    },
  });

  mailerHandlers(server);
  registerHandlers(server);

  return server;
}
