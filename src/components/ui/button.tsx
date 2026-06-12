import * as React from "react"
import { cn } from "@/lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "ghost" | "outline"
  size?: "default" | "icon-sm"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center gap-2 rounded-lg text-sm font-medium transition-colors focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 cursor-pointer"

    const variants = {
      default: "bg-[#4f46e5] text-white hover:bg-[#4338ca] shadow-sm",
      ghost: "hover:bg-slate-100 hover:text-slate-900 text-slate-500",
      outline: "border border-slate-200 bg-white hover:bg-slate-50 text-slate-700"
    }

    const sizes = {
      default: "h-9 px-4 py-2",
      "icon-sm": "h-8 w-8"
    }

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
