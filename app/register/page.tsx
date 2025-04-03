"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Stepper, Step, StepDescription, StepTitle } from "@/components/stepper"
import { Fingerprint, Shield, Eye, EyeOff, Camera, Check } from "lucide-react"

export default function RegisterPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    idNumber: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [biometricCaptured, setBiometricCaptured] = useState({
    fingerprint: false,
    retina: false,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const validatePersonalInfo = () => {
    if (!formData.firstName || !formData.lastName || !formData.idNumber || !formData.phoneNumber) {
      setError("Please fill in all required fields.")
      return false
    }
    return true
  }

  const validateCredentials = () => {
    if (!formData.email || !formData.password || !formData.confirmPassword) {
      setError("Please fill in all required fields.")
      return false
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.")
      return false
    }

    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters long.")
      return false
    }

    return true
  }

  const validateBiometrics = () => {
    if (!biometricCaptured.fingerprint || !biometricCaptured.retina) {
      setError("Please complete all biometric scans.")
      return false
    }
    return true
  }

  const handleNextStep = () => {
    setError("")

    if (currentStep === 0 && !validatePersonalInfo()) {
      return
    }

    if (currentStep === 1 && !validateCredentials()) {
      return
    }

    if (currentStep === 2 && !validateBiometrics()) {
      return
    }

    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const simulateBiometricCapture = (type: "fingerprint" | "retina") => {
    setIsLoading(true)

    // Simulate biometric capture
    setTimeout(() => {
      setBiometricCaptured({
        ...biometricCaptured,
        [type]: true,
      })
      setIsLoading(false)
    }, 2000)
  }

  const handleSubmit = async () => {
    setIsLoading(true)
    setError("")

    try {
      // Simulate registration process
      await new Promise((resolve) => setTimeout(resolve, 3000))

      // Redirect to success page
      router.push("/register/success")
    } catch (err) {
      setError("Registration failed. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <Shield className="h-12 w-12 text-emerald-600 dark:text-emerald-500" />
          </div>
          <CardTitle className="text-2xl">Register for SecureVote</CardTitle>
          <CardDescription>Create your secure voting account</CardDescription>
        </CardHeader>
        <CardContent>
          <Stepper currentStep={currentStep} className="mb-8">
            <Step>
              <StepTitle>Personal Information</StepTitle>
              <StepDescription>Your basic details</StepDescription>
            </Step>
            <Step>
              <StepTitle>Account Setup</StepTitle>
              <StepDescription>Create login credentials</StepDescription>
            </Step>
            <Step>
              <StepTitle>Biometric Capture</StepTitle>
              <StepDescription>Secure your identity</StepDescription>
            </Step>
            <Step>
              <StepTitle>Confirmation</StepTitle>
              <StepDescription>Review and submit</StepDescription>
            </Step>
          </Stepper>

          {error && (
            <Alert variant="destructive" className="mb-6">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {currentStep === 0 && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    placeholder="Enter your first name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    placeholder="Enter your last name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="idNumber">National ID Number *</Label>
                <Input
                  id="idNumber"
                  name="idNumber"
                  placeholder="Enter your ID number"
                  value={formData.idNumber}
                  onChange={handleInputChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phoneNumber">Phone Number *</Label>
                <Input
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="Enter your phone number"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          )}

          {currentStep === 1 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password *</Label>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-1">Password must be at least 8 characters long</p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password *</Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
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
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 flex flex-col items-center space-y-4">
                  <Fingerprint className="h-16 w-16 text-emerald-600 dark:text-emerald-500" />
                  <h3 className="text-lg font-medium">Fingerprint Scan</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                    Place your finger on the scanner to capture your fingerprint
                  </p>
                  {biometricCaptured.fingerprint ? (
                    <div className="flex items-center text-emerald-600 dark:text-emerald-500">
                      <Check className="mr-2" size={18} />
                      <span>Fingerprint captured</span>
                    </div>
                  ) : (
                    <Button onClick={() => simulateBiometricCapture("fingerprint")} disabled={isLoading}>
                      {isLoading ? "Scanning..." : "Scan Fingerprint"}
                    </Button>
                  )}
                </div>

                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 flex flex-col items-center space-y-4">
                  <Camera className="h-16 w-16 text-emerald-600 dark:text-emerald-500" />
                  <h3 className="text-lg font-medium">Retina Scan</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                    Look into the camera to capture your retina scan
                  </p>
                  {biometricCaptured.retina ? (
                    <div className="flex items-center text-emerald-600 dark:text-emerald-500">
                      <Check className="mr-2" size={18} />
                      <span>Retina scan captured</span>
                    </div>
                  ) : (
                    <Button onClick={() => simulateBiometricCapture("retina")} disabled={isLoading}>
                      {isLoading ? "Scanning..." : "Scan Retina"}
                    </Button>
                  )}
                </div>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                <p className="text-sm text-yellow-800 dark:text-yellow-400">
                  Your biometric data is encrypted and securely stored on the blockchain. It will only be used for voter
                  authentication and cannot be accessed by third parties.
                </p>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-6">
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-medium mb-4">Registration Summary</h3>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-2">
                    <p className="text-sm text-gray-600 dark:text-gray-400">Full Name:</p>
                    <p className="text-sm font-medium">
                      {formData.firstName} {formData.lastName}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <p className="text-sm text-gray-600 dark:text-gray-400">ID Number:</p>
                    <p className="text-sm font-medium">{formData.idNumber}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <p className="text-sm text-gray-600 dark:text-gray-400">Phone Number:</p>
                    <p className="text-sm font-medium">{formData.phoneNumber}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <p className="text-sm text-gray-600 dark:text-gray-400">Email:</p>
                    <p className="text-sm font-medium">{formData.email}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <p className="text-sm text-gray-600 dark:text-gray-400">Biometrics:</p>
                    <div className="flex items-center text-emerald-600 dark:text-emerald-500">
                      <Check className="mr-2" size={16} />
                      <span className="text-sm">Captured successfully</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg p-4">
                <p className="text-sm text-emerald-800 dark:text-emerald-400">
                  By completing registration, you will create a secure voter identity on the blockchain. This will allow
                  you to participate in elections and verify your vote.
                </p>
              </div>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-between">
          {currentStep > 0 ? (
            <Button variant="outline" onClick={handlePreviousStep} disabled={isLoading}>
              Previous
            </Button>
          ) : (
            <Link href="/">
              <Button variant="outline">Cancel</Button>
            </Link>
          )}

          {currentStep < 3 ? (
            <Button onClick={handleNextStep} disabled={isLoading}>
              Next
            </Button>
          ) : (
            <Button onClick={handleSubmit} disabled={isLoading} className="bg-emerald-600 hover:bg-emerald-700">
              {isLoading ? "Processing..." : "Complete Registration"}
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}

