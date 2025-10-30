"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { useState, useEffect } from "react";

const HowItWorksSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const steps = [
    {
      step: "1",
      title: "Add Your Store",
      description: "Paste your URL or connect Shopify to start your AI visibility scan.",
      color: "bg-blue-600"
    },
    {
      step: "2", 
      title: "Run AI Scan",
      description: "Kabini checks your product visibility across AI platforms.",
      color: "bg-blue-600"
    },
    {
      step: "3",
      title: "Get Actionable Insights",
      description: "Receive optimized GEO recommendations to boost rankings.",
      color: "bg-blue-600"
    },
    {
      step: "4",
      title: "Track Results",
      description: "Watch your store climb to the top of AI shopping answers.",
      color: "bg-blue-600"
    }
  ];

  return (
    <section id="how-it-works" className="py-12 sm:py-16 lg:py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-4 sm:left-10 w-16 h-16 sm:w-32 sm:h-32 bg-gray-400/10 rounded-full blur-2xl sm:blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/4 right-4 sm:right-10 w-12 h-12 sm:w-24 sm:h-24 bg-gray-300/10 rounded-full blur-xl sm:blur-2xl animate-float-medium"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8 sm:mb-12">
          <Badge className="mb-3 sm:mb-4 bg-blue-600 hover:bg-blue-600 text-white border-0 shadow-lg text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2">
            Simple Process
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-gray-900">
            Process — How It Works
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="text-center group"
            >
              {/* Step Card */}
              <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                {/* Step Number Circle */}
                <div className={`w-12 h-12 sm:w-16 sm:h-16 ${step.color} rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-white font-bold text-lg sm:text-xl">{step.step}</span>
                </div>
                
                {/* Step Title */}
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-900">
                  {step.title}
                </h3>
                
                {/* Step Description */}
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;