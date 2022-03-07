import { useRef, useState } from 'react';
import './App.css';
import App1 from "./App1";
import App2 from "./App2";
import App3 from "./App3";
import App4 from "./App4";
import App5 from "./App5";


function App() {
  let [value, setValue] = useState("0")
  let num2 = 0;
  let ArmOperation = useRef({ val: 0, type: "" })
  const setValueFunc = (n, num) => {
    if (n != 0) {
      return `${n}${num}`
    }
    else if (n[0] == 0 && n[1] == ".") {
      return `${n}${num}`
    }
    else {
      return num
    }
  }
  const arithOpFunc = (op) => {
    ArmOperation.current.val = value.toString()
    ArmOperation.current.type = op
    setValue(0)
  }
  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th colSpan={4} className="thInput">
              <p className='inputCalc'>{value}</p>
            </th>
          </tr>
        </thead>
        <tbody>
          <App1 ac={(bool) => { if (bool) { setValue(0) } }}
            arithOp={(op) => arithOpFunc(op)} />
          <App2 clickItm={(num) => setValue((n) => setValueFunc(n, num))}
            arithOp={(op) => arithOpFunc(op)} />
          <App3 clickItm={(num) => setValue((n) => setValueFunc(n, num))}
            arithOp={(op) => arithOpFunc(op)} />
          <App4 clickItm={(num) => setValue((n) => setValueFunc(n, num))}
            arithOp={(op) => {
              arithOpFunc(op)
              // ArmOperation.current.val = value.toString()
              // ArmOperation.current.type = op
              // setValue(0)
            }}
          />
          <App5 clickItm={(num) => setValue((n) => setValueFunc(n, num))}
            dat={(dat) => {
              let numStr = value.toString()
              if (!numStr.includes(dat)) {
                setValue((n) => `${n}${dat}`)
              }
            }}
            equaliz={() => {
              if (ArmOperation.current.type === "+") {
                setValue(Number(ArmOperation.current.val) + Number(value))
                ArmOperation.current.val = 0

              }
              else if (ArmOperation.current.type === "-") {
                setValue(Number(ArmOperation.current.val) - Number(value))
                ArmOperation.current.val = 0
              }
              else if (ArmOperation.current.type === "X") {
                setValue(Number(ArmOperation.current.val) * Number(value))
                ArmOperation.current.val = 0
              }
              else if (ArmOperation.current.type === "/") {
                setValue(Number(ArmOperation.current.val) / Number(value))
                ArmOperation.current.val = 0
              }
            }}
          />
        </tbody>
      </table>
    </div>
  );
}


export default App;
