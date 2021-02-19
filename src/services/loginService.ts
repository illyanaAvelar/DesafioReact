import axios from 'axios';

class LoginService {
  getUserId = async (login:string, password:string) => {
    const response = await axios.post('https://localhost:44311/api/Login', {login: login, password:password});

    return response.data;
  };
}

export default new LoginService();
  