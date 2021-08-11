import { useState } from "react";
import { useForm, UseFormRegisterReturn } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { SubscriberCreate, SubscriberGet } from "../types/Mailer";
import MailerSchema from "../schema/Mailer";
import { createSubscriber } from "../services/mailer";

import ClipLoader from "react-spinners/ClipLoader";
import Message from "@common/components/elements/Message";

export default function Mailer() {
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const { register, handleSubmit, reset, formState: { errors }, } = useForm({
    resolver: yupResolver(MailerSchema),
  });

  const handleSubscribe = async (fields: SubscriberCreate) => {
    setLoading(true);
    setMessage("");
    setError("");

    try {
      const subscriber: SubscriberGet = await createSubscriber(fields);
      reset({}, { keepErrors: true });
      setMessage("You've subscribed to the newsletter successfully");
    } catch (error) {
      console.log(error);
      setError(error.message);
    }

    setLoading(false);
  };

  const handleChange = (e: any, fieldName: UseFormRegisterReturn) => {
    fieldName.onChange(e);
    setMessage("");
    setError("");
  };

  const firstName = register("first_name");
  const lastName = register("last_name");
  const contactNo = register("contact_no");
  const email = register("email");

  return (
    <div className="border lg:w-1/3 md:w-1/2 w-full px-4 py-4">
      <h1 className="text-xl font-medium text-gray-800">
        Subscribe to the Newsletter
      </h1>
      <p className="text-gray-700 my-4">
        Get emails about updates and articles relating to the product.
      </p>

      <form
        onSubmit={handleSubmit(handleSubscribe)}
        className="flex flex-col mb-4"
      >
        <input
          type="text"
          name="first_name"
          placeholder="Enter First Name"
          className="mt-2 mb-1 mr-4 text-gray-700 border py-2 px-4 rounded-lg focus:outline-none"
          ref={firstName.ref}
          onChange={(e) => handleChange(e, firstName)}
        />
        <p className="text-red-400 text-sm font-bold">
          {errors.first_name?.message}
        </p>

        <input
          type="text"
          name="last_name"
          placeholder="Enter Last Name"
          className="mt-2 mb-1 mr-4 text-gray-700 border py-2 px-4 rounded-lg focus:outline-none"
          ref={lastName.ref}
          onChange={(e) => handleChange(e, lastName)}
        />
        <p className="text-red-400 text-sm font-bold">
          {errors.last_name?.message}
        </p>

        <input
          type="text"
          name="contact_no"
          placeholder="Enter Contact No."
          className="mt-2 mb-1 mr-4 text-gray-700 border py-2 px-4 rounded-lg focus:outline-none"
          ref={contactNo.ref}
          onChange={(e) => handleChange(e, contactNo)}
        />
        <p className="text-red-400 text-sm font-bold">
          {errors.contact_no?.message}
        </p>

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          className="mt-2 mb-1 mr-4 text-gray-700 border py-2 px-4 rounded-lg focus:outline-none"
          ref={email.ref}
          onChange={(e) => handleChange(e, email)}
        />
        <p className="text-red-400 text-sm font-bold">
          {errors.email?.message}
        </p>

        <button
          disabled={loading}
          type="submit"
          className="w-24 mt-4 self-start flex justify-center items-center bg-red-400 text-white text-base py-1 px-3 rounded hover:bg-red-500"
        >
          {!loading && <span>Subscribe</span>}
          {loading && <ClipLoader color="#fff" loading={true} size={20} />}
        </button>
      </form>

      {error && <Message className="ml-1" type="error" message={error} />}
      {message && <Message className="ml-1" type="success" message={message} />}
    </div>
  );
}
