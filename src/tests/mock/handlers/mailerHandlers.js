import {Response} from 'miragejs';

export default function mailerHandlers(server) {
  server.config({
    routes() {
      this.post('/subscribers', () => {
        return new Response(201, {}, { subscribe_date: '2021-12-27T06:42:59.356Z'});
      });
    },
  });
}
