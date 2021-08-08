import * as yup from "yup";

const MailerSchema = yup.object().shape({
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  email: yup.string().email().required(),
  contact_no: yup.string().nullable(),
});

export default MailerSchema;
