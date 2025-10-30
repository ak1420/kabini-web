import clsx from 'clsx';

export function Textarea({ className, ...props }) {
  return (
    <textarea
      className={clsx(
        'w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm shadow-sm placeholder:text-gray-400 focus:border-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900/20',
        className
      )}
      {...props}
    />
  );
}


