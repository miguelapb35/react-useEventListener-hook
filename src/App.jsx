import React, { useState } from "react";
import useEventListener from "./useEventListener";

const App = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEventListener("mousemove", ({ clientX, clientY }) =>
    setCoords({ x: clientX, y: clientY })
  );

  return <p> {JSON.stringify(coords)} </p>;
};

export default App;
