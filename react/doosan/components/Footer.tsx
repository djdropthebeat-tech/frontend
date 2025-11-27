import React from 'react';
import { Linkedin, Youtube, Instagram, Facebook, ChevronRight, MapPin, BookOpen, Headphones, Settings, ChevronDown } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white">
      {/* Social Media Section */}
      <div className="relative bg-slate-900 py-20 px-6 overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1617529497471-9218633199c0?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
         <div className="relative z-10 max-w-[1600px] mx-auto">
             <div className="mb-10">
                <span className="text-white text-sm font-semibold">Social Media</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-6">
                    두산로보틱스의 혁신적인 기술과<br/>
                    소식을 만나보세요.
                </h2>
                <div className="flex gap-4">
                    <Linkedin className="text-white w-6 h-6 cursor-pointer hover:text-blue-400" />
                    <Youtube className="text-white w-6 h-6 cursor-pointer hover:text-red-500" />
                    <Instagram className="text-white w-6 h-6 cursor-pointer hover:text-pink-500" />
                    <Facebook className="text-white w-6 h-6 cursor-pointer hover:text-blue-600" />
                </div>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 {/* Social Feed Items */}
                 <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                    <img src="https://images.unsplash.com/photo-1563806950275-c081e649033f?q=80&w=400" alt="Feed 1" className="w-full h-48 object-cover"/>
                    <div className="p-4 flex items-center justify-between">
                         <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-slate-200 rounded-full"></div>
                            <div className="text-xs">
                                <p className="font-bold">DOOSAN ROBOTICS</p>
                                <p className="text-gray-500">1 month...</p>
                            </div>
                         </div>
                         <Youtube className="w-5 h-5 text-red-600" />
                    </div>
                 </div>
                 <div className="bg-white rounded-lg overflow-hidden shadow-lg hidden md:block">
                    <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=400" alt="Feed 2" className="w-full h-48 object-cover"/>
                    <div className="p-4 flex items-center justify-between">
                         <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-slate-200 rounded-full"></div>
                            <div className="text-xs">
                                <p className="font-bold">DOOSAN ROBOTICS</p>
                                <p className="text-gray-500">2 months...</p>
                            </div>
                         </div>
                         <Youtube className="w-5 h-5 text-red-600" />
                    </div>
                 </div>
                 <div className="bg-white rounded-lg overflow-hidden shadow-lg hidden lg:block">
                    <img src="https://images.unsplash.com/photo-1535378437321-29e9081dd711?q=80&w=400" alt="Feed 3" className="w-full h-48 object-cover"/>
                    <div className="p-4 flex items-center justify-between">
                         <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-slate-200 rounded-full"></div>
                            <div className="text-xs">
                                <p className="font-bold">Doosan Robotics</p>
                                <p className="text-gray-500">3 months...</p>
                            </div>
                         </div>
                         <Facebook className="w-5 h-5 text-blue-600" />
                    </div>
                 </div>
             </div>
         </div>
      </div>

      {/* Action Grid */}
      <div className="max-w-[1600px] mx-auto py-16 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-50 p-8 rounded-lg flex justify-between items-start group hover:shadow-lg transition cursor-pointer">
                <div>
                    <h3 className="font-bold text-lg mb-2">구매 문의</h3>
                    <p className="text-sm text-gray-600 mb-4">로봇 도입을 고민하고 계신가요?<br/>전문가에게 1:1 상담을 받아보세요.</p>
                </div>
                <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                    <Settings className="w-6 h-6" />
                </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-lg flex justify-between items-start group hover:shadow-lg transition cursor-pointer">
                <div>
                    <h3 className="font-bold text-lg mb-2">가까운 대리점 찾기</h3>
                    <p className="text-sm text-gray-600 mb-4">고객님에게 가장 가까운 대리점을<br/>안내해 드립니다.</p>
                </div>
                <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                    <MapPin className="w-6 h-6" />
                </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-lg flex justify-between items-start group hover:shadow-lg transition cursor-pointer">
                <div>
                    <h3 className="font-bold text-lg mb-2">두산 로봇 교육</h3>
                    <p className="text-sm text-gray-600 mb-4">단계별 온/오프라인 교육으로<br/>로봇 운용 능력을 향상시켜보세요.</p>
                </div>
                <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                    <BookOpen className="w-6 h-6" />
                </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-lg flex justify-between items-start group hover:shadow-lg transition cursor-pointer">
                <div>
                    <h3 className="font-bold text-lg mb-2">A/S 신청</h3>
                    <p className="text-sm text-gray-600 mb-4">로봇 전문가가 365일<br/>고객님의 A/S를 지원합니다.</p>
                </div>
                <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                    <Headphones className="w-6 h-6" />
                </div>
            </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="bg-[#1a1a1a] text-white py-12 border-t border-gray-800">
          <div className="max-w-[1600px] mx-auto px-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
              <div>
                  <h4 className="font-bold mb-4">제품 & 솔루션</h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                      <li><a href="#" className="hover:text-white">A-SERIES</a></li>
                      <li><a href="#" className="hover:text-white">H-SERIES</a></li>
                      <li><a href="#" className="hover:text-white">M-SERIES</a></li>
                      <li><a href="#" className="hover:text-white">E-SERIES</a></li>
                  </ul>
              </div>
              <div>
                  <h4 className="font-bold mb-4">교육 & 서비스</h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                      <li><a href="#" className="hover:text-white">로봇 교육</a></li>
                      <li><a href="#" className="hover:text-white">기술 지원</a></li>
                      <li><a href="#" className="hover:text-white">Dart-Suite</a></li>
                  </ul>
              </div>
              <div>
                  <h4 className="font-bold mb-4">투자정보</h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                      <li><a href="#" className="hover:text-white">공시정보</a></li>
                      <li><a href="#" className="hover:text-white">재무정보</a></li>
                      <li><a href="#" className="hover:text-white">주가정보</a></li>
                  </ul>
              </div>
               <div>
                  <h4 className="font-bold mb-4">회사소개</h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                      <li><a href="#" className="hover:text-white">기업개요</a></li>
                      <li><a href="#" className="hover:text-white">뉴스룸</a></li>
                      <li><a href="#" className="hover:text-white">채용</a></li>
                  </ul>
              </div>
              <div className="col-span-2 lg:col-span-1">
                 <div className="flex justify-between items-center border border-gray-600 px-4 py-2 rounded text-sm cursor-pointer hover:bg-gray-800">
                    <span>Related Sites</span>
                    <ChevronDown className="w-4 h-4" />
                 </div>
              </div>
          </div>
          <div className="max-w-[1600px] mx-auto px-6 mt-12 pt-8 border-t border-gray-800 text-xs text-gray-500 flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                  <p className="mb-2">경기도 수원시 권선구 산업로 156번길 79 (고색동)</p>
                  <p>COPYRIGHT © DOOSAN ROBOTICS INC. ALL RIGHTS RESERVED.</p>
              </div>
              <div className="flex gap-4 mt-4 md:mt-0">
                  <a href="#" className="text-gray-300">개인정보처리방침</a>
                  <a href="#">이메일무단수집거부</a>
                  <a href="#">신문고</a>
              </div>
          </div>
      </div>
      
      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-50">
          <button className="bg-slate-900 text-white p-3 rounded-full shadow-lg hover:bg-slate-800 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
          </button>
      </div>
    </footer>
  );
};

export default Footer;