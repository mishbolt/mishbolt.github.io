# Mikhail Baltushkin — personal website

A dark, responsive, research-meets-engineering portfolio for [Mikhail Baltushkin](https://github.com/mishbolt). Designed for **GitHub Pages** with **zero build dependencies**.

The website includes an animated mathematical phase-portrait illustration, project case studies, an academic research profile, publication links, teaching experience, and public-safe PDF copies of the resume and CV.

## Publish at `https://mishbolt.github.io`

1. Sign in to GitHub and create a **public** repository named exactly **`mishbolt.github.io`** at <https://github.com/new>.
2. Upload **the contents of this directory**, not a ZIP archive and not a single enclosing folder. Keep `index.html` in the repository root. You can use **Add file → Upload files** in GitHub, or use Git on your computer.
3. After committing the files, open repository **Settings → Pages**.
4. Select **Deploy from a branch**, then **`main`** and **`/(root)`**, and **Save**. The published site should appear at <https://mishbolt.github.io/> once Pages completes deployment.

A repository created from your account and named `mishbolt.github.io` is a **user website**, not a project subdirectory website. Therefore, relative links in this starter use the expected site root. 

### Alternative: upload with Git (Mac Terminal)

```sh
# Inside the downloaded/extracted mishbolt.github.io directory:
git init
git add .
git commit -m "Launch personal website"
git branch -M main
git remote add origin https://github.com/mishbolt/mishbolt.github.io.git
git push -u origin main
```

Create the remote repository first. The `git push` command requires your normal GitHub credentials.

## Preview locally

```sh
python3 -m http.server 8000
```

Open <http://localhost:8000/>. You can also open `index.html` locally, although a local HTTP server is more representative of production.

## Edit the website

- **Text/content:** Edit `tools/build_site.py`, which contains the page content and templates. Then run `python3 tools/build_site.py` to regenerate all eight HTML files.
- **Styling:** Edit `assets/css/styles.css`. The site uses Space Grotesk and DM Sans when web fonts are available, with system fallbacks.
- **Animation and navigation:** Edit `assets/js/site.js`. The animated phase portrait on the homepage is explicitly *decorative / illustrative*, not original measured research data. It respects reduced-motion preferences.
- **Figures:** `assets/images/poincare-sections.webp` includes two plots cropped from Mikhail's own double-pendulum research report. Other illustrations are CSS/SVG artwork.
- **Downloads:** Replace `assets/docs/cv.pdf` and `assets/docs/resume.pdf` with updated public-facing documents when needed. They have deliberately omitted personal phone, immigration status, and other people's reference emails. Do **not** replace these PDFs with the private versions without checking them.
- **Web preview:** `assets/images/social-card.svg` is used for social links; update its text or colors if the design changes.

There is no framework, database, API key, analytics tracker, or npm dependency. The only optional external dependency is Google Fonts; the site works without it.

## Structure

```text
mishbolt.github.io/
├── index.html             Homepage
├── projects.html          Project index
├── research.html          Research interests, article and thesis
├── teaching.html          Teaching and Putnam program
├── about.html             Short bio, skills and education
├── work/
│   ├── tda-pde.html
│   ├── double-pendulum.html
│   └── game-theory.html
├── assets/
│   ├── css/styles.css
│   ├── js/site.js
│   ├── docs/{cv,resume}.pdf
│   └── images/{favicon,social-card}.svg and figure
├── tools/build_site.py
├── .nojekyll
└── README.md
```

## Content checks before making it public

The website has been populated from public GitHub repositories, a 2025 journal article, the supplied personal CV/resume, and a supplied double-pendulum research report. Please review every page for accuracy before uploading. In particular, ensure your institution and role titles, quantitative results, current research interests, and contact address still reflect how you wish to present yourself.

**Potential future additions:** a headshot if you want one, links to your thesis in an official repository, dedicated pages for recent research *after you choose to publicize it*, talk slides, and mathematical notes written in Quarto and exported to HTML. Do not publish confidential collaborations, unpublished results, or students' personal information.

## Credits and licensing

Website design and code: generated for Mikhail Baltushkin. Academic content, photographs (if added), and research figures remain the property of their respective authors. The linked 2025 paper is open access at [DOI 10.47443/dml.2025.071](https://doi.org/10.47443/dml.2025.071). No third-party stock imagery is included.
