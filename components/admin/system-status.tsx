"use client"

import { CheckCircle2, AlertTriangle, XCircle } from "lucide-react"

interface SystemStatusProps {
  status: {
    blockchain: {
      status: string
      lastBlock: string
      transactions: string
      nodes: number
    }
    database: {
      status: string
      connections: number
      queryTime: string
    }
    security: {
      status: string
      lastScan: string
      threats: number
    }
    api: {
      status: string
      requests: string
      responseTime: string
    }
  }
}

export function SystemStatus({ status }: SystemStatusProps) {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "operational":
        return <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-500" />
      case "degraded":
        return <AlertTriangle className="h-5 w-5 text-yellow-600 dark:text-yellow-500" />
      case "down":
        return <XCircle className="h-5 w-5 text-red-600 dark:text-red-500" />
      default:
        return <AlertTriangle className="h-5 w-5 text-gray-600 dark:text-gray-500" />
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "operational":
        return "Operational"
      case "degraded":
        return "Degraded"
      case "down":
        return "Down"
      default:
        return "Unknown"
    }
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-medium">Blockchain</h3>
            <div className="flex items-center space-x-2">
              {getStatusIcon(status.blockchain.status)}
              <span className="text-sm">{getStatusText(status.blockchain.status)}</span>
            </div>
          </div>
          <div className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex justify-between">
              <span>Last Block:</span>
              <span>{status.blockchain.lastBlock}</span>
            </div>
            <div className="flex justify-between">
              <span>Transactions:</span>
              <span>{status.blockchain.transactions}</span>
            </div>
            <div className="flex justify-between">
              <span>Active Nodes:</span>
              <span>{status.blockchain.nodes}</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-medium">Database</h3>
            <div className="flex items-center space-x-2">
              {getStatusIcon(status.database.status)}
              <span className="text-sm">{getStatusText(status.database.status)}</span>
            </div>
          </div>
          <div className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex justify-between">
              <span>Active Connections:</span>
              <span>{status.database.connections}</span>
            </div>
            <div className="flex justify-between">
              <span>Avg. Query Time:</span>
              <span>{status.database.queryTime}</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-medium">Security</h3>
            <div className="flex items-center space-x-2">
              {getStatusIcon(status.security.status)}
              <span className="text-sm">{getStatusText(status.security.status)}</span>
            </div>
          </div>
          <div className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex justify-between">
              <span>Last Security Scan:</span>
              <span>{status.security.lastScan}</span>
            </div>
            <div className="flex justify-between">
              <span>Active Threats:</span>
              <span>{status.security.threats}</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-medium">API</h3>
            <div className="flex items-center space-x-2">
              {getStatusIcon(status.api.status)}
              <span className="text-sm">{getStatusText(status.api.status)}</span>
            </div>
          </div>
          <div className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex justify-between">
              <span>Request Volume:</span>
              <span>{status.api.requests}</span>
            </div>
            <div className="flex justify-between">
              <span>Avg. Response Time:</span>
              <span>{status.api.responseTime}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

