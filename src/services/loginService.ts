import api from './api';

class LoginService {
  getUserId = async (user:object) => {
    const response = await api.post(`/Login`, user);

    return response.data;
  };
}

export default new LoginService();