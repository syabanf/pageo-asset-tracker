/* Converted from mobile/my-assets.html (state: Needs confirmation) */
// converted
PN.page("my-assets-needs-confirmation", {
  title: "My Equipment — Needs confirmation",
  icon: "diamond",
  nav: "project",
  time: "15:42",
  hidden: true,
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

          <div class="banner warn" style="border-radius:12px;font-size:14px;align-items:flex-start">
            <i data-icon="warning" class="ic-24" style="margin-top:1px"></i>
            <div><b>1 item needs confirmation</b><div style="font-size:13px;margin-top:2px;opacity:.9">Radio-021 was not detected by today's reader pass. Scan it to confirm custody.</div></div>
          </div>

          <div class="m-list">
            <a class="li ok" href="asset-detail.html" style="color:inherit"><span class="st"><i data-icon="check"></i></span><div class="li-body">MBES-03<div class="li-sub">Multibeam Echo Sounder · Deployed</div></div><i data-icon="chevronright"></i></a>
            <a class="li ok" href="asset-detail.html" style="color:inherit"><span class="st"><i data-icon="check"></i></span><div class="li-body">GPS-14<div class="li-sub">GNSS Receiver · Deployed</div></div><i data-icon="chevronright"></i></a>
            <a class="li warn" href="asset-detail.html" style="color:inherit"><span class="st"><i data-icon="warning"></i></span><div class="li-body">Radio-021<div class="li-sub warn">Not scanned today · last seen 03 Sep 17:10</div></div><i data-icon="chevronright"></i></a>
          </div>
          <div class="m-caption" style="margin-top:-4px;padding-left:4px">2 / 3 accounted · last scan 10:18</div>

          <a class="m-btn primary" href="scan.html"><i data-icon="scanline"></i>Scan equipment</a>
          <a class="m-btn secondary" href="asset-detail-report-issue.html"><i data-icon="warning"></i>Report missing item</a>
        </div>`;
  }
});
