import { SubscriberCreate, SubscriberGet } from "../types/Mailer";

const baseUrl: string = `${process.env.NEXT_PUBLIC_SERVER_HOST}/subscribers`;

const getSubscribers = async (): Promise<SubscriberGet[]> => {
  try {
    const response = await fetch(baseUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const subscribers = await response.json();
    return subscribers;
  } catch (error) {
    throw new Error("Error in fetching subscribers");
  }
};

const getSubscriberById = async (id: string): Promise<SubscriberGet> => {
  try {
    const response = await fetch(`${baseUrl}/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const subscriber = await response.json();
    return subscriber;
  } catch (error) {
    throw new Error("No subscriber found with given id");
  }
};

const createSubscriber = async (
  subscriberCreate: SubscriberCreate
): Promise<SubscriberGet> => {
  const { first_name, last_name, email, contact_no } = subscriberCreate;

  try {
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: first_name,
        last_name: last_name,
        email: email,
        contact_no: contact_no.toString(),
      }),
    });

    const subscriber = await response.json();
    return subscriber;
  } catch (error) {
    throw new Error("Subscriber could not be created");
  }
};

export { createSubscriber, getSubscribers, getSubscriberById };
