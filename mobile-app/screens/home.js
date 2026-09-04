/* Converted from mobile/home.html (state: Tracking active) */
// converted
PN.page("home", {
  title: "Home",
  icon: "home",
  nav: "home",
  time: "15:42",
  render() {
    return `<header class="m-top">
          <span class="brand" data-logo></span>
          <span class="grow"></span>
          <span class="m-sync ok"><i data-icon="checkcircle"></i>Synced</span>
          <a class="m-sos-btn" href="sos.html" aria-label="Emergency SOS">SOS</a>
        </header>
        <div class="m-body">
          <div>
            <div class="m-caption">Thursday, 04 September</div>
            <div class="m-h1">Good afternoon,<br>Fahmi</div>
          </div>

          <div class="m-card">
            <div class="row between"><span class="eyebrow">Project</span><span class="m-tracking" style="padding:6px 12px;font-size:11px"><span class="dot ok pulse"></span>Tracking active</span></div>
            <div>
              <div class="m-card-title">Offshore Survey Alpha</div>
              <div class="m-caption">Survey Engineer · 04 Sep — 18 Sep</div>
            </div>
            <dl class="m-kv">
              <dt>Vessel</dt><dd>MV Pageo 02</dd>
              <dt>Started</dt><dd>08:03</dd>
            </dl>
            <a class="m-btn secondary" href="project.html">View project<i data-icon="arrowright"></i></a>
          </div>

          <div class="m-card">
            <span class="eyebrow">Current status</span>
            <div class="m-status-big ok">On operation</div>
            <dl class="m-kv">
              <dt>GPS</dt><dd class="ok">Good · ± 7 m</dd>
              <dt>Last sync</dt><dd>Now</dd>
              <dt>Battery</dt><dd>82%</dd>
            </dl>
            <div class="m-btn-row">
              <a class="m-btn dark" href="check-in.html"><i data-icon="pin"></i>Check in</a>
              <a class="m-btn secondary" href="scan.html"><i data-icon="scanline"></i>Scan</a>
            </div>
          </div>

          <div class="m-section"><span class="eyebrow">Today</span><a href="activity.html">All activity</a></div>
          <div class="m-card" style="padding:16px 16px 12px">
            <div class="m-timeline">
              <div class="tl"><span class="time">08:02</span><span class="node"><span class="dot ok"></span></span><div>Operation started<div class="sub">Jakarta Base</div></div></div>
              <div class="tl"><span class="time">08:24</span><span class="node"><span class="dot info"></span></span><div>Entered Base<div class="sub">Geofence · PAGEO Base</div></div></div>
              <div class="tl"><span class="time">10:18</span><span class="node"><span class="dot transit"></span></span><div>Mobilized<div class="sub">3 / 3 equipment scanned</div></div></div>
              <div class="tl"><span class="time">11:20</span><span class="node"><span class="dot info"></span></span><div>Boarded MV Pageo 02<div class="sub">Port Tanjung Priok</div></div></div>
            </div>
          </div>
        </div>`;
  }
});
