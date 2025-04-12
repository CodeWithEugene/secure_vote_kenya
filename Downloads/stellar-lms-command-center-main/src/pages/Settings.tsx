
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Settings as SettingsIcon, Save, Globe, Bell, Shield, Layout, Users, Mail, CreditCard } from "lucide-react";

const Settings = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">System Settings</h1>
          <p className="text-gray-600 mt-1">
            Configure and manage system preferences
          </p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Settings</CardTitle>
          <CardDescription>Manage your LMS settings and preferences</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="general">
            <div className="flex">
              <div className="w-1/4 pr-4 border-r border-gray-200">
                <TabsList className="flex flex-col h-auto bg-transparent space-y-1">
                  <TabsTrigger value="general" className="justify-start w-full px-3">
                    <Globe className="h-4 w-4 mr-2" /> General
                  </TabsTrigger>
                  <TabsTrigger value="appearance" className="justify-start w-full px-3">
                    <Layout className="h-4 w-4 mr-2" /> Appearance
                  </TabsTrigger>
                  <TabsTrigger value="notifications" className="justify-start w-full px-3">
                    <Bell className="h-4 w-4 mr-2" /> Notifications
                  </TabsTrigger>
                  <TabsTrigger value="security" className="justify-start w-full px-3">
                    <Shield className="h-4 w-4 mr-2" /> Security
                  </TabsTrigger>
                  <TabsTrigger value="users" className="justify-start w-full px-3">
                    <Users className="h-4 w-4 mr-2" /> Users
                  </TabsTrigger>
                  <TabsTrigger value="email" className="justify-start w-full px-3">
                    <Mail className="h-4 w-4 mr-2" /> Email
                  </TabsTrigger>
                  <TabsTrigger value="billing" className="justify-start w-full px-3">
                    <CreditCard className="h-4 w-4 mr-2" /> Billing
                  </TabsTrigger>
                </TabsList>
              </div>
              <div className="w-3/4 pl-6">
                <TabsContent value="general">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-medium mb-3">System Information</h4>
                      <div className="space-y-3">
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div className="text-gray-500">System Name</div>
                          <div>OneHope LMS</div>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div className="text-gray-500">Version</div>
                          <div>2.1.0</div>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div className="text-gray-500">Last Updated</div>
                          <div>April 10, 2025</div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium mb-3">Site Details</h4>
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 gap-2">
                          <label className="text-sm font-medium" htmlFor="site-name">Site Name</label>
                          <input
                            id="site-name"
                            type="text"
                            className="w-full p-2 border border-gray-300 rounded-md"
                            defaultValue="OneHope Learning Management System"
                          />
                        </div>
                        <div className="grid grid-cols-1 gap-2">
                          <label className="text-sm font-medium" htmlFor="site-description">Site Description</label>
                          <textarea
                            id="site-description"
                            className="w-full p-2 border border-gray-300 rounded-md h-24"
                            defaultValue="A comprehensive learning management system for ministry training and education."
                          />
                        </div>
                        <div className="grid grid-cols-1 gap-2">
                          <label className="text-sm font-medium" htmlFor="site-url">Site URL</label>
                          <input
                            id="site-url"
                            type="text"
                            className="w-full p-2 border border-gray-300 rounded-md"
                            defaultValue="https://onehope-lms.example.com"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium mb-3">Regional Settings</h4>
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 gap-2">
                          <label className="text-sm font-medium" htmlFor="timezone">Timezone</label>
                          <select
                            id="timezone"
                            className="w-full p-2 border border-gray-300 rounded-md"
                            defaultValue="Africa/Nairobi"
                          >
                            <option value="Africa/Nairobi">Africa/Nairobi (EAT)</option>
                            <option value="UTC">UTC</option>
                            <option value="America/New_York">America/New_York (EST/EDT)</option>
                            <option value="Europe/London">Europe/London (GMT/BST)</option>
                          </select>
                        </div>
                        <div className="grid grid-cols-1 gap-2">
                          <label className="text-sm font-medium" htmlFor="date-format">Date Format</label>
                          <select
                            id="date-format"
                            className="w-full p-2 border border-gray-300 rounded-md"
                            defaultValue="DD-MM-YYYY"
                          >
                            <option value="DD-MM-YYYY">DD-MM-YYYY</option>
                            <option value="MM-DD-YYYY">MM-DD-YYYY</option>
                            <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <Button className="bg-lms-primary hover:bg-lms-orange-dark flex items-center gap-2">
                        <Save className="h-4 w-4" />
                        <span>Save Changes</span>
                      </Button>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="appearance">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-medium mb-3">Theme Settings</h4>
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 gap-2">
                          <label className="text-sm font-medium">Theme Mode</label>
                          <div className="flex space-x-4">
                            <label className="flex items-center space-x-2">
                              <input type="radio" name="theme" defaultChecked />
                              <span>Light</span>
                            </label>
                            <label className="flex items-center space-x-2">
                              <input type="radio" name="theme" />
                              <span>Dark</span>
                            </label>
                            <label className="flex items-center space-x-2">
                              <input type="radio" name="theme" />
                              <span>System</span>
                            </label>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 gap-2">
                          <label className="text-sm font-medium">Primary Color</label>
                          <div className="flex space-x-3">
                            {['#F48942', '#4CAF50', '#2196F3', '#9C27B0', '#FF5722'].map((color) => (
                              <div 
                                key={color}
                                className={`w-8 h-8 rounded-full cursor-pointer border-2 ${color === '#F48942' ? 'border-black' : 'border-transparent'}`}
                                style={{ backgroundColor: color }}
                              />
                            ))}
                            <input type="color" className="w-8 h-8 cursor-pointer" defaultValue="#F48942" />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium mb-3">Logo & Branding</h4>
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 gap-2">
                          <label className="text-sm font-medium">Logo</label>
                          <div className="flex items-center space-x-4">
                            <div className="bg-gray-100 p-3 rounded">
                              <div className="bg-lms-yellow rounded-md p-2">
                                <span className="font-bold text-white text-lg">OH</span>
                              </div>
                            </div>
                            <Button variant="outline">Change Logo</Button>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 gap-2">
                          <label className="text-sm font-medium">Favicon</label>
                          <div className="flex items-center space-x-4">
                            <div className="bg-gray-100 p-3 rounded">
                              <div className="w-6 h-6 bg-lms-yellow rounded-md flex items-center justify-center">
                                <span className="font-bold text-white text-xs">OH</span>
                              </div>
                            </div>
                            <Button variant="outline">Change Favicon</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <Button className="bg-lms-primary hover:bg-lms-orange-dark flex items-center gap-2">
                        <Save className="h-4 w-4" />
                        <span>Save Changes</span>
                      </Button>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="notifications">
                  <div className="space-y-6">
                    <h3 className="text-lg font-medium">Notification Settings</h3>
                    <p className="text-gray-500">Configure how and when notifications are sent to users</p>
                    <div className="flex justify-end">
                      <Button className="bg-lms-primary hover:bg-lms-orange-dark">
                        Save Changes
                      </Button>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </div>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default Settings;
