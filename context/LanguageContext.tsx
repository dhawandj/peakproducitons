
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Language } from '../types';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<string, { en: string; de: string }> = {
  nav_work: { en: 'Portfolio', de: 'Portfolio' },
  nav_services: { en: 'Services', de: 'Leistungen' },
  nav_about: { en: 'About', de: 'Über Uns' },
  nav_contact: { en: 'Contact', de: 'Kontakt' },
  hero_tag: { en: 'Munich // Global', de: 'München // Weltweit' },
  hero_title_1: { en: 'PRECISION', de: 'PRÄZISION' },
  hero_title_2: { en: 'IN FOCUS.', de: 'IM FOKUS.' },
  hero_desc: { en: 'Peak Productions is your full-service film and photo production. We combine Bavarian craftsmanship with a global vision for your success.', de: 'Peak Productions ist Ihre Full-Service Film- und Fotoproduktion. Wir vereinen bayerisches Handwerk mit globaler Vision für Ihren Erfolg.' },
  hero_cta: { en: 'Discover our work', de: 'Entdecken Sie unsere Arbeit' },
  hero_est: { en: 'EST. 2009', de: 'SEIT 2009' },
  portfolio_title: { en: 'TOOLS OF SUCCESS', de: 'WERKZEUGE DES ERFOLGS' },
  portfolio_desc: { en: 'A selection of our most demanding projects in film and photography.', de: 'Eine Auswahl unserer anspruchsvollsten Projekte aus Film und Fotografie.' },
  portfolio_all: { en: 'All', de: 'Alle' },
  services_title: { en: 'Excellence in Motion', de: 'Exzellenz in Bewegung' },
  services_desc: { en: 'From the initial frame to the final cut, we provide high-end production services globally.', de: 'Vom ersten Frame bis zum finalen Schnitt bieten wir weltweit High-End-Produktionsdienstleistungen an.' },
  about_tag: { en: 'About Peak Productions', de: 'Über Peak Productions' },
  about_title_1: { en: 'BAVARIAN', de: 'BAYERISCHES' },
  about_title_2: { en: 'CRAFTSMANSHIP.', de: 'HANDWERK.' },
  about_desc: { en: 'Based in the heart of Munich, we combine traditional quality values with the latest production technology. Our claim is perfection in detail.', de: 'Ansässig im Herzen von München, verbinden wir traditionelle Qualitätswerte mit modernster Produktionstechnologie. Unser Anspruch ist die Perfektion im Detail.' },
  about_feat_1_title: { en: 'Technical Excellence', de: 'Technische Exzellenz' },
  about_feat_1_desc: { en: 'Using modern 8K systems and high-end post-production.', de: 'Einsatz modernster 8K-Systeme und High-End Post-Production.' },
  about_feat_2_title: { en: 'Global Reach', de: 'Globale Reichweite' },
  about_feat_2_desc: { en: 'Production experience on six continents with a local network.', de: 'Produktionserfahrung auf sechs Kontinenten mit lokalem Netzwerk.' },
  about_exp: { en: 'Experience at the Peak', de: 'Erfahrung am Gipfel' },
  contact_title: { en: 'GET IN TOUCH', de: 'KONTAKT AUFNEHMEN' },
  contact_desc: { en: 'Do you have a project that should climb to the peak? Let\'s turn visions into reality together.', de: 'Haben Sie ein Projekt, das den Gipfel erklimmen soll? Lassen Sie uns gemeinsam Visionen in Realität verwandeln.' },
  contact_form_name: { en: 'Name', de: 'Name' },
  contact_form_email: { en: 'Email Address', de: 'E-Mail Adresse' },
  contact_form_msg: { en: 'Your Message', de: 'Ihre Nachricht' },
  contact_form_btn: { en: 'Send Request', de: 'Anfrage senden' },
  footer_mission: { en: 'Your success is our motivation. Quality through precision.', de: 'Ihr Erfolg ist unsere Motivation. Qualität durch Präzision.' },
  footer_menu: { en: 'Menu', de: 'Menü' },
  footer_legal: { en: 'Legal', de: 'Rechtliches' },
  footer_network: { en: 'Network', de: 'Netzwerk' },
  footer_privacy: { en: 'Privacy', de: 'Datenschutz' },
  footer_imprint: { en: 'Imprint', de: 'Impressum' },
  footer_terms: { en: 'Terms', de: 'AGB' }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string) => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useTranslation must be used within a LanguageProvider');
  return context;
};
