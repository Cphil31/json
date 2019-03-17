console.log("hello philippe");
// creation d'un tableau json
// objet javascript
var id = {
          name:"alex",
          age:26,
          sexe:"homme",
          profession:"instructeur",
          Hobby:[
                  "Lecture","Basket",null
                  ] };

// Convertion en JSON
var ToJSON = JSON.stringify(id);
// stocker dans un fichier json appelé idJSON , le 2 argument est le nom de la variable qu'on veut stocker
localStorage.setItem("idJSON", ToJSON);


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

// convertir les données en json

// recevoir et envoyer des données dans un autre fichier json
