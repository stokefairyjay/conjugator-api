

import * as verbService from '../services/verb';

export const conjugate = async (req, resp) : Promise<object> => {

    try {
        const data = verbService.conjugate(req.params.verb);    
        return resp.status(200).send(data); 
    }
    catch( e : any) {
        return resp.status(500).send('An error occured'); 
    }
    

}