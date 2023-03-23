import { sleep, check } from 'k6';

import hellowAPI from '../services/hellow/index.js'

const hellowfunc = new hellowAPI()

export const options = {
    vus: 1,
    duration: '1s',
  }

export default function(){

    const responde = hellowfunc.postReq()

    check(responde, {
        'status should be 200': (r) => r.status === 200
      })
    
      sleep(1);
}
