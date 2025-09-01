import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FundingPrograms from './components/FundingPrograms';
import ApplicationProcess from './components/ApplicationProcess';
import News from './components/News';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <FundingPrograms />
        <ApplicationProcess />
        <News />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;