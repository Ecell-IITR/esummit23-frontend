import axios from 'axios';

const FetchApi = (method, url, params, TokenValue) => {

  return new Promise((resolve, reject) => {
    if (TokenValue) {
      axios({
        method: method,
        url: url,
        data: params,
        headers: {
          Authorization: 'Token ' + TokenValue,
        },
        responseType: 'json',
      })
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    } else {

      axios({
        method: method,
        url: url,
        data: params,
        responseType: 'json',
      })
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    }
  });
};

export default FetchApi;
