import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

import Message from "./Message";

export default function NewsletterBox() {
  const [fullname, setFullName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState({});
  const [loading, setLoading] = useState(false);

  const subscribe = async (e) => {
    e.preventDefault();

    setLoading(true);
    setMessage({});

    const response = await fetch("/api/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email }),
    });

    const data = await response.json();
    setMessage(data);

    if (data.status === "success") {
      setEmail("");
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

      <form onSubmit={subscribe} className="flex flex-col space-y-4 mb-4">
        <input
          type="text"
          name="fullname"
          placeholder="Enter Full Name"
          value={fullname}
          onChange={(e) => setFullName(e.target.value)}
          className="mr-4 text-gray-700 border py-2 px-4 rounded-lg focus:outline-none"
        />

        <input
          type="text"
          name="contact"
          placeholder="Enter Contact No."
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          className="mr-4 text-gray-700 border py-2 px-4 rounded-lg focus:outline-none"
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mr-4 text-gray-700 border py-2 px-4 rounded-lg focus:outline-none"
        />

        <button
          disabled={loading}
          type="submit"
          className="self-start flex justify-center items-center bg-red-400 text-white text-base py-1 px-3 rounded hover:bg-red-500"
        >
          {!loading && <span>Subscribe</span>}
          {loading && <ClipLoader color="#fff" loading={true} size={20} />}
        </button>
      </form>

      <Message className="ml-1" type={message.status} text={message.text} />
    </div>
  );
}
