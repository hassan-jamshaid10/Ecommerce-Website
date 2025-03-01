import React, { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SidebarLayout from "./Layouts/SidebarLayout";
import DashboardHome from "./Pages/DashboardHome";
import LoginPage from "../src/Authentication/LoginPage/index";
import SignupPage from "../src/Authentication/SignupPage/index";
import ForgotPassword from "./Authentication/ForgotPassword";
import ResetPassword from "./Authentication/ResetPassword";
import ProductsPage from "./Pages/ProductsPage";

const OrdersPage = lazy(() => import("./Pages/OrdersPage"));
const CouponsPage = lazy(() => import("./Pages/CouponsPage"));
const SettingsPage = lazy(() => import("./Pages/SettingsPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <SidebarLayout ><DashboardHome/></SidebarLayout>,

  },
  {
    path: "/products",
    element: <SidebarLayout><ProductsPage/></SidebarLayout> ,

  },
  {
    path: "/Auth/Login",
    element: <LoginPage/>,
  },
  {
    path: "/Auth/Signup",
    element: <SignupPage/>
  },
  {
    path: "/Auth/forgot",
    element: <ForgotPassword/>
  },
  {
    path: "/reset-password",
    element: <ResetPassword/>
  }
]);

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
