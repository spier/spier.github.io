---
layout: post
title: "Why Fork YQL Community Tables?"
categories: [yql]
---

The question of this post is: Why does it make sense to have a personal fork of [YQL's Community Open Data Tables][yql_open_data_tables], short Community Tables?

So what again are these **Open Data Tables**?

> Open Data Tables are XML files that can be "plugged" into the Yahoo! Query Language open platform (YQL). > These files describe how the YQL SQL-like language can be mapped onto any web service or source on internet.
> 
> Source: [YQL's Community Open Data Tables][yql_open_data_tables]

Yahoo obviously encourages developers to contribute their own tables to the Community Tables, more specifically to the [github repository][yql_open_data_tables_github]. That makes perfect sense and is just how it should be. One the other hand this can be confusing for people that are starting with YQL and are searching for YQL on github, as they will find [multiple forks](https://github.com/yql/yql-tables/network) of the Community Tables as well. Actually that is exactly what happened to me when I was looking into YQL the first time.

## Some reasons for forking 

1. It is just so easy the do a fork with github, so people do it, even if they might not need to.
1. People that want to have their own tables pulled into the Community Tables need to have a fork of the main repo, so that they can send a pull request via github.
1. Having a personal fork of the tables also has the advantage that you can keep them in a "known state".

## Why do I have a personal fork?

Initially I kept my [personal fork of the Community Tables](https://github.com/spier/yql-tables) because I fixed some bugs and wanted to push my changes back to the community. Also this was the best playground to get some hands-on experience with how the creation of open data tables works. That's how it started.

Also my own fork give me more control over which updates I add to them and when I do it. This actually applies to doing updates faster or slower than they are done in the Community tables. Meaning sometimes I want to get changes merged into my own fork faster, than the central Community Tables does it. On the other hand there are also situations where I might want to keep an older version of an open data table because I have an application that uses exactly this version of the table.

The latter is actually an issue in it's own right. YQL's open data tables are not versioned, so they do not have an own version themselves. They normally map to a specific version of an API by pointing to the API endpoint that contains a specific version number. The issue is though that pretty much everything in this table could be changed without you noticing it. I will not get deeper into this issue but it is a question that has been lingering in my head for quite a while now, so if I could come to a conclusion about this I might move it into an additional post.

Finally an own fork also is a good place to share extra information with others. e.g. I have added a README to me fork, which contains for example a list of issues that I have encountered with YQL that might have been solved by others already who could give me input.

Finally, sharing is everything. So if you are a YQL developer, make sure you push your updates back to the  [github repository][yql_open_data_tables_github] of the Community Tables from time to time.





[yql]: http://developer.yahoo.com/yql/
[yql_open_data_tables]: http://www.datatables.org
[yql_open_data_tables_github]: https://github.com/yql/yql-tables
[yql_blog]: http://www.yqlblog.net/blog
[yql_forum]: http://developer.yahoo.net/forum/index.php?showforum=41
[yql_documentation]: http://developer.yahoo.com/yql/guide/
[yql_console]: http://developer.yahoo.com/yql/console/?q=show%20tables&env=store://datatables.org/alltableswithkeys
[seb_twitter]: https://twitter.com/#!/sebastianspier
