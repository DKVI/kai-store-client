import React, { useEffect } from "react";
import { IconNext, IconPrev } from "../assets/icon";
import * as api from "../api/apiFunction";
function Slider({ data }) {
  let slideList;
  let autoChange;
  useEffect(() => {
    if (data?.newfeed) {
      handleSlider(data.newfeed);
      autoChange = setInterval(() => {
        const next = document.querySelector(".next");
        next.click();
      }, 2000);
    }
    return () => {
      clearInterval(autoChange);
    };
  }, [data]);

  function handleSlider(slideList) {
    console.log(slideList);
    const next = document.querySelector(".next");
    const prev = document.querySelector(".prev");
    const slides = document.querySelector(".slide-container");

    let index = 0;
    const html = slideList.map((item) => {
      return `<div class="w-full h-full slide-item" style="background-image: url(${item.linkImg}); background-size: cover; background-position: center; background-repeat: no-repeat;"></div>`;
    });
    slides.innerHTML = html.join("");
    const slidesLength = slideList.length;
    console.log(slidesLength);
    slides.style.width = `${slidesLength * 100}%`;
    function nextSlide() {
      if (index > slidesLength - 1) {
        index = 0;
      }
      let pos = index * 100;
      console.log(pos);
      slides.style.left = `-${pos}%`;
    }

    function prevSlide() {
      if (index < 0) {
        index = slidesLength - 1;
      }
      let pos = -(index * 100);
      console.log(pos);
      slides.style.left = `${pos}%`;
    }
    next.onclick = () => {
      index++;
      nextSlide();
    };
    prev.onclick = () => {
      index--;
      prevSlide();
    };
  }
  return (
    <div className="w-full h-full relative overflow-hidden">
      <div
        className="next absolute right-0 top-1/2 z-10 opacity-50 hover:opacity-100 transition-opacity"
        style={{
          transform: "translateY(-50%)",
        }}
      >
        <IconNext />
      </div>
      <div
        className="prev absolute left-0 top-1/2 z-10 opacity-50 hover:opacity-100 transition-opacity"
        style={{
          transform: "translateY(-50%)",
        }}
      >
        <IconPrev />
      </div>
      <div
        className="slide-container w-full h-full flex absolute left-0 top-0 "
        style={{
          transition: "all 0.5s",
        }}
      >
        <div
          className="w-full h-full slide-item animate-pulse"
          style={{
            backgroundColor: "gray",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Slider;
