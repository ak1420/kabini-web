export function Checkbox({ className = '', ...props }) {
  return (
    <input
      type="checkbox"
      className={`h-4 w-4 rounded border-gray-300 text-gray-900 focus:ring-gray-900/20 ${className}`}
      {...props}
    />
  );
}


