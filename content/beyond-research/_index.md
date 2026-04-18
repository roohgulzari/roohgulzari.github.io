---
title: 'Beyond Research'
summary: 'Talks, platforms, and honors.'
date: 2026-01-01
type: landing

sections:
  - block: beyond-hero
    content:
      kicker: 'Beyond Research · Talks, Platforms & Honors'
      heading: 'Work that lives *outside* the journal page.'
      lede: |
        A selection of conference talks, learning platforms I've helped design, and recognitions from along the way. Some of this sits adjacent to the research; some of it was how I learned the questions I now study.

  - block: beyond-items
    content:
      chips:
        - label: 'All'
          key: 'all'
        - label: 'Talks'
          key: 'talk'
        - label: 'Platforms'
          key: 'platform'
        - label: 'Awards'
          key: 'award'
      groups:
        - kind: 'talk'
          prefix: 'T'
          label_html: 'Talks & *presentations*'
          source: 'data.beyond.talks.items'
          year_range: '2018 — 2025'
        - kind: 'platform'
          prefix: 'P'
          label_html: 'Learning *platforms*'
          source: 'data.beyond.platforms.items'
          year_range: '2019 — 2024'
        - kind: 'award'
          prefix: 'A'
          label_html: '*Awards*'
          source: 'author_awards'
          year_range: '2013 — 2025'
---
