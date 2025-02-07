import React, { useContext } from "react";
import { FaCompass, FaMicrophone, FaUserCircle } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { Context } from "../context/context";

const MainContent = () => {
  const {
    input,
    setInput,
    recentPrompt,
    setRecentPrompt,
    previousPrompt,
    setPreviousPrompt,
    showResult,
    setShowResult,
    loading,
    resultData,
    onSent,
  } = useContext(Context);

  return (
    <div className="flex-1 min-h-screen pb-[15vh] relative">
      <div className="flex items-center justify-between text-xl p-5 text-slate-700">
        <p>sql generator</p>
        <FaUserCircle />
      </div>
      <div className="max-w-[900px] mx-auto">
        <div className="my-12 text-[56px] text-slate-500 font-semibold">
          <p>
            <span className="bg-gradient-to-r from-[#4b900f] to-[#ff5546] bg-clip-text text-transparent">
              Hello
            </span>
          </p>
          <p className="text-gray-400">How can I Help You Today?</p>
        </div>
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5">
          <div className="h-[200px] p-4 bg-gray-200 rounded-2xl relative cursor-pointer hover:bg-gray-300">
            <p className="text-slate-700 text-lg">suggest some Queries</p>
            <FaCompass className="text-2xl absolute bottom-2 right-2" />
          </div>
        </div> */}

        <div className="absolute bottom-0 w-full max-w-[900px] px-5 mx-auto mt-5">
          <div className="flex items-center justify-between gap-20 bg-gray-200 py-2 px-5 rounded-full">
            <input
              type="text"
              placeholder="Enter your Queries..."
              className="flex-1 bg-transparent border-none outline-none p-2 text-lg"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <div className="flex gap-4 items-center">
              <FaMicrophone className="text-2xl cursor-pointer" />
              <IoIosSend
                onClick={() => onSent(input)}
                className="text-2xl cursor-pointer"
              />
            </div>
          </div>
          <p className="rext-sm my-4 mx-auto text-center font-[500] text-slate-600"></p>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
