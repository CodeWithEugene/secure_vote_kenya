
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Plus, Filter, Search, FileEdit, Trash, Eye } from "lucide-react";

const Courses = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Course Management</h1>
          <p className="text-gray-600 mt-1">
            Create, view and manage all courses in the LMS
          </p>
        </div>
        <Button className="bg-lms-primary hover:bg-lms-orange-dark flex items-center gap-2">
          <Plus className="h-4 w-4" />
          <span>Create New Course</span>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <CardTitle>All Courses</CardTitle>
              <CardDescription>Manage course content, categories and curriculum</CardDescription>
            </div>
            <div className="flex flex-wrap gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search courses..."
                  className="pl-10 py-2 pr-4 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-lms-primary/20 text-sm w-full md:w-60"
                />
              </div>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                <span>Filter</span>
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all">
            <TabsList className="mb-4">
              <TabsTrigger value="all">All Courses</TabsTrigger>
              <TabsTrigger value="published">Published</TabsTrigger>
              <TabsTrigger value="draft">Draft</TabsTrigger>
              <TabsTrigger value="archived">Archived</TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-3 text-left text-sm font-medium text-gray-500">Course Name</th>
                    <th className="py-3 text-left text-sm font-medium text-gray-500">Category</th>
                    <th className="py-3 text-left text-sm font-medium text-gray-500">Instructor</th>
                    <th className="py-3 text-left text-sm font-medium text-gray-500">Students</th>
                    <th className="py-3 text-left text-sm font-medium text-gray-500">Status</th>
                    <th className="py-3 text-left text-sm font-medium text-gray-500">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "Pastoral Leadership", category: "Ministry", instructor: "Kipchoge Keino", students: 45, status: "Published" },
                    { name: "Biblical Counseling", category: "Ministry", instructor: "Wangari Maathai", students: 32, status: "Published" },
                    { name: "Youth Ministry Essentials", category: "Youth", instructor: "Meja Mwangi", students: 28, status: "Draft" },
                    { name: "Community Outreach", category: "Outreach", instructor: "Njeri Wainaina", students: 15, status: "Published" },
                    { name: "Digital Evangelism", category: "Outreach", instructor: "Lupita Nyong'o", students: 37, status: "Published" },
                    { name: "Church Administration", category: "Administration", instructor: "David Rudisha", students: 12, status: "Draft" },
                  ].map((course, i) => (
                    <tr key={i} className="border-b border-gray-200">
                      <td className="py-4 text-sm font-medium">{course.name}</td>
                      <td className="py-4 text-sm text-gray-600">{course.category}</td>
                      <td className="py-4 text-sm text-gray-600">{course.instructor}</td>
                      <td className="py-4 text-sm text-gray-600">{course.students}</td>
                      <td className="py-4 text-sm">
                        <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          course.status === "Published" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                        }`}>
                          {course.status}
                        </span>
                      </td>
                      <td className="py-4 text-sm">
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm" className="p-1 h-8 w-8">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm" className="p-1 h-8 w-8">
                            <FileEdit className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="sm" className="p-1 h-8 w-8">
                            <Trash className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default Courses;
