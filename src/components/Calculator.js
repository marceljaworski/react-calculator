import Display from './Display'
import './calculator.css'
import { useState } from 'react';

function Calculator () {
    const [number, setNumber] = useState([])
    const [operator, setOperator] = useState("")
    console.log(number, operator)
    const handleOperator = (event) => {
        setOperator({
          ...operator,
          [event.target.name]: event.target.value,
        });
    };
    const handleNumber = (event) => {
        setNumber((number) => [ ...number, event.target.value,]);
    }
    return (
        <div className='Calculator'>
            <Display previous={number}/>
            <div className="Keypad">
                <button onClick={handleOperator} value="AC">AC</button>
                <button onClick={handleOperator} name= "operator" value="%">%</button>
                <button onClick={handleOperator} name= "operator" value="+">+</button>
                <button onClick={handleOperator} name= "operator" value="/">/</button>
                <button onClick={handleNumber} name= "number" value="7">7</button>
                <button onClick={handleNumber} name= "number" value="8">8</button>
                <button onClick={handleNumber} name= "number" value="9">9</button>
                <button onClick={handleOperator} name= "operator" value="*">*</button>
                <button onClick={handleNumber} name= "number" value="4">4</button>
                <button onClick={handleNumber} name= "number"value="5">5</button>
                <button onClick={handleNumber} name= "number" value="6">6</button>
                <button onClick={handleOperator} name= "operator" value="-">-</button>
                <button onClick={handleNumber} name= "number" value="1">1</button>
                <button onClick={handleNumber} name= "number" value="2">2</button>
                <button onClick={handleNumber} name= "number" value="3">3</button>
                <button onClick={handleOperator} name= "operator" value="+">+</button>
                <button onClick={handleNumber} name= "number" value="0">0</button>
                <button onClick={handleOperator} value=".">.</button>
                <button onClick={handleOperator} value="=">=</button>
            </div>
        </div>
    )
}
export default Calculator;