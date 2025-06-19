import { Button } from "@/components/ui/button";

const InstallSection = () => {
  return (
    <section
      id="install"
      className="bg-gradient-to-r from-yellow-500 to-rose-600 text-white py-16 md:py-20"
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Start Chatting with AiSha Now
        </h2>
        {/*<p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-90">*/}
        {/*  */}
        {/*</p>*/}

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            size="lg"
            className="bg-white text-purple-600 hover:bg-white/90"
          >
            <a
              href="https://chromewebstore.google.com/detail/grok-3/aoemlgniakbojcecmjefonjkgnceklpg?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <span className="text-xl mr-2">🔽</span>
              Install for Chrome
            </a>
          </Button>
        </div>

        <p className="mt-6 text-white/70 text-sm">
          Available for Chrome and other Chromium-based browsers.
        </p>
      </div>
    </section>
  );
};

export default InstallSection;
