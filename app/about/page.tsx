import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, CheckCircle2, Lock, Server, FileCheck } from "lucide-react"
import { ActiveLink } from "@/components/layout/active-link"
import { ThemeToggle } from "@/components/theme-toggle"

export default function AboutPage() {
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
        <section className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About SecureVote Kenya</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            Our mission is to transform Kenya's electoral system through blockchain technology, ensuring transparent,
            secure, and tamper-proof elections.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="transform transition-all duration-300 hover:translate-y-[-5px]">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Vision</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              SecureVote Kenya envisions a future where every Kenyan citizen can participate in free and fair elections,
              with complete confidence in the integrity of the electoral process. We believe that blockchain technology
              can address the persistent challenges of vote rigging, manipulation, and lack of transparency that have
              plagued elections in Kenya.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              By implementing a decentralized, transparent, and immutable voting system, we aim to restore public trust
              in elections and strengthen Kenya's democratic institutions.
            </p>
          </div>
          <div className="transform transition-all duration-300 hover:translate-y-[-5px]">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">The Problem We're Solving</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Elections in Kenya have faced persistent challenges, including vote rigging, manipulation, and lack of
              transparency. The existing electronic voting systems are vulnerable to cyber-attacks, unauthorized access,
              and human interference, leading to disputed election results and loss of public trust.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Our blockchain-based voting system addresses these challenges by providing a secure, transparent, and
              verifiable platform for conducting elections at all levels, from national to local.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            How Our Technology Works
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white dark:bg-gray-950 transform transition-all duration-300 hover:shadow-lg hover:scale-105">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-emerald-100 dark:bg-emerald-900 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <Lock className="h-8 w-8 text-emerald-600 dark:text-emerald-500" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Blockchain Security</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Our system uses Ethereum blockchain technology to create a decentralized, immutable ledger of votes
                    that cannot be altered or deleted once cast.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-gray-950 transform transition-all duration-300 hover:shadow-lg hover:scale-105">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-emerald-100 dark:bg-emerald-900 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <Server className="h-8 w-8 text-emerald-600 dark:text-emerald-500" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Smart Contracts</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Smart contracts automatically validate and count votes, eliminating human interference and ensuring
                    accurate results.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-gray-950 transform transition-all duration-300 hover:shadow-lg hover:scale-105">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-emerald-100 dark:bg-emerald-900 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <FileCheck className="h-8 w-8 text-emerald-600 dark:text-emerald-500" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Verification</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Voters can verify that their votes were counted correctly, while maintaining the privacy and
                    anonymity of their ballots.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Key Benefits</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4 transform transition-all duration-300 hover:translate-x-2">
              <div className="bg-emerald-100 dark:bg-emerald-900 rounded-full p-2 mt-1">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-500" />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Tamper-Proof Records</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Once a vote is cast, it is permanently recorded on the blockchain and cannot be altered or deleted.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 transform transition-all duration-300 hover:translate-x-2">
              <div className="bg-emerald-100 dark:bg-emerald-900 rounded-full p-2 mt-1">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-500" />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Transparency</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  All transactions are publicly visible on the blockchain, allowing for real-time monitoring of the
                  election process.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 transform transition-all duration-300 hover:translate-x-2">
              <div className="bg-emerald-100 dark:bg-emerald-900 rounded-full p-2 mt-1">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-500" />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Voter Privacy</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Advanced cryptographic techniques ensure that votes remain anonymous while still being verifiable.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 transform transition-all duration-300 hover:translate-x-2">
              <div className="bg-emerald-100 dark:bg-emerald-900 rounded-full p-2 mt-1">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-500" />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Cost Efficiency</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Reduces the cost of conducting elections by eliminating the need for paper ballots and manual
                  counting.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 transform transition-all duration-300 hover:translate-x-2">
              <div className="bg-emerald-100 dark:bg-emerald-900 rounded-full p-2 mt-1">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-500" />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Accessibility</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Enables remote voting, making it easier for all eligible voters to participate in elections.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 transform transition-all duration-300 hover:translate-x-2">
              <div className="bg-emerald-100 dark:bg-emerald-900 rounded-full p-2 mt-1">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-500" />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Rapid Results</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Election results are available immediately after polls close, eliminating delays and reducing
                  uncertainty.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="text-center mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Team</h3>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            SecureVote Kenya is led by a team of experienced technologists, election experts, and blockchain specialists
            committed to transforming Kenya's electoral system.
          </p>
          <Link href="/team">
            <Button variant="outline" className="transition-all duration-300 hover:bg-emerald-600 hover:text-white">
              Meet Our Team
            </Button>
          </Link>
        </section>

        <section className="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-8 text-center transform transition-all duration-300 hover:shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Join the Electoral Revolution</h3>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            Be part of Kenya's journey towards transparent, secure, and trustworthy elections. Register today to
            experience the future of voting.
          </p>
          <Link href="/register">
            <Button
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 transition-transform duration-300 hover:scale-105"
            >
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
  )
}

