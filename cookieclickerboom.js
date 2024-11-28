console.log("Deixe o ponteiro do seu mouse no cookie e não mova-o!")
console.log("by @RGB_01")
function simularClique(x, y) {
    const eventoClique = new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true,
        clientX: x,
        clientY: y
    });
    document.elementFromPoint(x, y).dispatchEvent(eventoClique);
}

function simularCliques() {
    let contador = 0;
    const maxCliques = 10000000;

    document.addEventListener('mousemove', function(event) {
        const x = event.clientX;
        const y = event.clientY;

        const intervalo = setInterval(function() {
            if (contador >= maxCliques) {
                clearInterval(intervalo);
                return;
            }
            simularClique(x, y);
            contador++;
        }, 0);
    });
}

simularCliques();
