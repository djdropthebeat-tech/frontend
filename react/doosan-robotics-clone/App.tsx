import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import UseCases from "./components/UseCases";
import Clients from "./components/Clients";
import Solutions from "./components/Solutions";
import Products from "./components/Products";
import Team from "./components/Team";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20">
        {/* 네비바 높이만큼 패딩(예: 80px) */}
        <section id="hero"><Hero /></section>
        <section id="usecases"><UseCases /></section>
        <section id="clients"><Clients /></section>
        <section id="solutions"><Solutions /></section>
        <section id="products"><Products /></section>

        {/* 새 섹션: 연구진 소개 */}
        <section id="team">
          <Team />
        </section>

        <section id="footer"><Footer /></section>
      </main>
    </div>
  );
}

export default App;