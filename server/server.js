const express = require("express");
const app = express();
require("dotenv").config();
const dbConfig = require("./config/dbConfig");

app.use(express.json());
const usersRoute = require("./routes/userRoute");
const examsRoute = require("./routes/examsRoute");

app.use("/api/users", usersRoute);
app.use("/api/exams", examsRoute);

console.log(process.env.MONGO_URL);
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
