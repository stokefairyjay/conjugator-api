import { expect, it } from '@jest/globals';
import * as verbService from '../src/services/verb';

describe('verbService', () => {

    it('returns verb with root ', () => {
      
        const verb = verbService.conjugate('trabajar');
        const root = verb.root; 
        expect(root).toEqual('trabaj');    

    });

    it('conjugates trabajar, an example regular verb correctly ', () => {
      
        const verb = verbService.conjugate('trabajar');
        const fps = verb.present.firstPersonSingular; 
        expect(fps).toEqual('trabajo');    

    });

    it('conjugates volar, an irregular o->ue ruleset verb correctly ', () => {
      
        const verb = verbService.conjugate('volar');
        const sps = verb.present.secondPersonSingular; 
        expect(sps).toEqual('vuelas');    

    });

});