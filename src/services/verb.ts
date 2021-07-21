import { IVerb, IPerson } from '../interfaces/verb';

export const conjugate = (infinitive) : IVerb => {
    let verb : any = {
        infinitive : infinitive
    }
    
    const arrRootType = getRootandType(infinitive);    
    verb.root = arrRootType[0];
    verb.type = arrRootType[1]; 
    
    verb.pattern = getPattern(infinitive); 

    verb.gerund = conjugateGerund(verb.root, verb.type, verb.pattern); 
    verb.participle = conjugateParticiple(verb.root, verb.type, verb.pattern);

    verb.present = conjugateTense(verb.root, verb.type, verb.pattern, 'present');
    verb.preterit = conjugateTense(verb.root, verb.type, verb.pattern, 'preterit');
    verb.imperfect = conjugateTense(verb.root, verb.type, verb.pattern, 'imperfect');
   
    const resp : IVerb = verb; 
    
    return resp;
}

const getRootandType = (infinitive) : string[] => {
    const len = infinitive.length; 
    const root = infinitive.substr(0, len - 2)
    const type = infinitive.substr(root.length, 2); 
    return [ root, type ]; 
}

const conjugateGerund = (root, type, pattern) : string => {
    let addOn = '';

    if(['regular','o->ue'].includes(pattern)){
        switch(type) {
            case 'ar':
                addOn = 'ando';
              break;
            case 'ir':
            case 'er':
                addOn = 'iendo';        
              break;
            default:
                addOn = '--WIPEOUT';
          }
    }

    return `${root}${addOn}`;
}

const conjugateParticiple = (root, type, pattern) : string  => {

    let addOn = '';

    if(['regular','o->ue'].includes(pattern)){
        switch(type) {
            case 'ar':
                addOn = 'ado';
              break;
            case 'ir':
            case 'er':
                addOn = 'ido';        
              break;
            default:
                addOn = '--WIPEOUT';
        }
    }

    return `${root}${addOn}`;

}

const getPresentTenseEnding = (type) : IPerson => {
 
    switch(type) {
        case 'ar': return {
            firstPersonSingular : 'o',
            secondPersonSingular : 'as',
            thirdPersonSingular : 'a',
            firstPersonPlural : 'amos',
            secondPersonPlural : 'áis',
            thirdPersonPlural : 'an'
        }
        case 'ir': return {
            firstPersonSingular : 'o',
            secondPersonSingular : 'es',
            thirdPersonSingular : 'e',
            firstPersonPlural : 'imos',
            secondPersonPlural : 'ís',
            thirdPersonPlural : 'en'
        }
        case 'er': return {
            firstPersonSingular : 'o',
            secondPersonSingular : 'es',
            thirdPersonSingular : 'e',
            firstPersonPlural : 'emos',
            secondPersonPlural : 'éis',
            thirdPersonPlural : 'en'
        }
           
        default:
            return null;
    } 
    
}

const getPreteritTenseEnding = (type) : IPerson => {
 
    switch(type) {
        case 'ar': return {
            firstPersonSingular : 'é',
            secondPersonSingular : 'aste',
            thirdPersonSingular : 'ó',
            firstPersonPlural : 'amos',
            secondPersonPlural : 'asteis',
            thirdPersonPlural : 'aron'
        }
        case 'ir':
        case 'er': return {
            firstPersonSingular : 'í',
            secondPersonSingular : 'iste',
            thirdPersonSingular : 'ió',
            firstPersonPlural : 'imos',
            secondPersonPlural : 'isteis',
            thirdPersonPlural : 'ieron'
        }
           
        default:
            return null;
    }     
}

const getImperfectTenseEnding = (type) => {
 
    switch(type) {
        case 'ar': return {
            firstPersonSingular : 'aba',
            secondPersonSingular : 'abas',
            thirdPersonSingular : 'aba',
            firstPersonPlural : 'ábamos',
            secondPersonPlural : 'abais',
            thirdPersonPlural : 'aban'
        }
        case 'ir':
        case 'er': return {
            firstPersonSingular : 'ía',
            secondPersonSingular : 'ías',
            thirdPersonSingular : 'ía',
            firstPersonPlural : 'íamos',
            secondPersonPlural : 'íais',
            thirdPersonPlural : 'ían'
        }
           
        default:
            return null;
    }     
}

const conjugateTense = (root, type, pattern, tense)  : IPerson => {
    let person : any = {};
    let endings;

    if(tense === 'present'){
        endings = getPresentTenseEnding(type);
    }

    if(tense === 'preterit'){
        endings = getPreteritTenseEnding(type);
    }   

    if(tense === 'imperfect'){
        endings = getImperfectTenseEnding(type);
    }  
    
    person.firstPersonSingular = getConjugatedPerson(root,endings.firstPersonSingular,pattern,tense,'firstPersonSingular'); 
    person.secondPersonSingular = getConjugatedPerson(root,endings.secondPersonSingular,pattern,tense,'secondPersonSingular'); 
    person.thirdPersonSingular = getConjugatedPerson(root,endings.thirdPersonSingular,pattern,tense,'thirdPersonSingular');
    person.firstPersonPlural = getConjugatedPerson(root,endings.firstPersonPlural,pattern,tense,'firstPersonPlural');
    person.secondPersonPlural = getConjugatedPerson(root,endings.secondPersonPlural,pattern,tense,'secondPersonPlural');
    person.thirdPersonPlural = getConjugatedPerson(root,endings.thirdPersonPlural,pattern,tense,'thirdPersonPlural');
    
    const resp: IPerson = person;
    return resp; 
}


const getPattern = (infinitive) => {
    const ops = ['regular','irregular','o->ue']; 
    if(infinitive.length < 3){
        return ops[1]; 
    }
    
    if(infinitive.substr(1,2) === 'ol'){
        return ops[2];
    }

    return ops[0]; 
}


const getConjugatedPerson = (root,ending,pattern,tense,person) : string => {

    if(['firstPersonSingular',
        'secondPersonSingular',
        'thirdPersonSingular',
        'thirdPersonPlural'].includes(person)){
        
        if(tense === 'present' && ['o->ue'].includes(pattern)){
            const arrRep = pattern.split('->');  
            return `${root.replace(arrRep[0], arrRep[1])}${ending}`; 
        }

    }

    return `${root}${ending}`; 

}



