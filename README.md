# Nirbhaya — Vercel-ready static website

This is a static HTML/CSS/JavaScript project prepared for Vercel. No build step is required.

## Project structure

```text
website-vercel-ready/
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── tailwind-config.js
│   └── main.js
├── images/
│   └── nirbhaya-logo.jpg
└── README.md
```

## Deploy to Vercel

1. Extract this ZIP.
2. Upload the contents to a GitHub repository (keep the folder structure).
3. In Vercel, choose **Add New → Project** and import the repository.
4. Set **Framework Preset** to `Other`.
5. Set **Root Directory** to `./`.
6. Leave **Build Command** blank, **Output Directory** blank (or `.` if the dashboard requires a value), and **Install Command** blank.
7. Deploy. The entry point is `/index.html`.

## External resources

The page still uses external CDN resources: Tailwind CSS, Google Fonts, Leaflet, and Lucide. Destination/illustrative images are loaded from external Unsplash URLs. These require an internet connection and may be affected by the providers' availability or policies.

## Important deployment/security notes

- `js/main.js` contains the existing client-side app logic and demo data. The original `API_BASE_URL` points to `http://localhost:8000`; no matching API calls were found in the provided file, so this was preserved but it is not a production backend. A deployed site cannot reach a visitor's local `localhost` service. If real login, persistent data, incident reporting, or emergency workflows are required, configure a real HTTPS backend/API and environment-specific endpoints before relying on those features.
- Client-side UI checks are not secure server-side authorization. Protect private data and protected operations on the server.
- Existing inline HTML event handlers were kept unchanged to avoid changing app behavior while extracting CSS and JavaScript. They can be migrated to event listeners in a separate, browser-tested pass.
- Validation performed: local HTML asset references checked, inline JavaScript syntax checked with Node.js. A full browser end-to-end test was not available in this environment.
