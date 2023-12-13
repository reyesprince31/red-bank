export const accountInitialItems = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

export default function accountReducer(state = accountInitialItems, action) {
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload };

    case "account/withdraw":
      return {
        ...state,
        balance:
          state.balance >= action.payload
            ? state.balance - action.payload
            : state.balance,
      };

    case "account/requestLoan":
      if (state.loan > 0) return state;

      return {
        ...state,
        balance: state.balance + action.payload.amount,
        loan: state.loan ? state.loan : action.payload.amount,
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
