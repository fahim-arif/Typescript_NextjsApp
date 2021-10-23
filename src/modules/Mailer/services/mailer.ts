import http from "@common/utils/http";
import { SubscriberCreate, SubscriberGet } from "../types/Mailer";

const endpoint = "/subscribers";

const getSubscribers = async (): Promise<SubscriberGet[]> => {
  return http
    .get(endpoint)
    .then((response) => response.data)
    .catch((error) => Promise.reject(error));
};

const getSubscriberById = async (id: string): Promise<SubscriberGet> => {
  return http
    .get(`${endpoint}/${id}`)
    .then((response) => response.data)
    .catch((error) => Promise.reject(error));
};

const createSubscriber = async (subscriberCreate: SubscriberCreate): Promise<SubscriberGet> => {
  return http
    .post(endpoint, { data: subscriberCreate })
    .then((response) => response.data)
    .catch((error) => Promise.reject(error));
};

export { createSubscriber, getSubscribers, getSubscriberById };
