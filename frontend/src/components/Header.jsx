import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? 'bg-primary/95 backdrop-blur-md shadow-lg'
                    : 'bg-transparent'
            }`}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <span className="text-xl font-display font-bold">
                            <span className="text-background">Event</span>
                            <span className="text-accent">Flow</span>
                            <span className="text-background">Studio</span>
                        </span>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <button
                            onClick={() => scrollToSection('features')}
                            className="text-sm font-medium text-background hover:text-accent transition-colors"
                        >
                            Features
                        </button>
                        <button
                            onClick={() => scrollToSection('how-it-works')}
                            className="text-sm font-medium text-background hover:text-accent transition-colors"
                        >
                            How It Works
                        </button>
                        <button
                            onClick={() => scrollToSection('pricing')}
                            className="text-sm font-medium text-background hover:text-accent transition-colors"
                        >
                            Pricing
                        </button>
                        <button
                            onClick={() => scrollToSection('faq')}
                            className="text-sm font-medium text-background hover:text-accent transition-colors"
                        >
                            FAQ
                        </button>
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <Button
                            variant="default"
                            className="bg-accent text-primary hover:bg-accent/90 font-semibold glow-box transition-smooth"
                        >
                            Get Started
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-background"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden bg-primary border-t border-accent/20 py-4">
                        <nav className="flex flex-col space-y-4">
                            <button
                                onClick={() => scrollToSection('features')}
                                className="text-sm font-medium text-background hover:text-accent transition-colors text-left"
                            >
                                Features
                            </button>
                            <button
                                onClick={() => scrollToSection('how-it-works')}
                                className="text-sm font-medium text-background hover:text-accent transition-colors text-left"
                            >
                                How It Works
                            </button>
                            <button
                                onClick={() => scrollToSection('pricing')}
                                className="text-sm font-medium text-background hover:text-accent transition-colors text-left"
                            >
                                Pricing
                            </button>
                            <button
                                onClick={() => scrollToSection('faq')}
                                className="text-sm font-medium text-background hover:text-accent transition-colors text-left"
                            >
                                FAQ
                            </button>
                            <Button
                                variant="default"
                                className="bg-accent text-primary hover:bg-accent/90 font-semibold w-full"
                            >
                                Get Started
                            </Button>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};
