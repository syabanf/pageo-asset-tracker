/* Converted from mobile/muster.html (state: Confirmed) */
// converted
PN.page("muster-confirmed", {
  title: "Muster — Confirmed",
  icon: "flag",
  nav: "none",
  time: "15:42",
  hidden: true,
  render() {
    return `<header class="m-top">
          <div class="m-title"><small>Emergency muster</small>MV Pageo 02</div>
        </header>
        <div class="m-body center">
          <div class="grow" style="flex:0 1 12px"></div>
          <div class="m-icon-ring ok" style="width:112px;height:112px"><i data-icon="check" style="width:52px;height:52px"></i></div>
          <div>
            <div class="m-status-big ok" style="font-size:34px">Safe</div>
            <div class="m-body-text" style="margin-top:8px;color:var(--text-2)">Your status has been reported to QHSE.</div>
          </div>
          <div class="tnum" style="font-size:40px;font-weight:700;letter-spacing:-.01em;line-height:1">15:42:12</div>
          <div class="m-card" style="width:100%;text-align:left">
            <dl class="m-kv">
              <dt>Muster point</dt><dd>B · Deck 2</dd>
              <dt>Confirmed via</dt><dd>App</dd>
              <dt>Team</dt><dd><span class="ok">33</span> / 39 confirmed</dd>
            </dl>
            <div class="m-progress ok"><i style="width:85%"></i></div>
            <div class="m-caption">Stay at the muster point until QHSE stands the muster down.</div>
          </div>
          <div class="grow"></div>
          <a class="m-btn secondary" href="home.html"><i data-icon="home"></i>Back to home</a>
        </div>`;
  }
});
