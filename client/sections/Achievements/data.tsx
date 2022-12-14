import { IoSchoolOutline } from "react-icons/io5";
import { BsBriefcase, BsShieldCheck } from "react-icons/bs";
import { GoLaw } from "react-icons/go";

import colors from "../../utils/colors";

export const achievments = {
  he: [
    {
      icon: <BsBriefcase size={40} color={colors.yellow} />,
      title: "11",
      accent: "years of expirience",
    },
    {
      icon: <IoSchoolOutline size={45} color={colors.yellow} />,
      title: "3",
      accent: "masters degrees",
    },
    {
      icon: <GoLaw size={45} color={colors.yellow} />,
      title: "200 +",
      accent: "closed cases",
    },
    {
      icon: <BsShieldCheck size={39} color={colors.yellow} />,
      title: "100%",
      accent: "full discretion",
    },
  ],
  en: [
    {
      icon: <BsBriefcase size={40} color={colors.yellow} />,
      title: "11",
      accent: "שנות נסיון בפועל",
    },
    {
      icon: <IoSchoolOutline size={45} color={colors.yellow} />,
      title: "3",
      accent: "תארים אקדמיים",
    },
    {
      icon: <GoLaw size={45} color={colors.yellow} />,
      title: "200 +",
      accent: "תיקים סגורים",
    },
    {
      icon: <BsShieldCheck size={39} color={colors.yellow} />,
      title: "100%",
      accent: "דיסקרטיות מלאה",
    },
  ],
};
