import Sidebar from "./Sidebar";

function RootLayout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="max-w-screen flex-1 mx-auto overflow-y-auto">
        {children}
      </main>
    </div>
  );
}

export default RootLayout;
