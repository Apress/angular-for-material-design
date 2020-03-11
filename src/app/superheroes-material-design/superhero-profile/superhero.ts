const superheroes = [
    {
        name: "batman",
        creators: ["Bob Kane", "Bill Finger"],
        firstAppearance: "Year 1939",
        livesIn: "Gotham City",

    },
    {
        name: "Chhota Bheem",
        creators: [	
            "Raj Viswanadha",
            "Arun Shendurnikar",
            "Nidhi Anand"],
        firstAppearance: "Year 2008",
        livesIn: "India",
    },
    
];

export default superheroes;

function filterSuperhero(name: string): any{
    return superheroes.find( x => x.name === name);
}

export function getSuperheroLocation(name: string): string{
    return filterSuperhero(name).livesIn;
}

function getSuperheroCreators(name: string): Array<string>{
    return filterSuperhero(name).creators;
}

export  {getSuperheroCreators};