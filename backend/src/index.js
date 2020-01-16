const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

mongoose.connect(
  "mongodb+srv://omnistack:PqVC4i7xY0kjK5t5@rockseat-f0zcl.mongodb.net/week10?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const app = express();

app.use(express.json());
app.use(routes);



app.listen(3333);
