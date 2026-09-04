/* Converted from mobile/home.html (state: Location sharing off) */
// converted
PN.page("home-location-sharing-off", {
  title: "Home — Location sharing off",
  icon: "home",
  nav: "home",
  time: "07:51",
  hidden: true,
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
            <div class="m-h1">Good morning,<br>Fahmi</div>
          </div>

          <div class="m-card">
            <span class="m-tracking off"><span class="dot off"></span>Location sharing off</span>
            <div>
              <div class="m-card-title">Your project tracking has not started.</div>
              <div class="m-caption" style="margin-top:6px">Location is shared only while you are assigned to an operation. Starting shares your position with the Project Alpha operations team.</div>
            </div>
            <a class="m-btn primary" href="home.html"><i data-icon="play"></i>Start operation</a>
            <a class="m-btn tertiary" href="profile-how-tracking-works.html">Learn how tracking works</a>
          </div>

          <div class="m-card">
            <span class="eyebrow">Assigned project</span>
            <div>
              <div class="m-card-title">Offshore Survey Alpha</div>
              <div class="m-caption">Survey Engineer · Mobilization 04 Sep · MV Pageo 02</div>
            </div>
            <dl class="m-kv">
              <dt>Muster point</dt><dd>Point B · Deck 2</dd>
              <dt>Supervisor</dt><dd>Andi Pratama</dd>
            </dl>
          </div>

          <div class="m-section"><span class="eyebrow">Before you start</span></div>
          <div class="m-list">
            <div class="li ok"><span class="st"><i data-icon="check"></i></span><div class="li-body">Mobile permissions<div class="li-sub">Location · Notifications</div></div></div>
            <div class="li ok"><span class="st"><i data-icon="check"></i></span><div class="li-body">Equipment assigned<div class="li-sub">3 items · MBES-03, GPS-14, Radio-021</div></div></div>
            <div class="li warn"><span class="st"><i data-icon="warning"></i></span><div class="li-body">Battery 38%<div class="li-sub">Charge before boarding</div></div></div>
          </div>
        </div>`;
  }
});
