import { useState, useEffect } from "react";
import { InputBox } from "./components";
import useCurrency from "./myHooks/useCurrency";
// import InputBox from "./components/inputbox";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrency(from);
  const options = currencyInfo ? Object.keys(currencyInfo) : [];

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
    // console.log(options);
  };

  return (
    <>
      <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat bg-gray-400"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        }}
      >
        <div className="w-full ">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert();
              }}
            >
              <div className="w-full mb-1">
                <InputBox
                  label={"From"}
                  amount={amount}
                  options={options}
                  amountInputId={"from"}
                  onCurrencyChange={(currency) => setFrom(currency)}
                  selectCurrency={from}
                  onAmountChange={(amount) => setAmount(amount)}
                ></InputBox>
              </div>
              <div>
                <button
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    swap();
                  }}
                >
                  Swap
                </button>
              </div>
              <div className="w-full mb-1 mb-4">
                <InputBox
                  label={"To"}
                  amount={convertedAmount}
                  options={options}
                  amountInputId={"from"}
                  onCurrencyChange={(currency) => setTo(currency)}
                  selectCurrency={to}
                  amountDisable={true}
                ></InputBox>
              </div>
              <div className="w-full flex justify-center m-1">
                <button className="bg-blue-500 m-1">
                  Convert {from} to {to} &#8645;
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
