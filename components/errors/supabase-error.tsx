"use client"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { AlertCircle } from "lucide-react"
import Link from "next/link"

export function SupabaseError() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-4">
      <div className="w-full max-w-md">
        <Alert variant="destructive" className="mb-6">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Configuration Error</AlertTitle>
          <AlertDescription>
            Supabase environment variables are not properly configured. Please make sure you have set up the following
            environment variables:
            <ul className="list-disc pl-5 mt-2">
              <li>NEXT_PUBLIC_SUPABASE_URL</li>
              <li>NEXT_PUBLIC_SUPABASE_ANON_KEY</li>
            </ul>
          </AlertDescription>
        </Alert>

        <div className="bg-white dark:bg-gray-950 rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-bold mb-4">How to fix this issue:</h2>
          <ol className="list-decimal pl-5 space-y-2 text-gray-600 dark:text-gray-400">
            <li>Make sure you have created a Supabase project</li>
            <li>Go to your Supabase project dashboard</li>
            <li>Navigate to Project Settings &gt; API</li>
            <li>Copy the "Project URL" and "anon public" key</li>
            <li>Add these values to your environment variables</li>
          </ol>

          <div className="mt-6">
            <Link href="https://supabase.com/dashboard" target="_blank">
              <Button className="w-full">Go to Supabase Dashboard</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

