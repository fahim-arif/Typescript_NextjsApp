import * as yup from "yup";

const MailerSchema = yup.object().shape(
  {
    first_name: yup
      .string()
      .required()
      .min(2)
      .max(255)
      .matches(/^[a-zA-Z .'-]+$/, "first name must be a valid name")
      .label("first name"),
    last_name: yup
      .string()
      .required()
      .min(1)
      .max(255)
      .matches(/^[a-zA-Z .'-]+$/, "last name must be a valid name")
      .label("last name"),
    email: yup
      .string()
      .required()
      .email()
      .max(320)
      .label("email"),
    contact_no: yup
      .string()
      .nullable()
      .notRequired()
      .when("contact_no", {
        is: (value: string) => value?.length,
        then: (rule) =>
          rule
            .min(10)
            .max(15)
            .matches(
              /^\+[0-9]{1,14}$/,
              "contact number must be of valid format +[country-code][number]"
            )
            .label("contact number"),
      }),
  },
  [
    // Cyclic dependency
    ["contact_no", "contact_no"],
  ]
);

export default MailerSchema;
