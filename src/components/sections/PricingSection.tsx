import React from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "You can try it for free",
    features: ["Only 30 tokens/requests available per month"],
    buttonText: "Get Started",
    buttonVariant: "outline" as const,
    highlight: false,
  },
  {
    name: "Pro",
    price: "$14.80",
    period: "per month",
    description: "Most popular",
    features: ["Hight speed response", "2999 tokens/requests per month"],
    buttonText: "Get",
    buttonVariant: "default" as const,
    highlight: true,
  },
  {
    name: "Premium (coming soon)",
    price: "$49.80",
    period: "per month",
    description: "Advanced features (coming soon)",
    features: ["9999 Advanced Model Queries", "Voice Recognition"],
    buttonText: "Get",
    buttonVariant: "outline" as const,
    highlight: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-16 md:py-24">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">Our Prices</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Get started with Chat With AiSha for fun and playful conversations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-md overflow-hidden border ${
                plan.highlight ? "border-primary shadow-lg" : "border-gray-200"
              }`}
            >
              {plan.highlight && (
                <div className="bg-primary py-1.5 text-center text-white text-sm font-medium">
                  Most Popular
                </div>
              )}

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-gray-500 ml-1">/{plan.period}</span>
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.buttonVariant}
                  className={`w-full ${
                    plan.buttonVariant === "default"
                      ? "bg-primary hover:bg-primary/90"
                      : "border-primary text-primary hover:bg-primary/10"
                  }`}
                  asChild
                >
                  <a href="#install">{plan.buttonText}</a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/*<div className="mt-10 text-center">*/}
        {/*  <p className="text-gray-600">*/}
        {/*    Need a custom solution? <a href="#contact" className="text-primary hover:underline">Contact us</a> for enterprise pricing.*/}
        {/*  </p>*/}
        {/*</div>*/}
      </div>
    </section>
  );
};

export default PricingSection;
