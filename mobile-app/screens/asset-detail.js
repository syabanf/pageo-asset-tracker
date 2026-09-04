/* Converted from mobile/asset-detail.html (state: Asset detail) */
// converted
PN.page("asset-detail", {
  title: "Asset Detail",
  icon: "diamond",
  nav: "project",
  time: "15:42",
  render() {
    return `<header class="m-top">
          <a class="back" href="my-assets.html" aria-label="Back"><i data-icon="chevronleft" class="ic-24"></i></a>
          <div class="m-title"><small>Asset</small>MBES-03</div>
        </header>
        <div class="m-body">
          <div class="m-card">
            <div class="entity-tile" style="border:0;padding:0;background:transparent">
              <span class="sym dark" style="width:44px;height:44px"><i data-icon="diamond" class="ic-24"></i></span>
              <div class="grow">
                <div class="m-card-title" style="font-size:17px">Multibeam Echo Sounder</div>
                <div class="m-caption">Survey sensor · Serial SN-02381920</div>
              </div>
              <span class="m-chip info">Deployed</span>
            </div>
            <div class="divider"></div>
            <dl class="m-kv left" style="font-size:15px;gap:10px 20px">
              <dt>RFID</dt><dd class="tnum">E280-11-8829184</dd>
              <dt>Project</dt><dd>Alpha · Offshore Survey</dd>
              <dt>Status</dt><dd style="letter-spacing:.04em">DEPLOYED</dd>
              <dt>Custody</dt><dd>Fahmi Syaban</dd>
              <dt>Location</dt><dd>MV Pageo 02 · Deck</dd>
              <dt>Last seen</dt><dd>3 min ago · RD-11</dd>
            </dl>
          </div>

          <div class="m-section"><span class="eyebrow">History</span><span class="m-caption">Project Alpha mobilization</span></div>
          <div class="m-card" style="padding:16px 16px 12px">
            <div class="m-timeline">
              <div class="tl"><span class="time">Sep 01</span><span class="node"><span class="dot unknown"></span></span><div>Warehouse<div class="sub">Jakarta Base · RD-01 · 09:12</div></div></div>
              <div class="tl"><span class="time">Sep 02</span><span class="node"><span class="dot unknown"></span></span><div>Workshop<div class="sub">Pre-mobilization check · RD-03 · 14:30</div></div></div>
              <div class="tl"><span class="time">Sep 03</span><span class="node"><span class="dot transit"></span></span><div>Loading Area<div class="sub">Dispatch gate · RD-05 · 16:42</div></div></div>
              <div class="tl"><span class="time">Sep 03</span><span class="node"><span class="dot transit"></span></span><div>Vessel Pageo-02<div class="sub">Received on board · RD-11 · 18:05</div></div></div>
              <div class="tl"><span class="time">Sep 04</span><span class="node"><span class="dot info"></span></span><div>Offshore Site<div class="sub">Deployed · RD-11 · 10:18</div></div></div>
            </div>
          </div>

          <a class="m-btn secondary" href="scan.html"><i data-icon="checkcircle"></i>Confirm custody</a>
          <a class="m-btn destructive" href="asset-detail-report-issue.html"><i data-icon="warning"></i>Report issue</a>
        </div>`;
  }
});
