// handwritten — Login
(function () {
  const body = (inner, cls) => '<div class="m-body ' + (cls || '') + '">' + inner + '</div>';
  function loginScreen(error) {
    return M.top({ sos: false, title: '' }) + body(
      '<div class="m-login-top"><span class="logo-mark" data-logo style="width:132px"></span><div><div class="m-h1">Welcome back</div><div class="m-caption">Sign in to start your operation · PT Pageo Utama</div></div></div>' +
      M.card(
        M.input({ label: 'Employee ID', value: 'PG-0142', icon: 'user', error: error ? ' ' : '' }) +
        M.input({ label: 'Password', value: '••••••••••', icon: 'lock', type: 'password', right: C.icon('eye', 'ic-18'), error: error ? 'Employee ID or password is incorrect.' : '' }) +
        '<label class="row between" style="font-size:15px;font-weight:500">Remember this device' + C.switch(true) + '</label>' +
        M.btn('Sign in', 'primary', 'login', 'home-location-sharing-off.html') +
        M.btn('Use fingerprint', 'tertiary', 'fingerprint', 'home-location-sharing-off.html'),
        'm-login-card') +
      '<div class="m-note">' + C.icon('shield', 'ic-14') + ' Location is only shared during an active operation.</div>'
    );
  }
  PN.page('login', { title: 'Login', icon: 'lock', nav: 'none', time: '07:51', render() { return loginScreen(false); } });
  PN.page('login-error', { title: 'Login — Error state', icon: 'lock', nav: 'none', time: '07:51', render() { return loginScreen(true); } });
})();
