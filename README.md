# Mikhail Baltushkin — personal website

This is a static, dependency-free website intended for **GitHub Pages**. It includes research, publications, selected projects, teaching, and public PDF copies of the CV and industry resume. The design is deliberately text-led, without counters or promotional taglines.

## Important: publishing the correct version

The repository root (the top level of the GitHub repository) must contain **`index.html`**, `research.html`, `projects.html`, `teaching.html`, `about.html`, `assets/`, and `work/` directly. Do **not** upload the enclosing ZIP or a folder around these files.

For an existing repository:

1. Extract the ZIP and open this folder.
2. Copy/upload **every file and folder inside** it to the same paths in your GitHub repository, overwriting existing files. In particular, replace **`index.html`** and **`assets/css/styles.css`**. Removing files from an old deployment is optional unless they're used by old links.
3. Confirm that GitHub shows the new `index.html` on your repository's **main** branch. The new homepage starts with **“Mikhail Baltushkin”** as the main heading; there is no promotional headline above it.
4. Under **Settings → Pages**, check that the source is **Deploy from a branch**, **main**, **/(root)**. If it's set to `docs/` or a different branch, the wrong version may be deployed.
5. After a successful deployment, check `https://mishbolt.github.io/index.html?v=3`. The `?v=3` suffix helps bypass local browser caches. Hard-refresh if necessary (Mac: Command-Shift-R). GitHub Pages can take a little time to publish a new commit.

You can publish via Git on your computer (adjust the ZIP path if needed):

```bash
git clone https://github.com/mishbolt/mishbolt.github.io.git
cd mishbolt.github.io
unzip -o ~/Downloads/mishbolt_professional_website_v3.zip -d .
git add -A
git commit -m "Replace website content and design"
git push origin main
```

This ZIP contains files at its root (not inside another `mishbolt.github.io` folder). If the existing repository uses a different publishing branch, use that branch instead.

Or use **Add file → Upload files** on GitHub while viewing the repository root. GitHub's web upload has limits; Git is more reliable for replacing multiple folders.

## Preview locally

In the folder containing `index.html`, run:

```bash
python3 -m http.server 8000
```

Open http://localhost:8000/. No Node, Quarto, build command, or package installation is required.

## Editing

- Edit the page text directly in each `.html` file.
- Edit `assets/css/styles.css` for colors, layout, and typography.
- Edit `assets/js/site.js` for navigation, dark mode, and the *decorative* animated figure on the homepage.
- Replace `assets/docs/cv.pdf` and `assets/docs/resume.pdf` if needed, but verify they are public-safe versions before publishing.
- The Poincaré-section figure in `assets/images/` comes from the supplied double-pendulum report.

The name, institution, academic details, and links are drawn from the supplied CV/resume, published paper, public GitHub projects, and research report. Review personal details and project descriptions before making them public.
