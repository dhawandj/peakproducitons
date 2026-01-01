import React from 'react';
import { Icon } from './Icon';
import { useTranslation } from '../context/LanguageContext';

export const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-[#06201b] pt-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#e1c58e 1px, transparent 1px), linear-gradient(90deg, #e1c58e 1px, transparent 1px)', backgroundSize: '100px 100px' }}></div>

      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-px bg-[#e1c58e]"></div>
            <span className="text-[#e1c58e] text-[10px] font-bold uppercase tracking-[0.4em]">{t('hero_tag')}</span>
          </div>
          
          <h1 className="font-heading font-bold text-6xl md:text-[8rem] leading-[0.9] mb-12 tracking-tighter text-white">
            {t('hero_title_1')} <br />
            <span className="italic text-[#e1c58e]">{t('hero_title_2')}</span>
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-3xl">
            <p className="text-lg text-slate-400 font-light leading-relaxed">
              {t('hero_desc')}
            </p>
            <div className="flex flex-col gap-6">
              <a href="#work" className="inline-flex items-center gap-4 group">
                <span className="w-12 h-12 rounded-full border border-[#e1c58e]/30 flex items-center justify-center group-hover:bg-[#e1c58e] group-hover:text-[#06201b] transition-all duration-500">
                  <Icon name="ArrowDown" size={18} className="group-hover:translate-y-1 transition-transform" />
                </span>
                <span className="text-xs font-bold uppercase tracking-[0.2em]">{t('hero_cta')}</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-4 hidden lg:block">
           <div className="relative aspect-[3/4] border border-[#e1c58e]/20 p-4">
              <div className="absolute -top-2 -left-2 w-4 h-4 border-t border-l border-[#e1c58e]"></div>
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b border-r border-[#e1c58e]"></div>
              <img 
                src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=800" 
                alt="Production" 
                className="w-full h-full object-cover grayscale opacity-60 hover:opacity-100 transition-opacity duration-1000"
              />
           </div>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-auto py-12 border-t border-[#e1c58e]/10 flex justify-between items-center text-[9px] font-bold uppercase tracking-[0.5em] text-slate-500">
        <span>{t('hero_est')}</span>
        <span>{t('hero_tag').split('//')[0].trim()}, DEUTSCHLAND</span>
        <span>FILM & FOTO</span>
      </div>
    </section>
  );
};
