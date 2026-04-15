---
title: ''
summary: ''
date: 2024-01-01
type: landing

design:
  spacing: '5rem'

sections:
  - block: resume-biography-3
    content:
      username: me
      text: ''
      button:
        text: Download CV
        url: uploads/cv.pdf
      headings:
        about: ''
        education: ''
        interests: ''
    design:
      background:
        gradient_mesh:
          enable: true
      name:
        size: md
      avatar:
        size: medium
        shape: circle

  - block: collection
    id: papers
    content:
      title: Work in Progress
      filters:
        folders:
          - publications
        featured_only: false
    design:
      view: citation

  - block: markdown
    id: teaching
    content:
      title: 'Teaching'
      subtitle: ''
      text: |-
        Details about my teaching experience at Harvard HGSE. [See the full teaching page](/teaching/) for more information.
    design:
      columns: '1'

  - block: markdown
    id: contact
    content:
      title: 'Contact'
      subtitle: ''
      text: |-
        **Email:** [rroohullah@g.harvard.edu](mailto:rroohullah@g.harvard.edu)

        **Address:** Harvard Graduate School of Education, Cambridge, MA

        **GitHub:** [github.com/roohgulzari](https://github.com/roohgulzari)
    design:
      columns: '1'
---
