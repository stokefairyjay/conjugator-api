export interface IVerb {
    infinitive: string,
    type: string,
    root: string, 
    pattern: string,
    gerund: string, 
    participle: string, 
    present: IPerson
    imperfect: IPerson
    preterit: IPerson
}

export interface IPerson {
    firstPersonSingular: string,
    secondPersonSingular: string,
    thirdPersonSingular: string,
    firstPersonPlural: string,
    secondPersonPlural: string,
    thirdPersonPlural: string 
}
