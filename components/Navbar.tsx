
import React, { useState, useEffect } from 'react';
import { Icon } from './Icon';
import { useTranslation } from '../context/LanguageContext';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${isScrolled ? 'py-4 bg-[#06201b]/95 backdrop-blur-md border-[#e1c58e]/20 shadow-xl' : 'py-8 bg-transparent border-transparent'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-4 group">
          <div className="w-8 h-8 border border-[#e1c58e] flex items-center justify-center rotate-45 group-hover:rotate-0 transition-transform duration-500">
            {/* <Icon name="Mountain" className="text-[#e1c58e] -rotate-45 group-hover:rotate-0 transition-transform duration-500" size={16} /> */}
            <img src="/peak-proudction-favicon.png" alt="" />
          </div>
          <span className="font-heading font-bold text-2xl tracking-tighter text-[#e1c58e] uppercase">
            Peak <span className="font-light opacity-50">Productions</span>
          </span>
        </a>
        
        <div className="hidden md:flex items-center gap-8 text-[10px] font-bold tracking-[0.3em] uppercase">
          <a href="#work" className="hover:text-[#e1c58e] transition-colors relative group">
            {t('nav_work')}
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#e1c58e] group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#services" className="hover:text-[#e1c58e] transition-colors relative group">
            {t('nav_services')}
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#e1c58e] group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#about" className="hover:text-[#e1c58e] transition-colors relative group">
            {t('nav_about')}
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#e1c58e] group-hover:w-full transition-all duration-300"></span>
          </a>
          
          <div className="flex items-center gap-2 px-2 border-x border-[#e1c58e]/20">
            <button 
              onClick={() => setLanguage('de')} 
              className={`hover:text-[#e1c58e] transition-colors ${language === 'de' ? 'text-[#e1c58e]' : 'text-slate-600'}`}
              aria-label="Switch to German"
            >
              DE
            </button>
            <span className="text-slate-700">/</span>
            <button 
              onClick={() => setLanguage('en')} 
              className={`hover:text-[#e1c58e] transition-colors ${language === 'en' ? 'text-[#e1c58e]' : 'text-slate-600'}`}
              aria-label="Switch to English"
            >
              EN
            </button>
          </div>

          <a href="#contact" className="px-8 py-3 bg-[#e1c58e] text-[#06201b] font-bold hover:bg-white transition-all duration-300 shadow-lg shadow-yellow-900/20">
            {t('nav_contact')}
          </a>
        </div>

        <button 
          className="md:hidden text-[#e1c58e]" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Mobile Menu"
        >
          <Icon name={mobileMenuOpen ? "X" : "Menu"} />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[88px] w-full bg-[#06201b]/98 backdrop-blur-xl border-t border-[#e1c58e]/20 p-8 flex flex-col gap-8 animate-in fade-in slide-in-from-right duration-300 h-screen z-50">
          <a href="#work" onClick={closeMenu} className="text-3xl font-heading font-bold uppercase tracking-widest text-[#e1c58e]">{t('nav_work')}</a>
          <a href="#services" onClick={closeMenu} className="text-3xl font-heading font-bold uppercase tracking-widest text-[#e1c58e]">{t('nav_services')}</a>
          <a href="#about" onClick={closeMenu} className="text-3xl font-heading font-bold uppercase tracking-widest text-[#e1c58e]">{t('nav_about')}</a>
          <a href="#contact" onClick={closeMenu} className="text-3xl font-heading font-bold uppercase tracking-widest bg-[#e1c58e] text-[#06201b] py-6 text-center">{t('nav_contact')}</a>
          
          <div className="mt-auto flex justify-center gap-8 py-8 border-t border-[#e1c58e]/10">
            <button onClick={() => { setLanguage('de'); closeMenu(); }} className={`text-sm font-bold tracking-widest ${language === 'de' ? 'text-[#e1c58e]' : 'text-slate-500'}`}>DEUTSCH</button>
            <span className="text-slate-800">|</span>
            <button onClick={() => { setLanguage('en'); closeMenu(); }} className={`text-sm font-bold tracking-widest ${language === 'en' ? 'text-[#e1c58e]' : 'text-slate-500'}`}>ENGLISH</button>
          </div>
        </div>
      )}
    </nav>
  );
};
