const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

/** middle ware */
app.use(cors());
app.use(express.json());

/**api operation */
const run = async () => {
  try {
  } finally {
    /** nothing to happen here */
  }
};
run().catch(console.dir);
app.get("/", (req, res) => {
  res.send("server e mutamuti vab ayce 🤠");
});
app.listen(port, () => {
  console.log(port, "port running");
});
