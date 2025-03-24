
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
        <a href="#" className="font-serif text-2xl font-bold text-primary">Serenity</a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-foreground/80 hover:text-primary transition-colors">Home</a>
          <a href="#services" className="text-foreground/80 hover:text-primary transition-colors">Serviços</a>
          <a href="#about" className="text-foreground/80 hover:text-primary transition-colors">Sobre</a>
          <a href="#testimonials" className="text-foreground/80 hover:text-primary transition-colors">Depoimentos</a>
          <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors">Contato</a>
          <Button className="bg-primary hover:bg-primary/90 text-white">Agendar</Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full py-4 animate-fade-in">
          <div className="flex flex-col space-y-4 px-4">
            <a href="#home" className="text-foreground/80 hover:text-primary py-2 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
            <a href="#services" className="text-foreground/80 hover:text-primary py-2 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Serviços</a>
            <a href="#about" className="text-foreground/80 hover:text-primary py-2 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Sobre</a>
            <a href="#testimonials" className="text-foreground/80 hover:text-primary py-2 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Depoimentos</a>
            <a href="#contact" className="text-foreground/80 hover:text-primary py-2 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Contato</a>
            <Button className="bg-primary hover:bg-primary/90 text-white w-full">Agendar</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
