import { useState } from "react";

export default function NewsletterBox() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState({});
  const [loading, setLoading] = useState(false);

  const subscribe = async (e) => {
    e.preventDefault();

    setLoading(true);

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

      <form>
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-72 mr-4 text-gray-700 border py-2 px-4 rounded-lg focus:outline-none"
        />
        <button
          onClick={subscribe}
          className="bg-red-400 text-white text-sm font-bold py-2 px-4 rounded-lg"
        >
          Subscribe
        </button>
      </form>

      {message.status === "error" && (
        <p className="my-4 ml-1 text-red-400 text-sm font-bold">
          Error Message
        </p>
      )}
      {message.status === "success" && (
        <p className="my-4 ml-1 text-green-400 text-sm font-bold">
          Success Message
        </p>
      )}
    </div>
  );
}
