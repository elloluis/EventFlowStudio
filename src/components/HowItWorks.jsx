import React from 'react';
import { Card } from './ui/card';
import { UserPlus, Search, CreditCard, PartyPopper } from 'lucide-react';

export const HowItWorks = () => {
    const steps = [
        {
            icon: UserPlus,
            title: 'Create Your Profile',
            description: 'Sign up as a DJ or Event Coordinator and complete your profile with relevant details, preferences, and availability.',
            number: '01'
        },
        {
            icon: Search,
            title: 'Get Matched',
            description: 'Our smart algorithm matches DJs with event opportunities based on genre expertise, schedule, and budget alignment.',
            number: '02'
        },
        {
            icon: CreditCard,
            title: 'Secure Payment',
            description: 'Payment is held securely in escrow and released after successful event delivery. A $5 convenience fee applies per booking.',
            number: '03'
        },
        {
            icon: PartyPopper,
            title: 'Event Success',
            description: 'Deliver an amazing event, build your reputation with reviews and ratings, and grow your network.',
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
                        From discovery to delivery—a seamless, professional process
                    </p>
                </div>

                {/* Steps */}
                <div className="max-w-4xl mx-auto space-y-6">
                    {steps.map((step, idx) => {
                        const Icon = step.icon;
                        return (
                            <Card key={idx} className="p-8 bg-card border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg">
                                <div className="flex items-start gap-6">
                                    <div className="flex-shrink-0">
                                        <div className="text-6xl font-display font-bold text-accent/20">{step.number}</div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                                                <Icon className="w-6 h-6 text-accent" />
                                            </div>
                                            <h3 className="text-2xl font-display font-semibold text-foreground">{step.title}</h3>
                                        </div>
                                        <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                                    </div>
                                </div>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
