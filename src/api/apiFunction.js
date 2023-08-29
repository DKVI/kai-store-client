import { instance } from "./index";
const getSlide = async () => {
  try {
    const res = await instance.get("/newfeed");
    return res;
  } catch (err) {
    console.log(err);
  }
};

const getProduct = async (limits) => {
  try {
    const res = await instance.get(`/products/limits/${limits}`);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export { getSlide, getProduct };
