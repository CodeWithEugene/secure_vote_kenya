
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { 
  BarChart3, 
  BookOpen, 
  Calendar, 
  FileText, 
  Layers, 
  LayoutDashboard, 
  MessageSquare, 
  Settings, 
  Users,
  Video,
  HelpCircle
} from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface SidebarProps {
  collapsed: boolean;
}

const navigationItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/",
  },
  {
    title: "Users",
    icon: Users,
    href: "/users",
    subItems: [
      { title: "Admins", href: "/users/admins" },
      { title: "Instructors", href: "/users/instructors" },
      { title: "Learners", href: "/users/learners" },
    ]
  },
  {
    title: "Courses",
    icon: BookOpen,
    href: "/courses",
    subItems: [
      { title: "All Courses", href: "/courses" },
      { title: "Categories", href: "/courses/categories" },
      { title: "Curriculum", href: "/courses/curriculum" },
    ]
  },
  {
    title: "Content Library",
    icon: Layers,
    href: "/content",
    subItems: [
      { title: "Videos", href: "/content/videos" },
      { title: "Documents", href: "/content/documents" },
      { title: "Images", href: "/content/images" },
      { title: "Assessments", href: "/content/assessments" },
    ]
  },
  {
    title: "Analytics",
    icon: BarChart3,
    href: "/analytics",
  },
  {
    title: "Forums",
    icon: MessageSquare,
    href: "/forums",
  },
  {
    title: "Calendar",
    icon: Calendar,
    href: "/calendar",
  },
  {
    title: "Reports",
    icon: FileText,
    href: "/reports",
  },
  {
    title: "Live Sessions",
    icon: Video,
    href: "/live-sessions",
  },
  {
    title: "System Settings",
    icon: Settings,
    href: "/settings",
  },
];

const Sidebar: React.FC<SidebarProps> = ({ collapsed }) => {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});
  
  const toggleSubMenu = (title: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  return (
    <aside
      className={cn(
        "bg-white border-r border-gray-200 h-full overflow-y-auto overflow-x-hidden transition-all duration-300 fixed left-0 top-[57px] bottom-0",
        collapsed ? "w-20" : "w-64"
      )}
    >
      <div className="py-4">
        <nav className="px-2">
          <ul className="space-y-1">
            {navigationItems.map((item) => (
              <li key={item.title}>
                {item.subItems ? (
                  <div>
                    <button
                      onClick={() => toggleSubMenu(item.title)}
                      className={cn(
                        "w-full text-left flex items-center px-3 py-2 rounded-md text-sm transition-colors",
                        "hover:bg-gray-100 group"
                      )}
                    >
                      <TooltipProvider disableHoverableContent={!collapsed}>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <item.icon className={cn(
                              "h-5 w-5 mr-3 text-gray-500 group-hover:text-lms-primary",
                              collapsed && "mx-auto"
                            )} />
                          </TooltipTrigger>
                          {collapsed && (
                            <TooltipContent side="right">
                              {item.title}
                            </TooltipContent>
                          )}
                        </Tooltip>
                      </TooltipProvider>
                      
                      {!collapsed && (
                        <>
                          <span className="flex-1">{item.title}</span>
                          <svg
                            className={cn(
                              "h-4 w-4 transition-transform",
                              expandedItems[item.title] && "transform rotate-180"
                            )}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </>
                      )}
                    </button>
                    
                    {!collapsed && expandedItems[item.title] && (
                      <ul className="pl-10 mt-1 space-y-1">
                        {item.subItems.map((subItem) => (
                          <li key={subItem.title}>
                            <NavLink
                              to={subItem.href}
                              className={({ isActive }) =>
                                cn(
                                  "block px-3 py-1.5 rounded-md text-sm",
                                  isActive
                                    ? "bg-lms-primary/10 text-lms-primary font-medium"
                                    : "text-gray-600 hover:bg-gray-50"
                                )
                              }
                            >
                              {subItem.title}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <NavLink
                    to={item.href}
                    className={({ isActive }) =>
                      cn(
                        "flex items-center px-3 py-2 rounded-md text-sm transition-colors",
                        isActive
                          ? "bg-lms-primary/10 text-lms-primary font-medium"
                          : "text-gray-600 hover:bg-gray-100",
                        collapsed && "justify-center"
                      )
                    }
                  >
                    <TooltipProvider disableHoverableContent={!collapsed}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <item.icon className={cn("h-5 w-5", collapsed ? "mx-auto" : "mr-3")} />
                        </TooltipTrigger>
                        {collapsed && (
                          <TooltipContent side="right">
                            {item.title}
                          </TooltipContent>
                        )}
                      </Tooltip>
                    </TooltipProvider>
                    {!collapsed && <span>{item.title}</span>}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="px-2 mt-6">
          <div className={cn(
            "border-t border-gray-200 pt-4 mt-4",
            collapsed ? "mx-2" : "mx-3"
          )} />
          
          <NavLink
            to="/support"
            className={({ isActive }) =>
              cn(
                "flex items-center px-3 py-2 rounded-md text-sm transition-colors",
                isActive
                  ? "bg-lms-primary/10 text-lms-primary font-medium"
                  : "text-gray-600 hover:bg-gray-100",
                collapsed && "justify-center"
              )
            }
          >
            <TooltipProvider disableHoverableContent={!collapsed}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <HelpCircle className={cn("h-5 w-5", collapsed ? "mx-auto" : "mr-3")} />
                </TooltipTrigger>
                {collapsed && (
                  <TooltipContent side="right">
                    Support
                  </TooltipContent>
                )}
              </Tooltip>
            </TooltipProvider>
            {!collapsed && <span>Support</span>}
          </NavLink>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
