import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const menuItems = [
    {
      title: 'หน้าแรก',
      href: '#home'
    },
    {
      title: 'โปรแกรมทุน',
      href: '#programs',
      dropdown: [
        { title: 'ทุนการศึกษา', href: '#education-grants' },
        { title: 'ทุนวิจัย', href: '#research-grants' },
        { title: 'ทุนพัฒนาอาจารย์', href: '#faculty-development' },
        { title: 'ทุนแลกเปลี่ยน', href: '#exchange-programs' }
      ]
    },
    {
      title: 'การสมัคร',
      href: '#application',
      dropdown: [
        { title: 'ขั้นตอนการสมัคร', href: '#process' },
        { title: 'เอกสารที่ต้องใช้', href: '#documents' },
        { title: 'สมัครออนไลน์', href: '#apply-online' }
      ]
    },
    {
      title: 'ข่าวสาร',
      href: '#news'
    },
    {
      title: 'เกี่ยวกับเรา',
      href: '#about'
    },
    {
      title: 'ติดต่อ',
      href: '#contact'
    }
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">TF</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">TED Fund</h1>
              <p className="text-sm text-gray-600">Thailand Education Development Fund</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <div key={index} className="relative">
                {item.dropdown ? (
                  <div
                    className="group relative"
                    onMouseEnter={() => setActiveDropdown(item.title)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200">
                      <span>{item.title}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    {activeDropdown === item.title && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2">
                        {item.dropdown.map((dropdownItem, dropdownIndex) => (
                          <a
                            key={dropdownIndex}
                            href={dropdownItem.href}
                            className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                          >
                            {dropdownItem.title}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                  >
                    {item.title}
                  </a>
                )}
              </div>
            ))}
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">
              สมัครเลย
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item, index) => (
                <div key={index}>
                  <a
                    href={item.href}
                    className="block text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                  >
                    {item.title}
                  </a>
                  {item.dropdown && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.dropdown.map((dropdownItem, dropdownIndex) => (
                        <a
                          key={dropdownIndex}
                          href={dropdownItem.href}
                          className="block text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
                        >
                          {dropdownItem.title}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium mt-4">
                สมัครเลย
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;