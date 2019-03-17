console.log("hello philippe");
// creation d'un tableau json
var id = '{"name":"alex","age":26,"sexe":"homme","profession":"instructeur","Hobby":["Lecture","Basket",null]}';

var json = '{"result":true, "count":42}';

var Tojs = JSON.parse(id);

// afficher dans la console la valeur de l'objet :
// ex :
// taper dans la console : id.name

// affichage dans la console la valeur d'un array :
// ex :
// taper dans la console : id.hobby[1]
// resultat basket

// affichage dans la console la valeur d'un object :
// ex:
// taper dans la console : id.voitures.voiture1
// resultat "BMW"

// recevoir les données et la convertir en fonction javascript , utiliser la fonction parse()
// taper Tojs
// converti en javasript :
// Object { name: "alex", age: 26, sexe: "homme", profession: "instructeur", Hobby: (3) […] }
