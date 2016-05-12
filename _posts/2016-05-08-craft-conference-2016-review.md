---
layout: post
title: "Craft Conference 2016 Review"
categories: [conferences]
---

This April me and many colleagues from [Meltwater](http://meltwater.com) went to [Craft Conference](http://beta.craft-conf.com/) in Budapest. While I was typing up my notes, I figured I might as well share them publicly.

The talks below are ordered by my preference i.e. if you trust my judgement, then start viewing them from the top.

What you might get out of this:

* a list of talks that I thoroughly enjoyed (I only summarized those)
* video links, twitter handles of the presenters, and slides for the talks where available
* direct quotes and some of my notes and opinions about these talks
* references for further reading

Some of my notes might not make sense out of context, so continue at your own risk :)

![Craft Conference 2016](/images/craft2016/craft-park.jpg)


# Great Product Team, Successful Product (closing keynote day 1)

[Marty Cagan](https://twitter.com/cagan) (Silicon Valley Product Group)

[Craft Profile](http://beta.craft-conf.com/speaker/MartyCagan),
[Slides](http://www.svpg.com/product-success),
[Video](http://www.ustream.tv/recorded/86159035)

Marty gave an eye opening talk about what he considers key ingredients of great product teams. He summarizes them very well in this [blog post "product success"](http://www.svpg.com/product-success), so I will only add some additional notes below.

His overall statement is that while many companies follow agile principles during the development phase, the rest of their process of building software products is still more waterfall than anything else. (I believe elsewhere I also heard *Water-Scrum-Fall* as a term.)

Marty emphasized the importance of connecting the team directly with the customer. Only then can the whole team help to contribute to the solution, instead of just acting like an internal agency.

To keep the team on track towards their shared goal, one needs a *clear vision (inspiring) and strategy (intentional)*. Having this can also be a great hiring tool for a company!

Instead of pretending we know what we are building, we should focus on quick discovery, and risk assessment. Risks may come in different forms but for example:

![Risks](/images/craft2016/remarker-risks.jpg)
(Photo credit: [@Remarker_eu](https://twitter.com/Remarker_eu/status/725737216404819968))

Some setup elements that make it easier for teams to become great:

* Durable (team together a longer time and a lot)
* Co-located
* Chemistry/ camaraderie - we need a safe place to share ideas
* Skill-set diversity

And lastly a couple of references:

* [Google Ventures - Sprint](http://www.amazon.de/Sprint-solve-problems-test-ideas/dp/0593076117)
* [Dual Track Scrum](https://www.scrumalliance.org/community/articles/2014/december/dual-track-scrum)
* [Discovery vs. Delivery](http://www.svpg.com/discovery-vs-delivery)


# "Thick" Data and Analysis: Engineering with a capital E

[John Allspaw](https://twitter.com/allspaw) (Etsy)

[Craft Profile](http://beta.craft-conf.com/speaker/JohnAllspaw),
Slides (not published as of May 8th),
Video (not published as of May 8th),

John took a highly data-driven approach in analysing what happens while we work as a software developer. How do we debug problems? What works, and what doesn’t? How do we learn from this?

> Not everything that counts, can be counted. Not everything that can be counted, counts. (John Allspaw)

The overall point he was trying to get across:  We need more people to explore what actually happens (below the cover) when we build software. More people need to write books about this topic! 

His many references included:

* His thesis [http://bitly.com/AllspawThesis](http://bitly.com/AllspawThesis)
* Walter G. Vincenti - What engineers know, and how they know it
* Julian Orr - Talking about machines / [Review](http://elearnmag.acm.org/featured.cfm?aid%3D2037936)

![Allspaw](/images/craft2016/allspaw.jpg)


# Psychological Aspects of Estimating

[Joseph Pelrine](https://twitter.com/josephpelrine) (MetaProg GmbH)

[Craft Profile](http://beta.craft-conf.com/speaker/JosephPelrine),
[Slides](https://www.dropbox.com/s/m5j76jx2bnnbczs/PAENotes.pdf?dl%3D0) - requested via jpelrine@sendyourslides.com / subject: PAE,
[Video](http://www.ustream.tv/recorded/86177623)

Joseph delivered a rather uncommon talk for a technology conference but that is probably what made it so great. He focused on how we typically do estimations in software development teams, and which biases we have when we do this.

Even more impactful for me however was the following quote:

> If we find that our language (in software) is reducing our ability to communicate with our customers, then that is the problem we should solve. (Joseph Pelrine)

This resonated a lot with me. Truly great product teams need a healthy amount of communication with customers and other business stakeholders. Hence finding a common language between both worlds is very important. Last but not least as *the language we speak influences the way we think*.


# Embracing uncertainty: Why you should and why you won’t (Keynote)

[Dan North](https://twitter.com/tastapod)

[Craft Profile](http://beta.craft-conf.com/speaker/DanNorth),
[Slides](https://speakerdeck.com/tastapod/embracing-uncertainty),
[Video](http://www.ustream.tv/recorded/86148915)

Dan is a very engaging speaker. I attended his workshop as well, and many of his ideas center around this quote, which takes quite a bit of unpacking:

> Sustainably reduce lead time to business impact. (Dan North)

In his talk he focused on how uncomfortable we are with uncertainty, and how this need for creating certainty may lead to dysfunctions in our software development processes.

Most noteworthy for me, he mentioned that measuring "proxy metrics" can negatively impact the behavior of your team. Make sure you know why you are measuring what, and what you are doing with this number. (e.g. velocity is a pure capacity planning metric but has nothing to do with performance)

![Dan North](/images/craft2016/north.jpg)


# Deploying and Scaling Microservices

[Sam Newman](https://twitter.com/samnewman) (ThoughtWorks)

[Craft Profile](http://beta.craft-conf.com/speaker/SamNewman),
[Slides](http://www.slideshare.net/spnewman/deploying-and-scaling-microservices),
Video (not published as of May 8th)

Sam gave an overview talk, starting from artifacts and how you might build them and ending with deployment platforms for containers. It suspect that for people will experience in container deployment, this talk didn't have much new. However as an overview talk into the topic I found it helpful. 

He reviewed different techniques of artifact creation, along these 4 guiding principles:

* Easy to create
* Easy to deploy
* Abstracts out the tech stack
* Good for dev, good for ops

According to Sam the vendor lock-in of the deployment platforms is not that big of a problem, as the decision of where you run mesos or kubernetes is yours. (amazon ECS, Windows Azure, google cloud, …).

Some of the relevant technologies to read up on in this field are: [Docker](https://www.docker.com/), [mesos](http://mesos.apache.org/), [kubernetes](http://kubernetes.io/)
   

# Architecture without architects

[Martin Fowler](https://twitter.com/martinfowler) (ThoughtWorks) & [Erik Dörnenburg](https://twitter.com/erikdoe) (ThoughtWorks)

[Craft Profile Martin Fowler](http://beta.craft-conf.com/speaker/MartinFowler),
[Craft Profile Erik Dörnenburg](http://beta.craft-conf.com/speaker/ErikDornenburg),
Slides (not published as of May 8th), 
[Video](http://www.ustream.tv/recorded/86152575)

After their talk I didn't necessarily have an answer to how to achieve "architecture without architects" but they certainly provided interesting stimuli. Martin and Erik view the role of an *architect as somebody that improves other developers*, and not somebody that draws diagrams.

Can we imagine a system where adding new features becomes easier, the older the system is? If that is the case, then we have to assume that some architectural thinking was applied.

> Build upon each others work, with local rules and an evolutionary architecture (Martin Fowler & Erik Dörnenburg)

One more instructive comment for me was that each microservice should contain part of UI composition and API gateway, as the team that builds this service has the required domain expertise. Interesting thought, now I am just wondering how to do this :smiley:


# The Technical Debt Trap

[Michael (Doc) Norton](https://twitter.com/DocOnDev) (CTO2)

[Craft Profile](http://beta.craft-conf.com/speaker/DocNorton),
[Slides](https://speakerdeck.com/docondev/the-technical-debt-trap) (further references from cto2@sendyourslides.com / TechnicalDebt),
[Video](http://www.ustream.tv/recorded/86180723)

Doc Norton, one of the better known names in the conference circuit, gave a presentation about how to deal with evolving code bases.

Doc believes that *cleaning sprint* or *hardening sprint* don’t work. Instead we should use the boy scout rule and apply it to our code (“Always leave the campground cleaner than you found it”).

As a simple but good enough proxy metric of code complexity he suggests lines of code.

And finally this quote that will make a lot of developers happy:

> Never ask for permission to do your job correctly. (Doc Norton)


# Building Scalable Stateful Services

[Caitie McCaffrey](https://twitter.com/caitie) (Twitter)

[Craft Profile](http://beta.craft-conf.com/speaker/CaitieMcCaffrey),
[Slides](https://speakerdeck.com/caitiem20/craftconf-2016-building-scalable-stateful-services),
Video (not published as of May 8th)

In her talk, Caitie was able to break down a rather complex topic into digestible pieces. Her excellent slides helped with this a lot as well!

There is much more information in the slides than what I can repeat here but one important comment was that *stateless services still have state (but it’s outside your service)*.


# Scaling Engineering Culture

[Raffi Krikorian](https://twitter.com/raffi) (Uber)

[Craft Profile](http://beta.craft-conf.com/speaker/RaffiKrikorian),
Slides (not published as of May 8th),
[Video](http://www.ustream.tv/recorded/86155322)

Raffi could unfortunately not be at the conference in person but even the remove presentation was good. I didn't take that many notes but my key take-aways were:

What feedback loops do you have in place about your Engineering culture? What do they tell you?

Be careful when rewriting software:

* business moves on (if it takes them too long)
* engineers feel terrible, as they want to deliver but it isn’t possible

Show (to you company) what (business) impact great engineering culture has. Tell the story!

![Catie McCaffrey](/images/craft2016/caitie.jpg)


# Monitoring as a Service - Modernity and Self-Service

[James Turnbull](https://twitter.com/kartar) (Kickstarter)

[Craft Profile](http://beta.craft-conf.com/speaker/JamesTurnbull),
Slides (not published as of May 8th),
[Video](http://www.ustream.tv/recorded/86180736)

James suggests to make interactions between Operations and Development happen when there is no conflict, i.e. when there is no production escalation. Sounds like solid advice :smirk:

Know that you are not the only customer of your monitoring. Find the others and understand the different needs. Then use different visualizations, e.g. consoles and graphs, for different purposes.


# Toward Better Design and Code - A Case Study with Pelikan Cache

[Yao Yue](https://twitter.com/thinkingfish) (Twitter)

[Craft Profile](http://beta.craft-conf.com/speaker/YaoYue),
[Slides](http://twitter.github.io/pelikan/talks/craft-2016/),
[Video](http://www.ustream.tv/recorded/86184979)

Yao talked about a case study at Twitter but while doing that also explored general principles of writing and re-writing software. Her overall approach is that software should be modified by *evolution, not revolution*.

She finds it dangerous to aim for a *better solution*. According to her *we cannot always afford ‘better’. Do good first, then make it better.*

Yao also mentioned that their team would not have been able to design pelikan, without first using all the other technologies that pelikan is abstracting from. So in short, you cannot shortcut the learnings that need to be made. Damn!

