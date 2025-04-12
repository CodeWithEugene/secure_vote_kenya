
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, FileText, Filter, Calendar, ChevronDown } from "lucide-react";

const Reports = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Reports</h1>
          <p className="text-gray-600 mt-1">
            Generate and view detailed system reports
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>Last 30 days</span>
            <ChevronDown className="h-4 w-4 ml-1" />
          </Button>
          <Button className="bg-lms-primary hover:bg-lms-orange-dark flex items-center gap-2">
            <Download className="h-4 w-4" />
            <span>Export</span>
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <CardTitle>Available Reports</CardTitle>
              <CardDescription>Generate and download system reports</CardDescription>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                <span>Filter</span>
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="user">
            <TabsList className="mb-4">
              <TabsTrigger value="user">User Reports</TabsTrigger>
              <TabsTrigger value="course">Course Reports</TabsTrigger>
              <TabsTrigger value="performance">Performance</TabsTrigger>
              <TabsTrigger value="system">System</TabsTrigger>
            </TabsList>
            <TabsContent value="user">
              <div className="space-y-4">
                {[
                  { name: "User Engagement Report", description: "Overview of user activity and engagement metrics", lastGenerated: "Today, 08:45 AM", size: "1.2 MB" },
                  { name: "Course Completion Report", description: "Statistics on course completion rates by user", lastGenerated: "Yesterday, 03:30 PM", size: "852 KB" },
                  { name: "User Progress Report", description: "Detailed breakdown of user progress across all courses", lastGenerated: "2 days ago", size: "1.8 MB" },
                  { name: "Certificate Issuance Report", description: "List of certificates issued to users", lastGenerated: "Last week", size: "645 KB" },
                  { name: "User Login Activity", description: "Data on user login frequency and patterns", lastGenerated: "3 days ago", size: "925 KB" },
                ].map((report, i) => (
                  <Card key={i} className="hover:shadow-md transition-shadow">
                    <CardContent className="flex items-center p-4 gap-4">
                      <div className="bg-gray-100 rounded-full p-3">
                        <FileText className="h-6 w-6 text-gray-600" />
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-medium">{report.name}</h3>
                        <p className="text-sm text-gray-500 mt-1">{report.description}</p>
                        <div className="flex items-center mt-2">
                          <span className="text-xs text-gray-500">Last generated: {report.lastGenerated}</span>
                          <span className="text-xs text-gray-500 mx-2">•</span>
                          <span className="text-xs text-gray-500">{report.size}</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">Preview</Button>
                        <Button size="sm">Generate</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default Reports;
