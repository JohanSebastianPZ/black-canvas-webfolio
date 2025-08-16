import { useEffect, useState } from 'react';
import { ChevronDown, Download, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/20"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-gradient-to-r from-accent/20 to-primary/20 animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4 py-20 text-center relative z-10">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Greeting */}
          <p className="text-lg text-muted-foreground mb-4">
            Hola, soy
          </p>
          
          {/* Name */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-gradient">
            Sebastian Martinez
          </h1>
          
          {/* Tagline */}
          <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Creo experiencias digitales excepcionales con código limpio y diseño elegante
          </h2>
          
          {/* Description */}
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Especializado en desarrollo frontend y backend, transformo ideas en aplicaciones web modernas, 
            responsivas y optimizadas que impulsan el crecimiento de tu negocio.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              size="lg"
              className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity group text-white"
              onClick={() => scrollToSection('projects')}
            >
              Ver mis proyectos
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors group"
              onClick={() => window.open('/cv.pdf', '_blank')}
            >
              Descargar CV
              <Download className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-2 gap-8 max-w-2xl mx-auto text-center">
            {/*
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Años de experiencia</div>
            </div>
            */}
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Proyectos completados</div>
            </div>
            {/*
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">30+</div>
              <div className="text-sm text-muted-foreground">Clientes satisfechos</div>
            </div>
            */}
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Soporte disponible</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
      >
        <ChevronDown className="w-6 h-6" />
      </button>
    </section>
  );
};

export default Hero;