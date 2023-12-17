import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const CurrencyChange = () => {
  const { dispatch, currency } = useContext(AppContext);

  const handleCurrencyChange = (event) => {
    const newCurrency = event.target.value;
    dispatch({
      type: "CHG_CURRENCY",
      payload: newCurrency,
    });
  };

  return (
    <div className="container mt-4">
      <label htmlFor="currency" className="form-label">
        Select Currency:
      </label>
      <select
        id="currency"
        className="form-select mt-3 p-3 bg-success text-white"
        onChange={handleCurrencyChange}
        value={currency}
      >
        <option value="$" className="text-black">
          $ Dollar
        </option>
        <option value="£" className="text-black">
          £ Pound
        </option>
        <option value="€" className="text-black">
          € Euro
        </option>
        <option value="₹" className="text-black">
          ₹ Ruppee
        </option>
      </select>
      <div className={`currency-display`}>
        {/*Currency display logic here */}
      </div>
    </div>
  );
};

export default CurrencyChange;
