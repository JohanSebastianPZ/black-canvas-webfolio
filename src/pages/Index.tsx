import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Hiring from '@/components/Hiring';
import Contact from '@/components/Contact';
import Blog from '@/components/Blog';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Hiring />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
