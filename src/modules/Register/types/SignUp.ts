export interface SignUpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface UserCreate {
  name: string;
  company_name: string;
  email: string;
  password: string;
  receive_notifications: boolean;
}

export interface UserGet {}
