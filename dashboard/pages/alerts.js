// handwritten — Alert center (filterable queue with acknowledge / resolve)
(function () {
  const SEV = { 1: 'Critical', 2: 'High', 3: 'Warning', 4: 'Information' };
  const trend = C.card({ title: 'Alerts · last 7 days', body: C.areaChart({ h: 150, labels: ['29 Aug', '30', '31', '01 Sep', '02', '03', '04'], series: [{ label: 'P3–P4', values: [5, 7, 4, 6, 3, 8, 5], color: '#168FBF' }, { label: 'P1–P2', values: [1, 2, 0, 1, 1, 2, 2], color: '#C43D3D', fillOpacity: .08 }] }) });
  const bySev = C.card({ title: 'Open by severity', body: C.donut({ size: 130, thickness: 18, centerLabel: 'open', parts: [{ label: 'P1 Critical', value: 1, color: '#C43D3D' }, { label: 'P2 High', value: 1, color: '#E0642F' }, { label: 'P3 Warning', value: 2, color: '#D89414' }, { label: 'P4 Information', value: 2, color: '#168FBF' }] }) });
  const mtta = C.card({ title: 'Response', body: C.kvGrid([['Mean time to acknowledge', '4 min 12 s', 'big'], ['Acknowledged today', '11'], ['Resolved this week', '48'], ['SLA P1', '≤ 2 min · <span class="ok">met</span>']]) });
  const reg = PN.registry({
    coll: 'alerts', noun: 'alerts', eyebrow: 'Operations', title: 'Alert Center', sub: 'People and assets · one queue, one severity scale · P1 critical → P4 information',
    placeholder: 'Search alert, person, asset or project', emptyIcon: 'bell',
    actions: C.btn('Alert rules', 'ghost sm', 'settings') + C.btn('Acknowledge all', 'secondary sm', 'checkcircle', 'data-bound="1" id="ack-all"'),
    extra: C.grid([C.col(6, trend), C.col(3, bySev), C.col(3, mtta)]),
    kpis: [
      { label: 'Open', value: r => r.filter(x => !x.acked).length, icon: 'bell', iconKind: 'crit', filter: { key: 'state', value: 'open' }, filterLabel: 'State' },
      { label: 'P1 critical', value: r => r.filter(x => x.sev === 1).length, icon: 'siren', iconKind: 'crit', filter: { key: 'sev', value: '1' }, filterLabel: 'Severity' },
      { label: 'P2 high', value: r => r.filter(x => x.sev === 2).length, icon: 'warning', iconKind: 'warn', filter: { key: 'sev', value: '2' }, filterLabel: 'Severity' },
      { label: 'P3 warning', value: r => r.filter(x => x.sev === 3).length, icon: 'alert', iconKind: 'warn', filter: { key: 'sev', value: '3' }, filterLabel: 'Severity' },
      { label: 'P4 information', value: r => r.filter(x => x.sev === 4).length, icon: 'info', filter: { key: 'sev', value: '4' }, filterLabel: 'Severity' },
      { label: 'Acknowledged', value: r => r.filter(x => x.acked).length, icon: 'checkcircle', iconKind: 'ok', filter: { key: 'state', value: 'acked' }, filterLabel: 'State' }
    ],
    labelFor: (k, v) => k === 'sev' ? 'P' + v + ' ' + SEV[v] : v === 'open' ? 'Open' : 'Acknowledged',
    search: (r, q) => (r.title + ' ' + r.who + ' ' + r.project + ' ' + r.type).toLowerCase().indexOf(q) >= 0,
    filters: [{ key: 'type', label: 'Type', icon: 'layers', options: ['Human', 'Asset'] }, { key: 'project', label: 'Project', icon: 'clipboard' }],
    cols: [
      { key: 'sev', label: 'Sev', render: r => C.sev(r.sev), width: '60px' },
      { key: 'title', label: 'Alert', render: r => '<div class="cell-entity"><div><span class="name">' + C.esc(r.title) + '</span><div class="sub">' + (r.meta || []).join(' · ') + '</div></div></div>' },
      { key: 'type', label: 'Type', render: r => C.chip('neutral', r.type, { sm: true, dot: false }) },
      { key: 'who', label: 'Subject' },
      { key: 'project', label: 'Project' },
      { key: 'time', label: 'Received', num: true, render: r => '<div>' + C.esc(r.time) + '<div class="t-caption">' + C.esc(r.when) + '</div></div>' },
      { key: 'state', label: 'State', render: r => r.acked ? C.chip('ok', 'Acknowledged', { sm: true }) : C.chip('crit', 'Open', { sm: true }) },
      { key: '_a', label: '', cls: 'actions', render: r => r.acked ? C.btn('Resolve', 'xs secondary', null, 'data-bound="1" data-resolve="' + r.id + '"') : C.btn('Acknowledge', 'xs primary', null, 'data-bound="1" data-ackid="' + r.id + '"') }
    ],
    rowId: r => r.id, detailHref: () => 'alerts.html', editHref: () => 'alerts.html', deleteLabel: r => r.title, deleteText: 'Deleting an alert removes it from the queue without a resolution note.',
    extraMenu: (r, draw) => ({ icon: 'map', label: 'View on live map', onClick: () => PN.route('live-map') }),
    after: function (root, draw) {
      root.addEventListener('click', function (e) {
        const a = e.target.closest('[data-ackid]'); if (a) { PN.store.update('alerts', a.getAttribute('data-ackid'), { acked: true, when: 'acknowledged 15:42' }); PN.toast('Acknowledged · 15:42:31 by Operations Manager'); draw(); return; }
        const rs = e.target.closest('[data-resolve]'); if (rs) { const id = rs.getAttribute('data-resolve'); PN.modal({ title: 'Resolve alert', body: C.textInput({ name: 'note', label: 'Resolution note', textarea: true, placeholder: 'What was done? This note is kept with the alert history.', required: true }), actions: C.btn('Cancel', 'ghost', null, 'data-close') + C.btn('Resolve', 'primary', 'check', 'data-confirm'), onConfirm: function (ov) { const n = ov.querySelector('[name=note]').value.trim(); if (!n) { ov.querySelector('.field').classList.add('invalid'); return false; } PN.store.remove('alerts', id); PN.toast('Resolved · note saved to alert history'); draw(); } }); return; }
        if (e.target.closest('#ack-all')) { PN.store.all('alerts').forEach(function (x) { if (!x.acked) PN.store.update('alerts', x.id, { acked: true }); }); PN.toast('All open alerts acknowledged'); draw(); }
      });
    }
  });
  // state is a derived field: expose it on records for the generic filter
  const origAll = PN.store.all;
  PN.page('alerts', { title: 'Alert Center', icon: 'bell', nav: 'alerts', crumb: 'Global / Operations / Alerts', render: function () { PN.store.all('alerts').forEach(function (a) { a.state = a.acked ? 'acked' : 'open'; }); return reg.render(); }, after: function (stage) { PN.store.all('alerts').forEach(function (a) { a.state = a.acked ? 'acked' : 'open'; }); const d = reg.after; d(stage); } });
})();
