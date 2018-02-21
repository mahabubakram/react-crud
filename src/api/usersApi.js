import axios from 'axios';
import {default as apiClient} from './apiClient';

class usersApi{

    static SERVER_URL= 'http://localhost:9999';
    static TEST_SERVER_URL= 'http://localhost:9999';

    static requestHeaders() {
        return {'Content-Type': 'application/json'}
    }

    static getUsersList(callback){
        return apiClient.getRequest(`${this.SERVER_URL}/users`, callback);
    }

    static postUserLogin(user, callback){
        return apiClient.postRequest(`${this.TEST_SERVER_URL}/users`, user, callback);
    }

}


export default usersApi;
