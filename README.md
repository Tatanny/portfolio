# Tanya Sherstneva Portfolio

Static portfolio site ready for GitHub Pages.

## Pages

- `index.html` — main portfolio page
- `flowly.html` — Flowly case page

## Timeweb App Platform

For Node.js deployment use these settings:

- Project directory: `.`
- Build command: `npm run build`
- Start command: `npm start`

The app uses `server.js` to serve static files. It reads the port from `PORT` and falls back to `8080`.

For static-nobuild deployment use:

- Project directory: `public`
- Build command: empty
- Build directory: `/`

## Publish On GitHub Pages

1. Create a new GitHub repository.
2. Upload these files and folders to the repository root:
   - `index.html`
   - `flowly.html`
   - `styles.css`
   - `flowly.css`
   - `assets/`
   - `.nojekyll`
3. In GitHub, open `Settings` → `Pages`.
4. Choose `Deploy from a branch`.
5. Select branch `main` and folder `/root`.
6. Save and wait for GitHub to publish the site.
