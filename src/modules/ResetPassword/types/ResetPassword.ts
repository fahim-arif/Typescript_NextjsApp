export interface ForgotPasswordType {
  email: string;
}

export interface ResetPasswordCreate {
  newPassword: string;
  repeatPassword: string;
}

export interface TicketWithUser {
  id: string;
  user: {
    name: string;
    email: string;
  };
}
