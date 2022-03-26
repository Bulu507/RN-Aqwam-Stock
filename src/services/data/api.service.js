import axios from 'axios';
import qs from 'qs';
import {BASE_URL} from '../../parameter';
import AuthService from '../auth';

export const GET = async (path, params) => {
  console.log('cek params Get', params);
  const api = axios.create({baseURL: BASE_URL});
  const header = await AuthService.Header();
  const promise = new Promise((resolve, reject) => {
    api
      .get(`${BASE_URL}${path}`, {
        params,
        paramsSerializer: (p) => {
          return qs.stringify(p);
        },
        headers: header,
      })
      .then(
        (result) => {
          console.log('respons GET', result);
          resolve(result.data.data.result);
        },
        (err) => {
          const error = err.response;
          console.log('cek error = ', err);
          reject(error);
        },
      );
  });
  return promise;
};

export const POST = async (path, params) => {
  console.log('cek params POST = ', params);
  const api = axios.create({baseURL: BASE_URL});
  const header = await AuthService.Header();
  const promise = new Promise((resolve, reject) => {
    api
      .post(`${BASE_URL}${path}`, params, {
        paramsSerializer: (p) => {
          return qs.stringify(p);
        },
        headers: header,
      })
      .then(
        (result) => {
          console.log('cek POST result  = ', result);
          resolve(result.data);
        },
        (err) => {
          const error = err.response;
          console.log('err post', error);
          reject(error);
        },
      );
  });
  return promise;
};

export const PUT = async (path, params) => {
  console.log('cek params put', params);
  const api = axios.create({baseURL: BASE_URL});
  const header = await AuthService.Header();
  const promise = new Promise((resolve, reject) => {
    api.put(`${BASE_URL}${path}`, params, {headers: header}).then(
      (result) => {
        console.log('cek put = ', result);
        resolve(result.data);
      },
      (err) => {
        const error = err.response;
        reject(error);
      },
    );
  });
  return promise;
};

export const DELETE = async (path, params) => {
  const api = axios.create({baseURL: BASE_URL});
  const header = await AuthService.Header();
  const promise = new Promise((resolve, reject) => {
    api.delete(`${BASE_URL}${path}`, {params, headers: header}).then(
      (result) => {
        console.log('cek result', result);
        resolve(result.data);
      },
      (err) => {
        // console.log('cek error', err);
        const error = err.response;
        reject(error);
      },
    );
  });
  return promise;
};
