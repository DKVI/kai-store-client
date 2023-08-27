import React, { useEffect, useState } from "react";
import Slider from "../components/Slider";
import * as api from "../api/apiFunction";
function MainPage() {
  const [showData, setShowData] = useState(null);
  useEffect(() => {
    const getSlide = async () => {
      await api.getSlide().then((res) => {
        setShowData({ ...res.data });
      });
    };
    getSlide();
  }, []);
  return (
    <div className="w-full h-full mt-16 fixed left-0 top-0 right-0 main-page-container">
      {showData && (
        <Slider
          data={{
            ...showData,
          }}
        />
      )}
    </div>
  );
}

export default MainPage;
