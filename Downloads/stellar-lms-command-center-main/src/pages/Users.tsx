
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { UserPlus, Filter, Search } from "lucide-react";

const Users = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">User Management</h1>
          <p className="text-gray-600 mt-1">
            View and manage all users in the LMS
          </p>
        </div>
        <Button className="bg-lms-primary hover:bg-lms-orange-dark flex items-center gap-2">
          <UserPlus className="h-4 w-4" />
          <span>Add New User</span>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <CardTitle>All Users</CardTitle>
              <CardDescription>Manage learners, instructors and administrators</CardDescription>
            </div>
            <div className="flex flex-wrap gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search users..."
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
              <TabsTrigger value="all">All Users</TabsTrigger>
              <TabsTrigger value="admins">Administrators</TabsTrigger>
              <TabsTrigger value="instructors">Instructors</TabsTrigger>
              <TabsTrigger value="learners">Learners</TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="py-3 text-left text-sm font-medium text-gray-500">Name</th>
                    <th className="py-3 text-left text-sm font-medium text-gray-500">Email</th>
                    <th className="py-3 text-left text-sm font-medium text-gray-500">Role</th>
                    <th className="py-3 text-left text-sm font-medium text-gray-500">Status</th>
                    <th className="py-3 text-left text-sm font-medium text-gray-500">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "Wangari Maathai", email: "wangari@example.com", role: "Administrator", status: "Active" },
                    { name: "Kipchoge Keino", email: "kipchoge@example.com", role: "Instructor", status: "Active" },
                    { name: "Lupita Nyong'o", email: "lupita@example.com", role: "Learner", status: "Active" },
                    { name: "Meja Mwangi", email: "meja@example.com", role: "Instructor", status: "Inactive" },
                    { name: "Njeri Wainaina", email: "njeri@example.com", role: "Learner", status: "Active" },
                    { name: "David Rudisha", email: "david@example.com", role: "Learner", status: "Active" },
                    { name: "Yvonne Adhiambo", email: "yvonne@example.com", role: "Administrator", status: "Active" },
                  ].map((user, i) => (
                    <tr key={i} className="border-b border-gray-200">
                      <td className="py-4 text-sm font-medium">{user.name}</td>
                      <td className="py-4 text-sm text-gray-600">{user.email}</td>
                      <td className="py-4 text-sm text-gray-600">{user.role}</td>
                      <td className="py-4 text-sm">
                        <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          user.status === "Active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                        }`}>
                          {user.status}
                        </span>
                      </td>
                      <td className="py-4 text-sm">
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">View</Button>
                          <Button variant="outline" size="sm">Edit</Button>
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

export default Users;
