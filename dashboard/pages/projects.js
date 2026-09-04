// handwritten — Projects registry (filterable, CRUD)
(function () {
  const reg = PN.registry({
    coll: 'projects', noun: 'projects', eyebrow: 'Operations', title: 'Projects', sub: 'Project is the center of the data model — personnel, assets, vessels and alerts roll up to it',
    newHref: 'project-form.html', newLabel: 'New project', placeholder: 'Search project, client or vessel', emptyIcon: 'clipboard',
    kpis: [
      { label: 'Projects', value: r => r.length, icon: 'clipboard', iconKind: 'accent' },
      { label: 'Offshore', value: r => r.filter(x => x.status === 'Offshore').length, icon: 'waves', filter: { key: 'status', value: 'Offshore' }, filterLabel: 'Status' },
      { label: 'Onshore', value: r => r.filter(x => x.status === 'Onshore').length, icon: 'building', iconKind: 'ok', filter: { key: 'status', value: 'Onshore' }, filterLabel: 'Status' },
      { label: 'Mobilizing', value: r => r.filter(x => x.status === 'Mobilizing').length, icon: 'truck', iconKind: 'warn', filter: { key: 'status', value: 'Mobilizing' }, filterLabel: 'Status' },
      { label: 'Planned', value: r => r.filter(x => x.status === 'Planned').length, icon: 'calendar', filter: { key: 'status', value: 'Planned' }, filterLabel: 'Status' },
      { label: 'Open alerts', value: r => r.reduce((a, x) => a + (+x.alerts || 0), 0), icon: 'bell', iconKind: 'crit' }
    ],
    search: (r, q) => (r.name + ' ' + r.type + ' ' + (r.client || '') + ' ' + r.vessel + ' ' + r.site).toLowerCase().indexOf(q) >= 0,
    filters: [{ key: 'vessel', label: 'Vessel', icon: 'ship' }, { key: 'pm', label: 'Project manager', icon: 'user' }],
    cols: [
      { key: 'name', label: 'Project', render: r => C.entityCell({ icon: r.id === 'base' ? 'building' : 'waves', symCls: '', name: r.name, sub: r.type, href: 'project-detail.html' }) },
      { key: 'status', label: 'Status', render: r => C.chip(r.kind, r.status, { sm: true }) },
      { key: 'vessel', label: 'Vessel' }, { key: 'site', label: 'Site' },
      { key: 'people', label: 'Personnel', num: true, render: r => '<b>' + r.people[0] + '</b> <span class="muted">/ ' + r.people[1] + '</span>' },
      { key: 'assets', label: 'Assets', num: true },
      { key: 'alerts', label: 'Alerts', num: true, render: r => r.alerts ? C.badge(r.alerts) : '<span class="muted">0</span>' },
      { key: 'start', label: 'Start – End', render: r => C.esc(r.start) + ' – ' + C.esc(r.end) },
      { key: 'pm', label: 'PM' }, { key: 'last', label: 'Last activity', num: true }
    ],
    rowId: r => r.id, detailHref: () => 'project-detail.html', editHref: r => 'project-form.html?id=' + r.id, deleteLabel: r => r.name,
    extraMenu: (r) => ({ icon: 'users', label: 'Assign personnel', onClick: () => PN.route('assignment') })
  });
  PN.page('projects', { title: 'Projects', icon: 'clipboard', nav: 'projects', crumb: 'Global / Operations / Projects', render: reg.render, after: reg.after });
})();
