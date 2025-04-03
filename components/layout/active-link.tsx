"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import type { ReactNode } from "react"

interface ActiveLinkProps {
  href: string
  children: ReactNode
  className?: string
  activeClassName?: string
  exact?: boolean
}

export function ActiveLink({
  href,
  children,
  className = "text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-500 font-medium",
  activeClassName = "font-bold text-emerald-600 dark:text-emerald-500",
  exact = false,
}: ActiveLinkProps) {
  const pathname = usePathname()
  const isActive = exact ? pathname === href : pathname === href || pathname.startsWith(`${href}/`)

  return (
    <Link href={href} className={isActive ? `${className} ${activeClassName}` : className}>
      {children}
    </Link>
  )
}

