---
layout: post
title: "Robots are Fun"
categories: []
---

<script type="text/javascript">
 $(document).ready(function() {
		$('div#post p').each(function(index) {
			// only every second paragraph gets a robot
			if (index % 2 == 0) {
				// choose a set of robots
				var set_name = "set" + rand(1,3);
				// fixed size of robot image
				var size = "150x150";
				
				// put together the image URL
				var img_url = "http://robohash.org/" + escape($(this).text()) + ".png";
				img_url += "?set=" + set_name;
				img_url += "&size=" + size;
				
				// some information about the robot
				var img_alt_text = "I am a " + size + "px robot from family " + set_name + " at http://robohash.org.";

				// append the robot image to this paragraph
				$(this).append("<img src='" + img_url  + "' title='" + img_alt_text + "'/>");
			}
		});
 });

	// lower bound and upper bound
	function rand(l,u) {
		return Math.floor((Math.random() * (u-l+1))+l);
	}
</script>


Did you see [ROBOHASH](http://robohash.org/)? I found them on Twitter, where else. Anyways, the services lets you create unique, robot images for any text you throw at it. This is so much fun, I needed to add even more randomness. So I threw together a bit of jQuery and JavaScript that adds a robot here and there in my text, generated from the paragraphs of this text itself. So if the text you just read was a robot, it would look like this:

Hello Mr. Robot! Check the source code of this page for the full code. The main JavaScript needed is this: 

{% highlight javascript %}
$('div#post p').each(function(index) {
	// only every second paragraph gets a robot
	if (index % 2 == 0) {
		// choose a set of robots
		var set_name = "set" + rand(1,3);
		// fixed size of robot image
		var size = "150x150";
		
		// put together the image URL
		var img_url = "http://robohash.org/" + escape($(this).text()) + ".png";
		img_url += "?set=" + set_name;
		img_url += "&size=" + size;
		
		// some information about the robot
		var img_alt_text = "I am a " + size + "px robot from family " + set_name + " at http://robohash.org.";

		// append the robot image to this paragraph
		$(this).append("<img src='" + img_url  + "' title='" + img_alt_text + "'/>");
	}
});
{% endhighlight %}

So now you will see a new set of robots appear every time you reload this page. Try it out. (Actually what you see is a random tuple out of 27 possible permutations to be more precise but this is just nerd talk.)

Why? Well first of all it is Saturday ... and then most importantly this was fun. The same question could be asked for [ROBOHASH](http://robohash.org/) as well. Why do they do what they do? They give some hints about the **Why** on their website but how does that really matter? It is the Internet, people do crazy things all the time and some of these things are a lot of fun :)

If you are still not happy without the **Why**, you can ask the author [@robiebasak](http://twitter.com/robiebasak) directly.
