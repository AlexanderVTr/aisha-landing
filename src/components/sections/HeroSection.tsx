import React from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-t from-rose-100 to-rose-400"
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="heading-1 mb-6">
              Chat With AiSha – Your Fun AI Girlfriend
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Have fun conversations with AiSha, your playful AI girlfriend.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="gradient" asChild>
                <a href="https://chat.aichatbotgirlfriend.com/">Chat Now</a>
              </Button>
              <Button variant="outline" className="btn-outline" asChild>
                <a href="#features">Learn More</a>
              </Button>
            </div>
          </div>

          <div className="animate-fade-in w-[60%] delay-150 relative rounded-xl overflow-hidden shadow-xl mx-auto">
            <img
              src="/ai_img.png"
              alt="AiSha interface example"
              className="w-full h-auto rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
      <div className="shade"></div>
      <div className="shade2"></div>
    </section>
  );
};

export default HeroSection;
