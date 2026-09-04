// handwritten — Personnel registry (filterable, CRUD)
(function () {
  const STATUS = { ok: 'Active', info: 'On Site / Offshore', transit: 'In Transit', warn: 'Idle', off: 'Offline', crit: 'Alert' };
  const reg = PN.registry({
    coll: 'people', noun: 'people', eyebrow: 'People', title: 'Personnel', sub: 'Mobilization, presence and safety — click a summary card to filter',
    newHref: 'personnel-form.html', newLabel: 'Add personnel', placeholder: 'Search name, ID or role',
    kpis: [
      { label: 'On operation', value: r => r.length, icon: 'users', iconKind: 'accent' },
      { label: 'Active', value: r => r.filter(x => x.kind === 'ok').length, icon: 'checkcircle', iconKind: 'ok', filter: { key: 'kind', value: 'ok' }, filterLabel: 'Status' },
      { label: 'On site / offshore', value: r => r.filter(x => x.kind === 'info').length, icon: 'waves', filter: { key: 'kind', value: 'info' }, filterLabel: 'Status' },
      { label: 'In transit', value: r => r.filter(x => x.kind === 'transit').length, icon: 'truck', filter: { key: 'kind', value: 'transit' }, filterLabel: 'Status' },
      { label: 'Offline', value: r => r.filter(x => x.kind === 'off').length, icon: 'wifioff', filter: { key: 'kind', value: 'off' }, filterLabel: 'Status' },
      { label: 'Alert', value: r => r.filter(x => x.kind === 'crit').length, icon: 'siren', iconKind: 'crit', filter: { key: 'kind', value: 'crit' }, filterLabel: 'Status' }
    ],
    labelFor: (k, v) => k === 'kind' ? STATUS[v] || v : v,
    search: (r, q) => (r.name + ' ' + r.id + ' ' + r.role + ' ' + r.location).toLowerCase().indexOf(q) >= 0,
    filters: [{ key: 'project', label: 'Project', icon: 'clipboard' }, { key: 'dept', label: 'Department', icon: 'building' }, { key: 'location', label: 'Location', icon: 'pin' }],
    cols: [
      { key: 'name', label: 'Employee', render: r => C.entityCell({ avatar: C.initials(r.name), name: r.name, sub: r.id, href: 'employee-detail.html' }) },
      { key: 'role', label: 'Role' }, { key: 'dept', label: 'Department' },
      { key: 'project', label: 'Project', render: r => r.project === '—' ? '—' : '<a href="project-detail.html">Project ' + C.esc(r.project) + '</a>' },
      { key: 'location', label: 'Location' },
      { key: 'status', label: 'Status', render: r => C.chip(r.kind, r.status, { sm: true }) },
      { key: 'fresh', label: 'Freshness', render: r => C.fresh(r.fresh[0], r.fresh[1]) },
      { key: 'last', label: 'Last update', num: true },
      { key: 'batt', label: 'Battery', num: true, render: r => r.batt == null ? '—' : '<span class="' + (r.batt < 20 ? 'crit' : '') + '">' + r.batt + '%</span>' }
    ],
    rowId: r => r.id, detailHref: () => 'employee-detail.html', editHref: r => 'personnel-form.html?id=' + r.id, deleteLabel: r => r.name,
    extraMenu: (r, draw) => ({ icon: 'bell', label: 'Send check-in reminder', onClick: () => PN.toast('Reminder sent to ' + r.name, 'bell') })
  });
  PN.page('personnel', { title: 'Personnel', icon: 'users', nav: 'personnel', crumb: 'Global / People / Personnel', render: reg.render, after: reg.after });
})();
