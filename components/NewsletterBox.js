import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ClipLoader from "react-spinners/ClipLoader";

import Message from "./Message";

let schema = yup.object().shape({
  fullname: yup.string().required(),
  contact: yup.number().required(),
  email: yup.string().email().required(),
});

export default function NewsletterBox() {
  const [message, setMessage] = useState({});
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const subscribe = async (fields) => {
    clearErrors();

    setLoading(true);
    setMessage({});

    const response = await fetch("/api/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: fields.email }),
    });

    const data = await response.json();

    if (data.status === "success") {
      reset({}, { keepErrors: true });
      setMessage(data);
    } else {
      setError("serverError", {
        type: data.status,
        message: data.text,
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

      <form onSubmit={handleSubmit(subscribe)} className="flex flex-col mb-4">
        <input
          type="text"
          name="fullname"
          placeholder="Enter Full Name"
          {...register("fullname")}
          className="mt-2 mb-1 mr-4 text-gray-700 border py-2 px-4 rounded-lg focus:outline-none"
        />
        <p className="text-red-400 text-sm font-bold">
          {errors.fullname?.message}
        </p>

        <input
          type="text"
          name="contact"
          placeholder="Enter Contact No."
          {...register("contact")}
          className="mt-2 mb-1 mr-4 text-gray-700 border py-2 px-4 rounded-lg focus:outline-none"
        />
        <p className="text-red-400 text-sm font-bold">
          {errors.contact?.message}
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
      {message && (
        <Message
          className="ml-1"
          type={message.status}
          message={message.text}
        />
      )}
    </div>
  );
}
