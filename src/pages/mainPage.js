import React, { useEffect, useState } from "react";
import Slider from "../components/Slider";
import * as api from "../api/apiFunction";
import { Link } from "react-router-dom";
import * as icon from "../assets/icon/index";
function MainPage() {
  const [showData, setShowData] = useState(null);
  const [data, setData] = useState(null);
  useEffect(() => {
    const getSlide = async () => {
      await api.getSlide().then((res) => {
        console.log(res.data);
        setData({ ...res.data });
        setShowData({ ...res.data });
      });
    };
    getSlide();
  }, []);

  useEffect(() => {
    const typeNextBtn = document.querySelector(".type-next");
    const typePrevBtn = document.querySelector(".type-prev");
    const typeContainer = document.querySelector(".type-container");
    let typeIndex = 0;
    typeNextBtn.onclick = () => {
      nextType(typeIndex, typeContainer);
    };
    typePrevBtn.onclick = () => {
      prevType(typeIndex, typeContainer);
    };
  }, [data]);

  function nextType(typeIndex, typeContainer) {
    typeIndex++;
    if (typeIndex > data.typep.length - 1) {
      typeIndex = 0;
    }
    let pos = typeIndex * 25;
    typeContainer.style.left = `-${pos}%`;
  }
  function prevType(typeIndex, typeContainer) {
    typeIndex--;
    if (typeIndex < 0) {
      typeIndex = data.typep.length - 1;
    }
    let pos = typeIndex * 25;
    typeContainer.style.right = `${pos}%`;
  }
  return (
    <div className="w-full h-full mt-16 main-page-container">
      <Slider
        data={{
          ...showData,
        }}
      />
      <div className="px-16 pt-16 w-full">
        <h1 className="text-2xl font-bold mb-6">DANH MỤC</h1>
        <div className="px-16 flex gap-x-3">
          {data?.category &&
            data.category.map((item, index) => {
              return (
                <div className="w-1/2 p-3" key={item.nameCategory}>
                  <Link className="w-full relative" to={item.slug}>
                    <div
                      className="pb-[100%] rounded-xl"
                      style={{
                        backgroundImage: `url("${item.linkImg}")`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        width: "100%",
                        borderRadius: "10px",
                      }}
                    ></div>
                    <div className="absolute left-0 right-0 top-0 bottom-0 bg-black rounded-xl opacity-0 hover:opacity-50 flex">
                      <h1 className="text-white text-2xl hover:opacity-100 underline m-auto">
                        {item.nameCategory}
                      </h1>
                    </div>
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
      <div className="px-16 pt-16 w-full">
        <h1 className="text-2xl font-bold mb-6">PHÂN LOẠI</h1>
        <div className=" min-w-full overflow-hidden px-16">
          <div className="relative overflow-hidden">
            <div className="type-prev left-0 top-1/2 translate-y-[-50%] absolute z-20">
              <icon.FaRegArrowAltCircleLeft size={40} color="white" />
            </div>
            <div className=" type-next right-0 top-1/2 translate-y-[-50%] absolute z-20">
              <icon.FaRegArrowAltCircleRight size={40} color="white" />
            </div>
            <div className="w-full flex gap-3 type-container">
              {data?.typep &&
                data.typep?.map((item, index) => {
                  return (
                    <Link
                      to={`/${item.slug}`}
                      className="w-1/4 flex-none relative rounded-xl overflow-hidden"
                      key={index}
                    >
                      <img src={item.linkImg} />
                      <div className="overlay absolute bg-black top-0 bottom-0 right-0 left-0 opacity-0 hover:opacity-50 flex">
                        <h1 className="text-2xl text-white m-auto hover:opacity-100 underline">
                          {item.nameType}
                        </h1>
                      </div>
                    </Link>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
      <div className="px-16 py-16 w-full">
        <h1 className="text-2xl font-bold mb-6">SẢN PHẨM</h1>
        <div className="product-container min-w-full overflow-hidden px-16"></div>
      </div>
    </div>
  );
}

export default MainPage;
