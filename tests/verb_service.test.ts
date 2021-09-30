import { expect, it } from '@jest/globals';
import * as verbService from '../src/services/verb';
import { IVerb } from '../src/interfaces/verb';

describe('verbService', () => {

    it('returns verb as IVerb and checks root prop  ', () => {
      
        const verb : IVerb = verbService.conjugate('trabajar');
        expect(verb).toHaveProperty('root');    

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

    it('handles a bogus word', () => {
        const verb = 'facebook';
        const data = verbService.conjugate(verb); 
        expect(data).toBeNull();
    });

});