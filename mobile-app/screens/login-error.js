/* Converted from mobile/login.html (state: Error state) */
// converted
PN.page("login-error", {
  title: "Login — Error state",
  icon: "lock",
  nav: "none",
  time: "07:49",
  hidden: true,
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

          <div class="m-field invalid">
            <label for="emp-b">Employee ID</label>
            <div class="m-input"><i data-icon="user"></i><input id="emp-b" type="text" value="PG-0142" autocomplete="username" spellcheck="false"></div>
          </div>
          <div class="m-field invalid">
            <label for="pw-b">Password</label>
            <div class="m-input"><i data-icon="lock"></i><input id="pw-b" type="password" value="pageo2025" autocomplete="current-password"><i data-icon="eye"></i></div>
            <div class="err"><i data-icon="alert" class="ic-14" style="display:inline-block;vertical-align:-2px;margin-right:4px"></i>Employee ID or password is incorrect.</div>
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
