import { useContext } from "react";
import { AccountContext } from "../../contexts/accountContext";

export function useAccount() {
  return useContext(AccountContext);
}

export function depositAccount(amount) {
  return {
    type: "account/deposit",
    payload: amount,
  };
}

export function withdrawAccount(amount) {
  return {
    type: "account/withdraw",
    payload: amount,
  };
}

export function requestLoan(loan, loanPurpose) {
  return {
    type: "account/requestLoan",
    payload: { amount: loan, purpose: loanPurpose },
  };
}

export function payLoan() {
  return {
    type: "account/payLoan",
  };
}
