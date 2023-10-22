import CreateCustomer from "./CreateCustomer";
import Customer from "./Customer";
import AccountOperations from "./AccountOperations";
import BalanceDisplay from "./BalanceDisplay";
import { useReducer } from "react";

const accountInitialItems = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

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
        fullName: action.payload.fullname,
        nationalId: action.payload.nationalId,
      };

    default:
      return state;
  }
}

function App() {
  const [{ fullName, nationalId }, dispatch] = useReducer(
    customerReducer,
    customerInitialItems
  );

  console.log(fullName, nationalId);

  return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      {fullName === "" ? (
        <CreateCustomer dispatch={dispatch} />
      ) : (
        <>
          <Customer fullname={fullName} />
          <AccountOperations />
          <BalanceDisplay />
        </>
      )}
    </div>
  );
}

export default App;
