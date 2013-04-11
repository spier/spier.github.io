---
layout: post
title: "API for anabin University Database"
categories: []
---

Recently I was using the [University Database anabin][anabin] which has rather good data but unfortunately no API. So I wrote a prototypic API to demonstrate what cool integrations could be built, if there only was an API.

TL;DR Jump to the [demo of the anabin Meta-API][demo] :)

## What is anabin?

If you want to hire candidates from outside of Germany for the German labor market, different rules apply for the Visa process depending on the country of origin. If the candidate comes from outside of the EU, one option is to apply for the so called [Blue Card][]. One of the requirements for this card is, that the candidate needs a degree from a German university, or from an accredited foreign university. 
![Sample Blue Card Germany](/images/blue_card_sample.jpg)

To find out, if the university has been accredited you can use the [University Database anabin][anabin]. anabin, which has been [built over a period of 10 years](http://anabin.kmk.org/service/ueber-anabin.html), contains information from around 180 countries, 25 institutions, and 22.000 university degrees.

(btw **anabin** stands for "**An**erkennung und Bewertung **a**usländischer **B**ildungs**n**achweise". Yes, in Germany we love accronyms!)

While browsing the database, I noticed a couple of things:

* It is pretty simple to find an institution via the search functionality provided by anabin. Unfortunately there are no permantent links for the university profiles. This is rather unpractical because one cannot set direct links to these profiles, which could for example be practical in order to add it to a persons profile at say [Xing][] or [LinkedIn][].

* Anabin is funded by [Federal Foreign Office (Auswärtiges Amt)][amt], meaning the creating of this database has essentially been funded by the tax payer. Still it has no API, so that integrating this data in other applications is not possible.


## AJAX calls in anabin

While anabin has no official API, it has a site search that uses AJAX calls to dynamically pull new content from the backend to populate the search results table. For example if you search for **London**, the following AJAX call is triggered.

{% highlight bash %}
http://anabin.kmk.org/index.php
?eID=user_anabin_institutionen&conf=institutionsergebnisliste
&sEcho=20&iColumns=13&iDisplayStart=0&iDisplayLength=10
&bRegex=false&iSortingCols=1&iSortCol_0=2&sSortDir_0=asc&s1=London&iDataIds=1
{% endhighlight %}

The JSON structure returned by this AJAX call looks like this:

{% highlight json %}
{
  "iTotalDisplayRecords": 56,
  "iTotalRecords": 27765,
  "sEcho": 20,
  "aaData": [
    [
      "<img style=\"cursor:pointer;\" src=/typo3conf/ext/user_anabin/pi1/res/details_open.png>",
      "6714",
      "Goldsmiths College / University of London",
      "London",
      "Hochschule",
      "H+",
      "Großbritannien",
      "0",
      "London",
      "<a href=\"javascript:;\" class=\"detailLink-institutionen\" data=\"1250\">University of London</a>",
      "1250",
      "",
      "3"
    ],
    ...
  ]
}
{% endhighlight %}



## Building a Meta-API

I don't really want to create an API for anabin, as anabin is best positioned to do that themselves. So consider the following just as a prototype of a Meta-API to anabin, which shall demonstrate what could be done if anabin *had* a real API.

Essentially this is what I did:

* write a ruby wrapper around the AJAX calls that anabin provides (using [grape][])
* added a user friendly API documentation (using the great [swagger-ui][])
* hosting it on [heroku][], so that everybody can access it easily

So go ahead and check out the [demo of the Meta-API][demo].

<a href="http://anabin-api.herokuapp.com" target="_blank">
<img class="noborder" src="/images/anabin-meta-api-swagger.png" alt="anabin meta API" /></a>

While doing this I also converted the JSON structure into a bit more meaningful form, by adding more verbose identifiers.

{% highlight json %}
{
  "uid": "6714",
  "name": "Goldsmiths College / University of London",
  "location": "London",
  "type": "Hochschule",
  "status": "H+",
  "country": "Großbritannien",
  "other_fields": [
    "0",
    "London",
    "<a href=\"javascript:;\" class=\"detailLink-institutionen\" data=\"1250\">University of London</a>",
    "1250",
    "",
    "3"
  ]
}
{% endhighlight %}


## Integration of anabin into other services

So now it is up to you guys! Who integrates anabin into another service first?
I would for example love to see a little icon next to every university name on [LinkedIn][] that indicates, which **blue card accreditation** this university has. Just saying! :)

Now there is an API for anabin, so have fun hacking :)

P.S.: If you should need it, here is the [source code][code] of the Meta-API.

Images Credit:
[blue card](http://commons.wikimedia.org/wiki/File:Blaue_Karte_EU.jpg)


[anabin]: http://anabin.kmk.org/
[yql_anabin]: https://github.com/spier/yql-tables/tree/anabin
[Blue Card]: http://en.wikipedia.org/wiki/Blue_Card_(European_Union)
[Xing]: http://xing.de
[LinkedIn]: http://linkedin.com
[amt]: http://www.auswaertiges-amt.de/EN/Startseite_node.html
[swagger-ui]: https://github.com/wordnik/swagger-ui
[heroku]: https://www.heroku.com
[demo]: http://anabin-api.herokuapp.com
[grape]: https://github.com/intridea/grape
[code]: https://github.com/spier/anabin-api


