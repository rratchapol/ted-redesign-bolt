import React from 'react';
import { FileText, CheckCircle, CreditCard, Trophy } from 'lucide-react';

const ApplicationProcess = () => {
  const steps = [
    {
      icon: FileText,
      title: 'เตรียมเอกสาร',
      description: 'รวบรวมเอกสารที่จำเป็น เช่น ผลการเรียน หนังสือรับรอง และแผนการศึกษา',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: CreditCard,
      title: 'สมัครออนไลน์',
      description: 'กรอกใบสมัครออนไลน์และอัปโหลดเอกสารผ่านระบบของเรา',
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: CheckCircle,
      title: 'รอการพิจารณา',
      description: 'ทีมงานจะตรวจสอบและประเมินใบสมัครของคุณอย่างรอบคอบ',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Trophy,
      title: 'รับผลการสมัคร',
      description: 'รับแจ้งผลการสมัครและเริ่มต้นการศึกษาที่มีคุณภาพ',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <section id="application" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            ขั้นตอนการสมัคร
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            ขั้นตอนการสมัครที่ง่ายและสะดวก เพียง 4 ขั้นตอน คุณก็สามารถเข้าถึงโอกาสทางการศึกษาที่ดีที่สุด
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-8 h-0.5 bg-gray-300 transform translate-x-4"></div>
              )}
              
              <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
                <div className="relative mb-6">
                  <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            เริ่มสมัครทุนเลย
          </button>
        </div>
      </div>
    </section>
  );
};

export default ApplicationProcess;