"use-client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IntLinksObject } from "../../typings";
import { linksData } from "./data";
import { fetchNotification } from "./utilz";

const SideBar = () => {
  return (
    <header className="xl:w-[280px]  lg:w-64  ">
      <div className="sticky max-w-full px-6 py-8 bg-white ">
        {/* logo */}
        <Link href="/" className="flex items-center space-x-1">
          <div className="relative w-8 h-8 ">
            <Image
              src="/assets/icons/Logo.svg"
              alt="logo"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="relative w-[100px] h-8 ">
            <Image
              src="/assets/icons/Logotype.svg"
              alt="logo"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </Link>
      </div>
      {/* scroll-smooth overflow-auto gap-7 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-transparent hover:scrollbar-thumb-gray-400 */}
      <nav className="nav-scroll flex flex-col w-full max-h-[86vh] px-6 pb-8 gap-7 ">
        <div className="flex items-center px-3 py-2 border rounded-lg shadow-sm ">
          {/* search 🔎🔎 */}
          <div className="relative w-5 h-5 ">
            <Image
              src="/assets/icons/search.svg"
              alt="search"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <input
            type="text"
            className="flex-grow ml-2 bg-transparent outline-none placeholder:text-base placeholder:text-[#667085] text-base text-gray-600"
            placeholder="Search"
          />
        </div>
        {/* Nav links🔗🔗 */}
        <div className="flex flex-col gap-2 ">
          {
            // filter to remove the support and settings
            linksData
              .filter((v) => v.name !== "Settings" && v.name !== "Support")
              .map(({ url, logo, name, notification }: IntLinksObject) => (
                <Link
                  href={url}
                  key={name}
                  className="flex items-center px-2 py-2 transition duration-150 rounded-md hover:bg-gray-100"
                >
                  <div className="flex space-x-2">
                    <div className="relative w-6 h-6 ">
                      <Image
                        src={logo}
                        alt={name}
                        fill
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                    <h4 className="text-base font-medium text-gray-700 ">
                      {name}
                    </h4>
                  </div>
                  {/* conditional if notification present */}
                  {notification ? (
                    <div className="ml-auto text-sm font-medium text-gray-700 bg-gray-100 rounded-2xl py-[2px] px-[10px]">
                      10
                    </div>
                  ) : null}
                </Link>
              ))
          }
        </div>

        {/* footer */}
        <div className="">
          {/* settings and support💁‍♂️💁🏼‍♂️ */}
          <div className="flex flex-col gap-2 ">
            {
              // filter to remove all except the support and settings
              linksData
                .filter((v) => ["Settings", "Support"].includes(v.name))
                .map(({ url, logo, name, notification }: IntLinksObject) => (
                  <Link
                    href={url}
                    key={name}
                    className="flex items-center px-2 py-2 transition duration-150 rounded-md hover:bg-gray-100"
                  >
                    <div className="flex space-x-2">
                      <div className="relative w-6 h-6 ">
                        <Image
                          src={logo}
                          alt={name}
                          fill
                          style={{ objectFit: "contain" }}
                        />
                      </div>
                      <h4 className="text-base font-medium text-gray-700 ">
                        {name}
                      </h4>
                    </div>
                    {/* conditional if notification present */}
                    {notification ? (
                      <div className="ml-auto text-sm font-medium text-gray-700 bg-gray-100 rounded-2xl py-[2px] px-[10px]">
                        10
                      </div>
                    ) : null}
                  </Link>
                ))
            }
          </div>
          <div className="grid gap-4 px-4 py-5 mt-6 rounded-lg bg-gray-50">
            <div className="grid gap-1">
              <h4 className="text-sm font-medium text-gray-900">
                New features available!
              </h4>
              <p className="text-sm font-normal text-gray-500 ">
                Check out the new dashboard view. Pages now load faster.{" "}
              </p>
            </div>
            {/* video section📽️📽️📽️📽️ */}
            <div>
              {/* image/ video 🎥📽️ */}
              <div className="relative h-[7.5rem] w-full">
                <Image
                  src="/assets/images/card-image.png"
                  alt="explanner video"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-md"
                />
              </div>
            </div>

            {/* call to action 🎬 */}
            <div className="flex space-x-2 ">
              <button className="text-sm font-normal text-gray-500 border-none outline-none cursor-pointer">
                Dismiss
              </button>
              <Link
                href="/"
                className="text-sm font-normal text-[#6941C6] hover:text-[#5e2786] transition duration-150"
              >
                What’s new?
              </Link>
            </div>
          </div>
        </div>
        {/* divider ➗➗ */}
        <span className="flex w-full min-h-[1px] bg-gray-200"></span>
        <div>
          <div className="flex items-center space-x-2">
            <div className="relative w-10 h-10">
              <Image
                src="/assets/icons/Avatar.svg"
                alt="Avatar"
                fill
                // style={{ objectFit: "cover" }}
                className="rounded-full cursor-pointer"
              />
            </div>
            <div className="grid">
              <h4 className="text-sm font-medium ">Olivia Rhye</h4>
              <p className="text-sm font-normal text-gray-500 ">
                olivia@untitledui.com
              </p>
            </div>
            <div className="relative mb-auto ml-auto -mt-2 cursor-pointer w-9 h-9">
              <Image
                src="/assets/icons/logout.svg"
                alt="explanner video"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default SideBar;
