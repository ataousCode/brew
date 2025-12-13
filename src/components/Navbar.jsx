import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/products', label: 'Products' },
    { path: '/contact', label: 'Contact' }
  ];
  
  const isActive = (path) => location.pathname === path;
  
  const getNavLinkClasses = (path, isMobile = false) => {
    const baseClasses = isMobile
      ? 'block w-full text-left px-3 py-2 rounded-md text-base font-medium'
      : 'px-3 py-2 rounded-md text-sm font-medium transition-colors';
    
    return isActive(path)
      ? isMobile
        ? `${baseClasses} text-amber-400 bg-green-900`
        : `${baseClasses} text-amber-400 border-b-2 border-amber-400`
      : isMobile
        ? `${baseClasses} text-white hover:bg-green-700`
        : `${baseClasses} text-white hover:text-amber-300`;
  };
  
  const handleNavClick = () => {
    setIsOpen(false);
  };
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-green-900 bg-opacity-95 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img 
                src="/logo.png" 
                alt="Sichuan Tea Logo" 
                className="h-20 w-auto"
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navItems.map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  className={getNavLinkClasses(path)}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-amber-400 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-green-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                onClick={handleNavClick}
                className={getNavLinkClasses(path, true)}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;