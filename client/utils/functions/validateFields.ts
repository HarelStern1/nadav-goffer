import { User } from "../../sections/Contact";

const validateFields = (fields: User) => {
  let field: keyof User;

  for (field in fields) {
    if (fields[field] === "") return false;
  }
  return true;
};

export default validateFields;
