import { useState } from "react";
import { Search, Heart, ShoppingCart, Shuffle, Menu, X } from "lucide-react";
import { Button } from "../components/ui/button.tsx";
import logo from "../logo/logoImg.png";

export default function Navbar() {
  const [cartCount] = useState(0);
  const [wishlistCount] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navigationItems = [
    {
      title: "Cases",
      items: [
        "iPhone Cases",
        "Samsung Cases",
        "Google Pixel Cases",
        "AirPods Cases",
        "iPad Cases",
        "MacBook Cases",
        "Clear Cases",
        "Leather Cases",
        "Silicone Cases"
      ]
    },
    {
      title: "Straps",
      items: [
        "Apple Watch Straps",
        "Sport Bands",
        "Leather Straps",
        "Metal Straps",
        "Nylon Straps",
        "Luxury Straps",
        "Custom Straps",
        "Milanese Loop"
      ]
    },
    {
      title: "Power Banks",
      items: [
        "Wireless Power Banks",
        "MagSafe Power Banks",
        "High Capacity (20,000mAh+)",
        "Portable Chargers",
        "Fast Charging Power Banks",
        "Solar Power Banks",
        "Car Power Banks",
        "Phone Case Power Banks"
      ]
    },
    {
      title: "Cables",
      items: [
        "Lightning Cables",
        "USB-C Cables",
        "MagSafe Cables",
        "Fast Charging Cables",
        "Braided Cables",
        "Extension Cables",
        "Car Charger Cables",
        "Multi-Port Cables"
      ]
    },
    {
      title: "MagSafe",
      items: [
        "MagSafe Chargers",
        "MagSafe Car Mounts",
        "MagSafe Stands",
        "MagSafe Wallets",
        "MagSafe Power Banks",
        "MagSafe Grips",
        "MagSafe Accessories",
        "MagSafe-Compatible Cases"
      ]
    },
    {
      title: "Charger",
      items: [
        "Wall Chargers",
        "Car Chargers",
        "Wireless Chargers",
        "Fast Chargers",
        "Multi-Port Chargers",
        "Travel Chargers",
        "Desktop Chargers",
        "GaN Chargers"
      ]
    },
    {
      title: "More",
      items: [
        "Screen Protectors",
        "Camera Lenses",
        "Phone Grips",
        "Cleaning Kits",
        "Adapters",
        "Docks & Hubs",
        "Audio Accessories",
        "Gift Cards"
      ]
    }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <header className="w-full shadow-sm bg-white border-b">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 sm:px-6">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src={logo}
            alt="BlackWave Logo"
            className="w-8 h-8 object-contain"
          />
          <span className="text-xl font-bold">BlackWave<span className="text-black">.</span></span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-6 relative">
          {navigationItems.map((item, index) => (
            <div key={index} className="relative group">
              <div className="py-3 px-2 -mx-2 rounded-lg transition-colors group-hover:bg-gray-50">
                <button className="text-sm font-medium hover:text-blue-600 whitespace-nowrap">
                  {item.title}
                </button>
              </div>

              <div className="absolute left-0 top-full pt-2 hidden group-hover:block z-50">
                <div className="bg-white shadow-lg border rounded-lg min-w-[200px]">
                  <ul className="py-2">
                    {item.items.map((subItem, subIndex) => (
                      <li
                        key={subIndex}
                        className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 cursor-pointer whitespace-nowrap transition-colors"
                      >
                        {subItem}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-4 sm:space-x-5 text-gray-700">
          {/* Login/Register - Hidden on mobile */}
          <Button variant="link" className="hidden sm:flex text-sm font-medium hover:text-blue-600">
            Login / Register
          </Button>

          {/* Icons - Hidden on small mobile */}
          <Search className="w-5 h-5 cursor-pointer hover:text-blue-600 transition-colors hidden sm:block" />

          <div className="relative hidden sm:block">
            <Shuffle className="w-5 h-5 cursor-pointer hover:text-blue-600 transition-colors" />
            <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              0
            </span>
          </div>

          <div className="relative hidden sm:block">
            <Heart className="w-5 h-5 cursor-pointer hover:text-blue-600 transition-colors" />
            <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              {wishlistCount}
            </span>
          </div>

          {/* Cart - Always visible but text hidden on mobile */}
          <div className="relative flex items-center space-x-2">
            <div className="relative">
              <ShoppingCart className="w-5 h-5 cursor-pointer hover:text-blue-600 transition-colors" />
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                {cartCount}
              </span>
            </div>
            <span className="text-sm font-medium hidden sm:block">$0.00</span>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t bg-white">
          {/* Mobile Search Bar */}
          <div className="px-4 py-3 border-b">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Mobile Navigation */}
          <nav className="px-4 py-2">
            {navigationItems.map((item, index) => (
              <div key={index} className="border-b last:border-b-0">
                <button
                  className="w-full flex justify-between items-center py-3 text-left font-medium hover:text-blue-600"
                  onClick={() => toggleDropdown(index)}
                >
                  {item.title}
                  <span className={`transform transition-transform ${activeDropdown === index ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>

                {activeDropdown === index && (
                  <div className="pl-4 pb-2">
                    {item.items.map((subItem, subIndex) => (
                      <button
                        key={subIndex}
                        className="block py-2 text-sm text-gray-600 hover:text-blue-600"
                        onClick={() => {/* handle item click */ }}
                      >
                        {subItem}
                      </button>
                    ))}

                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Actions */}
          <div className="px-4 py-4 border-t bg-gray-50">
            <div className="flex space-x-4 mb-4">
              <Button variant="link" className="flex-1 text-center justify-center hover:text-blue-600">
                Login
              </Button>
              <Button variant="link" className="flex-1 text-center justify-center hover:text-blue-600">
                Register
              </Button>
            </div>

            <div className="flex justify-around text-gray-600">
              <button className="flex flex-col items-center p-2 hover:text-blue-600">
                <Search className="w-5 h-5" />
                <span className="text-xs mt-1">Search</span>
              </button>
              <button className="flex flex-col items-center p-2 hover:text-blue-600">
                <Shuffle className="w-5 h-5" />
                <span className="text-xs mt-1">Compare</span>
              </button>
              <button className="flex flex-col items-center p-2 hover:text-blue-600">
                <Heart className="w-5 h-5" />
                <span className="text-xs mt-1">Wishlist</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}