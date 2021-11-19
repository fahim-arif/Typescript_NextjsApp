export interface ForgotPasswordType {
  email: string;
}

export interface ResetPasswordCreate {
  newPassword: string;
  repeatPassword: string;
}
