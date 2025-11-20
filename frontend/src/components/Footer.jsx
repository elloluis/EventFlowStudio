import React from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="bg-primary border-t border-accent/20">
            {/* CTA Section */}
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-background mb-6">
                        Ready to Transform Your <span className="text-accent glow-text">Event Booking</span>?
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Join the future of talent acquisition. Secure, professional, and efficient—for just $20/month.
                    </p>
                    <Button
                        size="lg"
                        className="bg-accent text-primary hover:bg-accent/90 font-semibold text-base px-8 py-6 glow-box-strong group"
                    >
                        Get Started Today
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>
            </div>

            {/* Footer Content */}
            <div className="border-t border-accent/20">
                <div className="container mx-auto px-4 py-12">
                    <div className="grid md:grid-cols-4 gap-8 mb-12">
                        {/* Brand */}
                        <div className="md:col-span-2">
                            <div className="flex items-center space-x-2 mb-4">
                                <span className="text-xl font-display font-bold">
                                    <span className="text-background">Event</span>
                                    <span className="text-accent">Flow</span>
                                    <span className="text-background">Studio</span>
                                </span>
                            </div>
                            <p className="text-muted-foreground text-sm max-w-sm leading-relaxed">
                                The specialized marketplace connecting DJs with Event Coordinators. 
                                Secure payments and instant matching—all in one platform.
                            </p>
                        </div>

                        {/* Platform */}
                        <div>
                            <h3 className="text-background font-semibold mb-4">Platform</h3>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <a href="#features" className="text-muted-foreground hover:text-accent transition-colors">
                                        Features
                                    </a>
                                </li>
                                <li>
                                    <a href="#how-it-works" className="text-muted-foreground hover:text-accent transition-colors">
                                        How It Works
                                    </a>
                                </li>
                                <li>
                                    <a href="#pricing" className="text-muted-foreground hover:text-accent transition-colors">
                                        Pricing
                                    </a>
                                </li>
                                <li>
                                    <a href="#faq" className="text-muted-foreground hover:text-accent transition-colors">
                                        FAQ
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Support */}
                        <div>
                            <h3 className="text-background font-semibold mb-4">Support</h3>
                            <ul className="space-y-2 text-sm">
                                <li>
                                    <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                                        Help Center
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                                        Contact Us
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                                        Terms of Service
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                                        Privacy Policy
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="pt-8 border-t border-accent/20">
                        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-4">
                            <p className="text-sm text-muted-foreground">
                                © 2024 EventFlowStudio. All rights reserved.
                            </p>
                            <div className="flex items-center gap-6">
                                <a href="#" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                                    Twitter
                                </a>
                                <a href="#" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                                    LinkedIn
                                </a>
                                <a href="#" className="text-muted-foreground hover:text-accent transition-colors text-sm">
                                    Instagram
                                </a>
                            </div>
                        </div>
                        <div className="text-center">
                            <p className="text-sm text-muted-foreground">
                                Contact us: <a href="mailto:support@eventflowstudio.com" className="text-accent hover:text-accent/80 transition-colors">support@eventflowstudio.com</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
