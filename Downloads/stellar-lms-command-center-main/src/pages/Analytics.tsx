
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Download, BarChart3, PieChart, LineChart, Users } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart as RLineChart, Line, PieChart as RPieChart, Pie, Cell } from 'recharts';

const COLORS = ['#F48942', '#70AC4C', '#4C84AC', '#9248FF', '#FF6B6B'];

// Sample data
const userActivityData = [
  { name: 'Jan', users: 320 },
  { name: 'Feb', users: 400 },
  { name: 'Mar', users: 380 },
  { name: 'Apr', users: 420 },
  { name: 'May', users: 500 },
  { name: 'Jun', users: 450 },
];

const courseCompletionData = [
  { name: 'Pastoral Leadership', value: 45 },
  { name: 'Biblical Counseling', value: 32 },
  { name: 'Youth Ministry Essentials', value: 28 },
  { name: 'Community Outreach', value: 15 },
  { name: 'Digital Evangelism', value: 37 },
];

const engagementData = [
  { name: 'Week 1', completion: 65, engagement: 80 },
  { name: 'Week 2', completion: 58, engagement: 70 },
  { name: 'Week 3', completion: 45, engagement: 60 },
  { name: 'Week 4', completion: 40, engagement: 55 },
  { name: 'Week 5', completion: 35, engagement: 50 },
];

const Analytics = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Analytics Dashboard</h1>
          <p className="text-gray-600 mt-1">
            View insights and track performance metrics
          </p>
        </div>
        <Button variant="outline" className="flex items-center gap-2">
          <Download className="h-4 w-4" />
          <span>Export Report</span>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Total Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline space-x-2">
              <h3 className="text-3xl font-bold">1,248</h3>
              <span className="text-sm text-green-600 font-medium">+12%</span>
            </div>
            <p className="text-sm text-gray-500 mt-1">vs. previous month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Course Completion Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline space-x-2">
              <h3 className="text-3xl font-bold">68.5%</h3>
              <span className="text-sm text-green-600 font-medium">+5.2%</span>
            </div>
            <p className="text-sm text-gray-500 mt-1">vs. previous month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Avg. Time in Courses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline space-x-2">
              <h3 className="text-3xl font-bold">2h 15m</h3>
              <span className="text-sm text-green-600 font-medium">+18m</span>
            </div>
            <p className="text-sm text-gray-500 mt-1">vs. previous month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Active Courses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline space-x-2">
              <h3 className="text-3xl font-bold">36</h3>
              <span className="text-sm text-green-600 font-medium">+4</span>
            </div>
            <p className="text-sm text-gray-500 mt-1">new this month</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              <span>User Activity</span>
            </CardTitle>
            <CardDescription>Monthly active users</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={userActivityData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="users" fill="#F48942" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PieChart className="h-5 w-5" />
              <span>Course Enrollments</span>
            </CardTitle>
            <CardDescription>Distribution by course</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <RPieChart>
                <Pie
                  data={courseCompletionData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                >
                  {courseCompletionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </RPieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <LineChart className="h-5 w-5" />
            <span>Course Engagement Metrics</span>
          </CardTitle>
          <CardDescription>Weekly completion and engagement rates</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={350}>
            <RLineChart
              data={engagementData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="completion" 
                stroke="#F48942" 
                strokeWidth={2}
                dot={{ stroke: '#F48942', strokeWidth: 2, r: 4, fill: 'white' }}
                activeDot={{ r: 6, stroke: '#F48942', strokeWidth: 2, fill: '#F48942' }}
              />
              <Line 
                type="monotone" 
                dataKey="engagement" 
                stroke="#70AC4C" 
                strokeWidth={2}
                dot={{ stroke: '#70AC4C', strokeWidth: 2, r: 4, fill: 'white' }}
                activeDot={{ r: 6, stroke: '#70AC4C', strokeWidth: 2, fill: '#70AC4C' }}
              />
            </RLineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default Analytics;
