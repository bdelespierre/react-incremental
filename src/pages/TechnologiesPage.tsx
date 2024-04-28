import React, { useContext } from "react";
import Technology from "../Technology";
import { StateContext } from "../App";

export default function TechnologiesPage() {
  const { state } = useContext(StateContext)
  return (
    <>
      {state.technologies.map(technology => <Technology key={technology.name} technology={technology} />)}
    </>
  )
}
