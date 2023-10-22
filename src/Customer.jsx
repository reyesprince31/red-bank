import { useCustomer } from "./contexts/customerContext";

function Customer() {
  const { fullName } = useCustomer();
  return <h2>👋 Welcome, {fullName}</h2>;
}

export default Customer;
