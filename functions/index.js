
const functions=require("firebase-functions");
const express = require("express");
const cors=require("cors");
const stripe = require("stripe")(
    "sk_test_51O0rPQKuvv7WFEVYkg8enBxWpHxmrHnnB77AiP9ZN9"+
    "vi8pEfl76w90KOetpDYgtc2ZvZgsvflbrsgcBkOhJPHm3p004oo3ynDP",
);
const app = express();
app.use(express.json());
const corsOptions = {
  origin: "https://abels-c674c.web.app",
  credentials: true,
  optionsSuccessStatus: 200, // Corrected property name
};

app.use(cors(corsOptions));


app.get("/", (request, response) => response.status(200).send("hello world"));
app.post("/payments/create", cors(corsOptions), async (request, response) => {
  const total = request.query.total;
  console.log("Payment ", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",

  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
exports.api = functions.https.onRequest(app);
