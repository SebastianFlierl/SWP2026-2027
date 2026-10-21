import {Akku} from "../Akku/akku.ts";
import {App} from "../App/app.ts";

export class Smartphone {
    private _modell: string;
    private _speicher: number;
    private _displaygroesse: number;
    private _akku: Akku;
    private _apps: App[];

    constructor(modell: string, speicher: number, displaygroesse: number, akku: Akku) {
        this._modell = modell;
        this._speicher = speicher;
        this._displaygroesse = displaygroesse;
        this._akku = akku;
        this._apps = [];
    }

    // App installieren
    installiereApp(app: App) {
        this._apps.push(app);
        console.log(app.name + " wurde installiert!");
    }

    // Alle Apps anzeigen
    zeigeApps() {
        this._apps.forEach((app) => {
            app.printdata();
        });
    }

    // App starten
    starteApp(name: string) {

        let app = this._apps.find((app) => app.name === name);

        if (app) {
            app.starten();
            console.log(name + " wurde gestartet!");
        } else {
            console.log("App nicht gefunden!");
        }

    }

    // App stoppen
    stoppeApp(name: string) {

        let app = this._apps.find((app) => app.name === name);

        if (app) {
            app.stoppen();
            console.log(name + " wurde gestoppt!");
        }

    }

    // Smartphone benutzen
    benutzen(stunden: number) {

        let gesamtverbrauch = 0;

        this._apps.forEach((app) => {

            if (app.laeuft) {
                gesamtverbrauch += app.verbrauch * stunden;
            }

        });

        this._akku.verbrauchen(gesamtverbrauch);

        console.log("Verbrauch: " + gesamtverbrauch + " mAh");
        console.log("Akkustand: " + this._akku.ladestand.toFixed(2) + "%");

    }

    // Smartphone Informationen anzeigen
    printdata() {
        console.log("Modell: " + this._modell);
        console.log("Speicher: " + this._speicher + " GB");
        console.log("Displaygröße: " + this._displaygroesse + " Zoll");

        this._akku.printdata();
    }
}