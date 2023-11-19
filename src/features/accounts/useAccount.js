import { useContext } from "react";
import { AccountContext } from "../../contexts/accountContext";

export function useAccount() {
  const context = useContext(AccountContext);
  return context;
}
