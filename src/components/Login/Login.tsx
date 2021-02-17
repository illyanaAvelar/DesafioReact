
import { useEffect } from 'react';
import logoImage from '../../assets/images/logopb.png'
import {LoginContainer, Input, SideImage} from './StyledComponents/index'

import sideImageSrc from '../../assets/images/temporary.jpg'

const Login = () => {

  useEffect(() => {
   
  }, []);

  return (
    <LoginContainer>
        <SideImage/>
        <div className='login-container'>
            <div className='login-logo'>
                <img width={170} height={50} src={logoImage} alt='logo'/>
                <h2>LOCALIZA</h2>
            </div>
            <div className='login-fields' style={{display: 'flex', flexDirection: 'column'}}>
                <Input placeholder='login'/>
                <Input placeholder='senha'/>
            </div>
        </div>
    </LoginContainer>
  );
}

export default Login;