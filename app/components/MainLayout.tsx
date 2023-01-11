"use client";
import React, { FC, ReactElement, ReactNode } from "react";
import MobileNav from "./MobileNav";
import SideBar from "./SideBar";

interface Props {
  children: ReactNode | ReactNode[];
}
const MainLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <div className="fixed right-auto hidden bg-white lg:block">
        <SideBar />
      </div>
      <MobileNav />
      <div className=" lg:ml-60 xl:ml-[280px] bg-gray-50">{children}</div>
    </>
  );
};

export default MainLayout;
