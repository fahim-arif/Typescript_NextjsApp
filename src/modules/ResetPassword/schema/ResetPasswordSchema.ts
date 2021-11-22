import { commonPasswordSet } from "@root/common/utils/10k-most-common";
import * as yup from "yup";

const ResetPasswordSchema = yup.object().shape({
  newPassword: yup
    .string()
    .required()
    .min(8)
    .max(255)
    .test({
      name: "name match",
      exclusive: false,
      params: {},
      message: "password must not contain value of name field",
      test: function (value) {
        if (!this.options.context.name) return true;
        let re = new RegExp("^(?!.*" + this.options.context.name + ").*$", "gi");
        return re.test(value);
      },
    })
    .test({
      name: "email first part match",
      exclusive: false,
      params: {},
      message:
        "password must not contain first part of email field - firstpart@example.com",
      test: function (value) {
        if (!this.options.context.email) return true;
        const emailFirstPart = this.options.context.email.split("@")[0];
        let re = new RegExp("^(?!.*" + emailFirstPart + ").*$", "gi");
        return re.test(value);
      },
    })
    .matches(
      /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
      "password must contain at least one lowercase, one uppercase, one number, one special character (e.g. !@#$%^&*)"
    )
    .test({
      name: "common word",
      exclusive: false,
      params: {},
      message: "password must not be a common word",
      test: function (value) {
        return !commonPasswordSet.has(value);
      },
    })
    .label("new password"),
  repeatPassword: yup
    .string()
    .required()
    .test('passwords-match', 'Repeat password does not match with password', function(value){
      return this.parent.newPassword === value
    })
});

export default ResetPasswordSchema;
