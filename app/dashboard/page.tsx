"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Shield,
  Vote,
  BarChart3,
  Clock,
  CheckCircle2,
  AlertCircle,
  LogOut,
  User,
  Settings,
  Calendar,
  ChevronRight,
  Bell,
  Download,
} from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { VoteActivityChart } from "@/components/dashboard/vote-activity-chart"
import { ElectionCountdown } from "@/components/dashboard/election-countdown"
import { SecurityStatus } from "@/components/dashboard/security-status"
import { useTheme } from "next-themes"
import { LanguageSelector } from "@/components/language-selector"
import { useTranslation } from "@/lib/i18n"
import { ThemeToggle } from "@/components/theme-toggle"
import { MobileMenu, UserMenu, NotificationMenu } from "@/components/layout/mobile-menu"

export default function DashboardPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [activeTab, setActiveTab] = useState("overview")
  const [isLoading, setIsLoading] = useState(false)
  const { theme, setTheme } = useTheme()
  const { t } = useTranslation()
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "New election announced",
      message: "Presidential Election 2027 has been announced",
      date: "2023-10-15T10:30:00Z",
      read: false,
    },
    {
      id: 2,
      title: "Verification reminder",
      message: "Please complete your biometric verification",
      date: "2023-10-14T08:15:00Z",
      read: true,
    },
  ])

  // Mock data for elections
  const upcomingElections = [
    {
      id: "election-1",
      title: "Presidential Election 2027",
      date: "August 9, 2027",
      status: "upcoming",
      description: "General election to elect the President of Kenya",
      daysRemaining: 1365,
    },
    {
      id: "election-2",
      title: "County Governor Elections",
      date: "August 9, 2027",
      status: "upcoming",
      description: "Elections for County Governors across Kenya",
      daysRemaining: 1365,
    },
  ]

  const pastElections = [
    {
      id: "election-3",
      title: "Parliamentary By-Election",
      date: "March 15, 2023",
      status: "completed",
      participated: true,
      description: "By-election for Nairobi West constituency",
      result: "Candidate A won with 54% of votes",
    },
    {
      id: "election-4",
      title: "University Student Council",
      date: "January 20, 2023",
      status: "completed",
      participated: false,
      description: "Election for student representatives",
      result: "Candidate B won with 62% of votes",
    },
  ]

  // Mock security status
  const securityStatus = {
    accountSecurity: 85,
    biometricStatus: "Verified",
    lastLogin: "October 15, 2023 at 10:30 AM",
    unusualActivity: false,
    twoFactorEnabled: true,
  }

  // Mock voting activity data
  const votingActivityData = [
    { month: "Jan", votes: 0 },
    { month: "Feb", votes: 0 },
    { month: "Mar", votes: 1 },
    { month: "Apr", votes: 0 },
    { month: "May", votes: 0 },
    { month: "Jun", votes: 0 },
    { month: "Jul", votes: 0 },
    { month: "Aug", votes: 0 },
    { month: "Sep", votes: 0 },
    { month: "Oct", votes: 0 },
    { month: "Nov", votes: 0 },
    { month: "Dec", votes: 0 },
  ]

  const handleDownloadVoteReceipt = () => {
    setIsLoading(true)
    // Simulate PDF generation
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: "Vote Receipt Downloaded",
        description: "Your vote receipt has been downloaded successfully.",
      })
    }, 2000)
  }

  const handleMarkAllNotificationsAsRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, read: true })))
    toast({
      title: "Notifications marked as read",
      description: "All notifications have been marked as read.",
    })
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  // Function to render the appropriate content based on active tab
  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <Card className="transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-mediumnt-medium text-gray-500 dark:text-gray-400">
                    {t("Upcoming Elections")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold">{upcomingElections.length}</div>
                    <Calendar className="h-5 w-5 text-emerald-600 dark:text-emerald-500" />
                  </div>
                </CardContent>
              </Card>

              <Card className="transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {t("Elections Participated")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold">1</div>
                    <Vote className="h-5 w-5 text-emerald-600 dark:text-emerald-500" />
                  </div>
                </CardContent>
              </Card>

              <Card className="transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {t("Verification Status")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-500">{t("Verified")}</div>
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-500" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <Card className="transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <CardHeader>
                  <CardTitle>{t("Next Election Countdown")}</CardTitle>
                  <CardDescription>{t("Time remaining until the next election")}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ElectionCountdown electionName="Presidential Election 2027" electionDate="2027-08-09T08:00:00Z" />
                </CardContent>
              </Card>

              <Card className="transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <CardHeader>
                  <CardTitle>{t("Your Voting Activity")}</CardTitle>
                  <CardDescription>{t("Your voting participation over time")}</CardDescription>
                </CardHeader>
                <CardContent>
                  <VoteActivityChart data={votingActivityData} />
                </CardContent>
              </Card>
            </div>

            <Card className="mb-6 transform transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <CardTitle>{t("Upcoming Elections")}</CardTitle>
                <CardDescription>{t("Elections you are eligible to participate in")}</CardDescription>
              </CardHeader>
              <CardContent>
                {upcomingElections.length > 0 ? (
                  <div className="space-y-4">
                    {upcomingElections.map((election) => (
                      <div
                        key={election.id}
                        className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 transition-all duration-300 hover:border-emerald-300 dark:hover:border-emerald-700"
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-medium">{election.title}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{election.description}</p>
                          </div>
                          <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-400 hover:bg-yellow-100 dark:hover:bg-yellow-900">
                            {t("Upcoming")}
                          </Badge>
                        </div>
                        <div className="flex items-center mt-4 text-sm text-gray-600 dark:text-gray-400">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{election.date}</span>
                        </div>
                        <div className="mt-4">
                          <Link href={`/elections/${election.id}`}>
                            <Button
                              variant="outline"
                              className="w-full transition-all duration-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/20"
                            >
                              {t("View Details")}
                            </Button>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-6">
                    <AlertCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium mb-1">{t("No Upcoming Elections")}</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {t("There are no upcoming elections at this time.")}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card className="transform transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <CardTitle>{t("Recent Activity")}</CardTitle>
                <CardDescription>{t("Your recent voting activity")}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3 transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-900 p-2 rounded-md">
                    <div className="bg-emerald-100 dark:bg-emerald-900 rounded-full p-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-500" />
                    </div>
                    <div>
                      <p className="font-medium">{t("Vote Cast: Parliamentary By-Election")}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{t("March 15, 2023 at 10:45 AM")}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-900 p-2 rounded-md">
                    <div className="bg-emerald-100 dark:bg-emerald-900 rounded-full p-2">
                      <User className="h-4 w-4 text-emerald-600 dark:text-emerald-500" />
                    </div>
                    <div>
                      <p className="font-medium">{t("Account Created")}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{t("January 5, 2023 at 2:30 PM")}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </>
        )
      case "elections":
        return (
          <>
            <Card className="mb-6 transform transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <CardTitle>{t("Upcoming Elections")}</CardTitle>
                <CardDescription>{t("Elections you are eligible to participate in")}</CardDescription>
              </CardHeader>
              <CardContent>
                {upcomingElections.length > 0 ? (
                  <div className="space-y-4">
                    {upcomingElections.map((election) => (
                      <div
                        key={election.id}
                        className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 transition-all duration-300 hover:border-emerald-300 dark:hover:border-emerald-700"
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-medium">{election.title}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{election.description}</p>
                          </div>
                          <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-400 hover:bg-yellow-100 dark:hover:bg-yellow-900">
                            {t("Upcoming")}
                          </Badge>
                        </div>
                        <div className="flex items-center mt-4 text-sm text-gray-600 dark:text-gray-400">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{election.date}</span>
                        </div>
                        <div className="mt-4">
                          <Link href={`/elections/${election.id}`}>
                            <Button className="w-full bg-emerald-600 hover:bg-emerald-700 transition-all duration-300">
                              {t("View Details")}
                              <ChevronRight className="ml-2 h-4 w-4" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-6">
                    <AlertCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium mb-1">{t("No Upcoming Elections")}</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {t("There are no upcoming elections at this time.")}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card className="transform transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <CardTitle>{t("Past Elections")}</CardTitle>
                <CardDescription>{t("Previous elections")}</CardDescription>
              </CardHeader>
              <CardContent>
                {pastElections.length > 0 ? (
                  <div className="space-y-4">
                    {pastElections.map((election) => (
                      <div
                        key={election.id}
                        className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 transition-all duration-300 hover:border-emerald-300 dark:hover:border-emerald-700"
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-medium">{election.title}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{election.description}</p>
                          </div>
                          {election.participated ? (
                            <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-400 hover:bg-emerald-100 dark:hover:bg-emerald-900">
                              {t("Participated")}
                            </Badge>
                          ) : (
                            <Badge className="bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800">
                              {t("Did Not Participate")}
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center mt-4 text-sm text-gray-600 dark:text-gray-400">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{election.date}</span>
                        </div>
                        <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                          <p>
                            <strong>{t("Result")}:</strong> {election.result}
                          </p>
                        </div>
                        <div className="mt-4 flex space-x-2">
                          <Link href={`/elections/${election.id}/results`} className="flex-1">
                            <Button
                              variant="outline"
                              className="w-full transition-all duration-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/20"
                            >
                              {t("View Results")}
                            </Button>
                          </Link>
                          {election.participated && (
                            <Button
                              variant="outline"
                              className="flex items-center transition-all duration-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/20"
                              onClick={handleDownloadVoteReceipt}
                              disabled={isLoading}
                            >
                              {isLoading ? t("Downloading...") : <Download className="h-4 w-4" />}
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-6">
                    <AlertCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium mb-1">{t("No Past Elections")}</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {t("You have not participated in any past elections.")}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </>
        )
      case "security":
        return (
          <Card className="transform transition-all duration-300 hover:shadow-lg">
            <CardHeader>
              <CardTitle>{t("Security Status")}</CardTitle>
              <CardDescription>{t("Monitor and enhance your account security")}</CardDescription>
            </CardHeader>
            <CardContent>
              <SecurityStatus status={securityStatus} />

              <div className="mt-6 space-y-4">
                <h3 className="text-lg font-medium">{t("Security Recommendations")}</h3>
                <div className="space-y-2">
                  <div className="flex items-start space-x-3 transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-900 p-2 rounded-md">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-500 mt-0.5" />
                    <div>
                      <p className="font-medium">{t("Two-Factor Authentication")}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {t("Your account is protected with two-factor authentication")}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-900 p-2 rounded-md">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-500 mt-0.5" />
                    <div>
                      <p className="font-medium">{t("Biometric Verification")}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {t("Your biometric data is securely stored and verified")}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-900 p-2 rounded-md">
                    <AlertCircle className="h-5 w-5 text-yellow-600 dark:text-yellow-500 mt-0.5" />
                    <div>
                      <p className="font-medium">{t("Password Update")}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {t("Consider updating your password for enhanced security")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-medium mb-4">{t("Recent Login Activity")}</h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800">
                    <div className="flex justify-between">
                      <div>
                        <p className="font-medium">{t("Nairobi, Kenya")}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{t("October 15, 2023 at 10:30 AM")}</p>
                      </div>
                      <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-400">
                        {t("Current")}
                      </Badge>
                    </div>
                    <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                      <p>
                        {t("Device")}: {t("Desktop")} - Chrome
                      </p>
                      <p>IP: 102.68.xx.xx</p>
                    </div>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800">
                    <div className="flex justify-between">
                      <div>
                        <p className="font-medium">{t("Nairobi, Kenya")}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{t("October 10, 2023 at 3:45 PM")}</p>
                      </div>
                    </div>
                    <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                      <p>
                        {t("Device")}: {t("Mobile")} - Safari
                      </p>
                      <p>IP: 102.68.xx.xx</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button
                variant="outline"
                className="transition-all duration-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/20"
              >
                {t("View All Activity")}
              </Button>
              <Button className="bg-emerald-600 hover:bg-emerald-700 transition-all duration-300">
                {t("Security Settings")}
              </Button>
            </CardFooter>
          </Card>
        )
      case "notifications":
        return (
          <Card className="transform transition-all duration-300 hover:shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>{t("Notifications")}</CardTitle>
                <CardDescription>{t("Manage your notifications and alerts")}</CardDescription>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={handleMarkAllNotificationsAsRead}
                className="transition-all duration-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/20"
              >
                {t("Mark All as Read")}
              </Button>
            </CardHeader>
            <CardContent>
              {notifications.length > 0 ? (
                <div className="space-y-4">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`border ${notification.read ? "border-gray-200 dark:border-gray-800" : "border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-900/20"} rounded-lg p-4 transition-all duration-300 hover:border-emerald-300 dark:hover:border-emerald-700`}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium">{notification.title}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{notification.message}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                            {new Date(notification.date).toLocaleString()}
                          </p>
                        </div>
                        {!notification.read && (
                          <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-400">
                            {t("New")}
                          </Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-6">
                  <Bell className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-1">{t("No Notifications")}</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {t("You don't have any notifications at this time.")}
                  </p>
                </div>
              )}
            </CardContent>
            <CardFooter>
              <div className="w-full">
                <h3 className="text-sm font-medium mb-2">{t("Notification Settings")}</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-sm text-gray-600 dark:text-gray-400">{t("Email Notifications")}</label>
                    <input type="checkbox" className="toggle toggle-primary" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <label className="text-sm text-gray-600 dark:text-gray-400">{t("SMS Notifications")}</label>
                    <input type="checkbox" className="toggle toggle-primary" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <label className="text-sm text-gray-600 dark:text-gray-400">{t("Election Reminders")}</label>
                    <input type="checkbox" className="toggle toggle-primary" defaultChecked />
                  </div>
                </div>
              </div>
            </CardFooter>
          </Card>
        )
      case "profile":
        return (
          <Card className="transform transition-all duration-300 hover:shadow-lg">
            <CardHeader>
              <CardTitle>{t("Your Profile")}</CardTitle>
              <CardDescription>{t("Manage your voter information")}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-gray-200 dark:border-gray-800">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">{t("Full Name")}</h3>
                    <p className="mt-1 font-medium">Joshua Lodi</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="mt-2 sm:mt-0 transition-all duration-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/20"
                  >
                    {t("Edit")}
                  </Button>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-gray-200 dark:border-gray-800">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">{t("National ID")}</h3>
                    <p className="mt-1 font-medium">12345678</p>
                  </div>
                  <Badge className="mt-2 sm:mt-0">{t("Verified")}</Badge>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-gray-200 dark:border-gray-800">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">{t("Email Address")}</h3>
                    <p className="mt-1 font-medium">joshua.lodi@example.com</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="mt-2 sm:mt-0 transition-all duration-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/20"
                  >
                    {t("Edit")}
                  </Button>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-gray-200 dark:border-gray-800">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">{t("Phone Number")}</h3>
                    <p className="mt-1 font-medium">+254 700 123 456</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="mt-2 sm:mt-0 transition-all duration-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/20"
                  >
                    {t("Edit")}
                  </Button>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-gray-200 dark:border-gray-800">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">{t("Biometric Data")}</h3>
                    <p className="mt-1 font-medium">{t("Fingerprint and Retina Scan")}</p>
                  </div>
                  <Badge className="mt-2 sm:mt-0">{t("Verified")}</Badge>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-gray-200 dark:border-gray-800">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      {t("Two-Factor Authentication")}
                    </h3>
                    <p className="mt-1 font-medium">{t("Enabled")}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="mt-2 sm:mt-0 transition-all duration-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/20"
                  >
                    {t("Manage")}
                  </Button>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">{t("Blockchain Wallet")}</h3>
                    <p className="mt-1 text-xs font-mono">0x7f9e8d7c6b5a4e3f2d1c0b9a8e7d6c5f4e3d2b1a</p>
                  </div>
                  <Badge className="mt-2 sm:mt-0">{t("Active")}</Badge>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button
                variant="outline"
                className="transition-all duration-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/20"
              >
                {t("Change Password")}
              </Button>
              <Button className="bg-emerald-600 hover:bg-emerald-700 transition-all duration-300">
                {t("Save Changes")}
              </Button>
            </CardFooter>
          </Card>
        )
      default:
        return null
    }
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
              <ThemeToggle />
              <LanguageSelector />
              <NotificationMenu />
              <UserMenu userName="Joshua Lodi" />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => {
                  toast({
                    title: "Settings",
                    description: "Settings panel will open here.",
                  })
                }}
              >
                <Settings className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => {
                  toast({
                    title: "Logging out",
                    description: "You have been successfully logged out.",
                  })

                  setTimeout(() => {
                    router.push("/login")
                  }, 1000)
                }}
              >
                <LogOut className="h-5 w-5" />
              </Button>
              <MobileMenu userName="Joshua Lodi" />
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-1">
            <div className="bg-white dark:bg-gray-950 rounded-lg shadow-sm p-4 mb-6 transform transition-all duration-300 hover:shadow-lg">
              <div className="flex flex-col items-center p-4">
                <div className="w-20 h-20 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center mb-4 animate-pulse">
                  <User className="h-10 w-10 text-emerald-600 dark:text-emerald-500" />
                </div>
                <h2 className="text-xl font-bold">Joshua Lodi</h2>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{t("Voter ID")}: KE-1234567</p>
                <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-400 hover:bg-emerald-100 dark:hover:bg-emerald-900">
                  {t("Verified Voter")}
                </Badge>
              </div>
              <div className="border-t border-gray-200 dark:border-gray-800 mt-4 pt-4">
                <nav className="space-y-1">
                  <button
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                      activeTab === "overview"
                        ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-400"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`}
                    onClick={() => setActiveTab("overview")}
                  >
                    <BarChart3 className="h-5 w-5" />
                    <span>{t("Overview")}</span>
                  </button>
                  <button
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                      activeTab === "elections"
                        ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-400"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`}
                    onClick={() => setActiveTab("elections")}
                  >
                    <Vote className="h-5 w-5" />
                    <span>{t("Elections")}</span>
                  </button>
                  <button
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                      activeTab === "security"
                        ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-400"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`}
                    onClick={() => setActiveTab("security")}
                  >
                    <Shield className="h-5 w-5" />
                    <span>{t("Security")}</span>
                  </button>
                  <button
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                      activeTab === "notifications"
                        ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-400"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`}
                    onClick={() => setActiveTab("notifications")}
                  >
                    <Bell className="h-5 w-5" />
                    <span>{t("Notifications")}</span>
                    {notifications.some((n) => !n.read) && (
                      <span className="ml-auto bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                        {notifications.filter((n) => !n.read).length}
                      </span>
                    )}
                  </button>
                  <button
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                      activeTab === "profile"
                        ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-400"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`}
                    onClick={() => setActiveTab("profile")}
                  >
                    <User className="h-5 w-5" />
                    <span>{t("Profile")}</span>
                  </button>
                </nav>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-950 rounded-lg shadow-sm p-6 transform transition-all duration-300 hover:shadow-lg">
              <h3 className="text-lg font-medium mb-4">{t("Verification Status")}</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-900 p-2 rounded-md">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-500 mt-0.5" />
                  <div>
                    <p className="font-medium">{t("Identity Verified")}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{t("Your identity has been verified")}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-900 p-2 rounded-md">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-500 mt-0.5" />
                  <div>
                    <p className="font-medium">{t("Biometrics Registered")}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {t("Your biometric data is securely stored")}
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-900 p-2 rounded-md">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-500 mt-0.5" />
                  <div>
                    <p className="font-medium">{t("Blockchain Wallet Created")}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {t("Your secure voting wallet is active")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-3">{renderContent()}</div>
        </div>
      </main>
    </div>
  )
}

