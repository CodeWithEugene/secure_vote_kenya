
import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  type?: 'full' | 'icon';
}

const Logo: React.FC<LogoProps> = ({ 
  className, 
  size = 'md', 
  type = 'full' 
}) => {
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
  };

  const iconSizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-12 w-12',
  };

  if (type === 'icon') {
    return (
      <div className={cn(
        "bg-lms-yellow flex items-center justify-center rounded-md font-bold text-white",
        iconSizeClasses[size],
        className
      )}>
        <span>OH</span>
      </div>
    );
  }

  return (
    <div className={cn("flex items-center", className)}>
      <div className="bg-lms-yellow rounded-md p-1.5 flex items-center justify-center">
        <span className="font-bold text-white">OH</span>
      </div>
      <span className={cn("ml-2 font-bold text-gray-800", sizeClasses[size])}>
        OneHope LMS
      </span>
    </div>
  );
};

export default Logo;
