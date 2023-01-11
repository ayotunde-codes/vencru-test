import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center space-y-4">
        <h2 className="text-4xl font-bold lg:text-6xl">Great!🥳🥳</h2>
        <p className="max-w-lg text-base font-medium text-center text-gray-500 ">
          Great Job, but you are still on step away from the assessment,
          🤗🤗🫂🫂 You need to navigate to the Billing section.
        </p>
        <p className="max-w-lg text-base font-medium text-center text-purple-500">
          To get to the Billing section, you want to either press the
          button🔽🔽🔽 below or use the topBar
        </p>
        <Link
          href="/settings/billing"
          className="px-8 py-4 text-lg text-white bg-black border rounded-xl border-gray-50 w-max "
        >
          Go to the Billing section
        </Link>
      </div>
    </div>
  );
};

export default page;
