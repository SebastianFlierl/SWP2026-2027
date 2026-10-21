import {Smartphone} from "./Smartphone/smartphone.ts";
import {Akku} from "./Akku/akku.ts";
import {App} from "./App/app.ts";

// 1. Akku erstellen
const akku = new Akku(5000, 100, 50);

// 2. Smartphone erstellen
const smartphone = new Smartphone("Samsung S24", 256, 6.2, akku);

// 3. Apps erstellen
const youtube = new App("YouTube", "1.0", 400);
const spotify = new App("Spotify", "2.0", 150);
const whatsapp = new App("WhatsApp", "3.0", 50);

// 4. Apps installieren
smartphone.installiereApp(youtube);
smartphone.installiereApp(spotify);
smartphone.installiereApp(whatsapp);

// 5. Smartphone anzeigen
console.log("\n=== SMARTPHONE ===");
smartphone.printdata();

// 6. Installierte Apps anzeigen
console.log("\n=== INSTALLIERTE APPS ===");
smartphone.zeigeApps();

// 7. Apps starten
console.log("\n=== APPS STARTEN ===");
smartphone.starteApp("YouTube");
smartphone.starteApp("Spotify");

// 8. Smartphone 2 Stunden benutzen
console.log("\n=== 2 STUNDEN BENUTZEN ===");
smartphone.benutzen(2);

// 9. YouTube stoppen
console.log("\n=== YOUTUBE STOPPEN ===");
smartphone.stoppeApp("YouTube");

// 10. Smartphone noch 1 Stunde benutzen
console.log("\n=== 1 STUNDE BENUTZEN ===");
smartphone.benutzen(1);

// 11. Endergebnis
console.log("\n=== ENDERGEBNIS ===");
smartphone.printdata();