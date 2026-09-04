// handwritten
PN.page('operational', {
  title: 'Operational Components', icon: 'compass', nav: 'operational',
  render() {
    const demo = (label, inner, style) => `<div class="ds-demo"${style ? ' style="' + style + '"' : ''}><div class="ds-label">${label}</div>${inner}</div>`;
    const markers = [
      { kind: 'vessel', x: 52, y: 42, label: 'MV PAGEO 02', sub: '12 personnel · 18 assets' },
      { kind: 'person', x: 40, y: 30, label: 'Person · Active' }, { kind: 'person', state: 'warn', x: 46, y: 62, label: 'Person · Not confirmed' }, { kind: 'person', state: 'crit', x: 84, y: 20, label: 'Person · SOS' }, { kind: 'person', state: 'off', x: 20, y: 76, label: 'Person · Offline' },
      { kind: 'asset', x: 60, y: 54, label: 'Asset · Deployed' }, { kind: 'asset', state: 'warn', x: 30, y: 58, label: 'Asset · Not seen' },
      { kind: 'site', x: 12, y: 54, label: 'Site' }, { kind: 'reader', x: 17, y: 64, label: 'RFID reader' }, { kind: 'reader', state: 'off', x: 24, y: 70 }, { kind: 'muster', x: 8, y: 62, label: 'Muster point' },
      { kind: 'cluster', count: 42, x: 66, y: 34 }, { kind: 'cluster', cls: 'asset', count: 31, x: 72, y: 72 }, { kind: 'me', x: 56, y: 76, accuracy: 64, label: 'You · ± 7 m' }
    ];
    return `
      <div class="ds-hero">${C.eyebrow('03 · Operational components')}<h1>The vocabulary of the operational picture.</h1><p>These components exist only in PAGEO Navigator: they encode people, equipment, vessels, zones and safety state the same way on the map, in tables and on a phone screen.</p></div>

      <section class="ds-section" id="markers">
        <div class="ds-head"><span class="no">3.1</span><h2>Map markers, clusters &amp; geofences</h2><p>● Person · ◆ Asset · ▲ Vessel · ■ Site · ◉ RFID reader · ✚ Muster · dashed boundary</p></div>
        ${C.map({ scene: 'coast', height: 420, markers: markers, fences: [{ pts: '46,28 64,22 72,44 58,56 44,48', label: 'Offshore Work Area — zone' }, { pts: '80,10 96,8 97,24 82,26', kind: 'restricted', label: 'Restricted — red' }, { pts: '4,56 14,54 16,68 6,70', kind: 'muster', label: 'Muster — green' }], tracks: [{ pts: '12,54 22,66 36,64 48,58 56,76', color: '#08698F' }],
          popups: [C.popup({ static: false, x: 66, y: 34, eyebrow: '42 personnel', title: 'Cluster', sub: 'Click to expand', kv: [['Active', '31'], ['On vessel', '8'], ['Offline', '3']] })],
          tr: '<div class="map-panel"><div class="eyebrow">Layer control</div>' + C.seg(['Combined', 'People', 'Assets', 'Vessels'], 0, { sm: true, data: 'layer' }) + '<div class="stack s8" style="font-size:12px"><label class="row between">Geofences ' + C.switch(true) + '</label><label class="row between">RFID readers ' + C.switch(true) + '</label><label class="row between">Tracks ' + C.switch(true) + '</label></div></div>', bc: '<span class="map-coords">-6.18746, 106.82721 · zoom 13</span>' })}
        <div class="ds-desc">Clusters collapse overlapping markers into a count; a click shows the breakdown. The user’s own position (mobile) uses a pulsing ring and an accuracy circle sized to the GPS error. GPS accuracy is always shown as ± metres — the UI never implies false precision.</div>
      </section>

      <section class="ds-section" id="popups">
        <div class="ds-head"><span class="no">3.2</span><h2>Marker popups</h2><p>Human · asset · vessel</p></div>
        <div class="ds-demo-grid">
          ${C.popup({ static: true, avatar: 'FS', title: 'Fahmi Syaban', sub: 'Survey Engineer · Project Alpha', kv: [['Status', '<span class="ok">● Active</span>'], ['Last update', '15:42'], ['Accuracy', '± 7 m'], ['Battery', '76%']], actions: C.btn('Open profile', 'xs secondary') + C.btn('History', 'xs ghost') })}
          ${C.popup({ static: true, icon: 'diamond', title: 'MBES-03', sub: 'Multibeam Echo Sounder', kv: [['Project', 'Alpha'], ['Location', 'MV PAGEO 02'], ['Last seen', '3 min ago'], ['Status', '<span class="info">● Deployed</span>']], actions: C.btn('Open asset', 'xs secondary') + C.btn('Journey', 'xs ghost') })}
          ${C.popup({ static: true, icon: 'ship', symCls: 'dark', title: 'MV PAGEO 02', sub: 'Project Alpha · on site', kv: [['Personnel', '12'], ['Assets', '18'], ['Heading / speed', '096° · 0.4 kn'], ['Last AIS', '15:42']], actions: C.btn('Open vessel', 'xs secondary') })}
        </div>
      </section>

      <section class="ds-section" id="freshness">
        <div class="ds-head"><span class="no">3.3</span><h2>GPS freshness, accuracy &amp; tracking status</h2><p>Thresholds are configurable; the language is not</p></div>
        <div class="grid">
          <div class="c5">${C.card({ title: 'Location freshness states', body: C.table({ bare: true, cols: [{ key: 's', label: 'State', render: r => C.fresh(r.k, r.t) }, { key: 'th', label: 'Threshold' }, { key: 'u', label: 'Meaning' }], rows: [{ k: 'live', t: '12 sec ago', th: '< 1 min', u: 'Position is current' }, { k: 'recent', t: '3 min ago', th: '1 – 5 min', u: 'Reliable for operations' }, { k: 'stale', t: '27 min ago', th: '5 – 30 min', u: 'Verify before acting' }, { k: 'offline', t: '2 h 14 m', th: '> 30 min', u: 'Unavailable — investigate' }] }) })}</div>
          <div class="c3">${C.card({ title: 'Position accuracy', body: '<div class="stack s12"><div class="row s12"><span class="mk me" style="position:relative;left:auto;top:auto;transform:none;margin:20px"><span class="accuracy" style="width:64px;height:64px;left:50%;top:50%;transform:translate(-50%,-50%)"></span><span class="sym"></span></span><div><div class="eyebrow">Position accuracy</div><div class="t-h2 tnum">± 7 m</div><div class="t-caption">Circle radius = reported error</div></div></div>' + C.kv([['Good', '≤ 10 m'], ['Fair', '10 – 25 m'], ['Poor', '> 25 m · warn chip']]) + '</div>' })}</div>
          <div class="c4">${C.card({ title: 'Tracking status', body: '<div class="stack s12">' + M.tracking(true, 'Location sharing active') + '<div class="t-caption">Shown on every mobile screen while an operation is running — Project Alpha · started 08:03 · last sync 10 sec ago.</div>' + M.tracking(false) + '<div class="t-caption">Outside operational context the app never tracks. The user sees exactly when sharing starts and stops.</div></div>' })}</div>
        </div>
      </section>

      <section class="ds-section" id="alerts">
        <div class="ds-head"><span class="no">3.4</span><h2>Alert card &amp; severity</h2><p>One queue for people and assets · P1 critical → P4 information</p></div>
        <div class="grid">
          <div class="c3">${C.alert({ sev: 1, title: 'SOS signal received', when: '24 sec ago', meta: ['Employee <b>Rizky Hakim</b>', 'Project Alpha · Restricted Zone'] })}</div>
          <div class="c3">${C.alert({ sev: 2, title: 'Unauthorized restricted zone entry', when: '38 min ago', meta: ['<b>Hendra Wijaya</b> · Deck Technician', 'Acknowledged by QHSE · 15:07'], actions: C.btn('Resolve', 'xs secondary') })}</div>
          <div class="c3">${C.alert({ sev: 3, title: 'Asset not seen for 2 days', when: '2 min ago', meta: ['<b>SONAR-012</b> · Side Scan Sonar', 'Last reader Gate 02 · 02 Sep'], actions: C.btn('Locate', 'xs secondary') + C.btn('Acknowledge', 'xs ghost', null, 'data-ack') })}</div>
          <div class="c3">${C.alert({ sev: 4, title: 'Calibration expiring in 14 days', when: '2 h ago', meta: ['<b>SVP-07</b> · Sound Velocity Probe', 'Valid to 18 Sep 2026'], actions: C.btn('Schedule', 'xs ghost') })}</div>
        </div>
        <div class="ds-demo-grid">
          ${demo('Human alerts', '<div class="row s8 wrap">' + ['SOS', 'Employee unexpectedly offline', 'Restricted zone entry', 'Site departure', 'No location update', 'Operation anomaly', 'Muster not confirmed'].map(a => C.chip('neutral', a, { dot: false })).join('') + '</div>')}
          ${demo('Asset alerts', '<div class="row s8 wrap">' + ['Asset removed from assigned area', 'Unauthorized movement', 'Asset not returned', 'Asset missing', 'RFID reader offline', 'Assigned to wrong project', 'Calibration expiring', 'Maintenance due'].map(a => C.chip('neutral', a, { dot: false })).join('') + '</div>')}
        </div>
      </section>

      <section class="ds-section" id="rfid">
        <div class="ds-head"><span class="no">3.5</span><h2>RFID status &amp; scan result</h2><p>Custody, mobilization and accountability — last seen at + last seen time + movement history</p></div>
        <div class="grid">
          <div class="c4">${C.card({ title: 'Reader status', body: '<div class="stack s4">' + window.DATA.readers.slice(0, 6).map(r => C.entity({ icon: 'radio', symCls: r.online ? '' : 'crit', title: r.id + ' · ' + r.loc, sub: 'Last heartbeat ' + r.last, right: C.chip(r.online ? 'ok' : 'off', r.online ? 'Online' : 'Offline', { sm: true }) })).join('') + '</div>' })}</div>
          <div class="c4">${C.card({ title: 'RFID flow', body: C.flow([{ label: 'Warehouse', state: 'done' }, { label: 'Dispatch gate', state: 'done' }, { label: 'Loaded', state: 'done' }, { label: 'Port / Vessel', state: 'current' }, { label: 'Deployed' }, { label: 'Returned' }]) + C.timeline([{ time: 'Sep 01', kind: 'unknown', text: 'Warehouse', sub: 'RD-01' }, { time: 'Sep 02', kind: 'unknown', text: 'Workshop', sub: 'RD-03' }, { time: 'Sep 03', kind: 'transit', text: 'Loading Area', sub: 'RD-04' }, { time: 'Sep 03', kind: 'info', text: 'Vessel PAGEO-02', sub: 'RD-11' }, { time: 'Sep 04', kind: 'info', html: '<b>Offshore Site</b>', sub: 'RD-11 · 15:37' }]) })}</div>
          <div class="c4">${C.card({ title: 'Scan result (mobile)', body: '<div class="stack s12" style="align-items:center;text-align:center">' + M.ring('ok', 'check') + '<div class="eyebrow ok">Asset detected</div><div class="t-h2">MBES-03</div><div class="t-caption">Multibeam Echo Sounder · Project Alpha · RD-M03 15:42:08</div>' + M.btn('Confirm', 'primary') + '</div>' })}</div>
        </div>
      </section>

      <section class="ds-section" id="mobilization">
        <div class="ds-head"><span class="no">3.6</span><h2>Mobilization checklist, muster status &amp; SOS</h2><p>The three QHSE-critical components</p></div>
        <div class="grid">
          <div class="c4">${C.card({ title: 'Mobilization checklist', right: '<span class="strong tnum">27 / 28</span>', body: C.progress(96, 'ok') + C.checklist([{ state: 'ok', label: 'MBES', right: 'RD-02 09:12' }, { state: 'ok', label: 'GPS Receiver', right: '09:12' }, { state: 'ok', label: 'Gyro', right: '09:13' }, { state: 'ok', label: 'Side Scan Sonar', right: '09:15' }, { state: 'warn', label: 'Cable Set', sub: 'Not scanned at dispatch gate', right: '—' }, { state: 'pending', label: 'Battery Pack-04', right: 'Pending' }]) + '<div class="row s16 t-caption tnum"><span>Ready <b>27 / 28</b></span><span>Scanned <b>27 / 28</b></span><span>Received <b>26 / 28</b></span></div>' })}</div>
          <div class="c4">${C.card({ title: 'Muster status', right: C.chip('crit', 'In progress', { sm: true }), body: '<div class="kpi-row" style="grid-template-columns:repeat(4,1fr)">' + [['Safe', 76, 'var(--s-success)'], ['Not confirmed', 5, 'var(--s-warn)'], ['Offline', 2, 'var(--s-offline)'], ['SOS', 1, 'var(--s-crit)']].map(k => '<div><div class="eyebrow">' + k[0] + '</div><div class="kpi-value" style="font-size:26px;color:' + k[2] + '">' + k[1] + '</div></div>').join('') + '</div><div class="t-caption">Personnel expected <b class="tnum">84</b></div>' + C.entityTile({ icon: 'flag', symCls: 'ok', title: 'Muster Point A', sub: '43 / 45 personnel · missing 024, 117', right: C.ring(96, 'ok') }) + C.entityTile({ icon: 'flag', symCls: 'warn', title: 'Muster Point B', sub: '33 / 39 personnel', right: C.ring(85, 'warn') }) })}</div>
          <div class="c4">${C.card({ title: 'SOS control', body: '<div class="stack s12" style="align-items:center;text-align:center"><div class="eyebrow">Press and hold</div>' + M.sos() + '<div class="t-caption" style="max-width:26ch">Press-and-hold for 2 s prevents accidental activation. Try it — the ring fills, then the state flips to Sent.</div></div>' })}</div>
        </div>
      </section>

      <section class="ds-section" id="cards">
        <div class="ds-head"><span class="no">3.7</span><h2>Project selector, sync indicator &amp; entity cards</h2></div>
        <div class="grid">
          <div class="c4">${C.card({ title: 'Project selector', body: C.select('Offshore Survey Alpha', { icon: 'clipboard' }) + '<div class="crumb"><span>Global</span><span class="sep">/</span><span>Project Alpha</span><span class="sep">/</span><span class="cur">Live Operation</span></div><div class="t-caption">Project context is carried in the breadcrumb: Global / Project / View. Maximum nesting is two levels.</div>' })}</div>
          <div class="c4">${C.card({ title: 'Sync indicator', body: '<div class="stack s12">' + M.sync('ok', 'Synced') + M.sync('busy', 'Syncing') + M.sync('pending', 'Offline · 12 pending') + '<div class="t-caption">Check-in → stored locally → synced later. Offline is a first-class state on vessels.</div></div>' })}</div>
          <div class="c4">${C.card({ title: 'Personnel · Asset · Vessel cards', body: C.entityTile({ icon: 'user', symCls: '', title: 'Andi Pratama', sub: 'Survey Engineer · MV PAGEO 02', right: C.chip('ok', 'Active', { sm: true }) }) + C.entityTile({ icon: 'diamond', title: 'MBES-03', sub: 'Deployed · MV PAGEO 02 · 3 min ago', right: C.chip('info', 'Deployed', { sm: true }) }) + C.entityTile({ icon: 'ship', symCls: 'dark', title: 'MV PAGEO 02', sub: '12 personnel · 18 assets', right: C.chip('info', 'On site', { sm: true }) }) })}</div>
        </div>
      </section>`;
  }
});
