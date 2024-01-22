import React from "react";
import Lottie from "lottie-react";
import animation from "../assets/animation.json";

const Loader = () => {
  return <Lottie animationData={animation} loop={true} />;
};

export default Loader;
