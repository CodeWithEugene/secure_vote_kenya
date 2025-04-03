import React from "react"
import { cn } from "@/lib/utils"

interface StepProps {
  children: React.ReactNode
  className?: string
}

export function Step({ children, className }: StepProps) {
  return <div className={cn("flex flex-col items-center", className)}>{children}</div>
}

interface StepTitleProps {
  children: React.ReactNode
  className?: string
}

export function StepTitle({ children, className }: StepTitleProps) {
  return <h3 className={cn("text-sm font-medium", className)}>{children}</h3>
}

interface StepDescriptionProps {
  children: React.ReactNode
  className?: string
}

export function StepDescription({ children, className }: StepDescriptionProps) {
  return <p className={cn("text-xs text-gray-500 dark:text-gray-400", className)}>{children}</p>
}

interface StepperProps {
  children: React.ReactNode
  currentStep: number
  className?: string
}

export function Stepper({ children, currentStep, className }: StepperProps) {
  const steps = React.Children.toArray(children)

  return (
    <div className={cn("w-full", className)}>
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col items-center">
              <div
                className={cn(
                  "flex items-center justify-center w-8 h-8 rounded-full border-2 transition-colors",
                  index < currentStep
                    ? "bg-emerald-600 border-emerald-600 text-white dark:bg-emerald-500 dark:border-emerald-500"
                    : index === currentStep
                      ? "border-emerald-600 text-emerald-600 dark:border-emerald-500 dark:text-emerald-500"
                      : "border-gray-300 text-gray-300 dark:border-gray-700 dark:text-gray-700",
                )}
              >
                {index < currentStep ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <span>{index + 1}</span>
                )}
              </div>
              <div className="mt-2 text-center">{step}</div>
            </div>
            {index < steps.length - 1 && (
              <div
                className={cn(
                  "flex-1 h-0.5 transition-colors",
                  index < currentStep ? "bg-emerald-600 dark:bg-emerald-500" : "bg-gray-300 dark:bg-gray-700",
                )}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

