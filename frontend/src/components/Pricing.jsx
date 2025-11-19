import React from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Check } from 'lucide-react';

export const Pricing = () => {
    const djFeatures = [
        'Unlimited profile visibility',
        'Smart matching to quality gigs',
        'Digital contract management',
        'Secure escrow payment protection',
        'Calendar sync & availability management',
        'Performance analytics dashboard',
        'Direct communication with coordinators',
        '24/7 platform support'
    ];

    const coordinatorFeatures = [
        'Access to pre-vetted DJ talent pool',
        'Unlimited event postings',
        'Smart matching algorithm',
        'Standardized digital contracts',
        'Secure escrow payment system',
        'Real-time availability checking',
        'Booking history & management',
        'Priority customer support'
    ];

    return (
        <section id="pricing" className="py-24 bg-background">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-4">
                        Simple, <span className="text-accent">Transparent Pricing</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        No commissions. No hidden fees. Just a flat monthly subscription that pays for itself.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* DJ Pricing */}
                    <Card className="p-8 bg-card border-border hover:border-accent/50 transition-all duration-300 hover:shadow-xl flex flex-col">
                        <div className="text-center mb-8">
                            <div className="inline-block px-4 py-1 bg-accent/10 rounded-full mb-4">
                                <span className="text-sm font-semibold text-accent">For DJs</span>
                            </div>
                            <div className="mb-4">
                                <span className="text-5xl font-display font-bold text-foreground">$20</span>
                                <span className="text-muted-foreground">/month</span>
                            </div>
                            <p className="text-sm text-muted-foreground">Just $240/year—less than the cost of one quality gig</p>
                        </div>

                        <div className="space-y-4 mb-8 flex-1">
                            {djFeatures.map((feature, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                    <div className="w-5 h-5 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <Check className="w-3 h-3 text-accent" />
                                    </div>
                                    <span className="text-sm text-muted-foreground">{feature}</span>
                                </div>
                            ))}
                        </div>

                        <Button
                            size="lg"
                            className="w-full bg-accent text-primary hover:bg-accent/90 font-semibold"
                        >
                            Start as a DJ
                        </Button>
                    </Card>

                    {/* Coordinator Pricing */}
                    <Card className="p-8 bg-primary border-accent/30 hover:border-accent transition-all duration-300 hover:shadow-xl flex flex-col relative overflow-hidden">
                        {/* Background Glow */}
                        <div className="absolute top-0 right-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl"></div>
                        
                        <div className="relative z-10">
                            <div className="text-center mb-8">
                                <div className="inline-block px-4 py-1 bg-accent/20 rounded-full mb-4">
                                    <span className="text-sm font-semibold text-accent">For Event Coordinators</span>
                                </div>
                                <div className="mb-4">
                                    <span className="text-5xl font-display font-bold text-background">$20</span>
                                    <span className="text-muted-foreground">/month</span>
                                </div>
                                <p className="text-sm text-muted-foreground">Professional insurance for reliability and peace of mind</p>
                            </div>

                            <div className="space-y-4 mb-8 flex-1">
                                {coordinatorFeatures.map((feature, idx) => (
                                    <div key={idx} className="flex items-start gap-3">
                                        <div className="w-5 h-5 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <Check className="w-3 h-3 text-accent" />
                                        </div>
                                        <span className="text-sm text-background">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <Button
                                size="lg"
                                className="w-full bg-accent text-primary hover:bg-accent/90 font-semibold glow-box"
                            >
                                Start as Coordinator
                            </Button>
                        </div>
                    </Card>
                </div>

                {/* Value Proposition */}
                <div className="mt-16 text-center">
                    <Card className="inline-block p-6 bg-muted/50 border-accent/20">
                        <p className="text-foreground font-medium mb-2">
                            <span className="text-accent font-bold">ROI Example:</span> One successful booking will get you your ideal DJ for the event
                        </p>
                    </Card>
                </div>
            </div>
        </section>
    );
};
