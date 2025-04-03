"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Shield,
  Users,
  Vote,
  BarChart3,
  Settings,
  LogOut,
  User,
  Plus,
  Search,
  Edit,
  Trash2,
  Eye,
  Download,
  Upload,
  FileText,
  Lock,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react"
import { DataTable } from "@/components/admin/data-table"
import { ElectionForm } from "@/components/admin/election-form"
import { ActivityLog } from "@/components/admin/activity-log"
import { SystemStatus } from "@/components/admin/system-status"
import { ThemeToggle } from "@/components/theme-toggle"

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard")
  const [showElectionForm, setShowElectionForm] = useState(false)

  // Mock data for users
  const users = [
    { id: 1, name: "John Doe", email: "john@example.com", status: "verified", registrationDate: "2023-01-15" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", status: "verified", registrationDate: "2023-02-20" },
    { id: 3, name: "Robert Johnson", email: "robert@example.com", status: "pending", registrationDate: "2023-03-05" },
    { id: 4, name: "Emily Davis", email: "emily@example.com", status: "verified", registrationDate: "2023-03-10" },
    { id: 5, name: "Michael Wilson", email: "michael@example.com", status: "rejected", registrationDate: "2023-03-15" },
  ]

  // Mock data for elections
  const elections = [
    {
      id: 1,
      title: "Presidential Election 2027",
      status: "scheduled",
      startDate: "2027-08-09",
      endDate: "2027-08-09",
      registeredVoters: 25000000,
      candidates: 5,
    },
    {
      id: 2,
      title: "County Governor Elections",
      status: "scheduled",
      startDate: "2027-08-09",
      endDate: "2027-08-09",
      registeredVoters: 25000000,
      candidates: 47,
    },
    {
      id: 3,
      title: "Parliamentary By-Election",
      status: "completed",
      startDate: "2023-03-15",
      endDate: "2023-03-15",
      registeredVoters: 120000,
      candidates: 8,
      turnout: "68%",
      winner: "Candidate A",
    },
  ]

  // Mock data for system status
  const systemStatus = {
    blockchain: {
      status: "operational",
      lastBlock: "#1234567",
      transactions: "1,234,567",
      nodes: 150,
    },
    database: {
      status: "operational",
      connections: 45,
      queryTime: "25ms",
    },
    security: {
      status: "operational",
      lastScan: "2023-10-15 08:30 AM",
      threats: 0,
    },
    api: {
      status: "operational",
      requests: "1.2M/day",
      responseTime: "45ms",
    },
  }

  // Mock data for activity log
  const activityLog = [
    {
      id: 1,
      action: "User Verification",
      user: "Admin",
      details: "Verified user ID #12345",
      timestamp: "2023-10-15 10:30 AM",
    },
    {
      id: 2,
      action: "Election Created",
      user: "Admin",
      details: "Created Presidential Election 2027",
      timestamp: "2023-10-14 02:15 PM",
    },
    {
      id: 3,
      action: "Candidate Added",
      user: "Admin",
      details: "Added candidate to Presidential Election",
      timestamp: "2023-10-14 02:30 PM",
    },
    {
      id: 4,
      action: "System Backup",
      user: "System",
      details: "Automatic system backup completed",
      timestamp: "2023-10-14 12:00 AM",
    },
    {
      id: 5,
      action: "Security Alert",
      user: "System",
      details: "Multiple failed login attempts detected",
      timestamp: "2023-10-13 08:45 PM",
    },
  ]

  // Function to render the appropriate content based on active tab
  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return (
          <>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Registered Voters
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold">25,432,856</div>
                    <Users className="h-5 w-5 text-emerald-600 dark:text-emerald-500" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Upcoming Elections
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold">2</div>
                    <Vote className="h-5 w-5 text-emerald-600 dark:text-emerald-500" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Verification Rate
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold">92.4%</div>
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-500" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500 dark:text-gray-400">System Status</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-500">Operational</div>
                    <Shield className="h-5 w-5 text-emerald-600 dark:text-emerald-500" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <Card>
                <CardHeader>
                  <CardTitle>System Status</CardTitle>
                  <CardDescription>Current status of all system components</CardDescription>
                </CardHeader>
                <CardContent>
                  <SystemStatus status={systemStatus} />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Latest actions in the system</CardDescription>
                </CardHeader>
                <CardContent>
                  <ActivityLog activities={activityLog.slice(0, 3)} />
                  <div className="mt-4 text-center">
                    <Button variant="outline" size="sm" onClick={() => setActiveTab("activity")}>
                      View All Activity
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Upcoming Elections</CardTitle>
                  <CardDescription>Manage scheduled elections</CardDescription>
                </div>
                <Button onClick={() => setShowElectionForm(true)}>
                  <Plus className="mr-2 h-4 w-4" /> Add Election
                </Button>
              </CardHeader>
              <CardContent>
                {showElectionForm ? (
                  <ElectionForm onCancel={() => setShowElectionForm(false)} />
                ) : (
                  <div className="space-y-4">
                    {elections
                      .filter((e) => e.status === "scheduled")
                      .map((election) => (
                        <div key={election.id} className="border border-gray-200 dark:border-gray-800 rounded-lg p-4">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-medium">{election.title}</h3>
                              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-2 text-sm text-gray-600 dark:text-gray-400">
                                <div>Date: {election.startDate}</div>
                                <div>Registered Voters: {election.registeredVoters.toLocaleString()}</div>
                                <div>Candidates: {election.candidates}</div>
                              </div>
                            </div>
                            <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-400 hover:bg-yellow-100 dark:hover:bg-yellow-900">
                              Scheduled
                            </Badge>
                          </div>
                          <div className="mt-4 flex flex-wrap gap-2">
                            <Button variant="outline" size="sm">
                              <Eye className="mr-2 h-4 w-4" /> View
                            </Button>
                            <Button variant="outline" size="sm">
                              <Edit className="mr-2 h-4 w-4" /> Edit
                            </Button>
                            <Button variant="outline" size="sm">
                              <Plus className="mr-2 h-4 w-4" /> Add Candidates
                            </Button>
                          </div>
                        </div>
                      ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </>
        )
      case "voters":
        return (
          <Card>
            <CardHeader>
              <CardTitle>Voter Management</CardTitle>
              <CardDescription>View and manage registered voters</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4 flex items-center justify-between">
                <div className="relative w-64">
                  <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
                  <Input placeholder="Search voters..." className="pl-8" />
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Upload className="mr-2 h-4 w-4" /> Import
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" /> Export
                  </Button>
                </div>
              </div>

              <DataTable
                data={users}
                columns={[
                  { header: "ID", accessor: "id" },
                  { header: "Name", accessor: "name" },
                  { header: "Email", accessor: "email" },
                  {
                    header: "Status",
                    accessor: "status",
                    cell: (value) => {
                      const statusColors = {
                        verified: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-400",
                        pending: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-400",
                        rejected: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-400",
                      }
                      const color =
                        statusColors[value as keyof typeof statusColors] ||
                        "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-400"
                      return <Badge className={color}>{value}</Badge>
                    },
                  },
                  { header: "Registration Date", accessor: "registrationDate" },
                  {
                    header: "Actions",
                    cell: () => (
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    ),
                  },
                ]}
              />

              <div className="mt-4 flex items-center justify-between">
                <div className="text-sm text-gray-500 dark:text-gray-400">Showing 5 of 25,432,856 voters</div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" disabled>
                    Previous
                  </Button>
                  <Button variant="outline" size="sm">
                    Next
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )
      case "elections":
        return (
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Election Management</CardTitle>
                <CardDescription>Create and manage elections</CardDescription>
              </div>
              <Button onClick={() => setShowElectionForm(true)}>
                <Plus className="mr-2 h-4 w-4" /> Add Election
              </Button>
            </CardHeader>
            <CardContent>
              {showElectionForm ? (
                <ElectionForm onCancel={() => setShowElectionForm(false)} />
              ) : (
                <>
                  <Tabs defaultValue="upcoming">
                    <TabsList className="grid w-full grid-cols-3 mb-6">
                      <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                      <TabsTrigger value="active">Active</TabsTrigger>
                      <TabsTrigger value="completed">Completed</TabsTrigger>
                    </TabsList>

                    <TabsContent value="upcoming">
                      <div className="space-y-4">
                        {elections
                          .filter((e) => e.status === "scheduled")
                          .map((election) => (
                            <div
                              key={election.id}
                              className="border border-gray-200 dark:border-gray-800 rounded-lg p-4"
                            >
                              <div className="flex justify-between items-start">
                                <div>
                                  <h3 className="font-medium">{election.title}</h3>
                                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-2 text-sm text-gray-600 dark:text-gray-400">
                                    <div>Date: {election.startDate}</div>
                                    <div>Registered Voters: {election.registeredVoters.toLocaleString()}</div>
                                    <div>Candidates: {election.candidates}</div>
                                  </div>
                                </div>
                                <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-400 hover:bg-yellow-100 dark:hover:bg-yellow-900">
                                  Scheduled
                                </Badge>
                              </div>
                              <div className="mt-4 flex flex-wrap gap-2">
                                <Button variant="outline" size="sm">
                                  <Eye className="mr-2 h-4 w-4" /> View
                                </Button>
                                <Button variant="outline" size="sm">
                                  <Edit className="mr-2 h-4 w-4" /> Edit
                                </Button>
                                <Button variant="outline" size="sm">
                                  <Plus className="mr-2 h-4 w-4" /> Add Candidates
                                </Button>
                                <Button variant="outline" size="sm">
                                  <Trash2 className="mr-2 h-4 w-4" /> Delete
                                </Button>
                              </div>
                            </div>
                          ))}
                      </div>
                    </TabsContent>

                    <TabsContent value="active">
                      <div className="text-center py-8">
                        <Vote className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-lg font-medium mb-1">No Active Elections</h3>
                        <p className="text-gray-600 dark:text-gray-400">There are no active elections at this time.</p>
                      </div>
                    </TabsContent>

                    <TabsContent value="completed">
                      <div className="space-y-4">
                        {elections
                          .filter((e) => e.status === "completed")
                          .map((election) => (
                            <div
                              key={election.id}
                              className="border border-gray-200 dark:border-gray-800 rounded-lg p-4"
                            >
                              <div className="flex justify-between items-start">
                                <div>
                                  <h3 className="font-medium">{election.title}</h3>
                                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-2 text-sm text-gray-600 dark:text-gray-400">
                                    <div>Date: {election.startDate}</div>
                                    <div>Turnout: {election.turnout}</div>
                                    <div>Winner: {election.winner}</div>
                                  </div>
                                </div>
                                <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-400 hover:bg-emerald-100 dark:hover:bg-emerald-900">
                                  Completed
                                </Badge>
                              </div>
                              <div className="mt-4 flex flex-wrap gap-2">
                                <Button variant="outline" size="sm">
                                  <Eye className="mr-2 h-4 w-4" /> View Results
                                </Button>
                                <Button variant="outline" size="sm">
                                  <FileText className="mr-2 h-4 w-4" /> Export Report
                                </Button>
                                <Button variant="outline" size="sm">
                                  <Download className="mr-2 h-4 w-4" /> Download Data
                                </Button>
                              </div>
                            </div>
                          ))}
                      </div>
                    </TabsContent>
                  </Tabs>
                </>
              )}
            </CardContent>
          </Card>
        )
      case "security":
        return (
          <Card>
            <CardHeader>
              <CardTitle>Security Management</CardTitle>
              <CardDescription>Manage system security settings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-4">
                      <Lock className="h-5 w-5 text-emerald-600 dark:text-emerald-500" />
                      <h3 className="font-medium">Access Control</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="two-factor">Require Two-Factor Authentication</Label>
                        <input type="checkbox" id="two-factor" className="toggle toggle-primary" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="session-timeout">Session Timeout (minutes)</Label>
                        <Input id="session-timeout" type="number" className="w-20" defaultValue="30" />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="failed-attempts">Max Failed Login Attempts</Label>
                        <Input id="failed-attempts" type="number" className="w-20" defaultValue="5" />
                      </div>
                    </div>
                  </div>

                  <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-4">
                      <Shield className="h-5 w-5 text-emerald-600 dark:text-emerald-500" />
                      <h3 className="font-medium">Blockchain Security</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="node-validation">Node Validation Threshold</Label>
                        <Input id="node-validation" type="number" className="w-20" defaultValue="75" />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="transaction-signing">Multi-Signature Transactions</Label>
                        <input
                          type="checkbox"
                          id="transaction-signing"
                          className="toggle toggle-primary"
                          defaultChecked
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="audit-logging">Enhanced Audit Logging</Label>
                        <input type="checkbox" id="audit-logging" className="toggle toggle-primary" defaultChecked />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-4">
                    <AlertTriangle className="h-5 w-5 text-yellow-600 dark:text-yellow-500" />
                    <h3 className="font-medium">Security Alerts</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="email-alerts">Email Alerts</Label>
                      <input type="checkbox" id="email-alerts" className="toggle toggle-primary" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="sms-alerts">SMS Alerts</Label>
                      <input type="checkbox" id="sms-alerts" className="toggle toggle-primary" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="alert-threshold">Alert Threshold</Label>
                      <select id="alert-threshold" className="select select-bordered w-40">
                        <option>Critical Only</option>
                        <option>High and Above</option>
                        <option selected>Medium and Above</option>
                        <option>All Alerts</option>
                      </select>
                    </div>
                    <div className="flex items-center justify-between">
                      <Label htmlFor="alert-emails">Alert Recipients</Label>
                      <Input id="alert-emails" className="w-64" defaultValue="admin@securevote.ke" />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end space-x-2">
                  <Button variant="outline">Reset to Defaults</Button>
                  <Button className="bg-emerald-600 hover:bg-emerald-700">Save Changes</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )
      case "activity":
        return (
          <Card>
            <CardHeader>
              <CardTitle>Activity Log</CardTitle>
              <CardDescription>View all system activities and audit trail</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4 flex items-center justify-between">
                <div className="flex gap-2">
                  <Input placeholder="Search activities..." className="w-64" />
                  <Button variant="outline" size="sm">
                    <Search className="mr-2 h-4 w-4" /> Search
                  </Button>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" /> Export Log
                  </Button>
                </div>
              </div>

              <ActivityLog activities={activityLog} />

              <div className="mt-4 flex items-center justify-between">
                <div className="text-sm text-gray-500 dark:text-gray-400">Showing 5 of 1,245 activities</div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" disabled>
                    Previous
                  </Button>
                  <Button variant="outline" size="sm">
                    Next
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )
      case "settings":
        return (
          <Card>
            <CardHeader>
              <CardTitle>System Settings</CardTitle>
              <CardDescription>Configure global system settings</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="general">
                <TabsList className="grid w-full grid-cols-3 mb-6">
                  <TabsTrigger value="general">General</TabsTrigger>
                  <TabsTrigger value="blockchain">Blockchain</TabsTrigger>
                  <TabsTrigger value="backup">Backup & Recovery</TabsTrigger>
                </TabsList>

                <TabsContent value="general">
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="system-name">System Name</Label>
                        <Input id="system-name" defaultValue="SecureVote Kenya" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="admin-email">Administrator Email</Label>
                        <Input id="admin-email" defaultValue="admin@securevote.ke" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="timezone">Default Timezone</Label>
                        <select id="timezone" className="select select-bordered w-full">
                          <option selected>Africa/Nairobi (UTC+3)</option>
                          <option>UTC</option>
                          <option>Africa/Lagos (UTC+1)</option>
                          <option>Africa/Cairo (UTC+2)</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="language">Default Language</Label>
                        <select id="language" className="select select-bordered w-full">
                          <option selected>English</option>
                          <option>Kiswahili</option>
                          <option>Français</option>
                        </select>
                      </div>

                      <div className="flex items-center justify-between">
                        <Label htmlFor="maintenance-mode">Maintenance Mode</Label>
                        <input type="checkbox" id="maintenance-mode" className="toggle toggle-primary" />
                      </div>
                    </div>

                    <div className="flex justify-end space-x-2">
                      <Button variant="outline">Reset</Button>
                      <Button className="bg-emerald-600 hover:bg-emerald-700">Save Changes</Button>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="blockchain">
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="blockchain-network">Blockchain Network</Label>
                        <select id="blockchain-network" className="select select-bordered w-full">
                          <option selected>Ethereum (Production)</option>
                          <option>Ethereum (Testnet)</option>
                          <option>Polygon</option>
                          <option>Custom</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="node-url">Primary Node URL</Label>
                        <Input id="node-url" defaultValue="https://eth-mainnet.g.alchemy.com/v2/your-api-key" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="backup-node">Backup Node URL</Label>
                        <Input id="backup-node" defaultValue="https://mainnet.infura.io/v3/your-api-key" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="gas-strategy">Gas Price Strategy</Label>
                        <select id="gas-strategy" className="select select-bordered w-full">
                          <option>Low</option>
                          <option selected>Medium</option>
                          <option>High</option>
                          <option>Custom</option>
                        </select>
                      </div>

                      <div className="flex items-center justify-between">
                        <Label htmlFor="auto-scaling">Auto-scaling Nodes</Label>
                        <input type="checkbox" id="auto-scaling" className="toggle toggle-primary" defaultChecked />
                      </div>
                    </div>

                    <div className="flex justify-end space-x-2">
                      <Button variant="outline">Reset</Button>
                      <Button className="bg-emerald-600 hover:bg-emerald-700">Save Changes</Button>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="backup">
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="backup-frequency">Backup Frequency</Label>
                        <select id="backup-frequency" className="select select-bordered w-full">
                          <option>Hourly</option>
                          <option selected>Daily</option>
                          <option>Weekly</option>
                          <option>Monthly</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="backup-time">Backup Time</Label>
                        <Input id="backup-time" type="time" defaultValue="02:00" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="backup-retention">Backup Retention (days)</Label>
                        <Input id="backup-retention" type="number" defaultValue="30" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="backup-location">Backup Storage Location</Label>
                        <Input id="backup-location" defaultValue="s3://securevote-backups/production/" />
                      </div>

                      <div className="flex items-center justify-between">
                        <Label htmlFor="encrypted-backup">Encrypted Backups</Label>
                        <input type="checkbox" id="encrypted-backup" className="toggle toggle-primary" defaultChecked />
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <Button variant="outline">
                        <Download className="mr-2 h-4 w-4" /> Manual Backup
                      </Button>
                      <div className="space-x-2">
                        <Button variant="outline">Reset</Button>
                        <Button className="bg-emerald-600 hover:bg-emerald-700">Save Changes</Button>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
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
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">SecureVote Admin</h1>
            </div>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center">
                  <User className="h-4 w-4 text-emerald-600 dark:text-emerald-500" />
                </div>
                <span className="text-sm font-medium hidden md:inline">Admin</span>
              </div>
              <Button variant="ghost" size="icon">
                <Settings className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <LogOut className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <div className="md:col-span-1">
            <div className="bg-white dark:bg-gray-950 rounded-lg shadow-sm p-4">
              <nav className="space-y-1">
                <button
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium ${
                    activeTab === "dashboard"
                      ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-400"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                  onClick={() => setActiveTab("dashboard")}
                >
                  <BarChart3 className="h-5 w-5" />
                  <span>Dashboard</span>
                </button>
                <button
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium ${
                    activeTab === "voters"
                      ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-400"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                  onClick={() => setActiveTab("voters")}
                >
                  <Users className="h-5 w-5" />
                  <span>Voters</span>
                </button>
                <button
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium ${
                    activeTab === "elections"
                      ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-400"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                  onClick={() => setActiveTab("elections")}
                >
                  <Vote className="h-5 w-5" />
                  <span>Elections</span>
                </button>
                <button
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium ${
                    activeTab === "security"
                      ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-400"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                  onClick={() => setActiveTab("security")}
                >
                  <Shield className="h-5 w-5" />
                  <span>Security</span>
                </button>
                <button
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium ${
                    activeTab === "activity"
                      ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-400"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                  onClick={() => setActiveTab("activity")}
                >
                  <FileText className="h-5 w-5" />
                  <span>Activity Log</span>
                </button>
                <button
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium ${
                    activeTab === "settings"
                      ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-400"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                  onClick={() => setActiveTab("settings")}
                >
                  <Settings className="h-5 w-5" />
                  <span>Settings</span>
                </button>
              </nav>
            </div>
          </div>

          <div className="md:col-span-4">{renderContent()}</div>
        </div>
      </main>
    </div>
  )
}

