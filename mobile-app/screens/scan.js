/* Converted from mobile/scan.html (state: Scanning) */
// converted
PN.page("scan", {
  title: "Scan",
  icon: "nfc",
  nav: "none",
  time: "15:42",
  render() {
    return `<header class="m-top">
          <div class="m-title">Scan asset</div>
          <a class="back" href="my-assets.html" aria-label="Close" style="margin-left:auto;margin-right:-8px"><i data-icon="x" class="ic-24"></i></a>
        </header>
        <div class="m-body center">
          <div class="grow"></div>
          <div class="m-icon-ring info scanning" style="width:128px;height:128px"><i data-icon="nfc" style="width:56px;height:56px"></i></div>
          <div class="m-h2" style="max-width:260px">Bring reader near the equipment</div>
          <div class="eyebrow" style="color:var(--accent)">Scanning…</div>
          <span class="m-chip"><span class="dot ok"></span>RFID reader connected · RD-M03</span>
          <div class="grow"></div>
          <div class="m-caption" style="max-width:280px">Hold the handheld reader within 10 cm of the tag. Scans are recorded to Project Alpha.</div>
          <a class="m-btn tertiary" href="my-assets.html">Cancel</a>
        </div>`;
  }
});
