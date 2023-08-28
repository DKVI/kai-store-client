import logo from "../../assets/logo/KAISTORE menwear.png";
import { Link } from "react-router-dom";
import * as icon from "../../assets/icon";
import { useState } from "react";
function Header() {
  const [showCategory, setShowCategory] = useState(false);
  const [showType, setShowType] = useState(false);
  function showCategoryList() {
    setShowCategory(!showCategory);
  }

  function showTypeList() {
    setShowType(!showType);
  }
  return (
    <div className="w-full h-16 fixed left-0 top-0 right-0 bg-black flex px-20 z-20">
      <div className="w-1/3 flex">
        <Link className="w-3/5  h-full flex" to="/">
          <img src={logo} alt="logo" className="h-full" />
        </Link>
        <div
          className="w-1/5  h-full flex items-center relative"
          onMouseEnter={showCategoryList}
          onMouseLeave={showCategoryList}
        >
          <Link
            to="/danh-muc"
            className="text-white items-center w-full flex justify-start font font-bold text-xs"
            style={{
              fontFamily: "Times New Roman, serif",
            }}
          >
            Danh mục
          </Link>
          {showCategory && (
            <div
              className="w-full absolute bg-black text-white top-[100%] left-0 z-20 flex flex-col"
              style={{
                fontFamily: "Times New Roman, serif",
              }}
            >
              <Link className="p-2 text-[12px] hover:bg-white hover:text-black transition-all w-full">
                Quần Áo
              </Link>
              <Link className="p-2 text-[12px] hover:bg-white hover:text-black transition-all w-full">
                Phụ Kiện
              </Link>
            </div>
          )}
        </div>
        <div
          className="w-1/5  h-full flex items-center relative"
          onMouseEnter={showTypeList}
          onMouseLeave={showTypeList}
        >
          <Link
            to="/san-pham"
            className="text-white items-center w-full flex justify-start font font-bold text-xs"
            style={{
              fontFamily: "Times New Roman, serif",
            }}
          >
            Sản phẩm
          </Link>
          {showType && (
            <div
              className="w-full absolute bg-black text-white top-[100%] left-0 z-20 flex flex-col"
              style={{
                fontFamily: "Times New Roman, serif",
              }}
            >
              <Link className="p-2 text-[12px] hover:bg-white hover:text-black transition-all w-full">
                Áo
              </Link>
              <Link className="p-2 text-[12px] hover:bg-white hover:text-black transition-all w-full">
                Quần
              </Link>
              <Link className="p-2 text-[12px] hover:bg-white hover:text-black transition-all w-full">
                Áo Khoác
              </Link>
              <Link className="p-2 text-[12px] hover:bg-white hover:text-black transition-all w-full">
                Balo
              </Link>
              <Link className="p-2 text-[12px] hover:bg-white hover:text-black transition-all w-full">
                Giày
              </Link>
              <Link className="p-2 text-[12px] hover:bg-white hover:text-black transition-all w-full">
                Dây nịt
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className="w-1/3"></div>
      <div className="w-1/3 flex">
        <div className="w-4/6 h-full flex">
          <div className="w-full h-[30px] search bg-white m-auto rounded-2xl">
            <div className="w-full h-full py-1 px-2 ">
              <div className="relative">
                <input
                  type="text"
                  className="w-full h-full bg-transparent outline-none"
                />
                <div className="absolute right-0 top-[50%] translate-y-[-50%] bg-black rounded-[50%]">
                  <icon.IoSearchCircleOutline size={20} color="white" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[10%] h-full flex">
          <Link to="/cart" className="m-auto">
            <icon.AiOutlineShoppingCart size={20} color="white" />
          </Link>
        </div>
        <div className="w-[10%] h-full flex">
          <Link to="/me" className="m-auto">
            <icon.FaRegUserCircle size={20} color="white" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
