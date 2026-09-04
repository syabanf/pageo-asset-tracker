// handwritten — Home (tracking on / off) and Offline states
(function () {
  const D = window.DATA, me = D.me;
  const body = (inner, cls) => '<div class="m-body ' + (cls || '') + '">' + inner + '</div>';
  const actions = M.actions([
    { icon: 'pin', label: 'Check in', kind: 'ocean', href: 'check-in.html' },
    { icon: 'scanline', label: 'Scan', kind: 'green', href: 'scan.html' },
    { icon: 'diamond', label: 'Equipment', kind: 'amber', href: 'my-assets.html' },
    { icon: 'map', label: 'Map', kind: 'violet', href: 'map.html' }
  ]);
  const team = M.card('<div class="row between"><div><div class="m-label">Team on board</div><div class="m-caption">MV Pageo 02 · 12 personnel</div></div>' + M.avatars(['AP', 'RH', 'PA', 'DL'], 8) + '</div>' + M.progress(83, 'ok') + '<div class="row between m-caption"><span><b class="ok">10</b> accounted</span><span><b>2</b> offline</span></div>');
  function today(items, tag) {
    return M.section('Today', 'All activity', 'activity.html') + M.card(M.timeline(items.map(function (t, i) { return tag && i < 2 ? Object.assign({ tag: 'Pending sync' }, t) : t; })), '', 'padding:18px 18px 12px');
  }
  const recent = me.today.slice().reverse().slice(0, 4);

  PN.page('home', { title: 'Home', icon: 'home', nav: 'home', time: '15:42', render() {
    return M.top({ brand: true, right: M.sync('ok', 'Synced') }) + body(
      M.greeting('Good afternoon,<br>' + me.first, 'Thursday, 04 September') +
      M.hero({ eyebrow: 'Current operation', title: me.project, sub: me.role + ' · ' + me.vessel + ' · started ' + me.started, top: M.tracking(true), stats: [['GPS', '± ' + me.acc + ' m'], ['Last sync', 'Now'], ['Battery', me.battery + '%']], actions: M.btn('View project', 'white', 'arrowright', 'project.html') }) +
      actions + team + today(recent)
    );
  } });

  PN.page('home-location-sharing-off', { title: 'Home — Location sharing off', icon: 'home', nav: 'home', time: '07:51', render() {
    return M.top({ brand: true, right: M.sync('ok', 'Synced') }) + body(
      M.greeting('Good morning,<br>' + me.first, 'Thursday, 04 September') +
      M.hero({ kind: 'dark', top: M.tracking(false), title: 'Your operation has not started', sub: 'Location is shared only while you are assigned to an operation. Starting shares your position with the Project Alpha operations team.', actions: M.btn('Start operation', 'white', 'play', 'home.html') + M.btn('How it works', 'glass', 'book', 'profile-how-tracking-works.html') }) +
      M.card(C.eyebrow('Assigned project') + '<div class="m-card-title">' + me.project + '</div><div class="m-caption">' + me.role + ' · Mobilization 04 Sep · ' + me.vessel + '</div>' + M.kv([['Muster point', me.muster], ['Supervisor', me.supervisor], ['Team', '12 personnel']])) +
      M.section('Before you start') +
      M.list([{ state: 'ok', title: 'Mobile permissions', sub: 'Location · Notifications' }, { state: 'ok', title: 'Equipment assigned', sub: '3 items · MBES-03, GPS-14, Radio-021', href: 'my-assets.html', chev: true }, { state: 'warn', title: 'Battery 38%', sub: 'Charge before boarding' }])
    );
  } });

  PN.page('offline', { title: 'Offline mode', icon: 'wifioff', nav: 'home', time: '15:42', offline: true, render() {
    return M.banner('offline', 'Offline', '7 events stored locally') + M.top({ brand: true, right: '<a href="offline-sync-status.html" class="m-sync pending">' + C.icon('alert') + '7 pending</a>' }) + body(
      M.greeting('Good afternoon,<br>' + me.first, 'Thursday, 04 September') +
      M.hero({ kind: 'amber', eyebrow: 'Current operation', title: me.project, sub: me.role + ' · ' + me.vessel, top: M.tracking(true), stats: [['GPS', '± ' + me.acc + ' m'], ['Last sync', '14:20'], ['Battery', '58%']], actions: M.btn('Sync status', 'glass', 'refresh', 'offline-sync-status.html') }) +
      actions +
      M.card('<div class="row s12"><span class="ai sm amber">' + C.icon('wifioff') + '</span><div><div class="m-label">Will sync when connection is available</div><div class="m-caption">Check-ins, scans and positions are stored on this phone and sent automatically. You can keep working.</div></div></div>', 'warn') +
      today(recent, true)
    );
  } });

  PN.page('offline-syncing', { title: 'Offline — Syncing', icon: 'wifioff', nav: 'home', time: '15:44', render() {
    return '<div class="m-banner" style="background:linear-gradient(90deg,#1A9BCB,#0B76A3);color:#fff">' + C.icon('refresh') + 'Syncing 7 events…<span class="right">Connected</span></div>' + M.top({ brand: true, right: M.sync('busy', 'Syncing…') }) + body(
      M.greeting('Good afternoon,<br>' + me.first, 'Thursday, 04 September') +
      M.hero({ eyebrow: 'Current operation', title: me.project, sub: me.role + ' · ' + me.vessel, top: M.tracking(true), stats: [['GPS', '± ' + me.acc + ' m'], ['Last sync', 'In progress'], ['Battery', '58%']] }) +
      M.card(C.eyebrow('Sync') + '<div class="row between"><span class="m-label">Sending stored events</span><b class="tnum">3 / 7</b></div>' + M.progress(43) + '<div class="m-caption">Check-ins, scans and positions to Project Alpha. Nothing to do on your side.</div>') +
      actions + today(recent.slice(0, 3))
    );
  } });

  PN.page('offline-sync-status', { title: 'Offline — Sync status', icon: 'wifioff', nav: 'home', time: '15:42', offline: true, render() {
    return M.top({ back: 'offline.html', title: 'Sync status', right: M.chip('warn', 'Offline', 'wifioff') }) + body(
      M.tiles([{ label: 'Pending', value: 7, kind: 'warn', icon: 'clock' }, { label: 'Delivered today', value: 128, kind: 'ok', icon: 'checkcircle' }, { label: 'Last sync', value: '14:20', icon: 'refresh' }]) +
      M.section('Pending events (7)') +
      M.list([{ icon: 'pin', iconCls: 'ocean', title: 'Check-in', sub: 'Site check-in · MV Pageo 02', right: '14:31' }, { icon: 'nfc', iconCls: 'green', title: 'Scan MBES-03', sub: 'Custody confirmed · RD-M03', right: '14:40' }, { icon: 'navigation', iconCls: 'violet', title: 'Position ×5', sub: '14:45 – 15:42 · ± 7–9 m', right: '15:42' }]) +
      M.section('Indicator states') +
      M.list([{ icon: 'checkcircle', iconCls: 'green', title: 'Synced', sub: 'All events delivered' }, { icon: 'refresh', iconCls: 'ocean', title: 'Syncing', sub: 'Connection restored, stored events are being sent' }, { icon: 'alert', iconCls: 'amber', title: 'Offline · 12', sub: 'No connection, count of events waiting to send' }]) +
      '<div class="m-note">Events are kept on this phone until the server confirms them. SOS and muster use SMS fallback when available.</div>' +
      M.btn('Retry sync', 'secondary', 'refresh', 'offline-syncing.html')
    );
  } });
})();
