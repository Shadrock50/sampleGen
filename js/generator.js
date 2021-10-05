var animals = [];
var things = [];
var actions = [];

function randomizeCombo(){

    aniRand = getRandomInt(0, animals.length);
    thiRand = getRandomInt(0, things.length);
    actRand = getRandomInt(0, actions.length);

    randomField = document.getElementById("randomizer");
    randomField.textContent = "A "
                             + animals[aniRand]
                             + " with a " 
                             + things[thiRand]
                             + ", "
                             + actions[actRand] 
                             + ".";

}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

function LoadFile(id) {

    var oFrame = document.getElementById(id);

    var strRawContents = oFrame.contentWindow.document.body.childNodes[0].innerHTML;

    while (strRawContents.indexOf("\r") >= 0)
        strRawContents = strRawContents.replace("\r", "");

    var arrLines = strRawContents.split("\n");

    for (var i = 0; i < arrLines.length; i++) {

        if (id === "anmID"){
            animals.push(arrLines[i]);
        }
        else if (id === "thiID"){
            things.push(arrLines[i]);
        }
        else {
            actions.push(arrLines[i]);
        }


    }
}
