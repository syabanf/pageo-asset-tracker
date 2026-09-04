/* Converted from mobile/profile.html (state: Profile) */
// converted
PN.page("profile", {
  title: "Profile",
  icon: "user",
  nav: "profile",
  time: "15:42",
  render() {
    return `<header class="m-top">
          <div class="m-title">Profile</div>
          <a class="m-sos-btn" href="sos.html" aria-label="Emergency SOS">SOS</a>
        </header>
        <div class="m-body">
          <div class="m-card">
            <div class="row" style="gap:14px">
              <span class="avatar lg">FS</span>
              <div class="grow">
                <div class="m-card-title">Fahmi Syaban</div>
                <div class="m-caption">Survey Engineer · PG-0142</div>
              </div>
              <span class="m-chip active"><span class="dot ok"></span>Active</span>
            </div>
          </div>

          <div class="m-card">
            <span class="eyebrow">Tracking &amp; privacy</span>
            <span class="m-tracking"><span class="dot ok pulse"></span>Location sharing active</span>
            <div class="m-body-text">Location sharing is active while you are assigned to this operation.</div>
            <dl class="m-kv" style="font-size:15px">
              <dt>Started</dt><dd>04 Sep · 08:03</dd>
              <dt>Shared with</dt><dd>Project Alpha ops team</dd>
              <dt>Retention</dt><dd>90 days</dd>
            </dl>
            <a class="m-btn tertiary" href="profile-how-tracking-works.html"><i data-icon="book"></i>Learn how tracking works</a>
          </div>

          <div class="m-section"><span class="eyebrow">Device</span></div>
          <div class="m-list">
            <div class="li"><i data-icon="locate" class="ic-24"></i><div class="li-body">GPS</div><span class="li-right ok" style="font-weight:600">Good · ± 7 m</span></div>
            <div class="li"><i data-icon="battery" class="ic-24"></i><div class="li-body">Battery</div><span class="li-right">82%</span></div>
            <div class="li"><i data-icon="smartphone" class="ic-24"></i><div class="li-body">App version</div><span class="li-right">1.4.2</span></div>
            <div class="li"><i data-icon="refresh" class="ic-24"></i><div class="li-body">Offline buffer</div><span class="li-right">0 events</span></div>
            <div class="li"><i data-icon="shieldcheck" class="ic-24"></i><div class="li-body">Permissions<div class="li-sub">Location · Notifications</div></div><span class="st" style="background:var(--s-success-bg);color:var(--s-success)"><i data-icon="check"></i></span></div>
          </div>

          <div class="m-section"><span class="eyebrow">Account</span></div>
          <div class="m-list">
            <a class="li" href="profile.html" style="color:inherit"><i data-icon="phone" class="ic-24"></i><div class="li-body">Emergency contact<div class="li-sub">Rina Syaban · +62 812 ··· 4471</div></div><i data-icon="chevronright"></i></a>
            <a class="li" href="profile.html" style="color:inherit"><i data-icon="clipboard" class="ic-24"></i><div class="li-body">Certifications<div class="li-sub">BOSIET · valid 2027</div></div><i data-icon="chevronright"></i></a>
            <a class="li" href="profile.html" style="color:inherit"><i data-icon="book" class="ic-24"></i><div class="li-body">Language</div><span class="li-right">English</span><i data-icon="chevronright"></i></a>
            <a class="li" href="login.html" style="color:var(--s-crit)"><i data-icon="logout" class="ic-24" style="color:var(--s-crit)"></i><div class="li-body">Sign out</div></a>
          </div>
        </div>`;
  }
});
