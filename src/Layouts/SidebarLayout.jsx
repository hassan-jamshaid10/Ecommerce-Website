import React from "react";
import Sidebar from "../Components/Sidebar/index";

const SidebarLayout = ({ children }) => {
    return (
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 p-6 transition-all w-full">
          {children}
        </div>
      </div>
    );
  };

export default SidebarLayout;