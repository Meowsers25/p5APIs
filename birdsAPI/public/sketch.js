var data;

function preload() {
	data = loadJSON("birds.json");

}

function setup() {
	noCanvas();
	// var bird = data.birds[1].members[2];

	var birds = data.birds;
	for(var i = 0; i < birds.length; i++) {
		createElement('h1', birds[i].family);
		var members = birds[i].members;
		for(var j = 0; j < members.length; j++) {
			createElement('p', members[j]);
		}
	}
	// createP(bird);
}

// function draw() {
//
// }
