import React from 'react';
import { Target, Heart, Lightbulb, Users } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'เป้าหมาย',
      description: 'สร้างโอกาสทางการศึกษาที่เท่าเทียมและยั่งยืนสำหรับเยาวชนไทย'
    },
    {
      icon: Heart,
      title: 'ความมุ่งมั่น',
      description: 'มุ่งมั่นในการพัฒนาคุณภาพการศึกษาและสร้างผู้นำของประเทศ'
    },
    {
      icon: Lightbulb,
      title: 'นวัตกรรม',
      description: 'ส่งเสริมการคิดสร้างสรรค์และนวัตกรรมในการพัฒนาประเทศ'
    },
    {
      icon: Users,
      title: 'ชุมชน',
      description: 'สร้างเครือข่ายและชุมชนการเรียนรู้ที่แข็งแกร่ง'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              เกี่ยวกับ
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                TED Fund
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              กองทุนพัฒนาการศึกษา (TED Fund) ก่อตั้งขึ้นด้วยวิสัยทัศน์ในการสร้างโอกาสทางการศึกษา
              ที่เท่าเทียมและมีคุณภาพสำหรับเยาวชนไทยทุกคน
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              เรามุ่งมั่นที่จะเป็นสะพานเชื่อมระหว่างความฝันและความจริง 
              ผ่านการให้ทุนการศึกษาและการสนับสนุนที่ครอบคลุม
            </p>

            <div className="grid grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">{value.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://images.pexels.com/photos/5212703/pexels-photo-5212703.jpeg" 
                alt="Educational team meeting" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl max-w-xs">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">25+</div>
                <div className="text-gray-600 text-sm">ปีของการพัฒนาการศึกษา</div>
              </div>
            </div>

            {/* Background decoration */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-blue-400 to-emerald-400 rounded-full opacity-20 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;