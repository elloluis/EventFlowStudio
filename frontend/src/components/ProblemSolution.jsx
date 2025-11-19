import React from 'react';
import { Card } from './ui/card';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

export const ProblemSolution = () => {
    const problems = [
        {
            title: 'For DJs',
            issues: [
                'Securing gigs is more challenging and less lucrative post-COVID',
                'Time-consuming cold outreach and networking required',
                'Need to maintain multiple platforms and digital storefronts',
                'No centralized high-conversion environment'
            ]
        },
        {
            title: 'For Event Coordinators',
            issues: [
                'Time-intensive manual vetting process',
                'Multiple discovery calls and comparison meetings',
                'Legal and contract drafting complexities',
                'Risk of cancellations or no-shows'
            ]
        }
    ];

    const solutions = [
        'Pre-vetted talent with identity verification',
        'Integrated digital contracts with e-signatures',
        'Secure escrow payment system',
        'Real-time calendar synchronization',
        'Smart matching algorithm',
        'All-in-one professional tool suite'
    ];

    return (
        <section className="py-24 bg-muted/30">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-4">
                        The <span className="text-accent">Problem</span> We Solve
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        The current DJ booking ecosystem is fragmented and inefficient, 
                        creating friction for both talent and buyers.
                    </p>
                </div>

                {/* Problems Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {problems.map((problem, idx) => (
                        <Card key={idx} className="p-8 bg-card border-border hover:border-accent/50 transition-colors">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center">
                                    <AlertCircle className="w-6 h-6 text-destructive" />
                                </div>
                                <h3 className="text-2xl font-display font-bold text-foreground">{problem.title}</h3>
                            </div>
                            <ul className="space-y-3">
                                {problem.issues.map((issue, i) => (
                                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                                        <div className="w-1.5 h-1.5 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                                        <span>{issue}</span>
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    ))}
                </div>

                {/* Solution Card */}
                <Card className="p-8 md:p-12 bg-primary border-accent/30 relative overflow-hidden">
                    {/* Background Glow */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
                    
                    <div className="relative z-10">
                        <div className="text-center mb-8">
                            <h3 className="text-3xl sm:text-4xl font-display font-bold text-background mb-4">
                                Our <span className="text-accent">Solution</span>
                            </h3>
                            <p className="text-lg text-muted-foreground">
                                EventFlowStudio provides an integrated Operating System for Event Talent Acquisition
                            </p>
                        </div>
                        
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {solutions.map((solution, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center gap-3 bg-secondary/50 backdrop-blur-sm rounded-lg p-4 border border-accent/20 hover:border-accent/50 transition-colors"
                                >
                                    <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                                        <CheckCircle2 className="w-5 h-5 text-accent" />
                                    </div>
                                    <span className="text-sm font-medium text-background">{solution}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </Card>
            </div>
        </section>
    );
};
