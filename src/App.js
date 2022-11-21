import React from "react";

import { Showcase } from "./Showcase/Showcase";
import { Wrapper } from "./Wrapper";
import { BusinessCard } from "./BusinessCard";

function App() {
  return (
    <div className="App">
      <Wrapper>
        <BusinessCard />
        <Showcase />
      </Wrapper>
    </div>
  );
}

export default App;
