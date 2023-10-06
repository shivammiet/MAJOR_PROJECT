const express = require("express");
const app = express();
const mongoose = require("mongoose");

const MONGO_URL = "mongodb://localhost:27017/wanderlust";

main().catch((err) => {
  console.error(err);
});

async function main() {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
}

app.get("/", (req, res) => {
  res.send("Hi , I am Shivam");
});

app.listen(8080, () => {
  console.log("Server is listening on port 8080");
});
