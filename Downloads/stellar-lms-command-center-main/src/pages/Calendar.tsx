
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { format } from 'date-fns';

const Calendar = () => {
  const today = new Date();
  const currentMonth = format(today, 'MMMM yyyy');
  
  // Sample events data
  const events = [
    { id: 1, title: "Instructor Training", date: "2025-04-12", time: "14:00-16:00", location: "Virtual", type: "training" },
    { id: 2, title: "New Course Launch", date: "2025-04-13", time: "10:00", location: "Main Auditorium", type: "launch" },
    { id: 3, title: "Weekly Strategy Meeting", date: "2025-04-17", time: "13:00-14:30", location: "Conference Room B", type: "meeting" },
    { id: 4, title: "Student Onboarding Session", date: "2025-04-15", time: "09:00-11:00", location: "Virtual", type: "onboarding" },
    { id: 5, title: "Content Review", date: "2025-04-16", time: "15:00-17:00", location: "Conference Room A", type: "review" },
  ];
  
  // Generate calendar grid (simplified for this example)
  const generateCalendarDays = () => {
    // In a real app, this would generate the correct days for the month
    const days = [];
    for (let i = 1; i <= 30; i++) {
      const dayEvents = events.filter(event => {
        const eventDate = new Date(event.date);
        return eventDate.getDate() === i && eventDate.getMonth() === today.getMonth();
      });
      
      days.push({ day: i, events: dayEvents });
    }
    return days;
  };
  
  const calendarDays = generateCalendarDays();
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Calendar</h1>
          <p className="text-gray-600 mt-1">
            View and manage events and schedules
          </p>
        </div>
        <Button className="bg-lms-primary hover:bg-lms-orange-dark flex items-center gap-2">
          <Plus className="h-4 w-4" />
          <span>Add Event</span>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>{currentMonth}</CardTitle>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <ChevronRight className="h-4 w-4" />
              </Button>
              <Button variant="outline">Today</Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-7 gap-1 mb-2">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
              <div key={day} className="text-center text-sm font-medium py-2">
                {day}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-1">
            {/* Example: Skip days before month start (would be calculated dynamically) */}
            <div className="min-h-24 p-1"></div>
            <div className="min-h-24 p-1"></div>
            
            {calendarDays.map((day) => (
              <div 
                key={day.day} 
                className={`min-h-24 p-1 border rounded-md ${day.day === today.getDate() ? 'bg-blue-50 border-blue-200' : 'border-gray-100'}`}
              >
                <div className="flex justify-between items-center mb-1">
                  <span className={`text-sm ${day.day === today.getDate() ? 'font-bold' : ''}`}>
                    {day.day}
                  </span>
                  {day.events.length > 0 && (
                    <span className="text-xs bg-lms-primary text-white rounded-full w-5 h-5 flex items-center justify-center">
                      {day.events.length}
                    </span>
                  )}
                </div>
                <div className="space-y-1">
                  {day.events.map((event) => (
                    <div 
                      key={event.id}
                      className={`text-xs p-1 rounded truncate ${
                        event.type === 'training' ? 'bg-blue-100 text-blue-800' :
                        event.type === 'launch' ? 'bg-lms-primary/10 text-lms-primary' :
                        event.type === 'meeting' ? 'bg-green-100 text-green-800' :
                        event.type === 'onboarding' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-purple-100 text-purple-800'
                      }`}
                    >
                      {event.title}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Events</CardTitle>
          <CardDescription>Events scheduled for the next 7 days</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {events.map((event) => (
              <div key={event.id} className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-md transition-colors">
                <div className={`rounded-md p-2 mt-1 ${
                  event.type === 'training' ? 'bg-blue-100' :
                  event.type === 'launch' ? 'bg-lms-primary/10' :
                  event.type === 'meeting' ? 'bg-green-100' :
                  event.type === 'onboarding' ? 'bg-yellow-100' :
                  'bg-purple-100'
                }`}>
                  <CalendarIcon className={`h-4 w-4 ${
                    event.type === 'training' ? 'text-blue-600' :
                    event.type === 'launch' ? 'text-lms-primary' :
                    event.type === 'meeting' ? 'text-green-600' :
                    event.type === 'onboarding' ? 'text-yellow-600' :
                    'text-purple-600'
                  }`} />
                </div>
                <div className="flex-grow">
                  <p className="font-medium text-sm">{event.title}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{format(new Date(event.date), 'EEEE, MMMM d')} • {event.time}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{event.location}</p>
                </div>
                <Button variant="outline" size="sm">View</Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Calendar;
