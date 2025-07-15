import { useEffect, useRef } from 'react';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Blog = () => {
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

  const blogPosts = [
    {
      id: 1,
      title: 'Mejores prácticas en React 2024',
      excerpt: 'Descubre las técnicas más actualizadas para escribir código React más limpio, eficiente y mantenible en 2024.',
      date: '2024-01-15',
      readTime: '5 min',
      category: 'React',
      tags: ['React', 'JavaScript', 'Frontend'],
      featured: true
    },
    {
      id: 2,
      title: 'Optimización de rendimiento web',
      excerpt: 'Guía completa para mejorar la velocidad de carga de tu sitio web y ofrecer una mejor experiencia de usuario.',
      date: '2024-01-10',
      readTime: '8 min',
      category: 'Performance',
      tags: ['Performance', 'Web', 'Optimization'],
      featured: true
    },
    {
      id: 3,
      title: 'Introducción a TypeScript',
      excerpt: 'Todo lo que necesitas saber para comenzar a usar TypeScript en tus proyectos JavaScript.',
      date: '2024-01-05',
      readTime: '6 min',
      category: 'TypeScript',
      tags: ['TypeScript', 'JavaScript', 'Types'],
      featured: false
    },
    {
      id: 4,
      title: 'Diseño de APIs RESTful',
      excerpt: 'Principios fundamentales para crear APIs REST bien diseñadas, escalables y fáciles de mantener.',
      date: '2024-01-01',
      readTime: '10 min',
      category: 'Backend',
      tags: ['API', 'REST', 'Backend'],
      featured: false
    },
    {
      id: 5,
      title: 'Docker para desarrolladores',
      excerpt: 'Aprende a containerizar tus aplicaciones y simplificar tu flujo de desarrollo con Docker.',
      date: '2023-12-28',
      readTime: '12 min',
      category: 'DevOps',
      tags: ['Docker', 'DevOps', 'Containers'],
      featured: false
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = blogPosts.filter(post => !post.featured).slice(0, 3);

  return (
    <section id="blog" ref={sectionRef} className="py-20 bg-accent/5">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 fade-in-up">
            Blog
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto fade-in-up">
            Comparto conocimientos, tips y tendencias sobre desarrollo web y tecnología
          </p>
        </div>

        {/* Featured Posts */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold fade-in-up">Artículos destacados</h3>
            <Button
              variant="outline"
              className="fade-in-up"
              onClick={() => window.open('/blog', '_blank')}
            >
              Ver todos los artículos
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <Card key={post.id} className="hover-lift glass-effect border-border/20 group fade-in-up">
                <div className="aspect-video bg-gradient-accent flex items-center justify-center">
                  <div className="text-primary/30">
                    <Tag className="w-16 h-16" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Badge variant="secondary">{post.category}</Badge>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {formatDate(post.date)}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h4>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button
                    variant="ghost"
                    className="p-0 h-auto text-primary hover:text-primary/80 group"
                  >
                    Leer más
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Posts */}
        <div className="fade-in-up">
          <h3 className="text-2xl font-bold mb-8">Artículos recientes</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
              <Card key={post.id} className="hover-lift glass-effect border-border/20 group">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary" className="text-xs">
                      {post.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h4>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      {formatDate(post.date)}
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="p-0 h-auto text-primary hover:text-primary/80 group"
                    >
                      Leer
                      <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 fade-in-up">
          <Card className="bg-gradient-accent border-border/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">
                Suscríbete al newsletter
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Recibe los últimos artículos, tips y noticias sobre desarrollo web directamente en tu bandeja de entrada.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="tu@email.com"
                  className="flex-1 px-4 py-2 bg-background/50 border border-border/50 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <Button className="bg-gradient-primary hover:opacity-90">
                  Suscribirse
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                Sin spam. Solo contenido de calidad. Puedes darte de baja en cualquier momento.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Blog;