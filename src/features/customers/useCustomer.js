import { useContext } from "react";
import { CustomerContext } from "../../contexts/customerContext";

export default function useCustomer() {
  const context = useContext(CustomerContext);

  return context;
}

export function createCustomer(fullName, nationalId) {
  return {
    type: "customer/createCustomer",
    payload: { fullName, nationalId, createdAt: new Date().toISOString() },
  };
}
