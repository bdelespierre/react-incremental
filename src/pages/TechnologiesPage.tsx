import React from "react";
import { TechnologyDict } from "../models/Technologies";
import { GeneratorDict } from "../models/Generators";
import Technology from "../Technology";

interface TechnologiesPageProps {
  generators: GeneratorDict,
  technologies: TechnologyDict,
  setTechnologies: (technologies: TechnologyDict) => void
}

export default function TechnologiesPage(props: TechnologiesPageProps) {
  let lockedTechnologiesCount = 0;
  const technologyComponents = Object.entries(props.technologies).map(([key, value]) => {
    const setTechnology = (technology) => {
      const technologysClone = { ...props.technologies };
      technologysClone[key] = technology;
      props.setTechnologies(technologysClone);
    }

    if (value.isLocked && lockedTechnologiesCount > 0) {
      return;
    }

    lockedTechnologiesCount += value.isLocked ? 1 : 0;
    return <Technology key={key} generators={props.generators} technologies={props.technologies} technology={value} setTechnology={setTechnology} />
  });

  return (
    <>{technologyComponents}</>
  )
}
