export class Auto {
    private _marke: string ="";
    private _farbe: string ="";
    private _ps: number =0;

    constructor(marke: string, farbe: string, ps: number) {
        this._marke = marke;
        this._farbe = farbe;
        this._ps = ps;
    }

    get marke(): string {
        return this._marke;
    }
    set marke (value: string) {
        this._marke = value;
    }

    get farbe(): string {
        return this._farbe;
    }
    set farbe (value: string) {
        this._farbe = value;
    }

    get ps(): number {
        return this._ps;
    }
    set ps (value: number) {
        this._ps = value;
    }

    printdata() {
        console.log("Auto data " + this.marke + " " + this.farbe + " " + this.ps);
    }
}