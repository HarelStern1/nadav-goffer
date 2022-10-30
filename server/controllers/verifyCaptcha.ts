import axios from "axios";
import { MiddleWareFn } from "../utils/d";
import * as dotenv from "dotenv";
dotenv.config();

const verifyCaptcha: MiddleWareFn = async (req, res, next) => {
  const { token } = req.body;

  const url = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`;

  try {
    const { data } = await axios.post(url);

    if (data.success === false) {
      res.status(400).send({
        data: "error",
      });
      return;
    } else {
      next();
    }
  } catch (err) {
    console.log(err);
  }
};

export default verifyCaptcha;
