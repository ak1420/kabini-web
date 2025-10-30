import clsx from 'clsx';

export function Button({ variant = 'default', size = 'md', className, asChild, children, ...props }) {
  const Comp = asChild ? 'span' : 'button';
  const base = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';
  const variants = {
    default: 'bg-gray-900 text-white hover:bg-gray-800',
    secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200',
    outline: 'border border-gray-300 hover:bg-gray-50',
    ghost: 'hover:bg-gray-100'
  };
  const sizes = {
    sm: 'h-8 px-3 text-sm',
    md: 'h-10 px-4 text-sm',
    lg: 'h-11 px-6 text-base'
  };
  return (
    <Comp className={clsx(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </Comp>
  );
}


