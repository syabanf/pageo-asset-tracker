// handwritten — Activity & location history
(function () {
  const D = window.DATA, me = D.me;
  const body = (inner, cls) => '<div class="m-body ' + (cls || '') + '">' + inner + '</div>';
  PN.page('activity', { title: 'Activity', icon: 'activity', nav: 'activity', time: '15:42', render() {
    return M.top({ title: 'Activity', right: M.sync('ok', 'Synced · 15:42') }) + body(
      C.seg(['Today', 'This week', 'All']).replace('class="seg"', 'class="seg" style="width:100%"') +
      M.tiles([{ label: 'Events today', value: 9, icon: 'activity' }, { label: 'Hours on operation', value: '7.6', kind: 'ok', icon: 'clock' }, { label: 'Scans', value: 4, icon: 'nfc' }]) +
      M.section('Today · 04 Sep', 'Location history', 'activity-location-history.html') +
      M.card(M.timeline(me.today.slice().reverse().concat([{ time: '09:31', kind: 'info', text: 'Vessel boarding', sub: 'MV Pageo 02 · Port Tanjung Priok' }, { time: '08:47', kind: 'transit', text: 'Warehouse', sub: 'Scanned 3 assets · RD-01' }])), '', 'padding:18px 18px 12px') +
      M.section('Yesterday · 03 Sep') +
      M.card(M.timeline([{ time: '17:10', kind: 'ok', text: 'Operation ended', sub: 'Jakarta Base · 8.4 h' }, { time: '14:30', kind: 'transit', text: 'Workshop', sub: 'Pre-mobilization check · MBES-03' }, { time: '08:05', kind: 'ok', text: 'Operation started', sub: 'Jakarta Base' }]), '', 'padding:18px 18px 12px')
    );
  } });
  PN.page('activity-location-history', { title: 'Activity — Location history', icon: 'route', nav: 'activity', time: '15:42', render() {
    return M.top({ back: 'activity.html', small: 'Today · 04 Sep', title: 'Location history' }) + body(
      '<div class="m-card" style="padding:0;overflow:hidden">' + C.map({ scene: 'coast', height: 230, flush: true, legend: false, ctl: false, tracks: [{ pts: '14,78 22,70 30,62 42,52 54,44 60,40', color: '#0B76A3' }], markers: [{ kind: 'site', x: 14, y: 78, label: 'Jakarta Base' }, { kind: 'site', x: 30, y: 62, label: 'Tanjung Priok' }, { kind: 'me', x: 60, y: 40 }] }) + '</div>' +
      M.list([{ icon: 'building', iconCls: 'slate', title: 'Jakarta Base', sub: '07:53 – 08:47', right: '54 min' }, { icon: 'warehouse', iconCls: 'amber', title: 'Warehouse', sub: '08:47 – 09:20', right: '33 min' }, { icon: 'anchor', iconCls: 'ocean', title: 'Port Tanjung Priok', sub: '09:20 – 10:02', right: '42 min' }, { icon: 'ship', iconCls: 'green', title: 'MV Pageo 02', sub: '10:02 – now', right: '5 h 40 min' }]) +
      '<div class="m-note">History is retained for 90 days and visible to you and your operations team.</div>'
    );
  } });
})();
