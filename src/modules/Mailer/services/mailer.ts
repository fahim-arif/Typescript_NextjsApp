import http from "@common/utils/http";
import { SubscriberCreate, SubscriberGet } from "../types/Mailer";

const endpoint = "/subscribers";

const getSubscribers = async (): Promise<SubscriberGet[]> => {
  return http
    .get(endpoint, { headers: { "Content-Type": "application/json" } })
    .then((response) => response.data)
    .catch((error) => Promise.reject(error));
};

const getSubscriberById = async (id: string): Promise<SubscriberGet> => {
  return http
    .get(`${endpoint}/${id}`, { headers: { "Content-Type": "application/json" } })
    .then((response) => response.data)
    .catch((error) => Promise.reject(error));
};

const createSubscriber = async (subscriberCreate: SubscriberCreate): Promise<SubscriberGet> => {
  const { first_name, last_name, email, contact_no } = subscriberCreate;

  return http
    .post(endpoint, {
      headers: { "Content-Type": "application/json" },
      data: JSON.stringify({
        first_name: first_name,
        last_name: last_name,
        email: email,
        contact_no: contact_no.toString(),
      }),
    })
    .then((response) => response.data)
    .catch((error) => Promise.reject(error));
};

export { createSubscriber, getSubscribers, getSubscriberById };
