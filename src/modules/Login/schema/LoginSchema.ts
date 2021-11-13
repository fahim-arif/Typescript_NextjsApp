import * as yup from "yup";

const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .trim()
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
});

export default LoginSchema;
