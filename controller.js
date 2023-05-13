const fs = require("fs");

exports.homeController = (req, res) => {
  /*
  //generate error
  const error = new Error("<h1>Bad request</h1>");
  error.status = 500;
  throw error;
  */
  fs.readFile("./pages/index.html", (err, data) => {
    if (err) {
      console.log("error is happening", err);
      res.send("<p>something is going wrong</p>");
    } else {
      res.write(data);
      res.end();
    }
  });
};

exports.aboutController = (req, res) => {
  res.send("Hey, I'm from about page...");
};

exports.helpController = (req, res) => {
  res.send("Need help? I'm from help page");
};
