import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from './ui/accordion';

export const FAQ = () => {
    const faqs = [
        {
            question: 'How does the $20/month subscription work?',
            answer: 'Both DJs and Event Coordinators pay a flat $20 monthly fee for unlimited platform access. This includes all features: matching, escrow payments, and communication tools. We do not take any commission from your bookings—only the monthly subscription.'
        },
        {
            question: 'What is the escrow payment system?',
            answer: 'Our escrow service acts as a secure intermediary. Event Coordinators deposit funds when booking, which are held safely until the DJ successfully delivers the performance. After the event, the coordinator confirms delivery, and funds are released to the DJ. This protects both parties from financial risk.'
        },
        {
            question: 'How are DJs vetted on the platform?',
            answer: 'Every DJ undergoes identity verification at registration. We also perform background checks to ensure professional reliability and safety. This vetting process typically takes 24-72 hours and runs parallel with profile setup to minimize delays.'
        },
        {
            question: 'What happens if a DJ cancels or doesn\'t show up?',
            answer: 'This is exactly why we require all transactions to go through our platform. With escrow protection, you have financial protection. Our support team investigates all disputes, and funds are only released after confirmed service delivery.'
        },
        {
            question: 'Can I cancel my subscription at any time?',
            answer: 'Yes, you can cancel your subscription at any time with no penalties. You\'ll retain access until the end of your current billing period. However, you\'ll need an active subscription to initiate new bookings or accept booking requests.'
        },
        {
            question: 'How does the matching algorithm work?',
            answer: 'Our algorithm matches based on three core criteria: Genre expertise (matching event style with DJ specialization), Availability (real-time calendar sync), and Budget alignment (comparing coordinator budget with DJ rates). The system learns from successful bookings to improve matches over time.'
        },
        {
            question: 'Are there any additional fees besides the monthly subscription?',
            answer: 'Yes, there is a $5 convenience fee per booking to cover payment processing and platform maintenance. Unlike traditional booking platforms that charge 10-20% commission, our $20/month subscription plus $5 convenience fee keeps costs predictable and affordable.'
        },
        {
            question: 'What makes EventFlowStudio different from other platforms?',
            answer: 'We\'re specialized for DJ-Event Coordinator matching, not a generic gig marketplace. We combine mandatory verification, escrow payments, and calendar management into one unified operating system. Our flat-fee model aligns our success with yours—not with transaction volume.'
        }
    ];

    return (
        <section id="faq" className="py-24 bg-muted/30">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-4">
                        Frequently Asked <span className="text-accent">Questions</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Everything you need to know about EventFlowStudio
                    </p>
                </div>

                {/* FAQ Accordion */}
                <div className="max-w-3xl mx-auto">
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <AccordionItem
                                key={idx}
                                value={`item-${idx}`}
                                className="bg-card border border-border rounded-lg px-6 hover:border-accent/50 transition-colors"
                            >
                                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-accent">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground leading-relaxed">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
};
