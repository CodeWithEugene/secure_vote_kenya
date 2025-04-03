"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import {
  Menu,
  X,
  Home,
  Vote,
  BarChart3,
  Shield,
  Bell,
  User,
  Settings,
  LogOut,
  ChevronDown,
  ChevronRight,
} from "lucide-react"
import { useTranslation } from "@/lib/i18n"
import { useToast } from "@/components/ui/use-toast"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface MobileMenuProps {
  userName: string
}

export function MobileMenu({ userName }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const { t } = useTranslation()
  const { toast } = useToast()

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (isOpen && !target.closest("[data-mobile-menu]")) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen])

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  const handleLogout = () => {
    toast({
      title: "Logging out",
      description: "You have been successfully logged out.",
    })

    setTimeout(() => {
      router.push("/login")
    }, 1000)
  }

  const handleNotificationClick = () => {
    toast({
      title: "Notifications",
      description: "You have 2 unread notifications.",
    })
    setIsOpen(false)
  }

  const handleSettingsClick = () => {
    toast({
      title: "Settings",
      description: "Settings panel will open here.",
    })
    setIsOpen(false)
  }

  return (
    <div data-mobile-menu>
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Mobile menu overlay */}
      {isOpen && <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setIsOpen(false)} />}

      {/* Mobile menu panel */}
      <div
        className={`fixed inset-y-0 left-0 w-3/4 max-w-xs bg-white dark:bg-gray-950 z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-4 border-b border-gray-200 dark:border-gray-800">
            <div className="flex items-center space-x-2">
              <Shield className="h-6 w-6 text-emerald-600 dark:text-emerald-500" />
              <h2 className="text-xl font-bold">SecureVote</h2>
            </div>
          </div>

          {/* User info */}
          <div className="p-4 border-b border-gray-200 dark:border-gray-800">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center">
                <User className="h-5 w-5 text-emerald-600 dark:text-emerald-500" />
              </div>
              <div>
                <p className="font-medium">{userName}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">KE-1234567</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-4">
            <ul className="space-y-2">
              <li>
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  onClick={() => {
                    router.push("/dashboard")
                    setIsOpen(false)
                  }}
                >
                  <Home className="mr-3 h-5 w-5" />
                  Dashboard
                </Button>
              </li>
              <li>
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  onClick={() => {
                    router.push("/elections")
                    setIsOpen(false)
                  }}
                >
                  <Vote className="mr-3 h-5 w-5" />
                  {t("Elections")}
                </Button>
              </li>
              <li>
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  onClick={() => {
                    router.push("/results")
                    setIsOpen(false)
                  }}
                >
                  <BarChart3 className="mr-3 h-5 w-5" />
                  Results
                </Button>
              </li>
              <li>
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  onClick={() => {
                    router.push("/verify")
                    setIsOpen(false)
                  }}
                >
                  <Shield className="mr-3 h-5 w-5" />
                  Verify Vote
                </Button>
              </li>
            </ul>

            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Account</h3>
              <ul className="space-y-2">
                <li>
                  <Button variant="ghost" className="w-full justify-start" onClick={handleNotificationClick}>
                    <Bell className="mr-3 h-5 w-5" />
                    {t("Notifications")}
                  </Button>
                </li>
                <li>
                  <Button variant="ghost" className="w-full justify-start" onClick={handleSettingsClick}>
                    <Settings className="mr-3 h-5 w-5" />
                    Settings
                  </Button>
                </li>
                <li>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/20"
                    onClick={handleLogout}
                  >
                    <LogOut className="mr-3 h-5 w-5" />
                    Logout
                  </Button>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}

export function UserMenu({ userName }: { userName: string }) {
  const router = useRouter()
  const { toast } = useToast()

  const handleLogout = () => {
    toast({
      title: "Logging out",
      description: "You have been successfully logged out.",
    })

    setTimeout(() => {
      router.push("/login")
    }, 1000)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center">
            <User className="h-4 w-4 text-emerald-600 dark:text-emerald-500" />
          </div>
          <span className="text-sm font-medium hidden md:inline">{userName}</span>
          <ChevronDown className="h-4 w-4 hidden md:block" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56 animate-in slide-in-from-top-5 duration-200">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="cursor-pointer flex items-center"
          onClick={() => router.push("/dashboard?tab=profile")}
        >
          <User className="mr-2 h-4 w-4" />
          <span>Profile</span>
          <ChevronRight className="ml-auto h-4 w-4" />
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer flex items-center"
          onClick={() => router.push("/dashboard?tab=security")}
        >
          <Shield className="mr-2 h-4 w-4" />
          <span>Security</span>
          <ChevronRight className="ml-auto h-4 w-4" />
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer flex items-center"
          onClick={() => {
            toast({
              title: "Settings",
              description: "Settings panel will open here.",
            })
          }}
        >
          <Settings className="mr-2 h-4 w-4" />
          <span>Settings</span>
          <ChevronRight className="ml-auto h-4 w-4" />
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="cursor-pointer text-red-500 hover:text-red-600 focus:text-red-600"
          onClick={handleLogout}
        >
          <LogOut className="mr-2 h-4 w-4" />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export function NotificationMenu() {
  const { toast } = useToast()

  return (
    <Button
      variant="ghost"
      size="icon"
      className="relative"
      onClick={() => {
        toast({
          title: "Notifications",
          description: "You have 2 unread notifications.",
        })
      }}
    >
      <Bell className="h-5 w-5" />
      <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
    </Button>
  )
}

