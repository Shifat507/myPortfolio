import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

const ContactInfo = () => {
    return (
        <div className="bg-gradient-to-r from-teal-400 to-blue-500 p-10 rounded-xl shadow-2xl max-w-3xl mx-auto my-16">
            <h2 className="text-4xl font-extrabold text-white text-center mb-8">Contact Information</h2>
            <div className="space-y-6">
                {/* Email */}
                <div className="flex justify-center items-center gap-4">
                    <a
                        href="mailto:ferdoushasanshifat@gmail.com"
                        className="flex items-center gap-4 bg-white text-teal-600 rounded-lg px-6 py-3 hover:bg-teal-600 hover:text-white transition-all duration-300 shadow-lg w-full sm:w-auto"
                    >
                        <FaEnvelope className="text-2xl" /> 
                        <span className="text-lg font-semibold">ferdoushasanshifat@gmail.com</span>
                    </a>
                </div>
                
                {/* Phone */}
                <div className="flex justify-center items-center gap-4">
                    <a
                        href="tel:01300378211"
                        className="flex items-center gap-4 bg-white text-teal-600 rounded-lg px-6 py-3 hover:bg-teal-600 hover:text-white transition-all duration-300 shadow-lg w-full sm:w-auto"
                    >
                        <FaPhoneAlt className="text-2xl" /> 
                        <span className="text-lg font-semibold">01300378211</span>
                    </a>
                </div>
                
                {/* WhatsApp */}
                <div className="flex justify-center items-center gap-4">
                    <a
                        href="https://wa.me/01623236850"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 bg-white text-teal-600 rounded-lg px-6 py-3 hover:bg-teal-600 hover:text-white transition-all duration-300 shadow-lg w-full sm:w-auto"
                    >
                        <FaWhatsapp className="text-2xl" /> 
                        <span className="text-lg font-semibold">WhatsApp: 01623236850</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;
