
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Video, Plus, Calendar, Clock, Users, Play, Settings } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const LiveSessions = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Live Sessions</h1>
          <p className="text-gray-600 mt-1">
            Schedule and manage virtual classrooms and webinars
          </p>
        </div>
        <Button className="bg-lms-primary hover:bg-lms-orange-dark flex items-center gap-2">
          <Plus className="h-4 w-4" />
          <span>Schedule Session</span>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <CardTitle>Live Sessions</CardTitle>
              <CardDescription>Upcoming and past live sessions</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="upcoming">
            <TabsList className="mb-4">
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="live">Live Now</TabsTrigger>
              <TabsTrigger value="past">Past</TabsTrigger>
            </TabsList>
            <TabsContent value="upcoming">
              <div className="space-y-4">
                {[
                  { 
                    title: "Introduction to Biblical Leadership",
                    instructor: "Kipchoge Keino",
                    date: "April 15, 2025",
                    time: "14:00-16:00",
                    participants: 28,
                    course: "Pastoral Leadership"
                  },
                  { 
                    title: "Youth Ministry Workshop",
                    instructor: "Lupita Nyong'o",
                    date: "April 16, 2025",
                    time: "10:00-12:00",
                    participants: 15,
                    course: "Youth Ministry Essentials"
                  },
                  { 
                    title: "Digital Evangelism Strategies",
                    instructor: "David Rudisha",
                    date: "April 18, 2025",
                    time: "15:00-17:00",
                    participants: 35,
                    course: "Digital Evangelism"
                  },
                  { 
                    title: "Community Outreach Planning",
                    instructor: "Wangari Maathai",
                    date: "April 20, 2025",
                    time: "13:00-14:30",
                    participants: 22,
                    course: "Community Outreach"
                  },
                ].map((session, i) => (
                  <Card key={i} className="hover:shadow-md transition-shadow">
                    <CardContent className="flex flex-col md:flex-row items-start md:items-center gap-4 p-4">
                      <div className="bg-gray-100 rounded-md p-4 flex items-center justify-center">
                        <Video className="h-8 w-8 text-gray-600" />
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-medium text-lg">{session.title}</h3>
                        <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3 mt-1">
                          <div className="flex items-center">
                            <Avatar className="h-5 w-5 mr-1">
                              <AvatarFallback>{session.instructor[0]}</AvatarFallback>
                            </Avatar>
                            <span className="text-sm text-gray-600">{session.instructor}</span>
                          </div>
                          <span className="hidden md:inline text-gray-400">•</span>
                          <span className="text-sm text-gray-600">{session.course}</span>
                        </div>
                        <div className="flex flex-wrap gap-x-3 gap-y-1 mt-2">
                          <div className="flex items-center">
                            <Calendar className="h-3.5 w-3.5 mr-1 text-gray-500" />
                            <span className="text-xs text-gray-500">{session.date}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-3.5 w-3.5 mr-1 text-gray-500" />
                            <span className="text-xs text-gray-500">{session.time}</span>
                          </div>
                          <div className="flex items-center">
                            <Users className="h-3.5 w-3.5 mr-1 text-gray-500" />
                            <span className="text-xs text-gray-500">{session.participants} registered</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 w-full md:w-auto mt-3 md:mt-0">
                        <Button variant="default" size="sm" className="bg-lms-primary hover:bg-lms-orange-dark flex justify-center items-center gap-2">
                          <Play className="h-3.5 w-3.5" />
                          <span>Join</span>
                        </Button>
                        <Button variant="outline" size="sm" className="flex justify-center">
                          <Settings className="h-3.5 w-3.5 mr-1" />
                          <span>Manage</span>
                        </Button>
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

export default LiveSessions;
