export class Akku {
    private _kapazitaet: number;
    private _ladestand: number;
    private _ladezyklen: number;

    constructor(kapazitaet: number, ladestand: number, ladezyklen: number) {
        this._kapazitaet = kapazitaet;
        this._ladestand = ladestand;
        this._ladezyklen = ladezyklen;
    }

    get kapazitaet(): number {
        return this._kapazitaet;
    }

    get ladestand(): number {
        return this._ladestand;
    }

    get ladezyklen(): number {
        return this._ladezyklen;
    }

    // Akku verbrauchen
    verbrauchen(verbrauch: number) {

        let prozent = (verbrauch / this._kapazitaet) * 100;

        this._ladestand -= prozent;

        if (this._ladestand < 0) {
            this._ladestand = 0;
        }

    }

    // Akku aufladen
    aufladen(prozent: number) {

        this._ladestand += prozent;

        if (this._ladestand > 100) {
            this._ladestand = 100;
        }

    }

    // Informationen anzeigen
    printdata() {
        console.log("Kapazität: " + this._kapazitaet + " mAh");
        console.log("Ladestand: " + this._ladestand.toFixed(2) + "%");
        console.log("Ladezyklen: " + this._ladezyklen);
    }
}