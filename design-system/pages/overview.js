// handwritten
PN.page('overview', {
  title: 'Design System Overview', icon: 'book', nav: 'overview',
  render() {
    const principles = [
      ['01', 'Operational first', 'Decision-supporting information is more important than decoration. Every pixel answers: where are our people, where are our assets, is anything abnormal?', 'compass'],
      ['02', 'Map first', 'Spatial context is a first-class UI component, not a widget. The live map is the primary surface of the command center.', 'map'],
      ['03', 'Calm until critical', 'Normal operation looks calm and neutral. Strong semantic color appears only when attention is required.', 'shield'],
      ['04', 'Field ready', 'Usable outdoors, on vessels, in the warehouse, under bright light, with poor connectivity, unstable GPS and gloves.', 'sun'],
      ['05', 'One operational language', 'Status, icon, color, naming and behavior stay identical across the web dashboard and the mobile app.', 'link']
    ];
    const structure = [
      ['01', 'Foundations', 'Brand, color, semantic color, typography, spacing, grid, radius, elevation, iconography, motion, accessibility.', 'foundations.html', 'layers'],
      ['02', 'Core components', 'Button, input, select, checkbox, switch, tabs, chip, badge, tooltip, modal, toast, card, table, pagination.', 'components.html', 'grid'],
      ['03', 'Operational components', 'Map markers, clusters, geofence, GPS freshness, tracking status, alert card, RFID status, mobilization checklist, muster, SOS.', 'operational.html', 'compass'],
      ['04', 'Mobile components', 'Field-app primitives: 52 px inputs, 44–52 px touch targets, tracking pill, bottom navigation, sheets, SOS control.', 'mobile.html', 'smartphone'],
      ['05', 'Patterns & templates', 'Command center, registry, detail and project templates; mobile home, checklist, map and emergency templates; states.', 'patterns.html', 'columns'],
      ['06', 'Live demos', '18 web pages and 14 mobile screens built from the same tokens and components, with example operational data.', '../dashboard/index.html#overview', 'monitor']
    ];
    return `
      <div class="ds-hero">
        ${C.eyebrow('PAGEO Navigator · Design System v2.0')}
        <h1>One operational language for people, equipment, projects, vessels and safety.</h1>
        <p>PAGEO Navigator is the shared design system for the PAGEO Operations Tracking &amp; Visibility Platform — the web command center used to monitor and manage, and the mobile field app used to act and confirm. It is built to feel like marine operations, GIS and industrial instrumentation, not like generic HR software.</p>
        <div class="row s8 wrap" style="margin-top:6px">${['Precise', 'Maritime', 'Technical', 'Calm', 'Spatial', 'Reliable', 'Field-ready'].map(k => C.chip('neutral', k, { dot: false })).join('')}</div>
      </div>

      <section class="ds-section">
        <div class="ds-head"><span class="no">01</span><h2>Design philosophy</h2><p>Five principles every screen is reviewed against</p></div>
        <div class="ds-demo-grid">
          ${principles.map(p => `<div class="card"><div class="row s12"><span class="entity-tile" style="padding:0;border:0;background:none"><span class="sym">${C.icon(p[3])}</span></span><div><div class="eyebrow" style="color:var(--accent)">${p[0]}</div><div class="card-title">${p[1]}</div></div></div><p class="t-body muted" style="font-size:13px">${p[2]}</p></div>`).join('')}
        </div>
      </section>

      <section class="ds-section">
        <div class="ds-head"><span class="no">02</span><h2>Color balance</h2><p>80 % neutral · 15 % PAGEO blue · 5 % semantic</p></div>
        <div class="ds-demo">
          <div class="stackbar" style="height:28px;border-radius:10px;gap:3px">
            <i style="width:80%;background:var(--pageo-mist)"></i><i style="width:15%;background:var(--pageo-ocean)"></i><i style="width:3%;background:var(--s-success)"></i><i style="width:1%;background:var(--s-warn)"></i><i style="width:1%;background:var(--s-crit)"></i>
          </div>
          <div class="row s24 wrap" style="font-size:13px">
            <span><b>80 %</b> <span class="muted">neutral interface — mist, fog, white, slate, carbon</span></span>
            <span><b>15 %</b> <span class="muted">PAGEO blue — ocean for interaction, sky for accents</span></span>
            <span><b>5 %</b> <span class="muted">semantic — success, warning, critical, offline; only where a state demands it</span></span>
          </div>
          <div class="do-dont">
            <div class="dd do"><span class="tag">${C.icon('checkcircle', 'ic-14')}Do</span><div class="row s8 wrap">${C.chip('crit', 'Alert')}${C.chip('warn', 'Maintenance')}${C.chip('ok', 'Active')}<span class="alert-card p1 crit" style="padding:8px 12px 8px 16px;gap:2px"><span class="a-head" style="font-size:10px">${C.sev(1)}Critical</span><span style="font-size:13px;font-weight:600">SOS signal received</span></span></div><p>Tinted chips, a 4 px severity stripe and a dark semantic text color carry state. The surface stays white.</p></div>
            <div class="dd dont"><span class="tag">${C.icon('xcircle', 'ic-14')}Don't</span><div class="row s8 wrap"><span style="background:var(--s-crit);color:#fff;padding:6px 12px;border-radius:999px;font-size:12px;font-weight:600">ALERT</span><span style="background:var(--s-warn);color:#fff;padding:12px 16px;border-radius:12px;font-size:13px;font-weight:600;flex:1">Maintenance due — SVP-07</span></div><p>Saturated full-background pills and cards turn every warning into an emergency and flatten the hierarchy.</p></div>
          </div>
        </div>
      </section>

      <section class="ds-section">
        <div class="ds-head"><span class="no">03</span><h2>System structure</h2><p>How the documentation is organised</p></div>
        <div class="ds-demo-grid">
          ${structure.map(s => `<a class="hub-card" href="${s[3]}"><div class="hc-head">${C.icon(s[4])}<span class="hc-title">${s[0]} · ${s[1]}</span></div><div class="hc-desc">${s[2]}</div><div class="hc-tag">Open section</div></a>`).join('')}
        </div>
      </section>

      <section class="ds-section">
        <div class="ds-head"><span class="no">04</span><h2>Product direction</h2><p>Two surfaces, one system</p></div>
        <div class="grid">
          <div class="c6 card p24"><div class="row s12">${C.icon('monitor', 'ic-24')}<div><div class="card-title">Web dashboard — Monitor &amp; Manage</div><div class="t-caption">Information-dense · GIS-first · enterprise operations</div></div></div>
            <div class="row s8 wrap">${['Monitor', 'Compare', 'Investigate', 'Assign', 'Manage', 'Respond'].map(j => C.chip('info', j, { dot: false })).join('')}</div>
            ${C.kv([['Desktop target', '1440 – 1920 px'], ['Sidebar', '256 px, collapses to 68 px below 1440'], ['Content grid', '12 columns · 32 px margin · 24 px gutter'], ['Input height', '40 px'], ['Icon size', '20 px · 1.75 px stroke']])}
          </div>
          <div class="c6 card p24"><div class="row s12">${C.icon('smartphone', 'ic-24')}<div><div class="card-title">Mobile app — Act &amp; Confirm</div><div class="t-caption">Simple · field-first · action-oriented · offline-capable</div></div></div>
            <div class="row s8 wrap">${['Act', 'Confirm', 'Check in', 'Track', 'Scan', 'Mobilize', 'Muster', 'Send SOS'].map(j => C.chip('ok', j, { dot: false })).join('')}</div>
            ${C.kv([['Frame', '390 × 844 · bottom navigation with 5 items'], ['Input height', '52 px minimum'], ['Touch target', '44 × 44 px minimum · 48–52 px recommended'], ['Body text', '16 px · labels 14 · captions 13'], ['SOS', 'Header control, press-and-hold 2 s — never a nav item']])}
          </div>
        </div>
      </section>

      <section class="ds-section">
        <div class="ds-head"><span class="no">05</span><h2>Core principle</h2></div>
        <div class="card accent p24" style="gap:8px"><div class="eyebrow">Do not build two disconnected dashboards called “Human Tracking” and “Asset Tracking.”</div><div class="t-h3" style="max-width:60ch">Build one project-centric operational visibility platform with Human Tracking and RFID Asset Tracking as two connected operational layers.</div><div class="t-caption">Project is the center of the data model and of every dashboard experience — not the employee, not the RFID tag, not the vessel alone.</div></div>
      </section>`;
  }
});
