import { useEffect, useRef } from 'react';
import { Code, Smartphone, Globe, Zap, Award, Users, CodepenIcon } from 'lucide-react';
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
    { name: 'Java', level: 60 },
    { name: 'SQL', level: 50 },
    { name: 'Linux', level: 40 },
    { name: 'JavaScript', level: 40 },
    { name: 'Redes', level: 50 },
    { name: 'Docker', level: 50 },
    { name: 'Git', level: 50 },
  ];

  // const services = [ Next Implementation
  //   {
  //     icon: <Globe className="w-8 h-8 text-primary" />,
  //     title: 'Desarrollo Web',
  //     description: 'Aplicaciones web modernas y responsivas utilizando las últimas tecnologías'
  //   },
  //   {
  //     icon: <Smartphone className="w-8 h-8 text-primary" />,
  //     title: 'Apps Móviles',
  //     description: 'Desarrollo de aplicaciones móviles nativas y multiplataforma'
  //   },
  //   {
  //     icon: <Code className="w-8 h-8 text-primary" />,
  //     title: 'Backend API',
  //     description: 'APIs robustas y escalables para potenciar tus aplicaciones'
  //   },
  //   {
  //     icon: <Zap className="w-8 h-8 text-primary" />,
  //     title: 'Optimización',
  //     description: 'Mejora del rendimiento y optimización de aplicaciones existentes'
  //   },
  //   {
  //     icon: <Award className="w-8 h-8 text-primary" />,
  //     title: 'Consultoría',
  //     description: 'Asesoramiento técnico y arquitectura de soluciones digitales'
  //   },
  //   {
  //     icon: <Users className="w-8 h-8 text-primary" />,
  //     title: 'Mentoría',
  //     description: 'Formación y mentoría para equipos de desarrollo'
  //   },
  // ];

  return (
    <section id="about" ref={sectionRef} className=" bg-accent/5">
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
              Soy un desarrollador web en formación con muchas ganas de aprender y crecer en el mundo de la tecnología.
              Durante mi aprendizaje he trabajado en proyectos personales y ejercicios que me han permitido
              conocer las bases del desarrollo web y las herramientas modernas.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Mi objetivo es seguir mejorando cada día, escribir código limpio y adquirir experiencia trabajando en
              proyectos reales, colaborando con otros y resolviendo problemas del mundo real.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Cuando no estoy estudiando o practicando, me gusta explorar nuevas tecnologías, leer sobre tendencias
              del sector y compartir lo que voy aprendiendo con otros.
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
            <div className="aspect-square bg-gradient-accent rounded-2xl flex items-center justify-center overflow-hidden">
              <img
                src="./imagen2.png"
                alt="Mi imagen"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        </div>

        {/* Services Next Implementation
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
        </div> */}
      </div>
    </section>
  );
};

export default About;