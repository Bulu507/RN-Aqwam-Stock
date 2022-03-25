import axios from 'axios';
import {getData, removeData} from '../localstorage';
import {BASE_URL, localDataPath} from '../../parameter';

const Login = (params) => {
  const api = axios.create({baseURL: BASE_URL});
  const promise = new Promise((resolve, reject) => {
    api.post(`${BASE_URL}/LoginAdmin`, params).then(
      (result) => {
        // console.log('cek res', result);
        resolve(result.data);
      },
      (err) => {
        console.log('cek err', err.response);
        console.log('cek err status', err.response.status);
        if (err.response.status === 500) {
          reject({response_msg: 'Internal Server Error'});
        } else if (err.response.status === 400) {
          reject({response_msg: 'username atau password salah!'});
        } else {
          const error = err.response.data.data.result;
          const messageError = error[Object.keys(error)[0]];
          reject(messageError);
        }
      },
    );
  });

  return promise;
};

const Header = async () => {
  try {
    const data = await getData(localDataPath.DATA_USER);
    if (data.access_token) {
      return {Authorization: 'Bearer ' + data.access_token};
    }
  } catch (error) {
    console.log(error);
    return;
  }
};

const Logout = async (params) => {
  const api = axios.create({baseURL: BASE_URL});
  const header = await Header();
  const promise = new Promise((resolve, reject) => {
    api.post(`${BASE_URL}/Logout`, params, {headers: header}).then(
      (result) => {
        removeData(localDataPath.DATA_USER);
        resolve(result.data);
      },
      (err) => {
        const error = err.response.data.data.result;
        const messageError = error[Object.keys(error)[0]];
        reject(messageError);
      },
    );
  });

  return promise;
};

const AuthService = {
  Login,
  Header,
  Logout,
};

export default AuthService;
