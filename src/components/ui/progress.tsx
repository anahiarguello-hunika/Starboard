
"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => {
    const getProgressColor = (progress: number) => {
        if (progress < 25) return 'bg-red-500';
        if (progress < 50) return 'bg-orange-400';
        if (progress < 75) return 'bg-yellow-400';
        return 'bg-green-500';
    }

    return (
        <ProgressPrimitive.Root
            ref={ref}
            className={cn(
            "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
            className
            )}
            {...props}
        >
            <ProgressPrimitive.Indicator
            className={cn("h-full w-full flex-1 transition-all", getProgressColor(value || 0))}
            style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
            />
        </ProgressPrimitive.Root>
    )
})
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
