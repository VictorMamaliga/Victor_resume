import { useState, useEffect } from "react";

import { useApi } from "./hooks/useApi";

function App() {
  const [objectData, setObjectData] = useState(null);

  useEffect( () => {
    const response = useApi()

    setObjectData(response)
  }, []);

  return (
    <div className="App">

    </div>
  );
}

export default App
