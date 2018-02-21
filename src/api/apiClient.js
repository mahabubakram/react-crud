import axios from 'axios';

class ApiClient {

    static requestHeaders() {
        return {'Content-Type': 'application/json'}
    }

    static getRequest(url, callback){
      return axios.get(url)
          .then(function (response) {
              callback(response);
          })
          .catch(function (error) {
              // Show error modal
          });
    }

    static postRequest(url, data, callback){
      return axios.post(url, data, this.requestHeaders())
          .then(function (response) {
              callback(response);
          })
          .catch(function (error) {
              // Show error modal
          });
    }

}

export default ApiClient;
