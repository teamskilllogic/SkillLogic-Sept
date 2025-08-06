
import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

interface WhatsAppContactProps {
  phoneNumbers: {
    primary: string;
    secondary: string;
  };
}

const WhatsAppFloat: React.FC<WhatsAppContactProps> = ({ phoneNumbers }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const openWhatsApp = (phoneNumber: string) => {
    // Format the default message
    const message = "Hello, I'm interested in your services. Could you provide more information?";
    const encodedMessage = encodeURIComponent(message);
    
    // Open WhatsApp with the pre-filled message
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="fixed bottom-24 right-6 z-50">
      {/* WhatsApp options popup */}
      {isOpen && (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 mb-4 animate-fade-in">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold text-primary dark:text-white">Contact us on WhatsApp</h3>
            <button 
              onClick={toggleOpen}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white"
              aria-label="Close WhatsApp options"
            >
              <X size={18} />
            </button>
          </div>
          <div className="space-y-2">
            <button
              onClick={() => openWhatsApp(phoneNumbers.primary.replace(/\D/g, ''))}
              className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              {phoneNumbers.primary}
            </button>
            <button
              onClick={() => openWhatsApp(phoneNumbers.secondary.replace(/\D/g, ''))}
              className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              {phoneNumbers.secondary}
            </button>
          </div>
        </div>
      )}

      {/* Main floating button */}
      <button
        onClick={toggleOpen}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    </div>
  );
};

export default WhatsAppFloat;
