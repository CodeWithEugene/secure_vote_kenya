import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Shield, Clock, Search, Calendar, MapPin, Info } from "lucide-react"
import { ActiveLink } from "@/components/layout/active-link"
import { ThemeToggle } from "@/components/theme-toggle"

export default function ElectionsPage() {
  // Mock data for upcoming elections
  const upcomingElections = [
    {
      id: "election-1",
      title: "Presidential Election 2027",
      date: "August 9, 2027",
      status: "upcoming",
      description: "General election to elect the President of Kenya",
      location: "Nationwide",
      registrationDeadline: "July 9, 2027",
    },
    {
      id: "election-2",
      title: "County Governor Elections 2027",
      date: "August 9, 2027",
      status: "upcoming",
      description: "Elections for County Governors across Kenya",
      location: "All Counties",
      registrationDeadline: "July 9, 2027",
    },
    {
      id: "election-5",
      title: "Nairobi City Council By-Election",
      date: "September 15, 2023",
      status: "upcoming",
      description: "By-election to fill vacant council seats in Nairobi",
      location: "Nairobi County",
      registrationDeadline: "August 15, 2023",
    },
  ]

  // Mock data for past elections
  const pastElections = [
    {
      id: "election-3",
      title: "General Election 2022",
      date: "August 9, 2022",
      status: "completed",
      description: "General election for President, Governors, Senators, MPs",
      location: "Nationwide",
      results: "Available",
    },
    {
      id: "election-4",
      title: "University Student Council",
      date: "January 20, 2023",
      status: "completed",
      description: "Election for student representatives",
      location: "University of Nairobi",
      results: "Available",
    },
  ]

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
              <ActiveLink href="/">Home</ActiveLink>
              <ActiveLink href="/about">About</ActiveLink>
              <ActiveLink href="/elections">Elections</ActiveLink>
              <ActiveLink href="/results">Results</ActiveLink>
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
        <section className="mb-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Upcoming Elections</h2>
              <p className="text-gray-600 dark:text-gray-400">
                View and participate in upcoming elections secured by blockchain technology
              </p>
            </div>
            <div className="mt-4 md:mt-0 flex items-center space-x-2">
              <Search className="h-5 w-5 text-gray-400" />
              <Input placeholder="Search elections..." className="w-full md:w-64" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingElections.map((election) => (
              <Card
                key={election.id}
                className="bg-white dark:bg-gray-950 transform transition-all duration-300 hover:shadow-lg"
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle>{election.title}</CardTitle>
                    <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-400 hover:bg-yellow-100 dark:hover:bg-yellow-900">
                      Upcoming
                    </Badge>
                  </div>
                  <CardDescription>{election.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm">
                      <Calendar className="h-4 w-4 mr-2 text-gray-500 dark:text-gray-400" />
                      <span className="text-gray-600 dark:text-gray-400">Date: {election.date}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <MapPin className="h-4 w-4 mr-2 text-gray-500 dark:text-gray-400" />
                      <span className="text-gray-600 dark:text-gray-400">Location: {election.location}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Clock className="h-4 w-4 mr-2 text-gray-500 dark:text-gray-400" />
                      <span className="text-gray-600 dark:text-gray-400">
                        Registration Deadline: {election.registrationDeadline}
                      </span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href={`/elections/${election.id}`} className="w-full">
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700">View Details</Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Past Elections</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastElections.map((election) => (
              <Card
                key={election.id}
                className="bg-white dark:bg-gray-950 transform transition-all duration-300 hover:shadow-lg"
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle>{election.title}</CardTitle>
                    <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-400 hover:bg-emerald-100 dark:hover:bg-emerald-900">
                      Completed
                    </Badge>
                  </div>
                  <CardDescription>{election.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm">
                      <Calendar className="h-4 w-4 mr-2 text-gray-500 dark:text-gray-400" />
                      <span className="text-gray-600 dark:text-gray-400">Date: {election.date}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <MapPin className="h-4 w-4 mr-2 text-gray-500 dark:text-gray-400" />
                      <span className="text-gray-600 dark:text-gray-400">Location: {election.location}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Info className="h-4 w-4 mr-2 text-gray-500 dark:text-gray-400" />
                      <span className="text-gray-600 dark:text-gray-400">Results: {election.results}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Link href={`/elections/${election.id}`}>
                    <Button variant="outline">View Details</Button>
                  </Link>
                  <Link href={`/elections/${election.id}/results`}>
                    <Button>View Results</Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section className="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Ready for the 2027 Elections?</h3>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            Register now to participate in upcoming elections and experience secure, transparent voting with blockchain
            technology.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/register">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                Register to Vote
              </Button>
            </Link>
            <Link href="/login">
              <Button size="lg" variant="outline">
                Login
              </Button>
            </Link>
          </div>
        </section>
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

