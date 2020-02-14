---
title: 'HankChizlBlog'
layout: 'layouts/archive.njk'
pagination:
  data: collections.items
  size: 10
  reverse: true
permalink: archive/{{ pagination.pageNumber }}/index.html
---

Hi pals, I’m [Andy](//hankchizljaw.com), and this is my Micro Blog. It’s made with [Eleventy](//11ty.dev), lives on [Netlify](//netlify.com) and auto-posts content to [my Twitter account](//twitter.com/hankchizljaw), via [IFTTT](//ifttt.com).

You can see the source code, [here](https://github.com/hankchizljaw/microblog).
