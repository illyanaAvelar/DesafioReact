import axios from 'axios';

class LoginService {
  getUserId = async (login:string, password:string) => {
    const response = await axios.post('https://g6rentcar.azurewebsites.net/api/Login', {login: login, password:password});

    return response.data;
  };
}

export default new LoginService();
  