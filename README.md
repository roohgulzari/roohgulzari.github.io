# roohgulzari.github.io

Personal academic site for Roohullah Gulzari (PhD candidate, Harvard Graduate School of Education).
Built on [Hugo Blox](https://hugoblox.com/) and deployed to GitHub Pages.

## Local development

```bash
hugo server
```

Open http://localhost:1313.

## Where things live

- `content/` — pages and publications (Markdown + front matter)
- `content/_index.md` — homepage section list
- `content/beyond-research/_index.md` — Beyond Research page
- `data/authors/me.yaml` — bio, affiliation, social links, awards
- `data/beyond/` — talks and platforms shown on Beyond Research
- `assets/scss/custom.scss` — design tokens and editorial styles (scoped under `.rgx-scope`)
- `assets/js/site.js` — chip filter, scroll-spy, view toggle
- `layouts/blox/` — custom Hugo Blox blocks (`hero-editorial`, `about-editorial`, `publications-research`, `teaching-editorial`, `contact-editorial`, `beyond-hero`, `beyond-items`)
- `config/_default/` — site config, menus, params
- `source_files/` — CV and headshot (not served; copies live in `assets/` and `static/uploads/`)

## Deployment

Push to `main`; GitHub Actions builds and publishes via GitHub Pages.
