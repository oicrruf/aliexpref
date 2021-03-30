import { AiOutlineCar, AiOutlineTool } from "react-icons/ai";
import { CgGames } from "react-icons/cg";
import { FiMusic, FiShoppingCart } from "react-icons/fi";
import { MdChildCare } from "react-icons/md";
import { RiComputerLine, RiHome3Line } from "react-icons/ri";

export const country = [
  {
    name: "Argentina",
    flag: "./assets/img/flags/ar.svg",
    currency: "ARS",
    symbol: "$",
  },
  {
    name: "Colombia",
    flag: "./assets/img/flags/co.svg",
    currency: "COP",
    symbol: "$",
  },
  {
    name: "Costa Rica",
    flag: "./assets/img/flags/cr.svg",
    currency: "CRC",
    symbol: "₡",
  },
  {
    name: "Dinamarca",
    flag: "./assets/img/flags/dm.svg",
    currency: "DKK",
    symbol: "kr",
  },
  {
    name: "Ecuador",
    flag: "./assets/img/flags/ec.svg",
    currency: "ECS",
    symbol: "S/",
  },
  {
    name: "El Salvador",
    flag: "./assets/img/flags/sv.svg",
    currency: "USD",
    symbol: "$",
  },
  {
    name: "Estados Unidos",
    flag: "./assets/img/flags/us.svg",
    currency: "USD",
    symbol: "$",
  },
  {
    name: "Guatemala",
    flag: "./assets/img/flags/gu.svg",
    currency: "GQT",
    symbol: "Q",
  },
  {
    name: "México",
    flag: "./assets/img/flags/mx.svg",
    currency: "MXN",
    symbol: "$",
  },
  {
    name: "Panamá",
    flag: "./assets/img/flags/pn.svg",
    currency: "PAB",
    symbol: "B/.​",
  },
  {
    name: "Perú",
    flag: "./assets/img/flags/pu.svg",
    currency: "PEN",
    symbol: "S/​",
  },
];
export const popularCategories = [
  {
    id: "automotive",
    name: "Automotive",
    icon: <AiOutlineCar className="category-box__icon" />,
  },
  {
    id: "computers",
    name: "Computers",
    icon: <RiComputerLine className="category-box__icon" />,
  },
  {
    id: "games",
    name: "Games",
    icon: <CgGames className="category-box__icon" />,
  },
  {
    id: "grocery",
    name: "Grocery",
    icon: <FiShoppingCart className="category-box__icon" />,
  },
  {
    id: "home",
    name: "Home",
    icon: <RiHome3Line className="category-box__icon" />,
  },
  {
    id: "kids",
    name: "Kids",
    icon: <MdChildCare className="category-box__icon" />,
  },
  {
    id: "music",
    name: "Music",
    icon: <FiMusic className="category-box__icon" />,
  },

  {
    id: "tools",
    name: "Tools",
    icon: <AiOutlineTool className="category-box__icon" />,
  },
];
