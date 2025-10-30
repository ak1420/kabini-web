"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Search, BarChart3, Sparkles, Zap, Play } from "lucide-react";
import { useState, useEffect } from "react";

const FeaturesSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: Search,
      title: "AI Visibility Tracking",
      benefits: ["Track rankings across multiple AI assistants", "Monitor regional and language visibility", "Receive alerts when your product drops in AI answers"],
      cta: "Track Visibility",
      color: "blue",
      demo: {
        title: "AI Visibility Score",
        score: "85/100",
        items: [
          { name: "ChatGPT", score: 100, color: "blue" },
          { name: "Gemini", score: 75, color: "green" },
          { name: "Claude", score: 85, color: "purple" }
        ]
      }
    },
    {
      icon: BarChart3,
      title: "Competitor Intelligence",
      benefits: ["Compare citation frequency, tone, and placement", "Detect emerging competitors gaining traction", "Identify gaps in category and price positioning"],
      cta: "Analyze Competitors",
      color: "blue",
      demo: {
        title: "Competitor Analysis",
        items: [
          { name: "Your Site", score: 85, color: "green" },
          { name: "C1 Competitor A", score: 72, color: "red" },
          { name: "C2 Competitor B", score: 65, color: "orange" }
        ]
      }
    },
    {
      icon: Sparkles,
      title: "GEO Optimization Suite",
      benefits: ["Check schema coverage", "Scan content freshness", "Get internal linking insights"],
      cta: "Optimize Now",
      color: "blue",
      demo: {
        title: "Optimization Suite",
        items: [
          { name: "Schema Coverage", status: "Good", color: "green" },
          { name: "Content Freshness", status: "Needs Update", color: "orange" },
          { name: "Internal Links", status: "Poor", color: "red" }
        ]
      }
    },
    {
      icon: Zap,
      title: "Shopper Insights",
      benefits: ["Query intent mapping (informational, comparative, transactional)", "Top shopper questions in your category", "Sentiment analysis of how your brand is framed"],
      cta: "Get Insights",
      color: "blue",
      demo: {
        title: "Shopper Insights",
        items: [
          { question: "What is AI visibility optimization?", answer: "AI visibility optimization is the process of ensuring your content appears prominently in AI-powered search results..." },
          { question: "How does GEO differ from SEO?", answer: "Generative Engine Optimization (GEO) focuses on optimizing for AI engines rather than traditional search..." }
        ]
      }
    }
  ];

  // Map feature titles to their corresponding public SVGs
  const demoImageByTitle: Record<string, string> = {
    "AI Visibility Tracking": "/AI%20Visibility%20Score%20-2.svg",
    "Competitor Intelligence": "/Competitor%20Benchmarking%20-2.svg",
    "GEO Optimization Suite": "/AI%20Content%20Generator%20-2.svg",
    "Shopper Insights": "/Optimization%20Suite%20-2.svg",
  };

  return (
    <section id="solutions" className="py-12 sm:py-16 lg:py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-4 sm:left-10 w-16 h-16 sm:w-32 sm:h-32 bg-gray-400/10 rounded-full blur-2xl sm:blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/4 right-4 sm:right-10 w-12 h-12 sm:w-24 sm:h-24 bg-gray-300/10 rounded-full blur-xl sm:blur-2xl animate-float-medium"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8 sm:mb-12">
          <div className={`inline-block transform transition-all duration-1000 ${isVisible ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}`}>
            <Badge className="mb-4 sm:mb-6 bg-blue-600 hover:bg-blue-600 text-white border-0 shadow-lg text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2">
              Advanced Features
            </Badge>
          </div>
          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
              <span className="text-gray-900">
                Our Solutions
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl sm:max-w-3xl mx-auto">
              At Kabini.ai, we help Shopify stores brands win visibility in AI-powered search and shopping assistants.
            </p>
          </div>
        </div>

        {/* Features Grid - Responsive Layout */}
        <div className="space-y-16 sm:space-y-20 lg:space-y-24 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`transform transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Mobile Layout: Stacked */}
              <div className="lg:hidden space-y-6">
                {/* Feature Header */}
                <div className="text-center space-y-4">
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{feature.title}</h3>
                  </div>
                </div>
                
                {/* Demo Card - Mobile */}
                <div className="flex justify-center">
                  <Card className="bg-white shadow-lg border border-gray-200 rounded-xl overflow-hidden w-full max-w-sm">
                    <CardContent className="p-4">
                      <h4 className="text-base font-semibold text-gray-900 mb-3">{feature.demo.title}</h4>
                      <div className="space-y-3">
                        {feature.demo.score && (
                          <div className="text-center mb-3">
                            <div className="text-2xl font-bold text-blue-600">{feature.demo.score}</div>
                          </div>
                        )}
                        
                        {feature.demo.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="space-y-2">
                            {item.score && (
                              <>
                                <div className="flex items-center justify-between">
                                  <span className="text-sm font-medium text-gray-700">{item.name}</span>
                                  <span className="text-sm font-bold text-gray-500">{item.score}%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                  <div 
                                    className="h-2.5 rounded-full transition-all duration-1000 bg-gray-400" 
                                    style={{width: `${item.score}%`}}
                                  ></div>
                                </div>
                              </>
                            )}
                            
                            {item.status && (
                              <div className="flex items-center justify-between">
                                <span className="text-sm font-medium text-gray-700">{item.name}</span>
                                <span className="text-sm font-bold text-gray-500">{item.status}</span>
                              </div>
                            )}
                            
                            {item.question && (
                              <div className="space-y-2">
                                <div className="text-sm font-medium text-gray-700">Q: {item.question}</div>
                                <div className="text-sm text-gray-600">A: {item.answer}</div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Benefits & CTA - Mobile */}
                <div className="text-center space-y-4">
                  {/* Description */}
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {feature.title === "AI Visibility Tracking" && "See exactly how your brand and products appear in ChatGPT, Gemini, Copilot, Perplexity, and Claude."}
                    {feature.title === "Competitor Intelligence" && "Benchmark your Share of AI Voice against rivals and uncover their strategy."}
                    {feature.title === "GEO Optimization Suite" && "Make your product content AI-ready with actionable recommendations."}
                    {feature.title === "Shopper Insights" && "Understand what real shoppers ask AI assistants."}
                  </p>
                  
                  <div className="space-y-3">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center gap-3 justify-center">
                        <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-gray-600" />
                        </div>
                        <span className="text-sm text-gray-700 font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    size="lg" 
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 text-sm font-medium"
                    asChild
                  >
                    <a href="https://app.kabini.ai">
                      {feature.cta}
                      <ArrowRight className="w-3 h-3 ml-1.5" />
                    </a>
                  </Button>
                </div>
              </div>
              
              {/* Desktop Layout: Cross-Section Pattern */}
              <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-start">
                {/* Content Column - Fixed left side for odd indexes, right side for even indexes */}
                <div className={`${index % 2 === 0 ? 'order-1' : 'order-2'}`}>
                  <div className="space-y-6 text-left">
                    {/* Feature Icon & Title */}
                    <div className="flex items-center gap-6 mb-6">
                      <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg transform hover:scale-110 transition-all duration-300">
                        <feature.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900">{feature.title}</h3>
                    </div>
                    
                    {/* Description */}
                    <p className="text-base text-gray-600 leading-relaxed mb-6">
                      {feature.title === "AI Visibility Tracking" && "See exactly how your brand and products appear in ChatGPT, Gemini, Copilot, Perplexity, and Claude."}
                      {feature.title === "Competitor Intelligence" && "Benchmark your Share of AI Voice against rivals and uncover their strategy."}
                      {feature.title === "GEO Optimization Suite" && "Make your product content AI-ready with actionable recommendations."}
                      {feature.title === "Shopper Insights" && "Understand what real shoppers ask AI assistants."}
                    </p>
                    
                    {/* Benefits */}
                    <div className="space-y-3">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center gap-4">
                          <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                            <Check className="w-3 h-3 text-gray-600" />
                          </div>
                          <span className="text-base text-gray-700 font-medium">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* CTA Button */}
                    <div className="pt-4">
                      <Button 
                        size="lg" 
                        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 text-base font-medium"
                        asChild
                      >
                        <a href="https://app.kabini.ai">
                          {feature.cta}
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
                
                {/* Demo Column - image only, no card */}
                <div className={`${index % 2 === 0 ? 'order-2' : 'order-1'} flex items-center justify-center`}>
                  <div className="rounded-xl border border-blue-200/50 hover:border-blue-400/60 bg-white p-2 sm:p-3 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 hover:scale-[1.02] transition-all duration-300">
                    <img
                      src={demoImageByTitle[feature.title] || '/placeholder.svg'}
                      alt={feature.title}
                      className="block w-[240px] sm:w-[280px] md:w-[340px] lg:w-[400px] h-auto object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;