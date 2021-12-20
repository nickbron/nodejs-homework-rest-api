const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const { SENDGRID_API_KEY } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async (data) => {
  const email = { ...data, from: "nick_bron@ukr.net" };
  try {
    await sgMail.send(email);
    return true;
  } catch (error) {
    throw error;
  }
};

// const email = {
//   to: "nickolasbron@gmail.com",
//   from: "nick_bron@ukr.net",
//   subject: "Новая ЗАЯВКА",
//   html: " <p> C сайта пришла новая ЗАЯВКА </p>",
// };

// sgMail
//   .send(email)
//   .then(() => console.log("EMAIL send success"))
//   .catch((error) => console.log(error.message));

module.exports = sendEmail;
