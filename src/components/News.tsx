import React from 'react';
import { Calendar, ArrowRight, Eye } from 'lucide-react';

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: 'เปิดรับสมัครทุนการศึกษาระดับปริญญาโท ประจำปี 2025',
      excerpt: 'กองทุนพัฒนาการศึกษา เปิดรับสมัครทุนการศึกษาระดับปริญญาโทในสาขาวิชาต่างๆ...',
      date: '15 มกราคม 2025',
      category: 'ประกาศ',
      image: 'https://images.pexels.com/photos/5427648/pexels-photo-5427648.jpeg',
      views: 1250
    },
    {
      id: 2,
      title: 'ประกาศผลผู้ได้รับทุนแลกเปลี่ยนนานาชาติ',
      excerpt: 'ขอแสดงความยินดีกับนักศึกษาที่ได้รับทุนแลกเปลี่ยนไปศึกษาต่อในต่างประเทศ...',
      date: '10 มกราคม 2025',
      category: 'ผลการสมัคร',
      image: 'https://images.pexels.com/photos/5940828/pexels-photo-5940828.jpeg',
      views: 892
    },
    {
      id: 3,
      title: 'สัมมนาแนวทางการเขียนข้อเสนอโครงการวิจัย',
      excerpt: 'เชิญร่วมสัมมนาเทคนิคการเขียนข้อเสนอโครงการวิจัยที่ได้รับทุน...',
      date: '8 มกราคม 2025',
      category: 'กิจกรรม',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      views: 634
    }
  ];

  return (
    <section id="news" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            ข่าวสารและประกาศ
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            ติดตามข่าวสารและประกาศสำคัญเกี่ยวกับทุนการศึกษาและกิจกรรมต่างๆ
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <article
              key={item.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer transform hover:-translate-y-1"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{item.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Eye className="w-4 h-4" />
                    <span>{item.views}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                  {item.excerpt}
                </p>

                <button className="flex items-center space-x-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200 group-hover:translate-x-1">
                  <span>อ่านต่อ</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300">
            ดูข่าวสารทั้งหมด
          </button>
        </div>
      </div>
    </section>
  );
};

export default News;