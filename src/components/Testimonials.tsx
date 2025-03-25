import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    name: "Marina S.",
    role: "Cliente",
    quote:
      "A experiência foi incrível! Me senti renovada e com uma energia incrível após a drenagem. Cecília é uma verdadeira profissional.",
  },
  {
    id: 2,
    name: "Ana L.",
    role: "Noiva",
    quote:
      "O Spa da Noiva foi o momento de paz que eu precisava antes do meu casamento. A massagem e os cuidados foram maravilhosos!",
  },

  {
    id: 5,
    name: "Fernando G.",
    role: "Aventureiro",
    quote:
      "Depois de uma semana intensa de trilhas e esportes radicais, a sessão de relaxamento foi essencial para minha recuperação. Recomendo demais!",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-accent/20">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm uppercase text-primary font-medium tracking-wider">
            Depoimentos
          </h2>
          <h3 className="mt-2 text-3xl md:text-4xl font-serif font-bold">
            O Que Dizem Nossos Clientes
          </h3>
          <p className="mt-4 text-foreground/70">
            Histórias reais de pessoas que experimentaram o poder transformador
            de nossas terapias de massagem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="bg-white/90 backdrop-blur-sm hover:shadow-lg transition-all duration-300 h-full"
            >
              <CardContent className="p-8 flex flex-col h-full">
                <div className="mb-6">
                  <svg
                    width="40"
                    height="32"
                    viewBox="0 0 40 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-primary/30"
                  >
                    <path
                      d="M11.528 31.2001C8.362 31.2001 5.616 30.0801 3.29 27.8401C1.098 25.4641 0.002 22.2801 0.002 18.2881C0.002 14.1601 1.434 10.1921 4.298 6.3841C7.162 2.5761 11.13 0.112098 16.202 -0.0319021L17.21 4.6001C13.642 5.1841 10.84 6.6161 8.802 8.8961C6.764 11.1761 5.842 13.4881 6.038 15.8321C6.43 15.7361 6.868 15.6881 7.352 15.6881C9.082 15.6881 10.546 16.2561 11.744 17.3921C12.942 18.5281 13.54 20.0241 13.54 21.8801C13.54 23.9041 12.87 25.5601 11.528 26.8481C10.186 28.1361 8.614 28.7801 6.812 28.7801L11.528 31.2001ZM31.362 31.2001C28.196 31.2001 25.45 30.0801 23.124 27.8401C20.932 25.4641 19.836 22.2801 19.836 18.2881C19.836 14.1601 21.268 10.1921 24.132 6.3841C26.996 2.5761 30.964 0.112098 36.036 -0.0319021L37.044 4.6001C33.476 5.1841 30.674 6.6161 28.636 8.8961C26.598 11.1761 25.676 13.4881 25.872 15.8321C26.264 15.7361 26.702 15.6881 27.186 15.6881C28.916 15.6881 30.38 16.2561 31.578 17.3921C32.776 18.5281 33.374 20.0241 33.374 21.8801C33.374 23.9041 32.704 25.5601 31.362 26.8481C30.02 28.1361 28.448 28.7801 26.646 28.7801L31.362 31.2001Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>

                <p className="text-foreground/80 flex-grow mb-6 italic">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center mt-auto">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4"></div>
                  <div>
                    <h4 className="font-medium text-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-foreground/60">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
