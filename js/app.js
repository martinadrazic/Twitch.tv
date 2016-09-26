var content = "";
var stream = ["freecodecamp", "rush", "thijshs", "admiralbulldog", "iwilldominate", "p4wnyhof", "datto", "capcomfighters", "quin69", "massansc", "brunofin","comster404"];
var streamString = stream.toString();
var res = {};
var container = document.getElementById("stream");

$.getJSON("https://api.twitch.tv/kraken/streams?channel=" + streamString + "&client_id=qmrzfjzinqtouj42cgd3sfysr5kctvi", function(json) {
	console.log(json);
	compare(stream, json);
});


function compare(stream, json) {
	for (var i = 0; i < stream.length; i++) {
		res[stream[i]] = getStream(json.streams, stream[i]);
		drawRow(stream[i], res[stream[i]]);
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
	if (stream) {
		var content =
			'<div class="row streamers">' +
				'<div class="col-md-4"><a href=" ' + stream.channel.url + ' " target="_blank" class="stream-name">' + name + '</a></div>' +
				'<div class="col-md-4"> ' +
					'<p class="status-online">Online</p>' +
				'</div>' +
				'<div class="col-md-4 dropdown">' +
					'<p onclick="myFunction(\'' + stream.channel.display_name + '\')" class="drop">Details</p>' +
					'<div id="myDropdown-' + stream.channel.display_name + '" class="dropdown-content">' +
						'<p>Display name:</p><span> ' + stream.channel.display_name + '</span>' +
						'<p>Game:</p><span> ' + stream.channel.game + ' </span>' +
						'<p>Followers:</p><span> ' + stream.channel.followers + ' </span>' +
						'<p>Language:</p><span> ' + stream.channel.language + ' </span>' +
						'<p>Views:</p><span> ' + stream.channel.views + ' </span>' +
					'</div>' +
				'</div>' +
			'</div>' +
			'<div class="delimiter-horizontal"></div>' 
	} else {
		var content =
			'<div class="row streamers">' +
				'<div class="col-md-4">' +
					'<a href="https://www.twitch.tv/'+ name +'" target="_blank" class="stream-name">' + name + '</a>' +
				'</div>' +
				'<div class="col-md-4">' +
					'<p class="status-offline">Offline</p>' +
				'</div>' +
				'<div class="col-md-4">' +
					'<p class="activity">Not available</p>' +
				'</div>' +
			'</div>' +
			'<div class="delimiter-horizontal"></div>'
	}
	container.innerHTML += content;
}


function myFunction(name) {
	document.getElementById("myDropdown-" + name).classList.toggle("show");
}

window.onclick = function(event) {
	if (!event.target.matches('.drop')) {

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