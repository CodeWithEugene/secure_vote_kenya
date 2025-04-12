
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageSquare, Filter, PlusCircle, MessageCircle } from "lucide-react";

const Forums = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Community Forums</h1>
          <p className="text-gray-600 mt-1">
            Manage discussion forums and community interactions
          </p>
        </div>
        <Button className="bg-lms-primary hover:bg-lms-orange-dark flex items-center gap-2">
          <PlusCircle className="h-4 w-4" />
          <span>Create New Forum</span>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <CardTitle>Forums</CardTitle>
              <CardDescription>Forums and discussion topics</CardDescription>
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
          <Tabs defaultValue="all">
            <TabsList className="mb-4">
              <TabsTrigger value="all">All Forums</TabsTrigger>
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="courseBased">Course-Based</TabsTrigger>
              <TabsTrigger value="announcements">Announcements</TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <div className="space-y-4">
                {[
                  { name: "Leadership Discussion", category: "Course-Based", topics: 15, posts: 87, lastActive: "2 hours ago", posts_today: 7 },
                  { name: "General Discussion", category: "General", topics: 24, posts: 123, lastActive: "30 minutes ago", posts_today: 12 },
                  { name: "Biblical Studies", category: "Course-Based", topics: 18, posts: 76, lastActive: "5 hours ago", posts_today: 4 },
                  { name: "Community Announcements", category: "Announcements", topics: 8, posts: 32, lastActive: "1 day ago", posts_today: 1 },
                  { name: "Digital Ministry", category: "Course-Based", topics: 12, posts: 45, lastActive: "12 hours ago", posts_today: 3 },
                  { name: "Prayer Requests", category: "General", topics: 30, posts: 158, lastActive: "1 hour ago", posts_today: 9 },
                ].map((forum, i) => (
                  <Card key={i} className="hover:shadow-md transition-shadow">
                    <CardContent className="flex items-center p-4 gap-4">
                      <div className="bg-gray-100 rounded-full p-3">
                        <MessageSquare className="h-6 w-6 text-gray-600" />
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-medium text-lg">{forum.name}</h3>
                        <div className="flex items-center mt-1">
                          <span className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full">{forum.category}</span>
                          <span className="text-xs text-gray-500 ml-3">{forum.topics} topics</span>
                          <span className="text-xs text-gray-500 ml-3">{forum.posts} posts</span>
                        </div>
                      </div>
                      <div className="text-right hidden md:block">
                        <div className="flex items-center justify-end mb-1">
                          <MessageCircle className="h-3 w-3 text-lms-primary mr-1" />
                          <span className="text-xs font-medium text-lms-primary">{forum.posts_today} new today</span>
                        </div>
                        <p className="text-xs text-gray-500">Last activity: {forum.lastActive}</p>
                      </div>
                      <Button size="sm">View</Button>
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

export default Forums;
