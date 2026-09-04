/* Converted from mobile/profile.html (state: How tracking works) */
// converted
PN.page("profile-how-tracking-works", {
  title: "Profile — How tracking works",
  icon: "user",
  nav: "profile",
  time: "15:42",
  hidden: true,
  render() {
    return `<header class="m-top">
          <a class="back" href="profile.html" aria-label="Back"><i data-icon="chevronleft" class="ic-24"></i></a>
          <div class="m-title"><small>Tracking &amp; privacy</small>How tracking works</div>
        </header>
        <div class="m-body" style="gap:10px">
          <div class="m-caption" style="padding:0 4px 4px">What PAGEO Navigator records from your phone, who sees it, and for how long.</div>

          <div class="m-card">
            <div class="row top" style="gap:14px">
              <span class="m-icon-ring info" style="width:44px;height:44px;flex:0 0 auto"><i data-icon="pin" style="width:22px;height:22px"></i></span>
              <div>
                <div class="m-label" style="font-size:16px;font-weight:600">Only during operations</div>
                <div class="m-caption" style="margin-top:4px;font-size:14px">Your position is shared only from the moment you start an assigned operation until it ends. Outside an operation the app does not record or send your location.</div>
              </div>
            </div>
          </div>

          <div class="m-card">
            <div class="row top" style="gap:14px">
              <span class="m-icon-ring info" style="width:44px;height:44px;flex:0 0 auto"><i data-icon="eye" style="width:22px;height:22px"></i></span>
              <div>
                <div class="m-label" style="font-size:16px;font-weight:600">Always visible to you</div>
                <div class="m-caption" style="margin-top:4px;font-size:14px">Everything the operations team can see about your movements is shown to you in Activity and Location history. There is no hidden view.</div>
              </div>
            </div>
          </div>

          <div class="m-card">
            <div class="row top" style="gap:14px">
              <span class="m-icon-ring info" style="width:44px;height:44px;flex:0 0 auto"><i data-icon="shield" style="width:22px;height:22px"></i></span>
              <div>
                <div class="m-label" style="font-size:16px;font-weight:600">Used for safety and accountability</div>
                <div class="m-caption" style="margin-top:4px;font-size:14px">Location is used for muster, emergency response, and confirming who was on site and on board. It is not used to measure individual performance.</div>
              </div>
            </div>
          </div>

          <div class="m-card">
            <div class="row top" style="gap:14px">
              <span class="m-icon-ring info" style="width:44px;height:44px;flex:0 0 auto"><i data-icon="clock" style="width:22px;height:22px"></i></span>
              <div>
                <div class="m-label" style="font-size:16px;font-weight:600">Retained 90 days</div>
                <div class="m-caption" style="margin-top:4px;font-size:14px">Position history is kept for 90 days and then deleted. Muster and incident records are kept longer under the QHSE policy.</div>
              </div>
            </div>
          </div>

          <div class="grow"></div>
          <a class="m-btn secondary" href="profile.html">Done</a>
        </div>`;
  }
});
