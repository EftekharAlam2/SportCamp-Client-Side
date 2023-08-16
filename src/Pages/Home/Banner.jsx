import { useEffect, useState } from "react";
// import { Slide } from "react-awesome-reveal";
// import { Link } from "react-router-dom";

const backgrounds = [
  "url(https://i.ibb.co/8P9yDDd/1.jpg)",
  "url(https://i.ibb.co/MphVKHh/2.jpg)",
  "url(https://i.ibb.co/h7SgrCD/3.jpg)",
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setShowAnimation(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === backgrounds.length - 1 ? 0 : prevIndex + 1
        );
        setShowAnimation(false);
      }, 1000);
    }, 8000);

    return () => clearInterval(timer);
  }, []);
  const backgroundStyle = {
    backgroundImage: backgrounds[currentIndex],
    backgroundSize: "cover",
    backgroundPosition: "center",
    transition: "transform 1s",
    transform: showAnimation ? "scale(1.03)" : "scale(1)",
  };
  return (
    <div className="w-full h-[60vh] lg:h-screen overflow-hidden">
      <div className="w-full h-full" style={backgroundStyle}>
        <div className="h-full max-w-[1520px] mx-auto flex justify-start items-center relative">
          {/* <div className="max-w-[700px] space-y-4 md:space-y-8 md:mt-16 px-4 2xl:px-0 overflow-hidden">
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
