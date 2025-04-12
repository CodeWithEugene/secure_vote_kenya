
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../navigation/Sidebar";
import Header from "../navigation/Header";
import { cn } from "@/lib/utils";

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header toggleSidebar={toggleSidebar} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar collapsed={sidebarCollapsed} />
        <main
          className={cn(
            "flex-1 overflow-y-auto p-6 transition-all duration-300",
            sidebarCollapsed ? "ml-20" : "ml-64"
          )}
        >
          {children}
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
