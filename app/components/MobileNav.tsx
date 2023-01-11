"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IntLinksObject } from "../../typings";
import { linksData } from "./data";
import { useSelectedLayoutSegment } from "next/navigation";
import cn from "classnames";

const MobileNav = () => {
  const activeLink = useSelectedLayoutSegment();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="sticky top-0 z-20 flex items-center px-4 py-4 bg-white border-b lg:hidden">
      <div className="max-w-full ">
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
      <div
        className="relative w-6 h-6 ml-auto"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <Image
          src="/assets/icons/menu-2.svg"
          alt="logo"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>

      {isOpen ? (
        <div className="fixed top-0 bottom-0 left-0 right-0 z-50 w-full pt-4 bg-white ">
          <nav className="flex flex-col w-full max-h-screen px-6 pb-8 nav-scroll gap-7 ">
            <p
              className="p-2 ml-auto text-base font-medium text-gray-600 cursor-pointer "
              onClick={() => {
                setIsOpen(false);
              }}
            >
              X
            </p>
            {/* Nav links🔗🔗 */}
            <div className="flex flex-col gap-2 ">
              {
                // filter to remove the support and settings
                linksData
                  .filter((v) => v.name !== "Settings" && v.name !== "Support")
                  .map(
                    ({
                      url,
                      logo,
                      name,
                      notification,
                      slug,
                    }: IntLinksObject) => (
                      <Link
                        href={url}
                        key={name}
                        onClick={() => {
                          setIsOpen(false);
                        }}
                        className={cn(
                          "flex items-center px-2 py-2 transition duration-150 rounded-md hover:bg-gray-100",
                          {
                            "bg-gray-50": slug === activeLink,
                          }
                        )}
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
                    )
                  )
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
                    .map(
                      ({
                        url,
                        logo,
                        name,
                        notification,
                        slug,
                      }: IntLinksObject) => (
                        <Link
                          href={url}
                          key={name}
                          onClick={() => {
                            setIsOpen(false);
                          }}
                          className={cn(
                            "flex items-center px-2 py-2 transition duration-150 rounded-md hover:bg-gray-100",
                            {
                              "bg-gray-50": slug === activeLink,
                            }
                          )}
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
                      )
                    )
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
                  <div className="relative w-full h-56">
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
        </div>
      ) : null}
    </header>
  );
};

export default MobileNav;
