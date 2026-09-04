// handwritten — Command Center, fully data-driven (Template A: KPI + Map + Alerts + Activity)
PN.page('overview', {
  title: 'Command Center', icon: 'grid', nav: 'overview', crumb: 'Global / Operations / Overview',
  render() {
    const D = window.DATA, K = D.kpis;
    const kpis = [
      C.kpi({ label: 'People on operation', value: K.people.onOperation, icon: 'users', iconKind: 'accent', lines: [{ kind: 'ok', num: K.people.accounted, text: 'accounted' }, { kind: 'off', num: K.people.offline, text: 'offline' }] }),
      C.kpi({ label: 'On site', value: K.people.onSite, icon: 'pin', lines: [{ kind: 'info', num: K.people.offshore, text: 'offshore' }, { kind: 'transit', num: K.people.transit, text: 'in transit' }] }),
      C.kpi({ label: 'Assets tracked', value: K.assets.total, lines: [{ kind: 'info', num: K.assets.deployed, text: 'deployed' }, { kind: 'crit', num: K.assets.missing, text: 'require attention' }], delta: { text: K.assets.mobilizedToday + ' mobilized today' }, spark: [612, 620, 631, 640, 655, 662, 671, 684] }),
      C.kpi({ label: 'Assets in transit', value: K.assets.transit, icon: 'truck', lines: [{ kind: 'transit', num: 18, text: 'to MV PAGEO 02' }, { kind: 'transit', num: 9, text: 'returning to base' }] }),
      C.kpi({ label: 'Open alerts', value: K.alerts.open, alert: true, icon: 'bell', iconKind: 'crit', lines: [{ kind: 'crit', num: K.alerts.p1, text: 'P1 critical' }, { kind: 'warn', num: K.alerts.p3, text: 'P3 warning' }], delta: { kind: 'flat', icon: 'wifioff', text: K.devices.mobileOffline + ' devices offline' } })
    ];
    const sos = D.people.find(p => p.kind === 'crit');
    const map = C.map({ scene: 'coast', height: 460, flush: true,
      fences: [{ pts: '46,28 64,22 72,44 58,56 44,48', label: 'Offshore Work Area — Alpha' }, { pts: '80,10 96,8 97,24 82,26', kind: 'restricted', label: 'Restricted Zone' }, { pts: '12,66 24,64 26,80 14,82', label: 'Port Jetty 3' }],
      markers: [
        { kind: 'vessel', x: 56, y: 40, label: 'MV PAGEO 02', sub: '12 personnel · 18 assets' }, { kind: 'vessel', x: 64, y: 32, label: 'MV PAGEO 01' },
        { kind: 'cluster', count: 42, x: 52, y: 47 }, { kind: 'person', x: 60, y: 50, label: 'Fahmi Syaban', popup: 'fahmi' }, { kind: 'person', x: 49, y: 36 },
        { kind: 'person', state: 'crit', x: 88, y: 18, label: sos.name, sub: 'SOS · restricted zone' }, { kind: 'person', state: 'off', x: 20, y: 72 },
        { kind: 'asset', x: 58, y: 44, label: 'MBES-03' }, { kind: 'asset', x: 18, y: 70 }, { kind: 'cluster', cls: 'asset', count: 31, x: 16, y: 76 }, { kind: 'asset', state: 'warn', x: 27, y: 60, label: 'SONAR-012', sub: 'Not seen · 2 days' },
        { kind: 'site', x: 10, y: 56, label: 'PAGEO Base' }, { kind: 'reader', x: 15, y: 64 }, { kind: 'reader', x: 22, y: 78 }, { kind: 'muster', x: 8, y: 60 }
      ],
      popups: [C.popup({ id: 'fahmi', hidden: true, x: 60, y: 50, avatar: 'FS', title: 'Fahmi Syaban', sub: 'Survey Engineer · Project Alpha', kv: [['Status', '<span class="ok">● Active</span>'], ['Last update', '15:42:16'], ['Accuracy', '± 7 m'], ['Battery', '76%']], actions: '<a class="btn xs secondary" href="employee-detail.html">Open profile</a>' + C.btn('History', 'xs ghost') })],
      tr: '<div class="map-panel" style="min-width:230px"><div class="row s8">' + C.sev(1) + '<span class="eyebrow" style="color:var(--s-crit)">Active alert</span><span class="ml-auto t-caption">24 sec ago</span></div><div><div class="strong">SOS signal — ' + sos.name + '</div><div class="t-caption">Inside Restricted Zone · Project Alpha</div></div><div class="row s8">' + C.btn('View location', 'xs primary') + C.btn('Acknowledge', 'xs ghost', null, 'data-ack') + '</div></div>'
    });
    const mapHead = '<div class="row s8"><span class="card-title">Live operational map</span><span class="chip ok sm"><span class="dot ok pulse"></span>Live · 12 sec ago</span></div><div class="row s8">' + C.seg([{ key: 'all', label: 'Combined' }, { key: 'people', label: 'People' }, { key: 'assets', label: 'Assets' }, { key: 'vessels', label: 'Vessels' }], 'all', { sm: true, data: 'layer' }) + C.link('Open live map', 'live-map.html') + '</div>';
    const projects = D.projects.slice(0, 4).map(p => C.entity({ icon: p.id === 'base' ? 'building' : p.status === 'Mobilizing' ? 'anchor' : 'waves', title: p.name, sub: p.type + ' · ' + (p.vessel !== '—' ? p.vessel : p.site), href: p.id === 'base' ? 'locations.html' : 'project-detail.html', right: C.chip(p.kind, p.status, { sm: true }) + '<span>' + p.people[0] + ' / ' + p.people[1] + ' · ' + p.assets + ' assets</span>' }));
    return [
      C.pageHead({ eyebrow: 'Operations Command Center', title: 'One operational picture', sub: 'People, equipment, projects, vessels and safety · ' + K.projects.active + ' active projects · ' + K.projects.offshore + ' offshore',
        actions: C.select('All projects', { icon: 'clipboard', sm: true, style: 'width:200px' }) + C.btn('Export', 'ghost sm', 'download') + C.btn('Start muster', 'primary sm', 'siren') }),
      C.grid(kpis, { cls: 'kpis', style: 'grid-template-columns:repeat(5,minmax(0,1fr))' }),
      C.grid([
        C.col(8, '<div class="card p0"><div class="card-head">' + mapHead + '</div>' + map + '</div>'),
        C.col(4, C.stack([
          C.card({ cls: 'p0', title: 'Alerts', link: { label: 'Alert center', href: 'alerts.html' }, body: '<div class="stack s12" style="padding:16px 20px">' + D.alerts.slice(0, 3).map(a => C.alert(a)).join('') + '</div>' }),
          C.card({ title: 'Device health', right: '<span class="t-caption">Mobile + readers</span>', body: C.hbars([{ label: 'Mobile reporting', pct: 94, val: K.devices.mobileReporting }, { label: 'Mobile offline', pct: 6, val: K.devices.mobileOffline, kind: 'off' }, { label: 'Readers online', pct: 92, val: K.devices.readersOnline }, { label: 'Readers offline', pct: 8, val: K.devices.readersOffline, kind: 'warn' }]) })
        ]))
      ]),
      C.grid([
        C.col(4, C.card({ title: 'Personnel', link: { label: 'View all', href: 'personnel.html' }, body: C.statList([{ kind: 'ok', n: K.people.onOperation, label: 'Active' }, { kind: 'info', n: K.people.onSite, label: 'On site' }, { kind: 'info', n: K.people.offshore, label: 'Offshore' }, { kind: 'transit', n: K.people.transit, label: 'In transit', color: 'var(--s-transit)' }, { kind: 'off', n: K.people.offline, label: 'Offline', color: 'var(--s-offline)' }, { kind: 'crit', n: K.people.alert, label: 'Alert', color: 'var(--s-crit)' }], K.people.onOperation) })),
        C.col(4, C.card({ title: 'Assets', link: { label: 'Registry', href: 'assets.html' }, body: C.statList([{ kind: 'unknown', n: K.assets.total, label: 'Registered', color: 'var(--pageo-steel)' }, { kind: 'ok', n: K.assets.available, label: 'Available', color: 'var(--s-success)' }, { kind: 'info', n: K.assets.deployed, label: 'Deployed' }, { kind: 'transit', n: K.assets.transit, label: 'In transit', color: 'var(--s-transit)' }, { kind: 'warn', n: K.assets.maintenance, label: 'Maintenance', color: 'var(--s-warn)' }, { kind: 'crit', n: K.assets.missing, label: 'Missing', color: 'var(--s-crit)' }], K.assets.total) })),
        C.col(4, C.card({ title: 'Projects', link: { label: 'All projects', href: 'projects.html' }, body: '<div class="stack s4">' + projects.join('') + '</div>' }))
      ]),
      C.grid([
        C.col(8, C.card({ cls: 'p0', title: 'Recent activity', right: C.seg(['All', 'People', 'Assets', 'Alerts'], 0, { sm: true }), body: '<div style="padding:4px 20px">' + C.feed(D.activity) + '</div>', foot: '<div class="row between"><span class="t-caption">Showing ' + D.activity.length + ' of 312 events today</span>' + C.link('Full movement log', 'asset-movement.html') + '</div>' })),
        C.col(4, C.card({ title: 'Personnel accounted', right: '<span class="t-caption">Last 12 h</span>', body: C.bars([62, 66, 74, 80, 88, 92, 95, 97, 96, 94, 95, 95], ['04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15'], { seq: true }) + C.divider() + C.kv([['Peak accounted', '124 · 11:00'], ['Current', K.people.accounted + ' / ' + K.people.onOperation], ['Freshness policy', 'Live &lt; 1 min · Offline &gt; 30 min']]) }))
      ])
    ].join('');
  }
});
