import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full max-w-[1440px] mx-auto px-5 md:px-10 lg:px-[100px] pb-10 pt-10 md:pt-20 bg-dark-blue">
      <div className="flex flex-col lg:flex-row justify-between items-start mb-10 md:mb-20 gap-10 md:gap-16">
        
        {/* Левая колонка */}
        <div className="w-full lg:max-w-[300px]">
          <h4 className="font-oceanic text-[24px] mb-6">МОРСКАЯ АТМОСФЕРА,<br/>ОБЪЕДИНЯЮЩАЯ ЛЮДЕЙ</h4>
          <div className="w-full h-[200px] bg-gray-700/50 rounded-md overflow-hidden relative group cursor-pointer">
             <div className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500" style={{backgroundImage: 'url(../images/9.png)'}}></div>
          </div>
        </div>

        {/* Контакты и Навигация (на планшете в ряд, на телефоне в столбик) */}
        <div className="flex flex-col md:flex-row w-full justify-between gap-10">
            {/* Контакты */}
            <div className="flex-1">
               <p className="font-gilroy text-[12px] opacity-50 mb-4 uppercase">Контакты:</p>
               <a href="tel:+79999999999" className="block font-gilroy text-[18px] mb-2 hover:text-aquarim-accent transition-colors">+7 (999) 999-99-99</a>
               <a href="mailto:aquarim@gmail.com" className="block font-gilroy text-[18px] mb-8 hover:text-aquarim-accent transition-colors">aquarim@gmail.com</a>

               <p className="font-gilroy text-[12px] opacity-50 mb-4 uppercase">Адрес:</p>
               <p className="font-gilroy text-[18px] mb-8">г. Москва, ул. Тверская 12/2</p>

               <div className="flex gap-4">
                  {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-8 h-8 bg-aquarim-light-blue rounded hover:bg-aquarim-accent transition-colors cursor-pointer"></div>
                  ))}
               </div>
            </div>

            {/* Ссылки */}
            <div className="flex gap-10 md:gap-20">
                <div>
                    <p className="font-gilroy text-[12px] opacity-50 mb-6 uppercase">Меню</p>
                    <ul className="flex flex-col gap-4 font-gilroy text-[14px]">
                        {['Основное', 'Барная карта', 'Десерты', 'Детское'].map(item => (
                            <li key={item}><Link href="#" className="hover:text-aquarim-accent transition-colors">{item}</Link></li>
                        ))}
                    </ul>
                </div>
                <div>
                    <p className="font-gilroy text-[12px] opacity-50 mb-6 uppercase">Инфо</p>
                    <ul className="flex flex-col gap-4 font-gilroy text-[14px]">
                        {['О ресторане', 'Команда', 'Отзывы', 'Контакты'].map(item => (
                            <li key={item}><Link href="#" className="hover:text-aquarim-accent transition-colors">{item}</Link></li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
      </div>

      <div className="border-t border-aquarim-white-50/20 pt-10 flex flex-col md:flex-row justify-between items-center md:items-end gap-6 md:gap-0">
         <p className="font-gilroy text-[12px] opacity-30 order-2 md:order-1">© 2024 AQUARIM</p>
         <h1 className="font-oceanic text-[60px] md:text-[120px] leading-[0.8] text-aquarim-light-blue opacity-10 select-none order-1 md:order-2">AQUARIM</h1>
         <Link href="#" className="font-gilroy text-[12px] opacity-30 hover:opacity-100 transition-opacity order-3">Политика</Link>
      </div>
    </footer>
  );
};

export default Footer;