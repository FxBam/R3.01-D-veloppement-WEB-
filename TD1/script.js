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

