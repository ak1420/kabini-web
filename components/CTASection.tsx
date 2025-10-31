import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-4 w-8 h-8 bg-blue-100 rounded-full blur-sm"></div>
        <div className="absolute bottom-1/4 right-8 w-12 h-12 bg-gray-100 rounded-full blur-sm"></div>
        <div className="absolute top-1/2 left-1/4 w-6 h-6 bg-blue-50 rounded-full blur-sm"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
            Ready to join thousands of Shopify stores?
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Start your free trial today and see how AI visibility drives growth.
          </p>
          
          <Button 
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white text-lg sm:text-xl font-semibold py-4 sm:py-5 px-8 sm:px-10 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
            asChild
          >
            <a href="https://app.kabini.ai">
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;