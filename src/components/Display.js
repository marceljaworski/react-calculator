import './display.css'
import {useState} from 'react'
function Display () {
    const [result, setResult] = useState(0)
    return(
        <div className='Display'>
            <span>{result}</span>
        </div>
    )
}
export default Display;