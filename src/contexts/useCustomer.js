import { useContext } from "react";
import { CustomerContext } from "./customerContext";

export function useCustomer() {
  const context = useContext(CustomerContext);

  return context;
}
