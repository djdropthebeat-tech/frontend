import React, { useState, useEffect } from 'react';
import { Globe, Menu, X, ChevronDown } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const textColor = isScrolled ? 'text-slate-900' : 'text-white';
  const borderColor = isScrolled ? 'border-slate-300' : 'border-white/30';
  const buttonBgHover = isScrolled ? 'hover:bg-slate-100' : 'hover:bg-white/10';
  const linkHoverColor = isScrolled ? 'hover:text-blue-600' : 'hover:text-gray-200';

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      } ${textColor}`}
    >
      <div className="max-w-[1600px] mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center shrink-0">
           <span className="text-2xl font-bold tracking-tighter italic select-none">DOOSAN</span>
        </div>

        {/* Center Navigation - Desktop */}
        <div className="hidden lg:flex items-center space-x-12 font-bold text-[15px]">
            <a href="#" className={`relative group transition-colors ${linkHoverColor}`}>
              <span>제품 & 솔루션</span>
            </a>
            <a href="#" className={`relative group transition-colors ${linkHoverColor}`}>
              <span>교육 & 서비스</span>
            </a>
            <a href="#" className={`relative group transition-colors ${linkHoverColor}`}>
              <span>투자정보</span>
            </a>
            <a href="#" className={`relative group transition-colors ${linkHoverColor}`}>
              <span>회사소개</span>
            </a>
        </div>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center space-x-6">
          {/* Action Buttons */}
          <div className="flex items-center space-x-3">
            <a 
              href="#" 
              className={`px-3 py-2 border ${borderColor} rounded text-xs font-medium transition-colors ${buttonBgHover}`}
            >
              A/S 신청
            </a>
            <a 
              href="#" 
              className={`px-3 py-2 border ${borderColor} rounded text-xs font-medium transition-colors ${buttonBgHover} flex items-center gap-1`}
            >
              파트너 서비스 <ChevronDown className="w-3 h-3"/>
            </a>
          </div>

          {/* Utils */}
          <div className="flex items-center space-x-5">
             <div className="flex items-center gap-1 cursor-pointer opacity-90 hover:opacity-100">
                <Globe className="w-5 h-5" />
                <ChevronDown className="w-3 h-3" />
             </div>
             <span className="text-sm font-bold cursor-pointer opacity-90 hover:opacity-100">두산로보틱스</span>
             <button className="opacity-90 hover:opacity-100 pl-2">
                <Menu className="w-7 h-7" />
             </button>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center gap-4">
             <span className="font-bold text-lg cursor-pointer">두산로보틱스</span>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white text-slate-900 shadow-xl border-t h-[calc(100vh-80px)] overflow-y-auto">
          <div className="flex flex-col p-6 space-y-6">
            <nav className="flex flex-col space-y-4">
               <a href="#" className="text-xl font-bold border-b border-gray-100 pb-3">제품 & 솔루션</a>
               <a href="#" className="text-xl font-bold border-b border-gray-100 pb-3">교육 & 서비스</a>
               <a href="#" className="text-xl font-bold border-b border-gray-100 pb-3">투자정보</a>
               <a href="#" className="text-xl font-bold border-b border-gray-100 pb-3">회사소개</a>
            </nav>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
                 <a href="#" className="flex justify-center items-center py-3 text-sm font-bold border border-slate-200 rounded bg-slate-50">A/S 신청</a>
                 <a href="#" className="flex justify-center items-center py-3 text-sm font-bold border border-slate-200 rounded bg-slate-50">파트너 서비스</a>
            </div>

            <div className="flex justify-between items-center pt-4 text-sm font-medium text-slate-500">
                <div className="flex items-center gap-2">
                    <Globe className="w-5 h-5" />
                    <span>Language</span>
                </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;