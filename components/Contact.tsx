
import React, { useState } from 'react';
import { useTranslation } from '../context/LanguageContext';
import { Icon } from './Icon';

export const Contact: React.FC = () => {
  const { t, language } = useTranslation();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setStatus('submitting');
    // Simulate production API delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    setStatus('success');
    
    // Reset after showing success message
    setTimeout(() => {
      setStatus('idle');
      setFormData({ name: '', email: '', message: '' });
    }, 5000);
  };

  return (
    <section id="contact" className="py-32 bg-[#06201b]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <h2 className="font-heading font-bold text-5xl md:text-7xl mb-12 text-white tracking-tighter uppercase">{t('contact_title')}</h2>
            <p className="text-slate-400 text-lg font-light leading-relaxed mb-16 max-w-md">
              {t('contact_desc')}
            </p>
            
            <div className="space-y-12">
              <a href="mailto:info@peak-productions.de" className="block group cursor-pointer">
                <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-slate-600 mb-2 group-hover:text-[#e1c58e] transition-colors uppercase">E-Mail</p>
                <p className="text-2xl font-heading font-bold text-white border-b border-white/10 pb-4 group-hover:border-[#e1c58e] transition-colors">info@peak-productions.de</p>
              </a>
              <a href="tel:+498966616990" className="block group cursor-pointer">
                <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-slate-600 mb-2 group-hover:text-[#e1c58e] transition-colors uppercase">Telefon</p>
                <p className="text-2xl font-heading font-bold text-white border-b border-white/10 pb-4 group-hover:border-[#e1c58e] transition-colors">+49 (0)89 666 16 99-0</p>
              </a>
              <div className="group">
                <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-slate-600 mb-2 uppercase">Studio</p>
                <p className="text-xl font-heading font-bold text-white">Prinzregentenstraße, 80538 München</p>
              </div>
            </div>
          </div>
          
          <div className="bg-[#041512] p-12 border border-[#e1c58e]/10 relative overflow-hidden">
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center animate-in zoom-in duration-500">
                <div className="w-20 h-20 rounded-full border border-[#e1c58e] flex items-center justify-center mb-8 text-[#e1c58e]">
                  <Icon name="Check" size={40} />
                </div>
                <h3 className="font-heading font-bold text-3xl text-white mb-4">
                  {language === 'de' ? 'Vielen Dank!' : 'Thank you!'}
                </h3>
                <p className="text-slate-500 uppercase tracking-widest text-xs">
                  {language === 'de' ? 'Wir melden uns in Kürze.' : 'We will get back to you shortly.'}
                </p>
              </div>
            ) : (
              <form className="space-y-10" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label className="text-[9px] font-bold uppercase tracking-[0.3em] text-slate-500">{t('contact_form_name')}</label>
                  <input 
                    required
                    type="text" 
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-[#e1c58e] text-white transition-all rounded-none placeholder:text-slate-800" 
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] font-bold uppercase tracking-[0.3em] text-slate-500">{t('contact_form_email')}</label>
                  <input 
                    required
                    type="email" 
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-[#e1c58e] text-white transition-all rounded-none placeholder:text-slate-800" 
                    placeholder="john@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] font-bold uppercase tracking-[0.3em] text-slate-500">{t('contact_form_msg')}</label>
                  <textarea 
                    required
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-[#e1c58e] text-white transition-all h-32 resize-none rounded-none placeholder:text-slate-800" 
                    placeholder="..."
                  ></textarea>
                </div>
                <button 
                  disabled={status === 'submitting'}
                  type="submit"
                  className={`w-full py-5 bg-[#e1c58e] text-[#06201b] font-bold text-xs uppercase tracking-[0.4em] transition-all flex items-center justify-center gap-3 ${status === 'submitting' ? 'opacity-70' : 'hover:bg-white active:scale-95'}`}
                >
                  {status === 'submitting' && <Icon name="Loader2" className="animate-spin" size={16} />}
                  {status === 'submitting' ? (language === 'de' ? 'Sendet...' : 'Sending...') : t('contact_form_btn')}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
