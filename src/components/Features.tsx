
import { MessageCircle, Globe, Zap, Lock } from 'lucide-react';
import {cn} from "../utils/utils.ts";

const features = [
  {
    icon: <MessageCircle className="h-6 w-6" />,
    title: "Chat with Grok",
    description: "Access Grok directly from your browser's side panel without switching contexts or opening new tabs.",
    color: "text-grok",
    bgColor: "bg-grok/10",
    delay: "0"
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Context Aware",
    description: "Get responses that understand the content of the webpage you're currently browsing.",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    delay: "100"
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Instant Answers",
    description: "Get quick answers, summaries, and assistance while researching, shopping, or working online.",
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
    delay: "200"
  },
  {
    icon: <Lock className="h-6 w-6" />,
    title: "Privacy Focused",
    description: "Your conversations remain private and are never stored or shared with third parties.",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    delay: "300"
  }
];

const Features = () => {
  return (
    <section id="features" className="section bg-secondary/50">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in">
          <h2 className="font-heading text-3xl md:text-4xl mb-4">
            All You Need for a Better Browsing Experience
          </h2>
          <p className="text-muted-foreground text-balance">
            GrokPanel combines powerful AI capabilities with a seamless browsing
            experience to help you get more done without switching contexts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-panel p-8 rounded-2xl flex flex-col h-full animate-fade-in-up"
              style={{ animationDelay: `${feature.delay}ms` }}
            >
              <div className={cn("p-2 rounded-xl w-fit mb-6", feature.bgColor)}>
                <div className={cn("h-10 w-10 rounded-lg flex items-center justify-center", feature.color)}>
                  {feature.icon}
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
