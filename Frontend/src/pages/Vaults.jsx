import VaultsCard from "@/components/card/VaultsCard";
import React from "react";
import { BsShieldLock } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Vaults = () => {
  return (
    <div className="mt-4">
      <div className="flex justify-between items-center px-7 py-4">
        <div className="flex items-center gap-2">
          <BsShieldLock className="w-[28px] h-[32px]" />
          <h1 className="text-[24px] font-medium text-[#393939]">Vaults</h1>
        </div>
      </div>
      <div className="ml-14">
      <p className="text-sm text-gray-600 leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ab dolorem laborum porro, cumque odio! Libero tenetur tempore illo quam iusto modi neque repellendus, exercitationem quaerat fuga.
      </p>
      </div>
      <div className="mt-5 mr-4 ml-4">
        <div className="flex flex-col gap-4">
          <NavLink to="/vault-view">
            <VaultsCard />
          </NavLink>
          <NavLink>
            <VaultsCard />
          </NavLink>
          <NavLink>
            <VaultsCard />
          </NavLink>
          <NavLink>
            <VaultsCard />
          </NavLink>
          <NavLink>
            <VaultsCard />
          </NavLink>
          <NavLink>
            <VaultsCard />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Vaults;
