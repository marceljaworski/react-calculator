import Calcbutton from './Calcbutton'
import './keypad.css'
function Keypad () {
    return(
        <div className="Keypad">
            <Calcbutton colorStyle="col-gray" label="AC"/>
            <Calcbutton colorStyle="col-gray" label="+/-"/>
            <Calcbutton colorStyle="col-gray" label="%"/>
            <Calcbutton colorStyle="col-gray" label="/"/>
            <Calcbutton colorStyle="col-gray" label="7"/>
            <Calcbutton colorStyle="col-gray" label="8"/>
            <Calcbutton colorStyle="col-gray" label="9"/>
            <Calcbutton colorStyle="col-gray" label="*"/>
            <Calcbutton colorStyle="col-gray" label="4"/>
            <Calcbutton colorStyle="col-gray" label="5"/>
            <Calcbutton colorStyle="col-gray" label="6"/>
            <Calcbutton colorStyle="col-gray" label="-"/>
            <Calcbutton colorStyle="col-gray" label="1"/>
            <Calcbutton colorStyle="col-gray" label="2"/>
            <Calcbutton colorStyle="col-gray" label="3"/>
            <Calcbutton colorStyle="col-gray" label="+"/>
            <Calcbutton colorStyle="col-gray" label="0"/>
            <Calcbutton colorStyle="col-gray" label="."/>
            <Calcbutton colorStyle="col-gray" label="="/>
            
            <button className="span-two">=</button>
        </div>
    )
}
export default Keypad;