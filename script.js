const bottone = document.getElementById('buttonClick');
const foto = document.getElementById('pic');

// 1) soluzione 

bottone.addEventListener('click',
    function () {

        //aggiungo la classe "acceso" al click 
        bottone.classList.toggle('acceso');


        // se il bottone ha la classe "acceso" accendo la lampadina
        if (bottone.classList.contains('acceso')) {

           
            bottone.classList.add("btn", "btn-success");
            //cambio l'immagine 
            foto.src = './img/yellow_lamp.png';

            //cambio l'alt 
            foto.alt = 'lampada_accesa';

            //cambio il testo del bottone 
            bottone.innerHTML = "Spegni";
        }
        // se non ha la classe acceso deve spegnersi 
        else {
            
            bottone.classList.remove("btn-success");
            foto.src = './img/white_lamp.png';
            bottone.innerHTML = "Accendi";
        }
    }
);


/* 2) Soluzione con includes 

bottone.addEventListener("click",
    function () {

        //controllo il testo del bottone 
        // se include accendi allora devo accendere 
        
        if (bottone.textContent.includes("Accendi")) {
            //cambio l'immagine 
            foto.src = './img/yellow_lamp.png';

            //cambio l'alt 
            foto.alt = 'lampada_accesa';

            //cambio il testo del bottone 
            bottone.textContent = "Spegni";
        }
        else {
            foto.src = './img/white_lamp.png';
            bottone.textContent = "Accendi";
        }
    }
);
*/