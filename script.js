const numeroDaMostrare = document.getElementById('numero');
const listaDiNumeri = document.querySelectorAll('#container_tombola span');
const bottoneEstrai = document.getElementById('bottone_estrai');
const bottoneTermina = document.getElementById('bottone_termina');
const arrayNumeri = [];

const originalButton = bottoneEstrai.style.backgroundColor;

let minNumeriEstratti = 0;
const limiteNumeriEstratti = 15;

for (i = 0; i < listaDiNumeri.length; i++) {

    arrayNumeri.push(listaDiNumeri[i].textContent);

}

console.log(arrayNumeri);

// Al click del bottone
bottoneEstrai.addEventListener('click', () => {

    if (minNumeriEstratti <= limiteNumeriEstratti) {

        // Viene estratto un numero randomico dall'arrayNumeri
        const indexDelNumero = Math.floor(Math.random() * arrayNumeri.length);
        const numeroEstratto = arrayNumeri[indexDelNumero];

        // Rimuovo il numero estratto dall'arrayNumeri
        arrayNumeri.splice(indexDelNumero, 1);
        console.log(arrayNumeri);
        minNumeriEstratti++;

        // Colora il numero estratto nella lista
        listaDiNumeri[indexDelNumero].style.backgroundColor = 'yellow';
        numeroDaMostrare.textContent = numeroEstratto;

    } else {

        bottoneEstrai.style.backgroundColor = 'red';
        bottoneEstrai.textContent = 'Hai raggiunto il limite';

    }

});
