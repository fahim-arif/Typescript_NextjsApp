import { Response } from 'miragejs';

export default function authHandlers (server) {
  server.config({
    routes() {
      this.post('/auth', () => {
        return new Response(201, {}, {});
      });
    }
  })
}