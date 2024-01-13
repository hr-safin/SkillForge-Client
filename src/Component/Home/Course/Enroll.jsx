import React, { useContext, useEffect, useState } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import useAxiosPublic from "../../../Hook/useAxiosPublic";
import { MdArrowRightAlt } from "react-icons/md";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import ScaleLoader from "react-spinners/ScaleLoader";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

const Enroll = () => {
  window.scrollTo(0, 0);
  const { id } = useParams();
  const { isLoading, setIsLoading } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate()
  const [enroll, setEnroll] = useState([]);

  useEffect(() => {
    axiosPublic.get(`/enroll/${id}`).then((res) => {
      console.log(res.data);
      setEnroll(res.data);
    });
  }, []);

  const handleRedirectToPayment = () => {
   
       navigate(`/payment/${enroll._id}`) 
      let timerInterval;
      Swal.fire({
        title: "Preparing Your Enrollment! Redirecting to Payment Page!",
        timer: 2000,
        timerProgressBar: false,
        didOpen: () => {
          Swal.showLoading();
          const timer = Swal.getPopup().querySelector("b");
          timerInterval = setInterval(() => {
            timer.textContent = `${Swal.getTimerLeft()}`;
          }, 100);
        },
        willClose: () => {
          clearInterval(timerInterval);
        },
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log("I was closed by the timer");
        }
      });
   
  };
  return (
    <div className="flex lg:h-screen justify-center items-center pt-44 lg:pt-44 px-6">
      <div class="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md">
        <img
          class="object-cover w-full h-64"
          src={enroll.courseImage}
          alt="Article"
        />

        <div class="lg:p-5 p-4">
          <div>
            <div className=" flex justify-between items-center">
              <span class="text-xs font-medium text-blue-600 uppercase ">
                Development
              </span>
              <p>Duration : {enroll.courseDuration}</p>
            </div>

            <a
              href="#"
              class="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform  hover:text-gray-600 hover:underline"
              tabindex="0"
              role="link"
            >
              {enroll.courseName}
            </a>
            <p class="mt-2 text-sm text-gray-600 ">{enroll.Roadmap}</p>
          </div>

          <div class="mt-4 font-bold flex justify-between items-center">
            <p>By {enroll.courseInstructor} </p>
            <p class="">Start Date : {enroll.courseMonth} 1</p>
          </div>
          <div className=" mt-6 flex justify-between items-center">
            <button
              onClick={handleRedirectToPayment}
              className="flex items-center gap-1 px-5  py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
            >
              Enroll Now
            </button>
            <h3 className=" text-xl font-extrabold text-blue-500">
              $ {enroll.coursePrice}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enroll;
