---
layout: post
title: "Centralizing Developer Docs in Backstage"
comments: true
categories: [developer productivity, developer portal, Backstage, documentation, TechDocs, docs-like-code]
canonical_url: https://underthehood.meltwater.com/blog/2022/07/19/centralizing-developer-docs-in-backstage/
---

<img class="right no-border" src="/images/2022-07-19-centralizing-developer-docs-in-backstage/mw-centralizing-developer-docs-in-backstage.png" width="220" title="Centralizing Developer Docs in Backstage" style="margin-left:30px; margin-right:40px;">

A growing Engineering org may reach a point where answering questions that used to be simple have become hard. At least that is true for us! Questions such as: “Who owns this?” “Do we have a component that I can reuse?” “Where are the docs for that API?”

This post shares the challenges we want to solve, and the experiences we made while centralizing our internal developer docs in Backstage, an open platform for building developer portals.

<!-- more -->

## Challenges of Autonomy and Growth

In 2017 the Meltwater Engineering organization started a transformation process towards autonomous teams with full end-to-end responsibility. We shared a lot more about this transformation [in][in] [various][various] [podcasts][podcasts].

During the same period we also grew significantly in size, now with 500+ people in our org, spread over 10+ sites.

The transformation was a great success! We significantly improved delivery speed, quality, and developer happiness.

However any significant change has side-effects. In our case the increased autonomy and growth of the org led to a fragmented ecosystem of developer tooling. It became a lot harder to understand simple things like: “Who owns this?” “Do we have a component that I can reuse?” “Where are the docs for that API?” "What is the recommended way to get started with doing X?" etc

Often the only way to figure it out was to ask another colleague with more tenure in the org, an approach that Gary Niemen from Spotify so aptly called [rumour-driven development][rumour-driven-development].

## What Do We Want Instead?

While we want to maintain the benefits of team autonomy, we can improve in areas where the standardization of tooling doesn't reduce the ability of our teams to move fast and innovate on their core mission.

We can boil down the goal for our Product & Engineering org to:

**Faster onboarding of new hires and acquisitions.**

This is the experience (and metric) that we will push to improve, while periodically reevaluating the needs of our org and business.

## First Experiments with Backstage

When we found Backstage ([backstage.io][backstage.io]) we were excited. Spotify's description of the problem space resonated so well with us that we wanted to try it out.

As we did not immediately have the capacity in our Platform teams to give Backstage a spin, a small group of us started to experiment with Backstage at an internal hackathon.

During that hackathon we explored questions like:

- Are the **TechDocs** a solution to centralize our developer documentation?
- Does the **Software Catalog** clarify the question of component ownership and does it help to explain the interdependencies between components?
- How can we make it simple for developers to use and contribute to our Backstage installation?
- Can we use the tech-radar plugin to visualize the tech used within Meltwater? What other Backstage plugins could help our engineers?

By the end of the hackathon we had a working Backstage instance, with some components imported into the Software Catalog already.

We were especially impressed with TechDocs and its potential to help us build out our centralized developer documentation. Therefore, we decided to continue our experiment after the hackathon and focus on TechDocs first.

## Milestone 1: Starting with TechDocs Only!

For about 2 years we maintained a [readme.com][readme.com] portal, where we hosted cross-team developer documentation. We learned a lot: How to process suggestions for documentation improvements coming from other teams, or how to indicate effectively which team owns which component, especially for pieces that are shared between multiple teams.

However, we were never able to get sufficient teams to contribute to the portal, nor were we happy with the documentation living outside of our source code repos. When we saw the [docs-like-code approach][docs-like-code-approach] that Backstage offers through TechDocs, we were easily sold (also see [Docs as Code][docs-as-code]).

We ran multiple experiments to validate whether we could migrate all docs from readme.com to TechDocs. One of the teams even wrote a little converter script to ease the migration.

<img class="right no-border" src="/images/2022-07-19-centralizing-developer-docs-in-backstage/image2.png" width="270" title="Backstage TechDocs - A docs-like-code approach" style="margin-left:30px; margin-right:20px;">

From a pure documentation standpoint, we were quickly convinced that TechDocs could match the readme.com experience. At the same time, TechDocs gave us more extensibility and the ability to tightly integrate documentation improvements into our code review processes, which provided a lot of value for the creators of the given documentation.

We went from experiment to adoption by migrating all remaining docs from readme.com to TechDocs, and declaring Backstage our go-to place for **all company-internal cross-team developer documentation** at Meltwater.

## The Future of Backstage at Meltwater Engineering

We keep investing in Backstage, as we like the outcomes of our first experiments. But do we truly know what the future Backstage at Meltwater Engineering will be? Not yet!

However, we do know what we learned, what we liked, what we didn't like, and what questions we have. Together with the feedback from our teams this will inform which area we invest in next.

Here a few highlights of what we have observed after using Backstage for a few months. Ask us anything about these! We may write more in-depth blog posts about some of them, should we decide to go down those routes further.

### Curation > Technology

As so often, technology alone won't solve things.

If the information provided in Backstage increases quickly and without structure, it might reach a point where it would not be useful for our developers anymore, as they won't find essential info quickly. Preventing that will require some level of curation of the content/components that we present in Backstage.

One particular problem: Can our teams use Backstage for team-internal documentation (runbooks, etc.), without creating confusion for developers from other teams?

For example: A Meltwater developer is looking for information on how to deploy to our Kubernetes cluster. Instead of finding the relevant info from our Platform teams, they might find an internal Kubernetes runbook from some other team. That would be confusing, rather than helpful.

### docs-like-code is the way to go

With the docs living in the same repo as the source code, we can tightly integrate documentation improvements into our code review processes. The teams that are practicing this [docs-like-code][docs-like-code-approach] approach are confident that it will increase the quality of our documentation and the onboarding speed of new developers.

- **Gotchas**: TechDocs offers formatting features on top of GitHub Flavored Markdown ([GFM][gfm]), which many of our engineers are used to. Also there are some nuances where it actually parses the input differently. - We have a dedicated internal documentation section in our Backstage instance, where we explain how TechDocs works in detail. Hopefully this will make the migration from GFM to TechDocs less painful for our teams.
- **Question**: How to structure documentation into larger categories when the docs for individual components always live in the respective repos? How to highlight which components belong together or depend on each other? - We have experimented with adding docs for [systems/domains][systems/domains] in Backstage but we aren't fully convinced whether this is the best way forward.
- **Concern:** With TechDocs, any docs change requires a PR in GitHub. Does that make the barrier to entry so high that functions like Product or Support will not contribute improvements and fixes to the documentation?

### Discovery - Finding Key Documentation quickly

The default search provided by Backstage is not great. Sometimes we don't see results that we would be expecting (a bug?), and the excerpts as result previews aren't exactly pretty. Most importantly we don't know how to influence the result ranking and we want to give certain docs precedence over others.

Meltwater Engineering having [a lot of][a-lot-of] [search][search] [knowledge][knowledge] should give us an edge here.

### Can Templates support Paved Roads?

We have have only run tiny experiments with the [Templates mechanism][templates-mechanism] in Backstage so far. However we do like its potential to create easier getting-started experiences for common tasks while at the same time promoting certain standards within our Engineering org.

We call these **paved roads** (aka golden paths), and are looking forward to learning and sharing more about how this concept is working out for us in the future.

### Keeping Backstage Up-to-date

The challenge of keeping Backstage up-to-date, is that it is meant as a template for a developer portal, supported by a platform of standardized plugins. Although it is fairly easy to bump the dependencies for the plugins, one also has to update the template itself, which becomes more and more difficult as changes are made locally.

While the [official documentation][official-documentation] recommends a way to solve this, we still found this to become messy quickly and are looking for a better approach so that we don't fall behind on Backstage upgrades just because the upgrade is cumbersome.

## In Closing

This is the beginning of our journey with Backstage. We hope that this post has been useful for you if your org is at a similar stage.

Are you also introducing Backstage? Which challenges of migration and adoption did you have to overcome in your orgs? Which other gotchas/questions/challenges with the technology did you have to solve? We would love to hear more about any and all of such first-hand experiences.

*Aside:* This project with Backstage, as well as this post, were done in collaboration with my fantastic Meltwater colleague <a href="https://www.linkedin.com/in/petter-remen/">Petter Remen</a>.

*Image credits:*

* [Workshop for Growth Illustration][workshop-for-growth-illustration] by [Pixel True][pixel-true]
* [backstage.io][backstage.io]

[in]: https://underthehood.meltwater.com/blog/2019/11/11/the-meltwater-transformation-on-the-arrested-devops-podcast/
[various]: https://underthehood.meltwater.com/blog/2020/01/31/jeff-and-amer-talk-devops-adoption-and-more/
[podcasts]: https://underthehood.meltwater.com/blog/2021/01/09/empowered-product-teams-podcast/
[rumour-driven-development]: https://engineering.atspotify.com/2020/08/how-we-use-golden-paths-to-solve-fragmentation-in-our-software-ecosystem/
[backstage.io]: https://backstage.io
[readme.com]: https://readme.com
[docs-like-code-approach]: https://www.docslikecode.com/articles/ten-tips-maintaining-long-term-docs-like-code/
[docs-as-code]: https://www.writethedocs.org/guide/docs-as-code/
[gfm]: https://github.github.com/gfm/
[systems/domains]: https://backstage.io/docs/features/software-catalog/system-model#ecosystem-modeling
[a-lot-of]: https://underthehood.meltwater.com/blog/2018/02/06/running-a-400+-node-es-cluster/
[search]: https://underthehood.meltwater.com/blog/2018/09/28/using-machine-learning-to-load-balance-elasticsearch-queries/
[knowledge]: https://underthehood.meltwater.com/blog/2018/11/05/optimal-shard-placement-in-a-petabyte-scale-elasticsearch-cluster/
[templates-mechanism]: https://backstage.io/docs/features/software-templates
[official-documentation]: https://backstage.io/docs/getting-started/keeping-backstage-updated
[workshop-for-growth-illustration]: https://iconscout.com/illustrations/workshop-for-growth
[pixel-true]: https://iconscout.com/contributors/pixel-true-designs
