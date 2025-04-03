"use client"

import { Shield, AlertTriangle, CheckCircle } from "lucide-react"
import { Progress } from "@/components/ui/progress"

interface SecurityStatusProps {
  status: {
    accountSecurity: number
    biometricStatus: string
    lastLogin: string
    unusualActivity: boolean
    twoFactorEnabled: boolean
  }
}

export function SecurityStatus({ status }: SecurityStatusProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">Account Security Score</h3>
        <div className="flex items-center space-x-2">
          <Shield className="h-5 w-5 text-emerald-600 dark:text-emerald-500" />
          <span className="font-bold">{status.accountSecurity}%</span>
        </div>
      </div>

      <Progress value={status.accountSecurity} className="h-2" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
          <div className="flex items-center space-x-2 mb-2">
            <CheckCircle className="h-5 w-5 text-emerald-600 dark:text-emerald-500" />
            <h4 className="font-medium">Biometric Status</h4>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">{status.biometricStatus}</p>
        </div>

        <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
          <div className="flex items-center space-x-2 mb-2">
            <CheckCircle className="h-5 w-5 text-emerald-600 dark:text-emerald-500" />
            <h4 className="font-medium">Two-Factor Authentication</h4>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">{status.twoFactorEnabled ? "Enabled" : "Disabled"}</p>
        </div>

        <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
          <div className="flex items-center space-x-2 mb-2">
            <CheckCircle className="h-5 w-5 text-emerald-600 dark:text-emerald-500" />
            <h4 className="font-medium">Last Login</h4>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">{status.lastLogin}</p>
        </div>

        <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
          <div className="flex items-center space-x-2 mb-2">
            {status.unusualActivity ? (
              <AlertTriangle className="h-5 w-5 text-yellow-600 dark:text-yellow-500" />
            ) : (
              <CheckCircle className="h-5 w-5 text-emerald-600 dark:text-emerald-500" />
            )}
            <h4 className="font-medium">Unusual Activity</h4>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {status.unusualActivity ? "Detected" : "None detected"}
          </p>
        </div>
      </div>
    </div>
  )
}

