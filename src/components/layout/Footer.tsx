
import React from 'react';

const Footer = () => {

  return (
    <footer className="bg-gray-100 py-12">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Chat With AI</h3>
            <p className="text-gray-600 mb-4">
              Captain Works Ltd. 111 Fulham Palace Road, London, United Kingdom, W6 8JA
            </p>
            {/*<p className="text-gray-600">*/}
              {/*© {currentYear} Pixel Perfect, Inc. All rights reserved.*/}
            {/*</p>*/}
          </div>

          {/*<div>*/}
          {/*  <h3 className="text-lg font-semibold mb-4">Quick Links</h3>*/}
          {/*  <ul className="space-y-2">*/}
          {/*    <li><a href="#home" className="text-gray-600 hover:text-primary transition-colors">Home</a></li>*/}
          {/*    <li><a href="#features" className="text-gray-600 hover:text-primary transition-colors">Features</a></li>*/}
          {/*    <li><a href="#pricing" className="text-gray-600 hover:text-primary transition-colors">Pricing</a></li>*/}
          {/*    <li><a href="#feedback" className="text-gray-600 hover:text-primary transition-colors">Feedback</a></li>*/}
          {/*    <li><a href="#contact" className="text-gray-600 hover:text-primary transition-colors">Contact</a></li>*/}
          {/*  </ul>*/}
          {/*</div>*/}

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="/terms" className="text-gray-600 hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="/privacy" className="text-gray-600 hover:text-primary transition-colors">Privacy Notice</a></li>
              <li><a href="/refund" className="text-gray-600 hover:text-primary transition-colors">Refund Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center md:text-left">
          <p className="text-gray-600">
            Contact us: <a href="mailto:grokaitool@gmail.com" className="text-primary hover:underline">grokaitool@gmail.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
