import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Shield, Vote, BarChart3, Users, FileCheck, LockKeyhole } from "lucide-react";
import { ActiveLink } from "@/components/layout/active-link";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <header className="bg-white dark:bg-gray-950 shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-emerald-600 dark:text-emerald-500" />
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                SecureVote Kenya
              </h1>
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
        <section className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Secure, Transparent Elections for Kenya
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            Our blockchain-based voting system ensures integrity, transparency, and trust in the electoral process.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/register">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                Register to Vote
              </Button>
            </Link>
            <Link href="/learn-more">
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </Link>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <CardHeader>
              <Vote className="h-10 w-10 text-emerald-600 dark:text-emerald-500 mb-2" />
              <CardTitle>Secure Voting</CardTitle>
              <CardDescription>
                Cast your vote securely using biometric verification and blockchain technology.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400">
                Our system uses advanced encryption and biometric authentication to ensure that only eligible voters can
                cast ballots, and each voter can vote only once.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/secure-voting">
                <Button variant="ghost">Learn More</Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <CardHeader>
              <BarChart3 className="h-10 w-10 text-emerald-600 dark:text-emerald-500 mb-2" />
              <CardTitle>Real-Time Results</CardTitle>
              <CardDescription>
                View election results in real-time with complete transparency.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400">
                Our blockchain-based system provides real-time, verifiable results that cannot be tampered with,
                ensuring complete transparency in the electoral process.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/real-time-results">
                <Button variant="ghost">Learn More</Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <CardHeader>
              <LockKeyhole className="h-10 w-10 text-emerald-600 dark:text-emerald-500 mb-2" />
              <CardTitle>Tamper-Proof</CardTitle>
              <CardDescription>
                Blockchain technology ensures votes cannot be altered or deleted.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400">
                Once a vote is cast, it is permanently recorded on the blockchain and cannot be altered or deleted,
                ensuring the integrity of the electoral process.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/tamper-proof">
                <Button variant="ghost">Learn More</Button>
              </Link>
            </CardFooter>
          </Card>
        </section>

        <section className="bg-white dark:bg-gray-950 rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-emerald-100 dark:bg-emerald-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-emerald-600 dark:text-emerald-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Register</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Register with your biometric data to create a secure voter identity on the blockchain.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-100 dark:bg-emerald-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Vote className="h-8 w-8 text-emerald-600 dark:text-emerald-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Vote</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Cast your vote securely using biometric verification. Your vote is encrypted and stored on the
                blockchain.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-100 dark:bg-emerald-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FileCheck className="h-8 w-8 text-emerald-600 dark:text-emerald-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Verify</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Verify that your vote was counted correctly using our transparent, real-time results dashboard.
              </p>
            </div>
          </div>
        </section>

        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Ready for the 2027 Elections?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            Join thousands of Kenyans who trust our blockchain-based voting system for secure, transparent elections.
            The next general election will be held in 2027.
          </p>
          <Link href="/register">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
              Register Now
            </Button>
          </Link>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
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
  );
}