// Create a WorldWindow for the canvas.
var wwd = new WorldWind.WorldWindow("canvasOne");

let grid = codegrid.CodeGrid();



let ccd = new WorldWind.CoordinatesDisplayLayer(wwd);
wwd.addLayer(new WorldWind.BMNGOneImageLayer());
wwd.addLayer(new WorldWind.CompassLayer());
wwd.addLayer(ccd);
wwd.addLayer(new WorldWind.ViewControlsLayer(wwd));

let position = wwd.navigator.lookAtLocation;
//onmousemove = function(e){console.log("mouse location:", e.clientX, e.clientY)}

var intervalID = window.setInterval(myCallback, 2000);

function myCallback() {
    let msg;
    grid.getCode (position.latitude, position.longitude, function (err, code) {
       
        if (err) {
            msg = err;
        } else {
            if (code == "fi") msg = "Täällä on pelkkiä hörhöjä, kuule!";
            else msg = "Oot nyt " + code.toUpperCase() + " päällä.";
        }
        console.log(msg)

    });
    document.getElementById("maa").innerHTML = msg;
}