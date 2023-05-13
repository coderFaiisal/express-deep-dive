const express = require("express");
const app = express();
const {
  aboutController,
  helpController,
  homeController,
} = require("./controller");
const router = express.Router();
app.use(router);

router.get("/", [localMiddleware1, localMiddleware2], homeController);
router.get("/about", aboutController);
router.get("/help", localMiddleware1, helpController);

// simple custom middleware
function globalMiddlewar(req, res, next) {
  console.log("I'm from global middleware");
  next();
}

function localMiddleware1(req, res, next) {
  console.log("I'm from local middleware");
  next();
}

function localMiddleware2(req, res, next) {
  console.log("I'm from another local middleware");
  next();
}

module.exports = app;
