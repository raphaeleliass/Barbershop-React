import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Main from "./components/Main/Main";

function App() {
  return (
    
      <div className="flex flex-col">
        <Header />
        <Hero />
        <Main/>
      </div>
    
  );
}

export default App;
