import { useState } from "react";
import { useCustomer } from "../../contexts/customerContext";

function Customer() {
  const [fullName, setFullName] = useState("");
  const [nationalId, setNationalId] = useState("");

  const { dispatch } = useCustomer();

  function handleClick() {
    if (!fullName || !nationalId) return;

    dispatch({
      type: "customer/createCustomer",
      payload: { fullName, nationalId, createdAt: new Date().toISOString() },
    });
  }

  return (
    <div>
      <h2>Create new customer</h2>
      <div className="inputs">
        <div>
          <label>Customer full name</label>
          <input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div>
          <label>National ID</label>
          <input
            value={nationalId}
            onChange={(e) => setNationalId(e.target.value)}
          />
        </div>
        <button onClick={handleClick}>Create new customer</button>
      </div>
    </div>
  );
}

export default Customer;
