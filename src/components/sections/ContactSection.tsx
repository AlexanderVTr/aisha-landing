import React from "react";
import { Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact-us" className="py-16 md:py-24">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Have questions about our Chat With AI? We're here to help! Reach out
            to our team anytime.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="mx-auto w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full mb-4">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Email Us</h3>
            <p className="text-gray-600 mb-4">
              Our support team is ready to assist you
            </p>
            <a
              href="mailto:support@aichatbotgirlfriend.com"
              className="text-primary hover:underline"
            >
              support@aichatbotgirlfriend.com
            </a>
          </div>

          {/*<div className="bg-white p-6 rounded-xl shadow-md text-center">*/}
          {/*  <div className="mx-auto w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full mb-4">*/}
          {/*    <MapPin className="h-6 w-6 text-primary" />*/}
          {/*  </div>*/}
          {/*  <h3 className="text-lg font-semibold mb-2">Office Location</h3>*/}
          {/*  <p className="text-gray-600 mb-4">Visit our headquarters</p>*/}
          {/*  <p className="text-gray-700">*/}
          {/*    350 Innovation Drive<br />*/}
          {/*    San Francisco, CA 94107*/}
          {/*  </p>*/}
          {/*</div>*/}

          {/*<div className="bg-white p-6 rounded-xl shadow-md text-center">*/}
          {/*  <div className="mx-auto w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full mb-4">*/}
          {/*    <Phone className="h-6 w-6 text-primary" />*/}
          {/*  </div>*/}
          {/*  <h3 className="text-lg font-semibold mb-2">Call Us</h3>*/}
          {/*  <p className="text-gray-600 mb-4">Monday-Friday, 9am-5pm PT</p>*/}
          {/*  <a href="tel:+14155551234" className="text-primary hover:underline">*/}
          {/*    */}
          {/*  </a>*/}
          {/*</div>*/}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
