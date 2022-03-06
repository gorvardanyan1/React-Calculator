import { useRef, useState } from 'react';
import './App.css';
import App1 from "./App1";
import App2 from "./App2";
import App3 from "./App3";
import App4 from "./App4";
import App5 from "./App5";


function App() {
  let [value, setValue] = useState("0")
  // let [ArmOperation, setArmOperation] = useState(0)
  let ArmOperation = useRef()
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
  const arithOpFunc = () => {

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
          <App1 ac={(bool) => { if (bool) { setValue(0) } }} />
          <App2 clickItm={(num) => setValue((n) => setValueFunc(n, num))} />
          <App3 clickItm={(num) => setValue((n) => setValueFunc(n, num))} />
          <App4 clickItm={(num) => setValue((n) => setValueFunc(n, num))}
            arithOp={(op) => {
              ArmOperation.current = value.toString()
              setValue(0)
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
              let equali = Number(ArmOperation.current) + Number(value)
              setValue(equali)
            }}
          />
        </tbody>
      </table>
    </div>
  );
}


export default App;
