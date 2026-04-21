# Updating The Website

Only edit these files:

- `index.md` = homepage
- `bio.md` = bio page
- `work.md` = work page
- `assets/img/` = images

## Basic rules

- Edit the text directly in the `.md` files.
- Normal links use:
  `[Text](https://example.com)`
- Images used inside the page use:
  `![Alt text]({{ '/assets/img/filename.jpg' | relative_url }})`
  ex. `![Headshot]({{ '/assets/img/headshot.jpeg' | relative_url }})`
  

## Adding a new work item

If no hover image is needed:

```md
1. [Project title](https://example.com), short description (2026)
```

In `work.md`, if you want a link to show an image on hover, use:

```md
[Project title](https://projectlink.com "preview: {{ '/assets/img/filename.jpg' | relative_url }}")
```

Example:

```md
1. [Borders of Possibility with Gabriella Sánchez](https://failedarchitecture.com/podcast/borders-of-possibility-w-gabriella-sanchez "preview: {{ '/assets/img/Gabriella-Sanchez.jpg' | relative_url }}"), special episode for Failed Architecture’s podcast (2025).
```


## Do not edit unless needed

- `_layouts/`
- `assets/style.css`
- `_config.yml`
