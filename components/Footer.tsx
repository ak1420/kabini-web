import { Zap } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-100 via-blue-50 to-slate-200 text-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-md">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-blue-600">Kabini.ai</span>
            </div>
            <p className="text-gray-600 mb-6 text-sm leading-relaxed">Supercharge your Shopify visibility. Get noticed. Win AI search.</p>
            <div className="flex items-center space-x-4 mb-6">
              <a title="Facebook" href="https://www.facebook.com/kabiniAI/" className="text-gray-500 hover:text-blue-600 transition-colors">Facebook</a>
              <a title="X (Twitter)" href="https://x.com/KabiniAI" className="text-gray-500 hover:text-blue-600 transition-colors">X</a>
              <a title="LinkedIn" href="https://www.linkedin.com/company/kabini-ai/" className="text-gray-500 hover:text-blue-600 transition-colors">LinkedIn</a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-800 mb-4">Product</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="/#features" className="text-gray-600 hover:text-blue-600">Our Solutions</a></li>
              <li><a href="/#how-it-works" className="text-gray-600 hover:text-blue-600">How It Works</a></li>
              <li><a href="/#why-kabini" className="text-gray-600 hover:text-blue-600">Why Kabini</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-800 mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/blog" className="text-gray-600 hover:text-blue-600">Blog</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-blue-600">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-600 mb-4 md:mb-0">© 2025 Kabini.ai. All rights reserved.</div>
          <div className="flex space-x-6 text-sm">
            <Link href="/terms-of-service" className="text-gray-600 hover:text-blue-600">Terms of Service</Link>
            <Link href="/privacy-policy" className="text-gray-600 hover:text-blue-600">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;