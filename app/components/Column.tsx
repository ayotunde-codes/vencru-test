"use client";
import Image from "next/image";
import React, { FC } from "react";
import Avatar from "./Avatar";

interface ColumnProps {
  invoice: string;
  amount: string;
  date: string;
  paid: boolean;
  avatars: { picture: string }[];
}
const Column: FC<ColumnProps> = ({ invoice, amount, date, paid, avatars }) => {
  return (
    <tr className="flex items-center w-full border last:border-0">
      <td className="flex-grow px-6 py-6 md:w-[12rem] xl:w-auto min-w-[12rem] ">
        <div className="flex items-center space-x-5">
          <div className="relative w-5 h-5">
            <Image
              src="/assets/icons/check.svg"
              alt="check all"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>

          <p className="text-xs font-medium text-gray-900 lg:text-sm ">
            {invoice}
          </p>
        </div>
      </td>
      <td className="w-32 px-6 py-6 xl:w-36 max-w-36">
        <>
          <p className="text-xs font-normal text-gray-500 lg:text-sm ">
            {amount}
          </p>
        </>
      </td>
      <td className="hidden w-32 px-6 py-6 lg:block xl:w-36 max-w-36 ">
        <>
          <p className="text-sm font-normal text-gray-500 ">{date}</p>
        </>
      </td>
      <td className="hidden px-6 py-6 lg:block w-28 max-w-28">
        {paid ? (
          <div className="flex items-center justify-center space-x-1 px-[0.315rem] py-[0.315rem] bg-[#ECFDF3] rounded-2xl">
            <div className="relative w-3 h-3 ">
              <Image
                src="/assets/icons/check-green.svg"
                alt="paid"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>

            <p className="text-xs font-medium text-[#027A48] ">Paid</p>
          </div>
        ) : (
          <div className="flex items-center justify-center space-x-1 px-[0.315rem] py-[0.315rem] bg-red-200 rounded-2xl">
            <p className="text-xs font-medium text-red-600 ">Not paid</p>
          </div>
        )}
      </td>
      <td className="hidden px-6 py-6 lg:block w-44 max-w-44">
        <Avatar avatars={avatars} />
      </td>
      <td className="hidden px-6 py-3 lg:block ">
        <div className="relative w-5 h-5 cursor-pointer ">
          <Image
            src="/assets/icons/download-cloud.svg"
            alt="download"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      </td>
    </tr>
  );
};

export default Column;
