"use client";
import Image from "next/image";
import React, { useState } from "react";
import Card from "../../components/Card";
import { cardData } from "../../components/data";

const page = () => {
  const [cardValue, setCardValue] = useState("visa");
  const [addCard, setAddCard] = useState(false);
  const cardOnchage = (e) => {
    setCardValue(e.target.value);
  };
  const headers = [
    {
      name: "check-invoice",
      classname: "flex-grow px-6 py-3 md:w-[12rem] xl:w-auto min-w-[12rem]",
      value: () => (
        <div className="flex items-center space-x-5">
          <div className="relative w-5 h-5">
            <Image
              src="/assets/icons/check.svg"
              alt="check all"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="flex items-center space-x-1">
            <p className="text-xs font-medium text-gray-500 ">Invoice</p>
            <div className="relative w-4 h-4">
              <Image
                src="/assets/icons/arrow-down.svg"
                alt="arroe down"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      name: "amount",
      classname: " px-6 py-3 w-32 max-w-36  ",
      value: () => (
        <>
          <p className="text-xs font-medium text-left text-gray-500 ">Amount</p>
        </>
      ),
    },
    {
      name: "date",
      classname: "hidden lg:block px-6 py-3 w-32 max-w-36 ",
      value: () => (
        <>
          <p className="text-xs font-medium text-left text-gray-500 ">Date</p>
        </>
      ),
    },
    {
      name: "status",
      classname: "hidden lg:block px-6 py-3 w-28 max-w-28  ",
      value: () => (
        <>
          <p className="text-xs font-medium text-left text-gray-500 ">Status</p>
        </>
      ),
    },
    {
      name: "user",
      classname: "hidden lg:block px-6 py-3 ",
      value: () => (
        <>
          <p className="text-xs font-medium text-left text-gray-500 ">
            Users on plan
          </p>
        </>
      ),
    },
    {
      name: "download",
      classname: "hidden lg:block px-6 py-3 ",
      value: () => (
        <>
          <p className="w-5 text-xs font-medium text-gray-500 "></p>
        </>
      ),
    },
  ];
  return (
    <main className="">
      <section>
        <div className="pb-5 border-b">
          <h2 className="text-lg font-medium text-gray-900 ">Payment method</h2>
          <p className="text-sm font-normal text-gray-500 ">
            Update your billing details and address.
          </p>
        </div>
        {/* first section */}

        <div className="grid gap-4 py-6 border-b md:gap-0 md:flex md:space-x-8 lg:space-x-16 xl:space-x-24">
          <div className=" max-w-[18rem]">
            <h5 className="text-sm font-medium text-gray-700">Contact email</h5>
            <p className="text-sm text-gray-400 ">
              Where should invoices be sent?
            </p>
          </div>
          {/* radio form 🔘☢️ */}
          <form action="" className="grid gap-4">
            <label className="flex items-start space-x-2 ">
              <div className="radio-wrap">
                <input type="radio" name="radio" id="" className="radio" />
              </div>
              <div className="grid">
                <h6 className="text-sm font-medium text-gray-700 ">
                  Send to my account email
                </h6>
                <p className="text-sm font-normal text-gray-500 ">
                  olivia@untitledui.com
                </p>
              </div>
            </label>
            <label className="flex items-start space-x-2 ">
              <div className="radio-wrap">
                <input type="radio" name="radio" id="" className="radio" />
              </div>
              <div className="grid gap-3">
                <h6 className="text-sm font-medium text-gray-700 ">
                  Send to an alternative email
                </h6>
                <div className=" py-[0.625rem] flex items-center shadow-sm px-[0.875rem] border border-gray-300 w-[22rem] lg:w-[26rem] xl:w-[28rem] rounded-lg max-w-md">
                  <div className="relative w-5 h-5 ">
                    <Image
                      src="/assets/icons/mail.svg"
                      alt="logo"
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                  <input
                    type="text"
                    className="flex-grow ml-2 text-base text-gray-900 bg-transparent outline-none focus:bg-transparent"
                  />
                </div>
              </div>
            </label>
          </form>
        </div>

        {/* second section checkbox✅☑️☑️✔️✅ */}

        <div className="grid gap-4 py-6 md:gap-0 md:flex md:space-x-8 lg:space-x-16 xl:space-x-24">
          <div className=" max-w-[18rem]">
            <h5 className="text-sm font-medium text-gray-700">Card details</h5>
            <p className="text-sm text-gray-400 ">
              Select default payment method.
            </p>
          </div>
          {/* radio form 🔘☢️ */}
          <form action="" className="grid flex-grow gap-4">
            {cardData.map((data) => (
              <Card
                logo={data.logo}
                ending={data.ending}
                expireDate={data.expireDate}
                key={data.name}
                isActive={cardValue === data.name}
                value={data.name}
                onchange={cardOnchage}
              />
            ))}
            <div className="grid items-center gap-2 space-x-5 md:gap-0 md:flex">
              <button
                className="flex items-center space-x-3 outline-none "
                onClick={(e) => {
                  e.preventDefault();
                  setAddCard(true);
                  setTimeout(() => {
                    setAddCard(false);
                  }, 2000);
                }}
                disabled={addCard}
              >
                <div className="relative w-5 h-5">
                  <Image
                    src="/assets/icons/plus.svg"
                    alt="logo"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <p className="text-sm font-medium text-gray-500 ">
                  Add new payment method
                </p>
              </button>
              {addCard ? (
                <p className="text-sm text-red-400 ">
                  Feature Not available yet🙏🏼🙇🏼
                </p>
              ) : null}
            </div>
          </form>
        </div>
      </section>
      <section>
        <div className="grid gap-3 mt-3 md:gap-0 md:flex">
          <h2 className="text-lg font-medium text-gray-900 ">
            Billing history
          </h2>
          <div className=" px-4 py-[0.625rem] w-max flex items-center space-x-2 bg-white shadow-sm rounded-lg border border-gray-300 md:ml-auto">
            <div className="relative w-5 h-5">
              <Image
                src="/assets/icons/download-cloud.svg"
                alt="download"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            <p className="text-sm font-medium text-gray-700 ">Download All</p>
          </div>
        </div>
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow-md mt-7">
          <table className="w-full">
            <thead className="sticky">
              <tr className="flex items-center w-full border border-gray-200 bg-gray-50">
                {headers.map((head, ind) => (
                  <th key={head.name} className={head.classname}>
                    {head.value()}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="">
              {/* {data.map((items, ind) => (
                <tr key={ind} className="" onClick={items.onClick}>
                  {items.data.map((val, index) => (
								<td key={index} className=''>
									<p>{val}</p>
								</td>
							))}
                </tr>
              ))} */}

              <tr className="flex items-center w-full">
                <td className="flex-grow px-6 py-3 md:w-[12rem] xl:w-auto min-w-[12rem] ">
                  <div className="flex items-center space-x-5">
                    <div className="relative w-5 h-5">
                      <Image
                        src="/assets/icons/check.svg"
                        alt="check all"
                        fill
                        style={{ objectFit: "contain" }}
                      />
                    </div>

                    <p className="text-sm font-medium text-gray-900 ">
                      Basic Plan – Dec 2022
                    </p>
                  </div>
                </td>
                <td className="w-32 px-6 py-3 max-w-36">
                  <>
                    <p className="text-sm font-normal text-gray-500 ">
                      USD $10.00
                    </p>
                  </>
                </td>
                <td className="w-32 px-6 py-3 max-w-36 ">
                  <>
                    <p className="text-sm font-normal text-gray-500 ">
                      Dec 1, 2022
                    </p>
                  </>
                </td>
                <td className="px-6 py-3 w-28 max-w-28">
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
                </td>
                <td className="w-32 px-6 py-3 ">
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
                </td>
                <td className="px-6 py-3 ">
                  <div className="relative w-5 h-5 ">
                    <Image
                      src="/assets/icons/download-cloud.svg"
                      alt="download"
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
};

export default page;
