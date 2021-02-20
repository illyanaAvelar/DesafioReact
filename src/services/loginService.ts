import axios from 'axios';

class LoginService {
  getUserId = async (user:object) => {
    const response = await axios.post(`/api/Login`, `${user}`);

    return response.data;
  };
}

export default new LoginService();
  