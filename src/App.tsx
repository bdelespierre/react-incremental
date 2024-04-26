import Container from 'react-bootstrap/Container';
import React, { useEffect, useRef, useState } from 'react';
import GeneratorsPage from './pages/GeneratorsPage';
import WelcomePage from './pages/WelcomePage';
import Error404 from './pages/Error404';
import NavigationContext from './NavigationContext';
import AppFooter from './AppFooter';
import AppHeader from './AppHeader';
import Generators, { GeneratorDict, GeneratorModel } from './models/Generators';
import './App.css'
import 'animate.css'
import EntropyContext from './EntropyContext';
import TechnologiesPage from './pages/TechnologiesPage';
import Technologies, { TechnologyDict, TechnologyModel } from './models/Technologies';

function App() {
  const [page, setPage] = useState("Welcome");
  const [entropy, setEntropy] = useState(1e20);
  const [generators, setGenerators] = useState(Generators);
  const [technologies, setTechnologies] = useState(Technologies);

  // --------------------------------------------------------------------------
  // Triggers (poor man's event system)

  const setGeneratorsWrapper = (generators: GeneratorDict) => {
    Object.values(generators).forEach(gen => {
      // unlock generator if criteria are matched
      if (gen.isLocked && gen.unlock && gen.unlock(generators)) {
        gen.isLocked = false;
      }
    });

    setGenerators(generators);
  };

  // --------------------------------------------------------------------------
  // Mainloop

  useEffect(() => {
    const interval = setInterval(() => {
      setEntropy(
        entropy + Object
          .values(generators)
          .reduce((carry, gen) => carry + (gen.output * gen.owned), 0)
      );
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, [entropy, generators]);

  // --------------------------------------------------------------------------
  // Router

  let pageComponent: React.ReactElement;
  switch (page) {
    case "Welcome":
      pageComponent = <WelcomePage />
      break;

    case "Generators":
      pageComponent = <GeneratorsPage generators={generators} setGenerators={setGeneratorsWrapper} />
      break;

    case "Technologies":
      pageComponent = <TechnologiesPage generators={generators} technologies={technologies} setTechnologies={setTechnologies} />
      break;

    default:
      pageComponent = <Error404 />
      break;
  }

  // --------------------------------------------------------------------------
  // Render

  return (
    <NavigationContext.Provider value={{ page, setPage }}>
      <EntropyContext.Provider value={{ entropy, setEntropy }}>
        <AppHeader />
        <Container>{pageComponent}</Container >
        <AppFooter />
      </EntropyContext.Provider>
    </NavigationContext.Provider>
  )
}

export default App
