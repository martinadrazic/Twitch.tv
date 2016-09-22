
var stream = ["freecodecamp", "rush", "thijshs", "admiralbulldog", "iwilldominate", "p4wnyhof", "datto"];
var content = "";

for (var i = 0; i < stream.length; i++) {
	$.getJSON("https://api.twitch.tv/kraken/streams?channel=" + stream[i] + "&client_id=qmrzfjzinqtouj42cgd3sfysr5kctvi", function(json) {
		console.log(json);

		// if (json.streams[0].channel.display_name === "") {

		// }

	});


}

	