
import React from 'react';

const features = [
  {
    title: "Chat with AI",
    description: "Engage in seamless conversations with our advanced AI, designed to understand and respond to your needs instantly.",
    icon: "🚀",
  },
  {
    title: "Image Sharing",
    description: "Easily upload and share images in your chats. Discuss visuals directly with the AI for insights or feedback.",
    icon: "📸️",
  },
  {
    title: "File Uploads",
    description: "Send documents, PDFs, or other files to the AI for analysis, summaries, or answers based on your content.",
    icon: "📄",
  },
  {
    title: "Real-Time Responses",
    description: "Get instant, accurate replies from the AI, whether you're chatting, sharing images, or uploading files.",
    icon: "⚡",
  },
  {
    title: "User-Friendly Interface",
    description: "Enjoy a clean, intuitive design that makes chatting and sharing effortless, no technical skills required.",
    icon: "👌",
  },
  {
    title: "Private & Secure",
    description: "Your conversations, images, and files are protected with top-tier security and confidentiality.",
    icon: "🔒",
  }
];

const FeaturesSection = () => {
  return (
    <section id="product" className="bg-gray-50 py-16 md:py-24">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">⚡ Get Started in Seconds</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Download extension and unlock the power of AI today.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
