---
layout: post
title: "Apigee Console for the RubyGems API"
categories: []
---

I had heard of [apigee.com][] before but I had not looked at their services yet.
Today I took a closer look and I discovered [Apigee To-Go][apigee_togo], 
a way to create a simple API console for any API (including your own). After creating such an API console, you can embed it elsewhere e.g. in your the developer section of your website.

In order to experiment with [Apigee To-Go][apigee_togo] I needed a guinea pig.
My choice fell on the [RubyGems.org API][]. I have not configured the console to support all API calls of RubyGems. Instead the console below only supports the calls for which no authorization is needed. Adding authorization and the corresponding HTTP verbs (POST, PUT, DELETE) would not be that difficult though.

# Console for the RubyGems.org API

<iframe src="https://apigee.com/apigee_10_bbjeff/embed/console/rubygemsprototype" width="800" height="600"></iframe>

# How to create an Apigee To-Go Console

1. register at [apigee.com][]
1. create a [WADL][wadl] file (with some additional apigee-specific extensions)
1. upload this file to apigee
1. apigee will automatically create the API Console
1. Done! 

I had the first console for just one API endpoint up and running after 5 minutes. After that it took a couple of trial and error iterations, until the console that you see above was done. [apigee.com][] does a decent job in informing you about syntax errors in your WADL file, which helps you to fix them. (I should say though that I have worked with WADL before.)

# Summary

[Apigee To-Go][apigee_togo] is a pretty nice way for developers to get started, when trying to integrate with a new API. A couple of areas of [Apigee To-Go][apigee_togo] could be improved but it is definitely good enough to be useable.

From a developer perspective such a console is mainly useful when trying to find out how an API works in general. For later stages of the development there is still no way around reading the full API documentation.


[apigee.com]: http://apigee.com/
[apigee_togo]: http://apigee.com/about/products_togo.html
[wadl]: http://wadl.java.net
[RubyGems.org API]: http://guides.rubygems.org/rubygems-org-api/