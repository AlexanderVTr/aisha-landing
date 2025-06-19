import { Separator } from "../components/ui/separator";

export const Refund = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <article className="prose prose-slate max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">20-Day Money-Back Guarantee</h1>

        <p className="mb-6">
          Your satisfaction is our priority. We offer a 20-day money-back
          guarantee on all digital products purchased through our website. If
          for any reason you are not completely satisfied with your digital
          purchase, you may request a full refund within 20 days of the purchase
          date—no questions asked.
        </p>

        <Separator className="my-8" />

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            How to Request a Refund
          </h2>

          <ol className="list-decimal space-y-6 pl-6">
            <li>
              <h3 className="text-xl font-medium mb-2 inline-block">
                Contact Us
              </h3>
              <p>
                Initiate your refund by contacting our customer support team at{" "}
                <a
                  href="mailto:support@aichatbotgirlfriend.com"
                  className="text-primary hover:underline"
                >
                  support@aichatbotgirlfriend.com
                </a>
                . Please include your order number and, optionally, the reason
                for requesting a refund, though you are not required to provide
                one.
              </p>
            </li>

            <li>
              <h3 className="text-xl font-medium mb-2 inline-block">
                Processing Your Refund
              </h3>
              <p>
                Once we receive your refund request, we will process it in 7
                days. The refund will be credited back to the original method of
                payment. Please note that the timing of the refund appearing on
                your credit or bank statement can vary based on the policies of
                the payment provider.
              </p>
            </li>
          </ol>
        </section>

        <div className="bg-muted p-6 rounded-lg mt-8">
          <p>
            We are committed to ensuring that our customers have a positive
            experience with our digital products. If you have any questions or
            require assistance, please don't hesitate to contact our support
            team at{" "}
            <a
              href="mailto:support@aichatbotgirlfriend.com"
              className="text-primary hover:underline"
            >
              support@aichatbotgirlfriend.com
            </a>
            .
          </p>
        </div>
      </article>
    </div>
  );
};
