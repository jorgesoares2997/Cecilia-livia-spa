
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, MessageCircle } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm uppercase text-primary font-medium tracking-wider">Contato</h2>
          <h3 className="mt-2 text-3xl md:text-4xl font-serif font-bold">Agende Sua Sessão</h3>
          <p className="mt-4 text-foreground/70">
            Estamos prontos para ajudar você em sua jornada para o bem-estar. Entre em contato para agendar uma consulta ou esclarecer dúvidas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="bg-white/90 backdrop-blur-sm shadow-md hover:shadow-lg transition-all">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-medium text-lg mb-2">Endereço</h4>
              <p className="text-foreground/70">
                Av. Paulista, 1000<br />
                São Paulo, SP<br />
                CEP: 01310-100
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/90 backdrop-blur-sm shadow-md hover:shadow-lg transition-all">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-medium text-lg mb-2">Telefone</h4>
              <p className="text-foreground/70">
                (11) 98765-4321<br />
                (11) 3456-7890
              </p>
              <p className="mt-2 text-sm text-foreground/50">
                Segunda à Sexta: 9h às 18h<br />
                Sábados: 9h às 14h
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/90 backdrop-blur-sm shadow-md hover:shadow-lg transition-all">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <MessageCircle className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-medium text-lg mb-2">Email</h4>
              <p className="text-foreground/70">
                contato@serenity.com.br<br />
                agendamento@serenity.com.br
              </p>
              <p className="mt-2 text-sm text-foreground/50">
                Responderemos em até 24 horas
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-16 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8">
          <h4 className="text-2xl font-serif font-bold mb-6 text-center">Envie uma Mensagem</h4>
          
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground/70 mb-1">Nome</label>
              <Input id="name" placeholder="Seu nome" className="w-full" />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground/70 mb-1">Email</label>
              <Input id="email" type="email" placeholder="seu.email@exemplo.com" className="w-full" />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-foreground/70 mb-1">Telefone</label>
              <Input id="phone" placeholder="(00) 00000-0000" className="w-full" />
            </div>
            
            <div>
              <label htmlFor="service" className="block text-sm font-medium text-foreground/70 mb-1">Serviço de Interesse</label>
              <select id="service" className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring">
                <option value="">Selecione um serviço</option>
                <option value="relaxante">Massagem Relaxante</option>
                <option value="terapeutica">Massagem Terapêutica</option>
                <option value="aromaterapia">Aromaterapia</option>
                <option value="pedras">Pedras Quentes</option>
              </select>
            </div>
            
            <div className="md:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-foreground/70 mb-1">Mensagem</label>
              <Textarea id="message" placeholder="Sua mensagem" className="w-full min-h-[120px]" />
            </div>
            
            <div className="md:col-span-2 text-center">
              <Button type="submit" className="bg-primary hover:bg-primary/90 text-white px-8" size="lg">
                Enviar Mensagem
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
