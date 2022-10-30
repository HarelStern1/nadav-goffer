import { MiddleWareFn } from "../utils/d";
import { format } from "../utils/format";
import { transporter } from "../utils/transporter";

const sendEmail: MiddleWareFn = (req, res) => {
  const { user } = req.body;
  const { firstName, lastName, email, phone, message } = user;

  const content = format(message, email, phone);

  const mailOptions = {
    from: "harelstern1234@gmail.com",
    to: "harelstern1234@gmail.com",
    subject: `new message from ${firstName} ${lastName}`,
    text: content,
  };

  transporter.sendMail(mailOptions, (err: any, success: any) => {
    if (err) {
      res.status(400).send({
        data: "error",
      });
    } else {
      res.status(201).send({
        data: "success",
      });
    }
  });
};

export default sendEmail;
