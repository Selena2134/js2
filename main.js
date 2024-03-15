
function inverserChaine(chaine) {
    return chaine.split('').reverse().join('');
}

let chaineInversee = inverserChaine("Hello");
console.log(chaineInversee); 


function compterCaracteres(chaine) {
    return chaine.length;
}


let nombreCaracteres = compterCaracteres("Hello World");
console.log(nombreCaracteres); 


function mettreMotsMajuscule(phrase) {
    return phrase.split(' ').map(mot => mot.charAt(0).toUpperCase() + mot.slice(1)).join(' ');
}


let phraseMajuscule = mettreMotsMajuscule("bonjour tout le monde");
console.log(phraseMajuscule); 


function trouverMaximum(tableau) {
    return Math.max(...tableau);
}


let tableau = [5, 10, 2, 8, 15];
let maximum = trouverMaximum(tableau);
console.log(maximum); 


function trouverMinimum(tableau) {
    return Math.min(...tableau);
}


let minimum = trouverMinimum(tableau);
console.log(minimum); 


function calculerSomme(tableau) {
    return tableau.reduce((acc, val) => acc + val, 0);
}


let somme = calculerSomme(tableau);
console.log(somme); 


function filtrerTableau(tableau, condition) {
    return tableau.filter(condition);
}


let tableauFiltre = filtrerTableau(tableau, x => x > 5);
console.log(tableauFiltre); 


function factorielle(n) {
    if (n === 0 || n === 1)
        return 1;
    else
        return n * factorielle(n - 1);
}


let fact = factorielle(5);
console.log(fact); 


function estNombrePremier(nombre) {
    if (nombre <= 1)
        return false;
    for (let i = 2; i <= Math.sqrt(nombre); i++) {
        if (nombre % i === 0)
            return false;
    }
    return true;
}


let estPremier = estNombrePremier(7);
console.log(estPremier); 


function fibonacci(n) {
    let sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        let a = sequence[i - 1];
        let b = sequence[i - 2];
        sequence.push(a + b);
    }
    return sequence;
}

let seqFibonacci = fibonacci(10);
console.log(seqFibonacci); 

