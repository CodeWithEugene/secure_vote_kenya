
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./components/layouts/AppLayout";
import Dashboard from "./pages/Index";
import NotFound from "./pages/NotFound";
import Users from "./pages/Users";
import Courses from "./pages/Courses";
import ContentLibrary from "./pages/ContentLibrary";
import Analytics from "./pages/Analytics";
import Forums from "./pages/Forums";
import Calendar from "./pages/Calendar";
import Reports from "./pages/Reports";
import LiveSessions from "./pages/LiveSessions";
import Settings from "./pages/Settings";
import Support from "./pages/Support";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout><Dashboard /></AppLayout>} />
          <Route path="/users" element={<AppLayout><Users /></AppLayout>} />
          <Route path="/users/admins" element={<AppLayout><Users /></AppLayout>} />
          <Route path="/users/instructors" element={<AppLayout><Users /></AppLayout>} />
          <Route path="/users/learners" element={<AppLayout><Users /></AppLayout>} />
          <Route path="/courses" element={<AppLayout><Courses /></AppLayout>} />
          <Route path="/courses/categories" element={<AppLayout><Courses /></AppLayout>} />
          <Route path="/courses/curriculum" element={<AppLayout><Courses /></AppLayout>} />
          <Route path="/content" element={<AppLayout><ContentLibrary /></AppLayout>} />
          <Route path="/content/videos" element={<AppLayout><ContentLibrary /></AppLayout>} />
          <Route path="/content/documents" element={<AppLayout><ContentLibrary /></AppLayout>} />
          <Route path="/content/images" element={<AppLayout><ContentLibrary /></AppLayout>} />
          <Route path="/content/assessments" element={<AppLayout><ContentLibrary /></AppLayout>} />
          <Route path="/analytics" element={<AppLayout><Analytics /></AppLayout>} />
          <Route path="/forums" element={<AppLayout><Forums /></AppLayout>} />
          <Route path="/calendar" element={<AppLayout><Calendar /></AppLayout>} />
          <Route path="/reports" element={<AppLayout><Reports /></AppLayout>} />
          <Route path="/live-sessions" element={<AppLayout><LiveSessions /></AppLayout>} />
          <Route path="/settings" element={<AppLayout><Settings /></AppLayout>} />
          <Route path="/support" element={<AppLayout><Support /></AppLayout>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
