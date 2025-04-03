"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Shield, Eye, EyeOff, CheckCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { FingerprintScanner } from "@/components/biometric/fingerprint-scanner"
import { OAuthButtons } from "@/components/auth/oauth-buttons"
import { signInWithEmail, logLoginActivity } from "@/lib/supabase"
import { SupabaseError } from "@/components/errors/supabase-error"
import { ThemeToggle } from "@/components/theme-toggle"

export default function LoginPage() {
  const router = useRouter()
  const [loginMethod, setLoginMethod] = useState<"biometric" | "credentials">("biometric")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [credentials, setCredentials] = useState({
    voterID: "",
    password: "",
  })
  const [fingerprintData, setFingerprintData] = useState<string | null>(null)
  const [loginSuccess, setLoginSuccess] = useState(false)
  const [supabaseError, setSupabaseError] = useState(false)

  const handleCredentialsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    })
  }

  const handleBiometricLogin = async () => {
    if (!fingerprintData) {
      setError("Please scan your fingerprint first.")
      return
    }

    setIsLoading(true)
    setError("")

    try {
      // In a real implementation, this would verify the fingerprint against the blockchain
      // For demo purposes, we'll simulate a successful authentication
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Log the login activity
      const deviceInfo = {
        ip: "192.168.1.1", // In a real app, you would get this from the server
        deviceType: getDeviceType(),
        browser: getBrowserInfo(),
        location: "Nairobi, Kenya", // In a real app, you would get this from IP geolocation
      }

      await logLoginActivity("demo-user-id", deviceInfo)

      setLoginSuccess(true)

      // Redirect after showing success message
      setTimeout(() => {
        router.push("/dashboard")
      }, 1000)
    } catch (err) {
      console.error("Biometric login error:", err)
      setError("Biometric authentication failed. Please try again or use credentials.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleCredentialsLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Validate inputs
    if (!credentials.voterID || !credentials.password) {
      setError("Please enter both Voter ID and password.")
      setIsLoading(false)
      return
    }

    try {
      // In a real implementation, this would use the actual email from the voter ID
      const email = `${credentials.voterID.toLowerCase()}@securevote.ke`

      const { error: signInError } = await signInWithEmail(email, credentials.password)

      if (signInError) {
        throw new Error(signInError.message)
      }

      // Log the login activity
      const deviceInfo = {
        ip: "192.168.1.1", // In a real app, you would get this from the server
        deviceType: getDeviceType(),
        browser: getBrowserInfo(),
        location: "Nairobi, Kenya", // In a real app, you would get this from IP geolocation
      }

      await logLoginActivity("demo-user-id", deviceInfo)

      setLoginSuccess(true)

      // Redirect after showing success message
      setTimeout(() => {
        router.push("/dashboard")
      }, 1000)
    } catch (err) {
      console.error("Login error:", err)
      setError(err instanceof Error ? err.message : "Invalid credentials. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  // Helper functions to get device info
  const getDeviceType = () => {
    const ua = navigator.userAgent
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
      return "tablet"
    }
    if (
      /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)
    ) {
      return "mobile"
    }
    return "desktop"
  }

  const getBrowserInfo = () => {
    const ua = navigator.userAgent
    let browserName = "Unknown"

    if (ua.indexOf("Chrome") > -1) {
      browserName = "Chrome"
    } else if (ua.indexOf("Safari") > -1) {
      browserName = "Safari"
    } else if (ua.indexOf("Firefox") > -1) {
      browserName = "Firefox"
    } else if (ua.indexOf("MSIE") > -1 || ua.indexOf("Trident/") > -1) {
      browserName = "Internet Explorer"
    } else if (ua.indexOf("Edge") > -1) {
      browserName = "Edge"
    }

    return browserName
  }

  // Handle fingerprint capture
  const handleFingerprintCapture = (data: string) => {
    setFingerprintData(data)
    setError("")
  }

  // Handle OAuth success
  useEffect(() => {
    // Check if Supabase is properly configured
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      setSupabaseError(true)
    }

    // Check if redirected from OAuth provider
    const params = new URLSearchParams(window.location.search)
    if (params.get("auth") === "success") {
      setLoginSuccess(true)
      setTimeout(() => {
        router.push("/dashboard")
      }, 1000)
    }
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-4">
      {supabaseError ? (
        <SupabaseError />
      ) : (
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <Shield className="h-12 w-12 text-emerald-600 dark:text-emerald-500" />
            </div>
            <CardTitle className="text-2xl">Login to SecureVote</CardTitle>
            <CardDescription>Access your secure voting dashboard</CardDescription>
            <div className="absolute top-4 right-4">
              <ThemeToggle />
            </div>
          </CardHeader>
          <CardContent>
            {loginSuccess ? (
              <div className="flex flex-col items-center justify-center py-6 space-y-4">
                <div className="bg-emerald-100 dark:bg-emerald-900 rounded-full p-4">
                  <CheckCircle className="h-12 w-12 text-emerald-600 dark:text-emerald-500" />
                </div>
                <h3 className="text-xl font-semibold">Login Successful!</h3>
                <p className="text-center text-gray-600 dark:text-gray-400">Redirecting you to your dashboard...</p>
              </div>
            ) : (
              <>
                <Tabs
                  defaultValue="biometric"
                  onValueChange={(value) => setLoginMethod(value as "biometric" | "credentials")}
                >
                  <TabsList className="grid w-full grid-cols-2 mb-6">
                    <TabsTrigger value="biometric">Biometric</TabsTrigger>
                    <TabsTrigger value="credentials">Credentials</TabsTrigger>
                  </TabsList>

                  <TabsContent value="biometric">
                    <FingerprintScanner onCapture={handleFingerprintCapture} onError={(err) => setError(err.message)} />
                    <Button
                      onClick={handleBiometricLogin}
                      disabled={isLoading || !fingerprintData}
                      className="w-full mt-4"
                    >
                      {isLoading ? "Authenticating..." : "Login with Fingerprint"}
                    </Button>
                  </TabsContent>

                  <TabsContent value="credentials">
                    <form onSubmit={handleCredentialsLogin} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="voterID">Voter ID</Label>
                        <Input
                          id="voterID"
                          name="voterID"
                          placeholder="Enter your Voter ID"
                          value={credentials.voterID}
                          onChange={handleCredentialsChange}
                          disabled={isLoading}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <div className="relative">
                          <Input
                            id="password"
                            name="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            value={credentials.password}
                            onChange={handleCredentialsChange}
                            disabled={isLoading}
                          />
                          <button
                            type="button"
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                          </button>
                        </div>
                      </div>
                      <Button type="submit" className="w-full" disabled={isLoading}>
                        {isLoading ? "Logging in..." : "Login"}
                      </Button>
                    </form>
                  </TabsContent>
                </Tabs>

                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white dark:bg-gray-950 text-gray-500 dark:text-gray-400">
                      Or continue with
                    </span>
                  </div>
                </div>

                <OAuthButtons mode="signin" onError={(err) => setError(err.message)} />

                {error && (
                  <Alert variant="destructive" className="mt-4">
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}
              </>
            )}
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <div className="text-sm text-center text-gray-600 dark:text-gray-400">
              Don't have an account?{" "}
              <Link href="/register" className="text-emerald-600 dark:text-emerald-500 hover:underline">
                Register here
              </Link>
            </div>
            <div className="text-xs text-center text-gray-500 dark:text-gray-500">
              By logging in, you agree to our{" "}
              <Link href="/terms" className="text-emerald-600 dark:text-emerald-500 hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-emerald-600 dark:text-emerald-500 hover:underline">
                Privacy Policy
              </Link>
            </div>
          </CardFooter>
        </Card>
      )}
    </div>
  )
}

