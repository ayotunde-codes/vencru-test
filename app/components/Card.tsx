"use client";
import Image from "next/image";
import React, { FC } from "react";
import cn from "classnames";

interface Props {
  isActive: boolean;
  logo: string;
  expireDate: string;
  ending: string;
  value: string;
  onchange?: (e: any) => void;
}
const Card: FC<Props> = ({
  isActive,
  logo,
  expireDate,
  ending,
  value,
  onchange,
}) => {
  return (
    <label
      className={cn(
        "w-full max-w-4xl p-4 border border-gray-200 bg-white rounded-lg",
        {
          "bg-[#F9F5FF] border-[#D6BBFB]": isActive,
        }
      )}
    >
      <div className="flex ">
        <div className="relative w-[2.875rem] h-8">
          <Image src={logo} alt="logo" fill style={{ objectFit: "contain" }} />
        </div>
        <div className="ml-3 ">
          <h6
            className={cn(" text-sm text-gray-700 font-medium ", {
              "text-[#53389E]": isActive,
            })}
          >
            {ending}
          </h6>
          <p
            className={cn(" text-sm text-gray-500", {
              "text-[ #7F56D9]": isActive,
            })}
          >
            {expireDate}
          </p>
          <div className="flex items-center mt-2 space-x-4">
            <div
              className={cn("text-gray-500 font-medium text-sm", {
                ["text-[#9E77ED]"]: isActive,
              })}
            >
              {" "}
              Set as default
            </div>
            <div className={cn("text-[#6941C6] font-medium text-sm")}>Edit</div>
          </div>
        </div>
        <div className="mb-auto ml-auto radio-wrap">
          <input
            type="radio"
            name="card"
            id=""
            className="card-radio"
            value={value}
            onChange={onchange}
            checked={isActive}
          />
        </div>
      </div>
    </label>
  );
};

export default Card;
