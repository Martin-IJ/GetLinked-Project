import React, { useState } from "react";
import Hamburger from "../Assets/hamburger.svg";
import ImgX from "../Assets/hamburgerX.svg";
import Circle from "../Assets/CircleX.svg";
import Chain from "../Assets/chainn.png";
import Fire from "../Assets/firee.png";
import Man from "../Assets/man-wearing-glass.png";
import ShinyLight from "../Assets/spark-light.png";
import LensFlare from "../Assets/Purple-Lens-Flare-PNG.png";
import CurveLine from "../Assets/curveLine.svg";
import "../style/NavBar.css";

const NavBar = () => {
  const [hamburger, setHamburger] = useState(false);

  const handleClick = () => {
    setHamburger(!hamburger);
  };
  return (
    <div className="whiteLine">
      <div className=" flex items-center justify-between px-12 lg:px-20 whiteLine py-5">
        <h2 className="text-white text-2xl font-boldFont font-bold">
          get<span className="text-purple-bright">linked</span>
        </h2>

        <div className="hidden lg:flex items-center gap-10 text-white">
          <p>Timeline</p>
          <p>Overview</p>
          <p>FAQs</p>
          <p>Contact</p>
          <button className="purpleGradient text-[16px] w-[172px] h-[53px] rounded-[4px] ml-3">
            Register
          </button>
        </div>

        <div onClick={handleClick} className="lg:hidden">
          {hamburger ? (
            <div
              style={{ backgroundImage: `url(${Circle})` }}
              className="flex items-center justify-center w-[23px] h-[23px]"
            >
              <img src={ImgX} alt="hamburger" />
            </div>
          ) : (
            <img src={Hamburger} alt="hamburger" />
          )}
        </div>
        <div
          className={`absolute right-0 top-[4.6rem] lg:hidden flex flex-col w-full gap-10 interFont text-white text-[18px] bg-purple-dark navBorder py-10 px-10 ease-in-out duration-300 ${
            hamburger ? "block" : "hidden"
          }`}
        >
          <p>Timeline</p>
          <p>Overview</p>
          <p>FAQs</p>
          <p>Contact</p>
          <button className="purpleGradient text-[16px] w-[172px] h-[53px] rounded-[4px] mt-3">
            Register
          </button>
        </div>
      </div>

      <div className="">
        <div className="px-10 pt-5 lg:pb-5 flex flex-col items-end text-center lg:text-end">
          <p className="text-[16px] md:text[26px] lg:text-[36px] font-semibold">
            Igniting a Revolution in HR Innovation
          </p>
          <img
            src={CurveLine}
            alt=""
            className="w-[115px] md:[190px] lg:w-[253px]"
          />
        </div>
        <div className="flex w-full flex-wrap">
          <div className="w-[90%] m-auto lg:w-[50%]">
            <div className="p-10 max-w-[100%] text-center lg:text-start">
              <h1 className="bannerText font-boldFont text-[40px] md:text-[60px] lg:text-[80px] font-extrabold">
                getlinked Tech
              </h1>
              <h1 className="bannerText justify-center lg:justify-start font-boldFont text-[40px] md:text-[60px] lg:text-[80px] flex font-extrabold">
                Hackathon <span className="text-purple-bright ml-2">1.0</span>
                <span className="flex items-center">
                  <img src={Chain} alt="" className="max-w-[86px] w-[33px]" />
                  <img src={Fire} alt="" className="max-w-[86px] w-[33px]" />
                </span>
              </h1>
              <p className="text-[13px] md:text-[20px]">
                Participate in getlinked tech Hackathon 2023 stand a chance to
                win a Big prize
              </p>
              <button className="purpleGradient text-[16px] w-[172px] h-[53px] rounded-[4px] mt-3">
                Register
              </button>
              <h3 className="unicaOne text-[48px] md:text-[64px]">
                00<span className="font-custom text-sm">H</span> 00
                <span className="font-custom text-sm">M</span> 00
                <span className="font-custom text-sm">S</span>
              </h3>
            </div>
          </div>
          <div className="relative w-full flex justify-center lg:w-[50%]">
            <img
              src={ShinyLight}
              alt="light"
              className="absolute w-[339px] md:w-[667px]"
            />
            <img src={Man} alt="man" className="" />
          </div>
        </div>
      </div>
      <img src={LensFlare} alt="" className="absolute top-0 -z-10" />
    </div>
  );
};

export default NavBar;
