import { combineReducers, legacy_createStore as createStore } from "redux";
import accountReducer from "../features/accounts/accountSlices";
import customerReducer from "../features/customers/customerSlices";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer);

export default store;
