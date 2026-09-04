// handwritten — Emergency muster
(function () {
  const body = (inner, cls) => '<div class="m-body ' + (cls || '') + '">' + inner + '</div>';
  function requested(offline) {
    return M.banner('crit', 'Emergency muster · MV Pageo 02', '15:38') + (offline ? M.banner('offline', 'Offline · confirmation will sync when connected') : '') + body(
      '<div style="height:8px"></div>' + M.ring('crit', 'flag') + '<div class="eyebrow crit">Muster requested</div><div class="m-h1">Proceed to<br>Muster Point B</div>' +
      M.card(M.kv([['Location', 'Deck 2 · Starboard'], ['Distance', '180 m'], ['Requested', '15:38 by QHSE'], ['Your team', '33 / 39 confirmed']]), '', 'width:100%;text-align:left') +
      '<div class="grow"></div>' + M.btn(offline ? "I'M SAFE (will sync)" : "I'M SAFE", 'success lg', 'check', 'muster-confirmed.html') + M.btn('I need help', 'tertiary', 'lifebuoy', 'sos.html', 'style="color:var(--s-crit)"'),
      'center');
  }
  PN.page('muster', { title: 'Emergency muster', icon: 'flag', nav: 'none', time: '15:38', render() { return requested(false); } });
  PN.page('muster-offline', { title: 'Emergency muster — Offline', icon: 'flag', nav: 'none', time: '15:38', offline: true, render() { return requested(true); } });
  PN.page('muster-confirmed', { title: 'Emergency muster — Confirmed', icon: 'flag', nav: 'none', time: '15:42', render() {
    return M.top({ small: 'Emergency muster', title: 'MV Pageo 02', sos: false }) + body(
      M.hero({ kind: 'green', body: '<div class="row s12" style="justify-content:center"><span class="ai green" style="background:rgba(255,255,255,.2);box-shadow:none">' + C.icon('check') + '</span></div><div class="m-hero-title" style="text-align:center;font-size:30px;letter-spacing:.04em">SAFE</div><div class="m-hero-sub" style="text-align:center">Your status has been reported to QHSE.</div><div class="big" style="text-align:center;font-size:36px">15:42:12</div>', stats: [['Muster point', 'B · Deck 2'], ['Via', 'App'], ['Team', '33 / 39']] }) +
      M.card('<div class="m-label">Stay at the muster point</div><div class="m-caption">Remain until QHSE stands the muster down. You will be notified on this phone.</div>' + M.progress(85, 'ok') + '<div class="m-caption tnum">33 of 39 confirmed · 4 not confirmed · 2 offline</div>', '', 'width:100%') +
      '<div class="grow"></div>' + M.btn('Back to home', 'secondary', 'home', 'home.html'),
      'center');
  } });
})();
