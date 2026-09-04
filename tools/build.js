#!/usr/bin/env node
/* Build all three apps:
   1. (re)generate each app's index.html with its page script list (dev, external files)
   2. bundle each app into a single self-contained HTML in dist/ (+ artifact fragments)  */
const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');
const read = p => fs.readFileSync(path.join(root, p), 'utf8');
const fonts = '<link rel="preconnect" href="https://fonts.googleapis.com">\n<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">';
const SHARED_JS = ['shared/navigator.js', 'shared/components.js', 'shared/data.js', 'shared/store.js', 'shared/router.js'];
const OL = '<script src="https://cdnjs.cloudflare.com/ajax/libs/openlayers/10.6.1/dist/ol.js"></script>';
const LOGO_DATA = 'data:image/png;base64,' + fs.readFileSync(path.join(root, 'shared/logo.png')).toString('base64');

const APPS = {
  dashboard: { title: 'PAGEO Command Center', dir: 'dashboard', pagesDir: 'dashboard/pages', app: 'dashboard/dashboard.js', pre: ['dashboard/registry.js'], css: [], bodyClass: '', stageClass: 'web', favicon: '🧭',
    order: ['overview', 'live-map', 'projects', 'project-detail', 'personnel', 'employee-detail', 'mobilization', 'muster', 'assets', 'asset-detail', 'asset-movement', 'assignment', 'locations', 'vessels', 'alerts', 'reports', 'admin', 'states', 'personnel-form', 'asset-form', 'project-form'] },
  'mobile-app': { title: 'PAGEO Field App', dir: 'mobile-app', pagesDir: 'mobile-app/screens', app: 'mobile-app/mobile-app.js', css: ['mobile-app/mobile-app.css'], bodyClass: 'mobile-app', stageClass: 'mobile', favicon: '📱',
    order: ['login', 'login-error', 'home-location-sharing-off', 'home', 'project', 'project-team', 'map', 'map-asset-selected', 'my-assets', 'my-assets-needs-confirmation', 'asset-detail', 'asset-detail-report-issue', 'scan', 'scan-detected', 'scan-not-recognized', 'mobilization', 'mobilization-stages', 'muster', 'muster-confirmed', 'muster-offline', 'sos', 'sos-sent', 'sos-confirm-cancel', 'activity', 'activity-location-history', 'profile', 'profile-how-tracking-works', 'offline', 'offline-syncing', 'offline-sync-status', 'check-in', 'check-in-confirmed', 'check-in-outside-geofence'] },
  'design-system': { title: 'PAGEO Navigator Design System', dir: 'design-system', pagesDir: 'design-system/pages', app: 'design-system/design-system.js', css: [], bodyClass: '', stageClass: 'ds', favicon: '📘',
    order: ['overview', 'foundations', 'components', 'operational', 'mobile', 'patterns'] }
};

fs.mkdirSync(path.join(root, 'dist'), { recursive: true });
Object.keys(APPS).forEach(key => {
  const a = APPS[key];
  const present = fs.readdirSync(path.join(root, a.pagesDir)).filter(f => /\.js$/.test(f)).map(f => f.replace(/\.js$/, ''));
  const pages = a.order.filter(p => present.indexOf(p) >= 0).concat(present.filter(p => a.order.indexOf(p) < 0)).map(p => a.pagesDir + '/' + p + '.js');
  const rel = p => path.relative(path.join(root, a.dir), path.join(root, p)).replace(/\\/g, '/');
  const stage = '<div id="stage" class="' + a.stageClass + '"></div>';
  const dev = '<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n<title>' + a.title + '</title>\n' + fonts +
    '\n<link rel="stylesheet" href="' + rel('shared/navigator.css') + '">\n' + a.css.map(c => '<link rel="stylesheet" href="' + rel(c) + '">').join('\n') +
    '\n</head>\n<body class="' + a.bodyClass + '">\n' + stage + '\n<script>window.PN_MANUAL_INIT = true;</script>\n' + OL + '\n' +
    SHARED_JS.concat(a.pre || []).concat(pages).concat([a.app]).map(f => '<script src="' + rel(f) + '"></script>').join('\n') + '\n</body>\n</html>\n';
  fs.writeFileSync(path.join(root, a.dir, 'index.html'), dev);

  const css = read('shared/navigator.css') + '\n' + a.css.map(read).join('\n');
  const js = SHARED_JS.concat(a.pre || []).concat(pages).concat([a.app]).map(read).join('\n').replace(/<\/script>/g, '<\\/script>');
  const head = '<title>' + a.title + '</title>\n' + fonts + '\n<style>\n' + css + '\n</style>';
  const body = stage + '\n' + OL + '\n<script>window.PN_MANUAL_INIT = true; window.PN_LOGO_URL = "' + LOGO_DATA + '";\n' + js + '\n</script>';
  // artifact fragment: body classes must be applied at runtime
  const frag = head + '\n<div class="' + a.bodyClass + '" id="app-root">' + body + '</div>';
  fs.writeFileSync(path.join(root, 'dist', key + '.artifact.html'), a.bodyClass ? frag.replace('<script>window.PN_MANUAL_INIT = true;', '<script>document.body.classList.add("' + a.bodyClass + '");window.PN_MANUAL_INIT = true;') : frag);
  fs.writeFileSync(path.join(root, 'dist', key + '.html'), '<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n' + head + '\n</head>\n<body class="' + a.bodyClass + '">\n' + body + '\n</body>\n</html>\n');
  console.log(key.padEnd(14), pages.length, 'pages ·', (fs.statSync(path.join(root, 'dist', key + '.html')).size / 1024).toFixed(0), 'KB');
});
