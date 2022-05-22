import React from "react";
import { theme } from "../utils";

export default React.createContext({
  theme,
  rooms: [],
  setRooms: () => {},
  unfilteredRooms: [],
  setUnfilteredRooms: () => {}
});