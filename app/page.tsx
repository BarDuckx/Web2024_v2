'use client';

import React, { useState } from 'react';

const DISHES = [
    {
        id: 1,
        title: "МОРСКОЙ БРИЗ",
        desc: "Изысканное сочетание тигровых креветок, мидий и кальмаров под нежным сливочным соусом с добавлением белого вина.",
        price: "1 250 ₽",
        image: "/images/2.png"
    },
    {
        id: 2,
        title: "СТЕЙК ИЗ ЛОСОСЯ",
        desc: "Нежнейшее филе лосося на гриле с гарниром из спаржи и сливочно-икорным соусом.",
        price: "1 800 ₽",
        image: "/images/2.png"
    },
    {
        id: 3,
        title: "УСТРИЧНЫЙ СЕТ",
        desc: "Ассорти из 6 свежайших устриц с лимоном и винным уксусом.",
        price: "2 100 ₽",
        image: "/images/2.png"
    }
];

const Button = ({ children, variant = 'primary', className = '', ...props }: any) => {
    const baseStyle = "px-6 py-3 md:px-8 md:py-4 font-gilroy font-medium text-[16px] md:text-[24px] transition-all duration-300 active:scale-95 w-full md:w-auto";
    const styles = variant === 'primary' 
        ? "bg-aquarim-accent text-white hover:bg-orange-600 shadow-lg hover:shadow-orange-500/20"
        : "border border-aquarim-text text-aquarim-text hover:bg-aquarim-text hover:text-dark-blue";
    
    return <button className={`${baseStyle} ${styles} ${className}`} {...props}>{children}</button>
};

export default function Home() {
    const [form, setForm] = useState({ name: '', phone: '', email: '', comment: '' });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const [currentDishIndex, setCurrentDishIndex] = useState(0);

    const nextDish = () => {
        setCurrentDishIndex((prev) => (prev + 1) % DISHES.length);
    };
    const prevDish = () => {
        setCurrentDishIndex((prev) => (prev - 1 + DISHES.length) % DISHES.length);
    };
    const currentDish = DISHES[currentDishIndex];

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        try {
            const res = await fetch('/api/send-to-telegram', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });

            if (res.ok) {
                setMessage('✅ Заявка отправлена!');
                setForm({ name: '', phone: '', email: '', comment: '' });
            } else {
                setMessage('❌ Ошибка отправки');
            }
        } catch (error) {
            setMessage('❌ Ошибка сети');
        }
        
        setLoading(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    return (
        <div className="w-full max-w-[1440px] px-5 md:px-10 xl:px-[100px] flex flex-col gap-20 md:gap-32 pb-20 overflow-hidden">
            
            <section className="relative pt-10 text-center">
                <h1 className="font-oceanic text-[60px] md:text-[140px] lg:text-[180px] xl:text-[256px] leading-[0.8] text-aquarim-light-blue opacity-20 select-none absolute top-10 md:top-0 left-1/2 -translate-x-1/2 w-full whitespace-nowrap z-0">
                    AQUARIM
                </h1>
                
                <div className="relative z-10 mt-10 md:mt-20 flex flex-col items-center">
                    <div className="flex flex-col md:flex-row justify-between items-center w-full mb-10 gap-4 md:gap-0">
                        <span className="font-oceanic text-[40px] md:text-[50px] lg:text-[80px] uppercase tracking-widest w-full md:w-1/3 text-center md:text-left leading-none order-1">
                            РЫБНЫЙ
                        </span>
                        
                        <div className="w-[200px] h-[250px] md:w-[240px] md:h-[320px] lg:w-[300px] lg:h-[400px] md:-mt-20 z-20 mx-auto relative group order-2">
                            <div className="w-full h-full bg-contain bg-no-repeat bg-center transition-transform duration-500 group-hover:-translate-y-4"
                                style={{backgroundImage: 'url(/images/shrimp.png)'}}>
                            </div>
                        </div>

                        <span className="font-oceanic text-[40px] md:text-[50px] lg:text-[80px] uppercase tracking-widest w-full md:w-1/3 text-center md:text-right leading-none order-3">
                            РЕСТОРАН
                        </span>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between w-full items-start md:items-end gap-8 md:gap-0">
                        <div className="w-full md:w-1/3 text-center md:text-left flex flex-col items-center md:items-start">
                            <p className="font-gilroy text-[14px] opacity-70 mb-4 max-w-[250px] md:max-w-[200px]">
                                Откройте для себя мир изысканных вкусов с нашими рыбными деликатесами.
                            </p>
                            <Button>МЕНЮ</Button>
                        </div>
                        
                        <div className="w-full md:w-1/3 flex flex-row md:flex-col gap-4 justify-center md:justify-end md:items-end text-right">
                            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
                                <span className="text-center md:text-right text-[12px] font-gilroy opacity-70 order-2 md:order-1">Свежие продукты<br/>каждый день</span>
                                <div className="w-10 h-10 rounded-full border border-aquarim-white-50 flex items-center justify-center order-1 md:order-2">🌊</div>
                            </div>
                            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
                                <span className="text-center md:text-right text-[12px] font-gilroy opacity-70 order-2 md:order-1">Авторская кухня<br/>от шеф-повара</span>
                                <div className="w-10 h-10 rounded-full border border-aquarim-white-50 flex items-center justify-center order-1 md:order-2">👨‍🍳</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
                <div className="order-2 md:order-1">
                    <div className="flex items-center gap-4 mb-6">
                        <span className="w-8 h-[1px] bg-aquarim-text"></span>
                        <span className="font-gilroy text-[12px] uppercase tracking-wider">О ресторане</span>
                    </div>
                    <h2 className="font-oceanic text-[36px] md:text-[42px] lg:text-[56px] leading-[1.05] mb-6 md:mb-8">
                        ИСТОРИЯ РЫБНОГО<br/>ИСКУШЕНИЯ
                    </h2>
                    <p className="font-gilroy text-[16px] md:text-[18px] opacity-70 leading-relaxed mb-8 md:mb-10">
                        Наш ресторан начинался как маленькая семейная лавка со свежей рыбой. Сегодня это место, где традиции встречаются с высокой кухней.
                    </p>
                    <button className="text-aquarim-accent font-gilroy font-semibold uppercase tracking-wider text-[14px] hover:text-white transition-colors border-b border-aquarim-accent hover:border-white pb-1">
                        Узнать больше
                    </button>
                </div>
                <div className="order-1 md:order-2 w-full h-[300px] md:h-full min-h-[300px] bg-cover md:bg-contain bg-no-repeat bg-center rounded-lg md:rounded-none" style={{backgroundImage: 'url(/images/1.png)'}}>
                </div>
            </section>

            <section className="relative">
                <div className="flex items-center gap-4 mb-10">
                    <span className="w-8 h-[1px] bg-aquarim-text"></span>
                    <h2 className="font-oceanic text-[32px] md:text-[40px] lg:text-[48px] leading-[1.05]">
                        БЛЮДА, КОТОРЫЕ<br className="hidden md:block"/> НАВСЕГДА ЗАПОМНЯТСЯ
                    </h2>
                </div>
                
                <div className="bg-aquarim-blue/20 backdrop-blur-sm rounded-lg overflow-hidden flex flex-col md:flex-row min-h-auto md:min-h-[400px]">
                    <div className="w-full md:w-1/2 p-8 md:p-10 lg:p-16 flex flex-col justify-center order-2 md:order-1 transition-opacity duration-300">
                        <h3 className="font-oceanic text-[28px] md:text-[36px] mb-4 uppercase">{currentDish.title}</h3>
                        <p className="font-gilroy text-[14px] opacity-70 mb-6 md:mb-8 max-w-sm min-h-[60px]">
                            {currentDish.desc}
                        </p>
                        <p className="font-gilroy text-[24px] font-semibold mb-6 md:mb-8">{currentDish.price}</p>
                        <div>
                            <Button variant="primary">В КОРЗИНУ</Button>
                        </div>
                    </div>
                    
                    <div className="w-full md:w-1/2 h-[300px] md:h-auto relative bg-cover bg-center order-1 md:order-2 transition-all duration-300" 
                         style={{backgroundImage: `url(${currentDish.image})`}}>
                        
                        <div className="absolute inset-0 flex items-center justify-between px-4">
                            <button 
                                onClick={prevDish}
                                className="w-10 h-10 border border-white/30 rounded-full flex items-center justify-center bg-black/20 hover:bg-aquarim-accent transition-colors text-white"
                            >
                                ‹
                            </button>
                            <button 
                                onClick={nextDish}
                                className="w-10 h-10 border border-white/30 rounded-full flex items-center justify-center bg-black/20 hover:bg-aquarim-accent transition-colors text-white"
                            >
                                ›
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center mt-8">
                    <button className="border border-aquarim-white-50 px-8 py-3 font-gilroy text-[14px] uppercase tracking-wider hover:bg-aquarim-white-50 hover:text-dark-blue transition-colors">
                        Посмотреть меню
                    </button>
                </div>
            </section>

            <section>
                <div className="flex items-center gap-4 mb-10">
                    <span className="w-8 h-[1px] bg-aquarim-text"></span>
                    <h2 className="font-oceanic text-[32px] md:text-[40px] lg:text-[48px] leading-[1.05]">
                        ДОСТАВКА ПО<br/> МОСКВЕ И МО
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
                    <div className="space-y-10 order-2 md:order-1">
                        <div>
                            <span className="font-oceanic text-[36px] text-aquarim-white-50/50">01</span>
                            <h4 className="font-oceanic text-[24px] mb-2">ТОЧНО В СРОК</h4>
                            <p className="font-gilroy text-[14px] opacity-60">Курьер прибудет точно в указанный интервал или скидка на заказ.</p>
                        </div>
                        <div>
                            <span className="font-oceanic text-[36px] text-aquarim-white-50/50">02</span>
                            <h4 className="font-oceanic text-[24px] mb-2">ГОРЯЧЕЕ — ГОРЯЧИМ</h4>
                            <p className="font-gilroy text-[14px] opacity-60">Специальные термосумки сохраняют температуру.</p>
                        </div>
                    </div>

                    <div className="h-[300px] md:h-[400px] w-full relative bg-contain bg-no-repeat bg-center order-1 md:order-2" style={{backgroundImage: 'url(/images/3.png)'}}>
                    </div>

                    <div className="order-3 md:order-3">
                        <div>
                            <span className="font-oceanic text-[36px] text-aquarim-white-50/50">03</span>
                            <h4 className="font-oceanic text-[24px] mb-2">ОТСЛЕЖИВАНИЕ</h4>
                            <p className="font-gilroy text-[14px] opacity-60">Следите за перемещением курьера на карте в режиме реального времени.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="flex items-center gap-4 mb-10">
                    <span className="w-8 h-[1px] bg-aquarim-text"></span>
                    <h2 className="font-oceanic text-[32px] md:text-[40px] lg:text-[48px] leading-[1.05]">ОТЗЫВЫ</h2>
                </div>
                
                <div className="flex overflow-x-auto md:grid md:grid-cols-3 lg:grid-cols-5 gap-4 h-[250px] md:h-[200px] snap-x snap-mandatory pb-4 md:pb-0">
                    <div className="bg-aquarim-accent p-6 flex flex-col justify-between min-w-[200px] w-full h-full snap-start rounded-lg md:rounded-none">
                        <p className="font-oceanic text-[24px]">БОЛЕЕ 1500<br/>ОТЗЫВОВ</p>
                        <div className="w-10 h-10 border border-white rounded-full flex items-center justify-center">↗</div>
                    </div>
                    <div className="min-w-[200px] w-full h-full bg-cover bg-center snap-start rounded-lg md:rounded-none" style={{backgroundImage: 'url(/images/4.png)'}}></div>
                    <div className="min-w-[200px] w-full h-full bg-cover bg-center snap-start rounded-lg md:rounded-none" style={{backgroundImage: 'url(/images/5.png)'}}></div>
                    <div className="min-w-[200px] w-full h-full bg-cover bg-center snap-start rounded-lg md:rounded-none" style={{backgroundImage: 'url(/images/6.png)'}}></div>
                    <div className="min-w-[200px] w-full h-full bg-cover bg-center snap-start rounded-lg md:rounded-none hidden lg:block" style={{backgroundImage: 'url(/images/7.png)'}}></div>
                </div>
            </section>

            <section>
                <div className="flex items-center gap-4 mb-10">
                    <span className="w-8 h-[1px] bg-aquarim-text"></span>
                    <h2 className="font-oceanic text-[32px] md:text-[40px] lg:text-[48px] leading-[1.05]">ВЫГОДНЫЕ<br/>ПРЕДЛОЖЕНИЯ</h2>
                </div>

                <div className="bg-aquarim-light-blue/20 flex flex-col md:flex-row rounded-lg overflow-hidden md:h-[350px]">
                    <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center order-2 md:order-1">
                        <h3 className="font-oceanic text-[28px] md:text-[36px] mb-4">СКИДКА 15%<br/>НА ПЕРВЫЙ ЗАКАЗ</h3>
                        <p className="font-gilroy text-[14px] opacity-70 mb-8 max-w-sm">
                            Попробуйте наши лучшие блюда по специальной цене. Промокод: FIRST15
                        </p>
                        <div>
                            <Button variant="primary">К ЗАКАЗУ</Button>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 h-[250px] md:h-auto relative bg-cover bg-center order-1 md:order-2" style={{backgroundImage: 'url(/images/2.png)'}}>
                    </div>
                </div>
            </section>

            <section>
                <div className="flex items-center gap-4 mb-10">
                    <span className="w-8 h-[1px] bg-aquarim-text"></span>
                    <h2 className="font-oceanic text-[32px] md:text-[40px] lg:text-[48px] leading-[1.05]">БРОНИРОВАНИЕ<br/>СТОЛА</h2>
                </div>

                <div className="flex flex-col md:flex-row gap-10">
                    <form onSubmit={handleSubmit} className="w-full md:w-1/2 space-y-6 md:space-y-8 mt-4 order-2 md:order-1">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                            <div className="flex flex-col gap-2">
                                <label className="font-gilroy text-[12px] uppercase opacity-70">Имя</label>
                                <input 
                                    type="text" 
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                    className="bg-transparent border-b border-aquarim-white-50 py-2 focus:border-aquarim-accent transition-colors text-[18px]" 
                                    placeholder="Иван" 
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="font-gilroy text-[12px] uppercase opacity-70">Телефон</label>
                                <input 
                                    type="tel" 
                                    name="phone"
                                    value={form.phone}
                                    onChange={handleChange}
                                    required
                                    className="bg-transparent border-b border-aquarim-white-50 py-2 focus:border-aquarim-accent transition-colors text-[18px]" 
                                    placeholder="+7 (___) ___-__-__" 
                                />
                            </div>
                        </div>
                        
                        <div className="flex flex-col gap-2">
                            <label className="font-gilroy text-[12px] uppercase opacity-70">Email</label>
                            <input 
                                type="email" 
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="bg-transparent border-b border-aquarim-white-50 py-2 focus:border-aquarim-accent transition-colors text-[18px]" 
                                placeholder="example@mail.com" 
                            />
                        </div>
                        
                        <div className="flex flex-col gap-2">
                            <label className="font-gilroy text-[12px] uppercase opacity-70">Комментарий</label>
                            <textarea 
                                name="comment"
                                value={form.comment}
                                onChange={handleChange}
                                className="bg-transparent border-b border-aquarim-white-50 py-2 focus:border-aquarim-accent transition-colors text-[18px] resize-none h-10" 
                                placeholder="Время брони..." 
                            />
                        </div>
                        
                        {message && (
                            <p className={`font-gilroy text-[14px] ${message.startsWith('✅') ? 'text-green-400' : 'text-red-400'}`}>
                                {message}
                            </p>
                        )}

                        <div className="pt-4">
                            <button 
                                type="submit" 
                                disabled={loading}
                                className={`w-full py-4 text-white font-gilroy font-medium text-[18px] transition-colors shadow-lg active:scale-[0.99] ${loading ? 'bg-gray-500 cursor-not-allowed' : 'bg-aquarim-accent hover:bg-orange-600'}`}
                            >
                                {loading ? 'ОТПРАВКА...' : 'ОТПРАВИТЬ ЗАЯВКУ'}
                            </button>
                        </div>
                    </form>

                    <div className="w-full md:w-1/2 flex flex-col gap-4 order-1 md:order-2">
                        <div className="h-[250px] md:h-[400px] w-full relative bg-cover bg-center rounded-lg md:rounded-none" style={{backgroundImage: 'url(/images/8.png)'}}>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
