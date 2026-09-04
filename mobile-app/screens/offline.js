/* Converted from mobile/offline.html (state: Offline) */
// converted
PN.page("offline", {
  title: "Offline",
  icon: "wifioff",
  nav: "home",
  time: "15:42",
  offline: true,
  render() {
    return `<div class="m-banner offline"><i data-icon="wifioff"></i>Offline<span class="right">7 events stored locally</span></div>
        <header class="m-top">
          <span class="brand" data-logo></span>
          <span class="grow"></span>
          <a href="offline-sync-status.html" class="m-sync pending"><i data-icon="alert"></i>Offline · 7 pending</a>
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
              <dt>Last sync</dt><dd class="warn">14:20</dd>
              <dt>Battery</dt><dd>58%</dd>
            </dl>
            <div class="m-btn-row">
              <a class="m-btn dark" href="check-in.html"><i data-icon="pin"></i>Check in</a>
              <a class="m-btn secondary" href="scan.html"><i data-icon="scanline"></i>Scan</a>
            </div>
          </div>

          <div class="m-card tinted">
            <div class="row top">
              <i data-icon="refresh" class="ic-24" style="color:var(--pageo-deep);flex:0 0 auto"></i>
              <div>
                <div class="m-label" style="color:var(--pageo-deep)">Will sync when connection is available</div>
                <div class="m-caption" style="margin-top:4px;color:var(--pageo-deep)">Check-ins, scans and positions are stored on this phone and sent automatically. You can keep working.</div>
              </div>
            </div>
          </div>

          <div class="m-section"><span class="eyebrow">Today</span><a href="activity.html">All activity</a></div>
          <div class="m-card" style="padding:16px 16px 12px">
            <div class="m-timeline">
              <div class="tl"><span class="time">08:02</span><span class="node"><span class="dot ok"></span></span><div>Operation started<div class="sub">Jakarta Base</div></div></div>
              <div class="tl"><span class="time">11:20</span><span class="node"><span class="dot info"></span></span><div>Boarded MV Pageo 02<div class="sub">Port Tanjung Priok</div></div></div>
              <div class="tl"><span class="time">14:31</span><span class="node"><span class="dot ok"></span></span><div><div class="row between">Check-in confirmed<span class="m-chip off" style="height:22px;font-size:11px;padding:0 8px">Pending sync</span></div><div class="sub">Site check-in · MV Pageo 02</div></div></div>
              <div class="tl"><span class="time">14:40</span><span class="node"><span class="dot unknown"></span></span><div><div class="row between">Scanned MBES-03<span class="m-chip off" style="height:22px;font-size:11px;padding:0 8px">Pending sync</span></div><div class="sub">Custody confirmed · RD-M03</div></div></div>
              <div class="tl"><span class="time">15:42</span><span class="node"><span class="dot ok"></span></span><div><div class="row between">Position updated<span class="m-chip off" style="height:22px;font-size:11px;padding:0 8px">Pending sync</span></div><div class="sub">5 positions buffered</div></div></div>
            </div>
          </div>
        </div>`;
  }
});
