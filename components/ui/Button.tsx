import React from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline' | 'destructive';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ElementType;
}

export const Button: React.FC<ButtonProps> = ({
                                                children,
                                                variant = 'primary',
                                                size = 'md',
                                                isLoading = false,
                                                leftIcon: LeftIcon,
                                                className,
                                                disabled,
                                                ...props
                                              }) => {
  const variants = {
    primary: "bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20",
    secondary: "bg-white text-foreground border border-gray-200 hover:bg-gray-50 shadow-sm",
    ghost: "bg-transparent text-foreground hover:bg-gray-100",
    outline: "bg-transparent border border-border text-foreground hover:bg-gray-50",
    destructive: "bg-destructive text-white hover:bg-destructive/90 shadow-sm",
  };

  const sizes = {
    sm: "h-9 px-3 text-xs",
    md: "h-11 px-6 text-sm",
    lg: "h-14 px-8 text-base",
  };

  return (
      <motion.button
          whileTap={{ scale: 0.98 }}
          className={cn(
              "inline-flex items-center justify-center font-semibold rounded-[var(--radius)] transition-all duration-200",
              "disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-primary/20",
              variants[variant],
              sizes[size],
              className
          )}
          disabled={disabled || isLoading}
          {...props}
      >
        {isLoading ? (
            <Loader2 className="w-4 h-4 animate-spin mr-2" />
        ) : LeftIcon ? (
            <LeftIcon className="w-4 h-4 mr-2" />
        ) : null}
        {children}
      </motion.button>
  );
};