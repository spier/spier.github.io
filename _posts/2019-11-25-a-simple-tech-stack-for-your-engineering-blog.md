---
layout: post
title: "A Simple Tech Stack for your Engineering Blog"
comments: true
categories: [blogging, storytelling, knowledge sharing, branding]
canonical_url: https://underthehood.meltwater.com/blog/2019/11/25/a-simple-tech-stack-for-your-engineering-blog/
---

For quite a while I am maintaining the Engineering blog for Meltwater at [underthehood.meltwater.com][uth]. What flew under the radar for a number of years as a side project, is now pushing out multiple blog posts every month, and is helping the company both externally and internally. The blog attracts 50k unique page views per year, so it looks like the content we share is useful for the readers.

This post shares the tech stack we use, and the editing process we apply when releasing blog posts. If you want to start an Engineering blog at your company, this post may help you.

<!-- more -->

## The Tech Stack of our Blog

For our Engineering blog [underthehood.meltwater.com][uth] we went a bit nerdy. We chose [jekyll][jekyll] and [GitHub Pages][ghpages] as our platform. More on the pros and cons of that choice shortly.

More about the stack:

* **CMS**: We are not using a Content Management System (CMS) but instead [jekyll][jekyll] as a static site generator. In essence you feed it markdown files, and it renders HTML out of it.
* **Theme**: a custom theme for jekyll (that we built during a hackathon project)
* **Hosting**: [GitHub Pages][ghpages] for hosting the static content. It supports jekyll out of the box, and allows us to host our blog without any additional costs.
* DNS setup to serve the blog at underthehood.meltwater.com

### Pros and Cons of the Tech Stack

As a pro our blog loads fast, and is highly available at negligible cost. Getting the same speed and uptime with any CMS rendering the blog dynamically, and involving a database for content storage, would be a lot more work and certainly more expensive.

The con here is that we cannot do fancy things like loading dynamic content from twitter or GitHub. Quite frankly we don't need that anyways, hence this approach was right for us.

Also as markdown and GitHub are well known by our Engineers, we don't have to explain hardly anything new to them when they want to write a blog post. 

However this can be a gatekeeper for colleagues in Product/UX or other functions in our Product & Engineering department that might not have used markdown and GitHub before. We counteract that with our Editing process (see below).

<a href="https://underthehood.meltwater.com">
	<img class="center no-border" src="/images/uth-snapshot-2019-11-19.jpg" title="underthehood.meltwater.com"></a>

## Editing and Publishing Process

Our approach is simple. We are not the New York Times, so small mistakes are acceptable! :)

1. the author finds a topic to write about (it often starts with nothing more than a comment in Slack, an email, or a corridor conversation)
1. the author writes a draft of their blog post in a Google Doc
1. somebody from their team or I providing feedback for the draft, and clarify the target audience and the main takeaways they author wants to get across 
1. once the content is done, we convert the Google Doc to markdown and the author sends a Pull Request to our blog
1. Done! Fame and glory for the author forever :)

## Why Google Docs?

[Google Docs][gdocs] has great commenting/suggesting features, that make it easy for authors and editors to collaborate. The alternative of writing the post in markdown and then using Pull Requests on GitHub for collaboration is not attractive for us, as it does not make it easy enough to suggest changes inline in the blog post and have a conversation about the content between the authors and editors.

Additionally Google Docs is well known by everybody in our Product & Engineering department, which lowers the technical barrier of entry for people that want to write a blog post a lot. 

However for the authors that don't know the markdown format, this also means that somebody has to do the Google Doc to markdown conversion for them. No problem though, as I wrote [docx2gfm][docx2gfm], a little tool that makes this conversion faster.

## Starting your own Engineering Blog

Some developers are already maintaining their personal development blogs. This is great but they often fall short on content, as you can see on my own [spier.hu][spier.hu] blog. :) So if you are an engineer, why not write a post on your company's Engineering blog about the topics of your day-to-day work?

Many companies are already writing about how they are approaching various challenges in their Engineering department, but I think it could be more. We can all learn from each other! So the more honest stories we all put out there about the realities of the software development industry the better.

If you want to start an Engineering blog similar to [underthehood.meltwater.com][uth] for your company, I hope you found this post useful. If you want to discuss how to motivate people to write, get buy-in from leadership, and set up tech and process for your blog to be successful, please reach out, I am happy to help! 

PS: I also want to thank Tristan for the design, Alex for helping with the migration to GitHub Pages, Niall for co-maintaining the blog with me for the last 2 years, and the many authors that have provided invaluable feedback throughout the years. You all made this approach work!

[uth]: https://underthehood.meltwater.com
[jekyll]: https://jekyllrb.com
[ghpages]: http://pages.github.com
[gdocs]: https://www.google.com/docs/about/
[docx2gfm]: https://github.com/spier/docx2gfm
[spier.hu]: http://spier.hu
