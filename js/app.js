var content = "";
var stream = ["freecodecamp", "rush", "thijshs", "admiralbulldog", "iwilldominate", "p4wnyhof", "datto"];


$.getJSON("https://api.twitch.tv/kraken/streams?channel=freecodecamp,admiralbulldog,thijshs,datto,iwilldominate,p4wnyhof,rush&client_id=qmrzfjzinqtouj42cgd3sfysr5kctvi", function(json) {
	console.log(json);

	window.onload = function() {
    document.getElementById("stream").innerHTML = compare(stream, json);        
	}
	// compare(stream, json);
});

function compare(stream, json) {
	for (var i = 0; i < stream.length; i++) {
		for (var a = 0; a < json.streams.length; a++) {
			if (stream[i] === json.streams[a].channel.name) {
				console.log(json.streams[a].channel.name);
			} else {
				console.log(stream[i] + " is offline");
			}
		}
	}
}

