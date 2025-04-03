"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Fingerprint, CheckCircle2, AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface FingerprintScannerProps {
  onCapture: (fingerprintData: string) => void
  onError?: (error: Error) => void
}

export function FingerprintScanner({ onCapture, onError }: FingerprintScannerProps) {
  const [isScanning, setIsScanning] = useState(false)
  const [scanProgress, setScanProgress] = useState(0)
  const [scanComplete, setScanComplete] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isBiometricSupported, setIsBiometricSupported] = useState<boolean | null>(null)
  const scannerRef = useRef<HTMLDivElement>(null)

  // Check if biometric authentication is supported
  useEffect(() => {
    const checkBiometricSupport = async () => {
      try {
        // Check if the Web Authentication API is available
        if (window.PublicKeyCredential) {
          // Check if user verification is available
          const available = await PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable()
          setIsBiometricSupported(available)
        } else {
          setIsBiometricSupported(false)
        }
      } catch (err) {
        console.error("Error checking biometric support:", err)
        setIsBiometricSupported(false)
      }
    }

    checkBiometricSupport()
  }, [])

  const startScan = async () => {
    setIsScanning(true)
    setError(null)
    setScanProgress(0)
    setScanComplete(false)

    try {
      // In a real implementation, this would connect to a fingerprint scanner
      // For demo purposes, we'll simulate the scanning process

      // Simulate progressive scanning
      const interval = setInterval(() => {
        setScanProgress((prev) => {
          const newProgress = prev + 10
          if (newProgress >= 100) {
            clearInterval(interval)
            return 100
          }
          return newProgress
        })
      }, 300)

      // Simulate scan completion after a delay
      setTimeout(() => {
        clearInterval(interval)
        setScanProgress(100)
        setScanComplete(true)

        // Generate a mock fingerprint hash
        const mockFingerprintData = generateMockFingerprintData()
        onCapture(mockFingerprintData)

        // Add visual feedback with scanner glow effect
        if (scannerRef.current) {
          scannerRef.current.classList.add("scan-complete-pulse")
          setTimeout(() => {
            if (scannerRef.current) {
              scannerRef.current.classList.remove("scan-complete-pulse")
            }
          }, 2000)
        }
      }, 3500)
    } catch (err) {
      console.error("Fingerprint scan error:", err)
      setError("Failed to scan fingerprint. Please try again.")
      setIsScanning(false)
      if (onError && err instanceof Error) {
        onError(err)
      }
    }
  }

  // Generate a mock fingerprint hash for demo purposes
  const generateMockFingerprintData = () => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    let result = ""
    const length = 64 // SHA-256 length
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    return result
  }

  // If biometric support is still being checked
  if (isBiometricSupported === null) {
    return (
      <div className="flex flex-col items-center justify-center p-6 space-y-4">
        <div className="animate-pulse">
          <Fingerprint className="h-16 w-16 text-gray-400" />
        </div>
        <p className="text-center text-gray-600 dark:text-gray-400">Checking biometric capabilities...</p>
      </div>
    )
  }

  // If biometric authentication is not supported
  if (isBiometricSupported === false) {
    return (
      <div className="flex flex-col items-center justify-center p-6 space-y-4">
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            Biometric authentication is not supported on this device. Please use password authentication instead.
          </AlertDescription>
        </Alert>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center justify-center p-6 space-y-6">
      <div
        ref={scannerRef}
        className={`relative bg-gray-100 dark:bg-gray-800 rounded-full p-8 transition-all duration-300 ${
          isScanning ? "scanner-active" : ""
        } ${scanComplete ? "bg-emerald-100 dark:bg-emerald-900/30" : ""}`}
      >
        {scanComplete ? (
          <CheckCircle2 className="h-16 w-16 text-emerald-600 dark:text-emerald-500" />
        ) : (
          <Fingerprint
            className={`h-16 w-16 ${isScanning ? "text-emerald-600 dark:text-emerald-500 animate-pulse" : "text-gray-600 dark:text-gray-400"}`}
          />
        )}

        {isScanning && !scanComplete && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="absolute inset-0 rounded-full scanner-progress"
              style={{ clipPath: `inset(${100 - scanProgress}% 0 0 0)` }}
            ></div>
          </div>
        )}
      </div>

      <div className="w-full">
        {error && (
          <Alert variant="destructive" className="mb-4">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {scanComplete ? (
          <div className="flex items-center justify-center text-emerald-600 dark:text-emerald-500 space-x-2">
            <CheckCircle2 className="h-5 w-5" />
            <span>Fingerprint captured successfully</span>
          </div>
        ) : (
          <Button onClick={startScan} disabled={isScanning} className="w-full">
            {isScanning ? "Scanning..." : "Scan Fingerprint"}
          </Button>
        )}
      </div>

      <style jsx global>{`
        .scanner-active {
          box-shadow: 0 0 0 2px rgba(16, 185, 129, 0.2);
        }
        
        .scanner-progress {
          background: linear-gradient(to bottom, rgba(16, 185, 129, 0.2), rgba(16, 185, 129, 0.1));
          transition: clip-path 0.3s ease;
        }
        
        .scan-complete-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes pulse {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
          }
          50% {
            box-shadow: 0 0 0 15px rgba(16, 185, 129, 0);
          }
        }
      `}</style>
    </div>
  )
}

