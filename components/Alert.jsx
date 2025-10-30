export default function Alert({ type = 'info', children }) {
  const styles = {
    info: 'bg-blue-50 border-blue-200 text-blue-800',
    success: 'bg-green-50 border-green-200 text-green-800',
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
    error: 'bg-red-50 border-red-200 text-red-800'
  };

  const icons = {
    info: '💡',
    success: '✅',
    warning: '⚠️',
    error: '❌'
  };

  return (
    <div className={`border-l-4 p-4 rounded-md ${styles[type]} my-4`}>
      <div className="flex">
        <div className="flex-shrink-0">
          <span className="text-lg">{icons[type]}</span>
        </div>
        <div className="ml-3">
          <div className="text-sm">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}