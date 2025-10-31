import clsx from 'clsx';

export function Label({ className, ...props }) {
  return <label className={clsx('mb-1 block text-sm font-medium text-gray-700', className)} {...props} />;
}


