/* Converted from mobile/offline.html (state: Syncing) */
// converted
PN.page("offline-syncing", {
  title: "Offline — Syncing",
  icon: "wifioff",
  nav: "home",
  time: "15:44",
  hidden: true,
  render() {
    return `<div class="m-banner" style="background:var(--accent-bg);color:var(--pageo-deep)"><i data-icon="refresh"></i>Syncing 7 events…<span class="right">Connected</span></div>
        <header class="m-top">
          <span class="brand" data-logo></span>
          <span class="grow"></span>
          <span class="m-sync busy"><i data-icon="refresh"></i>Syncing…</span>
          <a class="m-sos-btn" href="sos.html" aria-label="Emergency SOS">SOS</a>
        </header>
        <div class="m-body">
          <div>
            <div class="m-caption">Thursday, 04 September</div>
            <div class="m-h1">Good afternoon,<br>Fahmi</div>
          </div>

          <div class="m-card">
            <div class="row between"><span class="eyebrow">Current status</span><span class="m-tracking" style="padding:6px 12px;font-size:11px"><span class="dot ok pulse"></span>Tracking active</span></div>
            <div class="m-status-big ok">On operation</div>
            <dl class="m-kv">
              <dt>GPS</dt><dd class="ok">Good · ± 7 m</dd>
              <dt>Last sync</dt><dd class="info">In progress</dd>
              <dt>Battery</dt><dd>58%</dd>
            </dl>
            <div class="m-btn-row">
              <a class="m-btn dark" href="check-in.html"><i data-icon="pin"></i>Check in</a>
              <a class="m-btn secondary" href="scan.html"><i data-icon="scanline"></i>Scan</a>
            </div>
          </div>

          <div class="m-card">
            <div class="row between"><span class="eyebrow">Sync</span><span class="m-caption tnum">3 / 7</span></div>
            <div class="m-progress"><i style="width:43%"></i></div>
            <div class="m-caption">Sending stored check-ins, scans and positions to Project Alpha. Nothing to do on your side.</div>
          </div>

          <div class="m-section"><span class="eyebrow">Today</span><a href="activity.html">All activity</a></div>
          <div class="m-card" style="padding:16px 16px 12px">
            <div class="m-timeline">
              <div class="tl"><span class="time">08:02</span><span class="node"><span class="dot ok"></span></span><div>Operation started<div class="sub">Jakarta Base</div></div></div>
              <div class="tl"><span class="time">11:20</span><span class="node"><span class="dot info"></span></span><div>Boarded MV Pageo 02<div class="sub">Port Tanjung Priok</div></div></div>
              <div class="tl"><span class="time">14:31</span><span class="node"><span class="dot ok"></span></span><div><div class="row between">Check-in confirmed<span class="m-chip active" style="height:22px;font-size:11px;padding:0 8px">Synced</span></div><div class="sub">Site check-in · MV Pageo 02</div></div></div>
              <div class="tl"><span class="time">14:40</span><span class="node"><span class="dot unknown"></span></span><div><div class="row between">Scanned MBES-03<span class="m-chip info" style="height:22px;font-size:11px;padding:0 8px">Syncing</span></div><div class="sub">Custody confirmed · RD-M03</div></div></div>
            </div>
          </div>
        </div>`;
  }
});
