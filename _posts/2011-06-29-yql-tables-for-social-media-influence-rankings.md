---
layout: post
title: "YQL Tables for Social Media Influence Rankings"
categories: [yql]
---

While evaluating different available services for "Social Media Influence Ranking", I also implemented [YQL][yql] data tables for them. Doing that has these two major advantages:

* When creating the open data table, you have to take a detailed look at the API you are mapping to, and hence read the documentation very thoroughly. That in itself is a good exercise to really understand the nature of the input and output data.
* For assessing data returned by an API, YQL is my absolute go-to-tool. It makes it really easy to do a lot of ad hoc queries and play with the returned data. Also feeding data from one API to the other is ist trivial. This way the exploration of the data is less time consuming and does not require any scripting. 

# [PeerIndex][peerindex]

I started with [PeerIndex][peerindex]. That one was pretty easy, as they have only one API endpoint so far. Also had some good twitter communication with CEO [Azeem Azhar](https://twitter.com/#!/azeem). Twitter is just awesome for this kind of stuff - in case you did not know - you just have to love it :)

So get yourself a [PeerIndex API key](http://dev.peerindex.net/) and then [try it out in the YQL Console](http://yhoo.it/lFtT2P).

A sample YQL query for PeerIndex looks like this:

{% highlight sql %}
// enter your API key here !!!
SET api_key="YOUR_API_KEY" ON peerindex;
SELECT * FROM peerindex.profile WHERE id='sebastianspier';
{% endhighlight %}


# [Klout][klout]

Klout has only a handful of API points, so creating the YQl tables for them did not take too much time either. You can query information about a user's Klout socre but also who he is influencing or who is influenced by him.

So get yourself a [Klout API key](http://developer.klout.com/) and then [try it out in the YQL Console](http://yhoo.it/jU6pWh).

A sample YQL query for Klout looks like this:

{% highlight sql %}
// enter your API key here !!!
SET api_key="YOUR_API_KEY" ON klout;
SELECT * FROM klout.user.show WHERE users='sebastianspier'
{% endhighlight %}


# [Topsy][topsy] 

Topsy has way more API endpoints, so I ended up with a total of 17 tables. Multiple of them have a fairly repetitive structure though, which makes using them more comfortable.

Topsy does not require an API key, so you can [try it out in the YQL Console](http://yhoo.it/lTc3Bs) right away.

A sample YQL query for PeerIndex looks like this:

{% highlight sql %}
SELECT * FROM topsy.authorinfo WHERE url="http://twitter.com/barackobama"
{% endhighlight %}


# Contributing to the [YQL Community][yql_open_data_tables]

I sent pull request for the YQL tables for all three services to the the official [YQL Community Tables][yql_open_data_tables] repository on github. The PeerIndex tables already got included, which makes them available for a broader audience. Integration of Klout and Topsy are pending.

So have fun with [YQL][yql] the your experiments with Social Media Influence Ranking.  



[yql]: http://developer.yahoo.com/yql/
[yql_open_data_tables]: http://www.datatables.org

[klout]: http://klout.com
[peerindex]: http://www.peerindex.net
[topsy]: http://topsy.com
