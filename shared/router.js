/* ============================================================
   PAGEO Navigator — per-app hash router
   PN.app({ kind: 'web' | 'mobile' | 'ds', home: 'overview' })
   Pages register with PN.page(id, { title, nav, crumb, render, after, hidden })
   Links: href="personnel.html" or "#personnel" → route; hrefs with a "/" leave the app.
   ============================================================ */
(function () {
  const PN = window.PN;
  PN.pages = {}; PN.order = [];
  PN.page = function (id, def) { def.id = id; PN.pages[id] = def; if (PN.order.indexOf(id) < 0) PN.order.push(id); };
  let cfg = null, current = null;

  function resolve(href) {
    if (!href || /^(https?:|mailto:|tel:)/.test(href) || href === '#') return null;
    if (href.charAt(0) === '#') return href.slice(1) || null;
    if (href.indexOf('/') >= 0) return null;
    if (/\.html(\?.*)?$/.test(href)) return href.replace(/\.html(\?.*)?$/, '$1');
    return null;
  }

  PN.route = function (id, opts) {
    opts = opts || {};
    let qs = ''; const qi = (id || '').indexOf('?');
    if (qi >= 0) { qs = id.slice(qi + 1); id = id.slice(0, qi); }
    const params = {}; if (qs) { qs.split('&').forEach(function (kv) { const p = kv.split('='); params[decodeURIComponent(p[0])] = decodeURIComponent(p[1] || ''); }); }
    PN.params = params;
    if (!PN.pages[id]) id = cfg.home;
    const def = PN.pages[id];
    const full = id + (qs ? '?' + qs : '');
    const stage = document.getElementById('stage');
    Array.prototype.slice.call(stage.attributes).forEach(function (a) { if (a.name.indexOf('data-') === 0) stage.removeAttribute(a.name); });
    stage.className = cfg.kind;
    if (def.nav != null && cfg.kind !== 'mobile') stage.setAttribute('data-nav', def.nav);
    if (def.crumb) stage.setAttribute('data-crumb', def.crumb);
    if (cfg.kind === 'mobile') {
      stage.innerHTML = '<div class="phone" data-mnav="' + (def.nav || 'none') + '" data-time="' + (def.time || '15:42') + '"' + (def.offline ? ' data-offline' : '') + (def.lowbatt ? ' data-lowbatt' : '') + '><div class="screen' + (def.dark ? ' dark' : '') + '">' + def.render() + '</div></div>';
    } else {
      stage.innerHTML = '<main class="page' + (def.pageCls ? ' ' + def.pageCls : '') + '" id="page">' + def.render(params) + '</main>';
    }
    current = full;
    PN.init(stage);
    if (def.after) def.after(stage);
    stage.scrollTop = 0;
    document.title = def.title + ' · ' + cfg.title;
    if (location.hash !== '#' + full) { if (opts.replace) history.replaceState(null, '', '#' + full); else history.pushState(null, '', '#' + full); }
    if (cfg.onRoute) cfg.onRoute(id, def);
  };
  PN.current = function () { return current; };

  PN.app = function (c) {
    cfg = c;
    document.addEventListener('DOMContentLoaded', function () {
      const stage = document.getElementById('stage');
      stage.addEventListener('click', function (e) {
        const a = e.target.closest('a[href]'); if (!a) return;
        const href = a.getAttribute('href');
        if (href === '#') { e.preventDefault(); return; }
        const id = resolve(href);
        if (id) { e.preventDefault(); PN.route(id); }
      });
      document.addEventListener('click', function (e) {
        const g = e.target.closest('[data-go]'); if (g && PN.pages[g.getAttribute('data-go')]) { e.preventDefault(); PN.route(g.getAttribute('data-go')); }
      });
      window.addEventListener('hashchange', function () { const id = location.hash.slice(1); if (id !== current) PN.route(id, { replace: true }); });
      if (cfg.setup) cfg.setup();
      PN.route(location.hash.slice(1) || cfg.home, { replace: true });
    });
  };
})();
