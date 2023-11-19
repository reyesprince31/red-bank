import { useContext } from "react";
import { CustomerContext } from "../../contexts/customerContext";

export function useCustomer() {
  const context = useContext(CustomerContext);

  return context;
}
