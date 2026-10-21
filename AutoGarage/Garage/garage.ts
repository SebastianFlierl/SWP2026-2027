import {Auto} from "../Auto/auto.ts"

export class Garage {
    private _name: string;
    private _anzahlPlaetze: bigint;
    private _autos: Auto[];

    constructor(name: string, anzahlPlaetze: bigint) {
        this._anzahlPlaetze = anzahlPlaetze;
        this._name = name;
        this._autos = [];
    }

    // CREATE - Auto zur Garage hinzufügen
    addAuto(auto: Auto) {

        if (BigInt(this._autos.length) < this._anzahlPlaetze) {
            this._autos.push(auto);
        } else {
            console.log("Die Garage ist voll!");
        }

    }

    // READ - Alle Autos anzeigen
    zeigeAutos() {

        this._autos.forEach((auto) => {
            auto.printdata();
        });

    }

    // READ - Autos nach Marke suchen
    sucheAutos(marke: string): Auto[] {

        return this._autos.filter((auto) => {
            return auto.marke === marke;
        });

    }

    // DELETE - Auto entfernen
    entferneAuto(auto: Auto) {

        let index = this._autos.indexOf(auto);

        if (index !== -1) {
            this._autos.splice(index, 1);
        }

    }

}