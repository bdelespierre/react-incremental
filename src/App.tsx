import Container from 'react-bootstrap/Container';
import React, { createContext, useEffect, useReducer, useRef, useState } from 'react';
import GeneratorsPage from './pages/GeneratorsPage';
import WelcomePage from './pages/WelcomePage';
import Error404 from './pages/Error404';
import NavigationContext from './NavigationContext';
import AppFooter from './AppFooter';
import AppHeader from './AppHeader';
import './App.css'
import 'animate.css'
import TechnologiesPage from './pages/TechnologiesPage';
import Generators, { GeneratorModel, getCostToBuy } from './models/Generators';
import Technologies, { TechnologyModel } from './models/Technologies';
import Wallet, { MAIN_CURRENCY } from './models/Wallet';
import { cloneAndUpdate } from './Helpers';

export type StateType = {
  generators: GeneratorModel[],
  technologies: TechnologyModel[],
  wallet: typeof Wallet,
}

export const BUY_GENERATOR = "BUY_GENERATOR";
export const UNLOCK_GENERATOR = "UNLOCK_GENERATOR";
export const UNLOCK_TECHNOLOGY = "UNLOCK_TECHNOLOGY";
export const BUY_TECHNOLOGY = "BUY_TECHNOLOGY";
export const INCREASE_MAIN_CURRENCY = "INCREASE_MAIN_CURRENCY";

export type ActionType = { type: "UNLOCK_GENERATOR", payload: { generator: GeneratorModel } }
  | { type: "BUY_GENERATOR", payload: { generator: GeneratorModel, qt: number } }
  | { type: "UNLOCK_TECHNOLOGY", payload: { technology: TechnologyModel } }
  | { type: "BUY_TECHNOLOGY", payload: { technology: TechnologyModel } }
  | { type: "INCREASE_MAIN_CURRENCY", payload: { amount: number } };

const unlockGenerator = (state: StateType, { generator }: { generator: GeneratorModel }) => {
  console.log("unlock generator");
  const index = state.generators.indexOf(generator);

  if (index == -1) {
    return state;
  }

  if (generator.isLocked == false) {
    return state;
  }

  return {
    ...state,
    generators: cloneAndUpdate(state.generators, (clonedGenerators) => {
      clonedGenerators[index] = cloneAndUpdate(generator, (clonedGenerator) => {
        clonedGenerator.isLocked = false;
      });
    })
  };
};

const buyGenerator = (state: StateType, { generator, qt }: { generator: GeneratorModel, qt: number }) => {
  console.log("buy generator");
  const index = state.generators.indexOf(generator);
  const funds = state.wallet.get(MAIN_CURRENCY)!;
  const cost = getCostToBuy(generator, qt);

  if (index == -1) {
    return state;
  }

  if (funds < cost) {
    return state;
  }

  return {
    ...state,
    wallet: cloneAndUpdate(state.wallet, (wallet) => {
      wallet.set(MAIN_CURRENCY, funds - cost)
    }),
    generators: cloneAndUpdate(state.generators, (clonedGenerators) => {
      clonedGenerators[index] = cloneAndUpdate(generator, (clonedGenerator) => {
        clonedGenerator.owned += qt;
      })
    })
  }
}

const unlockTechnology = (state: StateType, { technology }: { technology: TechnologyModel }) => {
  console.log("unlock technology");
  const index = state.technologies.indexOf(technology);

  if (index == -1) {
    return state;
  }

  if (technology.isLocked == false) {
    return state;
  }

  return {
    ...state,
    technologies: cloneAndUpdate(state.technologies, (clonedTechnologies) => {
      clonedTechnologies[index] = cloneAndUpdate(technology, (clonedTechnology) => {
        clonedTechnology.isLocked = false;
      });
    })
  };
}

const buyTechnology = (state: StateType, { technology }: { technology: TechnologyModel }) => {
  console.log("buy technology");
  const index = state.technologies.indexOf(technology);
  const funds = state.wallet.get(MAIN_CURRENCY)!;
  const cost = technology.cost;

  if (index == -1) {
    return state;
  }

  if (technology.bought) {
    return state;
  }

  if (funds < cost) {
    return state;
  }

  const clonedState = cloneAndUpdate(state, (clonedState) => {
    technology.effect(clonedState);
  });

  return {
    ...clonedState,
    wallet: cloneAndUpdate(state.wallet, (clonedWallet) => {
      clonedWallet.set(MAIN_CURRENCY, funds - cost);
    }),
    technologies: cloneAndUpdate(state.technologies, (clonedTechnologies) => {
      clonedTechnologies[index] = cloneAndUpdate(technology, (clonedTechnology) => {
        clonedTechnology.bought = true;
      });
    }),
  }
}

const increaseMainCurrency = (state: StateType, { amount }: { amount: number }) => {
  console.log("increase main currency");
  const funds = state.wallet.get(MAIN_CURRENCY)!;

  return {
    ...state,
    wallet: cloneAndUpdate(state.wallet, (clonedWallet) => {
      clonedWallet.set(MAIN_CURRENCY, funds + amount);
    }),
  };
}

const reducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case UNLOCK_GENERATOR:
      return unlockGenerator(state, action.payload as { generator: GeneratorModel });

    case BUY_GENERATOR:
      return buyGenerator(state, action.payload);

    case UNLOCK_TECHNOLOGY:
      return unlockTechnology(state, action.payload as { technology: TechnologyModel });

    case BUY_TECHNOLOGY:
      return buyTechnology(state, action.payload as { technology: TechnologyModel });

    case INCREASE_MAIN_CURRENCY:
      return increaseMainCurrency(state, action.payload as { amount: number });

    default:
      return state;
  }
}

const initialState: StateType = {
  generators: Generators,
  technologies: Technologies,
  wallet: Wallet,
}

export const StateContext = createContext({
  state: {} as StateType,
  dispatch: (action: ActionType) => { }
});

function App() {
  const [page, setPage] = useState("Welcome");
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log("app");

  // --------------------------------------------------------------------------
  // Mainloop

  useEffect(() => {
    console.log("use effect");

    for (const generator of state.generators) {
      if (generator.isLocked && generator.unlock && generator.unlock(state)) {
        console.log(`unlocking ${generator.name}`)
        dispatch({ type: UNLOCK_GENERATOR, payload: { generator } });
      }
    }

    for (const technology of state.technologies) {
      if (technology.isLocked && technology.unlock && technology.unlock(state)) {
        console.log(`unlocking ${technology.name}`)
        dispatch({ type: UNLOCK_TECHNOLOGY, payload: { technology } });
      }
    }

    const interval = setInterval(() => {
      console.log("interval");

      let generated = 0;
      for (const generator of state.generators) {
        if (generator.isLocked) {
          continue;
        }
        let amount = generator.output * generator.owned;
        for (const bonus of generator.bonuses) {
          amount *= bonus.multiplier;
        }
        generated += amount;
      }
      dispatch({ type: INCREASE_MAIN_CURRENCY, payload: { amount: generated } });
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, [state.wallet.get(MAIN_CURRENCY), state.generators]);

  // --------------------------------------------------------------------------
  // Router

  let pageComponent: React.ReactElement;
  switch (page) {
    case "Welcome":
      pageComponent = <WelcomePage />
      break;

    case "Generators":
      pageComponent = <GeneratorsPage />
      break;

    case "Technologies":
      pageComponent = <TechnologiesPage />
      break;

    default:
      pageComponent = <Error404 />
      break;
  }

  // --------------------------------------------------------------------------
  // Render

  console.log("render");

  return (
    <NavigationContext.Provider value={{ page, setPage }}>
      <StateContext.Provider value={{ state, dispatch }}>
        <AppHeader />
        <Container>{pageComponent}</Container >
        <AppFooter />
      </StateContext.Provider>
    </NavigationContext.Provider>
  )
}

export default App
