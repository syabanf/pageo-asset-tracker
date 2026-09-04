// handwritten — Check-in flow
(function () {
  const D = window.DATA, me = D.me;
  const body = (inner, cls) => '<div class="m-body ' + (cls || '') + '">' + inner + '</div>';
  const map = (outside) => '<div class="m-card" style="padding:0;overflow:hidden">' + C.map({ scene: 'offshore', height: 170, flush: true, legend: false, ctl: false, fences: [{ pts: '30,25 70,25 70,75 30,75', label: 'Vessel — MV Pageo 02' }], markers: [{ kind: 'vessel', x: 50, y: 50, label: 'MV Pageo 02' }, { kind: 'me', x: outside ? 18 : 46, y: outside ? 62 : 44, accuracy: outside ? 90 : 60 }] }) + '</div>';
  const options = (sel) => M.list([['Vessel boarding', 'Records you as on board', 'ship', 'ocean'], ['Site check-in', 'Marks you present at the work area', 'pin', 'green'], ['Site check-out', 'Leaves the work area', 'logout', 'amber'], ['End operation', 'Stops location sharing', 'square', 'slate']].map(function (o, i) { return { icon: o[2], iconCls: o[3], title: o[0], sub: o[1], right: C.radio(i === sel) }; }));

  PN.page('check-in', { title: 'Check-in', icon: 'pin', nav: 'home', time: '11:20', render() {
    return M.top({ back: 'home.html', small: 'Check in', title: me.vessel }) + body(
      map(false) +
      M.card('<div class="row s12"><span class="ai sm green">' + C.icon('checkcircle') + '</span><div><div class="m-label">You are inside the geofence</div><div class="m-caption">Vessel — MV Pageo 02 · ± 7 m · GPS good</div></div></div>', 'ok') +
      M.section('What are you recording?') + options(0) +
      M.btn('Confirm boarding', 'primary', 'ship', 'check-in-confirmed.html') +
      '<div class="m-note">Recorded at 11:20 WIB · syncs automatically</div>'
    );
  } });

  PN.page('check-in-confirmed', { title: 'Check-in — Confirmed', icon: 'pin', nav: 'home', time: '11:20', render() {
    return M.top({ small: 'Check in', title: me.vessel, sos: false }) + body(
      M.ring('ok', 'check') + '<div class="eyebrow ok">Boarding confirmed</div><div class="m-h1">You’re on<br>' + me.vessel + '</div>' +
      M.card(M.kv([['Time', '11:20:41'], ['Muster point', me.muster], ['Supervisor', me.supervisor], ['Vessel master', 'Capt. Slamet Riyadi']]) + '<div class="m-caption">Your supervisor and the vessel master can now see you on the manifest.</div>', '', 'width:100%;text-align:left') +
      M.btn('View project', 'secondary', 'clipboard', 'project.html') + M.btn('Back to home', 'tertiary', null, 'home.html'),
      'center');
  } });

  PN.page('check-in-outside-geofence', { title: 'Check-in — Outside geofence', icon: 'pin', nav: 'home', time: '11:02', render() {
    return M.top({ back: 'home.html', small: 'Check in', title: me.vessel }) + body(
      map(true) +
      M.card('<div class="row s12"><span class="ai sm amber">' + C.icon('warning') + '</span><div><div class="m-label">You are 420 m from MV Pageo 02</div><div class="m-caption">Check-in is only available inside the vessel geofence.</div></div></div><div class="row between"><span class="m-caption">GPS accuracy</span>' + M.chip('warn', '± 32 m · Low', 'warning') + '</div>', 'warn') +
      M.section('What are you recording?') + options(0) +
      M.btn('Confirm boarding', 'primary disabled', 'ship') + M.btn('Refresh position', 'tertiary', 'refresh', 'check-in.html')
    );
  } });
})();
