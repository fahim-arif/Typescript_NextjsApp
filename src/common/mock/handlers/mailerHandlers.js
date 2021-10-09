import { Response } from 'miragejs';

export default function mailerHandlers (server) {
  server.config({
    routes() {
      this.post('/subscribers', () => {
        // return new Response(404, {}, {});
        return new Response(201, {}, {});
      });
    }
  })
}