/* ============================================================
   PAGEO Navigator — component library (HTML string renderers)
   C.*  = shared + web components      M.* = mobile components
   Every function returns an HTML string; PN.init() wires behavior.
   ============================================================ */
(function () {
  const PN = window.PN;
  const esc = function (s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); };
  const cls = function () { return Array.prototype.slice.call(arguments).filter(Boolean).join(' '); };
  const icon = function (name, c) { return name ? PN.icon(name, c) : ''; };
  const C = (window.C = {});
  const M = (window.M = {});
  C.esc = esc; C.icon = icon; C.cls = cls;

  /* ---------- atoms ---------- */
  C.dot = function (kind, pulse) { return '<span class="dot ' + (kind || '') + (pulse ? ' pulse' : '') + '"></span>'; };
  C.chip = function (kind, text, o) {
    o = o || {};
    return '<span class="chip ' + (kind || '') + (o.sm ? ' sm' : '') + (o.lg ? ' lg' : '') + (o.outline ? ' outline' : '') + '">' + (o.dot === false ? '' : C.dot(kind)) + esc(text) + '</span>';
  };
  C.sev = function (p) { return '<span class="sev p' + p + '">P' + p + '</span>'; };
  C.fresh = function (state, text) { return '<span class="fresh ' + state + '"><b>' + state.toUpperCase() + '</b>' + esc(text) + '</span>'; };
  C.badge = function (n, kind) { return '<span class="badge ' + (kind || '') + '">' + n + '</span>'; };
  C.avatar = function (initials, c) { return '<span class="avatar ' + (c || '') + '">' + esc(initials) + '</span>'; };
  C.initials = function (name) { return name.split(/\s+/).map(function (w) { return w[0]; }).slice(0, 2).join('').toUpperCase(); };
  C.btn = function (label, c, ic, attrs) { return '<button class="btn ' + (c || '') + '"' + (attrs ? ' ' + attrs : '') + '>' + icon(ic) + (label ? esc(label) : '') + '</button>'; };
  C.link = function (label, href, ic) { return '<a class="link" href="' + href + '">' + esc(label) + ' ' + icon(ic || 'arrowright', 'ic-14') + '</a>'; };
  C.iconBtn = function (ic, o) { o = o || {}; return '<button class="icon-btn' + (o.bordered ? ' bordered' : '') + '" aria-label="' + esc(o.label || ic) + '">' + icon(ic) + (o.pip ? '<span class="pip"></span>' : '') + '</button>'; };
  C.eyebrow = function (t) { return '<div class="eyebrow">' + esc(t) + '</div>'; };
  C.divider = function () { return '<div class="divider"></div>'; };

  /* ---------- inputs ---------- */
  C.input = function (o) {
    o = o || {};
    const inner = o.select
      ? icon(o.icon) + '<span' + (o.placeholder && !o.value ? ' class="muted"' : '') + '>' + esc(o.value || o.placeholder) + '</span>' + icon('chevrondown', 'chev')
      : icon(o.icon) + '<input type="' + (o.type || 'text') + '" placeholder="' + esc(o.placeholder || '') + '" value="' + esc(o.value || '') + '" aria-label="' + esc(o.label || o.placeholder || '') + '">' + (o.clear ? icon('x', 'ic-16') : '');
    const box = '<div class="input' + (o.select ? ' select' : '') + (o.sm ? ' sm' : '') + (o.focus ? ' focus' : '') + (o.disabled ? ' disabled' : '') + '"' + (o.style ? ' style="' + o.style + '"' : '') + '>' + inner + '</div>';
    if (!o.label && !o.help && !o.error) return box;
    return '<div class="field' + (o.error ? ' invalid' : '') + '"' + (o.width ? ' style="width:' + o.width + '"' : '') + '><label>' + esc(o.label) + '</label>' + box + (o.help ? '<div class="help">' + esc(o.help) + '</div>' : '') + (o.error ? '<div class="err">' + icon('alert', 'ic-14') + esc(o.error) + '</div>' : '') + '</div>';
  };
  C.search = function (placeholder, o) { return C.input(Object.assign({ icon: 'search', placeholder: placeholder || 'Search…' }, o || {})); };
  C.select = function (value, o) { return C.input(Object.assign({ select: true, value: value }, o || {})); };
  C.switch = function (on, disabled) { return '<button class="switch' + (on ? ' on' : '') + (disabled ? ' disabled' : '') + '" role="switch" aria-checked="' + !!on + '"></button>'; };
  C.checkbox = function (on) { return '<span class="checkbox' + (on ? ' on' : '') + '">' + (on ? icon('check') : '') + '</span>'; };
  C.radio = function (on) { return '<span class="radio' + (on ? ' on' : '') + '"></span>'; };
  C.seg = function (items, active, o) {
    o = o || {};
    return '<div class="seg' + (o.sm ? ' sm' : '') + '"' + (o.attr ? ' ' + o.attr : '') + '>' + items.map(function (it, i) {
      const key = typeof it === 'string' ? it : it.key; const label = typeof it === 'string' ? it : it.label;
      const act = active === undefined ? i === 0 : (active === key || active === i);
      return '<button class="' + (act ? 'active' : '') + '"' + (o.data ? ' data-' + o.data + '="' + esc(key) + '"' : '') + '>' + (it.icon ? icon(it.icon, 'ic-16') : '') + esc(label) + '</button>';
    }).join('') + '</div>';
  };
  C.tabs = function (items, active, o) {
    o = o || {};
    return '<div class="tabs' + (o.pills ? ' pills' : '') + '"' + (o.group ? ' data-tabs="' + o.group + '"' : '') + '>' + items.map(function (it, i) {
      const key = typeof it === 'string' ? it : it.key; const label = typeof it === 'string' ? it : it.label;
      const act = active === undefined ? i === 0 : (active === key || active === i);
      return '<button class="tab' + (act ? ' active' : '') + '"' + (o.group ? ' data-tab="' + esc(key) + '"' : '') + '>' + esc(label) + (it.count != null ? '<span class="badge light">' + it.count + '</span>' : '') + '</button>';
    }).join('') + '</div>';
  };

  /* ---------- layout ---------- */
  C.pageHead = function (o) {
    return '<div class="page-head"><div class="titles">' + (o.eyebrow ? C.eyebrow(o.eyebrow) : '') + '<h1>' + esc(o.title) + '</h1>' + (o.sub ? '<div class="sub">' + o.sub + '</div>' : '') + '</div>' + (o.actions ? '<div class="actions">' + o.actions + '</div>' : '') + '</div>';
  };
  C.card = function (o) {
    o = o || {};
    const head = (o.title || o.eyebrow || o.right || o.link) ? '<div class="card-head">' + (o.eyebrow ? C.eyebrow(o.eyebrow) : '<span class="card-title">' + esc(o.title) + (o.badge ? ' <span class="badge light">' + o.badge + '</span>' : '') + '</span>') + (o.right ? o.right : (o.link ? C.link(o.link.label, o.link.href) : '')) + '</div>' : '';
    return '<div class="card ' + (o.cls || '') + '"' + (o.style ? ' style="' + o.style + '"' : '') + '>' + head + (o.body || '') + (o.foot ? '<div class="card-foot">' + o.foot + '</div>' : '') + '</div>';
  };
  C.grid = function (cols, o) { o = o || {}; return '<div class="grid' + (o.g16 ? ' g16' : '') + (o.cls ? ' ' + o.cls : '') + '"' + (o.style ? ' style="' + o.style + '"' : '') + '>' + cols.join('') + '</div>'; };
  C.col = function (span, inner, c) { return '<div class="c' + span + (c ? ' ' + c : '') + '">' + inner + '</div>'; };
  C.stack = function (items, gap) { return '<div class="stack' + (gap ? ' s' + gap : '') + '">' + items.join('') + '</div>'; };
  C.row = function (items, c) { return '<div class="row ' + (c || '') + '">' + items.join('') + '</div>'; };

  /* ---------- KPI ---------- */
  C.sparkline = function (values, o) {
    o = o || {};
    const w = o.w || 84, h = o.h || 30, max = Math.max.apply(null, values), min = Math.min.apply(null, values);
    const pts = values.map(function (v, i) { return [(i / (values.length - 1)) * w, h - ((v - min) / ((max - min) || 1)) * (h - 4) - 2]; });
    const d = pts.map(function (p, i) { return (i ? 'L' : 'M') + p[0].toFixed(1) + ',' + p[1].toFixed(1); }).join(' ');
    const color = o.color || '#168FBF';
    return '<svg viewBox="0 0 ' + w + ' ' + h + '" preserveAspectRatio="none"><path d="' + d + ' L' + w + ',' + h + ' L0,' + h + ' Z" fill="' + color + '" fill-opacity=".12"/><path d="' + d + '" fill="none" stroke="' + color + '" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/><circle cx="' + pts[pts.length - 1][0].toFixed(1) + '" cy="' + pts[pts.length - 1][1].toFixed(1) + '" r="2.5" fill="' + color + '"/></svg>';
  };
  C.kpi = function (o) {
    const lines = (o.lines || []).map(function (l) { return '<span>' + C.dot(l.kind) + '&nbsp;<span class="num">' + l.num + '</span>' + esc(l.text) + '</span>'; }).join('');
    return '<div class="card kpi' + (o.compact ? ' compact' : '') + (o.alert ? ' alert' : '') + (o.cls ? ' ' + o.cls : '') + '"' + (o.attr ? ' ' + o.attr : '') + '>' +
      (o.icon ? '<span class="kpi-icon ' + (o.iconKind || '') + '">' + icon(o.icon) + '</span>' : '') +
      C.eyebrow(o.label) + '<div class="kpi-value">' + o.value + (o.unit ? '<small>' + esc(o.unit) + '</small>' : '') + '</div>' +
      (lines ? '<div class="kpi-lines">' + lines + '</div>' : '') +
      (o.delta ? '<span class="delta ' + (o.delta.kind || '') + '">' + icon(o.delta.icon || (o.delta.kind === 'down' ? 'arrowdown' : o.delta.kind === 'flat' ? 'minus' : 'arrowup'), 'ic-14') + esc(o.delta.text) + '</span>' : '') +
      (o.spark ? '<span class="kpi-spark">' + C.sparkline(o.spark, { color: o.sparkColor }) + '</span>' : '') +
      '</div>';
  };

  /* ---------- data display ---------- */
  C.table = function (o) {
    const cols = o.cols;
    const head = '<thead><tr>' + cols.map(function (c) { return '<th class="' + cls(c.num && 'num', c.sortable !== false && o.sortable && 'sortable') + '"' + (c.width ? ' style="width:' + c.width + '"' : '') + '>' + esc(c.label == null ? c.key : c.label) + (o.sortable && c.sortable !== false && c.label ? icon('chevronsupdown') : '') + '</th>'; }).join('') + '</tr></thead>';
    const body = '<tbody>' + o.rows.map(function (r, i) {
      return '<tr' + (r._selected ? ' class="selected"' : '') + '>' + cols.map(function (c) {
        const v = c.render ? c.render(r, i) : esc(r[c.key]);
        return '<td class="' + cls(c.num && 'num', c.cls) + '">' + (v == null ? '' : v) + '</td>';
      }).join('') + '</tr>';
    }).join('') + '</tbody>';
    const table = '<div class="table-wrap"><table class="table ' + (o.density || '') + '">' + head + body + '</table></div>';
    if (o.bare) return table;
    return '<div class="card p0">' + (o.head ? '<div class="card-head">' + o.head + '</div>' : '') + table + (o.foot !== false ? '<div class="table-foot"><span>' + (o.footText || ('Showing 1–' + o.rows.length + ' of ' + (o.total || o.rows.length))) + '</span>' + C.pager(o.pages || 3) + '</div>' : '') + '</div>';
  };
  C.pager = function (n) { let s = '<div class="pager"><button aria-label="Previous">' + icon('chevronleft', 'ic-14') + '</button>'; for (let i = 1; i <= n; i++) s += '<button class="' + (i === 1 ? 'active' : '') + '">' + i + '</button>'; return s + '<button aria-label="Next">' + icon('chevronright', 'ic-14') + '</button></div>'; };
  C.entityCell = function (o) { return '<div class="cell-entity">' + (o.avatar ? C.avatar(o.avatar, 'sm') : o.icon ? '<span class="entity-tile" style="padding:0;border:0;background:none"><span class="sym ' + (o.symCls || 'dark') + '" style="width:28px;height:28px;border-radius:8px">' + icon(o.icon, 'ic-14') + '</span></span>' : '') + '<div>' + (o.href ? '<a class="name" href="' + o.href + '" style="color:inherit">' + esc(o.name) + '</a>' : '<span class="name">' + esc(o.name) + '</span>') + (o.sub ? '<div class="sub">' + esc(o.sub) + '</div>' : '') + '</div></div>'; };
  C.kv = function (pairs, o) { o = o || {}; return '<dl class="kv' + (o.stack ? ' stack' : '') + '">' + pairs.map(function (p) { return '<dt>' + esc(p[0]) + '</dt><dd' + (p[2] ? ' class="' + p[2] + '"' : '') + '>' + p[1] + '</dd>'; }).join('') + '</dl>'; };
  C.kvGrid = function (pairs, o) { o = o || {}; return '<div class="kv-grid"' + (o.style ? ' style="' + o.style + '"' : '') + '>' + pairs.map(function (p) { return '<div><div class="k">' + esc(p[0]) + '</div><div class="v' + (p[2] ? ' ' + p[2] : '') + '">' + p[1] + '</div></div>'; }).join('') + '</div>'; };
  C.statList = function (items, total) {
    return '<div class="stat-list">' + items.map(function (s) { const pct = Math.round((s.n / (total || items[0].n)) * 100); return '<div class="stat">' + C.dot(s.kind) + '<span class="n">' + s.n + '</span><span class="l">' + esc(s.label) + '</span><div class="bar"><i style="width:' + pct + '%' + (s.color ? ';background:' + s.color : '') + '"></i></div></div>'; }).join('') + '</div>';
  };
  C.progress = function (pct, kind, lg) { return '<div class="progress ' + (kind || '') + (lg ? ' lg' : '') + '"><i style="width:' + pct + '%"></i></div>'; };
  C.ring = function (pct, kind, lg) { return '<span class="ring ' + (kind || '') + (lg ? ' lg' : '') + '" style="--p:' + pct + '"><span>' + pct + '%</span></span>'; };
  C.timeline = function (items) { return '<div class="timeline">' + items.map(function (t) { return '<div class="tl"><span class="time">' + esc(t.time) + '</span><span class="node">' + C.dot(t.kind) + '</span><div class="body">' + (t.html || esc(t.text)) + (t.sub ? '<div class="sub">' + esc(t.sub) + '</div>' : '') + '</div></div>'; }).join('') + '</div>'; };
  C.feed = function (items) { return '<div class="feed">' + items.map(function (e) { return '<div class="ev"><span class="time">' + esc(e.time) + '</span>' + icon(e.icon) + '<div>' + e.html + (e.sub ? ' <span class="sub">· ' + esc(e.sub) + '</span>' : '') + '</div>' + (e.tag ? C.chip(e.tagKind || 'neutral', e.tag, { sm: true, dot: !!e.tagDot }) : '') + '</div>'; }).join('') + '</div>'; };
  C.entity = function (o) { return '<div class="entity"' + (o.style ? ' style="' + o.style + '"' : '') + '>' + (o.avatar ? C.avatar(o.avatar) : o.icon ? '<span class="entity-tile" style="padding:0;border:0;background:none"><span class="sym ' + (o.symCls || '') + '">' + icon(o.icon) + '</span></span>' : '') + '<div class="e-body"><div class="e-title">' + (o.href ? '<a href="' + o.href + '" style="color:inherit">' + esc(o.title) + '</a>' : esc(o.title)) + '</div>' + (o.sub ? '<div class="e-sub">' + esc(o.sub) + '</div>' : '') + '</div>' + (o.right ? '<div class="e-right">' + o.right + '</div>' : '') + '</div>'; };
  C.entityTile = function (o) { return '<div class="entity-tile"' + (o.style ? ' style="' + o.style + '"' : '') + '><span class="sym ' + (o.symCls || 'dark') + '">' + icon(o.icon || 'diamond') + '</span><div class="grow"><div class="strong">' + esc(o.title) + '</div>' + (o.sub ? '<div class="t-caption">' + esc(o.sub) + '</div>' : '') + '</div>' + (o.right || '') + '</div>'; };
  C.checklist = function (items) { return '<div class="checklist">' + items.map(function (c) { const ic = c.state === 'ok' ? 'check' : c.state === 'warn' ? 'warning' : c.state === 'crit' ? 'x' : ''; return '<div class="ck ' + (c.state || 'pending') + '"><span class="st">' + (ic ? icon(ic) : '') + '</span><div><div>' + esc(c.label) + '</div>' + (c.sub ? '<div class="sub">' + esc(c.sub) + '</div>' : '') + '</div>' + (c.right ? '<span class="right">' + esc(c.right) + '</span>' : '') + '</div>'; }).join('') + '</div>'; };
  C.flow = function (steps) { return '<div class="flow">' + steps.map(function (s, i) { return (i ? '<span class="arrow' + (s.state === 'done' || s.state === 'current' ? ' done' : '') + '"></span>' : '') + '<div class="step ' + (s.state || '') + '"><span class="n">' + (s.state === 'done' ? icon('check') : (i + 1)) + '</span><span>' + esc(s.label) + '</span>' + (s.sub ? '<span class="t-micro">' + esc(s.sub) + '</span>' : '') + '</div>'; }).join('') + '</div>'; };
  C.alert = function (a) {
    return '<div class="alert-card p' + a.sev + (a.sev === 1 ? ' crit' : '') + (a.selected ? ' selected' : '') + '"><div class="a-head">' + C.sev(a.sev) + esc(a.kind || ({ 1: 'Critical', 2: 'High', 3: 'Warning', 4: 'Information' })[a.sev]) + '<span class="when">' + esc(a.when) + '</span></div><div class="a-title">' + esc(a.title) + '</div><div class="a-meta">' + (a.meta || []).map(function (m) { return '<span>' + m + '</span>'; }).join('') + '</div>' + (a.actions !== false ? '<div class="a-actions">' + (a.actions || (C.btn('View location', 'xs primary') + C.btn('Acknowledge', 'xs ghost', null, 'data-ack'))) + '</div>' : '') + '</div>';
  };
  C.banner = function (kind, html, actions, ic) { return '<div class="banner ' + kind + '">' + icon(ic || ({ crit: 'warning', warn: 'alert', info: 'info', ok: 'checkcircle', offline: 'wifioff' })[kind] || 'info') + '<span>' + html + '</span>' + (actions ? '<span class="banner-actions">' + actions + '</span>' : '') + '</div>'; };
  C.empty = function (o) { return '<div class="empty">' + icon(o.icon || 'users') + C.eyebrow(o.title) + '<p>' + esc(o.text) + '</p>' + (o.action ? C.btn(o.action, 'secondary sm') : '') + '</div>'; };
  C.skeleton = function () { return '<div class="skeleton"><i class="h32"></i><i class="w80"></i><i class="w60"></i><i class="w40"></i><i class="h120"></i></div>'; };
  C.hbars = function (items, o) { o = o || {}; return '<div class="hbars">' + items.map(function (b) { return '<div class="hb"><span>' + esc(b.label) + '</span><div class="track"><i class="' + (b.kind || '') + '" style="width:' + b.pct + '%"></i></div><span class="val">' + esc(b.val != null ? b.val : b.pct + '%') + '</span></div>'; }).join('') + '</div>'; };
  C.bars = function (values, labels, o) { o = o || {}; const max = Math.max.apply(null, values); return '<div class="bars"' + (o.height ? ' style="height:' + o.height + 'px"' : '') + '>' + values.map(function (v, i) { const s = o.seq ? ' s' + (Math.min(6, Math.max(1, Math.ceil((v / max) * 6)))) : ''; return '<div class="bar' + s + (o.muteLast && i === values.length - 1 ? ' muted' : '') + '" style="height:' + Math.round((v / max) * 100) + '%" title="' + v + '"></div>'; }).join('') + '</div>' + (labels ? '<div class="bar-labels">' + labels.map(function (l) { return '<span>' + esc(l) + '</span>'; }).join('') + '</div>' : ''); };
  C.stackbar = function (parts) { return '<div class="stackbar">' + parts.map(function (p) { return '<i style="width:' + p.pct + '%;background:' + p.color + '"></i>'; }).join('') + '</div>'; };
  C.legend = function (items) { return '<div class="legend">' + items.map(function (l) { return '<span><i style="background:' + l.color + '"></i>' + esc(l.label) + '</span>'; }).join('') + '</div>'; };

  /* ---------- map ---------- */
  C.marker = function (m) {
    const iconName = m.icon || ({ person: 'user', asset: 'diamond', vessel: 'ship', site: 'warehouse', muster: 'plus', reader: '', cluster: '', me: '' })[m.kind];
    const sym = m.kind === 'cluster' ? '<span class="sym">' + m.count + '</span>' : m.kind === 'reader' || m.kind === 'me' ? '<span class="sym"></span>' : '<span class="sym">' + icon(iconName) + '</span>';
    const lbl = m.label ? '<span class="lbl">' + esc(m.label) + (m.sub ? '<small>' + esc(m.sub) + '</small>' : '') + '</span>' : '';
    const acc = m.accuracy ? '<span class="accuracy" style="width:' + m.accuracy + 'px;height:' + m.accuracy + 'px;left:50%;top:50%;transform:translate(-50%,-50%)"></span>' : '';
    return '<div class="mk ' + m.kind + (m.state ? ' ' + m.state : '') + (m.cls ? ' ' + m.cls : '') + '" style="left:' + m.x + '%;top:' + m.y + '%"' + (m.popup ? ' data-popup="' + m.popup + '"' : '') + '>' + acc + sym + lbl + '</div>';
  };
  C.mapLegend = function (kinds) {
    const all = { person: 'Person', asset: 'Asset', vessel: 'Vessel', site: 'Site', fence: 'Geofence', reader: 'RFID reader', muster: 'Muster point' };
    kinds = kinds || Object.keys(all);
    return '<div class="map-legend">' + kinds.map(function (k) { return '<span class="lg"><span class="sym ' + k + '"></span>' + all[k] + '</span>'; }).join('') + '</div>';
  };
  C.mapCtl = function () { return '<div class="map-ctl"><button aria-label="Zoom in">' + icon('plus') + '</button><button aria-label="Zoom out">' + icon('minus') + '</button><button aria-label="Locate">' + icon('locate') + '</button></div>'; };
  C.popup = function (o) {
    return '<div class="popup' + (o.static ? ' static' : '') + (o.hidden ? ' hide' : '') + '"' + (o.id ? ' data-for="' + o.id + '"' : '') + (o.x != null ? ' style="left:' + o.x + '%;top:' + o.y + '%"' : '') + '>' +
      (o.eyebrow ? '<div class="p-eyebrow">' + esc(o.eyebrow) + '</div>' : '') +
      '<div class="p-head">' + (o.avatar ? C.avatar(o.avatar, 'sm') : o.icon ? '<span class="entity-tile" style="padding:0;border:0;background:none"><span class="sym ' + (o.symCls || 'dark') + '" style="width:28px;height:28px;border-radius:8px">' + icon(o.icon, 'ic-14') + '</span></span>' : '') + '<div><div class="p-title">' + esc(o.title) + '</div>' + (o.sub ? '<div class="p-sub">' + esc(o.sub) + '</div>' : '') + '</div></div>' +
      (o.kv ? C.kv(o.kv) : '') + (o.actions ? '<div class="p-actions">' + o.actions + '</div>' : '') + '</div>';
  };
  C.map = function (o) {
    o = o || {};
    const fences = (o.fences || []).map(function (f) { return '<div data-fence="' + f.pts + '"' + (f.kind ? ' data-kind="' + f.kind + '"' : '') + (f.label ? ' data-label="' + esc(f.label) + '"' : '') + '></div>'; }).join('');
    const tracks = (o.tracks || []).map(function (t) { return '<div data-track="' + t.pts + '"' + (t.color ? ' data-color="' + t.color + '"' : '') + '></div>'; }).join('');
    const markers = (o.markers || []).map(C.marker).join('');
    const popups = (o.popups || []).map(C.popup).join('');
    const ui = [];
    if (o.legend !== false) ui.push('<div class="map-ui bl">' + C.mapLegend(o.legend) + '</div>');
    if (o.ctl !== false) ui.push('<div class="map-ui br">' + C.mapCtl() + '</div>');
    if (o.tr) ui.push('<div class="map-ui tr">' + o.tr + '</div>');
    if (o.tl) ui.push('<div class="map-ui tl">' + o.tl + '</div>');
    if (o.bc) ui.push('<div class="map-ui bc">' + o.bc + '</div>');
    if (o.tc) ui.push('<div class="map-ui tc">' + o.tc + '</div>');
    return '<div class="map' + (o.flush ? ' flush' : '') + (o.cls ? ' ' + o.cls : '') + '" data-map="' + (o.scene || 'coast') + '" style="' + (o.height ? 'height:' + o.height + 'px;' : '') + (o.style || '') + '">' + fences + tracks + markers + popups + ui.join('') + '</div>';
  };

  /* ---------- mobile ---------- */
  M.phone = function (o) {
    const attrs = ' data-mnav="' + (o.nav || 'none') + '" data-time="' + (o.time || '15:42') + '"' + (o.offline ? ' data-offline' : '') + (o.lowbatt ? ' data-lowbatt' : '');
    return '<div class="phone-wrap"><div class="phone"' + attrs + '><div class="screen' + (o.dark ? ' dark' : '') + '">' + (o.banner || '') + (o.header || '') + '<div class="m-body' + (o.center ? ' center' : '') + '"' + (o.bodyStyle ? ' style="' + o.bodyStyle + '"' : '') + '>' + (o.body || '') + '</div>' + (o.after || '') + '</div></div>' + (o.caption ? '<div class="caption">' + esc(o.caption) + '</div>' : '') + '</div>';
  };
  M.stage = function (note, phones) { return '<div class="stage">' + (note ? '<div class="stage-note">' + esc(note) + '</div>' : '') + phones.join('') + '</div>'; };
  M.top = function (o) {
    o = o || {};
    let left = o.brand ? '<span class="brand" data-logo></span>' : '';
    if (o.back) left += '<a class="back" href="' + (typeof o.back === 'string' ? o.back : 'home.html') + '" aria-label="Back">' + icon('arrowleft') + '</a>';
    if (o.close) left += '<a class="back" href="' + (typeof o.close === 'string' ? o.close : 'home.html') + '" aria-label="Close">' + icon('x') + '</a>';
    const title = o.title ? '<div class="m-title">' + (o.small ? '<small>' + esc(o.small) + '</small>' : '') + esc(o.title) + '</div>' : '<span class="grow"></span>';
    return '<header class="m-top">' + left + title + (o.right || '') + (o.sos !== false && !o.close ? '<a class="m-sos-btn" href="sos.html" aria-label="Emergency SOS">SOS</a>' : '') + '</header>';
  };
  M.sync = function (state, text) { const ic = { ok: 'checkcircle', busy: 'refresh', pending: 'alert' }[state]; return '<span class="m-sync ' + state + '">' + icon(ic) + esc(text) + '</span>'; };
  M.card = function (inner, c, style) { return '<div class="m-card ' + (c || '') + '"' + (style ? ' style="' + style + '"' : '') + '>' + inner + '</div>'; };
  M.kv = function (pairs, c) { return '<dl class="m-kv ' + (c || '') + '">' + pairs.map(function (p) { return '<dt>' + esc(p[0]) + '</dt><dd' + (p[2] ? ' class="' + p[2] + '"' : '') + '>' + p[1] + '</dd>'; }).join('') + '</dl>'; };
  M.btn = function (label, c, ic, href, attrs) { const tag = href ? 'a' : 'button'; return '<' + tag + ' class="m-btn ' + (c || '') + '"' + (href ? ' href="' + href + '"' : '') + (attrs ? ' ' + attrs : '') + '>' + icon(ic) + esc(label) + '</' + tag + '>'; };
  M.btnRow = function (btns) { return '<div class="m-btn-row">' + btns.join('') + '</div>'; };
  M.list = function (items) {
    return '<div class="m-list">' + items.map(function (it) {
      const ic = it.state === 'ok' ? 'check' : it.state === 'warn' ? 'warning' : it.state === 'crit' ? 'x' : null;
      const lead = it.state ? '<span class="st">' + (ic ? icon(ic) : '') + '</span>' : it.avatar ? C.avatar(it.avatar) : it.icon ? '<span class="li-icon ' + (it.iconCls || '') + '">' + icon(it.icon) + '</span>' : '';
      const tag = it.href ? 'a' : 'div';
      return '<' + tag + ' class="li ' + (it.state || '') + '"' + (it.href ? ' href="' + it.href + '" style="color:inherit"' : '') + '>' + lead + '<div class="li-body">' + esc(it.title) + (it.sub ? '<div class="li-sub">' + esc(it.sub) + '</div>' : '') + '</div>' + (it.right ? '<span class="li-right">' + it.right + '</span>' : '') + (it.chev ? icon('chevronright', 'ic-18') : '') + '</' + tag + '>';
    }).join('') + '</div>';
  };
  M.section = function (title, link, href) { return '<div class="m-section">' + C.eyebrow(title) + (link ? '<a href="' + (href || '#') + '">' + esc(link) + '</a>' : '') + '</div>'; };
  M.timeline = function (items) { return '<div class="m-timeline">' + items.map(function (t) { return '<div class="tl"><span class="time">' + esc(t.time) + '</span><span class="node">' + C.dot(t.kind) + '</span><div>' + esc(t.text) + (t.sub ? '<div class="sub">' + esc(t.sub) + '</div>' : '') + (t.tag ? ' <span class="m-chip off" style="height:22px;font-size:11px;padding:0 8px;margin-top:4px">' + esc(t.tag) + '</span>' : '') + '</div></div>'; }).join('') + '</div>'; };
  M.tracking = function (on, text) { return '<span class="m-tracking' + (on ? '' : ' off') + '">' + C.dot(on ? 'ok' : 'off', on) + esc(text || (on ? 'Tracking active' : 'Location sharing off')) + '</span>'; };
  M.chip = function (kind, text, ic) { return '<span class="m-chip ' + (kind || '') + '">' + (ic ? icon(ic, 'ic-16') : '') + esc(text) + '</span>'; };
  M.input = function (o) { o = o || {}; const box = '<div class="m-input">' + icon(o.icon) + '<input type="' + (o.type || 'text') + '" placeholder="' + esc(o.placeholder || '') + '" value="' + esc(o.value || '') + '" aria-label="' + esc(o.label || '') + '">' + (o.right || '') + '</div>'; return o.label ? '<div class="m-field' + (o.error ? ' invalid' : '') + '"><label>' + esc(o.label) + '</label>' + box + (o.help ? '<div class="help">' + esc(o.help) + '</div>' : '') + (o.error ? '<div class="err">' + esc(o.error) + '</div>' : '') + '</div>' : box; };
  M.banner = function (kind, text, right, ic) { return '<div class="m-banner ' + kind + '">' + icon(ic || (kind === 'offline' ? 'wifioff' : kind === 'crit' ? 'siren' : 'info')) + esc(text) + (right ? '<span class="right">' + esc(right) + '</span>' : '') + '</div>'; };
  M.ring = function (kind, ic, scanning) { return '<span class="m-icon-ring ' + kind + (scanning ? ' scanning' : '') + '">' + icon(ic) + '</span>'; };
  M.bigNum = function (n, small) { return '<div class="m-big-num">' + n + (small ? ' <small>' + esc(small) + '</small>' : '') + '</div>'; };
  M.progress = function (pct, kind) { return '<div class="m-progress ' + (kind || '') + '"><i style="width:' + pct + '%"></i></div>'; };
  M.sheet = function (inner) { return '<div class="m-sheet"><div class="grab"></div>' + inner + '</div>'; };
  M.sos = function () { return '<div class="sos-hold"><div class="ring"></div><div class="inner"><b>SOS</b><span>Hold 2 seconds</span></div></div>'; };
})();

/* ---------- Mobile v3 additions: hero, quick actions, stat tiles, colored list icons ---------- */
(function () {
  const C = window.C, M = window.M, esc = C.esc, icon = C.icon;
  M.hero = function (o) {
    o = o || {};
    const stats = o.stats ? '<div class="m-hero-stats">' + o.stats.map(function (s) { return '<div class="hs"><b>' + s[1] + '</b><span>' + esc(s[0]) + '</span></div>'; }).join('') + '</div>' : '';
    return '<div class="m-hero ' + (o.kind || '') + '">' + (o.top || '') + (o.eyebrow ? '<div class="eyebrow">' + esc(o.eyebrow) + '</div>' : '') + (o.title ? '<div class="m-hero-title">' + esc(o.title) + '</div>' : '') + (o.sub ? '<div class="m-hero-sub">' + o.sub + '</div>' : '') + (o.body || '') + stats + (o.actions ? '<div class="m-hero-actions">' + o.actions + '</div>' : '') + '</div>';
  };
  M.actions = function (items) {
    return '<div class="m-actions">' + items.map(function (a) { return '<a href="' + (a.href || '#') + '"><span class="ai ' + (a.kind || 'ocean') + '">' + icon(a.icon) + '</span><span>' + esc(a.label) + '</span></a>'; }).join('') + '</div>';
  };
  M.tiles = function (items) {
    return '<div class="m-tiles">' + items.map(function (t) { return '<div class="tile' + (t.kind ? ' ' + t.kind : '') + '">' + (t.icon ? '<span class="ti">' + icon(t.icon) + '</span>' : '') + '<b>' + t.value + '</b><span>' + esc(t.label) + '</span></div>'; }).join('') + '</div>';
  };
  M.ringStat = function (pct, kind, label, sub) {
    return '<div class="m-ringstat">' + C.ring(pct, kind, true) + '<div><div class="m-h3">' + label + '</div>' + (sub ? '<div class="m-caption">' + esc(sub) + '</div>' : '') + '</div></div>';
  };
  M.avatars = function (list, more) { return '<div class="m-avatar-row">' + list.map(function (a) { return C.avatar(a); }).join('') + (more ? C.avatar('+' + more, 'dark') : '') + '</div>'; };
  M.greeting = function (title, date) { return '<div class="m-greeting"><div class="m-caption">' + esc(date) + '</div><div class="m-h1">' + title + '</div></div>'; };
})();

/* ---------- Charts (SVG, no dependencies) · Modal · Popover menu ---------- */
(function () {
  const C = window.C, PN = window.PN, esc = C.esc;
  function niceMax(v) { if (!(v > 0)) return 1; const p = Math.pow(10, Math.floor(Math.log10(v))); const f = v / p; const n = f <= 1 ? 1 : f <= 2 ? 2 : f <= 2.5 ? 2.5 : f <= 5 ? 5 : 10; return n * p; }
  C.areaChart = function (o) {
    const series = o.series || [{ values: o.values, color: o.color || '#168FBF', label: o.label }];
    const n = series[0].values.length, w = o.w || 600, h = o.h || 190, L = 38, R = 14, T = 16, B = 30;
    const max = niceMax(Math.max.apply(null, series.map(s => Math.max.apply(null, s.values))) * 1.08);
    const px = i => L + i * (w - L - R) / Math.max(1, n - 1), py = v => T + (h - T - B) * (1 - v / max);
    let s = '<svg viewBox="0 0 ' + w + ' ' + h + '" class="chart-svg" role="img" aria-label="' + esc(o.label || 'chart') + '">';
    const steps = 4;
    for (let i = 0; i <= steps; i++) { const v = max * i / steps, y = py(v); s += '<line x1="' + L + '" x2="' + (w - R) + '" y1="' + y.toFixed(1) + '" y2="' + y.toFixed(1) + '" stroke="#E6EAED" stroke-width="1"/><text x="' + (L - 8) + '" y="' + (y + 4).toFixed(1) + '" text-anchor="end" font-size="11" fill="#667078" font-family="Inter,sans-serif">' + (Number.isInteger(v) ? v : v.toFixed(1)) + '</text>'; }
    series.forEach(function (sr) {
      const pts = sr.values.map((v, i) => [px(i), py(v)]);
      const d = pts.map((p, i) => (i ? 'L' : 'M') + p[0].toFixed(1) + ',' + p[1].toFixed(1)).join(' ');
      if (sr.area !== false) s += '<path d="' + d + ' L' + pts[pts.length - 1][0].toFixed(1) + ',' + py(0) + ' L' + pts[0][0].toFixed(1) + ',' + py(0) + ' Z" fill="' + sr.color + '" fill-opacity="' + (sr.fillOpacity != null ? sr.fillOpacity : .10) + '"/>';
      s += '<path d="' + d + '" fill="none" stroke="' + sr.color + '" stroke-width="2.25" stroke-linejoin="round" stroke-linecap="round"' + (sr.dash ? ' stroke-dasharray="5 4"' : '') + '/>';
      if (o.dots !== false) pts.forEach((p, i) => { if (i === pts.length - 1 || o.allDots) s += '<circle cx="' + p[0].toFixed(1) + '" cy="' + p[1].toFixed(1) + '" r="3.5" fill="#fff" stroke="' + sr.color + '" stroke-width="2"/>'; });
      if (o.valueLabels) pts.forEach((p, i) => { s += '<text x="' + p[0].toFixed(1) + '" y="' + (p[1] - 8).toFixed(1) + '" text-anchor="middle" font-size="10" fill="#24292D" font-family="Inter,sans-serif">' + sr.values[i] + '</text>'; });
    });
    if (o.labels) { const stride = Math.ceil(o.labels.length / (o.maxLabels || 8)); o.labels.forEach((l, i) => { if (i % stride === 0 || i === o.labels.length - 1) s += '<text x="' + px(i).toFixed(1) + '" y="' + (h - 8) + '" text-anchor="middle" font-size="11" fill="#667078" font-family="Inter,sans-serif">' + esc(l) + '</text>'; }); }
    s += '</svg>';
    return '<div class="chart">' + s + (series.length > 1 || o.legend ? C.legend(series.map(sr => ({ label: sr.label, color: sr.color }))) : '') + '</div>';
  };
  C.barChart = function (o) {
    const vals = o.values, n = vals.length, w = o.w || 600, h = o.h || 180, L = 36, R = 10, T = 18, B = 28;
    const max = niceMax(Math.max.apply(null, vals) * 1.1), bw = (w - L - R) / n, gap = Math.min(10, bw * .3);
    const py = v => T + (h - T - B) * (1 - v / max);
    let s = '<svg viewBox="0 0 ' + w + ' ' + h + '" class="chart-svg">';
    for (let i = 0; i <= 4; i++) { const y = py(max * i / 4); s += '<line x1="' + L + '" x2="' + (w - R) + '" y1="' + y.toFixed(1) + '" y2="' + y.toFixed(1) + '" stroke="#E6EAED"/><text x="' + (L - 8) + '" y="' + (y + 4).toFixed(1) + '" text-anchor="end" font-size="11" fill="#667078" font-family="Inter,sans-serif">' + Math.round(max * i / 4) + '</text>'; }
    vals.forEach((v, i) => { const x = L + i * bw + gap / 2, y = py(v), col = (o.colors && o.colors[i]) || o.color || '#168FBF'; s += '<rect x="' + x.toFixed(1) + '" y="' + y.toFixed(1) + '" width="' + (bw - gap).toFixed(1) + '" height="' + (py(0) - y).toFixed(1) + '" rx="4" fill="' + col + '"/>'; if (o.valueLabels) s += '<text x="' + (x + (bw - gap) / 2).toFixed(1) + '" y="' + (y - 5).toFixed(1) + '" text-anchor="middle" font-size="10" fill="#24292D" font-family="Inter,sans-serif">' + v + '</text>'; if (o.labels) s += '<text x="' + (x + (bw - gap) / 2).toFixed(1) + '" y="' + (h - 8) + '" text-anchor="middle" font-size="11" fill="#667078" font-family="Inter,sans-serif">' + esc(o.labels[i]) + '</text>'; });
    return '<div class="chart">' + s + '</svg></div>';
  };
  C.donut = function (o) {
    const parts = o.parts, total = parts.reduce((a, p) => a + p.value, 0), size = o.size || 150, th = o.thickness || 20, r = (size - th) / 2, circ = 2 * Math.PI * r;
    let off = 0, s = '<svg viewBox="0 0 ' + size + ' ' + size + '" class="donut-svg" style="width:' + size + 'px;height:' + size + 'px">';
    s += '<circle cx="' + size / 2 + '" cy="' + size / 2 + '" r="' + r + '" fill="none" stroke="#EEF2F4" stroke-width="' + th + '"/>';
    parts.forEach(p => { const len = total ? circ * p.value / total : 0; s += '<circle cx="' + size / 2 + '" cy="' + size / 2 + '" r="' + r + '" fill="none" stroke="' + p.color + '" stroke-width="' + th + '" stroke-dasharray="' + Math.max(0, len - 2).toFixed(2) + ' ' + (circ - Math.max(0, len - 2)).toFixed(2) + '" stroke-dashoffset="' + (-off).toFixed(2) + '" transform="rotate(-90 ' + size / 2 + ' ' + size / 2 + ')" stroke-linecap="butt"/>'; off += len; });
    s += '<text x="' + size / 2 + '" y="' + (size / 2 - 2) + '" text-anchor="middle" font-size="26" font-weight="700" fill="#1E2327" font-family="Inter,sans-serif">' + (o.center != null ? o.center : total) + '</text><text x="' + size / 2 + '" y="' + (size / 2 + 16) + '" text-anchor="middle" font-size="11" fill="#667078" font-family="Inter,sans-serif">' + esc(o.centerLabel || 'total') + '</text></svg>';
    const legend = '<div class="donut-legend">' + parts.map(p => '<div class="dl' + (p.href ? ' link' : '') + '"' + (p.href ? ' data-go-href="' + p.href + '"' : '') + '><i style="background:' + p.color + '"></i><span class="l">' + esc(p.label) + '</span><b>' + p.value + '</b><small>' + (total ? Math.round(100 * p.value / total) : 0) + '%</small></div>').join('') + '</div>';
    return '<div class="donut">' + s + legend + '</div>';
  };
  C.hstack = function (rows, o) {
    o = o || {};
    const max = o.max || Math.max.apply(null, rows.map(r => r.parts.reduce((a, p) => a + p.value, 0)));
    return '<div class="hstack">' + rows.map(r => { const tot = r.parts.reduce((a, p) => a + p.value, 0); return '<div class="hs-row"><span class="hs-l">' + esc(r.label) + '</span><div class="hs-track">' + r.parts.map(p => '<i style="width:' + (100 * p.value / max).toFixed(1) + '%;background:' + p.color + '" title="' + esc(p.label) + ' ' + p.value + '"></i>').join('') + '</div><b>' + tot + '</b></div>'; }).join('') + '</div>' + (o.legend ? C.legend(o.legend) : '');
  };
  C.selectNative = function (o) {
    const opts = (o.options || []).map(function (op) { const v = typeof op === 'string' ? op : op[0], l = typeof op === 'string' ? op : op[1]; return '<option value="' + esc(v) + '"' + (o.value === v ? ' selected' : '') + '>' + esc(l) + '</option>'; }).join('');
    const box = '<div class="input' + (o.sm ? ' sm' : '') + ' has-select"' + (o.style ? ' style="' + o.style + '"' : '') + '>' + (o.icon ? C.icon(o.icon) : '') + '<select name="' + esc(o.name || '') + '"' + (o.attr ? ' ' + o.attr : '') + '>' + (o.placeholder ? '<option value="">' + esc(o.placeholder) + '</option>' : '') + opts + '</select>' + C.icon('chevrondown', 'chev ic-16') + '</div>';
    return o.label ? '<div class="field"><label>' + esc(o.label) + '</label>' + box + (o.help ? '<div class="help">' + esc(o.help) + '</div>' : '') + '</div>' : box;
  };
  C.textInput = function (o) {
    const box = '<div class="input' + (o.sm ? ' sm' : '') + (o.textarea ? ' textarea' : '') + '">' + (o.icon ? C.icon(o.icon) : '') + (o.textarea ? '<textarea name="' + esc(o.name) + '" rows="3" placeholder="' + esc(o.placeholder || '') + '">' + esc(o.value || '') + '</textarea>' : '<input name="' + esc(o.name) + '" type="' + (o.type || 'text') + '" value="' + esc(o.value || '') + '" placeholder="' + esc(o.placeholder || '') + '"' + (o.required ? ' required' : '') + (o.attr ? ' ' + o.attr : '') + '>') + '</div>';
    return o.label ? '<div class="field' + (o.error ? ' invalid' : '') + '"><label>' + esc(o.label) + (o.required ? ' <span class="crit">*</span>' : '') + '</label>' + box + (o.help ? '<div class="help">' + esc(o.help) + '</div>' : '') + (o.error ? '<div class="err">' + C.icon('alert', 'ic-14') + esc(o.error) + '</div>' : '') + '</div>' : box;
  };

  /* Modal + confirm */
  PN.modal = function (o) {
    const ov = document.createElement('div'); ov.className = 'pn-overlay';
    ov.innerHTML = '<div class="modal" role="dialog" aria-modal="true">' + (o.title ? '<div class="row between"><div class="t-h3">' + o.title + '</div><button class="icon-btn" data-close aria-label="Close">' + PN.icon('x') + '</button></div>' : '') + (o.body || '') + (o.actions ? '<div class="row end s8">' + o.actions + '</div>' : '') + '</div>';
    document.body.appendChild(ov); PN.renderIcons(ov);
    function close() { ov.classList.remove('show'); setTimeout(function () { ov.remove(); }, 160); }
    requestAnimationFrame(function () { ov.classList.add('show'); });
    ov.addEventListener('click', function (e) { if (e.target === ov) close(); });
    ov.querySelectorAll('[data-close]').forEach(function (b) { b.addEventListener('click', close); });
    const c = ov.querySelector('[data-confirm]'); if (c && o.onConfirm) c.addEventListener('click', function () { if (o.onConfirm(ov) !== false) close(); });
    return { close: close, el: ov };
  };
  PN.confirm = function (o) {
    return PN.modal({ title: o.title, body: '<p class="t-body muted">' + o.text + '</p>' + (o.body || ''), actions: C.btn('Cancel', 'ghost', null, 'data-close') + C.btn(o.confirmLabel || 'Delete', o.danger === false ? 'primary' : 'destructive solid', o.icon || (o.danger === false ? 'check' : 'trash'), 'data-confirm'), onConfirm: o.onConfirm });
  };
  /* Popover menu anchored to an element */
  PN.menu = function (anchor, items) {
    document.querySelectorAll('.pn-menu').forEach(function (m) { m.remove(); });
    const m = document.createElement('div'); m.className = 'pn-menu';
    m.innerHTML = items.map(function (it, i) { return it === '-' ? '<div class="sep"></div>' : '<button type="button" class="' + (it.danger ? 'danger' : '') + '" data-i="' + i + '">' + PN.icon(it.icon || 'circle', 'ic-16') + esc(it.label) + '</button>'; }).join('');
    document.body.appendChild(m);
    const r = anchor.getBoundingClientRect(); const mw = 180;
    m.style.top = Math.min(window.innerHeight - m.offsetHeight - 8, r.bottom + 6) + 'px';
    m.style.left = Math.max(8, Math.min(window.innerWidth - mw - 8, r.right - mw)) + 'px';
    function close() { m.remove(); document.removeEventListener('click', onDoc, true); }
    function onDoc(e) { if (!m.contains(e.target)) close(); }
    setTimeout(function () { document.addEventListener('click', onDoc, true); }, 0);
    m.querySelectorAll('button[data-i]').forEach(function (b) { b.addEventListener('click', function (e) { e.stopPropagation(); const it = items[+b.getAttribute('data-i')]; close(); if (it.onClick) it.onClick(); else if (it.href && PN.route) PN.route(it.href.replace(/\.html/, '')); }); });
    return m;
  };
  /* Init a freshly rendered fragment (icons + behaviors) */
  PN.initFragment = function (el) { PN.renderIcons(el); el.querySelectorAll('.map[data-map]').forEach(PN.paintMap); PN.bind(el); };
})();
