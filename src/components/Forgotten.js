import userEvent from '@testing-library/user-event';
import forgottenArt from '../css/forgottenArt.css'
import Input from './Input'
import Button from './Button'

const Forgotten = () => {
    return (
        <div className='forgottenbody'>
            <div>
                <div
                style={{
                    marginBottom:'31px',
                    textAlign:'center'
                }}>
                    <span
                    style={{
                        color:'#3F3D56',
                        fontSize:'37px',
                        fontWeight:'bold',
                        userSelect:'none',
                    }}
                    >
                        Recupere sua senha
                    </span>
                </div>
                <div
                style={{
                    display:'flex',
                    flexDirection:'column',
                    textAlign:'center',
                    color:'#5A6256',
                    fontSize:'16px',
                    userSelect:'none',
                    marginBottom:'28px',
                }}>
                    <span>
                        Fiquei tranquilo! Nós te enviaremos um link
                    </span>
                    <span>
                        de recuperação em seu e-mail.
                    </span>
                </div>
                <div
                style={{
                    display:'flex',
                    flexDirection:'column',
                    marginBottom:'20px'
                }}>
                    <span
                    style={{
                        color:'#323730',
                        fontSize:'14px',
                        marginBottom:'5px'
                    }}>
                        E-mail
                    </span>
                    <Input
                    placeholderNew='Insira seu e-mail'
                    tipoInput='text'
                    maximoCaracteres='40'
                    widthInput='396px'
                    />
                </div>
                <div>
                    <Button>
                        Enviar link de recuperação
                    </Button>
                </div>
                <div
                style={{
                    marginTop:'25px',
                    color:'#1DB9E0',
                    fontSize:'14px',
                    userSelect:'none',
                    cursor:'pointer',
                    textAlign:'center'
                }}>
                    <span>
                        Voltar para a página de Login    
                    </span>    
                </div> 
            </div>
        </div>
    )
}

export default Forgotten;