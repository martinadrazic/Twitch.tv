var content = "";

$.getJSON("https://api.twitch.tv/kraken/streams?channel=freecodecamp,admiralbulldog,thijshs,datto,iwilldominate,p4wnyhof,rush&client_id=qmrzfjzinqtouj42cgd3sfysr5kctvi", function(json) {
	console.log(json);

	// if (json.streams[0].channel.display_name === "") {

	// }

});