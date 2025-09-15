/*Exo 1 : Convertion Celsius à Fahrenheit*/
const temperature = 20;
const fahrenheit = (temperature * 9/5) + 32;
document.getElementById("output1").innerText = `La température est ${fahrenheit}°F`;

/*Exo 2 : Calcul de surface*/
const longueur = 100;
const largeur = 50;
const aire = longueur * largeur;
document.getElementById("output2").innerText = `La surface est ${aire} m²`;

/*Exo 3 : Concaténation de chaînes*/
const nom = "Jabet";
const prenom = "Arthur";
const lesDeux = prenom + nom;
document.getElementById("output3").innerText = `Je m'appelle ${lesDeux}`;

/*Exo 4 : Calcul de TVA*/
let ht = 30;
const tva = 0.2;
const ttc = ht * (1 + tva);
document.getElementById("output4").innerText = `Le prix TTC est ${ttc}€`;

/*Exo 5 : Conditions*/
if ( ((4 >= 6) || ("herbe" != "verte")) &&  !(((12 * 2) == 144) && true)){
    document.getElementById("output5").innerText = "C'est vrai !";
} else {
    document.getElementById("output5").innText = "C'est faux";
}

/*Exo 6 : Calcul IMC*/
const poid = 62;
const taille = 1.64;
const IMC = poid / (taille * taille);
document.getElementById("output6").innerText = `Mon IMC est de ${IMC}`;

/*Exo 7 : Livraison gratuite*/
const montMin = 10;
const montTot = 30;
if (montTot > montMin) {
    document.getElementById("output7").innerText = `Livraison gratuite`;
} else {
    document.getElementById("output7").innerText = `Livraison payante`;
}

/*Exo 8 : Binaire en décimal*/
const binaire = "1001011";
const decimal = parseInt(binaire, 2);
document.getElementByID("output8").innerText = `Le nombre est ${decimal}`;