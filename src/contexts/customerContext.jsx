import { createContext, useReducer } from "react";
import customerReducer, {
  customerInitialItems,
} from "../features/customers/customerSlices";

export const CustomerContext = createContext();

export default function CustomerProvider({ children }) {
  const [{ fullName, nationalId }] = useReducer(
    customerReducer,
    customerInitialItems
  );

  const value = { fullName, nationalId };

  return (
    <CustomerContext.Provider value={value}>
      {children}
    </CustomerContext.Provider>
  );
}
