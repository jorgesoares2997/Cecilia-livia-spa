import React from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-20 flex items-center overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-accent/50 rounded-bl-full opacity-70"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-secondary/50 rounded-tr-full opacity-70"></div>
      </div>

      <div className="absolute -z-20 top-0 right-0 w-1/3 h-screen bg-gradient-to-bl from-accent/20 to-transparent"></div>
      <div className="absolute -z-20 bottom-0 left-0 w-1/3 h-screen bg-gradient-to-tr from-secondary/20 to-transparent"></div>

      {/* Floating circles */}
      <div
        className="absolute top-1/4 left-1/4 w-8 h-8 rounded-full bg-primary/20 animate-float"
        style={{ animationDelay: "0s" }}
      ></div>
      <div
        className="absolute top-1/3 right-1/3 w-12 h-12 rounded-full bg-accent/30 animate-float"
        style={{ animationDelay: "1.5s" }}
      ></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-6 h-6 rounded-full bg-secondary/40 animate-float"
        style={{ animationDelay: "0.8s" }}
      ></div>

      <div className="container mx-auto px-6 py-12 md:py-24 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 space-y-6 animate-fade-in">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Cuide de Si <span className="text-primary"> no Conforto</span> de
            Casa.
          </h1>
          <p className="text-lg text-foreground/80 max-w-xl">
            Experimente os tratamentos exclusivos do Cecília Lívia Spa - At Home
            e eleve sua autoestima com nossos cuidados personalizados, no seu
            lar. Agende sua sessão agora mesmo!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-medium"
            >
              Quero me Cuidar !
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/5"
            >
              Conhecer Serviços
            </Button>
          </div>
        </div>

        <div
          className="md:w-1/2 mt-12 md:mt-0 animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="relative mx-auto max-w-md">
            <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl bg-primary/10 -z-10"></div>
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&q=80"
                alt="Massagem Terapêutica"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
