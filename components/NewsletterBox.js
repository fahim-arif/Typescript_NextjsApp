import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ClipLoader from "react-spinners/ClipLoader";
import { createSubscriber } from "../api/subscribe";
import MailerSchema from "../schema/mailer";
import Message from "./Message";

export default function NewsletterBox() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(MailerSchema),
  });

  const handleSubscribe = async (fields) => {
    clearErrors();
    setLoading(true);
    setMessage("");

    try {
      const subscriber = await createSubscriber(fields);
      console.log("Subscriber created", subscriber);
      reset({}, { keepErrors: true });
      setMessage("You've subscribed to the newsletter successfully");
    } catch (error) {
      console.log(error);
      setError("serverError", {
        type: "error",
        message: error.message,
      });
    }

    setLoading(false);
  };

  return (
    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
      <h1 className="text-xl font-medium text-gray-800 mb-4">
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
          {...register("first_name")}
          className="mt-2 mb-1 mr-4 text-gray-700 border py-2 px-4 rounded-lg focus:outline-none"
        />
        <p className="text-red-400 text-sm font-bold">
          {errors.first_name?.message}
        </p>

        <input
          type="text"
          name="last_name"
          placeholder="Enter Last Name"
          {...register("last_name")}
          className="mt-2 mb-1 mr-4 text-gray-700 border py-2 px-4 rounded-lg focus:outline-none"
        />
        <p className="text-red-400 text-sm font-bold">
          {errors.last_name?.message}
        </p>

        <input
          type="text"
          name="contact_no"
          placeholder="Enter Contact No."
          {...register("contact_no")}
          className="mt-2 mb-1 mr-4 text-gray-700 border py-2 px-4 rounded-lg focus:outline-none"
        />
        <p className="text-red-400 text-sm font-bold">
          {errors.contact_no?.message}
        </p>

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          {...register("email")}
          className="mt-2 mb-1 mr-4 text-gray-700 border py-2 px-4 rounded-lg focus:outline-none"
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

      {errors.serverError && (
        <Message
          className="ml-1"
          type={errors.serverError?.type}
          message={errors.serverError?.message}
        />
      )}
      {message && <Message className="ml-1" type="success" message={message} />}
    </div>
  );
}
