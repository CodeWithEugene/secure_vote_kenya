"use client"
import { Globe } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useTranslation } from "@/lib/i18n"

export function LanguageSelector() {
  const { setLanguage, currentLanguage } = useTranslation()

  const languages = [
    { code: "en", name: "English" },
    { code: "sw", name: "Kiswahili" },
    { code: "fr", name: "Français" },
  ]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center space-x-1">
          <Globe className="h-5 w-5" />
          <span className="text-xs hidden md:inline">{currentLanguage.toUpperCase()}</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={currentLanguage === lang.code ? "bg-gray-100 dark:bg-gray-800" : ""}
          >
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

