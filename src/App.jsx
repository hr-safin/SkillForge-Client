import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { AuthProvider } from "./AuthProvider/AuthProvider";
import { MainLayout } from "./MainLayout/MainLayout.";
import Login from "./Component/Login/Login";
import SignUp from "./Component/SignUp/SignUp";

function App() {

  const router = new createBrowserRouter([
    {
      path : "/",
      element :<MainLayout />,
      errorElement : <Error />,
      children : [
        {
          path : "/login",
          element : <Login ></Login>
        },
        {
          path : "/signUp",
          element : <SignUp />
        }
      ]
    }
  ])


  return (
    <>
      <AuthProvider >
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </>
  )
}

export default App
