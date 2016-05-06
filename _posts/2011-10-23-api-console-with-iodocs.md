---
layout: post
title: "API Console with ioDocs"
categories: [api]
---

Finally I had a chance to play around with [Mashery][mashery]'s [ioDocs][], which Mashery has [open sourced](http://mashery.com/press/release/iodocs.html) some months back. ioDocs has a couple of prerequisites, namely Node.js, npm (Node package manager), and Redis (you can find full installation instructions on the [ioDocs github project][ioDocs_source]). Nevertheless, I struggled through the installation process, as I wanted to see how it compares with the [API Console from Apigee](http://spier.hu/2011/10/apigee-console-for-rubygems-api/) which I wrote about a week ago.

I chose the [USA TODAY Articles API](http://developer.usatoday.com/docs/read/articles) as my guinea pig for this experiment because just yesterday I [wrote a set of YQL tables](http://bit.ly/otN0XX) for that API, so I already knew the API documentation pretty well.

After changing a couple of configuration settings (in JSON files) I had a new API Console running in ioDocs. It took me a bit of experimenting to get things running but all in all maybe 30 minutes, which is not bad at all. The image below shows how my ioDocs for the USA TODAY Articles API ended up.

Here a couple of notes I have about [ioDocs][]:

1. plus
	- The UI of ioDocs is really slick, thumbs up! I especially like that there is plenty of room for documentation. Bonus points for the ability to provide pre-populated drop downs via `EnumeratedList":["json", "rss"]`. Very cool!
	- I am very surprised that USA TODAY does not have ioDocs on there Developer page. It would make experimenting with their API so much easier. So USA TODAY, if you are listening: Go and set up ioDocs!
2. minus
	- ioDocs requires the description of an API in a JSON configuration file. I believe that choosing a standard for this purpose (like [WADL](http://wadl.java.net) or WSDL 2.0) would have been better). Although I know that [Apigee][apigee] is competition for [Mashery][mashery], so there might be other motives here to do things differently :)
	- I don't think that the expressiveness of the current configuration files is high enough to model all APIs. Even some very commonly used URL patterns are not possible e.g. if I had an API that would require the replacement of the parameter **section** in the URL path like this `http://someapi.com/v1/stories/{section}/?date=2011`, then I don't think that ioDocs would currently make this possible.
	- documentation is key for anything that is new! Currently the [documentation of ioDocs on github][ioDocs_source] is a bit tricky to ready.
	
All in all, I like ioDocs! 

Suggestion: In my mind a mixture of the advantages of [Apigee To-Go][apigee_togo] and [ioDocs][] would make for the perfect API Console.


![Experiment with ioDocs for USA TODAY Articles API](/images/iodocs_usatoday.png "Experiment with ioDocs for USA TODAY Articles API")

# Code snippet of the ioDocs configuration file

```ruby
"MethodName":"Search",
"Synopsis":"",
"HTTPMethod":"GET",
"URI":"/articles",
"RequiresOAuth":"N",
"parameters":[
   {
			"Name":"encoding",
			"Required":"N",
			"Default":"json",
			"Type":"enumerated",
			"EnumeratedList":["json", "rss"],
			"Description":"Format in which to return the results. Either 'json' or 'rss'."
   },
   {
			"Name":"search",
			"Required":"N",
			"Default":"",
			"Type":"",
			"Description":"The search string."
   },
	 ...
]
```


[mashery]: http://mashery.com
[ioDocs]: http://developer.mashery.com/iodocs
[ioDocs_source]: https://github.com/mashery/iodocs
[apigee]: http://apigee.com
[apigee_togo]: http://apigee.com/about/products_togo.html