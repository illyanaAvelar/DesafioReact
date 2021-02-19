import axios from 'axios';

class LoginService {
  getDocumentUrl = async (login:string) => {
    const response = await axios.post(`${"BaseUrl"}/Login`, login);

    return response.data;
  };
}

export default new LoginService();
  