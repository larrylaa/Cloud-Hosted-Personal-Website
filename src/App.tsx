import { ThemeProvider } from './context/ThemeContext';
import { useCursorGlow } from './hooks/useCursorGlow';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Experience } from './components/sections/Experience';
import { Skills } from './components/sections/Skills';
import { Certifications } from './components/sections/Certifications';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';

function AppContent() {
  useCursorGlow();

  return (
    <div style={{ backgroundColor: 'var(--bg-body)' }}>
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Certifications />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
