import React from 'react';
import Image1 from "../../assets/Hero/image1.png";
import Image2 from "../../assets/Hero/image2.jpg";
import Image3 from "../../assets/Hero/image3.jpg";
import Image4 from "../../assets/Hero/image4.png";
import Slider from "react-slick";
const ImageList = [
  {
    id: 1,
    img: Image1,
    title: " Much more than just a generic vision",
    description: "Integrated Precision"

  },
  {
    id: 2,
    img: Image2,
  },
  {
    id: 3,
    img: Image3
  },
  {
    id: 4,
    img: Image4
  },


]
const Hero = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className='relative overflow-hidden  bg-slate-400'>
      {/* Hero Section */}
      <Slider {...settings}>
        {ImageList.map((data) => (
          <div className="relative">
            {/* image section */}
            <div className="relative z-0">
              <img
                src={data.img}
                alt=""
                className="w-full h-auto object-cover"
              />
            </div>

            {/* text content section */}
            <div className="absolute right-0 top-1/4 sm:top-1/3 z-10 text-white p-4 sm:p-8">
              <h1 className="text-xl sm:text-2xl font-bold text-right">
                {data.title}
              </h1>
              <p className="text-5xl sm:text-8xl font-bold text-right">
                {data.description}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero