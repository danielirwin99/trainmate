import React from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";

const Testimonials = () => {
  return (
    <section className=" flex flex-col items-center my-8 ">
      <h1 className="font-semibold text-4xl mb-10 tracking-wider text-[#FF851B] ">
        See what our customers are saying
      </h1>
      <h3 className="tracking-wide leading-10 font-semibold text-xl mb-5">
        Lots of people are talking about us on Trust Pilot. <br /> Here are just
        a few of the extremely positive things.
      </h3>
      <div className="flex w-full px-5 xl:px-0 justify-center my-8 space-x-8 ">
        <div className="w-[50%] xl:w-[25%]  border border-gray-400">
          <div className="flex flex-col p-7">
            <div className="flex space-x-4 ">
              <BsStarFill className="star" />
              <BsStarFill className="star" />
              <BsStarFill className="star" />
              <BsStarFill className="star" />
              <BsStarHalf className="star" />
            </div>
            <p className="font-semibold my-3">
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad
              incidunt, eveniet iste ipsam nulla delectus obcaecati iure rerum
              quod repellendus?"
            </p>
            <p className="mb-3">"Lorem ipsum dolor sit onsectetur facer...."</p>
            <p className="text-xm font-bold underline cursor-not-allowed">
              Read Full Review
            </p>
            <p className="text-gray-500 mt-6 mb-1 font-bold">Jay Cutler</p>
            <p className="text-gray-500">Mr Olympia - 2006, 2007, 2009</p>
          </div>
        </div>
        <div className="w-[50%] xl:w-[25%]  border border-gray-400">
          <div className="flex flex-col p-7">
            <div className="flex space-x-4 ">
              <BsStarFill className="star" />
              <BsStarFill className="star" />
              <BsStarFill className="star" />
              <BsStarFill className="star" />
              <BsStarHalf className="star" />
            </div>
            <p className="font-semibold my-3">
              "Fixie post-ironic single-origin coffee, echo park fashion axe
              pabst unicorn pok pok solarpunk. Semiotics praxis salvia selvage,
              shaman four loko cred vegan."
            </p>

            <p className="text-xm font-bold underline cursor-not-allowed">
              Read Full Review
            </p>
            <p className="text-gray-500 mt-6 mb-1 font-bold">Chris Bumstead</p>
            <p className="text-gray-500">
              Mr Olympia Classic Physique - 4x Winner
            </p>
          </div>
        </div>
        <div className="w-[50%] xl:w-[25%] border border-gray-400 hidden xl:inline-block">
          <div className="flex flex-col p-7">
            <div className="flex space-x-4 ">
              <BsStarFill className="star" />
              <BsStarFill className="star" />
              <BsStarFill className="star" />
              <BsStarFill className="star" />
              <BsStarFill className="star" />
            </div>
            <p className="font-semibold my-3">
              "Semiotics shoreditch small batch pok pok biodiesel cardigan viral
              marfa slow-carb, messenger bag everyday carry cupping tacos
              sustainable jianbing."
            </p>
            <p className="mb-3">
              "Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis..."
            </p>
            <p className="text-xm font-bold underline cursor-not-allowed">
              Read Full Review
            </p>
            <p className="text-gray-500 mt-6 mb-1 font-bold">Ronnie Coleman</p>
            <p className="text-gray-500">Mr Olympia - 8x Champion</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
