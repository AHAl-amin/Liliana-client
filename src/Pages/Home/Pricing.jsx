"use client";
import { useState, useMemo } from "react";
import { Check, ArrowRight } from "lucide-react";

const pricingData =[
  {
    "id": 1,
    "name": "Basic Memorial",
    "subtitle": "Essential features for remembrance",
    "price": "Free",
    "isLifetime": false,
    "features": [
      "Create one memorial page",
      "Basic photo uploads (up to 5)",
      "Public sharing option",
      "Basic support"
    ],
    "buttonText": "Create a Memorial",
    "isPopular": false
  },
  {
    "id": 2,
    "name": "Premium Legacy",
    "subtitle": "Enhanced features for lasting memories",
    "price": "$15",
    "isLifetime": true,
    "lifetimeText": "Lifetime Premium",
    "features": [
      "Unlimited memorial pages",
      "Advanced photo and video uploads",
      "Private sharing options",
      "Custom themes",
      "Priority support"
    ],
    "buttonText": "Create a Memorial",
    "isPopular": true
  },
  {
    "id": 3,
    "name": "Family Circle",
    "subtitle": "Collaborative features for families",
    "price": "$40",
    "isLifetime": true,
    "lifetimeText": "Lifetime premium for up to 4 family members",
    "features": [
      "All Premium features",
      "Up to 4 family member accounts",
      "Collaborative editing",
      "Advanced analytics",
      "24/7 premium support"
    ],
    "buttonText": "Create a Memorial",
    "isPopular": false
  }
]
// Bird/Dove SVG Component (Memoized)


function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const plans = pricingData || []; // Fallback to empty array if JSON is unavailable

  const handleGetStarted = (plan) => {
    setSelectedPlan(plan.id);
    console.log("Selected plan:", plan);
    // Add payment logic here (e.g., redirect to payment gateway)
  };

  // Color mapping for plans
  const planStyles = {
    1: { priceBg: "from-amber-200 to-amber-300", buttonBg: "bg-amber-500 hover:bg-amber-600" },
    2: { priceBg: "from-orange-200 to-orange-300", buttonBg: "bg-orange-500 hover:bg-orange-600" },
    3: { priceBg: "from-blue-200 to-blue-300", buttonBg: "bg-blue-500 hover:bg-blue-600" },
  };

  return (
    <section className="relative lg:w-[60%] md:w-[60%]    mx-auto min-h-screen py-16 px-4">
      {/* Header Section */}
        <div className="relative py-20">
                <div className="absolute left-1/8 top-0">
                    <img src="/img/Banner/birdOne.png" alt="Decorative bird illustration" />
                </div>
                <div className="absolute right-1/8 top-0">
                    <img src="/img/Banner/birdTwo.png" alt="Decorative bird illustration" />
                </div>
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-3xl md:font-bold text1  "> Plans & Pricing</h1>

                    <p className="text-lg text max-w-2xl text-center font-sans">
                       Choose the plan that best fits your needs for preserving and honoring memories.
                    </p>
                </div>
            </div>

      {/* Pricing Cards */}
      <div className=" mx-auto">
        {plans.length === 0 ? (
          <p className="text-center text-gray-700 text-lg">No pricing plans available.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden ${
                  selectedPlan === plan.id ? "ring-2 ring-amber-500" : ""
                }`}
                role="region"
                aria-label={`Pricing plan: ${plan.name}`}
              >
                {/* Popular Badge */}
                {plan.isPopular && (
                  <div className="absolute top-0 right-0 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                    Most Popular
                  </div>
                )}

                {/* Card Header */}
                <div className="p-6 sm:p-8 pb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-amber-700 mb-2 text-center">{plan.name}</h3>
                  <p className="text-gray-600 text-center text-sm sm:text-base mb-6">{plan.subtitle}</p>
                </div>

                {/* Price Section */}
                <div className="px-6 sm:px-8 pb-6">
                  <div
                    className={`rounded-2xl p-4 sm:p-6 mb-6 relative overflow-hidden bg-gradient-to-r ${
                      planStyles[plan.id]?.priceBg || "from-gray-200 to-gray-300"
                    }`}
                  >
                    <div className="text-center">
                      <div className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">{plan.price}</div>
                      {plan.isLifetime && (
                        <div className="text-gray-700 text-sm sm:text-base">{plan.lifetimeText}</div>
                      )}
                    </div>
                    <img src="../../../public/img/Banner/pricingImage.png" className='w-2/3' alt="" />
                  </div>
                </div>

                {/* Features List */}
                <div className="px-6 sm:px-8 pb-8">
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center mr-3">
                          <Check className="w-3 h-3 text-amber-600" />
                        </div>
                        <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button
                    onClick={() => handleGetStarted(plan)}
                    className={`w-full py-3 px-6 rounded-full font-medium text-white transition-all duration-300 flex items-center justify-center gap-2 ${
                      planStyles[plan.id]?.buttonBg || "bg-gray-500 hover:bg-gray-600"
                    } hover:shadow-lg transform hover:scale-105`}
                    aria-label={`Select ${plan.name} plan`}
                  >
                    <span>{plan.buttonText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Pricing;