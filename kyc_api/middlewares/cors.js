const cors = require("cors");

const whitelist = ["http://localhost", "http:127.0.0.1:3000"];

const origin = (origin, callback) => {
  if (whitelist.indexOf(origin) !== -1 || !origin) {
    callback(null, true);
  } else {
    callback(new Error("Not allowed by CORS"));
  }
};

const options = { origin };

module.exports = cors(options);
