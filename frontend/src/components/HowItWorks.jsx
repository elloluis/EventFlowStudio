import React from 'react';
import { Card } from './ui/card';
import { UserPlus, Search, FileSignature, CreditCard, PartyPopper } from 'lucide-react';

export const HowItWorks = () => {
    const steps = [
        {
            icon: UserPlus,
            title: 'Create Your Profile',
            djDescription: 'Sign up as a DJ and complete your profile with genres, tracks, rates, and availability.',
            coordinatorDescription: 'Sign up as an Event Coordinator and describe your event needs and preferences.',
            number: '01'
        },
        {
            icon: Search,
            title: 'Get Matched',
            djDescription: 'Our algorithm matches you with relevant event opportunities based on your expertise and schedule.',
            coordinatorDescription: 'Our smart algorithm finds pre-vetted DJs that perfectly match your event requirements.',
            number: '02'
        },
        {
            icon: CreditCard,
            title: 'Secure Payment',
            djDescription: 'Payment is held in escrow and released to you after successful event delivery.',
            coordinatorDescription: 'Your payment is held securely in escrow until the DJ delivers the service.',
            number: '03'
        },
        {
            icon: PartyPopper,
            title: 'Event Success',
            djDescription: 'Show up, perform, and build your reputation with reviews and ratings.',
            coordinatorDescription: 'Enjoy a stress-free event with professional talent and leave a review.',
            number: '04'
        }
    ];

    return (
        <section id="how-it-works" className="py-24 bg-muted/30">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-4">
                        How <span className="text-accent">EventFlowStudio</span> Works
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        From discovery to delivery—a seamless, professional process for both sides
                    </p>
                </div>

                {/* Dual Track Layout */}
                <div className="max-w-6xl mx-auto">
                    {/* Headers */}
                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="text-center p-6 bg-primary rounded-2xl">
                            <h3 className="text-2xl font-display font-bold text-background mb-2">For DJs</h3>
                            <p className="text-muted-foreground">Build your career with quality gigs</p>
                        </div>
                        <div className="text-center p-6 bg-primary rounded-2xl">
                            <h3 className="text-2xl font-display font-bold text-background mb-2">For Event Coordinators</h3>
                            <p className="text-muted-foreground">Find talent with confidence and speed</p>
                        </div>
                    </div>

                    {/* Steps */}
                    <div className="space-y-8">
                        {steps.map((step, idx) => {
                            const Icon = step.icon;
                            return (
                                <div key={idx} className="relative">
                                    {/* Connector Line */}
                                    {idx < steps.length - 1 && (
                                        <div className="hidden md:block absolute left-1/2 top-24 w-0.5 h-16 bg-accent/30 -translate-x-1/2"></div>
                                    )}
                                    
                                    <div className="grid md:grid-cols-2 gap-8 items-center">
                                        {/* DJ Side */}
                                        <Card className="p-6 bg-card border-border hover:border-accent/50 transition-colors">
                                            <div className="flex items-start gap-4">
                                                <div className="flex-shrink-0">
                                                    <div className="text-5xl font-display font-bold text-accent/20">{step.number}</div>
                                                </div>
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-3 mb-3">
                                                        <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                                                            <Icon className="w-5 h-5 text-accent" />
                                                        </div>
                                                        <h4 className="text-lg font-display font-semibold text-foreground">{step.title}</h4>
                                                    </div>
                                                    <p className="text-muted-foreground text-sm leading-relaxed">{step.djDescription}</p>
                                                </div>
                                            </div>
                                        </Card>

                                        {/* Coordinator Side */}
                                        <Card className="p-6 bg-card border-border hover:border-accent/50 transition-colors">
                                            <div className="flex items-start gap-4">
                                                <div className="flex-shrink-0">
                                                    <div className="text-5xl font-display font-bold text-accent/20">{step.number}</div>
                                                </div>
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-3 mb-3">
                                                        <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                                                            <Icon className="w-5 h-5 text-accent" />
                                                        </div>
                                                        <h4 className="text-lg font-display font-semibold text-foreground">{step.title}</h4>
                                                    </div>
                                                    <p className="text-muted-foreground text-sm leading-relaxed">{step.coordinatorDescription}</p>
                                                </div>
                                            </div>
                                        </Card>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};
