/* Converted from mobile/mobilization.html (state: Stages) */
// converted
PN.page("mobilization-stages", {
  title: "Mobilization — Stages",
  icon: "truck",
  nav: "project",
  time: "15:42",
  hidden: true,
  render() {
    return `<header class="m-top">
          <a class="back" href="project.html" aria-label="Back"><i data-icon="chevronleft" class="ic-24"></i></a>
          <div class="m-title"><small>Mobilization</small>Project Alpha</div>
          <a href="mobilization.html" class="m-chip" style="height:32px">Checklist</a>
        </header>
        <div class="m-body">
          <div class="m-card" style="padding:16px 16px 12px">
            <div class="row between"><span class="eyebrow">Stages</span><span class="m-caption">26 / 28 received</span></div>
            <div class="m-timeline" style="margin-top:4px">
              <div class="tl"><span class="time">16:40</span><span class="node"><span class="dot ok"></span></span><div>Prepared<div class="sub">03 Sep · Warehouse, Jakarta Base · 28 / 28</div></div></div>
              <div class="tl"><span class="time">09:12</span><span class="node"><span class="dot ok"></span></span><div>Dispatch gate<div class="sub">04 Sep · 27 / 28 scanned · Cable Set-07 not detected</div></div></div>
              <div class="tl"><span class="time">10:45</span><span class="node"><span class="dot ok"></span></span><div>Port<div class="sub">04 Sep · Tanjung Priok · 27 / 28</div></div></div>
              <div class="tl"><span class="time">11:20</span><span class="node"><span class="dot info pulse"></span></span><div><b style="font-weight:600">Vessel receiving</b> <span class="chip info sm" style="vertical-align:2px;margin-left:4px">Current</span><div class="sub">MV Pageo 02 · 26 / 28 received</div></div></div>
              <div class="tl"><span class="time">—</span><span class="node"><span class="dot unknown"></span></span><div style="color:var(--text-2)">Deployed<div class="sub">Pending · Offshore site</div></div></div>
            </div>
          </div>

          <div class="m-card tinted">
            <div class="row top">
              <i data-icon="info" class="ic-24" style="color:var(--pageo-deep);flex:0 0 auto"></i>
              <div>
                <div class="m-label" style="color:var(--pageo-deep)">2 items not yet received on MV Pageo 02</div>
                <div class="m-caption" style="margin-top:4px;color:var(--pageo-deep)">Cable Set-07 · Battery Pack-04. Receiving can be confirmed now; the outstanding items stay open on the checklist.</div>
              </div>
            </div>
          </div>

          <a class="m-btn primary" href="mobilization.html"><i data-icon="checkcircle"></i>Confirm receiving</a>
          <a class="m-btn tertiary" href="scan.html"><i data-icon="scanline"></i>Scan outstanding items</a>
        </div>`;
  }
});
