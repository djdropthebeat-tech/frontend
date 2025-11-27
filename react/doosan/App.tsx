import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import UseCases from './components/UseCases';
import Clients from './components/Clients';
import Solutions from './components/Solutions';
import Products from './components/Products';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <UseCases />
      <Clients />
      <Solutions />
      <Products />
      <Footer />
    </div>
  );
}

export default App;