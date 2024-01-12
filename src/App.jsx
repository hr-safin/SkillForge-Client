import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./AuthProvider/AuthProvider";
import { MainLayout } from "./MainLayout/MainLayout.";
import Login from "./Component/Login/Login";
import SignUp from "./Component/SignUp/SignUp";
import { useEffect, useState } from "react";
import ScaleLoader from "react-spinners/ScaleLoader";
import Home from "./Component/Home/Home";
import toast, { Toaster } from 'react-hot-toast';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import MainCourse from "./Component/Home/Course/MainCourse";
import AboutSection from "./Component/Home/AboutSection/AboutSection";
import ContactUs from "./Component/Home/ContactUs/ContactUs";
import Enroll from "./Component/Home/Course/Enroll";
import PrivateRouter from "./PrivateRouter/PrivateRouter";


const queryClient = new QueryClient()
function App() {
  const [isLoading, setIsLoading] = useState("Loading");
  

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const router = new createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <Error />,
      children: [
        {
          path : "/",
          element : <Home />
        },
        {
          path : "/aboutUs",
          element : <AboutSection />
        },
        {
          path : "/course",
          element : <MainCourse />
        },
        {
          path : "/enroll/:id",
          element : <PrivateRouter><Enroll /></PrivateRouter>,
          loader : ({params}) => fetch(`http://localhost:5000/${params.id}`)
        },
        {
          path : "/contact",
          element : <ContactUs />
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/signUp",
          element: <SignUp />,
        },
      ],
    },
  ]);

  return isLoading ? (
    <div className="flex text-3xl justify-center items-center h-screen">
      <ScaleLoader color="#2563eb" />
    </div>
  ) : (
    <>
     <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
      <Toaster />
      </QueryClientProvider>
    </>
  );
}

export default App;
