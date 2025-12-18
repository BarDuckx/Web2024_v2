'use client';

import Link from 'next/link';
import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full max-w-[1440px] mx-auto px-5 md:px-10 xl:px-[100px] py-6 flex justify-between items-center relative z-50">
      
      {/* Логотип */}
      <Link href="/" className="font-oceanic text-[20px] md:text-[24px] tracking-widest hover:opacity-80 transition-opacity z-50">
        AQUARIM
      </Link>

      {/* Бургер-кнопка (видны только на мобильных < 768px) */}
      <button 
        className="md:hidden flex flex-col gap-1.5 z-50 p-2"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span className={`block w-6 h-0.5 bg-aquarim-text transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-aquarim-text transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-aquarim-text transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>

      {/* Навигация (Десктоп/Планшет) */}
      <nav className="hidden md:flex gap-6 lg:gap-10">
        {['МЕНЮ', 'О НАС', 'ДОСТАВКА И ОПЛАТА', 'БРОНЬ'].map((item) => (
          <Link 
            key={item} 
            href="#" 
            className="font-gilroy text-[10px] lg:text-[12px] font-medium tracking-wide text-aquarim-text hover:text-aquarim-accent transition-colors uppercase"
          >
            {item}
          </Link>
        ))}
      </nav>

      {/* Мобильное меню (Выезжающее) */}
      <div className={`fixed inset-0 bg-dark-blue flex flex-col items-center justify-center gap-8 transition-transform duration-300 md:hidden z-40 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {['МЕНЮ', 'О НАС', 'ДОСТАВКА И ОПЛАТА', 'БРОНЬ'].map((item) => (
          <Link 
            key={item} 
            href="#" 
            onClick={() => setIsMenuOpen(false)}
            className="font-oceanic text-[24px] text-aquarim-text uppercase"
          >
            {item}
          </Link>
        ))}
      </div>

      {/* Корзина */}
      <button className="relative group p-2 hidden md:block">
        <div className="w-6 h-6 border-2 border-aquarim-text rounded-full group-hover:border-aquarim-accent transition-colors flex items-center justify-center">
            <span className="text-[10px]">0</span>
        </div>
      </button>
    </header>
  );
};

export default Header;