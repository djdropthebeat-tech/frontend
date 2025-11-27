import React, { useState } from 'react';
import { X } from 'lucide-react';

const Hero: React.FC = () => {
  const [showModal, setShowModal] = useState(true);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-slate-900">
      {/* Background Image/Video Placeholder */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop"
          alt="Robotic Arm Background"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 max-w-5xl leading-tight">
          AI-Powered <br className="md:hidden" /> Better Life
        </h1>
      </div>

      {/* Floating Modal (United in Innovation) */}
      {showModal && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 w-[90%] max-w-md">
          <div className="bg-[#001b3d] text-white overflow-hidden shadow-2xl rounded-none">
             {/* Modal Image/Content */}
            <div className="relative h-96 flex flex-col items-center justify-center text-center p-8 bg-[url('https://images.unsplash.com/photo-1616007425150-13f8c854c46f?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center">
                <div className="absolute inset-0 bg-[#001b3d]/80"></div>
                <div className="relative z-10 flex flex-col items-center">
                    <div className="flex items-center gap-4 mb-6">
                        <span className="text-2xl font-bold italic">DOOSAN</span>
                        <div className="h-6 w-px bg-white/50"></div>
                        <span className="text-2xl font-light">ONExia</span>
                    </div>
                    <h2 className="text-xl font-bold mb-4">United in Innovation</h2>
                    <p className="text-sm leading-relaxed text-gray-200 mb-2">
                        Doosan과 ONExia가 하나가 되었습니다.
                    </p>
                    <p className="text-sm leading-relaxed text-gray-200">
                        끊임 없는 혁신을 통해<br/>
                        AI 로봇 솔루션의 미래를 이끌어 나가겠습니다.
                    </p>
                </div>
            </div>

            {/* Modal Footer */}
            <div className="flex text-xs bg-white text-slate-800 divide-x divide-gray-200">
                <button className="flex-1 py-3 hover:bg-gray-100" onClick={() => setShowModal(false)}>
                    오늘 하루 보지 않기
                </button>
                <button className="flex-1 py-3 hover:bg-gray-100 font-medium" onClick={() => setShowModal(false)}>
                    닫기
                </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;