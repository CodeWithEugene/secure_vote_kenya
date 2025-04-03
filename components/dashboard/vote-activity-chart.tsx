"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

interface VoteActivityChartProps {
  data: {
    month: string
    votes: number
  }[]
}

export function VoteActivityChart({ data }: VoteActivityChartProps) {
  const chartRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    if (!chartRef.current) return

    const ctx = chartRef.current.getContext("2d")
    if (!ctx) return

    const isDarkMode = theme === "dark"
    const textColor = isDarkMode ? "#e5e7eb" : "#374151"
    const gridColor = isDarkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"

    // Clear canvas
    ctx.clearRect(0, 0, chartRef.current.width, chartRef.current.height)

    const width = chartRef.current.width
    const height = chartRef.current.height
    const padding = 40
    const chartWidth = width - padding * 2
    const chartHeight = height - padding * 2

    // Draw grid
    ctx.strokeStyle = gridColor
    ctx.lineWidth = 0.5

    // Horizontal grid lines
    for (let i = 0; i <= 5; i++) {
      const y = padding + (chartHeight / 5) * i
      ctx.beginPath()
      ctx.moveTo(padding, y)
      ctx.lineTo(width - padding, y)
      ctx.stroke()
    }

    // Draw x-axis labels
    ctx.fillStyle = textColor
    ctx.font = "10px sans-serif"
    ctx.textAlign = "center"

    data.forEach((item, index) => {
      const x = padding + (chartWidth / (data.length - 1)) * index
      ctx.fillText(item.month, x, height - padding + 15)
    })

    // Draw y-axis labels
    ctx.textAlign = "right"
    for (let i = 0; i <= 5; i++) {
      const y = height - padding - (chartHeight / 5) * i
      ctx.fillText(i.toString(), padding - 10, y + 3)
    }

    // Draw line
    ctx.strokeStyle = "#10b981"
    ctx.lineWidth = 2
    ctx.beginPath()

    data.forEach((item, index) => {
      const x = padding + (chartWidth / (data.length - 1)) * index
      const y = height - padding - (chartHeight / 5) * item.votes

      if (index === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }
    })

    ctx.stroke()

    // Draw points
    data.forEach((item, index) => {
      const x = padding + (chartWidth / (data.length - 1)) * index
      const y = height - padding - (chartHeight / 5) * item.votes

      ctx.fillStyle = "#10b981"
      ctx.beginPath()
      ctx.arc(x, y, 4, 0, Math.PI * 2)
      ctx.fill()

      ctx.fillStyle = isDarkMode ? "#1f2937" : "#ffffff"
      ctx.beginPath()
      ctx.arc(x, y, 2, 0, Math.PI * 2)
      ctx.fill()
    })
  }, [data, theme])

  return (
    <div className="w-full h-64">
      <canvas ref={chartRef} width={500} height={250} className="w-full h-full"></canvas>
    </div>
  )
}

