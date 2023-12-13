import { createContext, useContext, useReducer } from "react";

import accountReducer, {
  accountInitialItems,
} from "../features/accounts/accountSlices";

export const AccountContext = createContext();

function AccountProvider({ children }) {
  const [state, action] = useReducer(accountReducer, accountInitialItems);

  const value = {
    state,
    action,
  };
  return (
    <AccountContext.Provider value={value}>{children}</AccountContext.Provider>
  );
}

export default AccountProvider;

export const useAccount = () => useContext(AccountContext);
