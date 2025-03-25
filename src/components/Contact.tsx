import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  exit: { opacity: 0, y: -50, transition: { duration: 0.4, ease: "easeIn" } },
};

const faqVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.6, ease: "easeIn" } },
};

const faqContentVariants = {
  open: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.3, ease: "easeOut" },
  },
  closed: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

const Contact = () => {
  const [openFaq, setOpenFaq] = useState(null); // Controla qual FAQ está aberto

  const handleToggle = (index) => {
    setOpenFaq(openFaq === index ? null : index); // Alterna entre abrir e fechar
  };

  const faqs = [
    {
      question: "Como funcionam as sessões a domicílio?",
      answer:
        "Cecília Lívia Spa leva o conforto do spa até sua casa. Basta agendar a sessão e relaxar enquanto cuidamos de você.",
    },
    {
      question: "Quais formas de pagamento são aceitas?",
      answer:
        "Aceitamos pagamentos em dinheiro, transferência/Pix e cartões de crédito/débito.",
    },
    {
      question: "O que acontece se eu precisar cancelar?",
      answer:
        "Pedimos que o cancelamento ou remarcação seja feito com pelo menos 4 horas de antecedência para garantir o melhor atendimento.",
    },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm uppercase text-primary font-medium tracking-wider">
            Contato
          </h2>
          <h3 className="mt-2 text-3xl md:text-4xl font-serif font-bold">
            Agende Sua Sessão
          </h3>
          <p className="mt-4 text-foreground/70">
            Estamos prontos para ajudar você em sua jornada para o bem-estar.
            Entre em contato para agendar uma consulta ou esclarecer dúvidas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Card className="bg-white/90 backdrop-blur-sm shadow-md hover:shadow-lg transition-all">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-medium text-lg mb-2">Endereço</h4>
                <p className="text-foreground/70">
                  Prazeres <br />
                  Jaboatão dos Guararapes, PE
                  <br />
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Card className="bg-white/90 backdrop-blur-sm shadow-md hover:shadow-lg transition-all">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-medium text-lg mb-2">Telefone</h4>
                <p className="text-foreground/70">
                  (11) 98765-4321
                  <br />
                  (11) 3456-7890
                </p>
                <p className="mt-2 text-sm text-foreground/50">
                  Segunda à Sexta: 9h às 18h
                  <br />
                  Sábados: 9h às 14h
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Card className="bg-white/90 backdrop-blur-sm shadow-md hover:shadow-lg transition-all">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <MessageCircle className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-medium text-lg mb-2">Email</h4>
                <p className="text-foreground/70">
                  contato@ Cecilia Lívia - Spa At home.com.br
                  <br />
                  agendamento@ Cecilia Lívia - Spa At home.com.br
                </p>
                <p className="mt-2 text-sm text-foreground/50">
                  Responderemos em até 24 horas
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <div className="mt-16 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8">
          <h4 className="text-2xl font-serif font-bold mb-6 text-center">
            Perguntas Frequentes
          </h4>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={faqVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div className="border border-gray-300 p-4 rounded-lg">
                  <div
                    className="cursor-pointer font-medium text-lg flex justify-between items-center"
                    onClick={() => handleToggle(index)}
                  >
                    {faq.question}
                    <span>{openFaq === index ? "−" : "+"}</span>
                  </div>
                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.div
                        variants={faqContentVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        className="overflow-hidden"
                      >
                        <p className="mt-2 text-foreground/70">{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
