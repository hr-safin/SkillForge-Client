import React from "react";
import { FaAngleRight,FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const AboutUs = () => {
  window.scrollTo(0, 0);
  return (
    <div
    className="md:px-6 lg:px-16 xl:px-32 px-6 lg:py-0 py-20 ">
      <div className=" flex flex-col lg:flex-row-reverse lg:justify-center items-center h-screen lg:gap-16 gap-20">
        <div className="flex-1 lg:w-[30%] mx-auto">
          <h2
          data-aos="fade-up"
          data-aos-duration="1500"
          className=" mb-5 rounded-full w-[190px]  md:w-[200px] py-2 px-4 bg-gray-50 text-blue-500 font-bold text-base md:text-lg ">
            Get More About Us
          </h2>
          <h3
          data-aos="fade-up"
          data-aos-duration="2000"
          className=" text-2xl md:text-3xl lg:w-[700px] lg:text-4xl font-bold xl:text-4xl  text-gray-900">
            Thousand Of Top Courses{" "}
          </h3>
          <h3
          data-aos="fade-up"
          data-aos-duration="2000"
          className="text-2xl md:text-3xl lg:w-[600px] pt-2 pb-2 lg:text-4xl xl:text-4xl font-bold text-gray-900">
            Now In One Place
          </h3>
          <p
          data-aos="fade-up"
          data-aos-duration="2000"
          className=" text-sm sm:text-base lg:w-[520px] pt-2 text-gray-500">
            At SkillForge, we're dedicated to fostering a culture of learning
            and growth. Our platform offers a diverse range of educational
            resources, expert-led courses, and a supportive community. Join us
            on your journey to success.
          </p>
          <p data-aos="fade-up"
          data-aos-duration="2000" className=" pt-6 flex items-center text-base md:text-lg font-bold gap-3 pb-5"><span className=" text-lg md:text-xl py-1 px-1 shadow-md  rounded-full bg-blue-500 text-white"><FaAngleRight /></span> The Most World Class Instructors</p>
          <p data-aos="fade-up"
          data-aos-duration="2000" className=" flex items-center text-base md:text-lg font-bold gap-3 pb-5"><span className=" text-lg md:text-xl py-1 px-1  rounded-full shadow-md bg-blue-500 text-white"><FaAngleRight /></span> Access Your Class anywhere</p>
          <p data-aos="fade-up"
          data-aos-duration="2000" className=" flex items-center text-base md:text-lg font-bold gap-3 pb-3"><span className=" text-lg md:text-xl py-1 px-1 rounded-full shadow-md bg-blue-500 text-white"><FaAngleRight /></span> Flexible Course Plan</p>
          <Link data-aos="fade-up"
          data-aos-duration="2000" to="/signUp" className=" mt-6  w-[148px] md:w-[167px] flex items-center gap-1 font-medium px-3.5 py-2.5 md:px-4 md:py-3 bg-blue-500   text-white hover:bg-blue-700 text-sm md:text-base rounded-full hover:scale-105 duration-700 ease-in-out transition-all  ">
            Start Free Trial{" "}
            <span className="pt-1">
              <FaLongArrowAltRight />
            </span>
          </Link>
        </div>
        <div data-aos="fade-up"
          data-aos-duration="2500" className="flex-1">
            <img src="https://themegenix.com/demo/skillgro/assets/img/others/about_img.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
