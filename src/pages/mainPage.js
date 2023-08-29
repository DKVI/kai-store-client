import React, { useEffect, useState } from "react";
import Slider from "../components/Slider";
import * as api from "../api/apiFunction";
import { Link } from "react-router-dom";
import * as icon from "../assets/icon/index";
import { baseURL } from "../api";
const limits = 8;
function MainPage() {
  const [showData, setShowData] = useState(null);
  const [data, setData] = useState(null);
  const [dataProduct, setDataProduct] = useState(null);
  useEffect(() => {
    const getSlide = async () => {
      await api.getSlide().then((res) => {
        setData({ ...res.data });
        setShowData({ ...res.data });
      });
    };
    const getProduct = async () => {
      await api.getProduct(limits).then((res) => {
        setDataProduct({ ...res.data });
      });
    };
    getProduct();
    getSlide();
  }, []);

  useEffect(() => {
    handleProductSlide();
    const productNextBtn = document.querySelector(".product-next");
    const autoChangeProduct = setInterval(() => {
      productNextBtn.click();
    }, 3000);
    return () => {
      clearInterval(autoChangeProduct);
    };
  }, [dataProduct]);

  useEffect(() => {
    handleCategorySlide();
  }, [data]);

  function checkURL(url) {
    if (url.includes("/imgs")) {
      url = baseURL + url;
    }
    return url;
  }

  function priceFormat(price) {
    price = price.slice(0, -3);
    for (let i = price.length - 3; i > 0; i -= 3) {
      price = price.slice(0, i) + "." + price.slice(i);
    }
    return price + "đ";
  }

  function handleCategorySlide() {
    const typeNextBtn = document.querySelector(".type-next");
    const typePrevBtn = document.querySelector(".type-prev");
    const typeContainer = document.querySelector(".type-container");
    let typeIndex = 0;
    const length = data?.typep?.length;
    typeNextBtn.onclick = () => {
      typeIndex++;
      console.log(typeIndex);
      if (typeIndex > length - 3) {
        typeIndex = 0;
        console.log(typeIndex);
      }
      typeContainer.style.transform = `translateX(${(-typeIndex * 100) / 3}%)`;
    };
    typePrevBtn.onclick = () => {
      typeIndex--;
      console.log(typeIndex);
      if (typeIndex < 0) {
        typeIndex = 0;
        console.log(typeIndex);
      }
      typeContainer.style.transform = `translateX(${(-typeIndex * 100) / 3}%)`;
    };
  }

  function handleProductSlide() {
    const productNextBtn = document.querySelector(".product-next");
    const productPrevBtn = document.querySelector(".product-prev");
    const productContainer = document.querySelector(".product-container");
    let productIndex = 0;
    const length = dataProduct?.data?.length;
    productNextBtn.onclick = () => {
      productIndex++;
      console.log(productIndex);
      if (productIndex > length - 4) {
        productIndex = 0;
        console.log(productIndex);
      }
      productContainer.style.transform = `translateX(${
        (-productIndex * 100) / 4
      }%)`;
    };
    productPrevBtn.onclick = () => {
      productIndex--;
      console.log(productIndex);
      if (productIndex < 0) {
        productIndex = 0;
        console.log(productIndex);
      }
      productContainer.style.transform = `translateX(${
        (-productIndex * 100) / 4
      }%)`;
    };
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
            <div className="type-prev left-0 top-1/2 translate-y-[-50%] absolute z-10 opacity-80 hover:opacity-100 drop-shadow-lg">
              <icon.FaRegArrowAltCircleLeft size={40} color="white" />
            </div>
            <div className=" type-next right-0 top-1/2 translate-y-[-50%] absolute z-10 opacity-80 hover:opacity-100 drop-shadow-lg">
              <icon.FaRegArrowAltCircleRight size={40} color="white" />
            </div>
            <div className="w-full flex type-container transition-all">
              {data?.typep &&
                data.typep?.map((item, index) => {
                  return (
                    <Link
                      to={`/${item.slug}`}
                      className="w-1/3 flex-none px-3"
                      key={index}
                    >
                      <div className="w-100% overflow-hidden rounded-xl relative">
                        <img src={item.linkImg} />
                        <div className="overlay absolute bg-black top-0 bottom-0 right-0 left-0 opacity-0 hover:opacity-50 flex">
                          <h1 className="text-2xl text-white m-auto hover:opacity-100 underline">
                            {item.nameType}
                          </h1>
                        </div>
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
        <div className="w-full overflow-hidden px-16">
          <div className="w-full product-controller relative">
            <div className="product-next absolute top-[50%] translate-y-[-50px] z-20 right-0 opacity-80 hover:opacity-100 drop-shadow-lg">
              <icon.FaRegArrowAltCircleRight size={40} color="white" />
            </div>
            <div className="product-prev absolute top-[50%] translate-y-[-50px] z-20 left-0 opacity-80 hover:opacity-100 drop-shadow-lg">
              <icon.FaRegArrowAltCircleLeft size={40} color="white" />
            </div>
            <div className="w-full overflow-hidden">
              <div className="product-container flex transition-all">
                {dataProduct?.data &&
                  dataProduct.data.map((item, index) => {
                    return (
                      <Link to={item.pSlug} className="w-1/4 px-3 flex-none" key={index}>
                        <div>
                          <img src={checkURL(item.thumbnail)} />
                          <div className="w-full">
                            <p className="text-[12px] font-bold truncate">
                              {item.nameProduct}
                            </p>
                            <span className="text-xs">
                              {priceFormat(item.price)}
                            </span>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
