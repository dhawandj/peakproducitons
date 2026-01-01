
import React from 'react';
import { useTranslation } from '../context/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="py-20 bg-[#041512] border-t border-[#e1c58e]/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-24">
          <div className="max-w-xs">
            <span className="font-heading font-bold text-2xl tracking-tighter text-[#e1c58e] uppercase block mb-6">
              Peak <span className="font-light opacity-50">Productions</span>
            </span>
            <p className="text-slate-600 text-[10px] uppercase tracking-[0.2em] font-bold leading-relaxed">
              {t('footer_mission')}
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-20">
            <div className="space-y-6">
              <h4 className="text-[9px] font-bold uppercase tracking-[0.4em] text-[#e1c58e]">{t('footer_menu')}</h4>
              <nav className="flex flex-col gap-3 text-xs text-slate-500 font-light">
                <a href="#work" className="hover:text-white transition-colors uppercase tracking-widest">{t('nav_work')}</a>
                <a href="#services" className="hover:text-white transition-colors uppercase tracking-widest">{t('nav_services')}</a>
                <a href="#about" className="hover:text-white transition-colors uppercase tracking-widest">{t('nav_about')}</a>
              </nav>
            </div>
            <div className="space-y-6">
              <h4 className="text-[9px] font-bold uppercase tracking-[0.4em] text-[#e1c58e]">{t('footer_legal')}</h4>
              <nav className="flex flex-col gap-3 text-xs text-slate-500 font-light">
                <a href="#" className="hover:text-white transition-colors uppercase tracking-widest">{t('footer_privacy')}</a>
                <a href="#" className="hover:text-white transition-colors uppercase tracking-widest">{t('footer_imprint')}</a>
                <a href="#" className="hover:text-white transition-colors uppercase tracking-widest">{t('footer_terms')}</a>
              </nav>
            </div>
            <div className="space-y-6 hidden md:block">
              <h4 className="text-[9px] font-bold uppercase tracking-[0.4em] text-[#e1c58e]">{t('footer_network')}</h4>
              <nav className="flex flex-col gap-3 text-xs text-slate-500 font-light">
                <a href="#" className="hover:text-white transition-colors uppercase tracking-widest">Instagram</a>
                <a href="#" className="hover:text-white transition-colors uppercase tracking-widest">LinkedIn</a>
                <a href="#" className="hover:text-white transition-colors uppercase tracking-widest">Vimeo</a>
              </nav>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-[#e1c58e]/5 text-[9px] text-slate-700 tracking-[0.5em] uppercase font-bold flex flex-col md:flex-row justify-between gap-4">
          <div>© {new Date().getFullYear()} PEAK PRODUCTIONS GMBH</div>
          <div>MADE WITH PRECISION IN MUNICH</div>
        </div>
      </div>
    </footer>
  );
};
