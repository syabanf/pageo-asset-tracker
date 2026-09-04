/* Converted from mobile/login.html (state: Default) */
// converted
PN.page("login", {
  title: "Login",
  icon: "lock",
  nav: "none",
  time: "07:48",
  render() {
    return `<header class="m-top" style="justify-content:center;padding-top:32px;padding-bottom:0">
          <div class="logo dark" style="align-items:center;gap:4px">
            <span class="logo-mark" data-logo style="width:150px;color:var(--pageo-black)"></span>
            <span class="logo-sub">Navigator</span>
          </div>
        </header>
        <div class="m-body" style="gap:16px;padding-bottom:28px">
          <div class="grow" style="flex:0 1 48px"></div>
          <div>
            <div class="m-h1">Sign in</div>
            <div class="m-caption" style="margin-top:4px">Employee authentication · PT Pageo Utama</div>
          </div>

          <div class="m-field">
            <label for="emp-a">Employee ID</label>
            <div class="m-input"><i data-icon="user"></i><input id="emp-a" type="text" value="PG-0142" autocomplete="username" spellcheck="false"></div>
          </div>
          <div class="m-field">
            <label for="pw-a">Password</label>
            <div class="m-input"><i data-icon="lock"></i><input id="pw-a" type="password" value="pageo-2026" autocomplete="current-password"><i data-icon="eye"></i></div>
          </div>

          <div class="row between" style="padding:2px 2px 4px">
            <span class="m-label">Remember this device</span>
            <span class="switch on" role="switch" aria-checked="true" aria-label="Remember this device"></span>
          </div>

          <a class="m-btn primary" href="home-location-sharing-off.html">Sign in</a>
          <a class="m-btn tertiary" href="home-location-sharing-off.html"><i data-icon="fingerprint"></i>Use fingerprint</a>

          <div class="grow"></div>
          <div class="m-caption" style="text-align:center;padding:0 12px">Location is only shared during an active operation.</div>
        </div>`;
  }
});
