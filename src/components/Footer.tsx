import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: 'โปรแกรมทุน',
      links: [
        { title: 'ทุนการศึกษา', href: '#education' },
        { title: 'ทุนวิจัย', href: '#research' },
        { title: 'ทุนแลกเปลี่ยน', href: '#exchange' },
        { title: 'ทุนพัฒนาทักษะ', href: '#skills' }
      ]
    },
    {
      title: 'การสนับสนุน',
      links: [
        { title: 'คำถามที่พบบ่อย', href: '#faq' },
        { title: 'คู่มือการสมัคร', href: '#guide' },
        { title: 'ติดต่อเรา', href: '#contact' },
        { title: 'ข้อกำหนดการใช้งาน', href: '#terms' }
      ]
    },
    {
      title: 'ทรัพยากร',
      links: [
        { title: 'ดาวน์โหลดแบบฟอร์ม', href: '#forms' },
        { title: 'เอกสารประกอบ', href: '#documents' },
        { title: 'วิดีโอแนะแนว', href: '#videos' },
        { title: 'บทความ', href: '#articles' }
      ]
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#facebook', label: 'Facebook' },
    { icon: Twitter, href: '#twitter', label: 'Twitter' },
    { icon: Instagram, href: '#instagram', label: 'Instagram' },
    { icon: Youtube, href: '#youtube', label: 'YouTube' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">TF</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">TED Fund</h3>
                <p className="text-gray-400 text-sm">Thailand Education Development Fund</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              กองทุนพัฒนาการศึกษาเพื่อสร้างอนาคตที่ดีให้กับนักเรียนไทย
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">02-123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">info@tedfund.go.th</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1" />
                <span className="text-gray-300">
                  123 ถนนราชดำเนิน เขตพระนคร กรุงเทพฯ 10200
                </span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold mb-6">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-6 md:mb-0">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                © 2025 Thailand Education Development Fund. สงวนลิขสิทธิ์ทุกการใช้งาน
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions Bar */}
      <div className="bg-gray-800 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">
              สมัครทุนเลย
            </button>
            <button className="text-gray-300 hover:text-white transition-colors duration-200">
              ตรวจสอบสถานะการสมัคร
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;