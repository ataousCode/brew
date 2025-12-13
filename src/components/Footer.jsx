import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaWeixin, FaWhatsapp } from 'react-icons/fa';
import { SiXiaohongshu } from 'react-icons/si';

const Footer = () => {
  const [activeQR, setActiveQR] = useState(null);

  const footerLinks = {
    company: [
      { label: 'About Us', path: '/about' },
      { label: 'Products', path: '/products' },
      { label: 'Contact', path: '/contact' }
    ],
    legal: [
      { label: 'Privacy Policy', path: '/privacy' },
      { label: 'Terms of Service', path: '/terms' }
    ]
  };

  const socialQRs = [
    { 
      name: 'WeChat', 
      label: 'Official Account',
      icon: FaWeixin,
      color: 'text-green-500',
      qr: '/wechat.jpg'
    },
    { 
      name: 'Xiaohongshu', 
      label: 'Daily Updates',
      icon: SiXiaohongshu,
      color: 'text-red-500',
      qr: '/xiao.jpg'
    },
    { 
      name: 'WhatsApp', 
      label: 'Chat with Us',
      icon: FaWhatsapp,
      color: 'text-green-400',
      qr: '/whatshapp.jpg'
    }
  ];

  return (
    <footer className="bg-green-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <img 
                src="/logo.png" 
                alt="Sichuan Tea Logo" 
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-gray-300 mb-4">
              Premium tea from Sichuan, China to Africa
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, i) => (
                <li key={i}>
                  <Link to={link.path} className="text-gray-300 hover:text-amber-400 transition">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, i) => (
                <li key={i}>
                  <Link to={link.path} className="text-gray-300 hover:text-amber-400 transition">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social QR Codes */}
        <div className="border-t border-green-700 pt-8">
          <h4 className="font-semibold text-lg mb-6 text-center">Connect With Us</h4>
          <div className="flex justify-center gap-8 flex-wrap">
            {socialQRs.map((social, i) => (
              <div 
                key={i}
                className="relative group"
                onMouseEnter={() => setActiveQR(i)}
                onMouseLeave={() => setActiveQR(null)}
              >
                <button className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-green-800 transition-all duration-300 transform hover:scale-105">
                  <social.icon className={`w-10 h-10 ${social.color}`} />
                  <div className="text-center">
                    <p className="text-sm font-medium">{social.name}</p>
                    <p className="text-xs text-gray-400">{social.label}</p>
                  </div>
                </button>
                
                {/* QR Code Popup */}
                {activeQR === i && (
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 z-50">
                    <div className="bg-white p-4 rounded-xl shadow-2xl border-2 border-green-200">
                      <img 
                        src={social.qr} 
                        alt={`${social.name} QR Code`}
                        className="rounded-lg object-cover"
                        style={{
                          width: '200px',
                          height: '200px',
                          display: 'block',
                          minWidth: '200px',
                          minHeight: '200px'
                        }}
                        onError={(e) => {
                          console.error(`Failed to load QR code for ${social.name}:`, social.qr);
                        }}
                        onLoad={() => {
                          console.log(`QR code loaded successfully for ${social.name}`);
                        }}
                      />
                      <p className="text-xs text-center text-gray-700 mt-3 font-medium">
                        Scan to connect on {social.name}
                      </p>
                    </div>
                    {/* Arrow */}
                    <div className="w-4 h-4 bg-white border-r-2 border-b-2 border-green-200 transform rotate-45 mx-auto -mt-2"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-green-700 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Sichuan Tea Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;