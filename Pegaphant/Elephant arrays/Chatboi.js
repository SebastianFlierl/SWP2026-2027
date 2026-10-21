let p_id = "pegaphant";
let p_posx = 0;
let p_posy = 0;
let p_direction = 1;
let p_name = "PEGAPHANT";

let pegaarray = [p_id, p_posx, p_posy, p_direction,];
let bilder = ["Target Bilder/pega.png", "Target Bilder/pega2.png", "Target Bilder/pega3.png"];

const elephant = document.getElementById('pegaphant_img');
let gesamtPegaListe = [];

function createImg(n) {
    for (let x = 0; x < n; x++) {

        let random_x = Math.floor(Math.random() * 1600) + 1;
        let random_y = Math.floor(Math.random() * 400) + 1;

        // zufällige Richtung: -1, 0 oder 1
        let random_dir_x = Math.floor(Math.random() * 3) - 1;
        let random_dir_y = Math.floor(Math.random() * 3) - 1;

        // verhindern, dass beide 0 sind
        // sonst würde der Pegaphant einfach stehen
        if (random_dir_x == 0 && random_dir_y == 0) {
            random_dir_x = 1;
        }

        let img = document.createElement("img");

        img.src = bilder[Math.floor(Math.random() * bilder.length)];
        img.className = "pegaclass";

        img.style.left = random_x + "px";
        img.style.top = random_y + "px";

        img.id = "id" + x;

        document.body.appendChild(img);

        // ID, X, Y, Richtung X, Richtung Y, Name
        gesamtPegaListe.push([
            "id" + x,
            random_x,
            random_y,
            random_dir_x,
            random_dir_y,
            "pegaFant" + x
        ]);
    }
}

createImg(30);


function animatearrayGesamt() {

    for (let x = 0; x < gesamtPegaListe.length; x++) {

        let id = gesamtPegaListe[x][0];

        let bild_x = gesamtPegaListe[x][1];
        let bild_y = gesamtPegaListe[x][2];

        let bild_dir_x = gesamtPegaListe[x][3];
        let bild_dir_y = gesamtPegaListe[x][4];

        const elephant = document.getElementById(id);


        // Bewegung
        bild_x += bild_dir_x * 2;
        bild_y += bild_dir_y * 2;


        // rechter / linker Rand
        if (bild_x >= 1600) {
            bild_dir_x = -1;
        }

        if (bild_x <= 0) {
            bild_dir_x = 1;
        }


        // unterer / oberer Rand
        if (bild_y >= 400) {
            bild_dir_y = -1;
        }

        if (bild_y <= 0) {
            bild_dir_y = 1;
        }


        // neue Werte speichern
        gesamtPegaListe[x][1] = bild_x;
        gesamtPegaListe[x][2] = bild_y;

        gesamtPegaListe[x][3] = bild_dir_x;
        gesamtPegaListe[x][4] = bild_dir_y;


        // Bild bewegen
        elephant.style.left = bild_x + "px";
        elephant.style.top = bild_y + "px";
    }

    requestAnimationFrame(animatearrayGesamt);
}

animatearrayGesamt();

//cannonen script

let c_posx = 800; //startposition x achse
let c_posy = 0;

function createCannon() { //funktion um die cannon zu erstellen
    let can = document.createElement("img"); //javascript erstellt ein "img" element

    can.src = "cannon bild/Cannon.png"; //welches bild es benutzen soll
    can.id = "cannon_img"; //das bild bekommt eine ID damit man es mit document.getElementById wiederfinden kann
    can.className = "cannonclass"; //bild bekommt eine class für CSS

    can.style.left = c_posx + "px"; //cannon wird auf die x position gesetzt
    can.style.bottom = c_posy + "px"; //cannon wird auf die y position gesetzt

    document.body.appendChild(can); //damit das bild angezeigt wird wird es in den body eingefügt
}
createCannon(); //hiermit wird die funktion ausgeführt und die cannon wird erstellt

document.addEventListener("keydown", function (event) { //falls eine taste gedrückt wird führt es diese funktion aus

    const cannon = document.getElementById("cannon_img"); //hier holt es sich die cannon mit der ID "cannon_img" und speichert sie in der variable cannon

    let taste = event.key.toLowerCase(); //hier wird die gedrückte taste in eine variable gespeichert und in kleinbuchstaben umgewandelt (falls man mit caps lock spielt)

    if (taste == "a") { //falls die taste "a" gedrückt wird, wird die cannon 10 pixel nach links bewegt
        c_posx -= 15;
    }

    if (taste == "d") { //falls die taste "d" gedrückt wird, wird die cannon 10 pixel nach rechts bewegt
        c_posx += 15;
    }

    if (taste == "w") {
        c_posy += 15;
    }

    if (taste == "s") {
        c_posy -= 15;
    }

    if (c_posx < 0) { //falls die cannon über den linken rand hinausgeht, wird sie wieder auf 0 gesetzt
        c_posx = 0;
    }

    if (c_posx > 1600) { //falls die cannon über den rechten rand hinausgeht, wird sie wieder auf 1600 gesetzt
        c_posx = 1600;
    }

    if (c_posy < 0) { //falls die cannon über den unteren rand hinausgeht, wird sie wieder auf 0 gesetzt
        c_posy = 0;
    }

    if (c_posy > 600) { //falls die cannon über den oberen rand hinausgeht, wird sie wieder auf 400 gesetzt
        c_posy = 600;
    }

    cannon.style.left = c_posx + "px"; //hier wird die cannon auf die neue x position gesetzt
    cannon.style.bottom = c_posy + "px"; //hier wird die cannon auf die neue y position gesetzt
});