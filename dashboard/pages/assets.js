// handwritten — Asset registry (filterable, CRUD)
(function () {
  const reg = PN.registry({
    coll: 'assets', noun: 'assets', eyebrow: 'Assets', title: 'Asset Registry', sub: 'RFID equipment custody, mobilization and accountability — click a summary card to filter',
    newHref: 'asset-form.html', newLabel: 'Register asset', placeholder: 'Search asset ID, description or RFID', emptyIcon: 'diamond',
    kpis: [
      { label: 'Registered', value: r => r.length, icon: 'diamond', iconKind: 'accent' },
      { label: 'Available', value: r => r.filter(x => x.status === 'Available').length, icon: 'checkcircle', iconKind: 'ok', filter: { key: 'status', value: 'Available' }, filterLabel: 'Status' },
      { label: 'Deployed', value: r => r.filter(x => x.status === 'Deployed').length, icon: 'waves', filter: { key: 'status', value: 'Deployed' }, filterLabel: 'Status' },
      { label: 'In transit', value: r => r.filter(x => x.status === 'In Transit').length, icon: 'truck', filter: { key: 'status', value: 'In Transit' }, filterLabel: 'Status' },
      { label: 'Maintenance', value: r => r.filter(x => x.status === 'Maintenance').length, icon: 'wrench', iconKind: 'warn', filter: { key: 'status', value: 'Maintenance' }, filterLabel: 'Status' },
      { label: 'Alert / missing', value: r => r.filter(x => x.kind === 'crit').length, icon: 'warning', iconKind: 'crit', filter: { key: 'kind', value: 'crit' }, filterLabel: 'Status' }
    ],
    labelFor: (k, v) => k === 'kind' ? 'Alert' : v,
    search: (r, q) => (r.id + ' ' + r.desc + ' ' + r.rfid + ' ' + r.custodian).toLowerCase().indexOf(q) >= 0,
    filters: [{ key: 'cat', label: 'Category', icon: 'tag' }, { key: 'project', label: 'Project', icon: 'clipboard' }, { key: 'location', label: 'Location', icon: 'pin' }],
    cols: [
      { key: 'id', label: 'Asset', render: r => C.entityCell({ icon: 'diamond', name: r.id, sub: r.desc, href: 'asset-detail.html' }) },
      { key: 'cat', label: 'Category' },
      { key: 'project', label: 'Project', render: r => r.project === '—' ? '<span class="muted">—</span>' : '<a href="project-detail.html">Project ' + C.esc(r.project) + '</a>' },
      { key: 'location', label: 'Location', render: r => r.location === 'Unknown' ? '<span class="crit">Unknown</span>' : C.esc(r.location) },
      { key: 'custodian', label: 'Custodian' },
      { key: 'last', label: 'Last seen', render: r => '<div>' + C.esc(r.last) + '<div class="t-caption">' + C.esc(r.reader) + '</div></div>' },
      { key: 'status', label: 'Status', render: r => C.chip(r.kind, r.status, { sm: true }) },
      { key: 'cal', label: 'Calibration due' }
    ],
    rowId: r => r.id, detailHref: () => 'asset-detail.html', editHref: r => 'asset-form.html?id=' + encodeURIComponent(r.id), deleteLabel: r => r.id,
    extraMenu: (r, draw) => ({ icon: 'link', label: 'Reassign project', onClick: () => PN.route('assignment') })
  });
  PN.page('assets', { title: 'Asset Registry', icon: 'diamond', nav: 'assets', crumb: 'Global / Assets / Asset Registry', render: reg.render, after: reg.after });
})();
