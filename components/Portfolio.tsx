
import React, { useState } from 'react';
import { PROJECTS } from '../mockdata';
import { Icon } from './Icon';
import { useTranslation } from '../context/LanguageContext';

export const Portfolio: React.FC = () => {
  const { t, language } = useTranslation();
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Film', 'Photo', 'Commercial', 'Documentary'];
  
  const filteredProjects = PROJECTS.filter(project => {
    if (activeFilter === 'All') return true;
    return project.category.en === activeFilter;
  });

  return (
    <section id="work" className="py-32 bg-[#041512]">
      <div className="container mx-auto px-6">
        <div className="mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div className="max-w-xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-px bg-[#e1c58e]"></div>
              <span className="text-[#e1c58e] text-[10px] font-bold uppercase tracking-[0.3em]">Selected Work</span>
            </div>
            <h2 className="font-heading font-bold text-5xl md:text-7xl mb-6 text-white tracking-tighter uppercase leading-[0.85]">{t('portfolio_title')}</h2>
            <p className="text-slate-500 text-sm font-light uppercase tracking-widest leading-relaxed">
              {t('portfolio_desc')}
            </p>
          </div>
          <div className="flex flex-wrap gap-x-12 gap-y-4 text-[10px] font-bold uppercase tracking-[0.4em] border-b border-[#e1c58e]/10 pb-4 w-full md:w-auto">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`transition-all duration-300 relative ${activeFilter === cat ? 'text-[#e1c58e]' : 'text-slate-600 hover:text-white'}`}
              >
                {cat === 'All' ? t('portfolio_all') : cat}
                <span className={`absolute -bottom-4 left-0 h-[2px] bg-[#e1c58e] transition-all duration-500 ${activeFilter === cat ? 'w-full' : 'w-0'}`}></span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-l border-t border-[#e1c58e]/10">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className={`group relative aspect-[4/5] md:aspect-square border-r border-b border-[#e1c58e]/10 overflow-hidden bg-[#06201b] animate-in fade-in slide-in-from-bottom-8 duration-700`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 z-0">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover grayscale opacity-30 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#041512] via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-700"></div>

              <div className="absolute inset-0 z-20 flex flex-col justify-end p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                <div className="flex items-center gap-3 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 delay-100">
                   <span className="text-[#e1c58e] text-[9px] font-bold uppercase tracking-[0.4em]">{project.category[language]}</span>
                   <span className="w-1 h-1 bg-[#e1c58e] rounded-full"></span>
                   <span className="text-slate-400 text-[9px] font-bold uppercase tracking-[0.4em]">{project.year}</span>
                </div>
                <h3 className="font-heading font-bold text-3xl md:text-4xl text-white mb-6 tracking-tight leading-none group-hover:text-[#e1c58e] transition-colors">{project.title}</h3>
                
                <div className="flex justify-between items-center overflow-hidden h-0 group-hover:h-12 transition-all duration-700">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400">{project.location[language]}</p>
                  <Icon name="ArrowUpRight" className="text-[#e1c58e]" size={20} />
                </div>
              </div>
              
              <div className="absolute top-8 right-8 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="w-12 h-12 border border-[#e1c58e]/30 flex items-center justify-center text-[#e1c58e]">
                  <Icon name="Expand" size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-24 text-center">
           <button className="px-12 py-5 border border-[#e1c58e]/30 text-[10px] font-bold uppercase tracking-[0.5em] text-[#e1c58e] hover:bg-[#e1c58e] hover:text-[#06201b] transition-all duration-500">
             Load Full Archive
           </button>
        </div>
      </div>
    </section>
  );
};
