import type { ReactNode } from "react"

interface ShellProps {
  children: ReactNode
  className?: string
}

export function Shell({ children, className = "" }: ShellProps) {
  return (
    <div className={`min-h-screen bg-white ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </div>
  )
}

export default Shell
