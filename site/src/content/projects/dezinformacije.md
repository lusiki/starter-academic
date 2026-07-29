---
title: "Critical Analysis of Disinformation on Religious Topics"
title_hr: "Kritička analiza dezinformacija o vjerskim temama"
summary: "A public application that reads a Croatian media text and reports whether it carries religious content and whether it shows the markers of disinformation — the first systematic fact-checking tool for religious topics in the Croatian media space."
summary_hr: "Javna aplikacija koja pročita tekst iz hrvatskih medija i izvijesti sadrži li vjerski sadržaj te pokazuje li obilježja dezinformacije — prvi sustavni alat za provjeru činjenica o vjerskim temama u hrvatskom medijskom prostoru."
role: "Role — Application development"
role_hr: "Uloga — razvoj aplikacije"
body_hr: >-
  Aplikacija radi u tri koraka. Tekst se najprije normalizira — uklanjaju se
  brojevi, interpunkcija i česte funkcijske riječi. Pročišćeni se tekst zatim
  uspoređuje s dva rječnika: jednim za katoličko nazivlje i drugim za pojmove
  statistički povezane s dezinformacijama. Naposljetku se TF-IDF težinama i
  kosinusnom sličnošću mjeri koliko je tekst blizak referentnom korpusu ranije
  utvrđenih dezinformacija. Korisnik dobiva izvještaj s dvije ocjene: koliko
  tekst odgovara katoličkom sadržaju i sadrži li elemente karakteristične za
  dezinformaciju. Projekt je financiran iz Nacionalnog plana oporavka i
  otpornosti (NextGenerationEU), u okviru mjere za uspostavu provjere medijskih
  činjenica koju provode Ministarstvo kulture i medija i Agencija za elektroničke
  medije. Uz aplikaciju, projekt je iznjedrio izborni sveučilišni kolegij o
  medijima i dezinformacijama, sveučilišni udžbenik te edukacijske programe za
  novinare i studente.
date: 2023-07-01
tags:
  - "natural language processing"
  - "media analysis"
  - "disinformation"
  - "shiny"
external_link: "https://www.unicath.hr/novosti/projekt-kriticka-analiza-dezinformacija-o-vjerskim-temama-hks-i-partnerskih-institucija"
url_app: "https://katapp.shinyapps.io/Application/"
partners:
  - name: "Croatian Catholic University"
    name_hr: "Hrvatsko katoličko sveučilište"
    href: "https://www.unicath.hr/"
    role: "Project lead, through its communication sciences department."
    role_hr: "Nositelj projekta, preko Odjela za komunikologiju."
  - name: "Croatian Catholic Radio"
    name_hr: "Hrvatski katolički radio"
    role: "Partner institution."
    role_hr: "Partnerska ustanova."
  - name: "Croatian Association of Catholic Journalists"
    name_hr: "Hrvatsko društvo katoličkih novinara"
    role: "Partner institution."
    role_hr: "Partnerska ustanova."
---

The application works in three passes. A submitted text is first normalized — numbers, punctuation, and common function words are stripped out. The cleaned text is then matched against two purpose-built dictionaries: one of Catholic terminology, one of terms statistically associated with disinformation. Finally, TF-IDF weighting and cosine similarity measure how close the text sits to a reference corpus of previously identified disinformation. The user gets back a report on two axes: how far the text aligns with Catholic content, and whether it carries elements characteristic of disinformation.

The project is funded under Croatia's National Recovery and Resilience Plan (NextGenerationEU), through the measure establishing media fact-checking run by the Ministry of Culture and Media and the Agency for Electronic Media. Alongside the application it produced an elective university course on media and disinformation, a university textbook, and training programmes for journalists and students.
