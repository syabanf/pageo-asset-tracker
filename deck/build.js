/* PAGEO Navigator — 15-slide deck in the WIT.ID design system (deck-wit), pptxgenjs, code-drawn chrome */
const pptxgen = require('pptxgenjs');
const path = require('path');
const S = f => path.join(__dirname, 'shots', f);

const C = { red: 'ED1C24', black: '000000', ink: '101112', white: 'FFFFFF', body: '333333', lightBg: 'F1F0F1', lightBg2: 'F5F4F6', blue: '83B3EE', silver: 'C0C0C0', muted: '8B8B8B', ocean: '168FBF' };
const FONT = 'DM Sans';
const W = 13.333, H = 7.5, M = 0.55;
const DECK = 'PAGEO Navigator', YEAR = 2026, TAG = '360° Digital Transformation Company';

const p = new pptxgen();
p.defineLayout({ name: 'W16x9', width: W, height: H });
p.layout = 'W16x9';
p.theme = { headFontFace: FONT, bodyFontFace: FONT };
p.author = 'WIT.ID'; p.company = 'WIT.ID'; p.title = DECK;

let page = 0;
const T = (slide, text, o) => slide.addText(text, Object.assign({ fontFace: FONT, color: C.body, margin: 0, valign: 'top' }, o));

function chrome(slide, kicker, dark) {
  page++;
  const fg = dark ? C.white : C.body, mut = dark ? '9A9A9A' : C.muted;
  if (kicker) T(slide, kicker.toUpperCase(), { x: M, y: 0.42, w: 6, h: 0.3, fontSize: 10.5, bold: true, color: dark ? C.silver : C.muted, charSpacing: 2 });
  // red back-arrow badge
  slide.addShape(p.ShapeType.roundRect, { x: W - M - 0.62, y: 0.38, w: 0.62, h: 0.38, fill: { color: C.red }, line: { color: C.red }, rectRadius: 0.08 });
  T(slide, '←', { x: W - M - 0.62, y: 0.38, w: 0.62, h: 0.38, fontSize: 14, bold: true, color: C.white, align: 'center', valign: 'middle' });
  // footer
  T(slide, 'WIT', { x: M, y: H - 0.62, w: 0.9, h: 0.34, fontSize: 15, bold: true, color: fg, valign: 'middle' });
  slide.addShape(p.ShapeType.ellipse, { x: M + 0.56, y: H - 0.41, w: 0.1, h: 0.1, fill: { color: C.red }, line: { color: C.red } });
  T(slide, DECK + ' ©' + YEAR + ' · ' + TAG, { x: 3, y: H - 0.62, w: W - 6, h: 0.34, fontSize: 9.5, color: mut, align: 'center', valign: 'middle' });
  T(slide, 'Page ' + page, { x: W - M - 1.4, y: H - 0.62, w: 1.4, h: 0.34, fontSize: 9.5, color: mut, align: 'right', valign: 'middle' });
}
function title(slide, text, o) {
  o = o || {};
  // headline with red period
  T(slide, [{ text: text, options: { color: o.color || (o.dark ? C.white : C.ink) } }, { text: '.', options: { color: C.red } }], { x: M, y: o.y || 0.9, w: o.w || W - 2 * M, h: o.h || 0.9, fontSize: o.size || 30, bold: true, lineSpacing: (o.size || 30) * 1.12 });
}
function bullets(slide, items, o) {
  const runs = [];
  items.forEach((it, i) => {
    const head = typeof it === 'string' ? it : it[0], sub = typeof it === 'string' ? null : it[1];
    runs.push({ text: head, options: { bold: true, color: o.dark ? C.white : C.ink, fontSize: o.size || 13, breakLine: !!sub, bullet: { code: '25A0', indent: 14 }, paraSpaceBefore: i ? (o.gap || 8) : 0 } });
    if (sub) runs.push({ text: sub, options: { color: o.dark ? 'C9C9C9' : C.body, fontSize: (o.size || 13) - 1.5, breakLine: true, indentLevel: 1, paraSpaceBefore: 2 } });
    else runs[runs.length - 1].options.breakLine = true;
  });
  T(slide, runs, { x: o.x, y: o.y, w: o.w, h: o.h, lineSpacing: (o.size || 13) * 1.35, valign: 'top' });
}
function shot(slide, file, x, y, w, h, o) {
  o = o || {};
  slide.addShape(p.ShapeType.roundRect, { x: x - 0.06, y: y - 0.06, w: w + 0.12, h: h + 0.12, fill: { color: o.frame || C.ink }, line: { color: o.frame || C.ink }, rectRadius: 0.1 });
  slide.addImage({ path: S(file), x: x, y: y, w: w, h: h, sizing: { type: 'cover', w: w, h: h } });
}
function phone(slide, file, x, y, h) { const w = h * 828 / 1736; slide.addImage({ path: S(file), x: x, y: y, w: w, h: h }); return w; }
function pill(slide, text, x, y, w, o) {
  o = o || {};
  slide.addShape(p.ShapeType.roundRect, { x: x, y: y, w: w, h: 0.36, fill: { color: o.fill || C.red }, line: { color: o.fill || C.red }, rectRadius: 0.18 });
  T(slide, text, { x: x, y: y, w: w, h: 0.36, fontSize: 10.5, bold: true, color: o.color || C.white, align: 'center', valign: 'middle' });
}
function card(slide, x, y, w, h, fill, radius) { slide.addShape(p.ShapeType.roundRect, { x: x, y: y, w: w, h: h, fill: { color: fill }, line: { color: fill }, rectRadius: radius == null ? 0.16 : radius }); }

/* ---------------- 1 · Cover ---------------- */
{
  const s = p.addSlide(); s.background = { color: C.black }; chrome(s, null, true);
  T(s, 'WIT.ID  ×  PT PAGEO UTAMA', { x: M, y: 0.42, w: 6, h: 0.3, fontSize: 10.5, bold: true, color: C.silver, charSpacing: 2 });
  T(s, [{ text: 'PAGEO Navigator', options: { color: C.white } }, { text: '.', options: { color: C.red } }], { x: M, y: 2.0, w: 6.4, h: 1.6, fontSize: 48, bold: true, lineSpacing: 52 });
  T(s, 'Operations Tracking & Visibility Platform', { x: M, y: 3.55, w: 6.2, h: 0.5, fontSize: 18, color: C.white });
  T(s, 'One operational picture for people, equipment, projects, vessels and safety — web command center, mobile field app and a shared design system.', { x: M, y: 4.1, w: 6.0, h: 1.0, fontSize: 12.5, color: 'BDBDBD', lineSpacing: 18 });
  pill(s, 'PRODUCT DEMO', M, 5.35, 1.55); pill(s, 'SEPTEMBER 2026', M + 1.7, 5.35, 1.6, { fill: '2A2A2A' });
  shot(s, 'd-overview.png', 7.05, 1.25, 5.85, 3.66, { frame: '2A2A2A' });
  const pw = phone(s, 'm-home.png', 11.05, 3.3, 3.3);
}

/* ---------------- 2 · Agenda ---------------- */
{
  const s = p.addSlide(); s.background = { color: C.lightBg }; chrome(s, 'Agenda');
  title(s, 'What this deck covers', { size: 28 });
  const rows = [
    ['#', 'Section', 'What you will see'],
    ['03', 'The challenge', 'Project-based, equipment-heavy offshore operations tracked in disconnected tools'],
    ['04', 'Product vision', 'Three questions the platform answers, one project-centric data model'],
    ['05', 'Architecture', 'Project at the center · People · Assets · Vessel · Location · Mobilization · QHSE'],
    ['06', 'Three applications', 'Web Command Center · Mobile Field App · PAGEO Navigator design system'],
    ['07', 'Command Center', 'KPIs, live map, alerts and activity on one screen'],
    ['08', 'Live map & geofencing', 'OpenLayers map, layers, clusters, freshness, restricted zones'],
    ['09', 'Registries & CRUD', 'Filterable summary cards, row actions, create/edit forms'],
    ['10', 'Alerts & muster', 'P1–P4 queue, acknowledge/resolve, emergency accountability'],
    ['11', 'Mobile field app', 'Start operation, check in, equipment, transparent tracking'],
    ['12', 'Safety flows', 'RFID scan, muster confirmation, press-and-hold SOS'],
    ['13', 'Design system', 'Tokens, components, operational components, patterns'],
    ['14', 'Technology & roadmap', 'Stack, delivery numbers and the MVP → intelligence path'],
    ['15', 'Next steps', 'Pilot scope and how WIT.ID delivers']
  ];
  const trs = rows.map((r, i) => r.map((c, j) => ({ text: c, options: { bold: i === 0 || j === 0, color: i === 0 ? C.white : (j === 0 ? C.red : C.body), fill: { color: i === 0 ? C.ink : (i % 2 ? C.white : 'F7F6F7') }, fontSize: i === 0 ? 10.5 : 11, fontFace: FONT, valign: 'middle', margin: [3, 8, 3, 8] } })));
  s.addTable(trs, { x: M, y: 1.85, w: W - 2 * M, colW: [0.6, 2.6, W - 2 * M - 3.2], rowH: 0.34, border: { type: 'solid', color: 'E3E1E4', pt: 0.5 } });
}

/* ---------------- 3 · The challenge ---------------- */
{
  const s = p.addSlide(); s.background = { color: C.lightBg }; chrome(s, 'The challenge');
  title(s, 'Offshore operations are tracked in tools that do not talk to each other', { size: 26, w: 9.5, h: 1.3 });
  T(s, 'PAGEO runs project-based, equipment-heavy work from base to port, vessel and offshore site. Today the answers live in HR sheets, RFID inventories and vessel logs — none of them project-centric.', { x: M, y: 2.35, w: 7.4, h: 0.9, fontSize: 12.5, lineSpacing: 18 });
  const cols = [['People', 'Who is assigned, on site, offshore, on the vessel, in transit or offline? Who has not checked in? Who is accounted for in an emergency?'], ['Equipment', 'Where was each RFID asset last seen? Who has custody? Did everything scanned at dispatch arrive on the vessel?'], ['Safety', 'Restricted-zone entries, silent devices, SOS and muster status — surfaced in one queue with one severity scale.']];
  cols.forEach((c, i) => { const x = M + i * 4.12, y = 3.55; card(s, x, y, 3.92, 2.6, i === 0 ? C.red : C.white); T(s, c[0], { x: x + 0.28, y: y + 0.28, w: 3.4, h: 0.4, fontSize: 16, bold: true, color: i === 0 ? C.white : C.ink }); T(s, c[1], { x: x + 0.28, y: y + 0.8, w: 3.4, h: 1.6, fontSize: 11.5, color: i === 0 ? C.white : C.body, lineSpacing: 16 }); });
  T(s, 'Base  →  Preparation  →  Assignment  →  Mobilization  →  Port / Vessel  →  Offshore operation  →  Demobilization  →  Closeout', { x: M, y: 6.35, w: W - 2 * M, h: 0.35, fontSize: 10.5, color: C.muted, align: 'center' });
}

/* ---------------- 4 · Vision (premium dark) ---------------- */
{
  const s = p.addSlide(); s.background = { color: C.ink }; chrome(s, 'Product vision', true);
  T(s, [{ text: 'One operational picture', options: { color: C.white } }, { text: '.', options: { color: C.red } }], { x: M, y: 1.35, w: 8, h: 1.0, fontSize: 40, bold: true });
  T(s, 'Not an employee tracker. Not an RFID inventory. A project-centric visibility platform with human tracking and RFID asset tracking as two connected layers.', { x: M, y: 2.45, w: 7.6, h: 1.1, fontSize: 14, color: 'C9C9C9', lineSpacing: 20 });
  const q = ['Where are our people?', 'Where are our assets?', 'Is anything abnormal?'];
  q.forEach((t, i) => { const x = M + i * 4.12; card(s, x, 4.1, 3.92, 1.55, i === 2 ? C.red : '1B1D1F', 0.14); T(s, '0' + (i + 1), { x: x + 0.3, y: 4.3, w: 1, h: 0.3, fontSize: 10.5, bold: true, color: i === 2 ? C.white : C.red }); T(s, t, { x: x + 0.3, y: 4.68, w: 3.4, h: 0.8, fontSize: 18, bold: true, color: C.white }); });
  T(s, 'Monitor & manage on the web  ·  Act & confirm on mobile  ·  One operational language for both', { x: M, y: 6.1, w: W - 2 * M, h: 0.35, fontSize: 11, color: C.silver });
}

/* ---------------- 5 · Architecture ---------------- */
{
  const s = p.addSlide(); s.background = { color: C.lightBg }; chrome(s, 'Architecture');
  title(s, 'Project is the center of the data model', { size: 28 });
  // center project box
  card(s, 4.95, 2.1, 3.4, 1.05, C.red, 0.12); T(s, 'PROJECT', { x: 4.95, y: 2.1, w: 3.4, h: 0.6, fontSize: 18, bold: true, color: C.white, align: 'center', valign: 'middle' }); T(s, 'Alpha · Bravo · Charlie · Base', { x: 4.95, y: 2.62, w: 3.4, h: 0.4, fontSize: 10.5, color: 'FFD6D8', align: 'center' });
  const dims = ['People', 'Assets', 'Vessel', 'Location', 'Mobilization', 'QHSE'];
  dims.forEach((d, i) => { const x = M + i * 2.06; card(s, x, 3.75, 1.9, 0.62, C.white, 0.1); T(s, d, { x: x, y: 3.75, w: 1.9, h: 0.62, fontSize: 12.5, bold: true, color: C.ink, align: 'center', valign: 'middle' }); s.addShape(p.ShapeType.line, { x: x + 0.95, y: 3.15, w: 0.001, h: 0.6, line: { color: C.silver, width: 1 } }); });
  // channels
  card(s, M, 4.95, 5.95, 1.35, C.blue, 0.14); T(s, 'WEB COMMAND CENTER', { x: M + 0.3, y: 5.12, w: 5.4, h: 0.3, fontSize: 10.5, bold: true, color: C.ink, charSpacing: 1.5 }); T(s, 'Overview · Live map · Projects · Personnel · Mobilization · Muster · Assets · Movement · Assignment · Locations · Vessels · Alerts · Reports · Administration', { x: M + 0.3, y: 5.45, w: 5.4, h: 0.8, fontSize: 11, color: C.ink, lineSpacing: 15 });
  card(s, M + 6.28, 4.95, 5.95, 1.35, C.blue, 0.14); T(s, 'MOBILE FIELD APP', { x: M + 6.58, y: 5.12, w: 5.4, h: 0.3, fontSize: 10.5, bold: true, color: C.ink, charSpacing: 1.5 }); T(s, 'Start operation · Check-in · Project & team · Map · My equipment · RFID scan · Mobilization checklist · Muster · SOS · Activity · Offline sync', { x: M + 6.58, y: 5.45, w: 5.4, h: 0.8, fontSize: 11, color: C.ink, lineSpacing: 15 });
  T(s, 'Human tracking = presence, mobilization and safety (never productivity monitoring). RFID = custody, movement and accountability (last seen at + last seen time + history).', { x: M, y: 6.5, w: W - 2 * M, h: 0.4, fontSize: 10.5, color: C.muted });
}

/* ---------------- 6 · Three applications ---------------- */
{
  const s = p.addSlide(); s.background = { color: C.lightBg }; chrome(s, 'Three applications');
  title(s, 'Three applications, one design system', { size: 28 });
  const items = [['Web Command Center', 'Monitor & manage', '21 pages · sidebar navigation · live OpenLayers map · charts · filterable registries · CRUD forms', 'd-overview.png', 'wide'], ['Mobile Field App', 'Act & confirm', '33 screens in one flow · 44–52 px touch targets · offline-capable · transparent tracking · press-and-hold SOS', 'm-home.png', 'phone'], ['PAGEO Navigator', 'Design system', 'Foundations · core components · operational components · mobile components · patterns & templates', 's-foundations.png', 'wide']];
  items.forEach((it, i) => {
    const x = M + i * 4.12, y = 1.95; card(s, x, y, 3.92, 4.55, C.white);
    T(s, it[0], { x: x + 0.28, y: y + 0.25, w: 3.4, h: 0.4, fontSize: 15.5, bold: true, color: C.ink });
    pill(s, it[1].toUpperCase(), x + 0.28, y + 0.72, 1.7, { fill: i === 1 ? C.red : C.ink });
    T(s, it[2], { x: x + 0.28, y: y + 1.22, w: 3.4, h: 0.9, fontSize: 10.5, color: C.body, lineSpacing: 14.5 });
    if (it[4] === 'phone') phone(s, it[3], x + 1.35, y + 2.15, 2.3); else shot(s, it[3], x + 0.28, y + 2.25, 3.36, 2.1);
  });
}

/* ---------------- 7 · Command Center ---------------- */
{
  const s = p.addSlide(); s.background = { color: C.lightBg }; chrome(s, 'Web · Command Center');
  title(s, 'The operational control room', { size: 26, w: 6 });
  shot(s, 'd-overview.png', M, 1.85, 7.55, 4.72);
  bullets(s, [['KPI cards with context', '128 on operation · 121 accounted · 7 offline — every number links to a filtered registry'], ['Live operational map', 'People, assets, vessels, geofences and RFID readers on one basemap; layer switch, clusters and popups'], ['Charts that answer questions', 'Personnel status and assets by status donuts, 7-day alert trend, accounted-over-time'], ['Alerts and activity', 'Severity-striped alert cards with acknowledge, plus a typed activity feed']], { x: 8.45, y: 1.9, w: 4.35, h: 4.7, size: 12, gap: 9 });
}

/* ---------------- 8 · Live map ---------------- */
{
  const s = p.addSlide(); s.background = { color: C.lightBg }; chrome(s, 'Web · Live map & geofencing');
  title(s, 'Map first, never false precision', { size: 26, w: 6 });
  shot(s, 'd-live-map.png', M, 1.85, 7.55, 4.72);
  bullets(s, [['OpenLayers basemap', 'Esri Light Gray canvas; markers are anchored overlays, geofences and tracks are vector layers'], ['One symbol vocabulary', '● person · ◆ asset · ▲ vessel · ■ site · ◉ RFID reader · ✚ muster · dashed geofence'], ['Freshness, not guesses', 'LIVE < 1 min · RECENT 1–5 · STALE 5–30 · OFFLINE > 30 min; accuracy shown as ± metres'], ['Geofence rules', 'Enter / exit / dwell / unauthorized entry on base, warehouse, port, vessel, work area, restricted zones']], { x: 8.45, y: 1.9, w: 4.35, h: 4.7, size: 12, gap: 9 });
}

/* ---------------- 9 · Registries & CRUD ---------------- */
{
  const s = p.addSlide(); s.background = { color: C.lightBg }; chrome(s, 'Web · Registries & CRUD');
  title(s, 'Registries that filter themselves', { size: 26, w: 7 });
  shot(s, 'd-personnel.png', M, 1.9, 6.05, 3.78);
  shot(s, 'd-personnel-form.png', 6.75, 1.9, 6.05, 3.78);
  bullets(s, [['Summary cards are filters — click Offline to see the 7 offline people; active filters show as removable chips with a live count'], ['Search, selects, sortable columns, empty states and row actions (view · edit · delete with confirmation) on every registry'], ['Create / edit forms for personnel, assets and projects with validation, duplicate-ID checks and a record summary panel']], { x: M, y: 5.9, w: W - 2 * M, h: 1.0, size: 11.5, gap: 4 });
}

/* ---------------- 10 · Alerts & muster ---------------- */
{
  const s = p.addSlide(); s.background = { color: C.lightBg }; chrome(s, 'Web · Alerts & muster');
  title(s, 'Calm until critical', { size: 26, w: 7 });
  shot(s, 'd-alerts.png', M, 1.9, 6.05, 3.78);
  shot(s, 'd-muster.png', 6.75, 1.9, 6.05, 3.78);
  bullets(s, [['One queue for people and assets — SOS, offline devices, restricted zones, missing assets, reader outages, calibration — on a P1 → P4 scale'], ['Acknowledge records who and when; resolve requires a note; P1 escalates to QHSE, supervisor and vessel master within seconds'], ['Emergency muster: expected / safe / not confirmed / offline / SOS per muster point, with call and locate actions for every missing person']], { x: M, y: 5.9, w: W - 2 * M, h: 1.0, size: 11.5, gap: 4 });
}

/* ---------------- 11 · Mobile field app ---------------- */
{
  const s = p.addSlide(); s.background = { color: C.lightBg }; chrome(s, 'Mobile · Field app');
  title(s, 'Act and confirm, with gloves on', { size: 26, w: 7 });
  let x = M; ['m-home.png', 'm-project.png', 'm-my-assets.png'].forEach(f => { x += phone(s, f, x, 1.85, 4.75) + 0.28; });
  bullets(s, [['Tracking is always visible', 'Location is shared only during an operation; the app says when it started and with whom it is shared'], ['Home = today’s operation', 'Current project, GPS / sync / battery, quick actions: check in, scan, equipment, map'], ['Project & equipment', 'Team accountability, custody of assigned assets, mobilization checklist 24 / 26 ready'], ['Field-ready', '46 px buttons, 14–16 px text, colour-coded actions, offline queue with pending counts']], { x: 7.9, y: 1.9, w: 4.9, h: 4.7, size: 12, gap: 9 });
}

/* ---------------- 12 · Safety flows ---------------- */
{
  const s = p.addSlide(); s.background = { color: C.lightBg }; chrome(s, 'Mobile · Safety flows');
  title(s, 'Scan, muster, SOS', { size: 26, w: 7 });
  let x = M; ['m-scan-detected.png', 'm-muster.png', 'm-sos-sent.png'].forEach(f => { x += phone(s, f, x, 1.85, 4.75) + 0.28; });
  bullets(s, [['RFID scan', 'Reader session auto-detects the tag; confirm custody, or register an unknown tag for the asset manager'], ['Muster', 'QHSE triggers it; the phone shows the muster point and distance; one tap reports SAFE — offline confirmations sync later'], ['SOS', 'Press-and-hold two seconds prevents accidental activation; position and project are sent to QHSE, supervisor and vessel master'], ['Everything queues offline', 'Check-ins, scans and positions are stored on the phone and delivered when connectivity returns']], { x: 7.9, y: 1.9, w: 4.9, h: 4.7, size: 12, gap: 9 });
}

/* ---------------- 13 · Design system ---------------- */
{
  const s = p.addSlide(); s.background = { color: C.lightBg }; chrome(s, 'PAGEO Navigator · Design system');
  title(s, 'One operational language', { size: 26, w: 7 });
  shot(s, 's-foundations.png', M, 1.9, 6.05, 3.78);
  shot(s, 's-components.png', 6.75, 1.9, 6.05, 3.78);
  const chips = ['Inter · tabular numerals', 'Ocean #168FBF · Sky #C7EBF8', '80 % neutral · 15 % blue · 5 % semantic', 'Lucide icons · 1.75 px', '4-pt grid · 12 columns', 'Same status vocabulary web + mobile'];
  chips.forEach((c, i) => pill(s, c, M + (i % 3) * 4.12, 5.95 + Math.floor(i / 3) * 0.48, 3.92, { fill: i < 3 ? C.ink : C.white, color: i < 3 ? C.white : C.ink }));
}

/* ---------------- 14 · Technology & roadmap ---------------- */
{
  const s = p.addSlide(); s.background = { color: C.lightBg }; chrome(s, 'Technology & roadmap');
  title(s, 'Built to ship, designed to grow', { size: 26, w: 8 });
  const stats = [['21', 'dashboard pages', C.red], ['33', 'mobile screens', C.ink], ['60+', 'component renderers', C.ink], ['0', 'build steps — plain HTML + JS', C.red]];
  stats.forEach((st, i) => { const x = M + (i % 2) * 2.78, y = 1.9 + Math.floor(i / 2) * 1.55; card(s, x, y, 2.6, 1.4, st[2], 0.12); T(s, st[0], { x: x + 0.25, y: y + 0.2, w: 2.2, h: 0.7, fontSize: 30, bold: true, color: C.white }); T(s, st[1], { x: x + 0.25, y: y + 0.88, w: 2.2, h: 0.4, fontSize: 10.5, color: 'E8E8E8' }); });
  T(s, 'Stack: vanilla JavaScript component library, hash router, OpenLayers 10 with Esri basemap and SVG fallback, localStorage-backed store for CRUD, single-file bundles per app. Ready to bind to REST / MQTT telemetry, RFID reader gateways and AIS.', { x: M, y: 5.1, w: 5.4, h: 1.2, fontSize: 10.5, color: C.body, lineSpacing: 15 });
  // roadmap
  const phases = [['MVP', 'Command center · live tracking · registries · alerts · RBAC'], ['Visibility', 'Human + RFID last-seen · movement history · assignment'], ['Control', 'Geofence rules · mobilization flow · vessel ops'], ['QHSE', 'Muster · SOS escalation · incident reports'], ['Intelligence', 'Utilization · dwell · predictive workforce & asset']];
  const rx = 6.35, rw = (W - M - rx), pw = rw / phases.length;
  s.addShape(p.ShapeType.line, { x: rx + 0.3, y: 2.55, w: rw - 0.6, h: 0.001, line: { color: C.silver, width: 1.5 } });
  phases.forEach((ph, i) => { const x = rx + i * pw; s.addShape(p.ShapeType.ellipse, { x: x + pw / 2 - 0.16, y: 2.39, w: 0.32, h: 0.32, fill: { color: i === 0 ? C.red : C.white }, line: { color: C.red, width: 1.5 } }); T(s, ph[0], { x: x, y: 2.85, w: pw, h: 0.35, fontSize: 12.5, bold: true, color: C.ink, align: 'center' }); T(s, ph[1], { x: x + 0.08, y: 3.2, w: pw - 0.16, h: 1.4, fontSize: 9.5, color: C.body, align: 'center', lineSpacing: 13 }); });
  T(s, 'RBAC: Super Admin · Management · Operations Manager · QHSE · Project Manager · Asset Manager · Warehouse · Supervisor · Employee', { x: rx, y: 5.1, w: rw, h: 0.6, fontSize: 10.5, color: C.body, lineSpacing: 15 });
  T(s, 'A Project Manager sees only the project, people, assets, locations, alerts and reports relevant to their assignment.', { x: rx, y: 5.75, w: rw, h: 0.5, fontSize: 10.5, color: C.muted, lineSpacing: 15 });
}

/* ---------------- 15 · Closing ---------------- */
{
  const s = p.addSlide(); s.background = { color: C.black }; chrome(s, 'Next steps', true);
  T(s, [{ text: 'Make IT Happen', options: { color: C.white } }, { text: '.', options: { color: C.red } }], { x: M, y: 1.5, w: 9, h: 1.1, fontSize: 44, bold: true });
  T(s, 'Proposed pilot: Project Alpha on MV PAGEO 02 — 26 personnel, 47 RFID assets, 2 vessels, 6 weeks. Command center for operations and QHSE, field app for the survey crew, readers at warehouse, dispatch gate, port and vessel deck.', { x: M, y: 2.75, w: 8.2, h: 1.2, fontSize: 13.5, color: 'C9C9C9', lineSpacing: 20 });
  const steps = [['Week 1–2', 'Data model, RBAC, reader placement, mobile rollout'], ['Week 3–4', 'Live tracking, mobilization checklist, alert rules'], ['Week 5–6', 'Muster drill, reports, handover and training']];
  steps.forEach((st, i) => { const x = M + i * 4.12; card(s, x, 4.3, 3.92, 1.25, i === 0 ? C.red : '1B1D1F', 0.14); T(s, st[0], { x: x + 0.3, y: 4.45, w: 3.3, h: 0.35, fontSize: 11, bold: true, color: i === 0 ? C.white : C.red }); T(s, st[1], { x: x + 0.3, y: 4.82, w: 3.3, h: 0.7, fontSize: 11.5, color: C.white, lineSpacing: 16 }); });
  T(s, 'WIT.ID · Make IT Happen · 360° Digital Transformation Company', { x: M, y: 6.0, w: 9, h: 0.35, fontSize: 11, color: C.silver });
  T(s, 'Source: github.com/syabanf/pageo-asset-tracker', { x: M, y: 6.32, w: 9, h: 0.3, fontSize: 10, color: '8B8B8B' });
}

p.writeFile({ fileName: path.join(__dirname, 'PAGEO-Navigator-WIT-Deck.pptx') }).then(f => console.log('written', f));
