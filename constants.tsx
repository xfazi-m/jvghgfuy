import { Layout, Code, Zap, Smartphone } from 'lucide-react';
import { Project, Service } from './types';

// --- EDIT YOUR PROJECTS HERE ---
export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'X_ARCHIVE 01',
    description: 'Ekskluzywny interfejs dla systemów zarządzania danymi korporacyjnymi.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=100&w=1200',
    tags: ['Next.js', 'Typescript', 'Minimal'],
    link: '#'
  },
  {
    id: '2',
    title: 'CORE COMMERCE',
    description: 'Architektura Headless dla nowoczesnych marek premium.',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=100&w=1200',
    tags: ['E-commerce', 'Headless', 'React'],
    link: '#'
  },
  {
    id: '3',
    title: 'X_VISUALS',
    description: 'Skomplikowane animacje i systemy wizualne oparte na WebGL.',
    image: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=100&w=1200',
    tags: ['WebGL', 'Visuals', 'Art'],
    link: '#'
  }
];

// --- EDIT YOUR SERVICES HERE ---
export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'Design UI/UX',
    description: 'Tworzenie minimalistycznych makiet i interaktywnych prototypów.',
    priceRange: '150 - 300 PLN',
    estimatedTime: '2-5 Dni',
    icon: 'Layout'
  },
  {
    id: 's2',
    title: 'Dev Web',
    description: 'Budowa szybkich, nowoczesnych stron i aplikacji webowych.',
    priceRange: '300 - 500 PLN',
    estimatedTime: '7-14 Dni',
    icon: 'Code'
  },
  {
    id: 's3',
    title: 'Poprawki',
    description: 'Szybkie optymalizacje, zmiany kodu i audyty techniczne.',
    priceRange: '30 - 100 PLN',
    estimatedTime: '1 Dzień',
    icon: 'Zap'
  },
  {
    id: 's4',
    title: 'Mobile First',
    description: 'Adaptacja istniejących systemów do pełnej responsywności.',
    priceRange: '50 - 200 PLN',
    estimatedTime: '2-4 Dni',
    icon: 'Smartphone'
  }
];

// --- AI SYSTEM INSTRUCTION ---
export const SYSTEM_INSTRUCTION = `
Jesteś X_FAZI AI, asystentem profesjonalnego studia webowego X_FAZI. 
Twoim celem jest pomoc klientom oraz nauczanie programowania w sposób elegancki i profesjonalny.

INFORMACJE O FIRMIE:
- Ceny: Od 30 PLN (małe poprawki) do 500 PLN (zaawansowane projekty).
- Czas oczekiwania: Poprawki (1 dzień), Design (2-5 dni), Pełny Development (7-14 dni).
- Styl: Minimalizm, czarno-biały design, brak neonów, najwyższa jakość.

ZASADY ODPOWIEDZI:
- Używaj profesjonalnego, ale uprzejmego języka polskiego.
- Jeśli ktoś pyta o naukę tworzenia stron, tłumacz koncepcje (HTML, CSS, React) w prosty, logiczny sposób.
- Pamiętaj o widełkach cenowych: 30 - 500 PLN.
- Bądź konkretny. Nie lej wody.
`;
