/* Converted from mobile/my-assets.html (state: All accounted) */
// converted
PN.page("my-assets", {
  title: "My Equipment",
  icon: "diamond",
  nav: "project",
  time: "15:42",
  render() {
    return `<header class="m-top">
          <a class="back" href="project.html" aria-label="Back"><i data-icon="chevronleft" class="ic-24"></i></a>
          <div class="m-title">My equipment</div>
          <a class="m-sos-btn" href="sos.html" aria-label="Emergency SOS">SOS</a>
        </header>
        <div class="m-body">
          <div style="padding:4px 4px 8px">
            <div class="m-big-num">3 <small>assigned</small></div>
            <div class="m-caption" style="margin-top:6px">Project Alpha · Custody: Fahmi Syaban</div>
          </div>

          <div class="m-list">
            <a class="li ok" href="asset-detail.html" style="color:inherit"><span class="st"><i data-icon="check"></i></span><div class="li-body">MBES-03<div class="li-sub">Multibeam Echo Sounder · Deployed</div></div><i data-icon="chevronright"></i></a>
            <a class="li ok" href="asset-detail.html" style="color:inherit"><span class="st"><i data-icon="check"></i></span><div class="li-body">GPS-14<div class="li-sub">GNSS Receiver · Deployed</div></div><i data-icon="chevronright"></i></a>
            <a class="li ok" href="asset-detail.html" style="color:inherit"><span class="st"><i data-icon="check"></i></span><div class="li-body">Radio-021<div class="li-sub">VHF Handheld · Deployed</div></div><i data-icon="chevronright"></i></a>
          </div>
          <div class="m-caption" style="margin-top:-4px;padding-left:4px">3 / 3 accounted · last scan 10:18</div>

          <a class="m-btn primary" href="scan.html"><i data-icon="scanline"></i>Scan equipment</a>
          <a class="m-btn secondary" href="asset-detail-report-issue.html"><i data-icon="warning"></i>Report missing item</a>
        </div>`;
  }
});
