import * as yup from "yup";

const SignUpSchema = yup.object().shape({
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
  store_name: yup
    .string()
    .required()
    .min(2)
    .max(255)
    .matches(/^[a-zA-Z .'-]+$/, "store name must be a valid name")
    .label("store name"),
});

export default SignUpSchema;
