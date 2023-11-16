import { createContext, useReducer } from "react";

export const CustomerContext = createContext();

const customerInitialItems = {
  fullName: "",
  nationalId: "",
  createdAt: "",
};

function customerReducer(state = customerInitialItems, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalId: action.payload.nationalId,
        createdAt: action.payload.createdAt,
      };

    default:
      return state;
  }
}

function CustomerProvider({ children }) {
  const [{ fullName, nationalId }, dispatch] = useReducer(
    customerReducer,
    customerInitialItems
  );

  return (
    <CustomerContext.Provider value={{ fullName, nationalId, dispatch }}>
      {children}
    </CustomerContext.Provider>
  );
}

export { CustomerProvider };
