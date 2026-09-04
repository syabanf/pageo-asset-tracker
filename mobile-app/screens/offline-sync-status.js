/* Converted from mobile/offline.html (state: Sync status) */
// converted
PN.page("offline-sync-status", {
  title: "Offline — Sync status",
  icon: "wifioff",
  nav: "home",
  time: "15:42",
  offline: true,
  hidden: true,
  render() {
    return `<header class="m-top">
          <a class="back" href="home.html" aria-label="Back"><i data-icon="chevronleft" class="ic-24"></i></a>
          <div class="m-title">Sync status</div>
          <span class="m-sync pending"><i data-icon="alert"></i>Offline</span>
        </header>
        <div class="m-body">
          <div class="m-section" style="padding-top:0"><span class="eyebrow">Indicator states</span></div>
          <div class="m-list">
            <div class="li"><span class="m-sync ok" style="width:120px;font-size:14px"><i data-icon="checkcircle"></i>Synced</span><div class="li-body"><div class="li-sub">All events delivered. Last sync time shown.</div></div></div>
            <div class="li"><span class="m-sync busy" style="width:120px;font-size:14px"><i data-icon="refresh"></i>Syncing</span><div class="li-body"><div class="li-sub">Connection restored; stored events are being sent.</div></div></div>
            <div class="li"><span class="m-sync pending" style="width:120px;font-size:14px"><i data-icon="alert"></i>Offline · 12</span><div class="li-body"><div class="li-sub">No connection. Count of events waiting to send.</div></div></div>
          </div>

          <div class="m-section"><span class="eyebrow">Pending events (7)</span><span class="m-caption">Oldest first</span></div>
          <div class="m-list">
            <div class="li"><span class="st" style="background:var(--s-offline-bg);color:var(--text-2)"><i data-icon="pin"></i></span><div class="li-body">Check-in<div class="li-sub">Site check-in · MV Pageo 02</div></div><span class="li-right">14:31</span></div>
            <div class="li"><span class="st" style="background:var(--s-offline-bg);color:var(--text-2)"><i data-icon="scanline"></i></span><div class="li-body">Scan MBES-03<div class="li-sub">Custody confirmed · RD-M03</div></div><span class="li-right">14:40</span></div>
            <div class="li"><span class="st" style="background:var(--s-offline-bg);color:var(--text-2)"><i data-icon="locate"></i></span><div class="li-body">Position ×5<div class="li-sub">14:45 – 15:42 · ± 7–9 m</div></div><span class="li-right">15:42</span></div>
          </div>
          <div class="m-caption" style="padding:0 4px">Events are kept on this phone until they are confirmed by the server. Emergency actions (SOS, muster) use SMS fallback when available.</div>

          <a class="m-btn secondary" href="offline-syncing.html"><i data-icon="refresh"></i>Retry sync</a>
        </div>`;
  }
});
