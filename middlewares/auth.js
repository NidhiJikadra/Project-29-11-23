const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  let { token } = req.cookies;
  let data = jwt.verify(token, "token");
  if (data) {
    req.user = data;
    next();
  } else {
    res.render("login");
  }
};

const verifyAdmin = (req, res, next) => {
  let { token } = req.cookies;
  let data = jwt.verify(token, "token");
  if (data) {
    if (data.role == "Admin") {
      req.user = data;
      next();
    }
  } else {
    res.render("login");
  }
};

module.exports = { verifyToken, verifyAdmin };
