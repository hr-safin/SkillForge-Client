import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { AuthProvider } from "./AuthProvider/AuthProvider";
import { MainLayout } from "./MainLayout/MainLayout.";

function App() {

  const router = new createBrowserRouter([
    {
      path : "/",
      element :<MainLayout />
    }
  ])


  return (
    <>
      <AuthProvider router={router}></AuthProvider>
    </>
  )
}

export default App
