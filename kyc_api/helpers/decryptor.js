const cs = require("crypto-simple");

exports.decrypt = async encryptedText => {
  cs.key = Buffer.from(process.env.KEY, "hex");
  const decryptedText = await cs.decrypt(encryptedText);
  return decryptedText;
};
