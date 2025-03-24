
import React from 'react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="lg:w-2/5">
            <div className="relative">
              <div className="relative z-10 overflow-hidden rounded-2xl shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1591343395082-e120087004b4?auto=format&fit=crop&q=80"
                  alt="Terapeuta profissional"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-accent/30 rounded-2xl transform -rotate-3 -z-10"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
            </div>
          </div>
          
          <div className="lg:w-3/5">
            <h2 className="text-sm uppercase text-primary font-medium tracking-wider">Sobre Mim</h2>
            <h3 className="mt-2 text-3xl md:text-4xl font-serif font-bold">Maria Oliveira</h3>
            <p className="mt-4 text-foreground/70">
              <span className="text-xl font-medium text-foreground">Terapeuta Certificada com mais de 10 anos de experiência</span>
            </p>
            
            <div className="mt-6 space-y-4 text-foreground/80">
              <p>
                Olá! Sou Maria, uma terapeuta dedicada a ajudar as pessoas a reconectarem-se com seu corpo e mente através do poder da massagem terapêutica. Minha jornada começou há mais de uma década, quando descobri como o toque terapêutico pode transformar profundamente a saúde física e mental.
              </p>
              <p>
                Sou certificada em diversas técnicas de massagem, incluindo Terapia de Tecidos Profundos, Massagem Sueca, Aromaterapia e Reflexologia. Minha abordagem é personalizada para cada cliente, combinando diferentes métodos para criar uma experiência de cura verdadeiramente única.
              </p>
              <p>
                Acredito que o verdadeiro bem-estar vem do equilíbrio entre corpo, mente e espírito. Em cada sessão, meu objetivo é não apenas aliviar a tensão física, mas também proporcionar um espaço seguro para relaxamento mental e renovação emocional.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-lg shadow-sm">
                <h4 className="text-3xl font-bold text-primary">10+</h4>
                <p className="text-sm text-foreground/70">Anos de Experiência</p>
              </div>
              <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-lg shadow-sm">
                <h4 className="text-3xl font-bold text-primary">5</h4>
                <p className="text-sm text-foreground/70">Certificações</p>
              </div>
              <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-lg shadow-sm">
                <h4 className="text-3xl font-bold text-primary">1000+</h4>
                <p className="text-sm text-foreground/70">Clientes Satisfeitos</p>
              </div>
              <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-lg shadow-sm">
                <h4 className="text-3xl font-bold text-primary">8</h4>
                <p className="text-sm text-foreground/70">Técnicas Dominadas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
