export function Alert({ variant = 'info', title, children }) {
  const map = {
    info: 'bg-blue-50 text-blue-800 border-blue-200',
    success: 'bg-green-50 text-green-800 border-green-200',
    warning: 'bg-yellow-50 text-yellow-800 border-yellow-200',
    destructive: 'bg-red-50 text-red-800 border-red-200'
  };
  return (
    <div className={`my-4 rounded-md border px-4 py-3 text-sm ${map[variant] || map.info}`}>
      {title ? <div className="mb-1 font-medium">{title}</div> : null}
      <div>{children}</div>
    </div>
  );
}


