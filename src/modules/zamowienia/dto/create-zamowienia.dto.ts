export class CreateZamowieniDTO {

    rodzaj_dokumentu: string;

    produkty: {id:number, ilosc: number}[];
}