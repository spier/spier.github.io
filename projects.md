---
layout: static_page
title: "Projects"
---

My open-sourced code can be found at [github.com/spier](https://github.com/spier).

These are some of my more prominent projects, including pet projects used for technology exploration. Some of them might not be online anymore at the time of viewing this page.

<table id="cv" cellpadding="0" cellspacing="0">	

{% for post in site.categories.project %}

	<tr>
		<td>
			{% if post.project_link %}
			 	<a href="{{ post.project_link }}" target="_blank">
					<img class="noborder" src="{{ post.project_image }}" alt=""></a>
			{% else %}
				<img class="noborder" src="{{ post.project_image }}" alt="">
			{% endif %}
		</td>
		<td>
			<p>	
				{% if post.project_link %}
				 	<a href="{{ post.project_link }}">{{ post.title }}</a> ({{ post.project_year }})
				{% else %}
					{{ post.title }} ({{ post.project_year }})
				{% endif %}			
			</p>

			{{ post.content }}
		</td>
	</tr>	

{% endfor %}

</table>
