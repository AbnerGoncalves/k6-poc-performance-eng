import http from 'k6/http';

export default class hellowAPI {
    postReq(){
        return http.get('http://localhost:3333');
    }
}
