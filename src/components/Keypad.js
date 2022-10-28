import Calcbutton from './Calcbutton'
import './keypad.css'
function Keypad () {
    return(
        <div className="Keypad">
            <Calcbutton label="AC"/>
            <Calcbutton label="+/-"/>
            <Calcbutton label="%"/>
            <Calcbutton label="1"/>
            <Calcbutton label="2"/>
            <Calcbutton label="3"/>
            
         
            <button>*</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>+</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>-</button>
            <button>.</button>
            <button>0</button>
            <button className="span-two">=</button>
        </div>
    )
}
export default Keypad;