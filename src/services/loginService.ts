import api from './api';

class LoginService {
  getUserId = async (user:object) => {
    const response = await api.post(`/api/Login`, `${user}`);

    return response.data;
  };
}

export default new LoginService();
  