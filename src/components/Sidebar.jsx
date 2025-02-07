import React, { useState } from "react";
import { IoMenu, IoSettings } from "react-icons/io5";
import { FaPlus, FaQuestion } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import { MdHistory } from "react-icons/md";

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  return (
    <div className="min-h-screen inline-flex flex-col justify-between bg-[#e4e7eb] py-[25px] px-[15px]">
      <div>
        <IoMenu
          onClick={() => setExtended(!extended)}
          className="text-2xl block cursor-pointer"
        />
        <div className="mt-[10px] inline-flex items-center gap-[10px] py-[10px] px-[15px] text-[14px] text-gray-500 cursor-pointer bg-gray-300 rounded-full">
          <FaPlus className="text-2xl" />
          {extended && <p>New Chat</p>}
        </div>
        {extended && (
          <div className="flex flex-col">
            <p className="mt-7 mb-5">Recent</p>
            <div className="flex items-center gap-2 p-2 pr-10 rounded-3xl text-slate-700 cursor-pointer hover:bg-gray-300">
              <FiMessageCircle className="text-2xl" />
              <p>what is java..?</p>
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-col">
        <div className="flex items-center gap-2 p-2 pr-10 rounded-2xl text-slate-700 cursor-pointer hover:bg-gray-300">
          <FaQuestion className="text-2xl" />
          {extended && <p>Help</p>}
        </div>
        <div className="flex items-center gap-2 p-2 pr-10 rounded-2xl text-slate-700 cursor-pointer hover:bg-gray-300">
          <MdHistory className="text-2xl" />
          {extended && <p>Activity</p>}
        </div>
        <div className="flex items-center gap-2 p-2 pr-10 rounded-2xl text-slate-700 cursor-pointer hover:bg-gray-300">
          <IoSettings className="text-2xl" />
          {extended && <p>settings</p>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
