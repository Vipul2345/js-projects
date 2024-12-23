import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [pass, setPass] = useState("");
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  const passWordRef = useRef(null);

  const passwordgen = useCallback(() => {
    let password = "";
    let char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) char += "0123456789";
    if (charAllowed) char += "!@#$%^&*()_+";
    for (let i = 1; i <= length; i++) {
      const str = Math.floor(Math.random() * char.length);
      password += char.charAt(str);
    }
    setPass(password);
  }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    passwordgen();
  }, [length, charAllowed, numberAllowed]);

  const copyPassword = () => {
    window.navigator.clipboard.writeText(pass);
    passWordRef.current.select();
  };

  return (
    <>
      <div className="bg-black w-full h-screen flex justify-center items-center">
        <div className="flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="bg-gray-300 p-6 rounded-3xl shadow-lg flex items-center gap-4">
            <input
              type="text"
              name="passwordgen"
              id="pass"
              className="px-5 py-3 rounded-3xl shadow-lg flex-grow"
              value={pass}
              readOnly
              ref={passWordRef}
            />
            <button
              className="bg-blue-400 px-6 py-4 rounded-3xl shadow-lg"
              onClick={copyPassword}
            >
              Copy
            </button>
          </div>
          <div className="bg-red-600 p-6 rounded-3xl shadow-lg flex items-center gap-2">
            <input
              type="range"
              min="0"
              max="100"
              value={length}
              id="myRange"
              className="bg-blue-400"
              onChange={(e) => setLength(Number(e.target.value))}
            />
            <label htmlFor="length">Length : {length}</label>
            <input
              type="checkbox"
              name="charactersAccepted"
              checked={charAllowed}
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            <label>Characters Accepted</label>
            <label>
              <input
                type="checkbox"
                name="numbersAccepted"
                checked={numberAllowed}
                onChange={() => setNumberAllowed((prev) => !prev)}
              />
              Numbers Accepted
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
