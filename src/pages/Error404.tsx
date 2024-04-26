import React, { useContext } from "react";
import NavigationContext from "../NavigationContext";

export default function Error404() {
  const { page } = useContext(NavigationContext);

  return (
    <>
      <h4>404 Not Found</h4>
      <p>Page {page} does not exists.</p>
    </>
  )
}
