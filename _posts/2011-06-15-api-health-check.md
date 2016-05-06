---
layout: post
title: "API Health Checker with YQL"
categories: [idea, yql]
---

Wouln't it be possible to build an API Health Checker with YQL?

Don't know what YQL is? It's the thing! I love it. Go checkout the excellent [YQL documentation](http://developer.yahoo.com/yql).

Now that you know what YQL is, you need to learn about the open data tables as well, also called community tables. They open source, every body can contribute to them, the main repository is hosted at [github][yql_community_tables].

With the combination of YQL and the open data tables I am imagining the following to be possible:

One could implement a test suite, much like a continuous integration test, that runs over all YQL tables and sends sample queries to all these APIs. Then you compare the returned results to a predefined expected value - much like an assertion in a Unit Test. This way one could check if the APIs are still operating and if the mapping created by the YQL table is correct. 

Building that into the YQL table DTD would result in something like this:

```xml
<meta>
	...
	<sampleQuery>
		<query>SELECT * FROM {table} WHERE id="123"</query>
		<expectedResult>SOME_JSON_STRING_HERE</expectedResult>
	</sampleQuery>
</meta>
```

# Challenges

An incomplete list of the known challenges from the top of my head:

* Many APIs require an API key. Of course one could get an API key for all these APIs but we are talking about a lot of APIs here and managing all these keys does not sound like fun (not to mention that they have to renewed etc)
* Most API results are not static (Why would you call the API if you always get the exact same data anyways, right?) One could still map parts of the results against some known values but that becomes more complicated then.

So, API builders, YQL lovers, tech heads. What do you think? Is this possible, and is this a good idea at all?



[yql_community_tables]: https://github.com/yql/yql-tables