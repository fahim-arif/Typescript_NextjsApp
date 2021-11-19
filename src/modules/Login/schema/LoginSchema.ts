import * as yup from "yup";

const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .required()
    .max(320)
    .email()
    .label("email")
});

export default LoginSchema;
