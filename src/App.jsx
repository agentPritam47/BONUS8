import React, { useRef } from "react";
import Scene from "./components/Scene";
import Lenis from "lenis";

const App = () => {
  const lenis = new Lenis();

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
  const pageRef = useRef();
  return (
    <div className="h-[210vh] bg-[#0e0e0e] w-full relative " ref={pageRef}>
      <div className="h-screen w-full sticky top-0 left-0">
        <Scene />
      </div>
      <div className="h-full w-full absolute top-0 left-0 p-10">
        <div className="h-screen w-full flex justify-between">
          <div className="w-1/2 h-full">
            <h1 className=" font-[nikea] text-6xl sm:text-7xl mt-[10vw] font-light text-white">
              FUTURE <br />
              <span className=" text-[#621cd1]">CARS</span>
            </h1>
            <button className=" mt-14 text-white border border-white px-10 py-2 ">
              EXPLORE
            </button>
          </div>
          <div className="w-[22%] h-full hidden sm:block ">
            <p className="mt-[10vw] font-[sa] text-white text-lg  text-right">
              Future cars will be electric, self-driving, and eco-friendly,
              featuring advanced AI, seamless connectivity, and innovative
              designs for ultimate convenience and sustainability.
            </p>
            <p className="text-white text-right font-[nikea]  text-5xl mt-14">
              12 <span className=" text-[#703fdb]">X</span>
            </p>
          </div>
        </div>
        <div className="h-screen w-full p-[.1px] flex flex-col sm:flex-row justify-between ">
          <div className=" h-[30%] w-full sm:w-[50%] sm:h-[100%]">
            <h1 className=" font-[nikea] mt-[15vw] text-5xl sm:text-7xl  font-light text-white">
              READY <br /> FOR <br />{" "}
              <span className=" text-[#621cd1]">FUTURE?</span>
            </h1>
          </div>
          <div className="flex sm:h-full sm:w-[50%] h-[50%] w-full sm:flex-row flex-col justify-end items-center">
            <div>
              <p className=" text-white text-right font-[nikea] sm:text-5xl text-3xl ">
                450<span className=" text-[#703fdb]">+</span> MPH
              </p>
              <button className=" text-white border border-white px-10 py-2 mt-6">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
