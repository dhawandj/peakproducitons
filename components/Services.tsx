
import React from 'react';
import { SERVICES } from '../mockdata';
import { Icon } from './Icon';
import { useTranslation } from '../context/LanguageContext';

export const Services: React.FC = () => {
  const { t, language } = useTranslation();

  return (
    <section id="services" className="py-40 bg-[#06201b] border-y border-[#e1c58e]/10">
      <div className="container mx-auto px-6 text-center mb-32">
        <div className="inline-block px-6 py-2 border border-[#e1c58e]/20 text-[#e1c58e] text-[9px] font-bold uppercase tracking-[0.5em] mb-10">
          Our Capabilities
        </div>
        <h2 className="font-heading font-bold text-6xl md:text-8xl mb-8 tracking-tighter uppercase leading-[0.85] text-white">
          {t('services_title')}
        </h2>
        <p className="text-slate-400 max-w-3xl mx-auto text-xl font-light leading-relaxed">
          {t('services_desc')}
        </p>
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-[#e1c58e]/10 bg-black/20">
        {SERVICES.map((service, index) => (
          <div 
            key={service.id} 
            className={`group p-12 hover:bg-[#e1c58e]/5 transition-all duration-1000 border-b lg:border-b-0 ${index !== SERVICES.length - 1 ? 'lg:border-r border-[#e1c58e]/10' : ''} border-[#e1c58e]/10 relative overflow-hidden`}
          >
            {/* Hover Background Pattern */}
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-[0.03] transition-opacity duration-1000" style={{ backgroundImage: 'linear-gradient(#e1c58e 1px, transparent 1px), linear-gradient(90deg, #e1c58e 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-[#e1c58e] flex items-center justify-center mb-12 shadow-2xl shadow-yellow-900/30 transform group-hover:-translate-y-2 group-hover:rotate-[360deg] transition-all duration-700">
                <Icon name={service.icon} className="text-[#06201b]" size={32} />
              </div>
              
              <h3 className="font-heading font-bold text-3xl mb-6 text-white group-hover:text-[#e1c58e] transition-colors uppercase tracking-tight leading-none">
                {service.title[language]}
              </h3>
              
              <p className="text-slate-500 leading-relaxed text-sm font-light mb-8 group-hover:text-slate-300 transition-colors">
                {service.description[language]}
              </p>
              
              <div className="flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.4em] text-[#e1c58e] opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-500">
                Explore <Icon name="ChevronRight" size={10} />
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Partnership Section */}
      <div className="container mx-auto px-6 mt-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
           <div className="space-y-10">
              <h3 className="font-heading font-bold text-4xl text-white uppercase leading-tight">Beyond Production: <br/><span className="text-[#e1c58e]">Strategic Partnership</span></h3>
              <p className="text-slate-400 font-light text-lg">
                We don't just execute; we consult. Our team integrates into your workflow to ensure that every visual asset aligns with your global brand strategy.
              </p>
              <div className="flex gap-16">
                 <div>
                    <p className="text-3xl font-heading text-white mb-2">98%</p>
                    <p className="text-[9px] font-bold uppercase tracking-widest text-slate-500">Client Retention</p>
                 </div>
                 <div>
                    <p className="text-3xl font-heading text-white mb-2">250+</p>
                    <p className="text-[9px] font-bold uppercase tracking-widest text-slate-500">Global Projects</p>
                 </div>
                 <div>
                    <p className="text-3xl font-heading text-white mb-2">15</p>
                    <p className="text-[9px] font-bold uppercase tracking-widest text-slate-500">Industry Awards</p>
                 </div>
              </div>
           </div>
           <div className="grid grid-cols-2 gap-6">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="aspect-video bg-black/30 border border-[#e1c58e]/10 flex items-center justify-center p-8 grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all cursor-pointer">
                  <span className="font-heading text-2xl text-white opacity-20">Partner {i}</span>
                </div>
              ))}
           </div>
        </div>
      </div>
    </section>
  );
};
