import { makeServer } from "../../../mock";
import { Response } from "miragejs";

describe("Sign Up UI Interactions", () => {
  before(() => {
    cy.visit("/signup");
  });

  it("shows Sign Up button", () => {
    cy.get("[data-testid=sign-up-form]").should("exist");
  });
});

describe("Sign Up Validations", () => {
  beforeEach(() => {
    cy.visit("/signup");
  });

  it("requires all form fields", () => {
    cy.get("[data-testid=sign-up-btn]").click();
    cy.get("[data-testid=sign-up-form]")
      .contains(/name.*required/i)
      .should("exist");
    cy.get("[data-testid=sign-up-form]")
      .contains(/company name.*required/i)
      .should("exist");
    cy.get("[data-testid=sign-up-form]")
      .contains(/email.*required/i)
      .should("exist");
    cy.get("[data-testid=sign-up-form]")
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
        input: "John",
        error: true,
      },
      {
        input: "John",
        error: true,
      },
      {
        input: "-John Doe",
        error: true,
      },
      {
        input: "John Doe",
        error: false,
      },
      {
        input: "John F. Doe",
        error: false,
      },
    ];

    for (let i = 0; i < names.length; i++) {
      cy.get("#name").clear().type(names[i].input);
      cy.get("[data-testid=sign-up-btn]").click();
      cy.contains(/full name.*valid/i).should(
        names[i].error ? "exist" : "not.exist"
      );
    }
  });

  it("requires a valid company name that matches pattern", () => {
    const companyNames = [
      {
        input: "abc?",
        error: true,
      },
      {
        input: "J@xyz",
        error: true,
      },
      {
        input: "A(B)",
        error: true,
      },
      {
        input: "-ABC Company",
        error: true,
      },
      {
        input: "ABC Corporation",
        error: false,
      },
      {
        input: "XYZ-101",
        error: false,
      },
      {
        input: "P.Q's Company",
        error: false,
      },
      {
        input: "   ABC Corp.   ",
        error: false,
      },
    ];

    for (let i = 0; i < companyNames.length; i++) {
      cy.get("#company_name").clear().type(companyNames[i].input);
      cy.get("[data-testid=sign-up-btn]").click();
      cy.contains(/company name.*valid/i).should(
        companyNames[i].error ? "exist" : "not.exist"
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
    // const passRE = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/;
    const passwords = [
      // {
      //   input: "abc12345",
      //   get error() {
      //     return !passRE.test(this.input);
      //   },
      // },
      {
        input: "abc12345",
        error: true,
      },
      {
        input: "ABCabc1278",
        error: true,
      },
      {
        input: "Ab##mansja",
        error: true,
      },
      {
        input: "Aa1bcde=",
        error: true,
      },
      {
        input: "Aa1@abcd",
        error: false,
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
    cy.visit("/signup");

    cy.get("#name").type("John Doe");
    cy.get("#company_name").type("Example Company");
    cy.get("#email").type("john@example.com");
    cy.get("#password").type("Random@abc#123");
    cy.get("[data-testid=sign-up-btn]").click();

    cy.url().should("contain", "/email_verification");
  });

  it("fails sign up due to server error", () => {
    // mirage response with 500 error
    server.post("/register", () => {
      return new Response(500, {}, {});
    });

    cy.visit("/signup");

    cy.get("#name").type("John Doe");
    cy.get("#company_name").type("Example Company");
    cy.get("#email").type("john@example.com");
    cy.get("#password").type("John#Doe#123");
    cy.get("[data-testid=sign-up-btn]").click();

    cy.get("[data-testid=form-error-summary]").should("exist");
  });
});
