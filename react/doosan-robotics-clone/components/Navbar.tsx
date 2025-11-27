import React, { useRef, useState } from 'react';

const MENU = [
  { id: 'hero', label: 'Home' },
  { id: 'usecases', label: 'Use Cases' },
  { id: 'clients', label: 'Clients' },
  { id: 'solutions', label: 'Solutions' },
  { id: 'products', label: 'Products' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);

  const navHeight = 80; // App의 pt 값과 동일하게 유지하세요

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: top - navHeight, behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <header
      ref={navRef}
      className="fixed top-0 left-0 w-full z-40 bg-white/90 backdrop-blur border-b border-gray-200"
      style={{ height: navHeight }}
    >
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="text-xl font-bold cursor-pointer" onClick={() => scrollTo('hero')}>
            로고
          </div>

          {/* 데스크탑 메뉴 */}
          <nav className="hidden md:flex items-center gap-6 ml-6">
            {MENU.map((m) => (
              <button
                key={m.id}
                onClick={() => scrollTo(m.id)}
                className="text-sm font-medium hover:text-blue-600 transition-colors"
              >
                {m.label}
              </button>
            ))}
          </nav>
        </div>

        {/* 모바일 햄버거 */}
        <div className="md:hidden">
          <button
            aria-label="menu"
            onClick={() => setOpen((s) => !s)}
            className="p-2 rounded-md border"
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-2">
            {MENU.map((m) => (
              <button
                key={m.id}
                onClick={() => scrollTo(m.id)}
                className="text-left px-2 py-2 rounded hover:bg-gray-100"
              >
                {m.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}