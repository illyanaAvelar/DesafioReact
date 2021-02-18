
import { useEffect } from 'react';
import {LoginContainer, LoginFields, BackgroundImage, Label, StyledLink} from '../../components/Login/styledComponents/index'; 
import logoImage from '../../shared/assets/images/logo.png';
import { Link } from 'react-router-dom';
import { Input, Button } from '../../shared/styledComponents'

const Login = () => {

  useEffect(() => {
   
  }, []);

  return (
    <LoginContainer>
        <BackgroundImage />
        <LoginFields>
          <img width={180} height={50} alt='logo' src={logoImage} style={{margin: 15, marginRight:50}}/>
          <h2>Entre ou Registre-se</h2>
          <Link to='/register'>
            <StyledLink>Ainda não tenho uma conta</StyledLink>
          </Link>
          <Label>Login</Label>
          <Input width={250} opacity={0.5} margin={0} placeholder='email@exemplo.com'/>
          <Label>Senha</Label>
          <Input width={250} opacity={0.5} margin={0} placeholder='Digite sua senha' type='password'/>
          <Link to='/main'>
            <Button negativeMargin={-15} width={250}>LOGIN</Button>
          </Link>
      </LoginFields>
    </LoginContainer>
  );
}

export default Login;