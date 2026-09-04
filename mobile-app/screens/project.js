/* Converted from mobile/project.html (state: Project overview) */
// converted
PN.page("project", {
  title: "Project",
  icon: "clipboard",
  nav: "project",
  time: "15:42",
  render() {
    return `<header class="m-top">
          <div class="m-title"><small>Project Alpha</small>Offshore Survey</div>
          <a class="m-sos-btn" href="sos.html" aria-label="Emergency SOS">SOS</a>
        </header>
        <div class="m-body">
          <div class="m-caption" style="margin-top:-6px">04 Sep — 18 Sep · MV Pageo 02 · Offshore Construction Survey</div>

          <div class="m-card">
            <div class="row between"><span class="eyebrow">My status</span><span class="m-tracking" style="padding:6px 12px;font-size:11px"><span class="dot ok pulse"></span>Tracking active</span></div>
            <div class="m-status-big info">On vessel</div>
            <dl class="m-kv">
              <dt>Vessel</dt><dd>MV Pageo 02</dd>
              <dt>Boarded</dt><dd>11:20</dd>
              <dt>Muster point</dt><dd>B · Deck 2</dd>
            </dl>
          </div>

          <div class="m-card">
            <div class="row between">
              <a class="eyebrow" href="project-team.html" style="display:inline-flex;align-items:center;gap:4px">Team <i data-icon="chevronright" class="ic-14"></i></a>
              <a href="project.html" style="font-size:14px;font-weight:500">View all</a>
            </div>
            <div>
              <div class="m-card-title">12 personnel</div>
              <div class="m-caption"><span class="ok" style="font-weight:600">10 Accounted</span> · <span class="off">2 Offline</span></div>
            </div>
            <div class="m-progress ok"><i style="width:83%"></i></div>
            <div class="row" style="gap:0;padding-left:8px">
              <span class="avatar" style="margin-left:-8px;border:2px solid #fff">FS</span>
              <span class="avatar" style="margin-left:-8px;border:2px solid #fff">AP</span>
              <span class="avatar" style="margin-left:-8px;border:2px solid #fff">RH</span>
              <span class="avatar" style="margin-left:-8px;border:2px solid #fff">AS</span>
              <span class="avatar" style="margin-left:-8px;border:2px solid #fff">BS</span>
              <span class="avatar" style="margin-left:-8px;border:2px solid #fff">DL</span>
              <span class="avatar" style="margin-left:-8px;border:2px solid #fff;background:var(--pageo-mist);color:var(--text-2)">+6</span>
            </div>
          </div>

          <div class="m-section"><span class="eyebrow">My assets</span><a href="my-assets.html">All equipment</a></div>
          <div class="m-list">
            <a class="li ok" href="my-assets.html" style="color:inherit"><span class="st"><i data-icon="check"></i></span><div class="li-body">MBES-03<div class="li-sub">Multibeam Echo Sounder · Deployed</div></div><i data-icon="chevronright"></i></a>
            <a class="li ok" href="my-assets.html" style="color:inherit"><span class="st"><i data-icon="check"></i></span><div class="li-body">GPS-14<div class="li-sub">GNSS Receiver · Deployed</div></div><i data-icon="chevronright"></i></a>
            <a class="li ok" href="my-assets.html" style="color:inherit"><span class="st"><i data-icon="check"></i></span><div class="li-body">Radio-021<div class="li-sub">VHF Handheld · Deployed</div></div><i data-icon="chevronright"></i></a>
          </div>
          <div class="m-caption" style="margin-top:-4px;padding-left:4px">3 / 3 accounted · last scan 10:18</div>

          <div class="m-section"><span class="eyebrow">Mobilization</span></div>
          <div class="m-list">
            <a class="li" href="mobilization.html" style="color:inherit"><i data-icon="truck" class="ic-24"></i><div class="li-body">Mobilization checklist<div class="li-sub">24 / 26 ready · Vessel receiving</div></div><span class="chip warn">2 open</span><i data-icon="chevronright"></i></a>
          </div>

          <a class="m-btn secondary" href="map.html"><i data-icon="map"></i>View project map</a>
        </div>`;
  }
});
