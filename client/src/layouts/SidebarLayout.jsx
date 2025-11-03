import { useState } from "react";
import { useLocation, Link, Outlet } from 'react-router-dom';
const SidebarLayout = () => {

  const [open, setOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Dashboard", path: "/dashboard", icon: "🏠" },
    { name: "My Plants", path: "/plants", icon: "🌿" },
    // { name: "Reminders", path: "/reminders", icon: "⏰" },
    // { name: "Insights", path: "/insights", icon: "📊" },
    // { name: "Profile", path: "/profile", icon: "👤" },
  ];

  return (
    <div className="flex h-screen bg-gray-50 text-gray-800">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 transform bg-white shadow-lg transition-transform duration-200 ease-in-out
        ${
          open ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 md:w-64`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h1 className="text-xl font-semibold flex items-center gap-2 text-green-600">
            🌱 GroTrack
          </h1>
          <button
            onClick={() => setOpen(false)}
            className="md:hidden text-gray-600 text-lg"
          >
            ✖
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-2 p-4 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className={`flex items-center gap-2 p-2 rounded transition 
                ${
                  location.pathname === item.path
                    ? "bg-green-100 text-green-700 font-semibold"
                    : "hover:bg-green-50"
                }`}
            >
              <span>{item.icon}</span> {item.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar for Mobile */}
        <header className="flex items-center justify-between bg-white p-4 shadow-sm md:hidden">
          <button onClick={() => setOpen(true)} className="text-2xl">
            ☰
          </button>
          <h2 className="font-semibold text-lg text-green-700">GroTrack</h2>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto nature-bg">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default SidebarLayout;
