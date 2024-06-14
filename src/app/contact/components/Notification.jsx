import { useEffect } from 'react';

function Notification({ message, type, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000); // Ferme la notification après 5 secondes

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`fixed bottom-4 right-4 bg-white text-black p-4 rounded-lg shadow-lg flex items-center space-x-4 ${type === 'success' ? 'border-l-4 border-green-500' : 'border-l-4 border-red-500'}`}>
      <span>{message}</span>
      <button onClick={onClose} className="text-xl leading-none hover:text-red-500">&times;</button>
    </div>
  );
}

export default Notification;
