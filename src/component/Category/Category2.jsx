import React from "react";
import Image1 from "../../assets/category/vr.png";
import Image2 from "../../assets/category/gaming.png";
import Image3 from "../../assets/category/speaker.png";
import Button from "../shared/Button";

const Category = () => {
  return (
    <div className="py-8">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* first column */}
          <div className="sm:col-span-2 py-10  pl-5 bg-gradient-to-br from-gray-200 to-gray-300/90 text-white rounded-3xl relative h-[320px] flex items-end">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-black">Enjoy</p>
                <p className="text-2xl  text-black font-bold mb-[2px]">Gaming</p>
                <p className="text-4xl xl:text-5xl font-bold  text-white mb-2">
                  CONSOLES
                </p>
                <Button
                  text="Browse"
                  bgColor={"bg-primary"}
                  textColor={"text-white"}
                />
              </div>
            </div>
            <img
              className="w-[200px] absolute top-1/2 -translate-y-1/2 -right-0"
              src={Image2}
              alt=""
            />
          </div>

          {/* second column */}
          <div className="py-10 pl-5 bg-gradient-to-br from-brandGreen to-brandGreen/90 text-white rounded-3xl relative h-[320px] flex items-start">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                  Virtual
                </p>
                <Button
                  text="Browse"
                  bgColor={"bg-white"}
                  textColor={"text-brandGreen"}
                />
              </div>
            </div>
            <img
              className="w-[320px] absolute bottom-0 right-0"
              src={Image1}
              alt=""
            />
          </div>
          {/* third column */}
          <div className="py-10 pl-5 bg-gradient-to-br from-brandBlue to-brandBlue/90 text-white rounded-3xl relative h-[320px] flex items-start">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">Amanzon</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-20 mb-2">
                  SPEAKER
                </p>
                <Button
                  text="Browse"
                  bgColor={"bg-white"}
                  textColor={"text-brandBlue"}
                />
              </div>
            </div>
            <img className="w-[200px] absolute bottom-0" src={Image3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
