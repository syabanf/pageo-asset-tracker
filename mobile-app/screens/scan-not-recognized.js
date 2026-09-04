/* Converted from mobile/scan.html (state: Not recognized) */
// converted
PN.page("scan-not-recognized", {
  title: "Scan — Not recognized",
  icon: "nfc",
  nav: "none",
  time: "15:43",
  hidden: true,
  render() {
    return `<header class="m-top">
          <div class="m-title">Scan asset</div>
          <a class="back" href="my-assets.html" aria-label="Close" style="margin-left:auto;margin-right:-8px"><i data-icon="x" class="ic-24"></i></a>
        </header>
        <div class="m-body center">
          <div class="grow" style="flex:0 1 24px"></div>
          <div class="m-icon-ring warn"><i data-icon="alert"></i></div>
          <div>
            <div class="eyebrow" style="color:#8A5A05">Not recognized</div>
            <div class="m-h1" style="margin-top:6px">Tag not registered</div>
            <div class="m-caption tnum" style="margin-top:4px">E280-11-1190244 is not in the registry.</div>
          </div>
          <div class="m-card" style="width:100%;text-align:left">
            <dl class="m-kv">
              <dt>Tag ID</dt><dd class="tnum">E280-11-1190244</dd>
              <dt>Reader</dt><dd>RD-M03 · 15:43:21</dd>
              <dt>Project</dt><dd>Alpha</dd>
            </dl>
            <div class="m-caption">Registering links this tag to a new asset record that the Asset Manager will review.</div>
          </div>
          <div class="grow"></div>
          <a class="m-btn secondary" href="scan.html"><i data-icon="plus"></i>Register asset</a>
          <a class="m-btn tertiary" href="scan.html"><i data-icon="refresh"></i>Try again</a>
        </div>`;
  }
});
