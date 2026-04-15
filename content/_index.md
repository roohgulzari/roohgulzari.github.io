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

  - block: markdown
    id: jmp
    content:
      title: 'Job Market Paper'
      subtitle: ''
      text: |-
        **[Your JMP Title Here: The Effect of Teacher Professional Development on Student Outcomes in Pakistan]**

        *Abstract:* This paper examines... [Replace with your JMP abstract. Keep it to 3-4 sentences for the homepage. Link to the full paper below.]

        [**Read Full Paper**](/publications/jmp/)
    design:
      columns: '1'

  - block: collection
    id: papers
    content:
      title: Working Papers
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
        **Email:** [gulzari.roohullah@gmail.com](mailto:gulzari.roohullah@gmail.com)

        **Address:** Harvard Graduate School of Education, Cambridge, MA

        **GitHub:** [github.com/roohgulzari](https://github.com/roohgulzari)
    design:
      columns: '1'
---
