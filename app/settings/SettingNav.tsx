"use client";
import Link from "next/link";
import React from "react";
import { settingLinksData } from "../components/data";
import cn from "classnames";
import { useSelectedLayoutSegment } from "next/navigation";

const SettingNav = () => {
  const activeLink = useSelectedLayoutSegment();
  return (
    <div className="flex max-w-3xl bg-white border rounded-lg shadow-sm w-max min-h-max">
      {settingLinksData.map((data) => (
        <Link
          key={data.name}
          href={data.url}
          className={cn(
            " py-[0.625rem] px-4 font-normal text-xs xl:text-sm text-gray-800 border-r last:rounded-tr-lg last:rounded-br-lg first:rounded-tl-lg first:rounded-bl-lg last:border-r-0 hover:bg-gray-200 transition duration-150",
            {
              "bg-gray-50 ": data.slug === activeLink,
            }
          )}
        >
          {data.name}
        </Link>
      ))}
    </div>
  );
};

export default SettingNav;
