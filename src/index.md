---
title: 'Andy’s Micro Blog'
layout: 'layouts/archive.njk'
pagination:
  data: collections.items
  size: 10
  reverse: true
permalink: archive/{{ pagination.pageNumber }}/index.html
---

Hi pals, I’m [Andy](//hankchizljaw.com) and this is my micro blog. It’s made with [Eleventy](//11ty.dev) and syndicates content to my social networks, such as [Twitter](//twitter.com/hankchizljaw).

You can see the source code, [here](https://github.com/hankchizljaw/microblog).
