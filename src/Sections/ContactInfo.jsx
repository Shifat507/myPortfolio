import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

const ContactInfo = () => {
    return (
        <div className="bg-gradient-to-r from-teal-400 to-blue-500 p-10 rounded-xl shadow-2xl max-w-3xl mx-auto ">
            <h2 className="text-4xl font-extrabold text-white text-center mb-8 mt-12 md:mt-24 ">Contact Information</h2>
            <div className="space-y-6">
                {/* Email */}
                <div className="flex flex-col items-center gap-2">
                    <div className="flex items-center gap-2">
                        <FaEnvelope className="text-2xl text-white" />
                        <span className="text-lg font-semibold text-white">Email:</span>
                    </div>
                    <a
                        href="mailto:ferdoushasanshifat@gmail.com"
                        className="text-center text-sm md:text-lg bg-white text-teal-600 rounded-lg px-4 py-2 hover:bg-teal-600 hover:text-white transition-all duration-300 shadow-lg"
                    >
                        ferdoushasanshifat@gmail.com
                    </a>
                </div>

                {/* Phone */}
                <div className="flex flex-col items-center gap-2">
                    <div className="flex items-center gap-2">
                        <FaPhoneAlt className="text-2xl text-white" />
                        <span className="text-lg font-semibold text-white">Phone:</span>
                    </div>
                    <a
                        href="tel:01300378211"
                        className="text-center text-sm md:text-lg bg-white text-teal-600 rounded-lg px-4 py-2 hover:bg-teal-600 hover:text-white transition-all duration-300 shadow-lg"
                    >
                        01300378211
                    </a>
                </div>

                {/* WhatsApp */}
                <div className="flex flex-col items-center gap-2">
                    <div className="flex items-center gap-2">
                        <FaWhatsapp className="text-2xl text-white" />
                        <span className="text-lg font-semibold text-white">WhatsApp:</span>
                    </div>
                    <a
                        href="https://wa.me/01623236850"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-center text-sm md:text-lg bg-white text-teal-600 rounded-lg px-4 py-2 hover:bg-teal-600 hover:text-white transition-all duration-300 shadow-lg"
                    >
                        01623236850
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;
