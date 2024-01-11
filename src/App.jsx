import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./AuthProvider/AuthProvider";
import { MainLayout } from "./MainLayout/MainLayout.";
import Login from "./Component/Login/Login";
import SignUp from "./Component/SignUp/SignUp";
import { useEffect, useState } from "react";
import ScaleLoader from "react-spinners/ScaleLoader";
import Home from "./Component/Home/Home";
import toast, { Toaster } from 'react-hot-toast';
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
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
      <Toaster />
    </>
  );
}

export default App;
