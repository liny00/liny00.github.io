---
layout: main
title: "合作伙伴"
permalink: /about/partner/
sidebar: true
about: true
---

<div style="float: left;">
{% for image in site.static_files %}
	{% if image.path contains "partners" %}
	<div style="display: inline-block;">
		<img style="width: 9em; padding-left: 1em;" src="{{ image.path }}">
		<!-- <p style="text-align: center;">{{ image.basename }}</p> -->
	</div>
	{% endif %}
{% endfor %}
</div>