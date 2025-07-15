import { useEffect, useRef } from 'react';
import { Clock, CheckCircle, Users, Zap, DollarSign, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Hiring = () => {
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      title: 'Desarrollo Frontend',
      description: 'Interfaces modernas y responsivas con React, Vue.js o Angular',
      price: 'Desde $30/hora',
      duration: '2-6 semanas',
      features: [
        'Diseño responsivo',
        'Optimización SEO',
        'Animaciones suaves',
        'Pruebas unitarias',
        'Documentación completa'
      ]
    },
    {
      title: 'Desarrollo Backend',
      description: 'APIs robustas y escalables con Node.js, Python o PHP',
      price: 'Desde $35/hora',
      duration: '3-8 semanas',
      features: [
        'API REST/GraphQL',
        'Base de datos optimizada',
        'Autenticación segura',
        'Monitoreo y logs',
        'Documentación API'
      ]
    },
    {
      title: 'Aplicación Completa',
      description: 'Desarrollo fullstack desde el concepto hasta el despliegue',
      price: 'Desde $2500',
      duration: '6-12 semanas',
      features: [
        'Desarrollo completo',
        'Diseño UI/UX',
        'Hosting y dominio',
        'SSL y seguridad',
        'Soporte 3 meses'
      ]
    }
  ];

  const process = [
    {
      step: 1,
      title: 'Consulta inicial',
      description: 'Discutimos tu proyecto, objetivos y requerimientos',
      icon: <Users className="w-6 h-6" />
    },
    {
      step: 2,
      title: 'Propuesta y cotización',
      description: 'Recibe una propuesta detallada con cronograma y presupuesto',
      icon: <DollarSign className="w-6 h-6" />
    },
    {
      step: 3,
      title: 'Desarrollo',
      description: 'Trabajo en tu proyecto con actualizaciones regulares',
      icon: <Zap className="w-6 h-6" />
    },
    {
      step: 4,
      title: 'Entrega y soporte',
      description: 'Entrega del proyecto finalizado con documentación y soporte',
      icon: <CheckCircle className="w-6 h-6" />
    }
  ];

  const availability = [
    { day: 'Lunes - Viernes', time: '9:00 AM - 6:00 PM' },
    { day: 'Respuesta promedio', time: '< 2 horas' },
    { day: 'Disponibilidad', time: 'Inmediata' },
    { day: 'Zona horaria', time: 'GMT-5 (Colombia)' }
  ];

  return (
    <section id="hiring" ref={sectionRef} className="py-20 bg-accent/5">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 fade-in-up">
            Servicios de desarrollo
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto fade-in-up">
            Soluciones técnicas profesionales adaptadas a las necesidades de tu negocio
          </p>
        </div>

        {/* Services */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="hover-lift glass-effect border-border/20 fade-in-up">
              <CardHeader>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <p className="text-muted-foreground">{service.description}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-5 h-5 text-primary" />
                      <span className="font-semibold">{service.price}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{service.duration}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium">Incluye:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button
                    onClick={() => scrollToSection('contact')}
                    className="w-full mt-6"
                  >
                    Solicitar cotización
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process */}
        <div className="mb-16 fade-in-up">
          <h3 className="text-2xl font-bold text-center mb-12">
            Proceso de trabajo
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-primary-foreground">
                      {step.icon}
                    </div>
                  </div>
                  <Badge variant="secondary" className="absolute -top-2 -right-2">
                    {step.step}
                  </Badge>
                </div>
                <h4 className="font-semibold mb-2">{step.title}</h4>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Availability */}
        <div className="grid md:grid-cols-2 gap-8 items-center fade-in-up">
          <div>
            <h3 className="text-2xl font-bold mb-6">Disponibilidad</h3>
            <div className="space-y-4">
              {availability.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-card rounded-lg border border-border/20">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span className="font-medium">{item.day}</span>
                  </div>
                  <span className="text-muted-foreground">{item.time}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gradient-accent p-8 rounded-2xl">
            <h4 className="text-2xl font-bold mb-4">¿Listo para comenzar?</h4>
            <p className="text-muted-foreground mb-6">
              Conversemos sobre tu proyecto y cómo puedo ayudarte a llevarlo al siguiente nivel.
            </p>
            <div className="space-y-4">
              <Button
                onClick={() => scrollToSection('contact')}
                className="w-full"
                size="lg"
              >
                Iniciar proyecto
              </Button>
              <Button
                variant="outline"
                onClick={() => window.open('https://calendly.com/tu-usuario', '_blank')}
                className="w-full"
              >
                Agendar reunión
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hiring;