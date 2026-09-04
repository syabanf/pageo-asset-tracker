/* Converted from mobile/activity.html (state: Activity) */
// converted
PN.page("activity", {
  title: "Activity",
  icon: "activity",
  nav: "activity",
  time: "15:42",
  render() {
    return `<header class="m-top">
          <div class="m-title">Activity</div>
          <span class="m-sync ok"><i data-icon="checkcircle"></i>Synced · 15:42</span>
          <a class="m-sos-btn" href="sos.html" aria-label="Emergency SOS">SOS</a>
        </header>
        <div class="m-body">
          <div class="seg" style="display:flex">
            <button type="button" class="active" style="flex:1;height:36px">Today</button>
            <button type="button" style="flex:1;height:36px">This week</button>
            <button type="button" style="flex:1;height:36px">All</button>
          </div>

          <div class="m-section"><span class="eyebrow">Today · 04 Sep</span><a href="activity-location-history.html">Location history</a></div>
          <div class="m-card" style="padding:16px 16px 12px">
            <div class="m-timeline">
              <div class="tl"><span class="time">15:42</span><span class="node"><span class="dot ok"></span></span><div>Position updated<div class="sub">± 7 m · Offshore Work Area</div></div></div>
              <div class="tl"><span class="time">13:05</span><span class="node"><span class="dot ok"></span></span><div>Check-in confirmed<div class="sub">Site check-in · MV Pageo 02</div></div></div>
              <div class="tl"><span class="time">11:20</span><span class="node"><span class="dot info"></span></span><div>Entered Project Site<div class="sub">Geofence · Offshore Work Area</div></div></div>
              <div class="tl"><span class="time">10:18</span><span class="node"><span class="dot transit"></span></span><div>Mobilized<div class="sub">3 / 3 equipment scanned</div></div></div>
              <div class="tl"><span class="time">10:02</span><span class="node"><span class="dot transit"></span></span><div>Offshore transit<div class="sub">MV Pageo 02 departed Tanjung Priok</div></div></div>
              <div class="tl"><span class="time">09:31</span><span class="node"><span class="dot info"></span></span><div>Vessel boarding<div class="sub">MV Pageo 02 · Port Tanjung Priok</div></div></div>
              <div class="tl"><span class="time">08:47</span><span class="node"><span class="dot unknown"></span></span><div>Warehouse<div class="sub">Scanned 3 assets · RD-01</div></div></div>
              <div class="tl"><span class="time">08:24</span><span class="node"><span class="dot info"></span></span><div>Entered Base<div class="sub">Geofence · PAGEO Base</div></div></div>
              <div class="tl"><span class="time">08:02</span><span class="node"><span class="dot ok"></span></span><div>Operation started<div class="sub">Jakarta Base · tracking on</div></div></div>
            </div>
          </div>

          <div class="m-section"><span class="eyebrow">Yesterday · 03 Sep</span></div>
          <div class="m-card" style="padding:16px 16px 12px">
            <div class="m-timeline">
              <div class="tl"><span class="time">17:10</span><span class="node"><span class="dot off"></span></span><div>Operation ended<div class="sub">Jakarta Base · tracking off</div></div></div>
              <div class="tl"><span class="time">16:40</span><span class="node"><span class="dot unknown"></span></span><div>Equipment prepared<div class="sub">Warehouse · 28 / 28 checked</div></div></div>
              <div class="tl"><span class="time">07:58</span><span class="node"><span class="dot ok"></span></span><div>Operation started<div class="sub">Jakarta Base</div></div></div>
            </div>
          </div>
        </div>`;
  }
});
