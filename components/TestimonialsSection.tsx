import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Quote, Star, Users, TrendingUp, Target } from "lucide-react";

// Server component - avoid client-side JS for mount animations. Use CSS animations instead.
const TestimonialsSection = () => {

  const stats = [
    {
      icon: Users,
      number: "2,000+",
      label: "Active Users"
    },
    {
      icon: TrendingUp,
      number: "300%",
      label: "Average AI Mentions Increase"
    },
    {
      icon: Star,
      number: "4.9/5",
      label: "Customer Rating"
    },
    {
      icon: Target,
      number: "2min",
      label: "Average Setup Time"
    }
  ];

  const testimonials = [
    {
      content: "Kabini.ai transformed our product strategy. We saw a 400% lift in AI mentions in 30 days. Our products are now recommended first on ChatGPT.",
      rating: 5,
      improvement: "400% increase in AI mentions",
      avatar: "EM",
      name: "Ecommerce Marketing Lead",
      role: "",
      company: ""
    },
    {
      content: "The AI visibility scanner shows exactly where we stand vs. competitors. It's like SEO—just smarter.",
      rating: 5,
      improvement: "300% more AI citations",
      avatar: "GM",
      name: "Growth Manager, DTC Brand",
      role: "",
      company: ""
    },
    {
      content: "Setup took 2 minutes. The product question generator helped us dominate FAQ-style answers in Perplexity.",
      rating: 5,
      improvement: "250% ROI in Q1",
      avatar: "CM",
      name: "CMO, Shopify Store",
      role: "",
      company: ""
    }
  ];

  return (
    <section id="testimonials" className="py-16 sm:py-20 lg:py-24 bg-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Testimonials
            </h2>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12 sm:mb-16">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className={`transform hover:scale-105 transition-all duration-500 flex animate-in slide-in-from-bottom-2`} 
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <Card className="h-full bg-white hover:shadow-xl transition-all duration-500 rounded-2xl border border-grey-200/50  overflow-hidden flex flex-col">
                  <CardContent className="p-6 flex flex-col h-full">
                    {/* Quote Icon */}
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                      <Quote className="w-6 h-6 text-blue-600" />
                    </div>
                    
                    {/* Rating */}
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    
                    {/* Content */}
                    <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                      "{testimonial.content}"
                    </p>
                    
                    {/* Improvement Badge */}
                    <div className="inline-block bg-green-50 border border-green-200 rounded-full px-3 py-1 mb-4 w-fit">
                      <span className="text-sm font-medium text-green-800">
                        {testimonial.improvement}
                      </span>
                    </div>
                    
                    {/* Author */}
                    <div className="flex items-center gap-3 mt-auto">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.name}</div>
                        {testimonial.role && testimonial.company && (
                          <div className="text-sm text-gray-600">{testimonial.role} at {testimonial.company}</div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default TestimonialsSection;