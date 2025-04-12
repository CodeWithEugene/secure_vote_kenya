
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface DashboardMetricsCardProps {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down' | 'neutral';
  icon: React.ReactNode;
  description: string;
  bgColor: string;
}

const DashboardMetricsCard: React.FC<DashboardMetricsCardProps> = ({
  title,
  value,
  change,
  trend,
  icon,
  description,
  bgColor
}) => {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-medium text-gray-500 mb-1">{title}</p>
            <div className="flex items-baseline gap-2">
              <h3 className="text-2xl font-bold">{value}</h3>
              <div className={cn(
                "flex items-center text-xs font-medium",
                trend === 'up' ? 'text-green-600' : trend === 'down' ? 'text-red-600' : 'text-gray-500'
              )}>
                {trend === 'up' ? (
                  <ChevronUp className="h-3 w-3" />
                ) : trend === 'down' ? (
                  <ChevronDown className="h-3 w-3" />
                ) : null}
                <span>{change}</span>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-1">{description}</p>
          </div>
          <div className={cn("p-3 rounded-lg", bgColor)}>
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardMetricsCard;
