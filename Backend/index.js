const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : true}))

app.use(cors({ origin: "*" }));


 
// mongodb+srv://ahita:<password>@cluster0.md1ps2w.mongodb.net/?retryWrites=true&w=majority
mongoose
  .connect(
  "mongodb://localhost:27017"
    )
  .then(() => {
    console.log("Ahita don's worry it's connected to the database successfully haha");
  })
  .catch((err) => {
    console.log(err);
  });
app.get("/", (req, res) => {
  res.send("hello world haha");
});

app.use("/auth" , require("./routes/auth"));
app.use("/accounts" , require("./routes/accounts"));

app.listen(8000, () => {
  console.log("server started!");
});