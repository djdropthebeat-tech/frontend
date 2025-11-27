import React from 'react';
import { ArrowRight } from 'lucide-react';

const Products: React.FC = () => {
  return (
    <section className="relative py-24 bg-slate-900 overflow-hidden">
        {/* Background Visual */}
        <div className="absolute inset-0 z-0">
             <img 
                src="https://images.unsplash.com/photo-1624705022271-92f7259e86c1?q=80&w=2600&auto=format&fit=crop" 
                alt="Dark Robot Background" 
                className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-[1600px] mx-auto px-6">
            <div className="mb-16">
                <p className="text-sm font-semibold text-gray-400 mb-2">Products</p>
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                    전 세계 최대 규모의<br/>
                    Cobot 라인업
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Agile Card */}
                <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-lg p-8 hover:bg-slate-800/80 transition duration-300">
                    <div className="h-48 mb-6 flex items-center justify-center">
                        <img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=400&auto=format&fit=crop" alt="A-Series" className="h-full object-contain drop-shadow-2xl grayscale opacity-80 hover:grayscale-0 transition" />
                    </div>
                    <div className="mb-4">
                        <span className="text-xs font-semibold text-slate-400 block mb-1">Agile</span>
                        <h3 className="text-3xl font-bold text-white mb-2">A-SERIES</h3>
                        <p className="text-sm text-slate-400">협동로봇이 필요한 곳, 어디서나 도입이 용이한 A시리즈!</p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-6">
                        {['A0912S', 'A0912F', 'A0912', 'A0509S', 'A0509F', 'A0509'].map(m => (
                            <span key={m} className="px-3 py-1 bg-slate-700/50 text-blue-300 text-xs rounded border border-slate-600 hover:border-blue-400 cursor-pointer transition">{m}</span>
                        ))}
                    </div>
                </div>

                {/* Edge Card */}
                <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-lg p-8 hover:bg-slate-800/80 transition duration-300">
                    <div className="h-48 mb-6 flex items-center justify-center">
                         <img src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=400&auto=format&fit=crop" alt="E-Series" className="h-full object-contain drop-shadow-2xl grayscale opacity-80 hover:grayscale-0 transition" />
                    </div>
                    <div className="mb-4">
                        <span className="text-xs font-semibold text-slate-400 block mb-1">Edge</span>
                        <h3 className="text-3xl font-bold text-white mb-2">E-SERIES</h3>
                        <p className="text-sm text-slate-400">식음료 산업에 가장 최적화된 E시리즈!</p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-6">
                        {['E0509'].map(m => (
                            <span key={m} className="px-3 py-1 bg-slate-700/50 text-blue-300 text-xs rounded border border-slate-600 hover:border-blue-400 cursor-pointer transition">{m}</span>
                        ))}
                    </div>
                </div>

                 {/* View All */}
                <div className="flex flex-col justify-end pb-8">
                     <a href="#" className="flex items-center justify-center w-16 h-16 rounded-full border border-slate-600 text-white hover:bg-blue-600 hover:border-blue-600 transition duration-300 mb-4">
                        <ArrowRight className="w-6 h-6" />
                     </a>
                     <span className="text-white font-medium">전체 라인업 보기</span>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Products;