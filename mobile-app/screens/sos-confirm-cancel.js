/* Converted from mobile/sos.html (state: Confirm cancel) */
// converted
PN.page("sos-confirm-cancel", {
  title: "SOS — Confirm cancel",
  icon: "siren",
  nav: "none",
  time: "15:43",
  hidden: true,
  render() {
    return `<header class="m-top">
          <div class="m-title">Emergency SOS</div>
        </header>
        <div class="m-body center" style="background:rgba(23,26,28,.45);padding:24px 20px;justify-content:center">
          <div class="m-card" style="width:100%;text-align:left;box-shadow:var(--shadow-modal);border-color:transparent;padding:20px;gap:14px">
            <div class="m-icon-ring crit" style="width:56px;height:56px"><i data-icon="alert" style="width:28px;height:28px"></i></div>
            <div>
              <div class="m-h2">Cancel SOS?</div>
              <div class="m-body-text" style="color:var(--text-2);margin-top:6px">This will notify QHSE that you are safe. Responders already on the way will be stood down.</div>
            </div>
            <dl class="m-kv" style="font-size:14px">
              <dt>Sent</dt><dd>15:42:08</dd>
              <dt>Active for</dt><dd>1 min 12 s</dd>
            </dl>
            <a class="m-btn dark" href="home.html"><i data-icon="check"></i>Yes, I'm safe — cancel SOS</a>
            <a class="m-btn secondary" href="sos-sent.html" style="color:var(--s-crit);border-color:var(--s-crit)">Keep SOS active</a>
          </div>
        </div>`;
  }
});
