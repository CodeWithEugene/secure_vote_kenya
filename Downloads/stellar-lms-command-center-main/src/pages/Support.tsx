
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HelpCircle, FileText, MessageSquare, Mail, ExternalLink, PhoneCall } from "lucide-react";

const Support = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Support Center</h1>
          <p className="text-gray-600 mt-1">
            Get help and find answers to your questions
          </p>
        </div>
        <Button className="bg-lms-primary hover:bg-lms-orange-dark flex items-center gap-2">
          <MessageSquare className="h-4 w-4" />
          <span>Contact Support</span>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="rounded-full bg-blue-100 w-12 h-12 flex items-center justify-center mb-4">
              <FileText className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="font-medium text-lg mb-2">Documentation</h3>
            <p className="text-gray-600 mb-4">Access comprehensive guides and documentation for OneHope LMS.</p>
            <Button variant="outline" className="w-full flex items-center justify-center gap-2">
              <span>View Documentation</span>
              <ExternalLink className="h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
        
        <Card className="hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="rounded-full bg-lms-primary/10 w-12 h-12 flex items-center justify-center mb-4">
              <HelpCircle className="h-6 w-6 text-lms-primary" />
            </div>
            <h3 className="font-medium text-lg mb-2">FAQ</h3>
            <p className="text-gray-600 mb-4">Find answers to frequently asked questions about using the platform.</p>
            <Button variant="outline" className="w-full flex items-center justify-center gap-2">
              <span>Browse FAQs</span>
              <ExternalLink className="h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
        
        <Card className="hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="rounded-full bg-green-100 w-12 h-12 flex items-center justify-center mb-4">
              <MessageSquare className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="font-medium text-lg mb-2">Live Chat</h3>
            <p className="text-gray-600 mb-4">Chat with our support team for immediate assistance with any issues.</p>
            <Button variant="outline" className="w-full flex items-center justify-center gap-2">
              <span>Start Chat</span>
              <ExternalLink className="h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Contact Information</CardTitle>
          <CardDescription>Reach out to our support team</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="bg-gray-100 p-2 rounded-full">
              <Mail className="h-5 w-5 text-gray-600" />
            </div>
            <div>
              <h4 className="font-medium text-sm">Email Support</h4>
              <p className="text-sm text-gray-500 mt-1">support@onehope-lms.example.com</p>
              <p className="text-sm text-gray-500">Response time: Within 24 hours</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="bg-gray-100 p-2 rounded-full">
              <PhoneCall className="h-5 w-5 text-gray-600" />
            </div>
            <div>
              <h4 className="font-medium text-sm">Phone Support</h4>
              <p className="text-sm text-gray-500 mt-1">+254 700 123 456</p>
              <p className="text-sm text-gray-500">Monday-Friday: 8am-5pm EAT</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Submit a Support Ticket</CardTitle>
          <CardDescription>Fill out the form below to get assistance from our support team</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">Name</label>
                <input
                  id="name"
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <input
                  id="email"
                  type="email"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Your email"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">Subject</label>
              <input
                id="subject"
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Brief description of your issue"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="category" className="text-sm font-medium">Category</label>
              <select
                id="category"
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="">Select a category</option>
                <option value="technical">Technical Issue</option>
                <option value="account">Account Help</option>
                <option value="billing">Billing</option>
                <option value="feature">Feature Request</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">Description</label>
              <textarea
                id="message"
                className="w-full p-2 border border-gray-300 rounded-md h-32"
                placeholder="Please provide detailed information about your issue"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="attachments" className="text-sm font-medium">Attachments</label>
              <div className="border border-dashed border-gray-300 rounded-md p-4 text-center">
                <p className="text-sm text-gray-500">Drag and drop files here or click to upload</p>
                <input type="file" id="attachments" className="hidden" />
                <Button variant="outline" size="sm" className="mt-2">Select Files</Button>
              </div>
            </div>
            
            <div className="flex justify-end">
              <Button className="bg-lms-primary hover:bg-lms-orange-dark">Submit Ticket</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Support;
