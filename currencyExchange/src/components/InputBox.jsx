import React, { useId } from "react";

const InputBox = ({
  label = "",
  amount = 0,
  currencyDisable = false,
  onAmountChange,
  onCurrencyChange,
  amountDisable = false,
  options = [],
  selectCurrency = "USD",
  className = "",
}) => {
  const amountInputId = useId();
  return (
    <div
      className={`bg-white align-middle p-3 rounded-2xl text-sm flex ${className}`}
    >
      <div className="w-1/2">
        {label && (
          <label
            htmlFor={amountInputId}
            className={`block mb-2 text-gray-700 `}
          >
            {label}
          </label>
        )}
        <input
          className="outline-none w-full bg-transparent py-1.5 text-black"
          id={amountInputId}
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 cursor-pointer outline-none text-gray-600"
          value={
            options.includes(selectCurrency) ? selectCurrency : options[0] || ""
          }
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {options.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default InputBox;
