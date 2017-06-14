---
layout: main
title: "团队风采"
permalink: /about/team/
sidebar: true
about: true
---

{% assign d = site.data %}
<div class="team">
    {% for person in d.team %}
	<div class="team-content">
		<img src="/image/team/{{ person.link }}.jpg">
		<div>{{ person.name }}</div>
		<div>{{ person.pos }}</div>
	</div>
	{% endfor %}
</div>