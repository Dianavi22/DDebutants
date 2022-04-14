// function loadJSON(callback) {

//     var xobj = new XMLHttpRequest();
//     xobj.overrideMimeType("./");
//     xobj.open('GET', 'data.json', true); // Replace 'my_data' with the path to your file
//     xobj.onreadystatechange = function() {
//         if (xobj.readyState == 4 && xobj.status == "200") {
//             // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
//             callback(xobj.responseText);
//         }
//     };
//     xobj.send(null);
// }

// function init() {
//     console.log("INIT"); // Block by Cross-origin resource sharing (CORS)
//     loadJSON(function(response) {
//         // Parse JSON string into object
//         var actual_JSON = JSON.parse(response);
//         console.log(actual_JSON);
//     });
// }

var img = JSON.stringify({
    masterPageBackground: "url(.\/..\/images\/img-master.jpg)",
    playerPageBackground: "url(.\/..\/images\/player.png)",
    homePageBackground: "url(./../images/tasha.jpg)"
});

var imgRef = JSON.stringify({
    ref1: "./../images/critical-role.jpg",
    ref2: "./../images/vox-machina.jpg",
    ref3: "./../images/aventure.PNG",
    ref4: "./../images/critical-role.jpg"
});

var tab = JSON.stringify({
    classes: [
        "Barbare",
        "Barde",
        "Clerc",
        "Druide",
        "Ensorceleur",
        "Guerrier",
        "Magicien",
        "Moine",
        "Occultiste",
        "Paladin",
        "Rôdeur",
        "Roublard",
    ],
    races: [
        "Elfe",
        "Halfelin",
        "Humain",
        "Nain",
        "Demi-Elfe",
        "Demi-Orc",
        "Drakéide",
        "Gnome",
        "Tieffelin",
        "Génasi",
        "Goliath",
    ],
    historiques: [
        "Acolyte",
        "Artisan de Guilde",
        "Artiste",
        "Charlatan",
        "Criminel",
        "Enfant des Rues",
        "Ermite",
        "Héros du peuple",
        "Marin",
        "Noble",
        "Sage",
        "Sauvageon",
        "Soldat",
    ],

    states: [
        "Force",
        "Dextérité",
        "Constitution",
        "Intelligence",
        "Sagesse",
        "Charisme"
    ],

    Competences: [
        "Intimidation",
        "représentation",
        "supercherie",
        "religion"
    ],

    Materiel: [
        "Dés 4 à 100",
        "Player's Handbook",
        "Dungeon Master's Guide",
        "fiches de personnages"
    ],
});