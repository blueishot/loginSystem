import reset from '../css/reset.css'
import buttonArt from '../css/buttonArt.css'

const Button = (props) => {
    return (
        <div className='buttonBody'>
            <button className='buttonStyle'>
                {props.children}
            </button>
        </div>
    )
}

export default Button;