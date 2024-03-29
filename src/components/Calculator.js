import Display from './Display'
import './calculator.css'
import { useState } from 'react';

function Calculator () {
    const [number, setNumber] = useState([0])
    const [firstNumber, setfirstNumber] = useState("")
    const [operator, setOperator] = useState("")
    console.log(number, firstNumber)

    const handleOperator = (event) => {
        setOperator(event.target.value)
        setfirstNumber(number.join(""))
        setNumber([])
    }
    
    const handleNumber = (event) => {
        console.log(event.target.value)
        if(+event.target.value === 0 && +number === 0){
            return  number;
        } 
        if(+event.target.value !== 0 && +number === 0){
            return setNumber([event.target.value]);
        } 
        if(event.target.value === "." && number.includes(".")){
            return number;
        } 
        return setNumber((number) => [ ...number, event.target.value,]);
    }
    const handleAC = () => {
        setNumber(["0"]);
        setfirstNumber("")
        setOperator("")
    }
    const handleMinus = () => {
        const result = +number.join("") * -1
        setNumber([result]);
    }
    const handlePorcent = () => {
        const result = +number.join("") / 100
        setNumber([result]);
    }
    const calculate = () => {
        switch (operator) {
            case "+":
                setNumber([(+firstNumber + +number.join(""))])
                setfirstNumber("")
                setOperator("")
                break;
            case "-":
                setNumber([(+firstNumber - +number.join(""))])
                setfirstNumber("")
                setOperator("")
                break;
            case "*":
                setNumber([(+firstNumber * +number.join(""))])
                setfirstNumber("")
                setOperator("")
                break;
            case "/":
                setNumber([(+firstNumber / +number.join(""))])
                setfirstNumber("")
                setOperator("")
                break;
            case "%":
                setNumber([(+firstNumber % +number.join(""))])
                setfirstNumber("")
                setOperator("")
                break;
           
            default:
                console.log(`please choose an operator`);

        }
    }
    return (
        <div className='Calculator'>
            <Display previous={number} oper={operator} current={firstNumber}/>
            <div className="Keypad">
                <button onClick={handleAC} value="AC">C</button>
                <button onClick={handleMinus} name= "operator" value="+/-">+/-</button>
                <button onClick={handlePorcent} name= "operator" value="%">%</button>
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
                <button onClick={handleNumber} value=".">.</button>
                <button onClick={calculate} className="equal" value="=">=</button>
            </div>
        </div>
    )
}
export default Calculator;