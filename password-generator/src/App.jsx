import { useState, useCallback, useRef, useEffect } from "react";
import "./App.css";

function App() {
  const [length, setlength] = useState(8);
  const [numberallow, setnumber] = useState(false);
  const [charallow, setchar] = useState(false);
  const [password, setpassword] = useState("");

  const passwordRef = useRef(null);

  const generatepassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";


    if (charallow) str += "!@#$%^&*(_+)/,.;";
    if (numberallow) str += "1234567890";
    for (let i = 1; i <= length; i++) {
      let chars = Math.floor(Math.random() * str.length + 1);
      console.log(chars);
      console.log(str.length,"lenght ye hai");
      pass += str.charAt(chars);
    }
    setpassword(pass);
  }, [length, numberallow, charallow, setpassword]);

  let copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 16);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    generatepassword();
  }, [length, numberallow, charallow, generatepassword]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-500">
        <p className="mb-3 pt-3 text-xl"> Password Generator</p>
        <div>
          <input
            type="text"
            ref={passwordRef}
            value={password}
            readOnly
            className="bg-white text-blue-500 px-2 rounded-md py-2 my-3"
            placeholder="Generate your password"
          />

          <button onClick={copyPasswordToClipboard} className="ml-4 px-2 py-2">
            Copy
          </button>
        </div>

        <div>
          <input
            type="range"
            value={length}
            onChange={(e) => {
              setlength(e.target.value);
            }}
            max={16}
            min={4}
            className="border-solid border-black border cursor-pointer bg-black left-0 mx-4 my-5"
          />

          <label className=" py-3">Lenght</label>
          <div className="pb-5">
            <label className="  text-black  mb-2">Number</label>

            <input
              className="px-1 py-1 mx-2 cursor-pointer  "
              type="checkbox"
              defaultChecked={numberallow}
              onChange={() => {
                setnumber((prev) => !prev);
                // if checkboc type is allowd then change the value to disable 
              }}
              placeholder="number"
            />

            <label className="  text-black py-3">character</label>

            <input 
            className="px-1 py-1 mx-2 cursor-pointer  "
              type="checkbox"
              onChange={() => {
                setchar((prev) => !prev);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
