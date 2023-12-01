const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  let { token } = req.cookies;
  if (token) {
    let data = jwt.verify(token, "token");
    if (data) {
      req.user = data;
      next();
    } else {
      res.render("login");
    }
  } else {
    res.send({ msg: "Token not Found" });
  }
};

const verifyAdmin = (req, res, next) => {
  let { token } = req.cookies;
  if (token) {
    let data = jwt.verify(token, "token");
    if (data) {
      if (data.role == "admin") {
        req.user = data;
        next();
      } else {
        res.send("You are not Admin.");
      }
    } else {
      res.render("login");
    }
  } else {
    res.send("Token not Found");
  }
};

module.exports = { verifyToken, verifyAdmin };
