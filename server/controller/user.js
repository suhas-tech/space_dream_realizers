const User = require("../models/user");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

const smtpEndpoint = "email-smtp.us-east-2.amazonaws.com";

const port = 587;

const senderAddress = "suhas0313@gmail.com";

var toAddresses = "suhas0313@gmail.com";

const smtpUsername = "AKIA3AQCBXPQ2N6J5MW3";

// Replace smtp_password with your Amazon SES SMTP password.
const smtpPassword = "BGILGzyT4ys3b7Kmjwt3S0bdcqOPLlPSm9wZL/lU0VSh";

exports.register = async (req, res) => {
  const { email, password } = req.body;
  const user = new User({ email, password });
  user.save(function (err) {
    if (err) {
      console.log(err);
      res.status(500).send("Error registering new user please try again.");
    } else {
      res.status(200).send("Welcome to the club!");
    }
  });
};

exports.checkToken = async (req, res) => {
  res.sendStatus(200);
};

exports.authenticate = async (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email }, function (err, user) {
    if (err) {
      console.error(err);
      res.status(500).json({
        error: "Internal error please try again",
      });
    } else if (!user) {
      console.log(user);
      res.status(401).json({
        error: "Incorrect email or password",
      });
    } else {
      user.isCorrectPassword(password, function (err, same) {
        if (err) {
          res.status(500).json({
            error: "Internal error please try again",
          });
        } else if (!same) {
          res.status(401).json({
            error: "Incorrect email or password",
          });
        } else {
          // Issue token
          const payload = { email };
          const token = jwt.sign(payload, secret, {
            expiresIn: "1h",
          });
          res.cookie("token", token, { httpOnly: true }).sendStatus(200);
        }
      });
    }
  });
};

exports.submitContactRequest = async (req, res) => {
  try {

  let transporter = nodemailer.createTransport({
    host: smtpEndpoint,
    port: port,
    secure: false, // true for 465, false for other ports
    auth: {
      user: smtpUsername,
      pass: smtpPassword,
    },
  });

  var body_html = `<html>
<head></head>
<body>
  <h1>Amazon SES Test (Nodemailer)</h1>
  <p>This email was sent with <a href='https://aws.amazon.com/ses/'>Amazon SES</a>
        using <a href='https://nodemailer.com'>Nodemailer</a> for Node.js.</p>
</body>
</html>`;

  let mailOptions = {
    from: senderAddress,
    to: toAddresses,
    subject: "Contact Request submitted",
    html: body_html,

    // headers: {
    //   "X-SES-CONFIGURATION-SET": "ConfigSet",
    //   // 'X-SES-MESSAGE-TAGS': tag0,
    //   // 'X-SES-MESSAGE-TAGS': tag1
    // },
  };
    let info = await transporter.sendMail(mailOptions);
    console.log(info);
    res.send(info);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};
