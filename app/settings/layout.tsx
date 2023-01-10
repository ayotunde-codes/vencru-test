import Link from "next/link";
import { settingLinksData } from "../components/data";

export default function SettingLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen px-4 py-8 lg:px-8">
      {/* Include shared UI here e.g. a header or sidebar */}
      <header className="">
        <div className="grid gap-1 ">
          <h2 className="text-3xl font-medium text-gray-900 ">Settings</h2>
          <p className="text-sm font-normal text-gray-500 ">
            Manage your team and preferences here.
          </p>
        </div>
        <nav className="w-full mt-6 mb-8 overflow-x-auto scrollbar-hide">
          <div className="flex max-w-3xl border rounded-lg shadow-sm w-max min-h-max">
            {settingLinksData.map((data) => (
              <Link
                key={data.name}
                href={data.url}
                className=" py-[0.625rem] px-4 font-normal text-xs xl:text-sm border-r last:border-r-0 hover:bg-gray-200 transition duration-150"
              >
                {data.name}
              </Link>
            ))}
          </div>
        </nav>
      </header>

      {children}
    </section>
  );
}
