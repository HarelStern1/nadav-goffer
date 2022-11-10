import { BsBriefcase } from "react-icons/bs";
import { GoLaw } from "react-icons/go";
import { Specialties } from "./index";
import colors from "../../utils/colors";

export const specialties: Specialties[] = [
  {
    icon: <BsBriefcase size={40} color={colors.yellow} />,
    title: "מס הכנסה",
    body: "חוות דעת, ייעוץ שוטף, ליטיגציית מס ודיוני שומה בכל תחומי המיסוי הישיר - ליחידים ותאגידים",
  },
  {
    icon: <GoLaw size={40} color={colors.yellow} />,
    title: "מיסוי מקרקעין",
    body: " ייעוץ מס כולל בקשר לדירות מגורים ומקרקעין במגוון סוגי עסקאות ( מכר דירות, תמ״א 38, פיוני-בינוי וכו׳ ) - ליחידים ותאגידים",
  },
  {
    icon: <BsBriefcase size={40} color={colors.yellow} />,
    title: "מיסוי עקיף",
    body: "ייעוץ מס כולל במגוון סוגיות הקשורות למס ערך מוסף, מכס, מס קנייה ובלו",
  },
];
