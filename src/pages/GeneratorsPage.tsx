import React from "react";
import Generator from "../Generator"
import { GeneratorDict, GeneratorModel } from "../models/Generators";

interface GeneratorPageProps {
  generators: GeneratorDict,
  setGenerators: (generators: GeneratorDict) => void
}

export default function GeneratorsPage(props: GeneratorPageProps) {
  let lockedGenerators = 0;
  const generatorComponents = Object.entries(props.generators).map(([key, value]) => {
    const setGenerator = (generator: GeneratorModel) => {
      const generatorsClone = { ...props.generators };
      generatorsClone[key] = generator;
      props.setGenerators(generatorsClone);
    }

    if (value.isLocked && lockedGenerators > 0) {
      return;
    }

    lockedGenerators += value.isLocked ? 1 : 0;
    return <Generator key={key} generator={value} setGenerator={setGenerator} />
  });

  return (
    <>{generatorComponents}</>
  )
}
