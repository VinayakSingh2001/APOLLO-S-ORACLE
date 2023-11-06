const express = require("express");
const app = express();
require("dotenv").config();
const dbConfig = require("./config/dbConfig");

console.log(process.env.MONGO_URL);
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
