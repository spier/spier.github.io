---
layout: post
title: "Sebastian Spier - Netstream"
---

Some of my selected activities from all over the interwebs.
I don't know yet how useful this page is for others but I will just try it out.

## [sebastianspier @ Twitter](https://twitter.com/sebastianspier)

<script src="http://widgets.twimg.com/j/2/widget.js"></script>
<script>
new TWTR.Widget({
  version: 2,
  type: 'profile',
  rpp: 5,
  interval: 6000,
  width: 'auto',
  height: 300,
  theme: {
    shell: {
      background: '#333333',
      color: '#ffffff'
    },
    tweets: {
      background: '#ffffff',
      color: '#000000',
      links: '#227be8'
    }
  },
  features: {
    scrollbar: false,
    loop: false,
    live: false,
    hashtags: true,
    timestamp: true,
    avatars: false,
    behavior: 'all'
  }
}).render().setUser('sebastianspier').start();
</script>

## [spier @ Github](https://github.com/spier)

<ul id="github-projects"></ul>

<script type="text/javascript" src="/javascript/jquery.github.js"></script>

<script type="text/javascript" charset="utf-8">
  $.githubUser('spier', function(data) {
    $('#github-projects').html('');
    
    var repos = data.data;
		// var repos = data.user.repositories;
    repos.sort(function(a,b) {
      return b.watchers - a.watchers;
    });

		// $('#github-projects').append("<ul>");
    $(repos).each(function() {
    // $(repos.slice(0,6)).each(function() {
      $('#github-projects').append("\
<li class='repo'>\
  <p>\
	<a href='" + this.url + "'>" + this.name + "</a>\
  <span class='desc'>"+this.description+"</span>\
	</p>\
</li>");

		// $('#github-projects').append("</ul>");

    });
  });
</script>

