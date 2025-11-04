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
            <p className="text-gray-600 mb-4 text-base leading-7">
              Supercharge your Shopify visibility.<br />
              Get noticed. Win AI search.
            </p>
            <div className="flex items-center space-x-6 mb-6">
              {/* Facebook */}
              <a aria-label="Facebook" href="https://www.facebook.com/kabiniAI/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              {/* X (Twitter) */}
              <a aria-label="X" href="https://x.com/KabiniAI" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a aria-label="LinkedIn" href="https://www.linkedin.com/company/kabini-ai/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              {/* Pinterest */}
              <a aria-label="Pinterest" href="https://in.pinterest.com/kabiniai/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700 transition-colors">
                {/* Scales with font-size; inherits current text color */}
                <svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <title>Pinterest</title>
                  <path d="M12 0C5.367 0 0 5.367 0 12a11.998 11.998 0 0 0 7.868 11.286c-.11-.957-.2-2.43.04-3.477.22-.946 1.414-6.027 1.414-6.027s-.36-.72-.36-1.78c0-1.67.967-2.914 2.17-2.914 1.024 0 1.52.769 1.52 1.69 0 1.03-.655 2.574-.995 4.006-.28 1.2.62 2.176 1.83 2.176 2.2 0 3.89-2.326 3.89-5.99 0-3.13-2.25-5.317-5.45-5.317-3.715 0-5.9 2.788-5.9 5.67 0 1.13.435 2.34 1 2.992.11.13.12.24.09.37-.1.4-.33 1.272-.38 1.45-.06.23-.2.28-.46.17-1.703-.793-2.77-3.28-2.77-5.28 0-4.3 3.12-8.25 9-8.25 4.72 0 8.39 3.36 8.39 7.86 0 4.69-2.96 8.47-7.07 8.47-1.38 0-2.68-.72-3.13-1.58l-.85 3.23c-.31 1.2-1.15 2.7-1.71 3.62a12.004 12.004 0 0 0 16.62-11.02C24 5.367 18.633 0 12 0z"/>
                </svg>
              </a>
              {/* YouTube */}
              <a aria-label="YouTube" href="https://www.youtube.com/@KabiniAI" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-800 mb-4">Product</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="/#solutions" className="text-gray-600 hover:text-blue-600">Our Solutions</a></li>
              <li><a href="/#how-it-works" className="text-gray-600 hover:text-blue-600">How It Works</a></li>
              <li><a href="/#why-kabini" className="text-gray-600 hover:text-blue-600">Why Kabini</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-800 mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="text-gray-600 hover:text-blue-600">About Us</Link></li>
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