import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import Link from "next/link";

const CustomerBanner = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-blue-50 via-gray-100 to-white">
      <div className="w-full max-w-5xl mx-auto">
        <div className="relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-8 left-8 w-4 h-4 bg-blue-400 rounded-full"></div>
            <div className="absolute top-20 right-20 w-3 h-3 bg-gray-400 rounded-full"></div>
            <div className="absolute bottom-20 left-20 w-2 h-2 bg-blue-300 rounded-full"></div>
            <div className="absolute bottom-8 right-8 w-4 h-4 bg-gray-300 rounded-full"></div>
          </div>
          
          {/* Content - Centered Single Column */}
          <div className="text-center space-y-6 sm:space-y-8 relative z-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
              Ready to Dominate AI Shopping?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
              Don't let competitors own the AI shelf. Optimize your products and win.
            </p>
            <Button 
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-lg sm:text-xl font-semibold py-4 sm:py-5 px-8 sm:px-10 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 mx-auto w-fit"
              asChild
            >
              <Link href="/contact">
                <Phone className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                Start Free Trial
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerBanner;