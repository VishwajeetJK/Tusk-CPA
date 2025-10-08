import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Integrations from './components/Integrations';
import Signup from './components/Signup';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <Integrations />
        <Signup />
      </main>
      <Footer />
    </div>
  );
}

export default App;
