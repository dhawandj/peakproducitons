
import { Project, Service, Testimonial, TeamMember, Award } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Alpine Echoes',
    category: { en: 'Film', de: 'Film' },
    imageUrl: 'images/poster_1.jpg',
    location: { en: 'Bavarian Alps', de: 'Bayerische Alpen' },
    year: '2024'
  },
  {
    id: '2',
    title: 'Urban Silhouette',
    category: { en: 'Photo', de: 'Foto' },
    imageUrl: 'images/poster_2.jpg',
    location: { en: 'Munich City', de: 'München Innenstadt' },
    year: '2024'
  },
  {
    id: '3',
    title: 'The Summit Series',
    category: { en: 'Commercial', de: 'Commercial' },
    imageUrl: 'images/poster_3.jpg',
    location: { en: 'Chamonix, France', de: 'Chamonix, Frankreich' },
    year: '2023'
  },
  {
    id: '4',
    title: 'Midnight Motion',
    category: { en: 'Film', de: 'Film' },
    imageUrl: 'images/poster_4.jpg',
    location: { en: 'Berlin Nightlife', de: 'Berliner Nachtleben' },
    year: '2023'
  },
  {
    id: '5',
    title: 'Vogue Essentials',
    category: { en: 'Photo', de: 'Foto' },
    imageUrl: 'images/poster_5.jpg',
    location: { en: 'Paris Fashion Week', de: 'Paris Fashion Week' },
    year: '2024'
  },
  {
    id: '6',
    title: 'Tech Horizon',
    category: { en: 'Commercial', de: 'Commercial' },
    imageUrl: 'images/poster_6.jpg',
    location: { en: 'Munich Innovation Lab', de: 'München Innovation Lab' },
    year: '2023'
  },
  {
    id: '7',
    title: 'Nordic Light',
    category: { en: 'Documentary', de: 'Dokumentation' },
    imageUrl: 'images/poster_7.jpg',
    location: { en: 'Lofoten, Norway', de: 'Lofoten, Norwegen' },
    year: '2022'
  },
  {
    id: '8',
    title: 'Desert Mirage',
    category: { en: 'Film', de: 'Film' },
    imageUrl: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&q=80&w=1200',
    location: { en: 'Namib Desert', de: 'Namib Wüste' },
    year: '2023'
  },
  {
    id: '9',
    title: 'Coastal Flow',
    category: { en: 'Commercial', de: 'Commercial' },
    imageUrl: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&q=80&w=1200',
    location: { en: 'Amalfi Coast', de: 'Amalfiküste' },
    year: '2024'
  }
];

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: { en: 'Cinematic Film', de: 'Kinofilm' },
    description: { en: 'State-of-the-art 8K narrative storytelling that captures the soul of your brand.', de: 'Modernstes 8K-Storytelling, das die Seele Ihrer Marke einfängt.' },
    icon: 'Camera'
  },
  {
    id: 's2',
    title: { en: 'Brand Photography', de: 'Markenfotografie' },
    description: { en: 'Visual assets designed for high-end digital and print campaigns with surgical precision.', de: 'Visuelle Assets, die für High-End-Digital- und Printkampagnen mit chirurgischer Präzision entwickelt wurden.' },
    icon: 'Image'
  },
  {
    id: 's3',
    title: { en: 'Global Logistics', de: 'Globale Logistik' },
    description: { en: 'A worldwide network of scouts and fixers ensuring seamless production in any terrain.', de: 'Ein weltweites Netzwerk von Scouts und Fixern, das eine nahtlose Produktion in jedem Gelände gewährleistet.' },
    icon: 'Globe'
  },
  {
    id: 's4',
    title: { en: 'Post-Mastery', de: 'Post-Produktion' },
    description: { en: 'Full-suite editing, Dolby Atmos sound design, and world-class color grading.', de: 'Komplette Suite für Schnitt, Dolby Atmos Sounddesign und erstklassiges Color Grading.' },
    icon: 'Edit3'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote: { 
      en: "Peak Productions doesn't just deliver video; they deliver vision. Their precision is unmatched in the industry.", 
      de: "Peak Productions liefert nicht nur Videos, sie liefern Visionen. Ihre Präzision ist in der Branche unerreicht." 
    },
    author: "Maximilian Richter",
    role: { en: "CMO", de: "Marketingleiter" },
    company: "Automotive Excellence Gmbh"
  },
  {
    id: 't2',
    quote: { 
      en: "Working with them in the Alps was seamless. They are true masters of their craft and their environment.", 
      de: "Die Zusammenarbeit in den Alpen war nahtlos. Sie sind wahre Meister ihres Fachs und ihrer Umgebung." 
    },
    author: "Sarah Jenkins",
    role: { en: "Creative Director", de: "Kreativdirektorin" },
    company: "Global Peak Outdoors"
  }
];

export const TEAM: TeamMember[] = [
  {
    id: 'tm1',
    name: "Lukas Bergmann",
    role: { en: "Founder & Director", de: "Gründer & Regisseur" },
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 'tm2',
    name: "Elena Fischer",
    role: { en: "Head of Photography", de: "Leitung Fotografie" },
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 'tm3',
    name: "Marc Weber",
    role: { en: "Lead Post-Production", de: "Leitung Post-Produktion" },
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400"
  }
];

export const AWARDS: Award[] = [
  {
    id: 'a1',
    name: "Cannes Corporate Media",
    year: "2023",
    category: { en: "Best Cinematography", de: "Beste Kameraführung" }
  },
  {
    id: 'a2',
    name: "German Design Award",
    year: "2022",
    category: { en: "Excellent Communications Design", de: "Exzellentes Kommunikationsdesign" }
  }
];
