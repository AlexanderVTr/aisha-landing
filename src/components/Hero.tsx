
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import AnimatedDevice from './AnimatedDevice';

const Hero = () => {
  return (
    <section className="section pt-36 md:pt-40 overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="flex-1 space-y-8 animate-fade-in">
            <Badge variant="outline" className="px-4 py-1 bg-secondary text-foreground/70 flex items-center justify-center w-fit text-xs capitalize font-medium">
              Chrome Extension
            </Badge>

            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-balance">
              <span className="block">Chat with</span>
              <span className="text-grok">Grok</span>
              <span> in your browser</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl text-balance">
              Seamlessly access the power of Grok AI directly from your browser's side panel.
              Get instant answers, creative ideas, and solutions without leaving your current tab.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="https://chromewebstore.google.com/detail/grok-3/aoemlgniakbojcecmjefonjkgnceklpg?hl=en">
                <Button size="lg" className="shadow-button hover:shadow-glow transition-all">
                  Install Extension
                </Button>
              </a>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>

            <div className="pt-8 flex items-center gap-6">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-secondary border-2 border-background"></div>
                <div className="w-8 h-8 rounded-full bg-secondary border-2 border-background"></div>
                <div className="w-8 h-8 rounded-full bg-secondary border-2 border-background"></div>
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">6,000+</span> users already installed
              </p>
            </div>
          </div>

          <div className="flex-1 flex justify-center lg:justify-end animate-fade-in">
            <AnimatedDevice />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
