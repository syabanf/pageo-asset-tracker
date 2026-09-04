/* Converted from mobile/sos.html (state: Press and hold) */
// converted
PN.page("sos", {
  title: "SOS",
  icon: "siren",
  nav: "none",
  time: "15:42",
  render() {
    return `<header class="m-top">
          <div class="m-title">Emergency SOS</div>
          <a class="back" href="home.html" aria-label="Close" style="margin-left:auto;margin-right:-8px"><i data-icon="x" class="ic-24"></i></a>
        </header>
        <div class="m-body center">
          <div class="grow" style="flex:0 1 8px"></div>
          <div class="eyebrow" style="color:var(--s-crit)">Press and hold</div>
          <div class="sos-hold" data-route="sos-sent" data-target="#sos-sent" role="button" aria-label="Hold for 2 seconds to send SOS"><div class="ring"></div><div class="inner"><b>SOS</b><span>Hold 2 seconds</span></div></div>
          <div class="m-caption" style="max-width:280px">Sends your location and project information to QHSE and your supervisor.</div>
          <div class="m-card" style="width:100%;text-align:left">
            <dl class="m-kv" style="font-size:15px">
              <dt>Position</dt><dd class="tnum">-6.18746, 106.82721 · ± 7 m</dd>
              <dt>Project</dt><dd>Alpha · MV Pageo 02</dd>
              <dt>Battery</dt><dd>82%</dd>
            </dl>
          </div>
          <div class="grow"></div>
          <a class="m-btn tertiary" href="home.html">Not an emergency — go back</a>
        </div>`;
  }
});
