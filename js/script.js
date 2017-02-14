
//jQuery
$(document).ready(function() {
	//vars
	var twitchList;
	var htmlString;
	var channel;
	var 


	//init
	twitchList = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
	console.log(twitchList);
	htmlString = "";
	channel = "";
	

	for(var i = 0; i < twitchList.length; i++) {

		channel = twitchList[i];
		console.log(channel);

		$.ajax({
			 type: 'GET',
			 url: 'https://api.twitch.tv/kraken/streams/' + channel,
			 headers: {
			 	'Client-ID': 'mwygi6cqmcya9la0ncuhtkcxc387cc'
			 },
			 success: function(json) {
			 	console.log(json.name);
			 	if(json.stream != null) {
			 		htmlString += '<a href="' + json.stream.channel.url + '" class="list-group-item">';
			 		htmlString += '<span class="badge"><i class="fa fa-television fa-2x" aria-hidden="true"></i></span>';
			 		htmlString += '<h4 class="list-group-item-heading"><img class="img-circle list-logo" src="' + json.stream.channel.logo + '">' + json.stream.channel.display_name + '</h4>';
			 		htmlString += '<p class="list-group-item-text">' + json.stream.channel.status + '</p>';
			 		htmlString += '</a>';
			 	}
			 	console.log(htmlString);
			 	$('#channels').html(htmlString);
			 }
		});
	}
	


});