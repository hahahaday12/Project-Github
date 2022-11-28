import { atom } from "recoil";

const initialState = {
  color: "#C4C4C4",
};

export const recoilColorState = atom({
  key: "recoilColorState",
  default: initialState
});