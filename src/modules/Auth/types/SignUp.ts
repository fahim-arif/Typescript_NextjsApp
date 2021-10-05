export interface SignUpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface UserCreate {
  email: string;
  password: string;
  store_name: string;
}

export interface UserGet {}
