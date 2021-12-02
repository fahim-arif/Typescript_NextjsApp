import * as yup from "yup";

const EmailSchema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .required()
    .max(320)
    .email()
    .label("email"),
});

export default EmailSchema;
