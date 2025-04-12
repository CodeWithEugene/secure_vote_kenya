
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { MoreHorizontal, Star, Eye } from 'lucide-react';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

// Sample course data
const courses = [
  {
    id: 1,
    name: 'Leadership 101',
    category: 'Leadership',
    instructor: 'Dr. James Wilson',
    instructorAvatar: '',
    instructorFallback: 'JW',
    learners: 248,
    rating: 4.8,
    status: 'active',
    progress: 85,
  },
  {
    id: 2,
    name: 'Biblical Studies',
    category: 'Theology',
    instructor: 'Rev. Mary Johnson',
    instructorAvatar: '',
    instructorFallback: 'MJ',
    learners: 195,
    rating: 4.6,
    status: 'active',
    progress: 65,
  },
  {
    id: 3,
    name: 'Community Building',
    category: 'Leadership',
    instructor: 'Thomas Adams',
    instructorAvatar: '',
    instructorFallback: 'TA',
    learners: 142,
    rating: 4.3,
    status: 'active',
    progress: 70,
  },
  {
    id: 4,
    name: 'Youth Ministry',
    category: 'Ministry',
    instructor: 'Sarah Parker',
    instructorAvatar: '',
    instructorFallback: 'SP',
    learners: 87,
    rating: 4.5,
    status: 'draft',
    progress: 45,
  },
  {
    id: 5,
    name: 'Digital Outreach',
    category: 'Technology',
    instructor: 'Michael Chen',
    instructorAvatar: '',
    instructorFallback: 'MC',
    learners: 113,
    rating: 4.2,
    status: 'active',
    progress: 55,
  },
];

const CoursesOverviewTable = () => {
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Course Name</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Instructor</TableHead>
            <TableHead className="text-right">Learners</TableHead>
            <TableHead className="text-center">Rating</TableHead>
            <TableHead className="text-center">Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {courses.map((course) => (
            <TableRow key={course.id}>
              <TableCell className="font-medium">{course.name}</TableCell>
              <TableCell>{course.category}</TableCell>
              <TableCell>
                <div className="flex items-center space-x-2">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src={course.instructorAvatar} alt={course.instructor} />
                    <AvatarFallback className="text-xs">{course.instructorFallback}</AvatarFallback>
                  </Avatar>
                  <span className="text-sm">{course.instructor}</span>
                </div>
              </TableCell>
              <TableCell className="text-right">{course.learners}</TableCell>
              <TableCell className="text-center">
                <div className="flex items-center justify-center space-x-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span>{course.rating}</span>
                </div>
              </TableCell>
              <TableCell className="text-center">
                <Badge variant={course.status === 'active' ? 'default' : 'secondary'} className={
                  course.status === 'active' 
                    ? 'bg-green-100 text-green-800 hover:bg-green-200' 
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }>
                  {course.status === 'active' ? 'Active' : 'Draft'}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end space-x-2">
                  <Button variant="ghost" size="icon" title="View Course">
                    <Eye className="h-4 w-4" />
                  </Button>
                  
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>Statistics</DropdownMenuItem>
                      <DropdownMenuItem>Duplicate</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-red-600">Archive</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CoursesOverviewTable;
