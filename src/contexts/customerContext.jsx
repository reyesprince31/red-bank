import { createContext, useContext, useReducer } from "react";

const CustomerContext = createContext();

const customerInitialItems = {
  fullName: "",
  nationalId: "",
  createdAt: "",
};

function customerReducer(state, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalId: action.payload.nationalId,
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

function useCustomer() {
  const context = useContext(CustomerContext);
  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { CustomerProvider, useCustomer };
