import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center space-y-4">
        <h2 className="text-4xl font-bold lg:text-6xl">Oops!!🤭🤭🤭🤭</h2>
        <p className="max-w-lg text-base font-medium text-center text-gray-500 ">
          This assessment is directed to the settings page and you my
          friend🤗🤗🫂🫂 are not on the settings page
        </p>
        <p className="max-w-lg text-base font-medium text-center text-purple-500">
          To get to the settings PAGE, you want to either press the button🔽🔽🔽
          below or use the sidebar
        </p>
        <Link
          href="/settings"
          className="px-8 py-4 text-lg text-white bg-black border rounded-xl border-gray-50 w-max "
        >
          Go to the Settings page
        </Link>
      </div>
    </div>
  );
};

export default page;
