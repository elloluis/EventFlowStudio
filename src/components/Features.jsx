import React from 'react';
import { Card } from './ui/card';
import { Shield, Calendar, Zap, Users, Lock } from 'lucide-react';

export const Features = () => {
    const features = [
        {
            icon: Shield,
            title: 'Pre-Vetted Talent',
            description: 'Every DJ undergoes identity verification and background checks, ensuring professional reliability and safety for your events.'
        },
        {
            icon: Lock,
            title: 'Secure Escrow Payments',
            description: 'Funds held securely until service delivery is confirmed. Protects both DJs and coordinators from financial risk and disputes.'
        },
        {
            icon: Calendar,
            title: 'Real-Time Availability',
            description: 'Seamless calendar integration prevents double-bookings. Sync with Google Calendar to manage availability automatically and professionally.'
        },
        {
            icon: Zap,
            title: 'Smart Matching Algorithm',
            description: 'Precision matching based on genre expertise, availability, and budget alignment. Find the perfect DJ for your event in minutes, not days.'
        },
        {
            icon: Users,
            title: 'Unified Platform',
            description: 'All communication and payments in one place. No more scattered emails, calls, or external tools—everything tracked and recorded.'
        }
    ];

    return (
        <section id="features" className="py-24 bg-background">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-4">
                        <span className="text-accent">Powerful Features</span> for Seamless Booking
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Everything you need to eliminate friction and risk in the DJ booking process
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {features.map((feature, idx) => {
                        const Icon = feature.icon;
                        return (
                            <Card
                                key={idx}
                                className="p-8 bg-card border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg group"
                            >
                                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                                    <Icon className="w-7 h-7 text-accent" />
                                </div>
                                <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {feature.description}
                                </p>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
