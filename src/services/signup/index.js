import http from 'k6/http';

import uuid from '../../libs/uuid.js'


export default class signupAPI {
    postReq(){

        const url = 'http://localhost:3333/signup'

        const payload = JSON.stringify(
          {email: `${uuid.v4().substring(24)}@qa.eng.com`, password:'abnerteste123'}
        )
      
        const headers = {
          'headers':{
            'Content-Type': 'application/json'
          }
        }

        
        return http.post(url, payload, headers)
    }
}
