---
layout: post
title: "Your Social Media Influence in Numbers"
categories: []
---

More and more services are spawning these days that are claiming to measure your "social media influence". Here I am presenting an overview of the services [Klout][klout], [PeerIndex][peerindex], [Topsy][topsy], and [Tweet Grader][tweetgrader] (plus a short bonus round with Twinfluence).

If this topic interests you, you may also want to read [3 Ways Other Than Klout to Measure Influence](http://oneforty.com/blog/klout-alternatives/) and [The Landscape: SME’s List Of Influencer Identification Tools](http://www.socialmediaexplorer.com/online-public-relations/influencer-identification-tools/) for an even broader (but less detailed) overview of the tools for measuring influence.



# Details

Wherever possible I am using my own twitter handle "sebastianspier" to show how these services work.

##[Klout][klout]

![Klout](http://f.cl.ly/items/3P153H292g08100N0G1N/sebastianspier_klout.png "My Klout Profile")

Even when you are not a Klout user but are using Twitter, you will probably already have a profile on Klout e.g. this is [my Klout profile][]. You can see your overall Klout Score, the *Klout Class* assigned to you (in my case "Conversationalist"), and some people that you are apparently influencing. To get more information, you need to sign in with either your Twitter of Facebook login. (I have not done this, so cannot make any statements about the functionality gained by doing so.) 

Klout - with their confident tag line "the Standard for Influence" - claims to measure over 35 variables on Facebook and Twitter for each profile. Of course it can only merge the values for Facebook and Twitter into one calculation if you have logged in into both from the Klout website. Besides the prominent Klout Score, three further metrics are measured. The [Klout documentation][klout_documentation] defines them as follows:

* **Klout Score** is a representation of how successful a person is at engaging their audience and how big of an impact their messages have on people. The scores range from 1 to 100 with higher scores representing a wider and stronger sphere of influence.
* **True Reach** is the size of your engaged audience and is based on those of your followers and friends who actively listen and react to your messages.
* **Amplification Score** is the likelihood that your messages will generate actions (retweets, @messages, likes and comments) and is on a scale of 1 to 100.
* **Network Score** indicates how influential your engaged audience is and is also on a scale from 1 to 100. 

The dataset returned by the Klout API looks like this:

{% highlight xml %}
<klout>
    <twitter_id>96320763</twitter_id>
    <twitter_screen_name>sebastianspier</twitter_screen_name>
    <score>
        <kscore>29.87</kscore>
        <slope>0.18</slope>
        <description>is influential to a tightly formed network that is growing larger</description>
        <kclass_id>0</kclass_id>
        <kclass>Conversationalist</kclass>
        <kclass_description>You love to connect and always have the inside scoop. Good conversation is not just a skill, it's an art. You might not know it, but when you are witty, your followers hang on every word.</kclass_description>
        <kscore_description>is influential to a tightly formed network that is growing larger</kscore_description>
        <network_score>39.32</network_score>
        <amplification_score>14.2</amplification_score>
        <true_reach>36</true_reach>
        <delta_1day>0.75</delta_1day>
        <delta_5day>0.87</delta_5day>
    </score>
</klout>
{% endhighlight %}



##[PeerIndex][peerindex]

![My PeerIndex Profile](http://f.cl.ly/items/3P153H292g08100N0G1N/sebastianspier_peerindex.png "My PeerIndex Profile")

[PeerIndex][peerindex] describes its score as "a relative measure of your online authority. This score reflects the impact of your online activities, and the extent to which you have built up social and reputational capital on the web."

According to the [PeerIndex documentation][] they use these metrics in order to calculate the PeerIndex Score:

* **Authority** is the measure of trust; how much can you rely on that person's recommendations and opinion on a given topic.
* **Audience** is indication of your reach. It is not simply determined by the number of people who follow you, but instead generate from the number of people who listen and are receptive to what you are saying.
* **Activity**  is the measure of how much you do that is related to the topic area. Being to active and people will stop listening to you and if you are too inactive people will never know to listen to you. The Activity Score takes into account this behaviour.

The dataset returned by the PeerIndex API looks like this:

{% highlight xml %}
<peerindex>
    <name>Sebastian Spier</name>
    <twitter>sebastianspier</twitter>
    <slug>sebastianspier</slug>
    <known>1</known>
    <authority>38</authority>
    <activity>24</activity>
    <audience>30</audience>
    <peerindex>36</peerindex>
    <url>http://pi.mu/i2VL</url>
    <topics>universal mobile telecommunications system</topics>
    <topics>science</topics>
</peerindex>
{% endhighlight %}


## Topsy

![My Topsy Profile](http://f.cl.ly/items/3P153H292g08100N0G1N/sebastianspier_topsy.png)

Topsy is a real-time search search engine and rather has ranking functionality as an auxiliary service among others. On 2010/08/24 Topsy [stated][topsy_v2] that they are "now the largest searchable index of content posted on Twitter" with more than 5 billion tweets and 2.5 billion links in their index. In their article [Influence: The Social Web Currency][topsy_influence] the Topsy team explain their definition of *influence*:

> Roughly the top 0.2% most influential of all Twitter users are tagged “Highly Influential”, and “Influential” tags appear for the top 0.5% [...]. So if Topsy says you are influential, you are part of a pretty small group!
>
> [Influence: The Social Web Currency][topsy_influence]

Besides their search service, I found the analytics functionality most interesting. For example you can check how close the [Topsy Race between Dave Winer and me](http://analytics.topsy.com/?q=%40sebastianspier%2C%40davewiner) was (to spoil the fun: I lost!!!)

[topsy_v2]: http://corp.topsy.com/2010/08/24/topsy-deploys-v2-platform-to-index-100-billion-status-updates/
[topsy_influence]: http://corp.topsy.com/about/influence/

The dataset returned by the Topsy API when querying their *authorinfo* endpoint looks like this:

{% highlight xml %}
<topsy>
    <name>Sebastian Spier</name>
    <url>http://twitter.com/sebastianspier</url>
    <type>twitter</type>
    <nick>sebastianspier</nick>
    <description>MD R&amp;D: Meltwater Group. Tweets are my own.&#xd;
#tech #ruby #yql #search #noSQL #BigData #basketball &#xd;
Learning by doing!</description>
    <topsy_author_url>http://topsy.com/twitter/sebastianspier</topsy_author_url>
    <influence_level>0</influence_level>
</topsy>
{% endhighlight %}


## Tweet Grader

![My Tweet Grader Profile](http://f.cl.ly/items/3P153H292g08100N0G1N/sebastianspier_tweetgrader.png)

The last post from the [graderblog](http://graderblog.grader.com) is from Nov 17, 2009, so I am not so sure how active Tweet Grader (aka Twitter Grader) is currently being developed. For the sake of comparison to the other services I am still listing them here. 

> What Twitter Grader is trying to measure is the power, reach and authority of a twitter account. In other words, when you tweet, what kind of an impact does it have?
> 
> Chris Keller, 2009-11-17, [How Does Twitter Grader Calculate Twitter Rankings?][tweetgrader_ranking]

In his [blog post][tweetgrader_ranking] Chris Keller of Tweet Grader describes the different factors that go into determining a users grade. These are **Number of Followers**, **Power of Followers**, **Updates**, **Update Recency**, **Follower/Following Ratio**, and **Engagement**. Please refer to the blog post for more details.

One final note: I don't have a lot of confidence in the grade that Tweet Grader produces. I compared my own grade against the grade of an account that had not posted a single tweet but more followers. You already guessed it: My grade was lower. Together with my impression that Tweet Grader looks somewhat unmaintained right now, I don't recommend Tweet Grader.

Also Twitter Grader did not answer my request for API access in time, so I cannot post a data sample from them here.

## Last and Least: Twinfluence

![Twinfluence Shutdown](http://f.cl.ly/items/2P2B3r3O3U2u1I2V3B1p/twinfluence_shutdown.png)

The domain [twinfluence.com](http://twinfluence.com) is redirected to the profile of founder Guy Hagen and the last message on their [twitter account](https://twitter.com/#!/twinfluence) is from 9 Nov 2009. So I guess it is fair to assume that Twinfluence is dead, which is confirmed by the [tweet](https://twitter.com/#!/GuyHagen/status/62887711761117185) above by Guy Hagen.




[klout]: http://klout.com
[klout_documentation]: http://corp.klout.com/kscore
[my Klout profile]: http://klout.com/sebastianspier

[peerindex]: http://www.peerindex.net
[PeerIndex documentation]: http://www.peerindex.net/help/scores

[topsy]: http://topsy.com

[tweetgrader]: http://tweet.grader.com
[tweetgrader_ranking]: http://graderblog.grader.com/twitter-grader-api/bid/19046/How-Does-Twitter-Grader-Calculate-Twitter-Rankings
