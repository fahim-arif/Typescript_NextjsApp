import { makeServer } from "../../../mock";
import { Response } from "miragejs";

describe("Mailer UI Interactions", () => {
  before(() => {
    cy.visit("/");
  });

  it("shows mailer form", () => {
    cy.get("[data-testid=mailer-form]").should("exist");
  });
});

describe("Mailer Validations", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("requires all form fields", () => {
    cy.get("[data-testid=subscribe-btn]").click();
    cy.contains(/first name.*required/i).should("exist");
    cy.contains(/last name.*required/i).should("exist");
    cy.contains(/email.*required/i).should("exist");
  });

  it("requires minimum of 2 characters for first name", () => {
    cy.get("#first_name").type("a");
    cy.get("[data-testid=subscribe-btn]").click();
    cy.contains(/first name.*at least 2 characters/i).should("exist");

    cy.get("#first_name").clear().type("ab");
    cy.get("[data-testid=subscribe-btn]").click();
    cy.contains(/first name.*at least 2 characters/i).should("not.exist");
  });

  it("requires a valid first name that matches pattern", () => {
    const firstNames = [
      {
        input: "abc?",
        error: true,
      },
      {
        input: "J@xyz",
        error: true,
      },
      {
        input: "John Doe",
        error: false,
      },
    ];

    for (let name of firstNames) {
      cy.get("#first_name").clear().type(name.input);
      cy.get("[data-testid=subscribe-btn]").click();
      cy.contains(/first name.*valid name/i).should(
        name.error ? "exist" : "not.exist"
      );
    }
  });

  it("requires a valid last name that matches pattern", () => {
    const lastNames = [
      {
        input: "abc?",
        error: true,
      },
      {
        input: "J@xyz",
        error: true,
      },
      {
        input: "John Doe",
        error: false,
      },
    ];

    for (let name of lastNames) {
      cy.get("#last_name").clear().type(name.input);
      cy.get("[data-testid=subscribe-btn]").click();
      cy.contains(/last name.*valid name/i).should(
        name.error ? "exist" : "not.exist"
      );
    }
  });

  it("requires a valid email", () => {
    const emails = [
      {
        input: "@xyz.com",
        error: true,
      },
      {
        input: "abc@.xy",
        error: true,
      },
      {
        input: "john@xyz.com",
        error: false,
      },
    ];

    for (let i = 0; i < emails.length; i++) {
      cy.get("#subscriber_email").clear().type(emails[i].input);
      cy.get("[data-testid=subscribe-btn]").click();
      cy.contains(/email.*valid email/i).should(
        emails[i].error ? "exist" : "not.exist"
      );
    }
  });

  it("does not require a contact number", () => {
    cy.get("[data-testid=subscribe-btn]").click();
    cy.contains(/contact number.*required/i).should("not.exist");
  });

  it("requires a contact number with min 10, max 15 characters", () => {
    cy.get("#contact_no").clear().type("1234567");
    cy.get("[data-testid=subscribe-btn]").click();
    cy.contains(/contact number.*at least 10/i).should("exist");

    cy.get("#contact_no").clear().type("1234528288288828267");
    cy.get("[data-testid=subscribe-btn]").click();
    cy.contains(/contact number.*at most 15/i).should("exist");
  });

  it("requires a valid contact number", () => {
    const contactNumberRE = /^\+[0-9]{1,14}$/;
    const contactNumbers = [
      {
        input: "abc123456789",
        get error() {
          return !contactNumberRE.test(this.input);
        },
      },
      {
        input: "ABCabc12818",
        get error() {
          return !contactNumberRE.test(this.input);
        },
      },
      {
        input: "#0011928189",
        get error() {
          return !contactNumberRE.test(this.input);
        },
      },
      {
        input: "+1234567891",
        get error() {
          return !contactNumberRE.test(this.input);
        },
      },
    ];

    for (let num of contactNumbers) {
      cy.get("#contact_no").clear().type(num.input);
      cy.get("[data-testid=subscribe-btn]").click();
      cy.contains(/contact number.*valid/i).should(
        num.error ? "exist" : "not.exist"
      );
    }
  });
});

describe("Mailer Network Requests", () => {
  let server: any;

  beforeEach(() => {
    server = makeServer({ environment: "test" });
  });

  afterEach(() => {
    server.shutdown();
  });

  it("successfully subscribes user to newsletter", () => {
    cy.visit("/");

    cy.get("#first_name").type("John");
    cy.get("#last_name").type("Doe");
    cy.get("#subscriber_email").type("john@example.com");
    cy.get("[data-testid=subscribe-btn]").click();

    cy.get("[data-testid=success-msg]").should(
      "contain",
      "You've subscribed to the newsletter successfully"
    );
  });

  it("fails sign up due to server error", () => {
    // mirage response with 500 error
    server.post("/subscribers", () => {
      return new Response(500, {}, {});
    });

    cy.visit("/");

    cy.get("#first_name").type("John");
    cy.get("#last_name").type("Doe");
    cy.get("#subscriber_email").type("john@example.com");
    cy.get("[data-testid=subscribe-btn]").click();

    cy.get("[data-testid=form-error-summary]").should("exist");
  });
});
