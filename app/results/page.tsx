"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Shield, ArrowLeft, BarChart3, Search, Info, ExternalLink } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ThemeToggle } from "@/components/theme-toggle"

export default function ResultsPage() {
  const [activeTab, setActiveTab] = useState("current")
  const [searchTerm, setSearchTerm] = useState("")

  // Mock election results data
  const currentElections = [
    {
      id: "election-1",
      title: "Presidential Election 2023",
      date: "August 9, 2023",
      status: "ongoing",
      candidates: [
        { id: "candidate-1", name: "John Mwangi", party: "Democratic Alliance", votes: 1245678 },
        { id: "candidate-2", name: "Sarah Odhiambo", party: "Progressive Union", votes: 1156432 },
        { id: "candidate-3", name: "David Kimani", party: "National Coalition", votes: 876543 },
      ],
      totalVotes: 3278653,
      verificationUrl: "https://etherscan.io/tx/0x123",
    },
    {
      id: "election-2",
      title: "County Governor Elections",
      date: "August 9, 2023",
      status: "ongoing",
      candidates: [
        { id: "candidate-4", name: "Michael Omondi", party: "Democratic Alliance", votes: 345678 },
        { id: "candidate-5", name: "Elizabeth Wanjiku", party: "Progressive Union", votes: 356432 },
        { id: "candidate-6", name: "Robert Kipchoge", party: "National Coalition", votes: 276543 },
      ],
      totalVotes: 978653,
      verificationUrl: "https://etherscan.io/tx/0x456",
    },
  ]

  const pastElections = [
    {
      id: "election-3",
      title: "Parliamentary By-Election",
      date: "March 15, 2023",
      status: "completed",
      candidates: [
        { id: "candidate-7", name: "James Kamau", party: "Democratic Alliance", votes: 45678 },
        { id: "candidate-8", name: "Nancy Akinyi", party: "Progressive Union", votes: 56432 },
        { id: "candidate-9", name: "Peter Maina", party: "National Coalition", votes: 36543 },
      ],
      totalVotes: 138653,
      verificationUrl: "https://etherscan.io/tx/0x789",
    },
    {
      id: "election-4",
      title: "University Student Council",
      date: "January 20, 2023",
      status: "completed",
      candidates: [
        { id: "candidate-10", name: "Grace Njeri", party: "Student Alliance", votes: 2678 },
        { id: "candidate-11", name: "Brian Ochieng", party: "Progressive Students", votes: 3432 },
        { id: "candidate-12", name: "Faith Wambui", party: "Student Coalition", votes: 1543 },
      ],
      totalVotes: 7653,
      verificationUrl: "https://etherscan.io/tx/0xabc",
    },
  ]

  // Filter elections based on search term
  const filteredCurrentElections = currentElections.filter((election) =>
    election.title.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const filteredPastElections = pastElections.filter((election) =>
    election.title.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-950 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-emerald-600 dark:text-emerald-500" />
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">SecureVote Kenya</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-500 font-medium">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-500 font-medium">
                About
              </Link>
              <Link href="/elections" className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-500 font-medium">
                Elections
              </Link>
              <Link href="/results" className="text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-500 font-medium font-bold text-emerald-600 dark:text-emerald-500">
                Results
              </Link>
            </nav>
            <div className="flex items-center mr-4">
              <ThemeToggle />
            </div>
            <div>
              <Link href="/login">
                <Button variant="outline" className="mr-2">Login</Button>
              </Link>
              <Link href="/register">
                <Button>Register</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link href="/" className="inline-flex items-center text-emerald-600 dark:text-emerald-500 hover:underline">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Home
          </Link>
        </div>
        
        <div className="bg-white dark:bg-gray-950 rounded-lg shadow-sm p-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold mb-2">Election Results</h1>
              <p className="text-gray-600 dark:text-gray-400">
                View real-time and past election results secured by blockchain technology
              </p>
            </div>
            <div className="mt-4 md:mt-0 flex items-center space-x-2">
              <Search className="h-5 w-5 text-gray-400" />
              <Input 
                placeholder="Search elections..." 
                className="w-full md:w-64"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          
          <Alert className="mb-6">
            <Info className="h-4 w-4" />
            <AlertDescription>
              All election results are stored on the blockchain and can be independently verified using the transaction hash.
            </AlertDescription>
          </Alert>
          
          <Tabs defaultValue="current" onValueChange={(value) => setActiveTab(value)}>
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="current">Current Elections</TabsTrigger>
              <TabsTrigger value="past">Past Elections</TabsTrigger>
            </TabsList>
            
            <TabsContent value="current" className="space-y-6">
              {filteredCurrentElections.length > 0 ? (
                filteredCurrentElections.map((election) => (
                  <Card key={election.id} className="mb-6">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                          <CardTitle>{election.title}</CardTitle>
                          <CardDescription>Date: {election.date}</CardDescription>
                        </div>
                        <Badge className="mt-2 md:mt-0 bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-400 hover:bg-yellow-100 dark:hover:bg-yellow-900 self-start">
                          Ongoing
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {election.candidates.map((candidate) => {
                          const percentage = ((candidate.votes / election.totalVotes) * 100).toFixed(2);
                          
                          return (
                            <div key={candidate.id} className="space-y-2">
                              <div className="flex justify-between items-center">
                                <div>
                                  <p className="font-medium">{candidate.name}</p>
                                  <p className="text-sm text-gray-600 dark:text-gray-400">{candidate.party}</p>
                                </div>
                                <div className="text-right">
                                  <p className="font-medium">{percentage}%</p>
                                  <p className="text-sm text-gray-600 dark:text-gray-400">{candidate.votes.toLocaleString()} votes</p>
                                </div>
                              </div>
                              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                                <div 
                                  className="bg-emerald-600 dark:bg-emerald-500 h-2.5 rounded-full" 
                                  style={{ width: `${percentage}%` }}
                                ></div>
                              </div>
                            </div>
                          );
                        })}
                        
                        <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
                          <div className="flex justify-between items-center">
                            <p className="font-medium">Total Votes</p>
                            <p className="font-medium">{election.totalVotes.toLocaleString()}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Results are updated in real-time
                      </div>
                      <Link href={election.verificationUrl} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm" className="flex items-center">
                          Verify on Blockchain
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))
              ) : (
                <div className="text-center py-12">
                  <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-1">No Current Elections Found</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {searchTerm ? `No elections match "${searchTerm}"` : "There are no ongoing elections at this time."}
                  </p>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="past" className="space-y-6">
              <div className="mb-6">
                <Label htmlFor="filter-year" className="mb-2 block">Filter by Year</Label>
                <Select defaultValue="all">
                  <SelectTrigger id="filter-year" className="w-full md:w-48">
                    <SelectValue placeholder="Select Year" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Years</SelectItem>
                    <SelectItem value="2023">2023</SelectItem>
                    <SelectItem value="2022">2022</SelectItem>
                    <SelectItem value="2021">2021</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              {filteredPastElections.length > 0 ? (
                filteredPastElections.map((election) => (
                  <Card key={election.id} className="mb-6">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                          <CardTitle>{election.title}</CardTitle>
                          <CardDescription>Date: {election.date}</CardDescription>
                        </div>
                        <Badge className="mt-2 md:mt-0 bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-400 hover:bg-emerald-100 dark:hover:bg-emerald-900 self-start">
                          Completed
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {election.candidates.map((candidate, index) => {
                          const percentage = ((candidate.votes / election.totalVotes) * 100).toFixed(2);
                          const isWinner = index === 0; // Assuming first candidate is winner for demo
                          
                          return (
                            <div key={candidate.id} className="space-y-2">
                              <div className="flex justify-between items-center">
                                <div className="flex items-center">
                                  <p className="font-medium">{candidate.name}</p>
                                  {isWinner && (
                                    <Badge className="ml-2 bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-400">
                                      Winner
                                    </Badge>
                                  )}
                                  <p className="text-sm text-gray-600 dark:text-gray-400 ml-2">({candidate.party})</p>
                                </div>
                                <div className="text-right">
                                  <p className="font-medium">{percentage}%</p>
                                  <p className="text-sm text-gray-600 dark:text-gray-400">{candidate.votes.toLocaleString()} votes</p>
                                </div>
                              </div>
                              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                                <div 
                                  className={`h-2.5 rounded-full ${
                                    isWinner 
                                      ? "bg-emerald-600 dark:bg-emerald-500" 
                                      : "bg-gray-400 dark:bg-gray-600"
                                  }`}
                                  style={{ width: `${percentage}%` }}
                                ></div>
                              </div>
                            </div>
                          );
                        })}
                        
                        <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
                          <div className="flex justify-between items-center">
                            <p className="font-medium">Total Votes</p>
                            <p className="font-medium">{election.totalVotes.toLocaleString()}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Final results
                      </div>
                      <Link href={election.verificationUrl} target="_blank" rel="noopener noreferrer">
                        <Button variant  target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm" className="flex items-center">
                          Verify on Blockchain
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))
              ) : (
                <div className="text-center py-12">
                  <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-1">No Past Elections Found</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {searchTerm ? `No elections match "${searchTerm}"` : "There are no past elections in our records."}
                  </p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>

        <div className="bg-white dark:bg-gray-950 rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-bold mb-4">Verify Election Results</h2>ion Results</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Enter a transaction hash to verify the authenticity of election results on the blockchain.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4">
            <Input 
              placeholder="Enter transaction hash (0x...)" 
              className="flex-grow"
            />
            <Button>Verify</Button>
          </div>
          
          <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <h3 className="font-medium mb-2">How Verification Works</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Our blockchain-based voting system ensures that all votes are immutably recorded on the blockchain. 
              Each election result is stored as a transaction that can be independently verified by anyone.
            </p>
            <ol className="list-decimal list-inside text-sm text-gray-600 dark:text-gray-400 space-y-2">
              <li>Enter the transaction hash provided for the election</li>
              <li>The system will query the blockchain to verify the transaction</li>
              <li>View the detailed breakdown of votes and ensure they match the reported results</li>
              <li>Confirm the integrity of the election through cryptographic proof</li>
            </ol>
          </div>
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
                <li><Link href="/" className="text-gray-400 hover:text-white">Home</Link></li>
                <li><Link href="/about" className="text-gray-400 hover:text-white">About</Link></li>
                <li><Link href="/elections" className="text-gray-400 hover:text-white">Elections</Link></li>
                <li><Link href="/results" className="text-gray-400 hover:text-white">Results</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><Link href="/how-it-works" className="text-gray-400 hover:text-white">How It Works</Link></li>
                <li><Link href="/faq" className="text-gray-400 hover:text-white">FAQ</Link></li>
                <li><Link href="/security" className="text-gray-400 hover:text-white">Security</Link></li>
                <li><Link href="/blockchain" className="text-gray-400 hover:text-white">Blockchain Technology</Link></li>
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
  );
}

