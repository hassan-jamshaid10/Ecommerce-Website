import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { 
  MdDashboard, 
  MdInventory, 
  MdShoppingCart, 
  MdLocalOffer, 
  MdSettings, 
  MdLogout 
} from "react-icons/md";

const Sidebar = () => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  return (
    <div
      className={`bg-[#7b00f1] text-white fixed left-0 top-0 h-full transition-all duration-300 flex flex-col justify-between ${
        isSidebarExpanded ? "w-64" : "w-20"
      }`}
      onMouseEnter={() => setIsSidebarExpanded(true)}
      onMouseLeave={() => setIsSidebarExpanded(false)}
    >
      {/* Top Section */}
      <div className="py-6 flex flex-col items-center">
        <h1 className={`text-lg font-bold transition-all ${isSidebarExpanded ? "block" : "hidden"}`}>
          ADMIN PANEL
        </h1>

        <nav className="flex flex-col gap-4 w-full mt-6">
          <NavLink to="/" className="flex items-center gap-4 px-4 py-3 hover:bg-[#c995f9] transition rounded-lg w-full justify-center md:justify-start">
            <MdDashboard className="text-2xl" />
            <span className={`transition-all ${isSidebarExpanded ? "block" : "hidden"}`}>Dashboard</span>
          </NavLink>

          <NavLink to="/products" className="flex items-center gap-4 px-4 py-3 hover:bg-[#c995f9] transition rounded-lg w-full justify-center md:justify-start">
            <MdInventory className="text-2xl" />
            <span className={`transition-all ${isSidebarExpanded ? "block" : "hidden"}`}>Products</span>
          </NavLink>

          <NavLink to="/orders" className="flex items-center gap-4 px-4 py-3 hover:bg-[#c995f9] transition rounded-lg w-full justify-center md:justify-start">
            <MdShoppingCart className="text-2xl" />
            <span className={`transition-all ${isSidebarExpanded ? "block" : "hidden"}`}>Orders</span>
          </NavLink>

          <NavLink to="/coupons" className="flex items-center gap-4 px-4 py-3 hover:bg-[#c995f9] transition rounded-lg w-full justify-center md:justify-start">
            <MdLocalOffer className="text-2xl" />
            <span className={`transition-all ${isSidebarExpanded ? "block" : "hidden"}`}>Coupons</span>
          </NavLink>

          <NavLink to="/settings" className="flex items-center gap-4 px-4 py-3 hover:bg-[#c995f9] transition rounded-lg w-full justify-center md:justify-start">
            <MdSettings className="text-2xl" />
            <span className={`transition-all ${isSidebarExpanded ? "block" : "hidden"}`}>Settings</span>
          </NavLink>
        </nav>
      </div>

      {/* Logout Button */}
      <div className="p-4">
        <button className="flex items-center gap-4 px-4 py-3 hover:bg-[#c995f9] transition rounded-lg w-full justify-center md:justify-start">
          <MdLogout className="text-2xl" />
          <span className={`transition-all ${isSidebarExpanded ? "block" : "hidden"}`}>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
