const mailchimp = require("@mailchimp/mailchimp_marketing");

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX,
});

export default async function handler(req, res) {
  const method = req.method;

  switch (method) {
    case "POST":
      const { email } = req.body;

      if (!email || email.trim().length === 0) {
        return res
          .status(400)
          .json({ status: "error", text: "Email address is required" });
      }

      try {
        await mailchimp.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID, {
          email_address: email,
          status: "subscribed",
        });

        res.status(200).json({
          status: "success",
          text: "You are successfully subscribed to the newsletter",
        });
      } catch (error) {
        console.log(error.response.text);
        res.status(500).json({
          status: "error",
          text: "There was an error in processing your request",
        });
      }

      break;

    default:
      res.status(405).json({ status: "error", text: "Method Not Allowed" });
      break;
  }
}
