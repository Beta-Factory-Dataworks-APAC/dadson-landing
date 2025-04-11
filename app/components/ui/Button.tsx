import React from 'react';
import Link from 'next/link';
import { cn } from '../../lib/utils';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive' | 'outline' | 'ghost' | 'link' | 'secondary';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  href?: string;
}

export function Button({
  className,
  variant = 'default',
  size = 'default',
  href,
  children,
  ...props
}: ButtonProps) {
  const buttonClasses = cn(
    'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
    // Variants
    variant === 'default' && 'bg-primary text-primary-foreground hover:bg-primary/90',
    variant === 'destructive' && 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
    variant === 'outline' && 'border border-input bg-transparent hover:bg-accent hover:text-accent-foreground',
    variant === 'secondary' && 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
    variant === 'ghost' && 'hover:bg-accent hover:text-accent-foreground',
    variant === 'link' && 'text-primary underline-offset-4 hover:underline',
    // Sizes
    size === 'default' && 'h-10 px-4 py-2',
    size === 'sm' && 'h-9 rounded-md px-3',
    size === 'lg' && 'h-11 rounded-md px-8',
    size === 'icon' && 'h-10 w-10',
    className
  );

  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
} 