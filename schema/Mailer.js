import * as yup from "yup";

let MailerSchema = yup.object().shape({
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  email: yup.string().email().required(),
  contact_no: yup.string().required(),
});

export default MailerSchema;
