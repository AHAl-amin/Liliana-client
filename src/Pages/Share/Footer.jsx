import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-700 text-[#FEF5DB] py-12 ">
      <div className="w-[80%] mx-auto">
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              {/* Logo/Symbol */}
              <div className="flex items-center justify-center mb-2">
                <div className="mb-2">
                 <img src="../../../public/img/logo.png" className="w-30" alt="" />
                </div>
              </div>
              
            </div>
            <p className="text-gray-300 text-sm leading-relaxed text-center">
              Create eternal digital resting places for loved ones in a virtual sanctuary through AI, blockchain, and
              metaverse visualization.
            </p>
          </div>

          {/* Features Column */}
         <div className="flex justify-center">
           <div className="">
            <h4 className="text-lg font-semibold mb-4">Features</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>
         </div>

          {/* Information Column */}
          <div className="flex flex-col justify-center items-center">
            <h4 className="text-lg font-semibold mb-4 mr-2">Information</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Terms Of Services
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us Column */}
        <div  className="flex justify-center items-center">
            <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-0.5 text-gray-300" />
                <div>
                  <p className="text-sm font-medium">Email Us</p>
                  <p className="text-xs text-gray-300">info@legacyspheremanager.com</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-0.5 text-gray-300" />
                <div>
                  <p className="text-sm font-medium">Call Us</p>
                  <p className="text-xs text-gray-300">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 text-gray-300" />
                <div>
                  <p className="text-sm font-medium">Location Us</p>
                  <p className="text-xs text-gray-300">Drummond, Dileka</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>

        {/* Copyright */}
      </div>
        <div className="border-t border-slate-600 pt-6">
          <p className="text-center text-xs text-gray-400">© 2025 [Your Brand Name]. All rights reserved.</p>
        </div>
    </footer>
  )
}
