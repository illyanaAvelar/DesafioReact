
import { useState } from 'react';
import {LoginContainer, LoginFields, BackgroundImage, Label, StyledLink} from '../../components/Login/styledComponents/index'; 
import logoImage from '../../shared/assets/images/logo.png';
import { Link, useHistory } from 'react-router-dom';
import { Input, Button } from '../../shared/styledComponents'
import Header from '../../shared/components/Header/Header'
import LoginService from '../../services/loginService'

const Login = () => {

  const history = useHistory();

  interface IUser {
    id: number;
    login: string;
    senha: string;
    passwordHash: string;
    passwordSalt: string;
    role: number;
  }

  var user : IUser = {
    id: 1,
    login: '',
    senha: '',
    passwordHash: '',
    passwordSalt: '',
    role: 0,
  }

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  
  const handleOnClick = async (user:IUser) => {
    user.login = login;
    user.senha = password;
    history.push('/main');
    const response = await LoginService.getUserId(user);
    localStorage.setItem('userId', user.id.toString());
    if(!response){
      alert("Usuário inválido!")
    }
  };

  return (<>
    <Header/>
    <LoginContainer>
        <BackgroundImage />
        <LoginFields>
          <img 
            width={180}
            height={50} 
            alt='logo' 
            src={logoImage} 
            style={{margin: 15, marginRight:50}}
          />
          <h2>Entre ou Registre-se</h2>
          <Link to='/register'>
            <StyledLink>Ainda não tenho uma conta</StyledLink>
          </Link>
          <Label>Login</Label>
          <Input 
            width={250} 
            opacity={0.5} 
            margin={0} 
            placeholder='email@exemplo.com'
            onChange={e => {
              setLogin(e.target.value);
            }}
          />
          <Label>Senha</Label>
          <Input 
            width={250} 
            opacity={0.5} 
            margin={0} 
            placeholder='Digite sua senha' 
            type='password'
            onChange={e => {
              setPassword(e.target.value);
            }}
          />
          <Button 
            negativeMargin={-15} 
            width={250}
            onClick={()=>{handleOnClick(user)}}
          >
            LOGIN
          </Button>
      </LoginFields>
    </LoginContainer>
  </>
  );
}

export default Login;