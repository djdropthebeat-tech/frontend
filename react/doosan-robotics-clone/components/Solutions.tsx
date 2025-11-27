import React from 'react';
import { ArrowRight } from 'lucide-react';

const Solutions: React.FC = () => {
  return (
    <section className="py-24 bg-[#f8f9fa]">
      <div className="max-w-[1600px] mx-auto px-6">
        <div className="flex justify-between items-center mb-12">
            <h2 className="text-2xl font-semibold text-slate-900">Solutions</h2>
            <a href="#" className="flex items-center text-sm font-medium text-slate-600 hover:text-blue-600 transition">
                전체 솔루션 보기 <ArrowRight className="w-4 h-4 ml-2" />
            </a>
        </div>

        <div className="space-y-6">
            {/* Dr. Presso Card */}
            <div className="bg-[#1e1b18] rounded-xl overflow-hidden flex flex-col md:flex-row h-auto md:h-80 group cursor-pointer relative">
                <div className="p-8 md:p-12 flex flex-col justify-between flex-1 z-10">
                    <div>
                        <span className="inline-block px-3 py-1 bg-white/20 text-white text-xs font-medium rounded-full mb-4 backdrop-blur-sm">서비스용</span>
                        <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">Dr.Presso</h3>
                    </div>
                </div>
                <div className="w-full md:w-1/2 h-64 md:h-full relative overflow-hidden">
                    <img 
                        src="https://images.unsplash.com/photo-1517260739837-6799d239ce83?q=80&w=1000&auto=format&fit=crop" 
                        alt="Coffee Robot" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                </div>
            </div>

            {/* Palletizing Card */}
            <div className="bg-[#f0f2f5] rounded-xl overflow-hidden flex flex-col md:flex-row h-auto md:h-80 group cursor-pointer">
                <div className="p-8 md:p-12 flex flex-col justify-center flex-1">
                    <span className="inline-block px-3 py-1 bg-slate-200 text-slate-700 text-xs font-medium rounded-full mb-4 w-fit">산업용</span>
                    <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Palletizing</h3>
                    <p className="text-slate-600 max-w-lg">
                        팔레타이징 솔루션은 물류 및 운송 과정에서 물건을 팔레트에 정렬하거나 적재하는 작업에 특화된 협동로봇으로 자동화된 환경을 제공합니다.
                    </p>
                </div>
                <div className="w-full md:w-1/2 h-64 md:h-full relative overflow-hidden">
                     <img 
                        src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop" 
                        alt="Palletizing Robot" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                </div>
            </div>

            {/* Training Kit Card */}
            <div className="bg-[#002554] rounded-xl overflow-hidden flex flex-col md:flex-row h-auto md:h-64 group cursor-pointer">
                 <div className="p-8 md:p-10 flex flex-col justify-center flex-1">
                    <span className="inline-block px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-full mb-4 w-fit">교육용</span>
                    <h3 className="text-3xl md:text-4xl font-bold text-white">Training Kit</h3>
                </div>
                <div className="w-full md:w-2/3 h-48 md:h-full bg-white relative">
                     <img 
                        src="https://images.unsplash.com/photo-1535378437321-29e9081dd711?q=80&w=1000&auto=format&fit=crop" 
                        alt="Training Robot" 
                        className="w-full h-full object-contain p-8 transition-transform duration-700 group-hover:scale-105"
                    />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;