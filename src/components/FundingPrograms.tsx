import React from 'react';
import { GraduationCap, Microscope, Globe, BookOpen, ArrowRight } from 'lucide-react';

const FundingPrograms = () => {
  const programs = [
    {
      icon: GraduationCap,
      title: 'ทุนการศึกษาระดับปริญญาตรี',
      description: 'สนับสนุนนักเรียนที่มีความสามารถในการศึกษาต่อระดับอุดมศึกษา',
      amount: '50,000 - 100,000',
      duration: '4 ปี',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      icon: Microscope,
      title: 'ทุนวิจัยและพัฒนา',
      description: 'สนับสนุนโครงการวิจัยที่สร้างประโยชน์ต่อสังคมและประเทศ',
      amount: '100,000 - 500,000',
      duration: '1-3 ปี',
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'bg-emerald-50',
      iconColor: 'text-emerald-600'
    },
    {
      icon: Globe,
      title: 'ทุนแลกเปลี่ยนนานาชาติ',
      description: 'โอกาสศึกษาต่อในมหาวิทยาลัยชั้นนำทั่วโลก',
      amount: '200,000 - 1,000,000',
      duration: '1-2 ปี',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600'
    },
    {
      icon: BookOpen,
      title: 'ทุนพัฒนาทักษะอาชีพ',
      description: 'พัฒนาทักษะเฉพาะทางและอาชีพที่ต้องการในตลาดแรงงาน',
      amount: '30,000 - 80,000',
      duration: '6 เดือน - 2 ปี',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600'
    }
  ];

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            โปรแกรมทุนการศึกษา
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            เรามีโปรแกรมทุนการศึกษาที่หลากหลาย เพื่อตอบสนองความต้องการของนักเรียนและนักศึกษาในทุกระดับ
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className={`${program.bgColor} rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer`}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${program.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <program.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {program.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {program.description}
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">จำนวนทุน:</span>
                  <span className="font-semibold text-gray-900">฿{program.amount}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">ระยะเวลา:</span>
                  <span className="font-semibold text-gray-900">{program.duration}</span>
                </div>
              </div>
              
              <button className={`w-full ${program.iconColor} font-semibold py-3 px-4 rounded-lg hover:bg-white hover:shadow-md transition-all duration-200 flex items-center justify-center space-x-2 group-hover:translate-x-1`}>
                <span>ดูรายละเอียด</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FundingPrograms;