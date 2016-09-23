var content = "";
var stream = ["freecodecamp", "rush", "thijshs", "admiralbulldog", "iwilldominate", "p4wnyhof", "datto"];
var streamString = stream.toString();
var res = {};
var container = document.getElementById("stream");

$.getJSON("https://api.twitch.tv/kraken/streams?channel=" + streamString + "&client_id=qmrzfjzinqtouj42cgd3sfysr5kctvi", function(json) {
	// console.log(json);
	compare(stream, json);
});



function compare(stream, json) {
	// var online;
	// var offline;

	for (var i = 0; i < stream.length; i++) {
		res[stream[i]] = getStream(json.streams, stream[i]);
		drawRow(stream[i], res[stream[i]]);

		// for (var a = 0; a < json.streams.length; a++) {
		// 	if (stream[i] === json.streams[a].channel.name) {
		// 		offline += json.streams[a].channel.name;
		// 		// console.log(online);
		// 	} else {
		// 		offline += stream[i];
		// 		// console.log(offline + " is offline");
		// 	}
		// }
	}
	console.log(res);
}

function getStream(list, name) {
	for (var i = 0; i < list.length; i++) {
		if (list[i].channel.name === name) {
			return list[i];
		}
	}
}


function drawRow(name, stream) {
	// var content = "<div>" + name + "</div>";

	if (stream) {
		var content =
			'<div><a href=" ' + stream.channel.url + ' " target="_blanck">' + name + '</a> Online</div>' +
			'<div class="dropdown">' +
			'<p onclick="myFunction()" class="dropbtn">Details</p>' +
			'<div id="myDropdown" class="dropdown-content">' +
			'<p>Display name: ' + stream.channel.display_name + ' </p>' +
			'<p>Game: ' + stream.channel.game + ' </p>' +
			'<p>Followers: ' + stream.channel.followers + ' </p>' +
			'<p>Language: ' + stream.channel.language + ' </p>' +
			'<p>Views: ' + stream.channel.views + ' </p>' +
			'</div>' +
			'</div>' 
	} else {
		var content = '<div>' + name + ' Offline</div>'
	}
	container.innerHTML += content;
}

function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
	if (!event.target.matches('.dropbtn')) {

		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
}