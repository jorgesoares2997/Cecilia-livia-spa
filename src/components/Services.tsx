import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";

const services = [
  {
    id: 1,
    title: "Drenagem Linfática (Método Renata França)",
    description: "Reduza inchaço e celulite com resultados imediatos.",
    duration: "60 min",
    price: "R$ 200",
    image: "public/images/perna.jpeg",
  },
  {
    id: 2,
    title: "Massagem Modeladora",
    description:
      "Defina sua silhueta com técnicas avançadas de modelagem corporal.",
    duration: "75 min",
    price: "R$ 180",
    image: "public/images/barriga2.jpeg",
  },
  {
    id: 3,
    title: "Limpeza de Pele",
    description:
      "Pele hidratada e radiante, com uma massagem facial relaxante.",
    duration: "60 min",
    price: "R$ 150",
    image: "public/images/pedra2.jpeg",
  },
  {
    id: 4,
    title: "Spa da Noiva",
    description:
      "Relaxamento completo antes do seu grande dia, com massagens, escalda pés e cuidados especiais.",
    duration: "120 min",
    price: "R$ 300",
    image: "public/images/janela.jpeg",
  },
  {
    id: 5,
    title: "Massagem para Gestantes",
    description:
      "Alívio das dores e cuidados com a pele, em um momento de conexão com você mesma.",
    duration: "75 min",
    price: "R$ 170",
    image: "public/images/gestante.jpeg",
  },
  {
    id: 6,
    title: "Spa Detox",
    description:
      "Desintoxique seu corpo com esfoliação, massagem e manta térmica.",
    duration: "90 min",
    price: "R$ 220",
    image: "public/images/rosas.jpeg",
  },
  {
    id: 7,
    title: "Massagem Relaxante com Liberação Miofascial",
    description: "Alivie tensões musculares e dores com técnicas específicas.",
    duration: "90 min",
    price: "R$ 200",
    image: "public/images/bola.jpeg",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="section-padding bg-gradient-to-b from-background to-secondary/20"
    >
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm uppercase text-primary font-medium tracking-wider">
            Nossos Serviços
          </h2>
          <h3 className="mt-2 text-3xl md:text-4xl font-serif font-bold">
            Experiências de Bem-estar Personalizadas
          </h3>
          <p className="mt-4 text-foreground/70">
            No Cecília Lívia Spa - At Home, oferecemos uma variedade de serviços
            pensados para proporcionar bem-estar e realçar sua beleza. Escolha o
            tratamento perfeito para você:
          </p>
        </div>

        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          pagination={{ clickable: true }}
          navigation
          className="my-10"
        >
          {services.map((service) => (
            <SwiperSlide key={service.id}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow glass-card">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardHeader className="px-4 pt-5 pb-0">
                  <CardTitle className="font-serif text-xl h-12 text-foreground">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-4 min-h-32 py-3">
                  <p className="text-sm text-foreground/70">
                    {service.description}
                  </p>
                </CardContent>
                <CardFooter className="px-4 pb-5 pt-0">
                  <Button
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary/5"
                  >
                    Reservar
                  </Button>
                </CardFooter>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="text-center mt-16">
          <Button
            className="bg-primary hover:bg-primary/90 text-white"
            size="lg"
          >
            Agendar uma conversa
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
