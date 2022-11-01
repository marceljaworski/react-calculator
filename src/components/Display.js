import './display.css'

function Display ({previous, current, oper}) {
    return(
        <div className='Display'>
            <div className='current'>{current} {oper}</div>
            <div className='previous'>{previous}</div>        
        </div>
    )
}
export default Display;