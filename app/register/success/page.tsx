import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, ArrowRight } from "lucide-react"

export default function RegistrationSuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <CheckCircle2 className="h-16 w-16 text-emerald-600 dark:text-emerald-500" />
          </div>
          <CardTitle className="text-2xl">Registration Successful!</CardTitle>
          <CardDescription>Your secure voting account has been created</CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <p className="mb-6 text-gray-600 dark:text-gray-400">
            Your voter identity has been securely registered on the blockchain. You can now log in to access your voting
            dashboard.
          </p>

          <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg p-4 mb-6">
            <p className="text-sm text-emerald-800 dark:text-emerald-400">
              A confirmation email has been sent to your registered email address. Please check your inbox for further
              instructions.
            </p>
          </div>

          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
            <h3 className="text-lg font-medium mb-2">Your Voter ID</h3>
            <p className="text-xl font-mono bg-white dark:bg-gray-900 p-2 rounded border border-gray-200 dark:border-gray-700">
              KE-
              {Math.floor(Math.random() * 10000000)
                .toString()
                .padStart(7, "0")}
            </p>
            <p className="text-xs text-gray-500 mt-2">Please save this ID for future reference</p>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Link href="/login" className="w-full">
            <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
              Proceed to Login
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="/" className="w-full">
            <Button variant="outline" className="w-full">
              Return to Home
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}

