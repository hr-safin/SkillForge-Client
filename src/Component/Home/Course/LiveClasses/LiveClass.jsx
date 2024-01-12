import React from "react";

const LiveClass = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1500"
      className="md:px-6 lg:px-16 xl:px-32 px-6 lg:py-20 py-36 "
    >
      <div className=" text-center flex justify-center items-center flex-col gap-4">
        <p className=" rounded-full w-[120px] py-2 px-4 bg-gray-50 text-blue-500 font-bold text-lg ">
          Live Class
        </p>
        <p className=" font-extrabold text-3xl lg:text-4xl ">
          It’s easy To Start Learning
        </p>
      </div>

      <div className=" pt-10 lg:pt-20">
        <img
          src="https://haminathemes.net/educad-preview/assets/img/video/video-img-3.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default LiveClass;
