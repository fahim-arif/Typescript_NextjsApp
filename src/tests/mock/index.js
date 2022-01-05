import {createServer, Model} from 'miragejs';
import mailerHandlers from './handlers/mailerHandlers';
import registerHandlers from './handlers/registerHandlers';

export function makeServer({environment = 'development'} = {}) {
  let server = createServer({
    environment,

    // models: {
    //   user: Model,
    // },

    // seeds(server) {
    //   server.create("user", { name: "Bob" });
    //   server.create("user", { name: "Alice" });
    //   server.create("user", { name: "abc" });
    // },

    routes() {
      this.urlPrefix = 'http://localhost:5000';

      // this.get("/users", (schema) => {
      //   return schema.all("users");
      // });

      this.passthrough();
      this.passthrough((request) => {
        if (request.url === '/_next/static/development/_devPagesManifest.json')
          return true;
        if (request.url === '/_next/static/css/597ef3d539d5d76a7668.css')
          return true;
        if (request.url === '/_next/data/vXXG0PtQrP-TMG2KjpECh/about.json')
          return true;
      });
    },
  });

  mailerHandlers(server);
  registerHandlers(server);

  return server;
}
