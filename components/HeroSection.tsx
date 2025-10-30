import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from 'next/image';

const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-4 sm:top-10 md:top-20 left-2 sm:left-4 md:left-20 w-8 h-8 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-32 lg:h-32 bg-blue-400/10 rounded-full blur-lg sm:blur-xl md:blur-2xl animate-pulse"></div>
                <div className="absolute bottom-4 sm:bottom-10 md:bottom-20 right-2 sm:right-4 md:right-20 w-6 h-6 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-24 lg:h-24 bg-indigo-300/10 rounded-full blur-lg sm:blur-xl md:blur-2xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/4 w-4 h-4 sm:w-8 sm:h-8 md:w-12 md:h-12 bg-purple-300/5 rounded-full blur-md sm:blur-lg animate-pulse delay-500"></div>
            </div>

            <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-20 items-center max-w-7xl mx-auto">

                    {/* Left Column - Content */}
                    <div className="text-center lg:text-left order-2 lg:order-1 flex flex-col items-center lg:items-start space-y-4 sm:space-y-6 md:space-y-8">

                        {/* Main Headline */}
                        <h1 className="font-bold leading-tight tracking-tight">
                            <span className="block text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-gray-900 mb-2 sm:mb-3">
                                Supercharge Your
                            </span>
                            <span className="block text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-gray-900 mb-2 sm:mb-3">
                                Shopify Store's
                            </span>
                            <span className="block text-3xl md:text-4xl lg:text-5xl xl:text-6xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                Visibility For AI
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-600 leading-relaxed max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto lg:mx-0">
                            Kabini is the leading AI monitoring platform for Shopify stores. See how your products rank on top AI tools and grow your sales with ease.
                        </p>

                        {/* CTA Button */}
                        <div className=" sm:w-auto">
                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5"
                                asChild
                            >
                                <a href="https://app.kabini.ai" className="inline-flex items-center justify-center gap-2 sm:gap-3">
                                    Start Free Trial
                                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                                </a>
                            </Button>
                        </div>

                        {/* Feature Highlights */}
                        <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 sm:gap-3 md:gap-4 lg:gap-6 justify-center lg:justify-start items-center">
                            {['CHATGPT', 'PERPLEXITY', 'GEMINI', 'CLAUDE'].map((platform, index) => (
                                <div key={platform} className="flex items-center gap-1.5 sm:gap-2 bg-white/50 backdrop-blur-sm rounded-full px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 border border-gray-200/50 hover:border-blue-300/50 transition-all duration-300 w-fit">
                                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full animate-pulse" style={{ animationDelay: `${index * 200}ms` }}></div>
                                    <span className="text-xs sm:text-sm md:text-base font-medium text-gray-700">{platform}</span>
                                </div>
                            ))}
                        </div>

                        {/* Trust Indicators */}
                        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 md:gap-6 text-xs sm:text-sm text-gray-500 pt-2 sm:pt-4">
                            <div className="flex items-center gap-1 sm:gap-2">
                                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full flex items-center justify-center">
                                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
                                </div>
                                <span>Free trial</span>
                            </div>
                            <div className="flex items-center gap-1 sm:gap-2">
                                <div className="w-3 h-3 sm:w-4 sm:h-4 bg-blue-500 rounded-full flex items-center justify-center">
                                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
                                </div>
                                <span>No credit card required</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - AI Visibility Chart */}
                    <div className="flex justify-center lg:justify-end order-1 lg:order-2 items-center w-full">
                        <div className="relative group w-full max-w-[250px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-[450px] xl:max-w-[500px]">
                            {/* Glow Effect */}
                            {/* <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200 animate-pulse"></div> */}

                            {/* Main Container */}
                            <div className="relative bg-white rounded-xl sm:rounded-2xl border border-blue-200/50 hover:border-blue-500/50 hover:shadow-lg transform hover:-translate-y-1 hover:scale-[1.02] transition-all duration-500 overflow-hidden">

                                {/* Chart Content */}
                                <div className="p-3 sm:p-4 md:p-6">
                                    <Image
                                        src="/AI%20Visibility%20-2.svg"
                                        alt="AI Visibility Dashboard showing performance metrics across ChatGPT, Perplexity, Gemini, and Claude"
                                        className="w-full h-auto object-contain"
                                        width={800}
                                        height={600}
                                        priority
                                    />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;