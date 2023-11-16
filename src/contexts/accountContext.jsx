import { createContext, useReducer } from "react";

export const AccountContext = createContext();

const accountInitialItems = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

export function accountReducer(state = accountInitialItems, action) {
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload };

    case "account/withdraw":
      return { ...state, balance: state.balance - action.payload };

    case "account/requestLoan":
      if (state.loan > 0) return state;

      return {
        ...state,
        balance: state.balance + state.loan,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
      };

    case "account/payLoan":
      return {
        ...state,
        balance: state.balance - state.loan,
        loan: 0,
        loanPurpose: "",
      };

    default:
      return state;
  }
}

function AccountProvider({ children }) {
  const [state, action] = useReducer(accountReducer, accountInitialItems);
  return <AccountContext.Provider>{children}</AccountContext.Provider>;
}

export default AccountProvider;
