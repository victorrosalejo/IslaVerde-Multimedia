"use client"

import { useState, useEffect } from "react"

export function SkipLink() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Tab" && !e.shiftKey) {
        setIsVisible(true)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  const handleClick = () => {
    const mainContent = document.getElementById("main-content")
    if (mainContent) {
      mainContent.focus()
      mainContent.scrollIntoView()
    }
    setIsVisible(false)
  }

  return (
    <a
      href="#main-content"
      onClick={handleClick}
      className={`
        fixed top-4 left-4 z-50 bg-emerald-600 text-white px-4 py-2 rounded-md
        transition-transform duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white
        ${isVisible ? "transform-none" : "transform -translate-y-16"}
      `}
    >
      Saltar al contenido principal
    </a>
  )
}
