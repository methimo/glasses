import { useContext } from "react";
import { ChairInfoContext } from "../contexts/ChairInfoContext";

function useChairInfo() {
  const { ChairInfo, setChairInfo } = useContext(ChairInfoContext);
  return { ChairInfo, setChairInfo };
}

export default useChairInfo;
