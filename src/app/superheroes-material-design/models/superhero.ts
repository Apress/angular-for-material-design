export class Superhero {
    name: string;
    email: string;
    details: string;
    country: string;
    specialPowers: Array<string> = [];
    favFood: Array<string> = [];
    cardImage: string;
    isExpanded?: boolean;
}

export class Superhero2 extends Superhero{
    id: number;
}
