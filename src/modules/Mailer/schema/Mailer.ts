import * as yup from "yup";

const MailerSchema = yup.object().shape({
  first_name: yup
    .string()
    .min(2)
    .max(255)
    .required()
    .matches(/^[a-zA-Z .'-]+$/, "first name must be a valid name")
    .label("first name"),
  last_name: yup
    .string()
    .min(1)
    .max(255)
    .required()
    .matches(/^[a-zA-Z .'-]+$/, "last name must be a valid name")
    .label("last name"),
  email: yup
    .string()
    .max(320)
    .required()
    .email()
    .label("email"),
  contact_no: yup
    .string()
    .min(10)
    .max(15)
    .matches(
      /^\+[0-9]{1,14}$/,
      "contact number must be of valid format +[country-code][number]"
    )
    .label("contact number"),
});

export default MailerSchema;