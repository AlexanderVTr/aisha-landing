const AboutUsSection = () => {
  return (
    <section id="about-us" className="py-16 md:py-24">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">About AiSha</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The user interacts with AiSha, an AI-powered virtual companion
            modeled after an Eliza-style persona. The goal is to create a sense
            of emotionally rich, meaningful communication. The system should not
            only respond to user prompts but also detect mood, emotional tone,
            and personal preferences. AiSha maintains context over time,
            remembers conversation history, and adapts her responses to simulate
            an intimate, girlfriend-like dialogue experience.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {/* All chat interactions are logged in the database (e.g., Supabase),
            while model performance and dialogue telemetry are tracked through
            Langfuse.  */}
            This use case focuses on empathy, personality simulation, and
            long-term relational memory, making AiSha feel like a responsive and
            emotionally intelligent companion.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
