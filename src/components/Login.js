import loginArt from '../css/loginArt.css';
import Input from './Input';
import Button from './Button';
import Forgotten from './Forgotten';
import {Switch, Route, Link} from 'react-router-dom';

const Login = () => {
    return (
        <div className='loginBody'>
            <main>
                <Switch>
                    
                    <Route path='/forgotten' component={Forgotten}/>
                </Switch>
            </main>
            <div>
                <div
                style={{
                    marginBottom:'31px',
                    textAlign:'center'
                }}
                >
                    <span 
                    style={{
                        color:'#3F3D56',
                        fontSize:'37px',
                        fontWeight:'bold',
                        userSelect:'none',
                    }}
                    >
                        Faça seu login
                    </span>
                </div>
                <div
                style={{
                    display:'flex',
                    flexDirection:'column',
                    marginBottom:'39px'
                }}
                >
                    <span
                    style={{
                        color:'#323730',
                        fontSize:'14px',
                        userSelect:'none',
                        marginBottom:'6px'
                    }}
                    >
                        E-mail
                    </span>
                    <Input
                    placeholderNew='Insira seu e-mail'
                    tipoInput='email'
                    maximoCaracteres='40'
                    widthInput='515px'
                    />
                </div>   
                <div
                style={{
                    display:'flex',
                    flexDirection:'column',
                    marginBottom:'27px',
                }}
                >
                    <span
                    style={{
                        color:'#323730',
                        fontSize:'14px',
                        userSelect:'none',
                        marginBottom:'6px'
                    }}
                    >
                        Senha
                    </span>
                    <Input
                    placeholderNew='Insira sua senha'
                    tipoInput='password'
                    maximoCaracteres='15'
                    />
                </div>   
                <div
                style={{
                    display:'flex',
                    flexDirection:'row',
                    justifyContent:'space-between',
                    marginBottom:'31px',
                }}
                >
                    <div>
                        <Input
                        tipoInput='checkbox'/>
                        <span
                        style={{
                            color:'#323730',
                            fontSize:'14px',
                            userSelect:'none',
                        }}
                        >
                            Mantenha-me conectado
                        </span>
                    </div>
                    <div>
                        <Link to='/forgotten'>
                        <span
                        style={{
                            color:'#1DB9E0',
                            fontSize:'14px',
                            userSelect:'none',
                            cursor:'pointer'
                        }}>
                            Esqueci minha senha
                        </span>
                        </Link>
                    </div>
                </div>
                <div>
                    <Button>
                        Entrar
                    </Button>
                </div>
                <div
                style={{
                    textAlign:'center',
                    marginTop:'32px'
                }}>
                    <span
                    style={{
                        userSelect:'none'
                    }}>
                        Ainda não tem uma conta?
                    </span>
                    <span
                    style={{
                        marginLeft:'5px',
                        color:'#1DB9E0',
                        userSelect:'none',
                        cursor:'pointer'
                    }}>
                        Cadastre-se
                    </span>
                </div>
            </div>
        </div>
    )

}

export default Login;