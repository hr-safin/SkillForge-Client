import React, { useContext, useEffect } from "react";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const MyCourses = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useContext(AuthContext);
  const { data: enrolled = [] } = useQuery({
    queryKey: ["enrolled"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/enrolled/${user?.email}`);
      console.log(res.data);
      return res.data;
    },
  });
  return (
    <>
    
    <div className=" px-5 min-h-[82vh] flex justify-center items-center flex-col">
    <h2 className=" text-2xl pb-16 md:text-3xl text-center font-bold ">My Courses</h2>
      {enrolled.map((enroll) => (
        <div className="flex flex-col lg:mt-0 mt-20 items-center bg-white border border-gray-200  rounded-lg shadow md:flex-row md:max-w-3xl ">
          <img
            className="object-fit w-full rounded-t-lg  md:h-[203px] md:w-[350px] md:rounded-none md:rounded-s-lg"
            src={enroll.courseImage}
            alt={enroll._id}
          />
          <div className="flex flex-col md:pl-[75px] justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
              {enroll.courseName}
            </h5>
            <p className="mb-3 font-normal text-gray-700 ">
              {enroll.courseDescription}
            </p>
            <p className="mb-3 font-normal text-gray-700 ">
              Instructor : {enroll.courseInstructor}
            </p>
            <p className="mb-3 font-normal text-gray-700 ">
              Duration : {enroll.courseDuration}
            </p>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default MyCourses;
