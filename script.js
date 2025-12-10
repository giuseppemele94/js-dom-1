const bottone = document.getElementById('buttonClick');
const foto = document.getElementById('pic');

// 1) soluzione 

bottone.addEventListener('click',
    function () {

        //aggiungo la classe "acceso" al click 
        bottone.classList.toggle('acceso');


        // se il bottone ha la classe "acceso" accendo la lampadina
        if (bottone.classList.contains('acceso')) {

            //cambio l'immagine 
            foto.src = './img/yellow_lamp.png';

            //cambio l'alt 
            foto.alt = 'lampada_accesa';

            //cambio il testo del bottone 
            bottone.innerHTML = "Spegni";
        }
        // se non ha la classe acceso deve spegnersi 
        else {
            
            foto.src = './img/white_lamp.png';
            bottone.innerHTML = "Accendi";
        }
    }
); 


