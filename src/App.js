import React from 'react';
import './App.css';
import TopBar from './topBar';
import NavBar from './navBar';
import MobileMenu from './MobileMenu';
import Hero from './hero';
import Card from './card';
import Footer from './footer';

function App() {
  return (
    <div className="homepage">
        <MobileMenu />
      <div className='home-gradient'>
        <TopBar />
        <NavBar />
        <Hero />


      </div>
      <section className="cards-section">
        <Card
          icon={`${process.env.PUBLIC_URL}/logo.svg`}
          title="IMPACTABLE"
          subtitle="Investments"
          description="We are driven by the belief that investment can make a positive impact - without compromising returns."
          subtitleColor={"#0090FF"}
        />
        <Card
          icon={`${process.env.PUBLIC_URL}/logo.svg`}
          title="IMPACTABLE"
          subtitle="Investment Network"
          description="Connects institutional scale impact investors, to benefit from collaboration in often opaque private markets."
          subtitleColor={"#AB842E"}
        />
        <Card
          icon={`${process.env.PUBLIC_URL}/logo.svg`}
          title="IMPACTABLE"
          subtitle="Technical Assistance"
          description="Helps sub-scale fund managers expand capacity and grow assets under management."
          subtitleColor={"#005436"}
        />
      </section>
      <hr />
      <Footer />
    </div>
  );
}

export default App;