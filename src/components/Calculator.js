import Display from './Display'
import Keypad from './Keypad'
import './calculator.css'
function Calcualtor () {
    return (
        <div className='Calculator'>
            <Display />
            <Keypad />
        </div>
    )
}
export default Calcualtor;