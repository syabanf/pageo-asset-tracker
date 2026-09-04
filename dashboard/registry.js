/* ============================================================
   Dashboard engines: PN.registry (filterable table + summary-card filters + row CRUD)
                      PN.form (create / edit page bound to PN.store)
   ============================================================ */
(function () {
  const PN = window.PN, C = window.C, esc = C.esc;

  PN.registry = function (cfg) {
    const state = { q: '', f: {} };
    function all() { return PN.store.all(cfg.coll); }
    function filtered() {
      const q = state.q.trim().toLowerCase();
      return all().filter(function (r) {
        for (const k in state.f) { if (state.f[k] && String(r[k]) !== String(state.f[k])) return false; }
        if (q && !(cfg.search ? cfg.search(r, q) : JSON.stringify(r).toLowerCase().indexOf(q) >= 0)) return false;
        return true;
      });
    }
    function kpiHtml() {
      const rows = all();
      return '<div class="grid kpis g16" style="grid-template-columns:repeat(' + cfg.kpis.length + ',minmax(0,1fr))">' + cfg.kpis.map(function (k) {
        const value = typeof k.value === 'function' ? k.value(rows) : k.value;
        const f = k.filter; const active = f && state.f[f.key] === f.value;
        return C.kpi({ label: k.label, value: value, icon: k.icon, iconKind: k.iconKind, lines: k.lines, compact: true, cls: (f ? 'filter' : '') + (active ? ' active' : ''), attr: f ? 'data-filter="' + esc(f.key) + '=' + esc(f.value) + '" role="button" tabindex="0"' : '' });
      }).join('') + '</div>';
    }
    function filtersHtml() {
      const rows = all();
      return '<div class="filters">' + C.input({ icon: 'search', placeholder: cfg.placeholder || 'Search…', sm: true, style: 'width:260px', value: state.q }).replace('<input ', '<input data-custom data-search ') +
        (cfg.filters || []).map(function (f) {
          const opts = typeof f.options === 'function' ? f.options(rows) : f.options || Array.from(new Set(rows.map(function (r) { return r[f.key]; }))).filter(Boolean).sort();
          return C.selectNative({ name: f.key, icon: f.icon, sm: true, placeholder: (f.label || f.key) + ' · All', options: opts, value: state.f[f.key] || '', attr: 'data-filter-select="' + f.key + '"', style: 'min-width:170px' });
        }).join('') + (cfg.extraFilters || '') + '</div><div class="filter-bar" id="reg-fbar"></div>';
    }
    function fbarHtml(n) {
      const chips = [];
      if (state.q) chips.push({ k: 'q', label: 'Search: “' + esc(state.q) + '”' });
      for (const k in state.f) if (state.f[k]) { const f = (cfg.filters || []).find(function (x) { return x.key === k; }); const kp = cfg.kpis.find(function (x) { return x.filter && x.filter.key === k; }); chips.push({ k: k, label: ((f && f.label) || (kp && kp.filterLabel) || k) + ': ' + esc(cfg.labelFor ? cfg.labelFor(k, state.f[k]) : state.f[k]) }); }
      return (chips.length ? '<span>Filters</span>' + chips.map(function (c) { return '<span class="fchip">' + c.label + '<button data-clear="' + c.k + '" aria-label="Remove filter">' + PN.icon('x') + '</button></span>'; }).join('') + '<button class="clear" data-clear="*">Clear all</button>' : '<span class="muted">No filters · click a summary card or use the selects to filter</span>') +
        '<span class="count">' + n + ' of ' + all().length + ' ' + (cfg.noun || 'rows') + '</span>';
    }
    function tableHtml(rows) {
      const cols = cfg.cols.concat([{ key: '_act', label: '', cls: 'actions', render: function (r) { return '<button class="btn ghost xs icon-only" data-menu="' + esc(cfg.rowId(r)) + '" data-bound="1" aria-label="Row actions">' + PN.icon('more') + '</button>'; } }]);
      if (!rows.length) return '<div class="card p0">' + C.empty({ icon: cfg.emptyIcon || 'search', title: 'No ' + (cfg.noun || 'rows') + ' match', text: 'Try clearing a filter or searching for a different term.' }) + '</div>';
      return C.table({ sortable: true, cols: cols, rows: rows, footText: 'Showing ' + rows.length + ' of ' + all().length + ' ' + (cfg.noun || 'rows'), pages: Math.max(1, Math.ceil(all().length / 12)) });
    }
    function render() {
      const p = PN.params || {};
      (cfg.filters || []).forEach(function (f) { if (p[f.key]) state.f[f.key] = p[f.key]; });
      cfg.kpis.forEach(function (k) { if (k.filter && p[k.filter.key]) state.f[k.filter.key] = p[k.filter.key]; });
      if (p.q) state.q = p.q;
      return C.pageHead({ eyebrow: cfg.eyebrow, title: cfg.title, sub: cfg.sub, actions: (cfg.actions || '') + C.btn('Export', 'ghost sm', 'download') + (cfg.newHref ? '<a class="btn primary sm" href="' + cfg.newHref + '">' + PN.icon('plus') + esc(cfg.newLabel || 'New') + '</a>' : '') }) +
        '<div id="reg-kpis">' + kpiHtml() + '</div>' + (cfg.extra || '') + '<div id="reg-filters">' + filtersHtml() + '</div><div id="reg-table"></div>';
    }
    function after(stage) {
      const root = stage;
      function draw() {
        const rows = filtered();
        root.querySelector('#reg-table').innerHTML = tableHtml(rows);
        root.querySelector('#reg-fbar').innerHTML = fbarHtml(rows.length);
        root.querySelector('#reg-kpis').innerHTML = kpiHtml();
        PN.initFragment(root.querySelector('#reg-table')); PN.initFragment(root.querySelector('#reg-kpis')); PN.renderIcons(root.querySelector('#reg-fbar'));
        bindKpis(); bindMenus(); bindFbar();
        root.querySelectorAll('[data-filter-select]').forEach(function (s) { s.value = state.f[s.getAttribute('data-filter-select')] || ''; });
      }
      function bindKpis() {
        root.querySelectorAll('[data-filter]').forEach(function (k) {
          k.addEventListener('click', function () { const kv = k.getAttribute('data-filter').split('='); state.f[kv[0]] = state.f[kv[0]] === kv[1] ? '' : kv[1]; draw(); });
          k.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); k.click(); } });
        });
      }
      function bindMenus() {
        root.querySelectorAll('[data-menu]').forEach(function (b) {
          b.addEventListener('click', function (e) {
            e.stopPropagation(); const id = b.getAttribute('data-menu'); const r = PN.store.get(cfg.coll, id); if (!r) return;
            PN.menu(b, [
              { icon: 'eye', label: 'View details', href: cfg.detailHref(r) },
              { icon: 'pencil', label: 'Edit', href: cfg.editHref(r) },
              cfg.extraMenu ? cfg.extraMenu(r, draw) : null, '-',
              { icon: 'trash', label: 'Delete', danger: true, onClick: function () { PN.confirm({ title: 'Delete ' + esc(cfg.deleteLabel(r)) + '?', text: cfg.deleteText || 'This removes the record from the registry. History and reports keep their own copies.', onConfirm: function () { PN.store.remove(cfg.coll, id); PN.toast('Deleted ' + cfg.deleteLabel(r), 'trash'); draw(); } }); } }
            ].filter(Boolean));
          });
        });
      }
      function bindFbar() {
        root.querySelectorAll('[data-clear]').forEach(function (b) { b.addEventListener('click', function () { const k = b.getAttribute('data-clear'); if (k === '*') { state.q = ''; state.f = {}; const si = root.querySelector('[data-search]'); if (si) si.value = ''; } else if (k === 'q') { state.q = ''; const si = root.querySelector('[data-search]'); if (si) si.value = ''; } else state.f[k] = ''; draw(); }); });
      }
      const si = root.querySelector('[data-search]'); if (si) si.addEventListener('input', function () { state.q = si.value; draw(); });
      root.querySelectorAll('[data-filter-select]').forEach(function (s) { s.addEventListener('change', function () { state.f[s.getAttribute('data-filter-select')] = s.value; draw(); }); });
      draw();
      if (cfg.after) cfg.after(root, draw);
    }
    return { render: render, after: after };
  };

  PN.form = function (cfg) {
    function field(f, rec) {
      const v = rec ? (f.get ? f.get(rec) : rec[f.name]) : (f.default || '');
      const html = f.type === 'select' ? C.selectNative({ name: f.name, label: f.label, options: f.options, value: v, icon: f.icon, placeholder: f.placeholder, help: f.help }) : C.textInput({ name: f.name, label: f.label, value: v, type: f.type || 'text', icon: f.icon, placeholder: f.placeholder, required: f.required, help: f.help, textarea: f.type === 'textarea', attr: f.required ? 'data-required' : '' });
      return '<div class="' + (f.span2 ? 'span2' : '') + '">' + html + '</div>';
    }
    return {
      render: function (params) {
        const id = params && params.id; const rec = id ? PN.store.get(cfg.coll, id) : null; const edit = !!rec;
        const sections = cfg.sections.map(function (s) { return '<div class="form-section">' + C.eyebrow(s.title) + '<div class="form-grid">' + s.fields.map(function (f) { return field(f, rec); }).join('') + '</div></div>'; }).join('');
        return C.pageHead({ eyebrow: cfg.eyebrow, title: edit ? (cfg.editTitle ? cfg.editTitle(rec) : 'Edit ' + cfg.noun) : 'New ' + cfg.noun, sub: edit ? (cfg.editSub ? cfg.editSub(rec) : 'Changes are saved to the local registry') : cfg.newSub,
            actions: '<a class="btn ghost sm" href="' + cfg.backHref + '">' + PN.icon('arrowleft') + 'Back to ' + cfg.backLabel + '</a>' }) +
          C.grid([C.col(8, '<form id="pn-form" class="card p24" style="gap:28px" data-edit="' + (edit ? '1' : '') + '" data-id="' + esc(id || '') + '">' + sections + '<div class="row between"><div>' + (edit ? C.btn('Delete ' + cfg.noun, 'destructive', 'trash', 'data-bound="1" id="pn-delete"') : '') + '</div><div class="row s8"><a class="btn ghost" href="' + cfg.backHref + '">Cancel</a>' + C.btn(edit ? 'Save changes' : 'Create ' + cfg.noun, 'primary', 'check', 'data-bound="1" id="pn-save" type="submit"') + '</div></div></form>'),
            C.col(4, C.card({ title: edit ? 'Record' : 'Before you save', body: edit ? C.kv(cfg.summary(rec), { stack: true }) : '<div class="stack s12 t-body muted" style="font-size:13px">' + (cfg.tips || []).map(function (t) { return '<div class="row top s8">' + PN.icon('info', 'ic-16') + '<span>' + t + '</span></div>'; }).join('') + '</div>' }) + (cfg.side ? cfg.side(rec) : ''))]);
      },
      after: function (stage) {
        const form = stage.querySelector('#pn-form'); if (!form) return;
        const edit = form.getAttribute('data-edit') === '1', id = form.getAttribute('data-id');
        function values() { const v = {}; form.querySelectorAll('[name]').forEach(function (el) { v[el.name] = el.value.trim(); }); return v; }
        function validate() { let ok = true; form.querySelectorAll('[data-required]').forEach(function (el) { const fld = el.closest('.field'); fld.classList.toggle('invalid', !el.value.trim()); let err = fld.querySelector('.err'); if (!el.value.trim()) { ok = false; if (!err) { fld.insertAdjacentHTML('beforeend', '<div class="err">' + PN.icon('alert', 'ic-14') + 'This field is required.</div>'); } } else if (err) err.remove(); }); return ok; }
        form.addEventListener('submit', function (e) {
          e.preventDefault(); if (!validate()) { PN.toast('Please complete the required fields', 'alert'); return; }
          const v = values(); const existing = edit ? PN.store.get(cfg.coll, id) : null;
          const rec = cfg.toRecord(v, existing);
          if (edit) { PN.store.update(cfg.coll, id, rec); PN.toast('Saved ' + cfg.label(rec), 'checkcircle'); }
          else { if (PN.store.get(cfg.coll, rec.id)) { PN.toast(rec.id + ' already exists — choose another ID', 'alert'); return; } PN.store.add(cfg.coll, rec); PN.toast('Created ' + cfg.label(rec), 'checkcircle'); }
          PN.route(cfg.backHref.replace('.html', '') + (edit ? '' : '?q=' + encodeURIComponent(rec.id)));
        });
        const del = stage.querySelector('#pn-delete'); if (del) del.addEventListener('click', function () { const rec = PN.store.get(cfg.coll, id); PN.confirm({ title: 'Delete ' + esc(cfg.label(rec)) + '?', text: 'This removes the record from the registry.', onConfirm: function () { PN.store.remove(cfg.coll, id); PN.toast('Deleted ' + cfg.label(rec), 'trash'); PN.route(cfg.backHref.replace('.html', '')); } }); });
      }
    };
  };
})();
