let machaine="le reveil n'a pas bien fonctionné ce matin !";
console.log("taille de la chaine" + machaine.length);
// console.log("position de caractere dans la chaine" + machaine.charAt());
console.log("la caractere à la position 5 est"+machaine.charAt(5));
console.log(machaine.indexOf("o"));
console.log(machaine.substring(0, 3));/*la methode substring(debut,fin) permet d'extraire une partie de la chaine 
de caractere commencant de la position debut et finissant à la position fi*/
console.log(machaine.split("o"));
let maVar = machaine.split ("o");
console.log(maVar.length);
console.log(maVar.join("-"));
console.log(machaine.toLocaleLowerCase());
console.log(machaine.toUpperCase());

function afficher(){
    alert("bonjour");
}
afficher();