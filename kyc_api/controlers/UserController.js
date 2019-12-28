const { encrypt } = require("../helpers/encryptor");

exports.addKyc = async (req, res) => {
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
