import React from 'react';
import { cn } from '@/lib/utils';

// --- Composant Input ---

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    icon?: React.ElementType;
}

export const Input: React.FC<InputProps> = ({ label, error, icon: Icon, className, ...props }) => {
    return (
        <div className="w-full space-y-1.5">
            {label && (
                <label className="text-sm font-medium text-gray-700 ml-1">
                    {label}
                </label>
            )}
            <div className="relative group">
                {Icon && (
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#1877F2] transition-colors">
                        <Icon className="w-5 h-5" />
                    </div>
                )}
                <input
                    className={cn(
                        "flex h-11 w-full rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm transition-all duration-200",
                        "placeholder:text-gray-400 focus:border-[#1877F2] focus:ring-4 focus:ring-[#1877F2]/5 focus:outline-none",
                        "disabled:cursor-not-allowed disabled:opacity-50",
                        Icon && "pl-10",
                        error && "border-red-500 focus:border-red-500 focus:ring-red-500/5",
                        className
                    )}
                    {...props}
                />
            </div>
            {error && <p className="text-xs text-red-500 ml-1">{error}</p>}
        </div>
    );
};

// --- Composant TextArea ---

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: string;
}

export const TextArea: React.FC<TextAreaProps> = ({ label, error, className, ...props }) => {
    return (
        <div className="w-full space-y-1.5">
            {label && (
                <label className="text-sm font-medium text-gray-700 ml-1">
                    {label}
                </label>
            )}
            <textarea
                className={cn(
                    "flex min-h-[80px] w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm transition-all duration-200",
                    "placeholder:text-gray-400 focus:border-[#1877F2] focus:ring-4 focus:ring-[#1877F2]/5 focus:outline-none",
                    "disabled:cursor-not-allowed disabled:opacity-50 resize-y",
                    error && "border-red-500 focus:border-red-500 focus:ring-red-500/5",
                    className
                )}
                {...props}
            />
            {error && <p className="text-xs text-red-500 ml-1">{error}</p>}
        </div>
    );
};