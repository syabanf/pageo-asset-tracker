# PAGEO Navigator — Operations Tracking & Visibility Platform

Three applications built on one design system for PT Pageo Utama (offshore survey & subsea):

| App | Folder | Description |
|---|---|---|
| Web Command Center | `dashboard/` | Live operational map, projects, personnel & asset registries, mobilization, muster, alerts, reports, administration |
| Mobile Field App | `mobile-app/` | Start operation, check-in, RFID scan, mobilization checklist, muster, SOS, offline sync |
| Design System | `design-system/` | Foundations, core / operational / mobile components, patterns & templates |

`shared/` holds the foundation used by all three: `navigator.css` (tokens + components), `navigator.js` (icons, shells, OpenLayers map engine with SVG fallback, demo behaviors), `components.js` (HTML renderers), `data.js` (example operational data), `router.js` (hash router) and `logo.png`.

## Run

No build step is required for development — serve the folder statically and open any app:

```bash
python3 -m http.server 8765
# http://localhost:8765/               landing
# http://localhost:8765/dashboard/     command center
# http://localhost:8765/mobile-app/    field app (full screen on phones)
# http://localhost:8765/design-system/ documentation
```

After editing page modules run `node tools/build.js` to regenerate each app's `index.html` script list and the single-file bundles in `dist/`.

Maps use OpenLayers 10 with CARTO Positron tiles and fall back to a procedural SVG map when tiles cannot be loaded.
