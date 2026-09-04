// handwritten — Project, Team, Mobilization
(function () {
  const D = window.DATA, me = D.me;
  const body = (inner, cls) => '<div class="m-body ' + (cls || '') + '">' + inner + '</div>';
  const teamList = [['Andi Pratama', 'Party Chief · Supervisor', 'ok', 'On vessel'], ['Fahmi Syaban', 'Survey Engineer · You', 'ok', 'On vessel'], ['Rizky Hakim', 'Hydrographic Surveyor', 'ok', 'On vessel'], ['Agus Setiawan', 'ROV Pilot', 'ok', 'On vessel'], ['Budi Santoso', 'Vessel Master', 'ok', 'On vessel'], ['Dewi Lestari', 'Data Processor', 'ok', 'On vessel'], ['Hendra Wijaya', 'Geophysicist', 'ok', 'On vessel'], ['Putri Anggraini', 'QHSE Officer', 'info', 'Active'], ['Yoga Prasetyo', 'Survey Technician', 'info', 'Active'], ['Sari Wulandari', 'Medic', 'info', 'Active'], ['Bayu Nugroho', 'Deck Technician', 'off', 'Offline'], ['Dimas Prasetyo', 'Surveyor', 'off', 'Offline']];

  PN.page('project', { title: 'Project', icon: 'clipboard', nav: 'project', time: '15:42', render() {
    return M.top({ small: 'Project Alpha', title: 'Offshore Survey' }) + body(
      M.hero({ kind: 'green', eyebrow: 'My status', title: 'On vessel · ' + me.vessel, top: M.tracking(true), stats: [['Boarded', '11:20'], ['Muster', 'B · Deck 2'], ['Day', '1 of 15']], actions: M.btn('Project map', 'white', 'map', 'map.html') + M.btn('Team', 'glass', 'users', 'project-team.html') }) +
      M.tiles([{ label: 'Personnel', value: '24<small style="font-size:14px;color:var(--text-2)"> / 26</small>', icon: 'users' }, { label: 'Equipment', value: 47, icon: 'diamond', kind: 'ok' }, { label: 'Open alerts', value: 1, icon: 'bell', kind: 'crit' }]) +
      M.card('<div class="row between"><div><div class="m-label">Team accountability</div><div class="m-caption">10 accounted · 2 offline</div></div>' + M.avatars(['AP', 'FS', 'RH', 'AS'], 8) + '</div>' + M.progress(83, 'ok')) +
      M.section('My equipment', 'All equipment', 'my-assets.html') +
      M.list([{ icon: 'diamond', iconCls: 'ocean', title: 'MBES-03', sub: 'Multibeam Echo Sounder · Deployed', href: 'asset-detail.html', chev: true }, { icon: 'navigation', iconCls: 'green', title: 'GPS-14', sub: 'GNSS Receiver · Deployed', href: 'asset-detail.html', chev: true }, { icon: 'radio', iconCls: 'violet', title: 'Radio-021', sub: 'VHF Handheld · Deployed', href: 'asset-detail.html', chev: true }]) +
      M.section('Mobilization', 'Stages', 'mobilization-stages.html') +
      '<a href="mobilization.html" class="m-card" style="color:inherit"><div class="row s12"><span class="ai sm amber">' + C.icon('truck') + '</span><div class="grow"><div class="m-label">Equipment checklist · 24 / 26 ready</div><div class="m-caption">Cable Set-07 not detected · Battery Pack-04 pending</div></div>' + M.chip('warn', '1', 'warning') + '</div>' + M.progress(92, 'warn') + '</a>'
    );
  } });

  PN.page('project-team', { title: 'Project — Team', icon: 'users', nav: 'project', time: '15:42', render() {
    return M.top({ back: 'project.html', small: 'Project Alpha', title: 'Team' }) + body(
      M.tiles([{ label: 'On vessel', value: 7, kind: 'ok', icon: 'ship' }, { label: 'Active', value: 3, icon: 'user' }, { label: 'Offline', value: 2, kind: 'off', icon: 'wifioff' }]) +
      M.list(teamList.map(function (p) { return { avatar: C.initials(p[0]), title: p[0], sub: p[1], right: M.chip(p[2] === 'ok' ? 'active' : p[2] === 'info' ? 'info' : 'off', p[3]) }; })) +
      '<div class="m-note">Status is shared by each teammate’s device while the operation is active.</div>'
    );
  } });

  PN.page('mobilization', { title: 'Mobilization checklist', icon: 'truck', nav: 'project', time: '10:18', render() {
    return M.top({ back: 'project.html', small: 'Mobilization', title: 'Project Alpha', right: '<a href="mobilization-stages.html" class="m-chip info">Stages</a>' }) + body(
      M.hero({ kind: 'amber', eyebrow: 'Equipment checklist', body: '<div class="big">24 <small>/ 26 ready</small></div>' + M.progress(92), stats: [['Ready', '24'], ['Attention', '1'], ['Pending', '1']], sub: 'Vessel receiving · MV Pageo 02 · Port Tanjung Priok' }) +
      M.section('Items', 'Scanned first') +
      M.list([{ state: 'ok', title: 'MBES-03', sub: 'Multibeam Echo Sounder', right: '10:18' }, { state: 'ok', title: 'GPS-04', sub: 'GNSS Receiver', right: '10:19' }, { state: 'ok', title: 'Gyro-01', sub: 'Motion Reference Unit', right: '10:21' }, { state: 'ok', title: 'Laptop-14', sub: 'Acquisition Laptop', right: '10:22' }, { state: 'ok', title: 'SVP-07', sub: 'Sound Velocity Profiler', right: '10:24' }, { state: 'warn', title: 'Cable Set-07', sub: 'Not detected at dispatch gate', right: M.chip('warn', 'Attention') }, { state: 'pending', title: 'Battery Pack-04', sub: 'Pending receiving scan', right: '—' }]) +
      '<div class="m-note">Showing 7 of 26 items · scanned items are listed first</div>' +
      M.btn('Scan equipment', 'primary', 'scanline', 'scan.html')
    );
  } });

  PN.page('mobilization-stages', { title: 'Mobilization — Stages', icon: 'truck', nav: 'project', time: '11:20', render() {
    return M.top({ back: 'project.html', small: 'Mobilization', title: 'Project Alpha', right: '<a href="mobilization.html" class="m-chip">Checklist</a>' }) + body(
      M.card(C.eyebrow('Stages · 26 / 28 received') + M.timeline([{ time: '16:40', kind: 'ok', text: 'Prepared', sub: '03 Sep · Warehouse, Jakarta Base · 28 / 28' }, { time: '09:12', kind: 'ok', text: 'Dispatch gate', sub: '04 Sep · 27 / 28 scanned · Cable Set-07 not detected' }, { time: '10:45', kind: 'ok', text: 'Port', sub: '04 Sep · Tanjung Priok · 27 / 28' }, { time: '11:20', kind: 'info', text: 'Vessel receiving · current', sub: 'MV Pageo 02 · 26 / 28 received' }, { time: '—', kind: 'unknown', text: 'Deployed', sub: 'Pending · Offshore site' }])) +
      M.card('<div class="row s12"><span class="ai sm ocean">' + C.icon('info') + '</span><div><div class="m-label">2 items not yet received on MV Pageo 02</div><div class="m-caption">Cable Set-07 · Battery Pack-04. Receiving can be confirmed now; the outstanding items stay open on the checklist.</div></div></div>', 'tinted') +
      M.btn('Confirm receiving', 'primary', 'checkcircle', 'mobilization.html') + M.btn('Scan outstanding items', 'tertiary', 'scanline', 'scan.html')
    );
  } });
})();
