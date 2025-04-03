import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, CheckCircle2, Lock, Server, ArrowLeft, Fingerprint } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function LearnMorePage() {
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

        <section className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Blockchain Voting: The Future of Elections
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            Discover how our blockchain-based voting system is revolutionizing electoral processes in Kenya
          </p>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white dark:bg-gray-950 rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              The Problem with Traditional Voting
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="bg-red-100 dark:bg-red-900/30 rounded-full p-2 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-red-600 dark:text-red-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Lack of Transparency</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Traditional voting systems often lack transparency, making it difficult for voters to verify that
                    their votes were counted correctly.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-red-100 dark:bg-red-900/30 rounded-full p-2 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-red-600 dark:text-red-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Vulnerability to Fraud</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Paper ballots can be tampered with, and electronic voting machines can be hacked, leading to
                    disputed election results.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-red-100 dark:bg-red-900/30 rounded-full p-2 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-red-600 dark:text-red-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Delayed Results</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Manual counting of votes is time-consuming and prone to errors, often leading to delayed and
                    disputed results.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-red-100 dark:bg-red-900/30 rounded-full p-2 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-red-600 dark:text-red-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Limited Accessibility</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Traditional voting requires physical presence at polling stations, making it difficult for some
                    citizens to participate.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-950 rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">The Blockchain Solution</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="bg-emerald-100 dark:bg-emerald-900/30 rounded-full p-2 mt-1">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-500" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Immutable Record</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Once a vote is recorded on the blockchain, it cannot be altered or deleted, ensuring the integrity
                    of the electoral process.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-emerald-100 dark:bg-emerald-900/30 rounded-full p-2 mt-1">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-500" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Decentralized Verification</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Multiple nodes verify each transaction, making it virtually impossible to manipulate the voting
                    process.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-emerald-100 dark:bg-emerald-900/30 rounded-full p-2 mt-1">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-500" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Transparent Yet Private</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Blockchain provides transparency in the process while maintaining the privacy and anonymity of
                    individual voters.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-emerald-100 dark:bg-emerald-900/30 rounded-full p-2 mt-1">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-500" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Instant Results</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Smart contracts automatically tally votes, providing instant and accurate results as soon as the
                    election closes.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-emerald-100 dark:bg-emerald-900/30 rounded-full p-2 mt-1">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-500" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Enhanced Accessibility</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Remote voting capabilities make it easier for all eligible citizens to participate in the democratic
                    process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            How Our Blockchain Voting System Works
          </h3>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-emerald-200 dark:bg-emerald-900"></div>

            <div className="space-y-12 relative">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="md:w-1/2 flex justify-end order-1 md:order-1">
                  <div className="bg-white dark:bg-gray-950 rounded-lg shadow-md p-6 relative">
                    <div className="absolute top-1/2 -right-10 transform -translate-y-1/2 hidden md:block">
                      <div className="w-8 h-8 rounded-full bg-emerald-500 border-4 border-white dark:border-gray-950 flex items-center justify-center text-white font-bold">
                        1
                      </div>
                    </div>
                    <h4 className="text-xl font-semibold mb-3">Voter Registration</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Citizens register using their national ID and biometric data (fingerprint, facial recognition).
                      This creates a secure digital identity on the blockchain.
                    </p>
                  </div>
                </div>
                <div className="md:hidden w-8 h-8 rounded-full bg-emerald-500 border-4 border-white dark:border-gray-950 flex items-center justify-center text-white font-bold z-10">
                  1
                </div>
                <div className="md:w-1/2 order-2 md:order-2"></div>
              </div>

              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="md:w-1/2 order-2 md:order-1"></div>
                <div className="md:hidden w-8 h-8 rounded-full bg-emerald-500 border-4 border-white dark:border-gray-950 flex items-center justify-center text-white font-bold z-10">
                  2
                </div>
                <div className="md:w-1/2 flex justify-start order-1 md:order-2">
                  <div className="bg-white dark:bg-gray-950 rounded-lg shadow-md p-6 relative">
                    <div className="absolute top-1/2 -left-10 transform -translate-y-1/2 hidden md:block">
                      <div className="w-8 h-8 rounded-full bg-emerald-500 border-4 border-white dark:border-gray-950 flex items-center justify-center text-white font-bold">
                        2
                      </div>
                    </div>
                    <h4 className="text-xl font-semibold mb-3">Identity Verification</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      During an election, voters authenticate their identity using biometric verification, ensuring only
                      eligible voters can participate.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="md:w-1/2 flex justify-end order-1 md:order-1">
                  <div className="bg-white dark:bg-gray-950 rounded-lg shadow-md p-6 relative">
                    <div className="absolute top-1/2 -right-10 transform -translate-y-1/2 hidden md:block">
                      <div className="w-8 h-8 rounded-full bg-emerald-500 border-4 border-white dark:border-gray-950 flex items-center justify-center text-white font-bold">
                        3
                      </div>
                    </div>
                    <h4 className="text-xl font-semibold mb-3">Secure Voting</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Voters cast their ballots securely through our platform. Each vote is encrypted and recorded as a
                      transaction on the blockchain.
                    </p>
                  </div>
                </div>
                <div className="md:hidden w-8 h-8 rounded-full bg-emerald-500 border-4 border-white dark:border-gray-950 flex items-center justify-center text-white font-bold z-10">
                  3
                </div>
                <div className="md:w-1/2 order-2 md:order-2"></div>
              </div>

              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="md:w-1/2 order-2 md:order-1"></div>
                <div className="md:hidden w-8 h-8 rounded-full bg-emerald-500 border-4 border-white dark:border-gray-950 flex items-center justify-center text-white font-bold z-10">
                  4
                </div>
                <div className="md:w-1/2 flex justify-start order-1 md:order-2">
                  <div className="bg-white dark:bg-gray-950 rounded-lg shadow-md p-6 relative">
                    <div className="absolute top-1/2 -left-10 transform -translate-y-1/2 hidden md:block">
                      <div className="w-8 h-8 rounded-full bg-emerald-500 border-4 border-white dark:border-gray-950 flex items-center justify-center text-white font-bold">
                        4
                      </div>
                    </div>
                    <h4 className="text-xl font-semibold mb-3">Transparent Counting</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Smart contracts automatically tally the votes, eliminating human error and manipulation in the
                      counting process.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="md:w-1/2 flex justify-end order-1 md:order-1">
                  <div className="bg-white dark:bg-gray-950 rounded-lg shadow-md p-6 relative">
                    <div className="absolute top-1/2 -right-10 transform -translate-y-1/2 hidden md:block">
                      <div className="w-8 h-8 rounded-full bg-emerald-500 border-4 border-white dark:border-gray-950 flex items-center justify-center text-white font-bold">
                        5
                      </div>
                    </div>
                    <h4 className="text-xl font-semibold mb-3">Verification & Results</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Voters can verify that their vote was counted correctly, and results are published in real-time
                      with cryptographic proof of accuracy.
                    </p>
                  </div>
                </div>
                <div className="md:hidden w-8 h-8 rounded-full bg-emerald-500 border-4 border-white dark:border-gray-950 flex items-center justify-center text-white font-bold z-10">
                  5
                </div>
                <div className="md:w-1/2 order-2 md:order-2"></div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Security Measures</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-white dark:bg-gray-950">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-emerald-100 dark:bg-emerald-900 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <Lock className="h-8 w-8 text-emerald-600 dark:text-emerald-500" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Advanced Encryption</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    All votes are encrypted using state-of-the-art cryptographic algorithms, ensuring that they cannot
                    be read or altered by unauthorized parties.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-gray-950">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-emerald-100 dark:bg-emerald-900 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <Fingerprint className="h-8 w-8 text-emerald-600 dark:text-emerald-500" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Biometric Authentication</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Multi-factor biometric authentication ensures that only the registered voter can cast their ballot,
                    preventing identity theft and fraud.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-gray-950">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-emerald-100 dark:bg-emerald-900 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <Server className="h-8 w-8 text-emerald-600 dark:text-emerald-500" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Distributed Network</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Our blockchain operates on a distributed network of nodes, eliminating single points of failure and
                    making the system resistant to attacks.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-8 text-center mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Ready for the Future of Voting?</h3>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            Join us in revolutionizing Kenya's electoral system. Register today to experience secure, transparent, and
            tamper-proof voting.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/register">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                Register Now
              </Button>
            </Link>
            <Link href="/about">
              <Button size="lg" variant="outline">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Frequently Asked Questions
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-950 rounded-lg shadow-sm p-6">
              <h4 className="text-lg font-semibold mb-2">Is blockchain voting secure?</h4>
              <p className="text-gray-600 dark:text-gray-400">
                Yes, blockchain voting is highly secure. The decentralized nature of blockchain, combined with advanced
                encryption and biometric authentication, makes it extremely difficult to manipulate votes or compromise
                the system.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-950 rounded-lg shadow-sm p-6">
              <h4 className="text-lg font-semibold mb-2">How is voter privacy maintained?</h4>
              <p className="text-gray-600 dark:text-gray-400">
                While the blockchain records all transactions, the identity of the voter is kept separate from their
                vote through cryptographic techniques, ensuring ballot secrecy while maintaining verifiability.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-950 rounded-lg shadow-sm p-6">
              <h4 className="text-lg font-semibold mb-2">What happens if I lose internet connection while voting?</h4>
              <p className="text-gray-600 dark:text-gray-400">
                Our system is designed to handle temporary connection issues. If you lose connection while voting, your
                session is securely saved, and you can resume once your connection is restored.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-950 rounded-lg shadow-sm p-6">
              <h4 className="text-lg font-semibold mb-2">Can I vote from anywhere?</h4>
              <p className="text-gray-600 dark:text-gray-400">
                Yes, our system allows for remote voting from any location with internet access. However, for certain
                elections, you may be required to vote from designated polling stations with biometric verification
                equipment.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-950 rounded-lg shadow-sm p-6">
              <h4 className="text-lg font-semibold mb-2">How can I verify my vote was counted correctly?</h4>
              <p className="text-gray-600 dark:text-gray-400">
                After casting your vote, you receive a unique transaction hash that you can use to verify your vote on
                the blockchain. This allows you to confirm that your vote was recorded accurately without revealing who
                you voted for.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-950 rounded-lg shadow-sm p-6">
              <h4 className="text-lg font-semibold mb-2">What if I don't have a smartphone or computer?</h4>
              <p className="text-gray-600 dark:text-gray-400">
                We maintain designated polling stations equipped with voting terminals for those without personal
                devices. These stations provide the same secure blockchain voting experience with assistance available
                if needed.
              </p>
            </div>
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

