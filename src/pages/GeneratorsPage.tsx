import React, { useContext } from "react";
import Generator from "../Generator"
import { StateContext } from "../App";


export default function GeneratorsPage() {
  const { state } = useContext(StateContext)
  return (
    <>
      {Object.entries(state.generators).map(([, generator]) => <Generator key={generator.name} generator={generator} />)}
    </>
  )
}
