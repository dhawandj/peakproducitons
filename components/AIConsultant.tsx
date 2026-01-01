
import React, { useState } from 'react';
import { geminiService } from '../services/geminiService';
import { CreativeBrief } from '../types';
import { Icon } from './Icon';
import { useTranslation } from '../context/LanguageContext';

export const AIConsultant: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [brief, setBrief] = useState<CreativeBrief | null>(null);
  const [error, setError] = useState('');
  const { t, language } = useTranslation();

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setError('');
    try {
      const result = await geminiService.generateProjectConcept(prompt, language);
      setBrief(result);
    } catch (err: any) {
      setError(err.message || (language === 'de' ? 'Fehler bei der Generierung.' : 'Error generating concept.'));
    } finally {
      setLoading(false);
    }
  };

  const handleInquire = () => {
    // Smooth scroll to contact and focus name input
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      // We could also pass the brief data via window state or context if needed
      const messageInput = document.querySelector('textarea');
      if (messageInput && brief) {
        messageInput.value = language === 'de' 
          ? `Ich interessiere mich für das KI-Konzept: ${brief.conceptName}. \nAtmosphäre: ${brief.vibe}`
          : `I am interested in the AI concept: ${brief.conceptName}. \nVibe: ${brief.vibe}`;
      }
    }
  };

  return (
    <section id="ai-consultant" className="py-32 bg-[#041512] border-y border-[#e1c58e]/10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6 text-white tracking-tighter uppercase">{t('ai_title')}</h2>
          <p className="text-slate-500 text-sm font-light uppercase tracking-widest max-w-xl mx-auto">
            {t('ai_desc')}
          </p>
        </div>

        <div className="max-w-5xl mx-auto border border-[#e1c58e]/20 p-8 md:p-12 bg-black/20">
          <div className="flex flex-col md:flex-row gap-6 mb-12">
            <input 
              type="text" 
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
              placeholder={t('ai_placeholder')}
              className="flex-1 bg-transparent border-b border-[#e1c58e]/30 px-4 py-4 focus:outline-none focus:border-[#e1c58e] transition-all text-white placeholder:text-slate-700 font-light"
            />
            <button 
              onClick={handleGenerate}
              disabled={loading || !prompt.trim()}
              className={`px-12 py-4 bg-[#e1c58e] text-[#06201b] font-bold text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 transition-all ${loading || !prompt.trim() ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white active:scale-95'}`}
            >
              {loading ? <Icon name="Loader2" className="animate-spin" size={16} /> : <Icon name="Zap" size={14} />}
              {loading ? t('ai_loading') : t('ai_btn')}
            </button>
          </div>

          {error && (
            <div className="mb-8 p-4 bg-red-900/20 border border-red-500/20 text-red-400 text-xs uppercase tracking-widest">
              {error}
            </div>
          )}

          {brief && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 border-t border-[#e1c58e]/10 pt-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="space-y-8">
                <div>
                  <h3 className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#e1c58e] mb-4">
                    {language === 'de' ? 'Projektname' : 'Project Name'}
                  </h3>
                  <p className="text-3xl font-heading font-bold text-white tracking-tight">{brief.conceptName}</p>
                </div>
                <div>
                  <h3 className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#e1c58e] mb-4">
                    {language === 'de' ? 'Atmosphäre' : 'Atmosphere'}
                  </h3>
                  <p className="text-slate-400 italic font-light text-lg">"{brief.vibe}"</p>
                </div>
                <div>
                  <h3 className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#e1c58e] mb-4">
                    {language === 'de' ? 'Visueller Stil' : 'Visual Style'}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-light">{brief.visualStyle}</p>
                </div>
              </div>
              <div className="space-y-8">
                <div>
                  <h3 className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#e1c58e] mb-4">
                    {language === 'de' ? 'Empfohlene Locations' : 'Recommended Locations'}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {brief.locations.map((loc, i) => (
                      <span key={i} className="text-[10px] font-bold uppercase tracking-widest text-white border-b border-[#e1c58e]/30 pb-1">{loc}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#e1c58e] mb-4">
                    {language === 'de' ? 'Technische Anforderungen' : 'Technical Requirements'}
                  </h3>
                  <ul className="space-y-2">
                    {brief.technicalRequirements.map((req, i) => (
                      <li key={i} className="flex items-center gap-3 text-xs text-slate-500 font-light italic">
                        <span className="w-1 h-1 bg-[#e1c58e] rounded-full"></span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                <button 
                  onClick={handleInquire}
                  className="w-full py-4 border border-[#e1c58e] text-[#e1c58e] font-bold text-[10px] uppercase tracking-[0.3em] hover:bg-[#e1c58e] hover:text-[#06201b] transition-all"
                >
                  {language === 'de' ? 'Konzept anfragen' : 'Inquire Concept'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
