import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <div>
        <h2>Oops!!🤭🤭🤭🤭</h2>
        <p>
          This assessment is directed to the settings page and you my
          friend🤗🤗🫂🫂 are not on the settings page
        </p>
        <p>
          To get to the settings PAGE, you want to either press the button🔽🔽🔽
          below or use the sidebar
        </p>
        <Link href="/settings">Go to the Settings page</Link>
      </div>
    </div>
  );
};

export default page;
