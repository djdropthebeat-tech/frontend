import React from 'react';

const clients = [
  'MAHLE', 'HYUNDAI', 'TOYOTA', 'SAMSUNG C&T', 'LG Electronics', 'LANCOME', 'DIOR', 'dyson', 'Continental'
];

const Clients: React.FC = () => {
  return (
    <section className="relative py-24 bg-black text-white overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-blue-900/20 to-black z-0"></div>
        <div className="absolute -bottom-[50%] left-1/2 transform -translate-x-1/2 w-[120%] h-[100%] bg-blue-600/20 blur-[100px] rounded-full z-0"></div>
        
        <div className="relative z-10 max-w-[1600px] mx-auto px-6">
            <p className="text-sm font-semibold text-gray-400 mb-2">Our Clients</p>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-12">
                전 세계 50개국 리딩 기업들이<br/>
                두산 로봇 도입으로 생산성을 높이고,<br/>
                비용을 절감했습니다.
            </h2>

            {/* Logo Marquee / Grid */}
            <div className="border-t border-white/20 pt-8 mt-12">
                <div className="flex flex-wrap justify-between items-center gap-8 md:gap-12 opacity-70">
                    {clients.map((client, idx) => (
                        <div key={idx} className="text-lg md:text-xl font-bold font-serif tracking-widest text-white/80 hover:text-white transition">
                            {/* In a real app, these would be SVG logos */}
                            {client}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  );
};

export default Clients;