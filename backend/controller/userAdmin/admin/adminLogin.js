const admin = require("../../../dataBase/model/adminSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const adminLogin = async (req, res) => {
  try {
    console.log(req.body);
    const { ...data } = await req.body;
    const emailId = data.emailId;
    if (!data) {
      res.status(201).json("some fields are mandatory");
    } else {
      const singleAdmin = await admin.findOne({ emailId });
      if (singleAdmin) {
        adminPassword = await bcrypt.compare(
          data.password,
          singleAdmin.password
        );
        // console.log(adminPassword);
        if (!adminPassword) {
          res.status(201).json("Password is incorrect");
          return;
        } else {
          const token = await jwt.sign(
            { id: singleAdmin._id, emailId },
            process.env.MY_SECRET_KEY,
            { expiresIn: "10h" }
          );
          console.log(token);
          singleAdmin.token = token;
          singleAdmin.password = undefined;
          const options = {
            expires: new Date(Date.now() + 10 * 60 * 60 * 1000),
            httpOnly: false,
          }
          res.status(200).cookie("token",token, options)
          .cookie("id", singleAdmin._id.toString(), options)
          .cookie("role",singleAdmin.role)
          .json({
            success: true,
            options,
            singleAdmin
        });
        }
      } else {
        res.status(201).json("admin Login Failed");
      }
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { adminLogin };