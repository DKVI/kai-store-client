import { AiOutlineShoppingCart } from "react-icons/ai";
import {
  FaRegUserCircle,
  FaRegArrowAltCircleRight,
  FaRegArrowAltCircleLeft,
} from "react-icons/fa";
import { IoSearchCircleOutline } from "react-icons/io5";
export const IconCart = () => {
  return <AiOutlineShoppingCart className="text-xl text-white" />;
};

export const IconUser = () => {
  return <FaRegUserCircle className="text-xl text-white" />;
};

export const IconNext = () => {
  return <FaRegArrowAltCircleRight className="text-2xl text-white" size={40} />;
};

export const IconPrev = () => {
  return <FaRegArrowAltCircleLeft className="text-2xl text-white" size={40} />;
};

export const IconSearch = () => {
  return <IoSearchCircleOutline className="text-xl text-white" />;
};
