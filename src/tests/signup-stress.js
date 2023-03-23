import { sleep, check } from 'k6';

import signupAPI from '../services/signup/index.js'

const signupService = new signupAPI()

export const options = {
    vus: 1,
    duration: '1s',
  }

export default function (){

    let resp = signupService.postReq()
    
    check(resp, {
        'status should be 201': (r) => r.status === 201
      })
    
    sleep(1);
}