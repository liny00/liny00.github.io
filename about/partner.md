---
layout: main
title: "合作伙伴"
permalink: /about/partner/
sidebar: true
about: true
---

<div style="display: -webkit-box; display: -webkit-flex; display: flex; flex-direction: row; flex-wrap: wrap; justify-content: flex-start;">
{% for image in site.static_files %}
	{% if image.path contains "partners" %}
	<div style="padding: .8rem;">
		<img style="width: 9em;" src="{{ image.path }}">
	</div>
	{% endif %}
{% endfor %}
</div>