
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-200 pt-8">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <span className="bg-grok h-8 w-8 rounded-lg flex items-center justify-center shadow-sm">
              <span className="text-white font-bold text-sm">G</span>
            </span>
            <span className="font-heading text-xl">GrokPanel</span>
          </div>

          <div className="flex flex-col md:flex-row md:space-x-8 space-y-2 md:space-y-0 items-center mb-4 md:mb-0">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              How It Works
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms
            </a>
          </div>

          <div className="text-sm text-muted-foreground">
            © {currentYear} GrokPanel. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
