/* Converted from mobile/mobilization.html (state: Checklist) */
// converted
PN.page("mobilization", {
  title: "Mobilization",
  icon: "truck",
  nav: "project",
  time: "15:42",
  render() {
    return `<header class="m-top">
          <a class="back" href="project.html" aria-label="Back"><i data-icon="chevronleft" class="ic-24"></i></a>
          <div class="m-title"><small>Mobilization</small>Project Alpha</div>
          <a href="mobilization-stages.html" class="m-chip info" style="height:32px">Stages</a>
        </header>
        <div class="m-body">
          <div class="m-card">
            <span class="eyebrow">Equipment checklist</span>
            <div class="m-big-num">24 <small>/ 26 ready</small></div>
            <div class="m-progress warn"><i style="width:92%"></i></div>
            <div class="row" style="gap:20px">
              <div><div class="eyebrow" style="font-size:10px">Ready</div><div class="tnum" style="font-size:18px;font-weight:600;color:var(--s-success)">24</div></div>
              <div><div class="eyebrow" style="font-size:10px">Attention</div><div class="tnum" style="font-size:18px;font-weight:600;color:var(--s-warn)">1</div></div>
              <div><div class="eyebrow" style="font-size:10px">Pending</div><div class="tnum" style="font-size:18px;font-weight:600;color:var(--text-2)">1</div></div>
              <div class="grow"></div>
              <div class="m-caption" style="text-align:right">Vessel receiving<br>MV Pageo 02</div>
            </div>
          </div>

          <div class="m-list">
            <div class="li ok"><span class="st"><i data-icon="check"></i></span><div class="li-body">MBES-03<div class="li-sub">Multibeam Echo Sounder</div></div><span class="li-right">10:18</span></div>
            <div class="li ok"><span class="st"><i data-icon="check"></i></span><div class="li-body">GPS-04<div class="li-sub">GNSS Receiver</div></div><span class="li-right">10:19</span></div>
            <div class="li ok"><span class="st"><i data-icon="check"></i></span><div class="li-body">Gyro-01<div class="li-sub">Motion Reference Unit</div></div><span class="li-right">10:21</span></div>
            <div class="li ok"><span class="st"><i data-icon="check"></i></span><div class="li-body">Laptop-14<div class="li-sub">Acquisition Laptop</div></div><span class="li-right">10:22</span></div>
            <div class="li ok"><span class="st"><i data-icon="check"></i></span><div class="li-body">SVP-07<div class="li-sub">Sound Velocity Profiler</div></div><span class="li-right">10:24</span></div>
            <div class="li warn"><span class="st"><i data-icon="warning"></i></span><div class="li-body">Cable Set-07<div class="li-sub warn">Not detected at dispatch gate</div></div><span class="chip warn">Attention</span></div>
            <div class="li pending"><span class="st"><i data-icon="circle"></i></span><div class="li-body">Battery Pack-04<div class="li-sub">Awaiting scan</div></div><span class="chip unknown">Pending</span></div>
          </div>
          <div class="m-caption" style="padding:0 4px">Showing 7 of 26 items · scanned items are listed first</div>
        </div>
        <div style="flex:0 0 auto;padding:12px 16px 16px;background:var(--surface);border-top:1px solid var(--border)">
          <a class="m-btn primary" href="scan.html"><i data-icon="scanline"></i>Scan equipment</a>
        </div>`;
  }
});
