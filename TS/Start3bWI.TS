class Auto {
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

const farben = ["blue", "red", "green", "yellow"];
const automarken = ["BMW", "Mercedes", "VW", "Audi"];
const auto = new Auto(
    automarken[Math.floor(Math.random() * automarken.length)],
    farben[Math.floor(Math.random() * farben.length)],
    0
);
//auto.marke = "BMW";
//auto.ps = 890;
auto.printdata();

let anzahlAutos = 1000;
const autos:Auto[] = [];
//Erstelle anzahlAutos an Autos!!
for (let i = 1; i<=anzahlAutos;i++) {
    autos.push(
        new Auto(
        automarken[Math.floor(Math.random() * automarken.length)],
        farben[Math.floor(Math.random() * farben.length)],
        Math.floor(Math.random() * 350) + 1,
        ),
    );
}
//ausgave old
for (let i=0; i<autos.length;i++) {
    autos[i].printdata();
}
//ausgabe new=kurz
autos.forEach((auto)=>{
    auto.printdata();
});