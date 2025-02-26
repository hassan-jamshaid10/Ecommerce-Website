import React, { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SidebarLayout from "./Layouts/SidebarLayout";
import DashboardHome from "./Pages/DashboardHome";

// Lazy load pages for better performance
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
      { path: "settings", element: <SettingsPage /> },
    ],
  },
]);

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
