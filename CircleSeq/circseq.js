var maxTog = 16;
var numTog = 8;

outlets = 2;

var togSize = 24;
var togInset = 100;
var togRadius = 100;

var onColour = [1.0, 1.0, 0, 0.5]; // Yellow
var offColour = [0.0, 0.0, 0.0, 0.8]; // Black

// Make an array for toggle states
var togStates = new Array();


// Make a funnel

var myFunnel;

// Make toggles
function create(t) {

    // Constrain number of toggles to maxTog
    if (t < 0) t = 0;
    if (t > maxTog) t = maxTog;

    numTog = t;

    for (var i = 0; i < numTog; i++) {
        togStates[i] = 0;
    }

    // Delete old toggles
    for (var i = 0; i < maxTog; i++) {
        var oldTog = this.patcher.getnamed("toggle" + i);
        this.patcher.remove(oldTog);
    }

    // Delete old funnel
    if (myFunnel && myFunnel.valid) this.patcher.remove(myFunnel);

    // Make new funnel

    myFunnel = this.patcher.newdefault(togInset * 2, togInset * 4, "funnel", numTog);
    this.patcher.connect(myFunnel, 0, this.box, 0);
    // Make new toggles
    var xpos = 0;
    var ypos = 0;

    for (var i = 0; i < numTog; i++) {

        xpos = togInset + togRadius + (togRadius * Math.sin((i / numTog) * Math.PI * 2));
        ypos = togInset + togRadius + (togRadius * Math.sin((i / numTog) * Math.PI * 2 - Math.PI / 2));
        var newTog = this.patcher.newobject("toggle", xpos, ypos, togSize, 0);
        newTog.varname = "toggle" + i;
        this.patcher.connect(newTog, 0, myFunnel, i);
    }

    togStates = togStates.slice(0, numTog);

    outlet(0,togStates);
}

function list(a) {
    var index = arguments[0];
    var value = arguments[1];
    togStates[index] = value;

    outlet(0, togStates);
}

function step(b) {
var modb = b % numTog;

for (var i = 0; i < numTog; i++) {
    var oldTog = this.patcher.getnamed("toggle" + i);
    oldTog.message("bgcolor", offColour);
}
var onTog = this.patcher.getnamed("toggle" + modb);
onTog.message("bgcolor", onColour);
if (togStates[modb] == 1) outlet(1, "bang");
}