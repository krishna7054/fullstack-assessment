import React from "react";
import { Link, useLocation } from "react-router-dom";
import { CircleGauge, Users, BookMarked, HelpCircle, ChartPie, Settings, LeafyGreen } from "lucide-react";

const sidebarItems = [
  { icon: CircleGauge, label: "Dashboard", href: "/" },
  { icon: Users, label: "Students", href: "/students" },
  { icon: BookMarked, label: "Chapter", href: "/chapter" },
  { icon: HelpCircle, label: "Help", href: "/help" },
  { icon: ChartPie, label: "Reports", href: "/reports" },
  { icon: Settings, label: "Settings", href: "/settings" },
];

export function Sidebar() {
  const location = useLocation();

  // Determine if a sidebar item is active
  const isActive = (href) => location.pathname === href;

  return (
    <div className="pb-10 min-h-screen border-r">
      <div className="space-y-4 py-4">
        <div className="px-2 py-2">
          <Link to="/" className="flex items-center pl-2 mb-10">
            <span className="text-2xl font-bold flex">
              <LeafyGreen className="mr-1" />
              Quyl.
            </span>
          </Link>
          <nav className="space-y-1">
            {sidebarItems.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                className={`flex items-center rounded-lg px-3 py-4 font-medium text-gray-500 transition-all hover:bg-gray-200 ${
                  isActive(item.href) ? "bg-gray-300 font-semibold text-gray-900" : ""
                }`}
              >
                <item.icon className="h-5 w-5 mr-3" />
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
