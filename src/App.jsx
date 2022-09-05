import React from "react";

import Root from "./config/Routes";

import "./global.css";

function App() {
  React.useEffect(() => {
    window.process = {
      ...window.process,
    };
  }, []);
  return (
    <>
      <Root />
    </>
  );
}

export default App;
