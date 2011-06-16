---
layout: post
title: "Adding Some Emphasis"
---

Being able to link to an article on this site is pretty cool. But there are rare occasions where it might be useful for me to be able to link to individual paragraphs or even highlight certain sentences. Some sort of "deep links" basically, just with a twisted meaning of the phrase.

This is a concept I remember being described by [Dave Winer](http://scripting.com/) (please excuse me, I cannot find the link to the article:) ). Not sure if he was the first to do so but that does not really matter after all either. What I don't like that much about Winer's implementation of these deep links is that they clutter his articles with #-characters after each paragraph.

An implementation of this that I like much better has been done by [Michael Donohoe](http://twitter.com/donohoe) for the New York Times. He implemented a javascript library called [Emphasis](http://open.blogs.nytimes.com/2011/01/10/emphasis-update-and-source/), the [source code](https://github.com/NYTimes/Emphasis) is on github. It is pretty much a plug-and-play solution, you just have to specify with an CSS selector which paragraphs from your articles should be selectable.

# Try it now

Just Double-tap the Shift key and paragraph symbols ¶ will appear next to each paragraph. Click any paragraph symbol to generate a link to that paragraph, or click on sentences to highlight them. The link will appear in your browser’s address bar and you can use these modified URLs for sharing. Pretty cool!

# Demo 
For example you can <a href="http://spier.github.com/2011/06/adding-some-emphasis/#h[FeyCtU,1]" target="_blank">open this article</a> with a section being highlighted. (needs to open in a new window for it to work. sorry!) Check the URL!

For example you can <a href="http://spier.github.com/2011/06/adding-some-emphasis/#h[FeyCtU,1]" target="_self">reload this article</a>  with a section being highlighted. (needs to open in a new window for it to work. sorry!) Check the URL!

I have already used this in a recent pet project [springerquotes][springerquotes] that I will probably write about more soon.

[springerquotes]: http://springerquotes.heroku.com/