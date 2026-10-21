        let ele_name = "hugo";
        let ele_farbe = "grau";
        let ele_geschlecht = "w";
        let ele_position_x = 0;
        let ele_position_y = 1;
        let ele_hoehe = 280; //cm
        let ele_gewicht = 890; //kg
        let ele_alter = 50; //Jahre
        let ele_fluegellaenge = 409 //cm
        let ele_breite = 187 //cm
        let ele_geschwindigkeit = 9; //kmh
        let ele_istamfliegen = false;
        let ele_istamkaken = false;
        let ele_anzahl_fluegel = 2;

        function print_info() {
            console.log(`name: ${ele_name} farbe: ${ele_farbe} geschlecht: ${ele_geschlecht} ${ele_alter} ${ele_anzahl_fluegel}`);
            //console.log("alter: " + ele_alter + "breite : " + ele_breite)
        }


        function ele_fliegt() {
            ele_geschwindigkeit = 300; //kmh
            ele_istamfliegen = true;
            ele_position_y = ele_position_y + 1;
        }

                // Starte die Animation
 
        print_info();
        ele_fliegt();
        print_info();
 

        const elephant = document.getElementById('pegaphant_img');
        let position = 80; // Startposition (80% von links)
        let direction = -1; // Bewegungsrichtung (-1 = links, 1 = rechts)
 
        function animate() {
            // Aktualisiere die Position
            position += direction * 0.5; // Bewegungsgeschwindigkeit
            // Ändere die Richtung, wenn der Elefant den Rand erreicht
            if (position <= 10) {
                direction = 1; // Bewege nach rechts
            } else if (position >= 80) {
                direction = -1; // Bewege nach links
            }
            // Setze die neue Position
            elephant.style.left = `${position}%`;
            // Führe die Animation erneut aus
            requestAnimationFrame(animate);
        }
       
        animate();