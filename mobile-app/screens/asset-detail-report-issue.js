/* Converted from mobile/asset-detail.html (state: Report issue) */
// converted
PN.page("asset-detail-report-issue", {
  title: "Asset Detail — Report issue",
  icon: "diamond",
  nav: "project",
  time: "15:43",
  hidden: true,
  render() {
    return `<header class="m-top">
          <a class="back" href="asset-detail.html" aria-label="Back"><i data-icon="chevronleft" class="ic-24"></i></a>
          <div class="m-title"><small>Asset</small>Report issue · MBES-03</div>
        </header>
        <div class="m-body" style="gap:16px">
          <div class="m-caption" style="margin-top:-4px">Multibeam Echo Sounder · Custody: Fahmi Syaban · MV Pageo 02</div>

          <div class="m-field">
            <label>Issue type</label>
            <div class="m-input" role="button" aria-haspopup="listbox"><i data-icon="warning"></i><span class="grow">Damaged</span><i data-icon="chevrondown"></i></div>
            <div class="help">Damaged · Malfunction · Missing part · Lost</div>
          </div>

          <div class="m-field">
            <label>Description</label>
            <div class="m-input" style="height:120px;align-items:flex-start;padding-top:12px;line-height:1.45">Port-side transducer housing cracked during recovery at 14:10. Unit still powers on, but swath data quality is degraded on the outer beams.</div>
          </div>

          <div class="m-field">
            <label>Photo</label>
            <a class="m-btn secondary" href="asset-detail.html"><i data-icon="upload"></i>Attach photo</a>
            <div class="help">Optional · up to 3 photos, stored with the report</div>
          </div>

          <div class="m-field">
            <label>Severity</label>
            <div class="seg" style="display:flex">
              <button type="button" style="flex:1;height:40px">Minor</button>
              <button type="button" class="active" style="flex:1;height:40px">Degraded</button>
              <button type="button" style="flex:1;height:40px">Unusable</button>
            </div>
          </div>

          <div class="grow"></div>
          <a class="m-btn primary" href="my-assets.html">Submit report</a>
          <div class="m-caption" style="text-align:center">Sent to Asset Manager and QHSE.</div>
        </div>`;
  }
});
