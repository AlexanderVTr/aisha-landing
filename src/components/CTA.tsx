import { Button } from './ui/button';

const CTA = () => {
  return (
    <section id="get-started" className="section bg-blue-gradient text-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-balance animate-fade-in">
            Enhance Your Browsing with Grok AI
          </h2>

          <p className="text-white/80 text-lg max-w-2xl mx-auto text-balance animate-fade-in-up">
            Join thousands of users who are already experiencing a more
            productive and efficient way to browse the web with GrokPanel.
          </p>

          <div className="pt-4 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <a href="https://chromewebstore.google.com/detail/grok-3/aoemlgniakbojcecmjefonjkgnceklpg?hl=en">
              <Button size="lg" variant="secondary" className="bg-white text-grok hover:bg-white/90 shadow-lg">
                Install GrokPanel
              </Button>
            </a>
          </div>

          <div className="pt-4 text-sm text-white/70 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            Available for Chrome. More browsers coming soon.
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
