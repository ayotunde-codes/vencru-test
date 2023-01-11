import SettingNav from "./SettingNav";

export default function SettingLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen py-8 bg-gray-50 ">
      {/* Include shared UI here e.g. a header or sidebar */}
      <header className="sticky z-10 w-full px-4 pt-8 pb-8 -top-1 lg:px-8 lg:top-0 bg-gray-50">
        <div className="grid gap-1 ">
          <h2 className="text-3xl font-medium text-gray-900 ">Settings</h2>
          <p className="text-sm font-normal text-gray-500 ">
            Manage your team and preferences here.
          </p>
        </div>
        <nav className="w-full mt-6 overflow-x-auto scrollbar-hide">
          <SettingNav />
        </nav>
      </header>
      <div className="lg:px-8">{children}</div>
    </section>
  );
}
