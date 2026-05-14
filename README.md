# Ilona van Oosbree — Portfolio (Pure HTML/CSS)

Een Hyves-geïnspireerd portfolio gebouwd met puur HTML5, CSS3 en een kleine hoeveelheid JavaScript
als progressive enhancement.

## Structuur

```
hyves-portfolio/
├── index.html              # Hoofdpagina (1fr 2fr 2fr grid)
├── css/
│   └── style.css           # Alle stijlen, responsive, CSS custom properties
├── krabbels.js             # Guestbook functionaliteit (localStorage)
├── images/                 # Afbeeldingen (kopieer van je SvelteKit /static/images/)
│   ├── ilona.jpg
│   ├── creditcard.webp
│   ├── milledoni.webp
│   ├── milledoni-aiprompt.webp
│   ├── milledoni-searchresult.webp
│   ├── paerstudio.webp
│   ├── fdndwebsite.webp
│   └── cool-darth.webp
├── gifs/                   # GIF emojis (kopieer van je SvelteKit /static/gifs/)
│   ├── smiley_hollandyell.gif
│   ├── smiley_goodbye.gif
│   └── smiley_hugging.gif
└── pages/
    ├── blog.html           # Bloglijst
    ├── blog-milledoni.html # Milledoni blogpost
    ├── blog-paerstudio.html
    ├── blog-fdnd.html
    ├── werk.html           # Projectenoverzicht
    ├── fotos.html          # Fotografie
    └── posters.html        # Poster & grafisch werk
```

## Functies

### Hoofdpagina (`index.html`)
- **1fr 2fr 2fr grid-layout** — exact zoals de originele SvelteKit versie
- Responsive: valt terug naar 1 kolom op kleinere schermen via CSS Container Queries
- **Sidebar**: profielfoto + contactlinks + Krabbels guestbook
- **Profiel kolom**: bio (WieWatWaar), profiel facts, muziekspeler (voeg zelf een audiobestand toe)
- **Werk kolom**: projectkaarten met hover-animaties

### Krabbels (guestbook)
- Sla berichten op via `localStorage` — geen server nodig
- Progressieve enhancement: werkt als JS aanwezig is, form is gewoon zichtbaar zonder
- Voeg meer emoji-ondersteuning toe via je bestaande emoji-bestand

### Navigatie
- Hyves-stijl tweeriig navigatiesysteem: gele banner + blauwe tabbalk
- Originele kleuren en gradients behouden
- Volledig responsive

### Blog / Werk / Foto's / Posters
- Aparte HTML-pagina's per sectie
- Tab-navigatie tussen Blogs, Foto's en Posters
- Voeg je eigen content toe door de HTML te editen

## Uitbreiden

### Nieuwe blogpost toevoegen
1. Maak `pages/blog-jouw-post.html` aan (kopieer een bestaand bestand als template)
2. Voeg een `<li>` toe aan `pages/blog.html`
3. Voeg eventueel een kaart toe op `index.html` in de werk-kolom

### Foto's toevoegen
1. Zet je foto's in `images/`
2. Voeg `<figure>` elementen toe in `pages/fotos.html`

### Posters toevoegen
1. Zet je posterafbeeldingen in `images/`
2. Voeg `<figure>` elementen toe in `pages/posters.html`

### Muziek toevoegen
1. Zet een `.mp3` bestand in de root of een `music/` map
2. Update de `<source src="">` in `index.html`

### Emoji Krabbels
Je hebt een bestand met alle emojis. Om dat te integreren:
1. Laad de emoji-lijst in `krabbels.js`
2. Toon een emoji-picker boven het textarea
3. Voeg de geselecteerde emoji toe aan de tekstcursor positie

## Technische noten

- **Semantische HTML5**: `<nav>`, `<aside>`, `<section>`, `<article>`, `<figure>`, `<time>`, etc.
- **Toegankelijkheid**: ARIA labels, `aria-current`, `aria-live`, visueel verborgen labels
- **CSS Container Queries**: responsive grid zonder media queries te breken
- **CSS Custom Properties**: alle kleuren en spacing in `:root`
- **Progressive Enhancement**: Krabbels-form werkt structureel, JS voegt gedrag toe
- **Geen externe dependencies**: geen frameworks, geen CDN, puur web platform

## Kleuren (origineel behouden)

| Variabele | Waarde | Gebruik |
|---|---|---|
| `--color-background` | `#E3E8C5` | Paginaachtergrond |
| `--top-nav-bg` | blauw gradient | Tabbalk |
| `--nav-banner-bg` | geel gradient | Bannerbalk |
| `--sidebar-bg` | `#e9f3fc` | Zijbalk |
| Tekst accent | `#577ddb` | Titels, links |
| Groen border | `#7dc382` | Profiellijst scheidslijn |
