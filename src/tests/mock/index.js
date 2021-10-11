import { createServer, Model } from "miragejs";
import mailerHandlers from "./handlers/mailerHandlers";
import authHandlers from "./handlers/authHandlers";

export function makeServer({ environment = "development" } = {}) {
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
      this.urlPrefix = "http://localhost:5000";

      // this.get("/users", (schema) => {
      //   return schema.all("users");
      // });

      this.passthrough();
      this.passthrough((request) => {
        if (request.url === "/_next/static/development/_devPagesManifest.json")
          return true;
      });
    },
  });

  mailerHandlers(server);
  authHandlers(server);

  return server;
}
