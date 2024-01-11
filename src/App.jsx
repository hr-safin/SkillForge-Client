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
          path : "/course",
          element : <MainCourse />
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
