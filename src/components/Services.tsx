
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    id: 1,
    title: "Massagem Relaxante",
    description: "Uma massagem suave que promove relaxamento profundo, alivia o estresse e melhora a qualidade do sono.",
    duration: "60 min",
    price: "R$ 120",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    title: "Massagem Terapêutica",
    description: "Técnica focada em aliviar tensões musculares específicas e dores crônicas através de pressão controlada.",
    duration: "75 min",
    price: "R$ 150",
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    title: "Aromaterapia",
    description: "Combinação de massagem relaxante com óleos essenciais terapêuticos para equilibrar corpo e mente.",
    duration: "90 min",
    price: "R$ 180",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80"
  },
  {
    id: 4,
    title: "Pedras Quentes",
    description: "Massagem com pedras vulcânicas aquecidas que proporcionam relaxamento muscular profundo e bem-estar.",
    duration: "90 min",
    price: "R$ 190",
    image: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&q=80"
  }
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm uppercase text-primary font-medium tracking-wider">Nossos Serviços</h2>
          <h3 className="mt-2 text-3xl md:text-4xl font-serif font-bold">Experiências de Bem-estar Personalizadas</h3>
          <p className="mt-4 text-foreground/70">
            Cada tratamento é cuidadosamente adaptado às suas necessidades específicas, oferecendo uma experiência de cura verdadeiramente transformadora.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={service.id} className="overflow-hidden hover:shadow-lg transition-shadow glass-card">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardHeader className="px-4 pt-5 pb-0">
                <CardTitle className="font-serif text-xl text-foreground">{service.title}</CardTitle>
                <CardDescription className="flex items-center justify-between mt-2">
                  <span className="text-primary font-medium">{service.price}</span>
                  <span className="text-muted-foreground">{service.duration}</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="px-4 py-3">
                <p className="text-sm text-foreground/70">{service.description}</p>
              </CardContent>
              <CardFooter className="px-4 pb-5 pt-0">
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/5">
                  Reservar
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Button className="bg-primary hover:bg-primary/90 text-white" size="lg">
            Ver Todos os Serviços
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
