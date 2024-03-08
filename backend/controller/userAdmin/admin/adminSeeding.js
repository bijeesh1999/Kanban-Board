const mongoose = require("mongoose");
const admin = require("../../../dataBase/model/adminSchema");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

mongoose
  .connect(
    "mongodb+srv://bijeeshbstackup:bijeesh1999@cluster0.8roueeq.mongodb.net/",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("connected");
  })
  .catch((error) => {
    console.log(error);
  });

const superAdmin = [
  {
    userName: "Bijeesh.B",
    emailId: "absbijeesh@gmail.com",
    password: "bijeesh@1999",
    role:"admin"
  },
];

const adminRegister = async () => {
  const { email } = superAdmin[0].emailId;

  const hashPass = await bcrypt.hash(superAdmin[0].password, 12);
  const superAdminRegister = {
    userName: superAdmin[0].userName,
    emailId: superAdmin[0].emailId,
    role:superAdmin[0].role,
    password: hashPass,
  };
  await admin.deleteMany({});
  await admin.insertMany(superAdminRegister);
  const token = jwt.sign(
    { id: admin._id, email },
    "B2I2J2E2E2S2H2B2I2J2U2A2N2I2T2H2A2",
    { expiresIn: "10h" }
  );
  (admin.token = token), (admin.password = undefined);
};

adminRegister().then(() => {
  mongoose.connection.close();
});
