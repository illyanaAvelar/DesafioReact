
import { useState } from 'react';
import {LoginContainer, LoginFields, BackgroundImage, Label, StyledLink} from '../../components/Login/styledComponents/index'; 
import logoImage from '../../shared/assets/images/logo.png';
import { Link, useHistory } from 'react-router-dom';
import { Input, Button } from '../../shared/styledComponents/index';
import Header from '../../shared/components/Header/Header';
import LoginService from '../../services/loginService';

const Login = () => {

  const history = useHistory();

  interface IUser {
    login: string;
    senha: string;
  }

  var user : IUser = {
    login: '',
    senha: '',
  }

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  
  const handleOnClick = async (user:IUser) => {
    user.login = login;
    user.senha = password;
    const response = await LoginService.getUserId(user);
    localStorage.setItem('userId', response.Id.toString());
    if(!response.Id){
      alert("Usuário inválido!")
    }
    history.push('/main');
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
            placeholder='CPF ou CNPJ'
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