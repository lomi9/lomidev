import { useEffect } from 'react';

function Notification({ message, type, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 10000); // Ferme la notification après 10 secondes

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`fixed bottom-20 z-30 right-4 bg-background text-foreground p-4 rounded-lg shadow-lg flex items-center space-x-4 ${type === 'success' ? 'border-l-4 border-green-300' : 'border-l-4 border-red-400'}`}>
      <span>{message}</span>
      <button onClick={onClose} className="text-xl leading-none hover:text-red-500">&times;</button>
    </div>
  );
}

export default Notification;
