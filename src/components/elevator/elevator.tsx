import React from "react";
import {TStyle} from "../../types";



const Elevator = ({floor, customStyle}: { customStyle: TStyle; floor: number }) => {
  return (
    <div style={customStyle} className={"elevator " + floor}>{floor}</div>
  );
}

export default Elevator;
