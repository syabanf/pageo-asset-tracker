// handwritten — SOS
(function () {
  const D = window.DATA, me = D.me;
  const body = (inner, cls, style) => '<div class="m-body ' + (cls || '') + '"' + (style ? ' style="' + style + '"' : '') + '>' + inner + '</div>';
  PN.page('sos', { title: 'SOS', icon: 'siren', nav: 'none', time: '15:42', render() {
    return M.top({ close: 'home.html', title: 'Emergency SOS', sos: false }) + body(
      '<div class="eyebrow crit">Press and hold</div>' + '<div class="sos-hold" data-route="sos-sent"><div class="ring"></div><div class="inner"><b>SOS</b><span>Hold 2 seconds</span></div></div>' +
      '<div class="m-caption" style="max-width:28ch">Sends your location and project information to QHSE and your supervisor.</div>' +
      M.card(M.kv([['Position', me.lat + ', ' + me.lng + ' · ± ' + me.acc + ' m'], ['Project', 'Alpha · ' + me.vessel], ['Battery', me.battery + '%']]), '', 'width:100%;text-align:left') +
      '<div class="grow"></div>' + M.btn('Not an emergency — go back', 'tertiary', null, 'home.html'),
      'center');
  } });
  PN.page('sos-sent', { title: 'SOS — Sent', icon: 'siren', nav: 'none', time: '15:42', render() {
    return M.top({ title: 'Emergency SOS', sos: false }) + body(
      M.hero({ kind: 'red', body: '<div class="row s12" style="justify-content:center"><span class="ai" style="background:rgba(255,255,255,.2);box-shadow:none">' + C.icon('siren') + '</span></div><div class="eyebrow" style="text-align:center">SOS sent</div><div class="m-hero-title" style="text-align:center;font-size:26px">Help is on the way</div><div class="m-hero-sub" style="text-align:center">Your location and project information have been transmitted.</div><div class="big" style="text-align:center;font-size:36px">15:42:08</div>' }) +
      M.list([{ state: 'ok', title: 'Received by QHSE Officer', sub: 'Putri Anggraini · 15:42:10' }, { state: 'ok', title: 'Supervisor notified', sub: 'Andi Pratama · 15:42:11' }, { state: 'ok', title: 'Vessel master notified', sub: 'Budi Santoso · MV Pageo 02 · 15:42:11' }]) +
      '<div class="grow"></div>' + M.btn('Call emergency contact', 'destructive solid', 'phone') + M.btn('Cancel SOS (false alarm)', 'tertiary', null, 'sos-confirm-cancel.html')
    );
  } });
  PN.page('sos-confirm-cancel', { title: 'SOS — Confirm cancel', icon: 'siren', nav: 'none', time: '15:43', render() {
    return M.top({ title: 'Emergency SOS', sos: false }) + body(
      M.card('<div class="row s12"><span class="ai sm red">' + C.icon('alert') + '</span><div class="m-h3">Cancel SOS?</div></div><div class="m-caption">This will notify QHSE that you are safe. Responders already on the way will be stood down.</div>' + M.kv([['Sent', '15:42:08'], ['Active for', '1 min 12 s']]) + M.btn("Yes, I'm safe — cancel SOS", 'dark', 'check', 'home.html') + M.btn('Keep SOS active', 'destructive', null, 'sos-sent.html'), '', 'width:100%;box-shadow:var(--shadow-modal)'),
      'center', 'background:rgba(23,26,28,.45)');
  } });
})();
