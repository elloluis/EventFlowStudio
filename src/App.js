import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProblemSolution } from './components/ProblemSolution';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { Toaster } from './components/ui/sonner';
import './App.css';

function App() {
    return (
        <div className="min-h-screen">
            <Header />
            <main>
                <Hero />
                <ProblemSolution />
                <Features />
                <HowItWorks />
                <Pricing />
                <FAQ />
            </main>
            <Footer />
            <Toaster />
        </div>
    );
}

export default App;
