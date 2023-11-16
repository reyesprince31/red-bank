import { useContext } from "react";
import { AccountContext } from "./accountContext";

export function useAccount() {
  const context = useContext(AccountContext);
  return context;
}
