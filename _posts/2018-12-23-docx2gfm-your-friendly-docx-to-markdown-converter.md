---
layout: post
title: "docx2gfm - Your friendly docx to markdown converter"
categories: []
---

I am maintaining the [Engineering blog for Meltwater][uth]. Our blog uses jekyll and GitHub Pages as the publishing platform.

In our [tech stack and publishing process][tech-stack], the authors and editors use the commenting/suggesting features of Google Docs to collaborate on their blog posts.

As we use Google Docs for crafting the posts, we convert posts from `.docx` to markdown format frequently. I wrote [docx2gfm][docx2gfm], to make this task less tedious and error-prone.

This post shows how to use `docx2gfm` to convert a document from `.docx` to markdown ([github-flavored-markdown][gfm]).

<!-- more -->

## The original doc

Let's say you have a document `simple-doc.docx` that looks like this:

<img class="center" src="/images/docx2gfm/doc-as-docx.jpg" title="the original .docx (Google Docs) document">
	
## Turning this into Markdown

With `docx2gfm` you can turn `simple-doc.docx` into markdown.

Running this command ... 

```shell
docx2gfm --no-jekyll -f simple-doc.docx
```

... will generate this markdown:

```markdown
---
title: '<span id="_iq8c5s4280y5" class="anchor"></span>Super Simple Doc'
---

A short intro goes here.

## A headline looks like this

Let’s see how [docx2gfm][docx2gfm] converts links.

## Emphasize section

We **may be Bolder**, we *may be Italian* (ouch!), we ~~may be on Strike~~, or under the line.

Not all of these work in [github-flavored-markdown][github-flavored-markdown]. This is markup, not [text formatting][text-formatting].

## How about lists?

- A list ...

- … with bullets

1. Numbered lists …

2. Are great too!

## An image

<img src="media/image1.png" style="width:0.74479in;height:0.74479in" />

Von Ludwigs2 - Eigenes Werk, CC BY-SA 2.5, [https://commons.wikimedia.org/w/index.php?curid=6292191][https://commons.wikimedia.org/w/index.php?curid=6292191]

## Table Tests

| **TH 1** | **TH 2** | **TH 3** |
|----------|----------|----------|
| TD 1     | TD 2     | TD 3     |

## Quote!

Every once in a while you need a great quote. To do so, write your quote and then move the indentation level in the Google Doc to the right, as shown below:

> Blogging is great for your charma.
>
> \- Sebastian Spier (2019)

[docx2gfm]: https://github.com/spier/docx2gfm
[github-flavored-markdown]: https://help.github.com/articles/basic-writing-and-formatting-syntax/
[text-formatting]: https://softwareengineering.stackexchange.com/questions/207727/why-there-is-no-markdown-for-underline
[https://commons.wikimedia.org/w/index.php?curid=6292191]: https://commons.wikimedia.org/w/index.php?curid=6292191
```

## Rendered Markdown (HTML)

This markdown will render to HTML similar to this:

<img class="center" src="/images/docx2gfm/doc-as-html.png" title="the resulting HTML">

## Post Processing

You might say that the resulting markdown is not perfect. That is correct, it is not 100% the same **format** as the original `.docx` file.

Important post-processing that you still need to do:

- set the **title** of the document. Markdown does not know what to do with the *title format* it gets from .docx.
- move **images** to the correct directory in your blog and fix the image paths in the markdown

## In Closing

Try out [docx2gfm][docx2gfm] if you need to convert from Google Docs or `.docx` to markdown frequently. docx2gfm also has features to configure the markdown output e.g. to include a jekyll Front Matter.

Technically docx2gfm is a thin wrapper around [pandoc][pandoc]. Hence big props to the amazing people that built pandoc!

Open source at it's best :)

[uth]: https://underthehood.meltwater.com
[tech-stack]: https://spier.hu/2019/11/a-simple-tech-stack-for-your-engineering-blog
[docx2gfm]: https://github.com/spier/docx2gfm
[gfm]: https://guides.github.com/features/mastering-markdown/
[pandoc]: https://pandoc.org/installing.html
