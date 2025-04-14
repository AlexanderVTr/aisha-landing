
import React from 'react';

const LegalSection = () => {
  return (
    <section id="legal" className="py-16 md:py-20 bg-gray-50">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-12">
            <div id="terms">
              <h2 className="text-2xl font-bold mb-4">Terms of Service</h2>
              <div className="prose max-w-none text-gray-600">
                <p>
                  These Terms of Service govern your use of the AI Image Generator extension provided by Pixel Perfect, Inc.
                  By using our service, you agree to these terms in full.
                </p>
                <p>
                  You must be at least 18 years of age to use this service. You are responsible for
                  ensuring that all persons who access our services through your account are aware of these
                  terms and comply with them.
                </p>
                <p>
                  We reserve the right to modify these terms at any time. Your continued use of the service
                  following changes to these terms constitutes your acceptance of the modified terms.
                </p>
                <p>
                  <a href="#" className="text-primary hover:underline">Read full Terms of Service</a>
                </p>
              </div>
            </div>

            <div id="privacy">
              <h2 className="text-2xl font-bold mb-4">Privacy Notice</h2>
              <div className="prose max-w-none text-gray-600">
                <p>
                  Pixel Perfect, Inc. is committed to protecting your privacy. This Privacy Notice explains
                  how we collect, use, and safeguard your information when you use our AI Image Generator.
                </p>
                <p>
                  We collect certain information when you use our service, including the text prompts you provide,
                  the images generated, and basic usage analytics. This information is used to provide and improve
                  our services.
                </p>
                <p>
                  We do not sell your personal information to third parties. We may share your information with
                  service providers who help us deliver our services.
                </p>
                <p>
                  <a href="#" className="text-primary hover:underline">Read full Privacy Notice</a>
                </p>
              </div>
            </div>

            <div id="refund">
              <h2 className="text-2xl font-bold mb-4">Refund Policy</h2>
              <div className="prose max-w-none text-gray-600">
                <p>
                  If you are not satisfied with our subscription service, you may request a refund within 14 days
                  of purchase. Refunds are processed at our discretion and may depend on the reason for the request
                  and usage of the service.
                </p>
                <p>
                  To request a refund, please contact us at support@imagegenerator.com with your purchase
                  details and reason for the refund request.
                </p>
                <p>
                  <a href="#" className="text-primary hover:underline">Read full Refund Policy</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegalSection;
