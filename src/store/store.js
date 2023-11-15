import { legacy_createStore as createStore } from "redux";

const initialItems = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

function reducer(state = initialItems, action) {
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

const store = createStore(reducer);

console.log(store.getState());
