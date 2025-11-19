import React from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center bg-primary overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 py-32 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-8">
                        <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium text-accent">The Future of Event Talent Booking</span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
                        <span className="text-background">Connect </span>
                        <span className="text-accent glow-text">DJs</span>
                        <span className="text-background"> with </span>
                        <br className="hidden sm:block" />
                        <span className="text-accent glow-text">Event Coordinators</span>
                    </h1>

                    {/* Subheading */}
                    <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
                        A specialized marketplace that eliminates friction in talent booking. 
                        Secure payments, digital contracts, and instant matching—all for just $20/month.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                        <Button
                            size="lg"
                            className="bg-accent text-primary hover:bg-accent/90 font-semibold text-base px-8 py-6 glow-box-strong transition-smooth group"
                        >
                            Get Started Today
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </div>

                    {/* Trust Indicators */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-accent/20">
                        <div>
                            <div className="text-3xl font-display font-bold text-accent mb-2">$240</div>
                            <div className="text-sm text-muted-foreground">Annual Cost</div>
                        </div>
                        <div>
                            <div className="text-3xl font-display font-bold text-accent mb-2">100%</div>
                            <div className="text-sm text-muted-foreground">Secure Escrow</div>
                        </div>
                        <div>
                            <div className="text-3xl font-display font-bold text-accent mb-2">24/7</div>
                            <div className="text-sm text-muted-foreground">Support</div>
                        </div>
                        <div>
                            <div className="text-3xl font-display font-bold text-accent mb-2">0%</div>
                            <div className="text-sm text-muted-foreground">Commission</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
        </section>
    );
};
