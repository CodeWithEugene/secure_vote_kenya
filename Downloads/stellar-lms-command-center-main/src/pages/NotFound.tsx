
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="text-center max-w-lg">
        <h2 className="text-9xl font-bold text-lms-primary mb-6">404</h2>
        <h3 className="text-3xl font-semibold text-gray-800 mb-4">
          Page Not Found
        </h3>
        <p className="text-gray-600 mb-8">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <div className="space-x-4">
          <Button asChild>
            <Link to="/">Back to Dashboard</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/support">Contact Support</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
