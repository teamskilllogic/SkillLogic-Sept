import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";

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
    const message =
      "Hello, I'm interested in your services. Could you provide more information?";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <div className="fixed bottom-8 right-6 z-50">
      {/* Popup */}
      {isOpen && (
        <div className="bg-white border border-gray-200 rounded-2xl shadow-xl p-4 mb-4 w-64 animate-fade-in">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-sm font-semibold text-gray-900">
              Contact us on WhatsApp
            </h3>
            <button
              onClick={toggleOpen}
              className="text-gray-400 hover:text-gray-600 transition"
              aria-label="Close WhatsApp options"
            >
              <X size={16} />
            </button>
          </div>
          <div className="space-y-2">
            <button
              onClick={() => openWhatsApp(phoneNumbers.primary.replace(/\D/g, ""))}
              className="w-full text-left px-3 py-2 rounded-xl border border-gray-200 hover:bg-gray-50 transition text-sm text-gray-800"
            >
              {phoneNumbers.primary}
            </button>
            <button
              onClick={() => openWhatsApp(phoneNumbers.secondary.replace(/\D/g, ""))}
              className="w-full text-left px-3 py-2 rounded-xl border border-gray-200 hover:bg-gray-50 transition text-sm text-gray-800"
            >
              {phoneNumbers.secondary}
            </button>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={toggleOpen}
        className="bg-black hover:bg-gray-900 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    </div>
  );
};

export default WhatsAppFloat;
