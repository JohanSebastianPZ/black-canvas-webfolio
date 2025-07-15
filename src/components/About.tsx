import { useEffect, useRef } from 'react';
import { Code, Smartphone, Globe, Zap, Award, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.fade-in-up');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('visible');
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: 'React & Next.js', level: 95 },
    { name: 'TypeScript', level: 90 },
    { name: 'Node.js', level: 85 },
    { name: 'Python', level: 80 },
    { name: 'PostgreSQL', level: 85 },
    { name: 'Docker', level: 75 },
  ];

  const services = [
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: 'Desarrollo Web',
      description: 'Aplicaciones web modernas y responsivas utilizando las últimas tecnologías'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-primary" />,
      title: 'Apps Móviles',
      description: 'Desarrollo de aplicaciones móviles nativas y multiplataforma'
    },
    {
      icon: <Code className="w-8 h-8 text-primary" />,
      title: 'Backend API',
      description: 'APIs robustas y escalables para potenciar tus aplicaciones'
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: 'Optimización',
      description: 'Mejora del rendimiento y optimización de aplicaciones existentes'
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: 'Consultoría',
      description: 'Asesoramiento técnico y arquitectura de soluciones digitales'
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: 'Mentoría',
      description: 'Formación y mentoría para equipos de desarrollo'
    },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-accent/5">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 fade-in-up">
            Sobre mí
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto fade-in-up">
            Desarrollador apasionado por crear soluciones digitales que marcan la diferencia
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="fade-in-up">
              <h3 className="text-2xl font-bold mb-4">Mi historia</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Con más de 5 años de experiencia en desarrollo web, he trabajado con startups, 
                empresas medianas y corporaciones, ayudándoles a digitalizar sus procesos y 
                crear experiencias excepcionales para sus usuarios.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Mi enfoque se centra en escribir código limpio, mantenible y escalable, 
                utilizando las mejores prácticas y tecnologías modernas para entregar 
                proyectos que superen las expectativas.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Cuando no estoy programando, me gusta contribuir a proyectos open source, 
                escribir sobre tecnología y mentor a otros desarrolladores en su camino 
                profesional.
              </p>
            </div>

            {/* Skills */}
            <div className="fade-in-up">
              <h4 className="text-xl font-semibold mb-4">Habilidades técnicas</h4>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="fade-in-up">
            <div className="relative">
              <div className="aspect-square bg-gradient-accent rounded-2xl flex items-center justify-center">
                <div className="text-6xl text-primary/20">
                  <Code className="w-32 h-32" />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="fade-in-up">
          <h3 className="text-2xl font-bold text-center mb-12">
            Servicios que ofrezco
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover-lift glass-effect border-border/20">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <h4 className="text-xl font-semibold mb-3">{service.title}</h4>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;