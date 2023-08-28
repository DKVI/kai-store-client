import { instance } from "./index";
const getSlide = async () => {
  try {
    const res = await instance.get("/newfeed");
    return res;
  } catch (err) {
    console.log(err);
  }
};

export { getSlide };
