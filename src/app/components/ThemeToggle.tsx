"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Sync with system preference or previous choice
    const root = document.documentElement
    const stored = localStorage.getItem("theme")
    if (stored) {
      root.classList.toggle("dark", stored === "dark")
      setIsDark(stored === "dark")
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      root.classList.toggle("dark", prefersDark)
      setIsDark(prefersDark)
    }
  }, [])

  if (!mounted) return null

  const toggleTheme = () => {
    const root = document.documentElement
    const next = !isDark
    setIsDark(next)
    root.classList.toggle("dark", next)
    localStorage.setItem("theme", next ? "dark" : "light")
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      aria-pressed={isDark}
      className="
        inline-flex h-9 w-9 items-center justify-center rounded-md
        text-foreground/80 hover:text-foreground
        bg-transparent hover:bg-muted/60
        transition-colors
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary
      "
    >
      {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  )
}
