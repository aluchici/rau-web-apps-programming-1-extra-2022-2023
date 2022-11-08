let variabila1 = 30;
let variabila2;

const variabila3 = 10;
const variabila4 = 3.24;
const variabila5 = "Acesta este un string";
const variabila6 = 'Acesta este un alt string';
const variabila7 = `Aceasta este o alta variabila cu valoarea ${variabila4}`;

console.log(variabila7);

function numeleFunctiei(param1, param2, param3=10) {
    const result = param1 + param2 + param3;
    // optional
    return result;
}

const suma1 = numeleFunctiei(variabila1, variabila3, variabila4);
console.log(suma1);

const suma2 = numeleFunctiei(variabila3, variabila4);
console.log(suma2);


// n=1 => 1
// n=2 => 1 
// n=3 => n2 + n1
function fibo(n) {
    const results = [];
    for (let i = 1; i <= n; i++) {
        if (i === 1) {
            results.push(1);
        } else if (i === 2) {
            results.push(1);
        } else {
            const nextValue = results[results.length-2] + results[results.length-1];
            results.push(nextValue);
        }
    }
    return results;
}

const fibo1 = fibo(1);
const fibo2 = fibo(2);
const fibo3 = fibo(3);
const fibo4 = fibo(10);

console.log(`n=1: ${fibo1}`);
console.log(`n=2: ${fibo2}`);
console.log(`n=3: ${fibo3}`);
console.log(`n=10: ${fibo4}`);

// numar prim = numar care se imparte doar la 1 si la el insusi
// numarul este intreg 
// pentru fiecare numar intreg de la 2 la N-1, d, verific daca restul impartirii lui N la d este == 0
// daca restul este == 0 => d este un divizor al lui N
// ma opresc din verificat numere atunci cand gasesc 1 divizior
function isPrime(N) {
    for (let d = 2; d < N; d++) {
        const rest = N % d;
        if (rest == 0) {
            return `${N} is not prime.`;
        }
    }
    return `${N} is prime.`;
}

const prime1 = isPrime(2);
const prime2 = isPrime(3);
const prime3 = isPrime(98);

console.log(prime1);
console.log(prime2);
console.log(prime3);

// (n-1) spatii + #
// (n-2) spatii + ##
// ...
// (0) spatii + #...# de n ori
function staircase(n) {
    if (n < 0 || n > 100) {
        return "Unable to generate staircase";
    }

    let steps = "";
    for (let i = n; i > 0; i--) {
        const whiteSpaces = generateCharString(i-1, " ");
        const hashstags = generateCharString(n-i+1, "#");
        steps = steps + whiteSpaces + hashstags + "\n";
    }    
    // const lastHashtagsRow = generateCharString(n, "#");
    // steps = steps + lastHashtagsRow;
    return steps;
}

function generateCharString(n, charValue) {
    let result = "";
    for (let i = 0; i < n; i++) {
        result = result + charValue;
    }
    return result;
}

const stair1 = staircase(4);
const stair2 = staircase(10);

console.log(stair1);
console.log(stair2);