// 1. Estrazione dei numeri

// Al click sul tasto Estrai verrà estratto un numero a caso dall’array dei numeri disponibili.
// Questo numero andrà  mostrato e la casella corrispondente verrà colorata in modo da segnalarne l’estrazione.
// Non dimenticate di rimuovere il numero estratto dalla lista dei numeri estraibili per evitare doppioni!!

// 1.1 Gestione della lista numeri

const listaNumeri = document.querySelectorAll('#lista_numeri li');
const filterBlur = document.querySelector('.filter');

const arrayListaNumeri = [];
const arrayNumeriEstratti = [];

for (i = 0; i < listaNumeri.length; i++) {

    const indiceListaNumeri = Number(listaNumeri[i].textContent);
    arrayListaNumeri.push(indiceListaNumeri);

}

console.log(arrayListaNumeri);



// 1.2 Estrazione e gestione di numero random dall'array visibile in pagina

const numeroEstratto = document.querySelector('#container_numeroEstratto h3');

function estrazioneNumeroRandom() {

    const max = arrayListaNumeri.length;
    const indiceNumeroRandom = Math.floor(Math.random() * max);

    const numeroRandomEstratto = arrayListaNumeri.splice(indiceNumeroRandom, 1)[0];
    arrayNumeriEstratti.push(numeroRandomEstratto);

    numeroEstratto.textContent = numeroRandomEstratto;

    listaNumeri[indiceNumeroRandom].style.backgroundColor = '#45c5f8';

}



// 1.3 Funzionalità bottone estrai

const bottoneEstrai = document.getElementById('bottone_estrai');

bottoneEstrai.addEventListener('click', () => {

    estrazioneNumeroRandom();

    if (arrayNumeriEstratti.length >= 15) {

        bottoneEstrai.disabled = true;
        bottoneTermina.disabled = false;
        vittoria.style.display = "flex";
        filterBlur.style.filter = 'blur(10px)';
        filterBlur.style.pointerEvents = 'none';

    }

    console.log(arrayNumeriEstratti);
    console.log(arrayListaNumeri);

})



// 2. Fine Gioco

// Il gioco finisce automaticamente quando vengono estratti tutti i numeri o se si clicca sul tasto “Termina Gioco”.
// Il tasto “Termina gioco” non può essere cliccato prima che vengano estratti 15 numeri *(ogni cartella della tombola è composta da 15 numeri pertanto nessuno può vincere prima che ne vengano estratti almeno 15)*
// Quando il gioco finisce, mostriamo una schermata che annuncia che un giocatore ha fatto Tombola!

// 2.1 Funzionalità bottone termina partita

const bottoneTermina = document.getElementById('bottone_termina');

bottoneTermina.disabled = true;

bottoneTermina.addEventListener('click', () => {

    if (arrayNumeriEstratti.length >= 15) {

        window.location.reload();

    }

})

// Messaggio vittoria

const vittoria = document.getElementById('vittoria');
const giocaAncora = document.getElementById('gioca_ancora');

giocaAncora.addEventListener('click', () => {
    window.location.reload();
})