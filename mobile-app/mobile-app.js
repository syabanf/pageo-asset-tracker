/* Mobile Field App — app bootstrap: device frame, demo screen menu, scan auto-advance */
PN.app({
  kind: 'mobile', home: 'login', title: 'PAGEO Field App',
  setup() {
    document.body.insertAdjacentHTML('beforeend', '<div class="app-note"><b>PAGEO Field App</b><span>Open on a phone for full screen · desktop shows the device frame</span></div><div class="demo-menu"><div class="dm-list hide" id="dm-list"></div><button class="dm-btn" id="dm-btn">' + PN.icon('smartphone') + '<span>Screens</span>' + PN.icon('chevrondown') + '</button></div>');
    const list = document.getElementById('dm-list');
    const groups = [['Onboarding', ['login', 'login-error']], ['Home', ['home-location-sharing-off', 'home', 'check-in', 'check-in-confirmed', 'check-in-outside-geofence']], ['Project & equipment', ['project', 'project-team', 'my-assets', 'my-assets-needs-confirmation', 'asset-detail', 'asset-detail-report-issue', 'scan', 'scan-detected', 'scan-not-recognized', 'mobilization', 'mobilization-stages']], ['Map & activity', ['map', 'map-asset-selected', 'activity', 'activity-location-history']], ['Safety', ['muster', 'muster-confirmed', 'muster-offline', 'sos', 'sos-sent', 'sos-confirm-cancel']], ['Offline & profile', ['offline', 'offline-syncing', 'offline-sync-status', 'profile', 'profile-how-tracking-works']]];
    let s = '';
    groups.forEach(function (g) { s += '<div class="eyebrow">' + g[0] + '</div>'; g[1].forEach(function (id) { const p = PN.pages[id]; if (p) s += '<a href="#' + id + '" data-id="' + id + '">' + PN.icon(p.icon) + p.title + '</a>'; }); });
    list.innerHTML = s;
    document.getElementById('dm-btn').addEventListener('click', function (e) { e.stopPropagation(); list.classList.toggle('hide'); });
    document.addEventListener('click', function () { list.classList.add('hide'); });
    list.addEventListener('click', function (e) { const a = e.target.closest('a'); if (a) { e.preventDefault(); PN.route(a.getAttribute('data-id')); list.classList.add('hide'); } });
  },
  onRoute(id) {
    document.querySelectorAll('#dm-list a').forEach(function (a) { a.classList.toggle('active', a.getAttribute('data-id') === id); });
    // Scanning screen advances to "detected" after a short delay, like a real reader session
    if (id === 'scan') { clearTimeout(window.__scanT); window.__scanT = setTimeout(function () { if (PN.current() === 'scan') PN.route('scan-detected'); }, 2400); }
  }
});
