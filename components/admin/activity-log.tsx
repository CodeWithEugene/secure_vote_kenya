"use client"

import { formatDistanceToNow } from "date-fns"

interface Activity {
  id: number
  action: string
  user: string
  details: string
  timestamp: string
}

interface ActivityLogProps {
  activities: Activity[]
}

export function ActivityLog({ activities }: ActivityLogProps) {
  return (
    <div className="space-y-4">
      {activities.map((activity) => {
        const date = new Date(activity.timestamp)
        const timeAgo = formatDistanceToNow(date, { addSuffix: true })

        return (
          <div key={activity.id} className="border border-gray-200 dark:border-gray-800 rounded-lg p-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium">{activity.action}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{activity.details}</p>
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-500">{timeAgo}</div>
            </div>
            <div className="mt-2 text-xs text-gray-500 dark:text-gray-500">
              By: {activity.user} • {activity.timestamp}
            </div>
          </div>
        )
      })}
    </div>
  )
}

