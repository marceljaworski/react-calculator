import './display.css'

function Display ({previous}) {
    return(
        <div className='Display'>
            <div className='previous'>{previous}</div>
            {/* <div className='current'>{current}</div> */}
        </div>
    )
}
export default Display;