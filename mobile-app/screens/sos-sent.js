/* Converted from mobile/sos.html (state: SOS sent) */
// converted
PN.page("sos-sent", {
  title: "SOS — SOS sent",
  icon: "siren",
  nav: "none",
  time: "15:42",
  hidden: true,
  render() {
    return `<header class="m-top">
          <div class="m-title">Emergency SOS</div>
        </header>
        <div class="m-body center">
          <div class="grow" style="flex:0 1 4px"></div>
          <div class="m-icon-ring crit" style="width:112px;height:112px"><i data-icon="siren" style="width:52px;height:52px"></i></div>
          <div>
            <div class="eyebrow" style="color:var(--s-crit)">SOS sent</div>
            <div class="m-h1" style="margin-top:6px">Help is on the way</div>
            <div class="m-body-text" style="margin-top:8px;color:var(--text-2);max-width:280px">Your location and project information have been transmitted.</div>
          </div>
          <div class="tnum" style="font-size:40px;font-weight:700;letter-spacing:-.01em;line-height:1">15:42:08</div>
          <div class="m-card" style="width:100%;text-align:left;padding:14px 16px">
            <div class="m-list" style="border:0;border-radius:0;background:transparent">
              <div class="li ok" style="padding:8px 0;min-height:44px"><span class="st"><i data-icon="check"></i></span><div class="li-body" style="font-size:15px">Received by QHSE Officer<div class="li-sub">Putri Anggraini · 15:42:10</div></div></div>
              <div class="li ok" style="padding:8px 0;min-height:44px"><span class="st"><i data-icon="check"></i></span><div class="li-body" style="font-size:15px">Supervisor notified<div class="li-sub">Andi Pratama · 15:42:11</div></div></div>
              <div class="li ok" style="padding:8px 0;min-height:44px"><span class="st"><i data-icon="check"></i></span><div class="li-body" style="font-size:15px">Vessel master notified<div class="li-sub">Budi Santoso · MV Pageo 02 · 15:42:11</div></div></div>
            </div>
          </div>
          <div class="grow"></div>
          <a class="m-btn destructive solid" href="sos.html"><i data-icon="phone"></i>Call emergency contact</a>
          <a class="m-btn tertiary" href="sos-confirm-cancel.html" style="color:var(--text-2)">Cancel SOS (false alarm)</a>
        </div>`;
  }
});
