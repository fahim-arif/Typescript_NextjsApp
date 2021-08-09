import * as http from "../http";
import { SubscriberCreate, SubscriberGet } from "../types/Mailer";

const getSubscribers = async (): Promise<SubscriberGet[]> => {
  return http
    .get("/subscribers", { headers: { "Content-Type": "application/json" } })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return Promise.reject(error);
    });
};

const getSubscriberById = async (id: string): Promise<SubscriberGet> => {
  return http
    .get(`/subscribers/${id}`, {
      headers: { "Content-Type": "application/json" },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return Promise.reject(error);
    });
};

const createSubscriber = async (
  subscriberCreate: SubscriberCreate
): Promise<SubscriberGet> => {
  const { first_name, last_name, email, contact_no } = subscriberCreate;

  return http
    .post("/subscribers", {
      headers: { "Content-Type": "application/json" },
      data: JSON.stringify({
        first_name: first_name,
        last_name: last_name,
        email: email,
        contact_no: contact_no.toString(),
      }),
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return Promise.reject(error);
    });
};

export { createSubscriber, getSubscribers, getSubscriberById };
