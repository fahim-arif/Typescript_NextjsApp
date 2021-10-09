import * as yup from "yup";

const SignUpSchema = yup.object().shape({
  name: yup
    .string()
    .required()
    .min(2)
    .max(255)
    .matches(/^[a-zA-Z .'-]+$/, "name must be a valid name")
    .label("name"),
  company_name: yup.string().required().min(1).max(255).label("company name"),
  email: yup.string().required().max(320).email().label("email"),
  password: yup
    .string()
    .required()
    .min(8)
    .max(255)
    .matches(
      /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])/,
      "password must contain at least one lowercase, one uppercase, one number, one special character"
    )
    .label("password"),
});

export default SignUpSchema;
