import * as yup from "yup";

import { commonPasswordSet } from "@common/utils/10k-most-common";

const SignUpSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required()
    .min(2)
    .max(255)
    .matches(
      /^[a-zA-z]+[a-zA-Z.'-]*(?: [a-zA-Z.'-]+)+/,
      "full name must be valid"
    )
    .label("full name"),
  company_name: yup
    .string()
    .trim()
    .required()
    .min(1)
    .max(255)
    .matches(/^[a-zA-z0-9]+[a-zA-Z0-9 .'-]*$/, "company name must be valid")
    .label("company name"),
  email: yup
    .string()
    .trim().
    required()
    .max(320)
    .email()
    .label("email"),
  password: yup
    .string()
    .required()
    .min(8)
    .max(255)
    .test({
      name: "name match",
      exclusive: false,
      params: {},
      message: "password must not contain value of name field",
      test: function (value) {
        if (!this.parent.name) return true;
        let re = new RegExp("^(?!.*" + this.parent.name + ").*$", "gi");
        return re.test(value);
      },
    })
    .test({
      name: "email first part match",
      exclusive: false,
      params: {},
      message:
        "password must not contain first part of email field - firstpart@example.com",
      test: function (value) {
        if (!this.parent.email) return true;
        const emailFirstPart = this.parent.email.split("@")[0];
        let re = new RegExp("^(?!.*" + emailFirstPart + ").*$", "gi");
        return re.test(value);
      },
    })
    .matches(
      /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
      "password must contain at least one lowercase, one uppercase, one number, one special character (e.g. !@#$%^&*)"
    )
    .test({
      name: "common word",
      exclusive: false,
      params: {},
      message: "password must not be a common word",
      test: function (value) {
        return !commonPasswordSet.has(value);
      },
    })
    .label("password"),
  receive_notifications: yup
    .boolean()
    .required(),
});

export default SignUpSchema;
