import axios from "axios";
import { User } from "../../sections/Contact";

export const submitData = async (user: User, token: string) => {
  const SUBMIT_URL = process.env.NEXT_PUBLIC_SUBMIT_URL_DEV!;
  try {
    const { data } = await axios.post(SUBMIT_URL, {
      user,
      token,
    });
    return data;
  } catch (err) {
    console.log(err);
    return { data: "error" };
  }
};
