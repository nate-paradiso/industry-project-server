const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.static("./public"));

// Allow JSON to be sent/received
app.use(express.json());

require("dotenv").config();
const PORT = process.env.PORT || 8088;
const FRONTEND_URL = process.env.FRONTEND_URL;
app.use(cors({ origin: FRONTEND_URL }));

const genreRoute = require("./Routes/genres");
app.use("/genre", genreRoute);

app.listen(PORT, () => {
  console.log(`API live on port ${PORT}`);
});
