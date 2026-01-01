
import React from 'react';
import { useTranslation } from '../context/LanguageContext';
import { TEAM, AWARDS } from '../mockdata';
import { Icon } from './Icon';

export const About: React.FC = () => {
  const { t, language } = useTranslation();

  return (
    <section id="about" className="py-40 bg-[#06201b] relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#e1c58e]/[0.02] -skew-x-12 transform translate-x-1/2"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-40 items-center">
          <div className="lg:col-span-6 space-y-12">
            <div className="inline-flex items-center gap-4 px-4 py-2 border border-[#e1c58e]/30 rounded-full">
              <span className="w-2 h-2 bg-[#e1c58e] rounded-full animate-pulse"></span>
              <span className="text-[#e1c58e] text-[9px] font-bold uppercase tracking-[0.4em]">{t('about_tag')}</span>
            </div>
            
            <h2 className="font-heading font-bold text-6xl md:text-8xl leading-[0.85] tracking-tighter text-white uppercase">
              {t('about_title_1')} <br />
              <span className="italic text-[#e1c58e]">{t('about_title_2')}</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-slate-400 font-light leading-relaxed max-w-xl">
              {t('about_desc')}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-[#e1c58e]/10 pt-16">
              <div className="group">
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-heading italic text-4xl text-[#e1c58e] opacity-30 group-hover:opacity-100 transition-opacity">01.</span>
                  <h4 className="font-bold text-xs uppercase tracking-[0.3em] text-white">{t('about_feat_1_title')}</h4>
                </div>
                <p className="text-sm text-slate-500 font-light leading-relaxed group-hover:text-slate-300 transition-colors">{t('about_feat_1_desc')}</p>
              </div>
              <div className="group">
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-heading italic text-4xl text-[#e1c58e] opacity-30 group-hover:opacity-100 transition-opacity">02.</span>
                  <h4 className="font-bold text-xs uppercase tracking-[0.3em] text-white">{t('about_feat_2_title')}</h4>
                </div>
                <p className="text-sm text-slate-500 font-light leading-relaxed group-hover:text-slate-300 transition-colors">{t('about_feat_2_desc')}</p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-6 relative group">
            <div className="aspect-[3/4] overflow-hidden border border-[#e1c58e]/20 p-3 bg-black/40 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&q=80&w=1200" 
                alt="Studio Atmosphere" 
                className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
              />
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-10 -right-10 bg-[#e1c58e] p-12 shadow-2xl transform group-hover:scale-105 transition-transform duration-500 hidden md:block">
              <div className="text-[#06201b] text-center">
                <span className="font-heading font-bold text-7xl leading-none">15</span>
                <span className="font-heading italic text-3xl block">Years</span>
                <div className="w-8 h-px bg-[#06201b] mx-auto my-4"></div>
                <p className="text-[10px] font-bold uppercase tracking-[0.4em]">{t('about_exp')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-48">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
             <div>
                <h3 className="font-heading font-bold text-5xl text-white uppercase tracking-tight mb-4">The Creative Core</h3>
                <div className="w-24 h-px bg-[#e1c58e]"></div>
             </div>
             <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.6em]">Visionaries behind the lens</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {TEAM.map((member, index) => (
              <div key={member.id} className="group relative" style={{ transitionDelay: `${index * 150}ms` }}>
                <div className="aspect-[4/5] overflow-hidden mb-8 border border-[#e1c58e]/10 bg-[#041512]">
                  <img 
                    src={member.imageUrl} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06201b] to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-700"></div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-heading font-bold text-3xl text-white group-hover:text-[#e1c58e] transition-colors">{member.name}</h4>
                  <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#e1c58e]/60 group-hover:text-[#e1c58e] transition-colors">{member.role[language]}</p>
                </div>
                {/* Subtle social link icon */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <Icon name="Instagram" className="text-[#e1c58e]" size={16} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Awards Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
           <div className="lg:col-span-7">
              <h3 className="font-heading font-bold text-5xl text-white uppercase tracking-tight mb-16">Global Recognition</h3>
              <div className="space-y-0">
                {AWARDS.map((award) => (
                  <div key={award.id} className="group flex justify-between items-center border-b border-[#e1c58e]/10 py-10 hover:bg-[#e1c58e]/[0.02] transition-colors px-4">
                    <div className="flex items-center gap-8">
                      <span className="font-heading italic text-2xl text-[#e1c58e] group-hover:scale-125 transition-transform">{award.year}</span>
                      <div>
                        <h4 className="font-heading font-bold text-2xl text-white group-hover:translate-x-2 transition-transform">{award.name}</h4>
                        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500 mt-2">{award.category[language]}</p>
                      </div>
                    </div>
                    <div className="w-12 h-12 rounded-full border border-[#e1c58e]/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Icon name="Award" className="text-[#e1c58e]" size={20} />
                    </div>
                  </div>
                ))}
              </div>
           </div>
           
           <div className="lg:col-span-5 self-center">
              <div className="relative p-16 border border-[#e1c58e]/10 bg-black/20 text-center">
                 <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-[#06201b] border border-[#e1c58e]/30 flex items-center justify-center">
                    <Icon name="Quote" className="text-[#e1c58e]" size={20} />
                 </div>
                 <p className="font-heading italic text-3xl text-slate-300 leading-relaxed mb-10">
                   "Precision is not just a skill, it is a mindset. At Peak, we don't settle for the good; we hunt for the extraordinary."
                 </p>
                 <div className="w-20 h-px bg-[#e1c58e] mx-auto mb-4"></div>
                 <p className="text-[9px] font-bold uppercase tracking-[0.5em] text-[#e1c58e]">Lukas Bergmann — Founder</p>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};
