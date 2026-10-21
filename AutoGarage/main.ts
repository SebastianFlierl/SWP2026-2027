import {Auto} from "./Auto/auto.ts"
import {Garage} from "./Garage/garage.ts"

const farben = ["blue", "red", "green", "yellow"];
const automarken = ["BMW", "Mercedes", "VW", "Audi"];

// Anzahl der Autos
let anzahlAutos = 10;

const autos: Auto[] = [];

// 1. Zufällige Autos erstellen
for (let i = 1; i <= anzahlAutos; i++) {

    autos.push(
        new Auto(
            automarken[Math.floor(Math.random() * automarken.length)],
            farben[Math.floor(Math.random() * farben.length)],
            Math.floor(Math.random() * 350) + 1
        )
    );

}

// 2. Garage erstellen
const garage = new Garage("Meine Garage", 10n);

// 3. Autos zur Garage hinzufügen
autos.forEach((auto) => {
    garage.addAuto(auto);
});

// 4. Alle Autos in der Garage anzeigen
console.log("Alle Autos in der Garage:");
console.log("---------------------------");
garage.zeigeAutos();

// 5. Alle BMWs suchen
console.log("Alle BMWs in der Garage:");
console.log("---------------------------");

garage.sucheAutos("BMW").forEach((auto) => {
    auto.printdata();
});

// 6. Erstes Auto verändern
autos[0].farbe = "black";

// 7. Erstes Auto aus der Garage entfernen
garage.entferneAuto(autos[0]);

// 8. Garage erneut anzeigen
console.log("Garage nach dem Löschen:");
console.log("---------------------------");
garage.zeigeAutos();