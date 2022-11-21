import React from "react";

import { Showcase } from "../Components/Showcase/Showcase";
import { Wrapper } from "../Components/Wrapper";
import { BusinessCard } from "../Components/BusinessCard";

import theme from "../theme";

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
