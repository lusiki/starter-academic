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
      title: Iskustvo
      subtitle: ''
      text: |-
        **Docent** | Hrvatsko katoličko sveučilište | 2023. do danas
        Odjel za komunikologiju. Nastava iz statistike, znanosti o podacima i obrade prirodnog jezika. Voditelj istraživačkih projekata o digitalnim medijima i ekonomskoj konvergenciji.

        **Poslijedoktorand** | Fakultet hrvatskih studija | 2020. do 2023.
        Izvođenje kolegija iz statistike i provođenje empirijskih društvenih istraživanja.

        **Istraživač** | Institut društvenih znanosti Ivo Pilar | 2012. do 2020.
        Istraživanja u financijskoj ekonometriji, ekonomskoj konvergenciji i primijenjenim kvantitativnim metodama.
    design:
      columns: '1'

  - block: markdown
    id: teaching
    content:
      title: Predavanja
      subtitle: 'Kolegiji na Hrvatskom katoličkom sveučilištu'
      text: |-
        **Preddiplomski**

        [Primijenjena statistika](https://lusiki.github.io/WebStatistika/) |
        [Uvod u statistiku](https://lusiki.github.io/WebStatistika/)

        **Diplomski**

        [Obrada podataka](https://lusiki.github.io/WebObradaPodataka/) |
        [Obrada prirodnog jezika za društvene znanosti](https://github.com/lusiki/Analiza-teksta) |
        [Multivarijatna statistika](https://lusiki.github.io/WebMultiVar/) |
        [Analitika društvenih medija](https://lusiki.github.io/Learning-Social-Media-Analytics/)
    design:
      columns: '1'

  - block: collection
    id: publications
    content:
      title: Publikacije
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
      title: Projekti
      filters:
        folders:
          - project
    design:
      view: article-grid
      columns: 2

  - block: markdown
    id: contact
    content:
      title: Kontakt
      subtitle: ''
      text: |-
        **E pošta:** [luka.sikic@unicath.hr](mailto:luka.sikic@unicath.hr)

        **Telefon:** +385 98 162 3052

        **Adresa:** Ilica 242, 10000 Zagreb, Hrvatska

        **Ured:** II. kat, soba 218. Konzultacije: petak 14 do 15h uz prethodnu najavu e mailom.

        [LinkedIn](https://www.linkedin.com/in/luka-sikic-662ba869/) | [GitHub](https://github.com/lusiki) | [Google Scholar](https://scholar.google.com/citations?user=qOGfRvkAAAAJ&hl=en)
    design:
      columns: '1'
---
