/* Converted from mobile/activity.html (state: Location history) */
// converted
PN.page("activity-location-history", {
  title: "Activity — Location history",
  icon: "activity",
  nav: "activity",
  time: "15:42",
  hidden: true,
  render() {
    return `<header class="m-top">
          <a class="back" href="activity.html" aria-label="Back"><i data-icon="chevronleft" class="ic-24"></i></a>
          <div class="m-title"><small>Today · 04 Sep</small>Location history</div>
        </header>
        <div class="m-body">
          <div class="map" data-map="coast" style="height:220px;min-height:0">
            <div data-track="14,84 24,72 32,60 44,50 56,42 66,34" data-color="#08698F"></div>
            <div class="mk site" style="left:14%;top:84%"><span class="sym"><i data-icon="building"></i></span><span class="lbl">Jakarta Base</span></div>
            <div class="mk site" style="left:32%;top:60%"><span class="sym"><i data-icon="anchor"></i></span><span class="lbl">Tanjung Priok</span></div>
            <div class="mk me" style="left:66%;top:34%"><span class="sym"></span></div>
            <div class="map-ui br"><span class="map-coords">6 positions · 07:53 – 15:42</span></div>
          </div>

          <div class="m-list">
            <div class="li"><i data-icon="building" class="ic-24"></i><div class="li-body">Jakarta Base<div class="li-sub">07:53 – 08:47</div></div><span class="li-right">54 min</span></div>
            <div class="li"><i data-icon="warehouse" class="ic-24"></i><div class="li-body">Warehouse<div class="li-sub">08:47 – 09:20</div></div><span class="li-right">33 min</span></div>
            <div class="li"><i data-icon="anchor" class="ic-24"></i><div class="li-body">Port Tanjung Priok<div class="li-sub">09:20 – 10:02</div></div><span class="li-right">42 min</span></div>
            <div class="li"><i data-icon="ship" class="ic-24" style="color:var(--accent)"></i><div class="li-body">MV Pageo 02<div class="li-sub">10:02 – now</div></div><span class="li-right ok" style="font-weight:600">5 h 40 min</span></div>
          </div>
          <div class="m-caption" style="padding:0 4px">History is retained for 90 days and visible to you and your operations team.</div>
        </div>`;
  }
});
