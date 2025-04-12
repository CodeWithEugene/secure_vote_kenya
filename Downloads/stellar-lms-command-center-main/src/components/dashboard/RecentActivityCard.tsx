
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { BookOpen, MessageSquare, FileCheck, UserPlus } from 'lucide-react';

// Sample activity data
const activities = [
  {
    id: 1,
    type: 'enrollment',
    user: 'John Doe',
    action: 'enrolled in',
    target: 'Leadership 101',
    time: '5 minutes ago',
    icon: <BookOpen className="h-3 w-3 text-blue-500" />,
    iconBg: 'bg-blue-100',
    avatarSrc: '',
    avatarFallback: 'JD',
  },
  {
    id: 2,
    type: 'forum',
    user: 'Sarah Smith',
    action: 'posted in',
    target: 'Biblical Studies Forum',
    time: '25 minutes ago',
    icon: <MessageSquare className="h-3 w-3 text-purple-500" />,
    iconBg: 'bg-purple-100',
    avatarSrc: '',
    avatarFallback: 'SS',
  },
  {
    id: 3,
    type: 'completion',
    user: 'Mike Johnson',
    action: 'completed',
    target: 'Community Building Course',
    time: '1 hour ago',
    icon: <FileCheck className="h-3 w-3 text-green-500" />,
    iconBg: 'bg-green-100',
    avatarSrc: '',
    avatarFallback: 'MJ',
  },
  {
    id: 4,
    type: 'new_user',
    user: 'Elena Rodriguez',
    action: 'joined as',
    target: 'Instructor',
    time: '2 hours ago',
    icon: <UserPlus className="h-3 w-3 text-lms-primary" />,
    iconBg: 'bg-orange-100',
    avatarSrc: '',
    avatarFallback: 'ER',
  },
];

const RecentActivityCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Latest activities in the system</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <div className="space-y-0 px-6">
          {activities.map((activity, index) => (
            <div 
              key={activity.id} 
              className={cn(
                "flex items-start space-x-3 py-4",
                index < activities.length - 1 && "border-b border-gray-100"
              )}
            >
              <Avatar className="h-8 w-8">
                <AvatarImage src={activity.avatarSrc} alt={activity.user} />
                <AvatarFallback className="text-xs">{activity.avatarFallback}</AvatarFallback>
              </Avatar>
              
              <div className="flex-1 space-y-1">
                <div className="flex items-center">
                  <p className="text-sm font-medium">{activity.user}</p>
                  <div className={cn("p-1 rounded-full mx-2", activity.iconBg)}>
                    {activity.icon}
                  </div>
                </div>
                <p className="text-sm">
                  {activity.action}{' '}
                  <span className="font-medium">{activity.target}</span>
                </p>
                <p className="text-xs text-gray-500">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-100 p-4 text-center">
          <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
            View All Activity
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentActivityCard;
