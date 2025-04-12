
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import {
  Activity,
  BookOpen,
  Calendar,
  ChevronUp,
  FileCheck,
  LineChart,
  MessageCircle,
  Users
} from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart as RLineChart, Line } from 'recharts';
import DashboardMetricsCard from '@/components/dashboard/DashboardMetricsCard';
import RecentActivityCard from '@/components/dashboard/RecentActivityCard';
import CoursesOverviewTable from '@/components/dashboard/CoursesOverviewTable';
import ActiveUsersChart from '@/components/dashboard/ActiveUsersChart';
import WelcomeBanner from '@/components/dashboard/WelcomeBanner';

// Sample data for charts
const userActivityData = [
  { name: 'Mon', active: 32, total: 40 },
  { name: 'Tue', active: 38, total: 45 },
  { name: 'Wed', active: 30, total: 52 },
  { name: 'Thu', active: 35, total: 58 },
  { name: 'Fri', active: 40, total: 55 },
  { name: 'Sat', active: 25, total: 30 },
  { name: 'Sun', active: 22, total: 25 },
];

const courseCompletionData = [
  { name: 'Leadership 101', completed: 85 },
  { name: 'Biblical Studies', completed: 65 },
  { name: 'Community Building', completed: 70 },
  { name: 'Youth Ministry', completed: 45 },
  { name: 'Digital Outreach', completed: 55 },
];

const enrollmentData = [
  { month: 'Jan', enrollments: 25 },
  { month: 'Feb', enrollments: 35 },
  { month: 'Mar', enrollments: 45 },
  { month: 'Apr', enrollments: 40 },
  { month: 'May', enrollments: 60 },
  { month: 'Jun', enrollments: 75 },
];

const Index = () => {
  return (
    <div className="space-y-6">
      <WelcomeBanner />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardMetricsCard 
          title="Total Users"
          value="1,248"
          change="+12%"
          trend="up"
          icon={<Users className="h-5 w-5 text-blue-500" />}
          description="vs. previous month"
          bgColor="bg-blue-50"
        />
        
        <DashboardMetricsCard 
          title="Active Courses"
          value="36"
          change="+4"
          trend="up"
          icon={<BookOpen className="h-5 w-5 text-lms-green" />}
          description="new this month"
          bgColor="bg-green-50"
        />
        
        <DashboardMetricsCard 
          title="Completion Rate"
          value="68.5%"
          change="+5.2%"
          trend="up"
          icon={<FileCheck className="h-5 w-5 text-lms-primary" />}
          description="vs. previous month"
          bgColor="bg-orange-50"
        />
        
        <DashboardMetricsCard 
          title="Forum Activity"
          value="246"
          change="-8%"
          trend="down"
          icon={<MessageCircle className="h-5 w-5 text-indigo-500" />}
          description="new posts this week"
          bgColor="bg-indigo-50"
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle>User Activity</CardTitle>
              <CardDescription>
                Daily active users vs. total users
              </CardDescription>
            </div>
            <Tabs defaultValue="week">
              <TabsList className="grid grid-cols-3 h-8">
                <TabsTrigger value="week" className="text-xs">Week</TabsTrigger>
                <TabsTrigger value="month" className="text-xs">Month</TabsTrigger>
                <TabsTrigger value="year" className="text-xs">Year</TabsTrigger>
              </TabsList>
            </Tabs>
          </CardHeader>
          <CardContent className="pt-4">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={userActivityData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 0,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="active" fill="#F48942" radius={[4, 4, 0, 0]} />
                <Bar dataKey="total" fill="#E6E6E6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Course Completion</CardTitle>
            <CardDescription>Top 5 courses completion rates</CardDescription>
          </CardHeader>
          <CardContent className="pt-2">
            <div className="space-y-4">
              {courseCompletionData.map((course) => (
                <div key={course.name} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>{course.name}</span>
                    <span className="font-medium">{course.completed}%</span>
                  </div>
                  <Progress value={course.completed} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Enrollment Trends</CardTitle>
            <CardDescription>Monthly course enrollments</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <RLineChart
                data={enrollmentData}
                margin={{
                  top: 5,
                  right: 20,
                  left: 0,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="enrollments" 
                  stroke="#70AC4C" 
                  strokeWidth={2}
                  dot={{ stroke: '#70AC4C', strokeWidth: 2, r: 4, fill: 'white' }}
                  activeDot={{ r: 6, stroke: '#70AC4C', strokeWidth: 2, fill: '#70AC4C' }}
                />
              </RLineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
            <CardDescription>Scheduled for next 7 days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 rounded-md p-2 mt-1">
                  <Calendar className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-sm">Instructor Training</p>
                  <p className="text-xs text-gray-500 mt-0.5">Today, 2:00 PM - 4:00 PM</p>
                  <div className="flex items-center mt-1.5">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="h-5 w-5 rounded-full bg-gray-200 border border-white flex items-center justify-center text-xs font-medium"
                        >
                          {i}
                        </div>
                      ))}
                    </div>
                    <span className="text-xs text-gray-500 ml-2">+2 more</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-lms-primary/10 rounded-md p-2 mt-1">
                  <Calendar className="h-4 w-4 text-lms-primary" />
                </div>
                <div>
                  <p className="font-medium text-sm">New Course Launch</p>
                  <p className="text-xs text-gray-500 mt-0.5">Tomorrow, 10:00 AM</p>
                  <div className="flex items-center mt-1.5">
                    <div className="flex -space-x-2">
                      {[1, 2].map((i) => (
                        <div
                          key={i}
                          className="h-5 w-5 rounded-full bg-gray-200 border border-white flex items-center justify-center text-xs font-medium"
                        >
                          {i}
                        </div>
                      ))}
                    </div>
                    <span className="text-xs text-gray-500 ml-2">+1 more</span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-green-100 rounded-md p-2 mt-1">
                  <Calendar className="h-4 w-4 text-green-600" />
                </div>
                <div>
                  <p className="font-medium text-sm">Weekly Strategy Meeting</p>
                  <p className="text-xs text-gray-500 mt-0.5">Friday, 1:00 PM - 2:30 PM</p>
                  <div className="flex items-center mt-1.5">
                    <div className="flex -space-x-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className="h-5 w-5 rounded-full bg-gray-200 border border-white flex items-center justify-center text-xs font-medium"
                        >
                          {i}
                        </div>
                      ))}
                    </div>
                    <span className="text-xs text-gray-500 ml-2">+3 more</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <RecentActivityCard />
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Courses Overview</CardTitle>
          <CardDescription>Recent and popular courses</CardDescription>
        </CardHeader>
        <CardContent>
          <CoursesOverviewTable />
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;
