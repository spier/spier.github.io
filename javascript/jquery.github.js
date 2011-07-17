jQuery.githubUser = function(username, callback) {	
	jQuery.getJSON("https://api.github.com/users/" + username + "/repos?callback=?", callback);
  // jQuery.getJSON("http://github.com/api/v1/json/" + username + "?callback=?", callback);
}