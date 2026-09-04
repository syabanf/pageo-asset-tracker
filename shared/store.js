/* ============================================================
   PAGEO Navigator — local data store (CRUD demo)
   Seeds from DATA, persists to localStorage so edits survive reloads.
   ============================================================ */
(function () {
  const PN = window.PN;
  const KEY = 'pageo-navigator-store-v1';
  let db = null;
  const clone = function (x) { return JSON.parse(JSON.stringify(x)); };
  function seed() { const D = window.DATA; return { v: 1, people: clone(D.people), assets: clone(D.assets), projects: clone(D.projects), alerts: clone(D.alerts) }; }
  function load() {
    if (db) return db;
    try { const raw = localStorage.getItem(KEY); if (raw) { const parsed = JSON.parse(raw); if (parsed && parsed.v === 1) { db = parsed; return db; } } } catch (e) {}
    db = seed(); save(); return db;
  }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(db)); } catch (e) {} }
  PN.store = {
    all: function (c) { return load()[c] || []; },
    get: function (c, id) { return load()[c].find(function (x) { return x.id === id; }); },
    add: function (c, item) { load()[c].unshift(item); save(); return item; },
    update: function (c, id, patch) { const it = PN.store.get(c, id); if (it) Object.assign(it, patch); save(); return it; },
    remove: function (c, id) { const arr = load()[c]; const i = arr.findIndex(function (x) { return x.id === id; }); if (i >= 0) arr.splice(i, 1); save(); return i >= 0; },
    reset: function () { db = null; try { localStorage.removeItem(KEY); } catch (e) {} load(); },
    count: function (c, fn) { return PN.store.all(c).filter(fn || function () { return true; }).length; }
  };
})();
