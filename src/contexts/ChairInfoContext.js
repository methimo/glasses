import { createContext, useState } from "react";

export const ChairInfoContext = createContext(null);

function ChairInfoProvider(props) {
  const [ChairInfo, setChairInfo] = useState({ top: 800, left: 800 });
  return (
    <ChairInfoContext.Provider value={{ ChairInfo, setChairInfo }} {...props} />
  );
}

export default ChairInfoProvider;
