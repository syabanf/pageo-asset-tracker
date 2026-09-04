// handwritten
PN.page('patterns', {
  title: 'Patterns & Templates', icon: 'columns', nav: 'patterns',
  render() {
    const block = (label, span, h, cls) => `<div style="grid-column:span ${span};height:${h}px;border-radius:8px;border:1px dashed var(--border-2);background:${cls === 'map' ? 'var(--map-sea)' : cls === 'dark' ? 'var(--pageo-black)' : 'var(--bg-2)'};color:${cls === 'dark' ? '#fff' : 'var(--text-2)'};font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;display:flex;align-items:center;justify-content:center;text-align:center;padding:6px">${label}</div>`;
    const tpl = (name, note, rows, href) => `<div class="card"><div class="card-head"><span class="card-title">${name}</span>${C.link('Open demo', href)}</div><div class="t-caption">${note}</div><div style="display:grid;grid-template-columns:repeat(12,1fr);gap:6px">${rows}</div></div>`;
    const wide = (label, h, cls) => block(label, 12, h, cls);
    return `
      <div class="ds-hero">${C.eyebrow('05 · Patterns & templates')}<h1>How pages are assembled.</h1><p>Four web templates and four mobile templates cover every screen in the platform. Patterns describe the interactions that recur across them — search &amp; filter, table management, entity detail, map interaction, offline &amp; sync, alert acknowledgement, assignment, check-in, mobilization and muster.</p></div>

      <section class="ds-section" id="web">
        <div class="ds-head"><span class="no">5.1</span><h2>Web page templates</h2><p>Sidebar + top navigation + page content on a 12-column grid</p></div>
        <div class="grid">
          <div class="c6">${tpl('A — Command Center', 'KPI + Map + Alerts + Activity. The operational control room.', [block('KPI', 3, 44), block('KPI', 3, 44), block('KPI', 3, 44), block('KPI', 3, 44), block('Live operational map', 8, 120, 'map'), block('Alerts', 4, 120), block('Personnel', 4, 56), block('Assets', 4, 56), block('Projects', 4, 56), wide('Recent activity', 48)].join(''), '../dashboard/index.html#overview')}</div>
          <div class="c6">${tpl('B — Registry', 'Header + Filter + Table. Personnel, assets, projects, vessels, alerts.', [wide('Page header · actions', 40), wide('Filters · density · columns · export', 36), wide('Table — sort · search · hide column · resize', 150), wide('Pagination', 32)].join(''), '../dashboard/index.html#personnel')}</div>
          <div class="c6">${tpl('C — Detail', 'Entity identity + Status + Map + Metadata + Timeline. Employee and asset detail.', [wide('Identity · chips · actions', 48), block('Status / tracking', 4, 110), block('Map', 8, 110, 'map'), block('Metadata', 4, 80), block('Related entities', 4, 80), block('Device / custody', 4, 80), block('Timeline', 6, 70), block('Events table', 6, 70)].join(''), '../dashboard/index.html#employee-detail')}</div>
          <div class="c6">${tpl('D — Project', 'Project header + People + Assets + Vessel + Map + Activity. Project is the center.', [wide('Project header · stage flow', 56), block('KPI', 3, 40), block('KPI', 3, 40), block('KPI', 3, 40), block('KPI', 3, 40), block('Project map', 8, 100, 'map'), block('People · Assets', 4, 100), block('Mobilization checklist', 6, 70), block('Personnel', 6, 70), block('Activity', 8, 48), block('Vessels', 4, 48)].join(''), '../dashboard/index.html#project-detail')}</div>
        </div>
      </section>

      <section class="ds-section" id="nav">
        <div class="ds-head"><span class="no">5.2</span><h2>Navigation</h2><p>Maximum nesting: two levels</p></div>
        <div class="grid">
          <div class="c5">${C.card({ title: 'Web sidebar', body: '<div class="row top s24">' + PN.webNav.map(g => '<div><div class="eyebrow" style="margin-bottom:4px">' + g.group + '</div>' + g.items.map(i => '<div class="row s8" style="font-size:13px;padding:3px 0">' + C.icon(i.icon, 'ic-16') + i.label + '</div>').join('') + '</div>').join('') + '</div>' })}</div>
          <div class="c4">${C.card({ title: 'Top navigation', body: '<div class="crumb"><span>Global</span><span class="sep">/</span><span>Project Alpha</span><span class="sep">/</span><span class="cur">Live Operation</span></div><div class="t-caption">Project context, search, clock in WIB, notifications and user. The breadcrumb doubles as the project selector.</div>' + C.kv([['Height', '64 px, sticky, translucent'], ['Search', '320 px pill, ⌘K'], ['Clock', '04 Sep 2026 · 16:21 WIB']]) })}</div>
          <div class="c3">${C.card({ title: 'Mobile bottom nav', body: '<div class="stack s4" style="font-size:13px">' + PN.mobileNav.map(n => '<div class="row s8">' + C.icon(n.icon, 'ic-16') + n.label + '</div>').join('') + '</div><div class="t-caption">SOS is a header control on every screen.</div>' })}</div>
        </div>
      </section>

      <section class="ds-section" id="patterns">
        <div class="ds-head"><span class="no">5.3</span><h2>Interaction patterns</h2></div>
        ${C.table({ bare: false, foot: false, cols: [{ key: 'p', label: 'Pattern' }, { key: 'w', label: 'Where' }, { key: 'r', label: 'Rule' }], rows: [
          { p: 'Search & filter', w: 'Every registry, live map', r: 'Filters are chips you can see and remove; the result count updates in the footer; empty results get an empty state, not a blank table.' },
          { p: 'Table management', w: 'Registries', r: 'Sort by column, hide columns, three densities, sticky header, export. Row click opens the detail page; the checkbox selects for bulk actions.' },
          { p: 'Entity detail', w: 'Employee, asset, vessel, project', r: 'Identity first, then status, then map, then metadata and timeline. Related entities link both ways (person ↔ project ↔ asset).' },
          { p: 'Map interaction', w: 'Command center, live map, details', r: 'Layers before filters. Click a marker for a popup, click a cluster to expand. Freshness and accuracy are always visible on a selected marker.' },
          { p: 'Offline & sync', w: 'Mobile', r: 'Actions are stored locally and shown as pending; a banner names the offline state and the count. Sync is automatic when a connection returns.' },
          { p: 'Alert acknowledgement', w: 'Alert center, command center, mobile', r: 'Acknowledge records who and when; resolve requires a note. P1 alerts cannot be dismissed from a list — only from the detail view.' },
          { p: 'Asset assignment', w: 'Assignment, asset detail', r: 'Person → Project → Asset. Custody is confirmed by a scan. Removing an asset returns custody to the warehouse.' },
          { p: 'Check-in / check-out', w: 'Mobile', r: 'Only inside the matching geofence; outside it the button is disabled with the distance and accuracy shown.' },
          { p: 'Mobilization', w: 'Web + mobile', r: 'One checklist per project with three counters: ready, scanned at dispatch, received on vessel. Warnings name the reader and last-seen time.' },
          { p: 'Muster', w: 'Web + mobile', r: 'Expected / safe / not confirmed / offline / SOS. Confirmation via app, supervisor or manual entry; each method is recorded.' }
        ] })}
      </section>

      <section class="ds-section" id="states">
        <div class="ds-head"><span class="no">5.4</span><h2>States &amp; content standards</h2></div>
        <div class="grid">
          <div class="c6">${C.card({ title: 'Component states', body: '<div class="row s8 wrap">' + ['Default', 'Hover', 'Active', 'Disabled', 'Loading', 'Empty', 'Error', 'Offline', 'Stale', 'Warning', 'Critical'].map(s => C.chip('neutral', s, { dot: false })).join('') + '</div><div class="t-caption">Every component is documented in these states; every page template shows loading (skeleton), empty and error states. See the <a href="../dashboard/index.html#states">component states demo</a>.</div>' })}</div>
          <div class="c6">${C.card({ title: 'Content standards', body: C.kv([['Voice', 'Active, specific, calm. “Acknowledge”, then “Acknowledged”.'], ['Uppercase', 'Labels only: PROJECT STATUS · LAST DETECTED · VESSEL · ASSET ID'], ['Time', '24 h WIB, HH:MM or HH:MM:SS; relative for freshness (3 min ago)'], ['Numbers', 'Tabular; units always (± 7 m, 2 h 14 m, 27 / 28)'], ['Errors', 'What happened, last good value, likely causes, one action'], ['Privacy', 'Say when tracking starts, with whom it is shared, how long it is kept']], { stack: true }) })}</div>
        </div>
      </section>

      <section class="ds-section" id="tokens">
        <div class="ds-head"><span class="no">5.5</span><h2>Token architecture &amp; data visualization</h2></div>
        <div class="grid">
          <div class="c6">${C.card({ title: 'Token hierarchy', body: C.flow([{ label: 'Primitive', sub: 'blue.500', state: 'done' }, { label: 'Semantic', sub: 'action.primary', state: 'done' }, { label: 'Component', sub: 'button.primary.bg', state: 'current' }]) + '<div class="t-caption">Figma variables: Color/Primitive · Brand · Text · Surface · Border · Status · Map — Spacing space-1…n — Radius s/m/l — Typography display/heading/body/label/caption — Elevation surface/floating/modal.</div>' })}</div>
          <div class="c6">${C.card({ title: 'Data visualization priority', body: '<div class="row s8 wrap">' + ['1 Map', '2 Timeline', '3 Status distribution', '4 Utilization', '5 Movement', '6 Trend', '7 Table'].map(s => C.chip('info', s, { dot: false })).join('') + '</div>' + C.hbars([{ label: 'Survey', pct: 78, kind: 's4' }, { label: 'ROV', pct: 71, kind: 's3' }, { label: 'Positioning', pct: 64, kind: 's3' }, { label: 'Comms', pct: 42, kind: 's2' }]) + '<div class="t-caption">Avoid 3D charts, gauges, rainbow palettes and pie charts with many categories. Sequential Sky → Deep for magnitude; semantic colors for state.</div>' })}</div>
        </div>
      </section>`;
  }
});
