/* Converted from mobile/scan.html (state: Detected) */
// converted
PN.page("scan-detected", {
  title: "Scan — Detected",
  icon: "nfc",
  nav: "none",
  time: "15:42",
  hidden: true,
  render() {
    return `<header class="m-top">
          <div class="m-title">Scan asset</div>
          <a class="back" href="my-assets.html" aria-label="Close" style="margin-left:auto;margin-right:-8px"><i data-icon="x" class="ic-24"></i></a>
        </header>
        <div class="m-body center">
          <div class="grow" style="flex:0 1 24px"></div>
          <div class="m-icon-ring ok"><i data-icon="check"></i></div>
          <div>
            <div class="eyebrow" style="color:var(--s-success)">Asset detected</div>
            <div class="m-h1" style="margin-top:6px">MBES-03</div>
            <div class="m-caption" style="margin-top:4px">Multibeam Echo Sounder · Project Alpha</div>
          </div>
          <div class="m-card" style="width:100%;text-align:left">
            <dl class="m-kv">
              <dt>Status</dt><dd class="info">Deployed</dd>
              <dt>Custody</dt><dd>You</dd>
              <dt>RFID</dt><dd>E280-11-8829184</dd>
              <dt>Reader</dt><dd>RD-M03 · 15:42:08</dd>
            </dl>
          </div>
          <div class="grow"></div>
          <a class="m-btn primary" href="my-assets.html"><i data-icon="check"></i>Confirm</a>
          <a class="m-btn tertiary" href="scan.html"><i data-icon="scanline"></i>Scan another</a>
        </div>`;
  }
});
