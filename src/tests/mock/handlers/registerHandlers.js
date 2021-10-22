import { Response } from 'miragejs';

export default function registerHandlers (server) {
  server.config({
    routes() {
      this.post('/register', () => {
        return new Response(201, {}, {});
      });
    }
  })
}