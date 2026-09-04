/* Converted from mobile/check-in.html (state: Site check-in) */
// converted
PN.page("check-in", {
  title: "Check-in",
  icon: "pin",
  nav: "home",
  time: "11:20",
  render() {
    return `<header class="m-top">
          <a class="back" href="home.html" aria-label="Back"><i data-icon="chevronleft" class="ic-24"></i></a>
          <div class="m-title"><small>Check in</small>MV Pageo 02</div>
        </header>
        <div class="m-body">
          <div class="m-card" style="padding:0;overflow:hidden">
            <div class="map flush" data-map="offshore" style="height:160px;min-height:0">
              <div data-fence="30,18 74,14 78,64 34,70" data-label="Vessel geofence" data-kind="zone"></div>
              <div class="mk vessel" style="left:54%;top:40%"><span class="sym"><i data-icon="ship"></i></span><span class="lbl">MV Pageo 02</span></div>
              <div class="mk me" style="left:50%;top:48%"><span class="accuracy" style="width:36px;height:36px;left:50%;top:50%;transform:translate(-50%,-50%)"></span><span class="sym"></span></div>
            </div>
            <div class="row" style="padding:12px 16px 14px;gap:10px">
              <span class="dot ok pulse"></span>
              <div class="m-caption" style="color:var(--text)">You are inside the geofence · <b>Vessel — MV Pageo 02</b> · ± 7 m</div>
            </div>
          </div>

          <div class="m-section" style="padding-top:0"><span class="eyebrow">What are you recording?</span></div>
          <div class="m-list">
            <div class="li"><span class="checkbox on" style="width:22px;height:22px;border-radius:50%"><i data-icon="check"></i></span><div class="li-body">Vessel boarding<div class="li-sub">Records you as on board</div></div></div>
            <div class="li"><span class="checkbox" style="width:22px;height:22px;border-radius:50%"></span><div class="li-body">Site check-in</div></div>
            <div class="li"><span class="checkbox" style="width:22px;height:22px;border-radius:50%"></span><div class="li-body">Site check-out</div></div>
            <div class="li"><span class="checkbox" style="width:22px;height:22px;border-radius:50%"></span><div class="li-body">End operation<div class="li-sub">Stops location sharing</div></div></div>
          </div>

          <div class="grow"></div>
          <a class="m-btn primary" href="check-in-confirmed.html"><i data-icon="ship"></i>Confirm boarding</a>
          <div class="m-caption" style="text-align:center">Recorded at 11:20 WIB · syncs automatically</div>
        </div>`;
  }
});
