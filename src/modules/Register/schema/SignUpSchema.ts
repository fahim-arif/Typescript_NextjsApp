import * as yup from "yup";

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
    .required()
    .min(1)
    .max(255)
    .matches(/^[a-zA-Z0-9 .'-]+$/, "company name must be a valid")
    .label("company name"),
  email: yup
    .string()
    .required()
    .max(320)
    .email()
    .label("email"),
  password: yup
    .string()
    .required()
    .min(8)
    .max(255)
    .matches(
      /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
      "password must contain at least one lowercase, one uppercase, one number, one special character (e.g. !@#$%^&*)"
    )
    .label("password"),
  receive_notifications: yup
    .boolean()
    .required(),
});

export default SignUpSchema;
