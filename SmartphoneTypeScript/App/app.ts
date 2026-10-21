export class App {
    private _name: string;
    private _version: string;
    private _verbrauch: number;
    private _laeuft: boolean;

    constructor(name: string, version: string, verbrauch: number) {
        this._name = name;
        this._version = version;
        this._verbrauch = verbrauch;
        this._laeuft = false;
    }

    get name(): string {
        return this._name;
    }

    get version(): string {
        return this._version;
    }

    get verbrauch(): number {
        return this._verbrauch;
    }

    get laeuft(): boolean {
        return this._laeuft;
    }

    // App starten
    starten() {
        this._laeuft = true;
    }

    // App stoppen
    stoppen() {
        this._laeuft = false;
    }

    // Informationen ausgeben
    printdata() {
        console.log(
            this._name + " | Version: " + this._version +
            " | Verbrauch: " + this._verbrauch + " mAh/h"
        );
    }
}