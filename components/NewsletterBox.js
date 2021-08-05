import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

import Message from "./Message";

export default function NewsletterBox() {
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
    <div className="border p-8">
      <h1 className="text-3xl font-bold text-gray-700 mb-4">
        Subscribe to the Newsletter
      </h1>
      <p className="text-gray-700 my-4">
        Get emails about updates and articles relating to the product.
      </p>

      <form onSubmit={subscribe} className="flex items-center mb-4">
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-72 mr-4 text-gray-700 border py-2 px-4 rounded-lg focus:outline-none"
        />
        <button
          disabled={loading}
          type="submit"
          className="flex justify-center items-center w-24 bg-red-400 text-white text-sm font-bold py-2 px-4 rounded-lg hover:bg-red-500"
        >
          {!loading && <span>Subscribe</span>}
          {loading && <ClipLoader color="#fff" loading={true} size={20} />}
        </button>
      </form>

      <Message className="ml-1" type={message.status} text={message.text} />
    </div>
  );
}
