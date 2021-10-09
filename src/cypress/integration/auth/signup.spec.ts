import { makeServer } from "../../../common/mock";
import { Response } from "miragejs";

describe("Sign Up UI Interactions", () => {
  before(() => {
    cy.visit("/");
  });

  it("shows Sign Up button", () => {
    cy.get("[data-testid=signup]").contains(/sign up/i);
  });

  it("does not show sign up modal initially", () => {
    cy.get("[data-testid=sign-up-modal]").should("not.exist");
  });

  it("opens modal on clicking Sign Up button", () => {
    cy.get("[data-testid=signup]").click();
    cy.get("[data-testid=sign-up-modal]").should("exist");
  });
});

describe("Sign Up Validations", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("[data-testid=signup]").click();
  });

  it("requires all form fields", () => {
    cy.get("[data-testid=sign-up-btn]").click();
    cy.get("[data-testid=sign-up-modal]")
      .get("form")
      .contains(/sign up/i)
      .click();
    cy.get("[data-testid=sign-up-modal]")
      .contains(/name.*required/i)
      .should("exist");
    cy.get("[data-testid=sign-up-modal]")
      .contains(/company name.*required/i)
      .should("exist");
    cy.get("[data-testid=sign-up-modal]")
      .contains(/email.*required/i)
      .should("exist");
    cy.get("[data-testid=sign-up-modal]")
      .contains(/password.*required/i)
      .should("exist");
  });

  it("requires minimum of 2 characters for name", () => {
    cy.get("#name").type("a");
    cy.get("[data-testid=sign-up-btn]").click();
    cy.contains(/name.*at least 2 characters/i).should("exist");

    cy.get("#name").clear().type("ab");
    cy.get("[data-testid=sign-up-btn]").click();
    cy.contains(/name.*at least 2 characters/i).should("not.exist");
  });

  it("requires a valid name that matches pattern", () => {
    const names = [
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

    for (let i = 0; i < names.length; i++) {
      cy.get("#name").clear().type(names[i].input);
      cy.get("[data-testid=sign-up-btn]").click();
      cy.contains(/name.*valid name/i).should(
        names[i].error ? "exist" : "not.exist"
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
      cy.get("#email").clear().type(emails[i].input);
      cy.get("[data-testid=sign-up-btn]").click();
      cy.contains(/email.*valid email/i).should(
        emails[i].error ? "exist" : "not.exist"
      );
    }
  });

  it("requires a password with minumum 8 characters", () => {
    cy.get("#password").clear().type("1234567");
    cy.get("[data-testid=sign-up-btn]").click();
    cy.contains(/password.*at least 8 characters/i).should("exist");

    cy.get("#password").clear().type("12345678");
    cy.get("[data-testid=sign-up-btn]").click();
    cy.contains(/password.*at least 8 characters/i).should("not.exist");
  });

  it("requires a valid password", () => {
    const passRE = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])/;
    const passwords = [
      {
        input: "abc12345",
        get error() {
          return !passRE.test(this.input);
        },
      },
      {
        input: "ABCabc1278",
        get error() {
          return !passRE.test(this.input);
        },
      },
      {
        input: "Ab##mansja",
        get error() {
          return !passRE.test(this.input);
        },
      },
      {
        input: "Aa1@abcd",
        get error() {
          return !passRE.test(this.input);
        },
      },
    ];

    for (let pass of passwords) {
      cy.get("#password").clear().type(pass.input);
      cy.get("[data-testid=sign-up-btn]").click();
      cy.contains(/password must contain/i).should(
        pass.error ? "exist" : "not.exist"
      );
    }
  });
});

describe("Sign Up Network Requests", () => {
  let server: any;

  beforeEach(() => {
    server = makeServer({ environment: "test" });
  });

  afterEach(() => {
    server.shutdown();
  });

  it("successfully signs up user", () => {
    cy.visit("/");
    cy.get("[data-testid=signup]").click();

    cy.get("#name").type("John Doe");
    cy.get("#company_name").type("Example Company");
    cy.get("#email").type("john@example.com");
    cy.get("#password").type("John#Doe#123");
    cy.get("[data-testid=sign-up-btn]").click();

    cy.url().should("contain", "/email_verification");
  });

  it("fails sign up due to server error", () => {
    // mirage response with 500 error
    server.post("/auth", () => {
      return new Response(500, {}, {});
    });

    cy.visit("/");
    cy.get("[data-testid=signup]").click();

    cy.get("#name").type("John Doe");
    cy.get("#company_name").type("Example Company");
    cy.get("#email").type("john@example.com");
    cy.get("#password").type("John#Doe#123");
    cy.get("[data-testid=sign-up-btn]").click();

    cy.get("[data-testid=form-error-summary]").should("exist");
  });
});
