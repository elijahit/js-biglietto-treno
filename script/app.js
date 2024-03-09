let chilometers = prompt("Quanti chilometri vuoi fare?"); //string
let age = prompt("Quanti anni hai?"); // string

let priceInKm = 0.21 * parseInt(chilometers); //number

// APPLICO LO SCONTO
let priceFinal = age < 18 ? 20 * priceInKm / 100 
: age >= 65 ? 40 * priceInKm / 100 : priceInKm;

// UTILIZZO I18N 
function internationalCurrency (price) {
  return new Intl.NumberFormat('it-IT', {
    style: 'currency',
    currency: 'EUR'
  }).format(price)
}



// RECUPERO L'ELEMENTO
const element = document.getElementById('price');

// SE QUALCOSA NON VA!
if(isNaN(priceFinal)) {
  // STAMPO SULL'ELEMENTO
  element.innerText = `Ripeti il processo, il tuo biglietto non è stato calcolato.`;
  // STAMPO IN CONSOLE
  console.log("Non è stato possibile calcolare il tuo biglietto.");
} else {
  // STAMPO IN CONSOLE
  console.log(internationalCurrency(priceFinal));
  // STAMPO SULL'ELEMENTO
  element.innerText = `Il tuo biglietto costerà: ${internationalCurrency(priceFinal)}`;
}

