export interface SubscriberCreate {
  email: string;
  first_name: string;
  last_name: string;
  contact_no?: string | null;
}

export interface SubscriberGet extends SubscriberCreate {
  id: string;
  subscribe_date: Date;
  unsubscribe_date?: Date | null;
}
