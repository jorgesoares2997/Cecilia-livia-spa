import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="section-padding bg-gradient-to-b from-secondary/20 to-background"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="lg:w-2/5">
            <div className="relative">
              <div className="relative z-10 overflow-hidden rounded-2xl shadow-xl">
                <img
                  src="../../src/images/ceci.jpeg"
                  alt="Terapeuta profissional"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-accent/30 rounded-2xl transform -rotate-3 -z-10"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
            </div>
          </div>

          <div className="lg:w-3/5">
            <h2 className="text-sm uppercase text-primary font-medium tracking-wider">
              Sobre Mim
            </h2>
            <h3 className="mt-2 text-3xl md:text-4xl font-serif font-bold">
              Cecília Lívia
            </h3>
            <p className="mt-4 text-foreground/70">
              <span className="text-xl font-medium text-foreground">
                Especialista em Estética e Fundadora do Cecília Lívia Spa - At
                Home
              </span>
            </p>

            <div className="mt-6 space-y-4 text-foreground/80">
              <p>
                Cecília Lívia é uma profissional apaixonada pela arte do
                bem-estar e do autocuidado. Especialista em estética e com anos
                de experiência no mercado, ela fundou o Cecília Lívia Spa - At
                Home com um propósito claro: transformar vidas ao proporcionar
                experiências únicas e personalizadas de relaxamento e
                revitalização, sem que seus clientes precisem sair de casa.
              </p>
              <p>
                Cecília Lívia é uma profissional apaixonada pela arte do
                bem-estar e do autocuidado. Especialista em estética e com anos
                de experiência no mercado, ela fundou o Cecília Lívia Spa - At
                Home com um propósito claro: transformar vidas ao proporcionar
                experiências únicas e personalizadas de relaxamento e
                revitalização, sem que seus clientes precisem sair de casa.
              </p>
              <p>
                Cecília Lívia é uma profissional apaixonada pela arte do
                bem-estar e do autocuidado. Especialista em estética e com anos
                de experiência no mercado, ela fundou o Cecília Lívia Spa - At
                Home com um propósito claro: transformar vidas ao proporcionar
                experiências únicas e personalizadas de relaxamento e
                revitalização, sem que seus clientes precisem sair de casa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
