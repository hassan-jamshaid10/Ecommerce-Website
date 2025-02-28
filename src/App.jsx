import React, { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SidebarLayout from "./Layouts/SidebarLayout";
import DashboardHome from "./Pages/DashboardHome";
import LoginPage from "../src/Authentication/LoginPage/index";
import SignupPage from "../src/Authentication/SignupPage/index";
import ForgotPassword from "./Authentication/ForgotPassword";
import ResetPassword from "./Authentication/ResetPassword";



const ProductsPage = lazy(() => import("./Pages/ProductsPage"));
const OrdersPage = lazy(() => import("./Pages/OrdersPage"));
const CouponsPage = lazy(() => import("./Pages/CouponsPage"));
const SettingsPage = lazy(() => import("./Pages/SettingsPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <SidebarLayout />,
    children: [
      { index: true, element: <DashboardHome /> },
      { path: "products", element: <ProductsPage /> },
      { path: "orders", element: <OrdersPage /> },
      { path: "coupons", element: <CouponsPage /> },
      { path: "settings", element: <SettingsPage /> }
    ],
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
    path: "/Auth/Reset",
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
