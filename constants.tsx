
import { Project, Service } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Alpine Echoes',
    category: { en: 'Film', de: 'Film' },
    imageUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1200',
    location: { en: 'Bavarian Alps', de: 'Bayerische Alpen' },
    // Fix: Added missing required 'year' property
    year: '2024'
  },
  {
    id: '2',
    title: 'Urban Silhouette',
    category: { en: 'Photo', de: 'Foto' },
    imageUrl: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=1200',
    location: { en: 'Munich City', de: 'München Innenstadt' },
    // Fix: Added missing required 'year' property
    year: '2024'
  },
  {
    id: '3',
    title: 'The Summit Series',
    category: { en: 'Commercial', de: 'Commercial' },
    imageUrl: 'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&q=80&w=1200',
    location: { en: 'Chamonix', de: 'Chamonix' },
    // Fix: Added missing required 'year' property
    year: '2023'
  },
  {
    id: '4',
    title: 'Midnight Motion',
    category: { en: 'Film', de: 'Film' },
    imageUrl: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=1200',
    location: { en: 'Global Tour', de: 'Weltweite Tour' },
    // Fix: Added missing required 'year' property
    year: '2023'
  },
  {
    id: '5',
    title: 'Vogue Essentials',
    category: { en: 'Photo', de: 'Foto' },
    imageUrl: 'https://images.unsplash.com/photo-1537832816519-689ad163238b?auto=format&fit=crop&q=80&w=1200',
    location: { en: 'Paris', de: 'Paris' },
    // Fix: Added missing required 'year' property
    year: '2024'
  },
  {
    id: '6',
    title: 'Tech Horizon',
    category: { en: 'Commercial', de: 'Commercial' },
    imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1200',
    location: { en: 'Munich HQ', de: 'München HQ' },
    // Fix: Added missing required 'year' property
    year: '2023'
  }
];

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: { en: 'Film Production', de: 'Filmproduktion' },
    description: { en: 'From concept to final cut – we deliver high-end cinematic experiences with technical perfection.', de: 'Vom Konzept bis zum finalen Schnitt – wir liefern High-End-Kinoerlebnisse mit technischer Perfektion.' },
    icon: 'Camera'
  },
  {
    id: 's2',
    title: { en: 'Photography', de: 'Fotografie' },
    description: { en: 'Images that define brands. Professional studio and on-location expertise at the highest level.', de: 'Bilder, die Marken definieren. Professionelle Studio- und On-Location-Expertise auf höchstem Niveau.' },
    icon: 'Image'
  },
  {
    id: 's3',
    title: { en: 'Location Scouting', de: 'Location Scouting' },
    description: { en: 'We find the perfect "peak" for your vision – worldwide and with Bavarian thoroughness.', de: 'Wir finden den perfekten „Gipfel“ für Ihre Vision – weltweit und mit bayerischer Gründlichkeit.' },
    icon: 'MapPin'
  },
  {
    id: 's4',
    title: { en: 'Post-Production', de: 'Post-Produktion' },
    description: { en: 'Color Grading, Sound Design and VFX that take your story to the next level.', de: 'Color Grading, Sound Design und VFX, die Ihre Geschichte auf das nächste Level heben.' },
    icon: 'Edit3'
  }
];
