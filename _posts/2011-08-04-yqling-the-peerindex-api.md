---
layout: post
title: "YQL-ing the PeerIndex API"
categories: [yql]
---

I want to give non-developers a chance as well to get the gist of this post, therefore I start with some introductions. To all the geeks, you may want to fast-forward to the section **Basic YQL**.

## APIs

So what is an [API][] really? In short an API is a way for developers to programmatically interact with a web application. Here a practical example:

Say you as a normal user would point your browser to [http://www.peerindex.net/sebastianspier](http://www.peerindex.net/sebastianspier) to look up my PeerIndex profile. A flashy website with some graphs and charts and things like that comes up. Fantastic, all as expected.

But what if you were interest in the underlying data that powers this website? That’s where you would make a call to the [PeerIndex API][peerindex_api]. An API call is often nothing more than a URL, just that this URL looks a bit more cryptic than the URLs you type in your browser. E.g. to retrieve the data for my user profile at PeerIndex, you would make a request to this URL:

http://api.peerindex.net/1/profile/show.xml?id=sebastianspier

The response from the PeerIndex API would be this XML data:

<script src="https://gist.github.com/1125599.js?file=peerindex1.xml"></script>

{% highlight xml %}
<profile>
	<name>Sebastian Spier</name>
	<twitter>sebastianspier</twitter>
	<slug>sebastianspier</slug>
	<known>1</known>
	<authority>35</authority>
	<activity>34</activity>
	<audience>31</audience>
	<peerindex>34</peerindex>
	<url>http://pi.mu/i2VL</url>
	<topics>
		<topic>open source</topic>
	</topics>
</profile>
{% endhighlight %}

So you see a data structure that contains some basic information about the user, including the peerindex, authority, activity, and audience values, and some topics he/she tweets about. So making an API call was not that hard after all, right?

Now imagine, that developers have to work with a great number of these APIs, and they have to remember all this cryptic URLs for the different APIs that they want to use. This is where YQL comes in and can make developers’ life easier.

## Level 1: Basic YQL

Just very briefly on [YQL][yql], the Yahoo! Query Language: YQL is an [SQL][]-like language which makes it possible to express API queries in a more human readable way. Let’s jump back to our previous example. With YQL, the same query for my PeerIndex profile would look like this:


<script src="https://gist.github.com/1125599.js?file=peerindex2.sql"></script>

{% highlight sql %}
SELECT * FROM peerindex.profile WHERE id='sebastianspier'
{% endhighlight %}

That reads a little bit easier, doesn’t it? You can almost speak this out loud in English, just like “Select everything from the PeerIndex profile where the ID is sebastianspier”. This concept of YQL gets even more powerful when you realize that you can query different APIs in a fairly similar manner. Say I want to fetch my user profile from the [Twitter API][]. For that I would write the following YQL statement:

<script src="https://gist.github.com/1125599.js?file=peerindex3.sql"></script>

{% highlight sql %}
SELECT * FROM twitter.users WHERE id='sebastianspier'
{% endhighlight %}

Looks pretty similar, right? So YQL makes the simple things simple, just how it should be.

## Level 2: A bit more advanced

At the same time YQL also makes the more complicated things less complicated. Let’s see an example of that too.

Say you want to find some people that have been tweeting about “PeerIndex”, for which you need to use the Twitter API. This API normally returns a lot of data, so you can use another benefit of YQL and restrict the data that is returned to just the fields that you are interested in. If you were just interested into the date, user and text of a tweet, you would write this YQL query:

<script src="https://gist.github.com/1125599.js?file=peerindex4.sql"></script>

{% highlight sql %}
SELECT created_at, from_user, text 
FROM twitter.search 
WHERE q="PeerIndex" AND rpp="5"
{% endhighlight %}

This YQL call returns a result set like this:

<script src="https://gist.github.com/1125599.js?file=peerindex5.xml"></script>

{% highlight xml %}
<results>
     <created_at>Tue, 26 Jul 2011 21:19:29 +0000</created_at>
     <from_user>Mike_Rossetti</from_user>
     <text>Tweet frequency has been inversely proportional with this account's PeerIndex. #socialinfluence</text>
 </results>
 <results>
     <created_at>Tue, 26 Jul 2011 21:04:13 +0000</created_at>
     <from_user>focus2grow</from_user>
     <text>RT @pamelamuldoon: I've just claimed my @PeerIndex profile, check it out http://t.co/KMt6Dox</text>
 </results>
 <results>
     <created_at>Tue, 26 Jul 2011 20:54:28 +0000</created_at>
     <from_user>dfolwell</from_user>
     <text>Cool site @Peerindex Check out your score compared to others? http://t.co/DsIKmnm</text>
 </results>
 <results>
     <created_at>Tue, 26 Jul 2011 20:50:10 +0000</created_at>
     <from_user>benri</from_user>
     <text>I've just curated a group on Design featuring @creativehat (3) @fcircunflexo (11) @art21web (19) see it here http://t.co/bag6Mgu</text>
 </results>
 <results>
     <created_at>Tue, 26 Jul 2011 20:37:21 +0000</created_at>
     <from_user>beth_tk</from_user>
     <text>RT @azeem: PeerIndex is looking for a Data engineer http://t.co/XAd0pMq &amp;amp; a Senior Data Scientist http://t.co/lFnldfb - free cookies! pls RT</text>
 </results>
{% endhighlight %}

## Level 3: A real world use case

After seeing an easy and intermediate example of YQL, let’s use the full potential of YQL in the 3rd example. We have been making individual calls to the Twitter API and the PeerIndex API, but how do you combine the two? Say that you want to look up the PeerIndex profiles of the users that have been tweeting about “PeerIndex” recently. Neither the PeerIndex nor the Twitter API can do that on their own, so you need to use them in combination.

Traditionally you would have to make a call to the Twitter API first and find the tweets about “PeerIndex”. Then you would take the usernames from those tweets and look up their profiles using the PeerIndex API. That makes 1 call to the Twitter API and then n calls to the PeerIndex API, where n is the number of user profiles you want to look up. YQL can do everything in 1 call, so let’s see how that would look:

<script src="https://gist.github.com/1125599.js?file=peerindex6.sql"></script>

{% highlight sql %}
SELECT name, twitter, peerindex 
FROM peerindex.profile 
WHERE id IN (
    SELECT from_user 
		FROM twitter.search 
		WHERE q="PeerIndex" AND rpp="5"
) 
| sort(field="peerindex", descending="true")
{% endhighlight %}

Yes, this is more complex. Let’s break down what is happening in this call (from the inner SELECT to the outer one):

1. make a call to the Twitter Search API and search for the 5 most recent tweets that contain the word “PeerIndex”
1. take the from_user of these tweets (which is the user who wrote the tweet)
1. look up those users by making calls to the PeerIndex API
1. from the results, only select name, twitter handle, and peerindex
1. sort the results be descending PeerIndex

Quite a bit of functionality in just one YQL statement. This is of course more difficult to read than the simple examples we discussed previously but at least it is still somewhat readable. Below you see the results of this call:

<script src="https://gist.github.com/1125599.js?file=peerindex7.xml"></script>

{% highlight xml %}
<results>
    <json>
        <peerindex>51</peerindex>
        <twitter>benri</twitter>
        <name>Benoit Richard</name>
    </json>
    <json>
        <twitter>focus2grow</twitter>
        <peerindex>37</peerindex>
        <name>Teicko Huber</name>
    </json>
    <json>
        <twitter>beth_tk</twitter>
        <peerindex>28</peerindex>
        <name>Beth Holmes</name>
    </json>
    <json>
        <twitter>Mike_Rossetti</twitter>
        <peerindex>18</peerindex>
        <name>Mike Rossetti</name>
    </json>
    <json>
        <twitter>dfolwell</twitter>
        <name>David Folwell</name>
    </json>
</results>
{% endhighlight %}


## Conclusions

Especially now that more and more web services are opening up their APIs to outside developers, a tool like YQL becomes increasingly valuable to make the use of these APIs easier. Many APIs are available through YQL’s [Open Data Tables][yql_open_data_tables] already, which is also the place where you will find the YQL table for PeerIndex that I created. Try it out in the [YQL Console][]. If you are interested in creating YQL tables yourself, have a look at the official [github repository](https://github.com/yql/yql-tables/tree/master/peerindex) for a lot of examples.

Note: For simplicity reasons I have neglected the API key which is necessary for querying the PeerIndex API. If you are a developer and want to try out the PeerIndex API, go to [dev.peerindex.net](http://dev.peerindex.net) to get a key.

I hope you got a basic idea now what APIs are, what YQL is, and how it can be used to query different APIs like the [PeerIndex API][peerindex_api]. I am happy to answer any questions and take feedback in the comments section. 

Happy YQL-ing and have fun with the PeerIndex API.

### About the Author:

Sebastian Spier is Lead Researcher at [Meltwater Group](http://www.meltwater.com)’s Research and Development Center in Budapest, Hungary. He and his team are making creative use of current technologies or early adoptions of new paradigms, in order to solve Meltwater’s complex technology challenges in the domains of information retrieval, natural language processing, big data, and sentiment detection. You can contact him on [Twitter](http://twitter.com/sebastianspier) and he is also blogging at [spier.hu](http://spier.hu).

[Twitter API]: https://dev.twitter.com/docs/api
[peerindex_api]: http://dev.peerindex.net
[peerindex_docs]: http://dev.peerindex.net/docs
[API]: http://en.wikipedia.org/wiki/API
[yql]: http://developer.yahoo.com/yql
[SQL]: http://en.wikipedia.org/wiki/SQL
[Topsy API]: http://corp.topsy.com/developers/api/
[yql_open_data_tables]: http://www.datatables.org
[YQL Console]: http://developer.yahoo.com/yql/console/?q=show%20tables&env=store://datatables.org/alltableswithkeys


