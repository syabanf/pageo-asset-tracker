/* Converted from mobile/check-in.html (state: Outside geofence) */
// converted
PN.page("check-in-outside-geofence", {
  title: "Check-in — Outside geofence",
  icon: "pin",
  nav: "home",
  time: "10:54",
  hidden: true,
  render() {
    return `<header class="m-top">
          <a class="back" href="home.html" aria-label="Back"><i data-icon="chevronleft" class="ic-24"></i></a>
          <div class="m-title"><small>Check in</small>MV Pageo 02</div>
        </header>
        <div class="m-body">
          <div class="m-card" style="padding:0;overflow:hidden">
            <div class="map flush" data-map="harbor" style="height:160px;min-height:0">
              <div data-fence="52,14 84,12 88,50 56,54" data-label="Vessel geofence" data-kind="zone"></div>
              <div class="mk vessel" style="left:70%;top:32%"><span class="sym"><i data-icon="ship"></i></span><span class="lbl">MV Pageo 02</span></div>
              <div class="mk me" style="left:22%;top:78%"><span class="accuracy" style="width:84px;height:84px;left:50%;top:50%;transform:translate(-50%,-50%)"></span><span class="sym"></span></div>
            </div>
            <div class="banner warn" style="border:0;border-radius:0;border-top:1px solid #EBD6A8;font-size:14px;align-items:flex-start;padding:12px 16px">
              <i data-icon="warning" class="ic-24" style="margin-top:1px"></i>
              <div>You are <b>420 m</b> from MV Pageo 02 — check-in is only available inside the vessel geofence.</div>
            </div>
            <div class="row between" style="padding:12px 16px 14px">
              <span class="m-caption" style="color:var(--text)">GPS accuracy</span>
              <span class="chip warn"><span class="dot warn"></span>± 32 m · Low</span>
            </div>
          </div>

          <div class="m-section" style="padding-top:0"><span class="eyebrow">What are you recording?</span></div>
          <div class="m-list" style="opacity:.6">
            <div class="li"><span class="checkbox on" style="width:22px;height:22px;border-radius:50%"><i data-icon="check"></i></span><div class="li-body">Vessel boarding<div class="li-sub">Records you as on board</div></div></div>
            <div class="li"><span class="checkbox" style="width:22px;height:22px;border-radius:50%"></span><div class="li-body">Site check-in</div></div>
            <div class="li"><span class="checkbox" style="width:22px;height:22px;border-radius:50%"></span><div class="li-body">Site check-out</div></div>
          </div>

          <div class="grow"></div>
          <a class="m-btn primary disabled" href="check-in.html" style="opacity:.45;pointer-events:none" aria-disabled="true"><i data-icon="ship"></i>Confirm boarding</a>
          <a class="m-btn tertiary" href="check-in.html"><i data-icon="refresh"></i>Refresh position</a>
        </div>`;
  }
});
