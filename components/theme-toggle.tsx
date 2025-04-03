"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Ensure component is mounted before accessing theme to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="outline" size="icon" className="w-10 h-10">
        <Moon className="h-5 w-5" />
      </Button>
    )
  }

  return (
    <Button
      variant="outline"
      size="icon"
      className="w-10 h-10 transition-all duration-300 hover:rotate-12"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-yellow-500 animate-spin-slow" />
      ) : (
        <Moon className="h-5 w-5 text-slate-700 animate-pulse" />
      )}
    </Button>
  )
}

