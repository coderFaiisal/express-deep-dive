const express = require("express");
const app = require("./routes");
const cors = require("cors");
const port = process.env.PORT || 5000;
app.use(cors());

//using app static
app.use(express.static("./public"));

//handling global error
app.use((req, res, next) => {
  const error = new Error("<h1>404 Not Found</h1>");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  console.log("error", error);
  if (error.status) {
    return res.status(error.status).send(error.message);
  } else {
    res.status(500).send("Something went wrong");
  }
});

//listening server
app.listen(port, () => {
  console.log(`server is listening on ${port}`);
});
