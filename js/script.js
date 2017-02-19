
//jQuery
$(document).ready(function() {
	
	
	var twitchList = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "dreamhackcs", "faceittv", "comster404", "brunofin", "sheevergaming", "jacksofamerica"];


	for(var i = 0; i < twitchList.length; i++) {

		var channel = twitchList[i];
		
		
		var jqxhrOnline = $.ajax({
		    type: "GET",
		    url: 'https://api.twitch.tv/kraken/streams/' + channel,
		    headers: {
			 	'Client-ID': 'mwygi6cqmcya9la0ncuhtkcxc387cc'
			 }
		  });

		var jqxhrOffline = $.ajax({
		    type: "GET",
		    url: 'https://api.twitch.tv/kraken/channels/' + channel,
		    headers: {
			 	'Client-ID': 'mwygi6cqmcya9la0ncuhtkcxc387cc'
			 }
		  });


		$.when(jqxhrOnline, jqxhrOffline).done(function(jqxhrOnline, jqxhrOffline) {
		  	var url;
		  	var logo;
		  	var display_name;
		  	var status;
		  	var htmlString;
		  	

		  	if(jqxhrOnline[0].stream !== null) {
		  		url = jqxhrOnline[0].stream.channel.url;
		  		logo = jqxhrOnline[0].stream.channel.logo;
		    	display_name = jqxhrOnline[0].stream.channel.display_name;
		    	status = jqxhrOnline[0].stream.channel.status;
			}

			else {
				url = jqxhrOffline[0].url;
		  		logo = jqxhrOffline[0].logo;
		    	display_name = jqxhrOffline[0].display_name;
		    	status  = "";
			}

			
			
			htmlString = "";
			if(jqxhrOnline[0].stream !== null) {
				htmlString += '<a href="' + url + '" class="list-group-item list-group-item-success">';
				htmlString += '<span class="badge"><i class="fa fa-television fa-lg" aria-hidden="true"></i></span>';
			}
			else {
				htmlString += '<a href="' + url + '" class="list-group-item">';
			}


			htmlString += '<h4 class="list-group-item-heading"><img class="img-circle list-logo" src="' + logo + '">' + display_name + '</h4>';
			htmlString += '<p class="list-group-item-text">' + status + '</p>';
			htmlString += '</a>';

			$("#channels").append(htmlString);
		});
		
	} //end for loop
	
	


});