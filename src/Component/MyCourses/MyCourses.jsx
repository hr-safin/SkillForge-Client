import React, { useContext, useEffect } from "react";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const MyCourses = () => {

    const axiosPublic =  useAxiosPublic()
    const {user} = useContext(AuthContext)
    useEffect(() => {
        axiosPublic.get(`/enrolled/${user?.email}`)
        .then(res => {
            console.log(res)
        })
    }, [])
  return (
    <div className=" px-5 min-h-screen flex justify-center items-center flex-col">
      <div
        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-2xl "
      >
        <img
          className="object-cover w-full rounded-t-lg h-20 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          src="/docs/images/blog/image-4.jpg"
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="mb-3 font-normal text-gray-700 ">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyCourses;
