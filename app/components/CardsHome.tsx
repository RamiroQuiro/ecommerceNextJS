"use clinet"
import {Component} from "react";
import Slider from "react-slick";
const TarjetasColoresHome = ({ className, h2, span, button }) => {
  return (
    <div
      className={`${className}  w-5/12 md:h-52 h-0 pl-10 rounded-lg md:block hidden `}
    >
      <div className="md:flex flex-col gap-3 items-start justify-center text-white h-full  hidden ">
        <h2 className="text-2xl font-bold tracking-wider">{h2}</h2>
        <span className="font-medium">{span}</span>
        <button className="rounded-2xl hover:-translate-y-1 hover:shadow-lg duration-100 py-2 px-3 bg-white text-gray-700 text-xs tracking-wider shadow-md font-medium ">
          {button}
        </button>
      </div>
      {/* <Image /> */}
    </div>
  );
};

export default function CardsHome() {
  return (
    <div className="flex h-0 md:h-72 items-center gap-5 justify-between w-full px-10 py-5 mx-auto bg-white">

      <TarjetasColoresHome
        h2={"Express Delivery"}
        span={"Whith selected Items"}
        button="Save Now"
        className="bg-gradient-to-r from-[#65C1F9] to-[#76C7F7]"
      />
      <TarjetasColoresHome
        h2={"Cash On Delivery"}
        span={">Gift Voucher"}
        button="Save Now"
        className="bg-gradient-to-r from-[#FFAD5E] to-[#FCBB7A]"
      />
      <TarjetasColoresHome
        h2={"Gift Voucher"}
        span={"Whith personal care items"}
        button="Shop Coupons"
        className="bg-gradient-to-r from-[#E67CC8] to-[#DC8DC6]"
      />
    </div>
  );
}
