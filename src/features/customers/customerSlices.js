const customerInitialItems = {
  fullName: "",
  nationalId: "",
  createdAt: "",
};

export default function customerReducer(state = customerInitialItems, action) {
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
