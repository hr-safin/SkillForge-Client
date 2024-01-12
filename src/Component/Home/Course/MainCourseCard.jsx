import React from 'react';
import { MdArrowRightAlt } from "react-icons/md";
const MainCourseCard = ({item}) => {
    window.scrollTo(0,0)
    return (
        <div
        data-aos="fade-up"
          data-aos-duration="2000"
        className="card cursor-pointer  border  p-4  bg-base-100 hover:shadow-xl duration-700 ease-in-out transition-all">
      
        <img
          className="rounded-lg h-[195px] w-full"
          src={item.courseImage}
          alt="Shoes"
        />
    
      <div className=" pt-5 space-y-2">
        <h2 className="card-title hover:underline hover:underline-offset-4">{item.courseName}</h2>
        <p className=" text-gray-500 text-sm">{item.courseDescription}</p>
        <div className="flex justify-between items-center pt-8">
          <button className=" flex items-center gap-1 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600">Enroll Now <span className=" text-xl"><MdArrowRightAlt /></span></button>
          <h3 className=" text-xl font-extrabold text-blue-500">$ {item.coursePrice}</h3>
        </div>
      </div>
    </div>
    );
};

export default MainCourseCard;