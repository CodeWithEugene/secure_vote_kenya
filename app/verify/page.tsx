"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Shield, CheckCircle2, AlertTriangle, ArrowLeft, ExternalLink } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { ThemeToggle } from "@/components/theme-toggle"

export default function VerifyPage() {
  const { toast } = useToast()
  const [transactionHash, setTransactionHash] = useState("")
  const [isVerifying, setIsVerifying] = useState(false)
  const [verificationResult, setVerificationResult] = useState<{
    status: "success" | "error" | null
    data?: {
      election: string
      voter: string
      timestamp: string
      candidate: string
      blockNumber: number
      confirmations: number
    }
    error?: string
  }>({ status: null })

  const handleVerify = async () => {
    if (!transactionHash) {
      toast({
        title: "Error",
        description: "Please enter a transaction hash to verify.",
        variant: "destructive",
      })
      return
    }

    setIsVerifying(true)
    setVerificationResult({ status: null })

    // Simulate verification process
    setTimeout(() => {
      if (transactionHash.startsWith("0x") && transactionHash.length === 66) {
        setVerificationResult({
          status: "success",
          data: {
            election: "Presidential Election 2023",
            voter: "0x7f9e8d7c6b5a4e3f2d1c0b9a8e7d6c5f4e3d2b1a",
            timestamp: "August 9, 2023 at 10:45 AM",
            candidate: "Candidate A",
            blockNumber: 12345678,
            confirmations: 5432,
          },
        })
      } else {
        setVerificationResult({
          status: "error",
          error: "Invalid transaction hash or transaction not found on the blockchain.",
        })
      }
      setIsVerifying(false)
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <header className="bg-white dark:bg-gray-950 shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-emerald-600 dark:text-emerald-500" />
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">SecureVote Kenya</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link
                href="/"
                className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-500 font-medium"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-500 font-medium"
              >
                About
              </Link>
              <Link
                href="/elections"
                className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-500 font-medium"
              >
                Elections
              </Link>
              <Link
                href="/results"
                className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-500 font-medium"
              >
                Results
              </Link>
            </nav>
            <div className="flex items-center mr-4">
              <ThemeToggle />
            </div>
            <div>
              <Link href="/login">
                <Button variant="outline" className="mr-2">
                  Login
                </Button>
              </Link>
              <Link href="/register">
                <Button>Register</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="mb-6">
          <Link href="/" className="inline-flex items-center text-emerald-600 dark:text-emerald-500 hover:underline">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Home
          </Link>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Blockchain Vote Verification</CardTitle>
              <CardDescription>Verify that your vote was correctly recorded on the blockchain</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="transaction-hash" className="text-sm font-medium">
                    Transaction Hash
                  </label>
                  <div className="flex space-x-2">
                    <Input
                      id="transaction-hash"
                      placeholder="Enter your transaction hash (0x...)"
                      value={transactionHash}
                      onChange={(e) => setTransactionHash(e.target.value)}
                    />
                    <Button onClick={handleVerify} disabled={isVerifying}>
                      {isVerifying ? "Verifying..." : "Verify"}
                    </Button>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    You can find your transaction hash in your vote receipt or email confirmation.
                  </p>
                </div>

                {verificationResult.status === "success" && (
                  <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <CheckCircle2 className="h-6 w-6 text-emerald-600 dark:text-emerald-500" />
                      <h3 className="text-lg font-medium text-emerald-800 dark:text-emerald-400">
                        Vote Successfully Verified
                      </h3>
                    </div>

                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Election</p>
                          <p className="font-medium">{verificationResult.data?.election}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Timestamp</p>
                          <p className="font-medium">{verificationResult.data?.timestamp}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Candidate</p>
                          <p className="font-medium">{verificationResult.data?.candidate}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Block Number</p>
                          <p className="font-medium">{verificationResult.data?.blockNumber}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Confirmations</p>
                          <p className="font-medium">{verificationResult.data?.confirmations}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Voter Address</p>
                          <p className="font-medium text-xs font-mono truncate">{verificationResult.data?.voter}</p>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-emerald-200 dark:border-emerald-800">
                        <p className="text-sm text-emerald-800 dark:text-emerald-400">
                          Your vote was successfully recorded on the blockchain and cannot be altered. The vote has been
                          confirmed by multiple nodes and is permanently stored.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {verificationResult.status === "error" && (
                  <Alert variant="destructive">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertDescription>{verificationResult.error}</AlertDescription>
                  </Alert>
                )}

                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
                  <h3 className="text-lg font-medium mb-4">How Verification Works</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    When you cast a vote, it is recorded as a transaction on the blockchain. This transaction contains
                    encrypted information about your vote that can be verified without revealing who you voted for to
                    others.
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li>Enter the transaction hash you received after voting</li>
                    <li>Our system queries the blockchain to verify the transaction exists</li>
                    <li>The system decrypts the vote information using your unique voter key</li>
                    <li>The verification confirms your vote was correctly recorded and has not been tampered with</li>
                  </ol>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" asChild>
                <Link href="https://etherscan.io" target="_blank" rel="noopener noreferrer">
                  View on Etherscan
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild>
                <Link href="/dashboard">Go to Dashboard</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-12 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="h-6 w-6 text-emerald-500" />
                <h3 className="text-xl font-bold">SecureVote Kenya</h3>
              </div>
              <p className="text-gray-400">
                Ensuring secure, transparent, and tamper-proof elections for Kenya through blockchain technology.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/elections" className="text-gray-400 hover:text-white">
                    Elections
                  </Link>
                </li>
                <li>
                  <Link href="/results" className="text-gray-400 hover:text-white">
                    Results
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/how-it-works" className="text-gray-400 hover:text-white">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-gray-400 hover:text-white">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/security" className="text-gray-400 hover:text-white">
                    Security
                  </Link>
                </li>
                <li>
                  <Link href="/blockchain" className="text-gray-400 hover:text-white">
                    Blockchain Technology
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="text-gray-400">Email: info@securevote.ke</li>
                <li className="text-gray-400">Phone: +254 700 000 000</li>
                <li className="text-gray-400">Address: Nairobi, Kenya</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} SecureVote Kenya. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

