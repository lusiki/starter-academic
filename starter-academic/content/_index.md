---
title: ''
summary: ''
date: 2024-01-01
type: landing

design:
  spacing: '6rem'

sections:
  - block: resume-biography-3
    content:
      username: admin
      text: ''
      button:
        text: ''
        url: ''
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
    id: experience
    content:
      title: Experience
      subtitle: ''
      text: |-
        **Assistant Professor** | Croatian Catholic University | 2023 to present
        Department of Communication Sciences. Teaching statistics, data science, and NLP. Leading research projects on digital media analysis and economic convergence.

        **Postdoctoral Researcher** | Faculty of Croatian Studies | 2020 to 2023
        Teaching statistics courses and conducting empirical social research.

        **Researcher** | Institute of Social Sciences Ivo Pilar | 2012 to 2020
        Research in financial econometrics, economic convergence, and applied quantitative methods.
    design:
      columns: '1'

  - block: markdown
    id: teaching
    content:
      title: Teaching
      subtitle: 'Courses at Croatian Catholic University'
      text: |-
        **Undergraduate**

        [Applied Statistics](https://lusiki.github.io/WebStatistika/) |
        [Introduction to Statistics](https://lusiki.github.io/WebStatistika/)

        **Graduate**

        [Data Science for Social Scientists](https://lusiki.github.io/WebObradaPodataka/) |
        [Natural Language Processing for Social Sciences](https://github.com/lusiki/Analiza-teksta) |
        [Multivariate Statistics](https://lusiki.github.io/WebMultiVar/) |
        [Learning Social Media Analytics](https://lusiki.github.io/Learning-Social-Media-Analytics/)
    design:
      columns: '1'

  - block: collection
    id: publications
    content:
      title: Recent Publications
      text: ''
      filters:
        folders:
          - publication
        exclude_featured: false
      count: 5
    design:
      view: citation

  - block: collection
    id: projects
    content:
      title: Projects
      filters:
        folders:
          - project
    design:
      view: article-grid
      columns: 2

  - block: markdown
    id: contact
    content:
      title: Contact
      subtitle: ''
      text: |-
        **Email:** [luka.sikic@unicath.hr](mailto:luka.sikic@unicath.hr)

        **Phone:** +385 98 162 3052

        **Address:** Ilica 242, 10000 Zagreb, Croatia

        **Office:** II. kat, soba 218. Konzultacije: petak 14 do 15h uz prethodnu najavu e mailom.

        [LinkedIn](https://www.linkedin.com/in/luka-sikic-662ba869/) | [GitHub](https://github.com/lusiki) | [Google Scholar](https://scholar.google.com/citations?user=qOGfRvkAAAAJ&hl=en)
    design:
      columns: '1'
---
