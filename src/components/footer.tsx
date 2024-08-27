import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 flex flex-col items-center">
      <p className="text-sm">
        © 2024 AI Blog. All Rights Reserved. | 
        <a href="/privacy-policy" className="text-blue-400 hover:underline"> Privacy Policy</a> | 
        <a href="/terms-of-service" className="text-blue-400 hover:underline"> Terms of Service</a>
      </p>
      <p className="text-sm mt-2">
        Built with <span className="text-red-500">♥</span> by Syed Ahmad Shaan
      </p>
    </footer>
  );
};

export default Footer;
