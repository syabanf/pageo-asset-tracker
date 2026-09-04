// handwritten
PN.page('components', {
  title: 'Core Components', icon: 'grid', nav: 'components',
  render() {
    const D = window.DATA;
    const demo = (label, inner, o) => `<div class="ds-demo${o && o.tinted ? ' tinted' : ''}"${o && o.style ? ' style="' + o.style + '"' : ''}><div class="ds-label">${label}</div>${inner}</div>`;
    return `
      <div class="ds-hero">${C.eyebrow('02 · Core components')}<h1>Shared components for web and mobile.</h1><p>Named <span class="ds-token">Component / Variant / State</span> — “Button / Primary / Hover”, never “Button blue final 2”. Every component is rendered by a JavaScript function in <span class="ds-token">app/components.js</span> and styled by tokens only.</p></div>

      <section class="ds-section" id="buttons">
        <div class="ds-head"><span class="no">2.1</span><h2>Buttons</h2><p>One primary per view · red only for delete, remove, emergency</p></div>
        <div class="ds-demo-grid">
          ${demo('Variants', `<div class="row s8 wrap">${C.btn('Assign asset', 'primary')}${C.btn('Export', 'secondary')}${C.btn('Filter', 'ghost', 'filter')}${C.btn('Columns', 'soft', 'columns')}${C.btn('View history', 'tertiary', null) .replace('</button>', C.icon('arrowright', 'ic-16') + '</button>')}${C.btn('Remove', 'destructive', 'trash')}${C.btn('End muster', 'destructive solid')}${C.btn('Start operation', 'dark', 'play')}</div>`)}
          ${demo('Sizes and states', `<div class="row s8 wrap">${C.btn('Large', 'primary lg')}${C.btn('Default', 'primary')}${C.btn('Small', 'primary sm')}${C.btn('Extra small', 'primary xs')}${C.btn('Disabled', 'primary', null, 'disabled')}${C.btn('', 'ghost icon-only', 'more')}${C.btn('', 'ghost sm icon-only', 'pencil')}${C.iconBtn('bell', { pip: true, label: 'Notifications' })}${C.iconBtn('settings', { bordered: true })}</div>`)}
        </div>
      </section>

      <section class="ds-section" id="inputs">
        <div class="ds-head"><span class="no">2.2</span><h2>Inputs &amp; selection</h2><p>40 px desktop · 52 px mobile · never a red border without a message</p></div>
        <div class="ds-demo-grid">
          ${demo('Text input states', `<div class="grid g16" style="grid-template-columns:1fr 1fr">${C.input({ label: 'Asset serial number', value: 'SN-02381920', help: 'Printed on the calibration plate' })}${C.input({ label: 'Focused', value: 'Offshore Survey Alpha', focus: true, clear: true })}${C.input({ label: 'Error', value: 'SN-02381920', error: 'Serial number already registered.' })}${C.input({ label: 'Disabled', value: 'PG-0142', disabled: true })}</div>`)}
          ${demo('Search, select, textarea', `<div class="stack s12">${C.search('Search people, assets, projects…')}${C.select('MV PAGEO 02', { label: 'Vessel', icon: 'ship' })}${C.input({ label: 'Project', select: true, placeholder: 'Choose a project' })}<div class="field"><label>Notes</label><div class="input textarea">Cable Set-07 not detected at dispatch gate — re-scan at loading area before departure.</div></div></div>`)}
          ${demo('Switch, checkbox, radio', `<div class="stack s12" style="font-size:13px"><label class="row between"><span>Tracking only during active operation</span>${C.switch(true)}</label><label class="row between"><span>Show offline only</span>${C.switch(false)}</label><label class="row between muted"><span>Show tracking status in mobile app (required)</span>${C.switch(true, true)}</label><div class="divider"></div><label class="row s8">${C.checkbox(true)}Include demobilized personnel</label><label class="row s8">${C.checkbox(false)}Calibration due only</label><div class="divider"></div><label class="row s8">${C.radio(true)}Vessel boarding</label><label class="row s8">${C.radio(false)}Site check-in</label></div>`)}
          ${demo('Segmented control &amp; tabs', `<div class="stack s16"><div class="row s12 wrap">${C.seg(['Combined', 'People', 'Assets', 'Vessels'])}${C.seg(['Today', '7 d', '30 d'], 1, { sm: true })}${C.seg([{ key: 'c', label: 'Comfortable' }, { key: 'd', label: 'Default' }, { key: 'x', label: 'Compact' }], 'd', { sm: true })}</div>${C.tabs([{ key: 'o', label: 'Open', count: 3 }, { key: 'a', label: 'Acknowledged', count: 11 }, { key: 'r', label: 'Resolved', count: 48 }, { key: 'l', label: 'All' }])}${C.tabs(['Roles & access', 'Users', 'Devices', 'Thresholds'], 0, { pills: true })}</div>`)}
        </div>
      </section>

      <section class="ds-section" id="status">
        <div class="ds-head"><span class="no">2.3</span><h2>Chips, badges &amp; status vocabulary</h2><p>Light tint · dark semantic text · small dot</p></div>
        <div class="ds-demo-grid">
          ${demo('People', `<div class="row s8 wrap">${C.chip('ok', 'Active')}${C.chip('info', 'On Site')}${C.chip('info', 'Offshore')}${C.chip('transit', 'In Transit')}${C.chip('warn', 'Idle')}${C.chip('off', 'Offline')}${C.chip('crit', 'Alert')}</div>`)}
          ${demo('Assets', `<div class="row s8 wrap">${C.chip('ok', 'Available')}${C.chip('info', 'Deployed')}${C.chip('transit', 'In Transit')}${C.chip('warn', 'Maintenance')}${C.chip('crit', 'Missing')}${C.chip('unknown', 'Unassigned')}${C.chip('neutral', 'Survey', { dot: false })}${C.chip('outline', 'Project Alpha', { dot: false })}</div>`)}
          ${demo('Severity, freshness, badges', `<div class="stack s12"><div class="row s8">${C.sev(1)}Critical ${C.sev(2)}High ${C.sev(3)}Warning ${C.sev(4)}Information</div><div class="row s16 wrap">${C.fresh('live', '12 sec ago')}${C.fresh('recent', '3 min ago')}${C.fresh('stale', '27 min ago')}${C.fresh('offline', '2 h 14 m')}</div><div class="row s8">${C.badge(3)}${C.badge(12, 'light')}<span class="badge neutral" style="background:var(--pageo-carbon)">NEW</span>${C.avatar('FS')}${C.avatar('AP', 'dark')}<span class="avatar-stack">${C.avatar('FS')}${C.avatar('AP')}${C.avatar('RH')}${C.avatar('+9', 'dark')}</span></div></div>`)}
          ${demo('Sizes', `<div class="row s8 wrap">${C.chip('ok', 'Small', { sm: true })}${C.chip('ok', 'Default')}${C.chip('ok', 'Large', { lg: true })}</div>`)}
        </div>
      </section>

      <section class="ds-section" id="cards">
        <div class="ds-head"><span class="no">2.4</span><h2>Cards &amp; KPI</h2><p>Metric · entity · event · alert — a KPI gives context, not just a number</p></div>
        <div class="grid">
          <div class="c3">${C.kpi({ label: 'People on operation', value: 128, lines: [{ kind: 'ok', num: 121, text: 'accounted' }, { kind: 'off', num: 7, text: 'offline' }], icon: 'users', iconKind: 'accent' })}</div>
          <div class="c3">${C.kpi({ label: 'Assets', value: 684, lines: [{ kind: 'info', num: 142, text: 'deployed' }, { kind: 'crit', num: 3, text: 'require attention' }], delta: { text: '12 mobilized today' }, spark: [610, 622, 630, 641, 655, 660, 668, 684] })}</div>
          <div class="c3">${C.kpi({ label: 'Open alerts', value: 3, alert: true, lines: [{ kind: 'crit', num: 1, text: 'P1 critical' }, { kind: 'warn', num: 2, text: 'P3 warning' }], icon: 'bell', iconKind: 'crit' })}</div>
          <div class="c3">${C.kpi({ label: 'Equipment ready', value: '27', unit: '/ 28', compact: true, delta: { kind: 'flat', text: '1 not scanned' } })}</div>
          <div class="c4">${C.card({ title: 'Entity card', body: C.entity({ avatar: 'AP', title: 'Andi Pratama', sub: 'Survey Engineer · Project Alpha', right: C.chip('ok', 'Active', { sm: true }) + '<span>15:42</span>' }) + C.entityTile({ icon: 'diamond', title: 'MBES-03', sub: 'Multibeam Echo Sounder', right: C.chip('info', 'Deployed', { sm: true }) }) })}</div>
          <div class="c4">${C.card({ title: 'Event card', body: C.feed([{ time: '15:42', icon: 'diamond', html: '<b>MBES-04</b> detected at Gate 02', tag: 'RFID', tagKind: 'transit' }, { time: '15:39', icon: 'ship', html: '<b>Andi Pratama</b> boarded MV PAGEO 02', tag: 'Geofence', tagKind: 'info' }]) })}</div>
          <div class="c4">${C.alert({ sev: 1, title: 'SOS signal received', when: '24 sec ago', meta: ['Employee <b>Rizky Hakim</b> · ROV Pilot', 'Project Alpha · received 15:38:24'] })}</div>
          <div class="c4">${C.card({ cls: 'tinted', title: 'Tinted', body: '<p class="t-caption">Secondary surface for grouped or nested content. No shadow.</p>' })}</div>
          <div class="c4">${C.card({ cls: 'floating', title: 'Floating', body: '<p class="t-caption">Map panels, popovers, dropdowns. Shadow instead of border.</p>' })}</div>
          <div class="c4">${C.card({ cls: 'accent', title: 'Accent', body: '<p class="t-caption">One per page at most — a highlighted call to action or project context.</p>' })}</div>
        </div>
      </section>

      <section class="ds-section" id="table">
        <div class="ds-head"><span class="no">2.5</span><h2>Table</h2><p>Sort · filter · search · hide column · resize · pagination · export · three densities</p></div>
        ${C.table({ sortable: true, total: 128, head: '<span class="card-title">Personnel</span><div class="row s8">' + C.seg(['Comfortable', 'Default', 'Compact'], 1, { sm: true }) + C.btn('Export', 'ghost sm', 'download') + '</div>',
          cols: [{ key: 'sel', label: '', sortable: false, render: r => C.checkbox(r._selected), width: '36px' }, { key: 'name', label: 'Employee', render: r => C.entityCell({ avatar: C.initials(r.name), name: r.name, sub: r.id }) }, { key: 'role', label: 'Role' }, { key: 'project', label: 'Project' }, { key: 'location', label: 'Location' }, { key: 'status', label: 'Status', render: r => C.chip(r.kind, r.status, { sm: true }) }, { key: 'fresh', label: 'Freshness', render: r => C.fresh(r.fresh[0], r.fresh[1]) }, { key: 'last', label: 'Last update', num: true }, { key: 'batt', label: 'Battery', num: true, render: r => r.batt + '%' }, { key: 'act', label: '', sortable: false, cls: 'actions', render: () => C.btn('', 'ghost xs icon-only', 'more') }],
          rows: D.people.slice(0, 6).map((p, i) => Object.assign({ _selected: i === 1 }, p)) })}
      </section>

      <section class="ds-section" id="data">
        <div class="ds-head"><span class="no">2.6</span><h2>Data display</h2><p>Key/value · stat list · progress · timeline</p></div>
        <div class="grid">
          <div class="c3">${C.card({ title: 'Key / value (stack)', body: C.kv([['Lat', '-6.18746'], ['Long', '106.82721'], ['Accuracy', '± 8 m'], ['Last update', '15:42:16'], ['Tracking', '<span class="ok">● Active</span>']], { stack: true }) })}</div>
          <div class="c3">${C.card({ title: 'Stat list', body: C.statList([{ kind: 'ok', n: 128, label: 'Active' }, { kind: 'info', n: 96, label: 'On site' }, { kind: 'transit', n: 12, label: 'In transit', color: 'var(--s-transit)' }, { kind: 'off', n: 7, label: 'Offline', color: 'var(--s-offline)' }], 128) })}</div>
          <div class="c3">${C.card({ title: 'Progress', body: '<div class="stack s12"><div><div class="row between t-caption"><span>Equipment ready</span><b>27 / 28</b></div>' + C.progress(96, 'ok') + '</div><div><div class="row between t-caption"><span>Received on vessel</span><b>26 / 28</b></div>' + C.progress(93, 'warn') + '</div>' + C.progress(40, '', true) + '<div class="row s16">' + C.ring(92, 'ok', true) + C.ring(64) + C.ring(18, 'crit') + '</div></div>' })}</div>
          <div class="c3">${C.card({ title: 'Timeline', body: C.timeline([{ time: '07:53', kind: 'ok', text: 'Arrived at Base' }, { time: '08:04', kind: 'ok', text: 'Start Operation' }, { time: '09:31', kind: 'info', text: 'Vessel Boarding', sub: 'MV PAGEO 02' }, { time: '11:20', kind: 'info', text: 'Project Site' }, { time: '15:42', kind: 'ok', html: '<b>Current Position</b>', sub: '± 7 m' }]) })}</div>
        </div>
      </section>

      <section class="ds-section" id="feedback">
        <div class="ds-head"><span class="no">2.7</span><h2>Feedback &amp; overlays</h2><p>Banner · toast · tooltip · modal · skeleton · empty · error</p></div>
        <div class="grid">
          <div class="c6 stack s12">${C.banner('info', 'Muster drill scheduled for 16:00 — 84 personnel expected on MV PAGEO 02.', C.btn('Details', 'xs ghost'))}${C.banner('warn', '1 equipment item not scanned at dispatch gate.', C.btn('Open checklist', 'xs ghost'))}${C.banner('crit', '<b>Emergency muster in progress</b> · initiated 15:38 by QHSE Officer', C.btn('End muster', 'xs destructive'))}${C.banner('offline', 'Connection lost — showing last known data from 15:19.', C.btn('Retry', 'xs ghost'))}<div class="row s12"><span class="toast">${C.icon('checkcircle', 'ic-16')}Asset assigned to Project Alpha</span><span class="tooltip">Last seen 3 min ago · RD-11</span></div></div>
          <div class="c6 overlay-demo"><div class="modal"><div class="t-h3">Remove GPS-029 from Andi Pratama?</div><p class="t-body muted">Custody returns to the warehouse. The asset stays assigned to Project Alpha until reassigned.</p><div class="row end s8">${C.btn('Cancel', 'ghost')}${C.btn('Remove asset', 'destructive solid', 'trash')}</div></div></div>
          <div class="c4">${C.card({ title: 'Loading', body: C.skeleton() })}</div>
          <div class="c4 card p0">${C.empty({ icon: 'users', title: 'No personnel on this project', text: 'Personnel assigned to this project will appear here.', action: 'Assign personnel' })}</div>
          <div class="c4"><div class="error-state">${C.eyebrow('Location data unavailable')}<div class="t-caption">Last received <b class="tnum">23 minutes ago</b></div><div class="causes">Possible causes: GPS unavailable · Device offline</div><div>${C.btn('Retry', 'secondary sm', 'refresh')}</div></div></div>
        </div>
        <div class="ds-desc">Error states name the last known good value and the likely causes in plain language. Technical error codes are never the primary message.</div>
      </section>`;
  }
});
