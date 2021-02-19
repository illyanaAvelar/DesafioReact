
import { useState } from 'react';
import {LoginContainer, LoginFields, BackgroundImage, Label, StyledLink} from '../../components/Login/styledComponents/index'; 
import logoImage from '../../shared/assets/images/logo.png';
import { Link } from 'react-router-dom';
import { Input, Button } from '../../shared/styledComponents'
import Header from '../../shared/components/Header/Header'
import LoginService from '../../services/loginService'

const Login = () => {
  
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  
  const handleOnClick = async (login:string, password:string) => {
    const id = await LoginService.getUserId(login, password);
    localStorage.setItem('userId', id);
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
          <Link to='/main'>
            <Button 
              negativeMargin={-15} 
              width={250}
              onClick={()=>{handleOnClick(login, password)}}
            >
              LOGIN
            </Button>
          </Link>
      </LoginFields>
    </LoginContainer>
  </>
  );
}

export default Login;