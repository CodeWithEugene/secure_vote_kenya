"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Shield, Vote, Clock, CheckCircle2, ArrowLeft, User, Calendar, Info } from "lucide-react"

export default function ElectionPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [selectedCandidate, setSelectedCandidate] = useState("")
  const [isVoting, setIsVoting] = useState(false)
  const [isConfirming, setIsConfirming] = useState(false)
  const [voteSuccess, setVoteSuccess] = useState(false)
  const [activeTab, setActiveTab] = useState("candidates")

  // Mock election data
  const election = {
    id: params.id,
    title: "Presidential Election 2023",
    date: "August 9, 2023",
    status: "upcoming",
    description: "General election to elect the President of Kenya",
    startTime: "6:00 AM",
    endTime: "6:00 PM",
    candidates: [
      {
        id: "candidate-1",
        name: "John Mwangi",
        party: "Democratic Alliance",
        image: "/placeholder.svg?height=100&width=100",
        bio: "Former Minister of Finance with 15 years of public service experience.",
      },
      {
        id: "candidate-2",
        name: "Sarah Odhiambo",
        party: "Progressive Union",
        image: "/placeholder.svg?height=100&width=100",
        bio: "Current Governor of Nairobi County and advocate for economic reform.",
      },
      {
        id: "candidate-3",
        name: "David Kimani",
        party: "National Coalition",
        image: "/placeholder.svg?height=100&width=100",
        bio: "Business leader and philanthropist focused on job creation and education.",
      },
    ],
    locations: [
      "Nairobi Central Polling Station",
      "Mombasa City Hall",
      "Kisumu Community Center",
      "Nakuru Municipal Grounds",
      "Eldoret Public Library",
    ],
    requirements: ["Valid National ID or Passport", "Voter Registration Card", "Biometric Verification"],
  }

  const handleVote = () => {
    if (!selectedCandidate) return
    setIsVoting(true)

    // Simulate blockchain transaction
    setTimeout(() => {
      setIsVoting(false)
      setIsConfirming(true)
    }, 2000)
  }

  const confirmVote = () => {
    setIsConfirming(false)

    // Simulate blockchain confirmation
    setTimeout(() => {
      setVoteSuccess(true)
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-950 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-emerald-600 dark:text-emerald-500" />
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">SecureVote Kenya</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center">
                  <User className="h-4 w-4 text-emerald-600 dark:text-emerald-500" />
                </div>
                <span className="text-sm font-medium hidden md:inline">Joshua Lodi</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link
            href="/dashboard"
            className="inline-flex items-center text-emerald-600 dark:text-emerald-500 hover:underline"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Dashboard
          </Link>
        </div>

        <div className="bg-white dark:bg-gray-950 rounded-lg shadow-sm p-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold mb-2">{election.title}</h1>
              <p className="text-gray-600 dark:text-gray-400">{election.description}</p>
            </div>
            <Badge className="mt-4 md:mt-0 bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-400 hover:bg-yellow-100 dark:hover:bg-yellow-900 self-start">
              Upcoming
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="flex items-center space-x-3 bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
              <Calendar className="h-5 w-5 text-emerald-600 dark:text-emerald-500" />
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Date</p>
                <p className="font-medium">{election.date}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
              <Clock className="h-5 w-5 text-emerald-600 dark:text-emerald-500" />
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Time</p>
                <p className="font-medium">
                  {election.startTime} - {election.endTime}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3 bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
              <Vote className="h-5 w-5 text-emerald-600 dark:text-emerald-500" />
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Candidates</p>
                <p className="font-medium">{election.candidates.length} Candidates</p>
              </div>
            </div>
          </div>

          <Tabs defaultValue="candidates" onValueChange={(value) => setActiveTab(value)}>
            <TabsList className="grid w-full grid-cols-3 mb-6">
              <TabsTrigger value="candidates">Candidates</TabsTrigger>
              <TabsTrigger value="information">Information</TabsTrigger>
              <TabsTrigger value="verification">Verification</TabsTrigger>
            </TabsList>

            <TabsContent value="candidates" className="space-y-6">
              {voteSuccess ? (
                <div className="text-center py-8">
                  <div className="bg-emerald-100 dark:bg-emerald-900/30 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="h-10 w-10 text-emerald-600 dark:text-emerald-500" />
                  </div>
                  <h2 className="text-2xl font-bold mb-2">Vote Successfully Cast!</h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Your vote has been securely recorded on the blockchain and cannot be altered.
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-6 max-w-md mx-auto">
                    <p className="text-sm font-medium mb-2">Transaction Hash:</p>
                    <p className="text-xs font-mono break-all">0x7f9e8d7c6b5a4e3f2d1c0b9a8e7d6c5f4e3d2b1a</p>
                  </div>
                  <Button onClick={() => router.push("/dashboard")} className="bg-emerald-600 hover:bg-emerald-700">
                    Return to Dashboard
                  </Button>
                </div>
              ) : isConfirming ? (
                <Card>
                  <CardHeader>
                    <CardTitle>Confirm Your Vote</CardTitle>
                    <CardDescription>Please review your selection before submitting</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-6">
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">You are voting for:</p>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-800"></div>
                        <div>
                          <p className="font-medium">
                            {election.candidates.find((c) => c.id === selectedCandidate)?.name}
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {election.candidates.find((c) => c.id === selectedCandidate)?.party}
                          </p>
                        </div>
                      </div>
                    </div>

                    <Alert className="mb-6">
                      <Info className="h-4 w-4" />
                      <AlertDescription>
                        Once submitted, your vote cannot be changed. The vote will be securely recorded on the
                        blockchain.
                      </AlertDescription>
                    </Alert>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" onClick={() => setIsConfirming(false)}>
                      Go Back
                    </Button>
                    <Button onClick={confirmVote} className="bg-emerald-600 hover:bg-emerald-700">
                      Confirm Vote
                    </Button>
                  </CardFooter>
                </Card>
              ) : (
                <>
                  <div className="mb-4">
                    <h2 className="text-xl font-bold mb-2">Select a Candidate</h2>
                    <p className="text-gray-600 dark:text-gray-400">
                      Choose the candidate you wish to vote for in this election.
                    </p>
                  </div>

                  <RadioGroup value={selectedCandidate} onValueChange={setSelectedCandidate}>
                    <div className="space-y-4">
                      {election.candidates.map((candidate) => (
                        <div
                          key={candidate.id}
                          className={`border border-gray-200 dark:border-gray-800 rounded-lg p-4 transition-colors ${
                            selectedCandidate === candidate.id
                              ? "border-emerald-600 dark:border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20"
                              : "hover:border-gray-300 dark:hover:border-gray-700"
                          }`}
                        >
                          <RadioGroupItem value={candidate.id} id={candidate.id} className="sr-only" />
                          <Label
                            htmlFor={candidate.id}
                            className="flex flex-col sm:flex-row sm:items-center cursor-pointer"
                          >
                            <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-4">
                              <div className="w-20 h-20 rounded-full bg-gray-200 dark:bg-gray-800"></div>
                            </div>
                            <div className="flex-grow">
                              <h3 className="text-lg font-medium">{candidate.name}</h3>
                              <p className="text-emerald-600 dark:text-emerald-500 mb-2">{candidate.party}</p>
                              <p className="text-sm text-gray-600 dark:text-gray-400">{candidate.bio}</p>
                            </div>
                          </Label>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>

                  <div className="mt-6">
                    <Button
                      onClick={handleVote}
                      disabled={!selectedCandidate || isVoting}
                      className="w-full bg-emerald-600 hover:bg-emerald-700"
                    >
                      {isVoting ? "Processing..." : "Cast Your Vote"}
                    </Button>
                  </div>
                </>
              )}
            </TabsContent>

            <TabsContent value="information" className="space-y-6">
              <div>
                <h2 className="text-xl font-bold mb-4">Polling Locations</h2>
                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                  <ul className="space-y-2">
                    {election.locations.map((location, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-500 mr-2 mt-0.5" />
                        <span>{location}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-4">Voting Requirements</h2>
                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                  <ul className="space-y-2">
                    {election.requirements.map((requirement, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-500 mr-2 mt-0.5" />
                        <span>{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-4">About This Election</h2>
                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                  <p className="text-gray-600 dark:text-gray-400">
                    This election is being conducted using blockchain technology to ensure transparency, security, and
                    integrity. All votes are securely recorded on the blockchain and cannot be altered or deleted. The
                    results are automatically tallied by smart contracts, eliminating human interference in the counting
                    process.
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="verification" className="space-y-6">
              <div>
                <h2 className="text-xl font-bold mb-4">Blockchain Verification</h2>
                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 mb-4">
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    After casting your vote, you will receive a unique transaction hash that you can use to verify your
                    vote on the blockchain. This ensures that your vote was correctly recorded and has not been tampered
                    with.
                  </p>

                  <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4">
                    <h3 className="font-medium mb-2">How to Verify Your Vote</h3>
                    <ol className="list-decimal list-inside space-y-2 text-gray-600 dark:text-gray-400">
                      <li>Cast your vote during the election period</li>
                      <li>Receive your transaction hash</li>
                      <li>Visit the verification portal after voting</li>
                      <li>Enter your transaction hash to verify your vote</li>
                    </ol>
                  </div>
                </div>

                <Alert>
                  <Info className="h-4 w-4" />
                  <AlertDescription>
                    The verification process ensures complete transparency while maintaining voter privacy. Your
                    identity is never linked to your vote in a way that others can see.
                  </AlertDescription>
                </Alert>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-4">Smart Contract Audit</h2>
                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                  <p className="text-gray-600 dark:text-gray-400">
                    The smart contracts used in this election have been audited by independent security firms to ensure
                    they function correctly and securely. The audit reports are publicly available for review.
                  </p>
                  <Button variant="outline" className="mt-4">
                    View Audit Reports
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

