const cs = require("crypto-simple");

exports.encrypt = async text => {
  cs.key = Buffer.from(process.env.KEY, "hex");
  const encryptedText = await cs.encrypt(text);
  return encryptedText;
};
