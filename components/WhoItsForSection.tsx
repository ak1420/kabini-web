import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingBag, Store, TrendingUp, Building2 } from "lucide-react";

const WhoItsForSection = () => {
  const audiences = [
    {
      icon: ShoppingBag,
      title: "Shopify Sellers",
      description: "Optimize product pages and boost AI visibility to drive more sales.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Store,
      title: "Shopify Brands",
      description: "Compete with larger retailers and win AI shelf space for your top products.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: TrendingUp,
      title: "Marketing & SEO Teams",
      description: "Access real shopper prompts, optimize faster, and grow store visibility.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Building2,
      title: "Enterprise Shopify Stores",
      description: "Unlock competitive intelligence, visibility trends, and real-time alerts.",
      color: "from-blue-500 to-blue-600"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-4 sm:left-10 w-16 h-16 sm:w-32 sm:h-32 bg-blue-400/10 rounded-full blur-2xl sm:blur-3xl"></div>
        <div className="absolute bottom-1/4 right-4 sm:right-10 w-12 h-12 sm:w-24 sm:h-24 bg-gray-300/10 rounded-full blur-xl sm:blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8 sm:mb-12">
          <Badge className="mb-3 sm:mb-4 bg-blue-600 hover:bg-blue-600 text-white border-0 shadow-lg text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2">
            Who It's For?
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-gray-900">
            Built for Every Shopify Team
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl sm:max-w-3xl mx-auto">
            Whether you're a solo seller or an enterprise brand, Kabini.ai helps you dominate AI shopping
          </p>
        </div>

        {/* Audience Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {audiences.map((audience, index) => (
            <div 
              key={index} 
              className="text-center group flex"
            >
              {/* Audience Card */}
              <div className="bg-white rounded-xl border border-gray-200 p-4 sm:p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col w-full">
                {/* Icon */}
                <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${audience.color} rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <audience.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                
                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-900">
                  {audience.title}
                </h3>
                
                {/* Description */}
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed flex-grow">
                  {audience.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoItsForSection;