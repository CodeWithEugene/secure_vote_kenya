"use client"

import { useState, useEffect } from "react"

interface ElectionCountdownProps {
  electionName: string
  electionDate: string
}

export function ElectionCountdown({ electionName, electionDate }: ElectionCountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(electionDate).getTime() - new Date().getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [electionDate])

  return (
    <div className="text-center">
      <h3 className="text-lg font-medium mb-4">{electionName}</h3>
      <div className="grid grid-cols-4 gap-2">
        <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-3 transform transition-all duration-300 hover:scale-105 hover:shadow-md">
          <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-500 tabular-nums">{timeLeft.days}</div>
          <div className="text-xs text-gray-600 dark:text-gray-400">Days</div>
        </div>
        <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-3 transform transition-all duration-300 hover:scale-105 hover:shadow-md">
          <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-500 tabular-nums">{timeLeft.hours}</div>
          <div className="text-xs text-gray-600 dark:text-gray-400">Hours</div>
        </div>
        <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-3 transform transition-all duration-300 hover:scale-105 hover:shadow-md">
          <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-500 tabular-nums">
            {timeLeft.minutes}
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400">Minutes</div>
        </div>
        <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-3 transform transition-all duration-300 hover:scale-105 hover:shadow-md">
          <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-500 tabular-nums">
            {timeLeft.seconds}
          </div>
          <div className="text-xs text-gray-600 dark:text-gray-400">Seconds</div>
        </div>
      </div>
      <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
        Election Date:{" "}
        {new Date(electionDate).toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
    </div>
  )
}

