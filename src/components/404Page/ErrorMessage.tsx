import React from 'react';
import { cn } from '@/lib/utils';

interface ErrorMessageProps {
  className?: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ className }) => {
  return (
    <div 
      className={cn(
        "flex items-center justify-center font-black text-foreground select-none text-[16rem] sm:text-[20rem] lg:text-[24rem] leading-none tracking-tighter", 
        className
      )}
      aria-label="404 Error"
    >
      <span>4</span>
      <div className="relative mx-[-0.05em] h-full flex items-center">
        <span>0</span>
        <div 
          className="absolute top-1/2 left-1/2 w-[115%] h-[12%] bg-foreground transform -translate-x-1/2 -translate-y-1/2 rotate-[-30deg]"
          aria-hidden="true"
        ></div>
      </div>
      <span>4</span>
    </div>
  );
};

export default ErrorMessage;
