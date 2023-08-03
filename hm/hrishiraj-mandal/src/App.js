import React from "react";
// components
import Banner from "./components/Banner";
import Header from "./components/Header";
import Nav from "./components/Nav";
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
      <Header />
      <Banner />
      <Nav />
      <About />
      <div className="h-[500px] sm:h-[500px] md:h-[500px] lg:h-[0px] xl:h-[0px]"></div>
      <Services />
      <Work />
      <div className="h-[200px]"></div>
      <Testimonials />
      <Contact />
      {/* <div className='h-[4000px]'></div> */}
    </div>
  );
};

export default App;