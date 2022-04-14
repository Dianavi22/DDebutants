// Parse du JSON  

var data = JSON.parse(tab);
var imgBackground = JSON.parse(img);

// Conditions permettant d'afficher les images de couverture

const backGroundImage = document.getElementById("top-page")
if (backGroundImage) {
    console.log(backGroundImage);
    backGroundImage.style.background = imgBackground.homePageBackground;
    backGroundImage.style.backgroundSize = "cover";
}
const backGroundImageMaster = document.getElementById("top-page-master")
if (backGroundImageMaster) {
    backGroundImageMaster.style.background = imgBackground.masterPageBackground;
    backGroundImageMaster.style.backgroundSize = "cover";
}

const backGroundImagePlayer = document.getElementById("top-page-player")
if (backGroundImagePlayer) {
    backGroundImagePlayer.style.background = imgBackground.playerPageBackground;
    backGroundImagePlayer.style.backgroundSize = "cover";
}

// Conditions récupérant les données en JSON

const table = document.getElementById('tableClasses');
if (table) {
    document.body.onload = createRow(data.classes, table);
}

const tableRaces = document.getElementById('tableRaces');
if (tableRaces) {
    document.body.onload = createRow(data.races, tableRaces);
}

const tableState = document.getElementById('tableStates');
if (tableState) {
    document.body.onload = createRow(data.states, tableState);
}

const tableHisto = document.getElementById('tableHistoriques');
if (tableHisto) {
    document.body.onload = createRow(data.historiques, tableHisto);
}

const tableMatos = document.getElementById('tableMateriel');
if (tableMatos) {
    document.body.onload = createRow(data.Materiel, tableMatos);
}

// fonction permettant de générer les tableaux en fonction des conditions ci-dessus

function createRow(array, divId) {

    for (let i = 0; i < array.length; i++) {
        const tr = document.createElement('tr');

        const element = array[i];
        const tdRef = document.createElement('td');
        const tdText = document.createTextNode(element);

        tdRef.appendChild(tdText);
        tr.appendChild(tdRef);
        divId.appendChild(tr);
    }
}

// test : 

// var a = document.getElementById("nomJoueur");
// a.textContent = tab.races[1];
// for (var i = 0; i < tab.races.length; i++) {
//     console.log(tab.races[i]);
// }

// var imgRef;
// imgRef = JSON.parse(imgHome);
// var backGroundImageRef1 = document.getElementById("ref1")
// backGroundImageRef1.style.background = imgHome.masterPageBackground;
// backGroundImageRef1.style.backgroundSize = "cover";