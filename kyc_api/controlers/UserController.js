const { encrypt } = require("../helpers/encryptor");
const { decrypt } = require("../helpers/decryptor");

exports.addKycData = async (req, res) => {
  try {
    const { name, bdate, email, address, country, pin, mobile, idType, idNumber, kycId } = req.body;

    const encName = await encrypt(name);
    const encBdate = await encrypt(bdate);
    const encEmail = await encrypt(email);
    const encAddress = await encrypt(address);
    const encCountry = await encrypt(country);
    const encPin = await encrypt(pin);
    const encMobile = await encrypt(mobile);
    const encIdType = await encrypt(idType);
    const encIdNumber = await encrypt(idNumber);
    const encKycId = await encrypt(kycId);

    const data = {
      name: encName,
      bdate: encBdate,
      email: encEmail,
      address: encAddress,
      country: encCountry,
      pin: encPin,
      mobile: encMobile,
      idType: encIdType,
      idNumber: encIdNumber,
      kycId: encKycId
    };
    return res.status(200).json({ msg: "Encryption successfull", data });
  } catch (err) {
    return res.status(500).json({ err: err, msg: "Something Went Wrong" });
  }
};

exports.getKycData = async (req, res) => {
  try {
    const { name, bdate, email, address, country, pin, mobile, idType, idNumber, kycId } = req.body;

    const decName = await decrypt(name);
    const decBdate = await decrypt(bdate);
    const decEmail = await decrypt(email);
    const decAddress = await decrypt(address);
    const decCountry = await decrypt(country);
    const decPin = await decrypt(pin);
    const decMobile = await decrypt(mobile);
    const decIdType = await decrypt(idType);
    const decIdNumber = await decrypt(idNumber);
    const decKycId = await decrypt(kycId);

    const data = {
      name: decName,
      bdate: decBdate,
      email: decEmail,
      address: decAddress,
      country: decCountry,
      pin: decPin,
      mobile: decMobile,
      idType: decIdType,
      idNumber: decIdNumber,
      kycId: decKycId
    };
    return res.status(200).json({ msg: "Decryption successfull", data });
  } catch (err) {
    return res.status(500).json({ err: err, msg: "Something Went Wrong" });
  }
};
