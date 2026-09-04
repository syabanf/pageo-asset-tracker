/* Converted from mobile/check-in.html (state: Confirmed) */
// converted
PN.page("check-in-confirmed", {
  title: "Check-in — Confirmed",
  icon: "pin",
  nav: "home",
  time: "11:20",
  hidden: true,
  render() {
    return `<header class="m-top">
          <div class="m-title"><small>Check in</small>MV Pageo 02</div>
        </header>
        <div class="m-body center">
          <div class="grow" style="flex:0 1 24px"></div>
          <div class="m-icon-ring ok" style="width:112px;height:112px"><i data-icon="check" style="width:52px;height:52px"></i></div>
          <div>
            <div class="eyebrow" style="color:var(--s-success)">Boarding confirmed</div>
            <div class="m-h1" style="margin-top:6px">You're on<br>MV Pageo 02</div>
          </div>
          <div class="m-card" style="width:100%;text-align:left">
            <dl class="m-kv">
              <dt>Time</dt><dd>11:20:41</dd>
              <dt>Muster point</dt><dd>B · Deck 2</dd>
              <dt>Supervisor</dt><dd>Andi Pratama</dd>
            </dl>
            <div class="m-caption">Your supervisor and the vessel master can now see you on the manifest.</div>
          </div>
          <div class="grow"></div>
          <a class="m-btn secondary" href="project.html"><i data-icon="clipboard"></i>View project</a>
          <a class="m-btn tertiary" href="home.html">Back to home</a>
        </div>`;
  }
});
