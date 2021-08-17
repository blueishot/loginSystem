import reset from '../css/reset.css'
import inputArt from '../css/inputArt.css'

const Input = (props) => {
    return (
        <input className='inputStyle' 
        type={props.tipoInput}
        placeholder={props.placeholderNew}
        maxLength={props.maximoCaracteres}
        style={{
            width:props.widthInput
        }}
        />
    )
}

export default Input;