
import { Download, LayoutPanelTop, MessageSquare } from 'lucide-react';

const steps = [
  {
    icon: <Download className="h-5 w-5" />,
    title: "Install the Extension",
    description: "Add GrokPanel to Chrome with a single click from the Chrome Web Store.",
    delay: "0"
  },
  {
    icon: <LayoutPanelTop className="h-5 w-5" />,
    title: "Open Side Panel",
    description: "Click the GrokPanel icon in your browser to open the AI assistant in the side panel.",
    delay: "100"
  },
  {
    icon: <MessageSquare className="h-5 w-5" />,
    title: "Start Chatting",
    description: "Ask questions, request summaries, or get help with anything you need while browsing.",
    delay: "200"
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in">
          <h2 className="font-heading text-3xl md:text-4xl mb-4">
            Simple to Use, Powerful Results
          </h2>
          <p className="text-muted-foreground text-balance">
            Start using GrokPanel in just a few simple steps and transform how you browse the web.
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-0.5 h-[calc(100%-5rem)] bg-gray-200 hidden md:block"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {steps.map((step, index) => (
              <div
                key={index}
                className="glass-panel p-8 rounded-2xl relative animate-fade-in-up"
                style={{ animationDelay: `${step.delay}ms` }}
              >
                {/* Step number */}
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 h-10 w-10 rounded-full bg-grok text-white flex items-center justify-center font-medium shadow-md z-10">
                  {index + 1}
                </div>

                <div className="pt-6 text-center">
                  <div className="bg-gray-100 h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-6">
                    {step.icon}
                  </div>

                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
