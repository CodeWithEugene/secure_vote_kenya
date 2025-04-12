
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Upload, Filter, Grid2x2, List, FileText, Video, Image, FileQuestion } from "lucide-react";

const ContentLibrary = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Content Library</h1>
          <p className="text-gray-600 mt-1">
            Manage all your educational content in one place
          </p>
        </div>
        <Button className="bg-lms-primary hover:bg-lms-orange-dark flex items-center gap-2">
          <Upload className="h-4 w-4" />
          <span>Upload Content</span>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <CardTitle>All Content</CardTitle>
              <CardDescription>Videos, documents, images and assessments</CardDescription>
            </div>
            <div className="flex flex-wrap gap-3">
              <div className="border rounded-md overflow-hidden flex">
                <Button variant="ghost" size="sm" className="rounded-none border-r">
                  <Grid2x2 className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="rounded-none">
                  <List className="h-4 w-4" />
                </Button>
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
              <TabsTrigger value="all">All Content</TabsTrigger>
              <TabsTrigger value="videos">Videos</TabsTrigger>
              <TabsTrigger value="documents">Documents</TabsTrigger>
              <TabsTrigger value="images">Images</TabsTrigger>
              <TabsTrigger value="assessments">Assessments</TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {[
                  { name: "Leadership Principles", type: "video", size: "45 MB", modified: "2 days ago", icon: Video },
                  { name: "Biblical Studies Guide", type: "document", size: "3.2 MB", modified: "1 week ago", icon: FileText },
                  { name: "Church Outreach", type: "image", size: "1.8 MB", modified: "3 days ago", icon: Image },
                  { name: "Ministry Assessment", type: "assessment", size: "1.2 MB", modified: "5 days ago", icon: FileQuestion },
                  { name: "Worship Session", type: "video", size: "56 MB", modified: "1 day ago", icon: Video },
                  { name: "Leadership Training Manual", type: "document", size: "5.7 MB", modified: "2 weeks ago", icon: FileText },
                  { name: "Youth Event Poster", type: "image", size: "2.3 MB", modified: "4 days ago", icon: Image },
                  { name: "Bible Knowledge Quiz", type: "assessment", size: "0.8 MB", modified: "1 week ago", icon: FileQuestion },
                ].map((item, i) => (
                  <Card key={i} className="overflow-hidden hover:shadow-md transition-shadow">
                    <div className="bg-gray-100 h-32 flex items-center justify-center">
                      <item.icon className={`h-10 w-10 ${item.type === 'video' ? 'text-blue-500' : item.type === 'document' ? 'text-red-500' : item.type === 'image' ? 'text-green-500' : 'text-purple-500'}`} />
                    </div>
                    <CardContent className="pt-4">
                      <h3 className="font-medium text-sm">{item.name}</h3>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-xs text-gray-500">{item.size}</span>
                        <span className="text-xs text-gray-500">{item.modified}</span>
                      </div>
                      <div className="flex justify-between mt-2">
                        <Button variant="ghost" size="sm" className="text-xs p-1 h-7">Preview</Button>
                        <Button variant="ghost" size="sm" className="text-xs p-1 h-7">Download</Button>
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

export default ContentLibrary;
