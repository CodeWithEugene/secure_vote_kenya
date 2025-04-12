
import React from "react";
import { Link } from "react-router-dom";
import { Bell, Menu, Search, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  return (
    <header className="bg-white border-b border-gray-200 py-2 px-6 flex items-center justify-between z-10">
      <div className="flex items-center">
        <Button variant="ghost" size="icon" onClick={toggleSidebar} className="mr-4">
          <Menu className="h-5 w-5" />
        </Button>
        <Link to="/" className="flex items-center">
          <div className="bg-lms-yellow rounded-md p-1">
            <span className="font-bold text-white text-lg">OH</span>
          </div>
          <span className="ml-2 font-bold text-lg text-gray-800">OneHope LMS</span>
        </Link>
      </div>
      
      <div className="flex items-center space-x-2">
        <div className="relative mr-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search..." 
            className="pl-10 py-1.5 pr-4 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-lms-primary/20 text-sm w-48" 
          />
        </div>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 bg-red-500 rounded-full w-2 h-2"></span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-64">
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <div className="max-h-[300px] overflow-y-auto">
              <DropdownMenuItem>
                <div className="flex flex-col">
                  <span className="font-medium">New course enrollment</span>
                  <span className="text-xs text-gray-500">Njeri Wainaina enrolled in "Leadership 101"</span>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <div className="flex flex-col">
                  <span className="font-medium">Assignment submission</span>
                  <span className="text-xs text-gray-500">Kipchoge Keino submitted "Final Project"</span>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <div className="flex flex-col">
                  <span className="font-medium">System update completed</span>
                  <span className="text-xs text-gray-500">LMS updated to version 2.1.0</span>
                </div>
              </DropdownMenuItem>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="justify-center text-sm text-blue-600 cursor-pointer" asChild>
              <Link to="/notifications">View all notifications</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative pl-2 pr-0">
              <div className="flex items-center">
                <Avatar className="h-8 w-8 mr-2">
                  <AvatarImage src="https://github.com/shadcn.png" alt="Wangari Maathai" />
                  <AvatarFallback>WM</AvatarFallback>
                </Avatar>
                <div className="flex flex-col items-start mr-2">
                  <span className="text-sm font-medium">Wangari Maathai</span>
                  <span className="text-xs text-gray-500">Administrator</span>
                </div>
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link to="/profile">Profile</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/settings">Account settings</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-600">
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;
