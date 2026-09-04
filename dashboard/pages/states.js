/* Converted from web/states.html — edit freely; delete "// converted" to mark as handwritten */
// converted
PN.page("states", {
  title: "Component States",
  icon: "layers",
  nav: "",
  crumb: "Global / Design System / States",
  render() {
    return `<div class="page-head">
    <div class="titles">
      <div class="eyebrow">Design system</div>
      <h1>Component states</h1>
      <div class="sub">Loading, empty, error, offline, stale and critical — the same vocabulary on every page</div>
    </div>
    <div class="actions">
      <a class="btn ghost sm" href="overview.html"><i data-icon="grid"></i>Command Center</a>
    </div>
  </div>

  <!-- State demos -->
  <div class="grid">
    <div class="c4 card">
      <div class="card-head"><span class="card-title">Loading</span><span class="t-caption">Skeleton, never a page spinner</span></div>
      <div class="skeleton"><i class="h32"></i><i class="w80"></i><i class="w60"></i><i class="w40"></i><i class="h120"></i></div>
    </div>

    <div class="c4 card">
      <div class="card-head"><span class="card-title">Empty</span><span class="t-caption">Minimal, one action</span></div>
      <div class="empty">
        <i data-icon="users"></i>
        <div class="eyebrow">No personnel on this project</div>
        <p>Personnel assigned to this project will appear here.</p>
        <button class="btn sm primary">Assign Personnel</button>
      </div>
    </div>

    <div class="c4 card">
      <div class="card-head"><span class="card-title">Error</span><span class="t-caption">Plain language, no error codes</span></div>
      <div class="error-state">
        <div class="eyebrow">Location data unavailable</div>
        <dl class="kv"><dt>Last received</dt><dd>23 minutes ago</dd></dl>
        <div class="causes">Possible causes: GPS unavailable · Device offline</div>
        <div><button class="btn sm ghost"><i data-icon="refresh"></i>Retry</button></div>
      </div>
    </div>

    <div class="c4 card">
      <div class="card-head"><span class="card-title">Offline</span><span class="t-caption">Banner above content</span></div>
      <div class="banner offline"><i data-icon="wifioff"></i><span>Connection lost — showing last known data from <b>15:19</b></span><div class="banner-actions"><button class="btn xs ghost">Retry</button></div></div>
      <div class="kv-grid" style="opacity:.6">
        <div><div class="k">People on operation</div><div class="v">128</div></div>
        <div><div class="k">Assets tracked</div><div class="v">684</div></div>
      </div>
      <span class="t-caption">Content stays readable; freshness labels tell the reader how old it is.</span>
    </div>

    <div class="c4 card kpi">
      <div class="row between"><span class="card-title">Stale</span><span class="chip warn sm"><span class="dot warn"></span>Stale</span></div>
      <div class="eyebrow">People on operation</div>
      <div class="kpi-value">128</div>
      <div class="kpi-lines">
        <span><span class="dot ok"></span>&nbsp;<span class="num">121</span>accounted</span>
        <span><span class="dot off"></span>&nbsp;<span class="num">7</span>offline</span>
      </div>
      <span class="fresh stale"><b>STALE</b>27 min ago</span>
      <span class="t-caption">Value shown in full, never blanked; freshness carries the warning.</span>
    </div>

    <div class="c4 card">
      <div class="card-head"><span class="card-title">Critical</span><span class="t-caption">The only saturated surface</span></div>
      <div class="alert-card p1 crit">
        <div class="a-head"><span class="sev p1">P1</span>Critical<span class="when">24 sec ago</span></div>
        <div class="a-title">SOS signal received</div>
        <div class="a-meta"><span>Employee <b>Rizky Hakim</b> · ROV Pilot</span><span>Project Alpha · Restricted Zone · 15:38 WIB</span></div>
        <div class="a-actions"><a class="btn xs primary" href="alerts.html">View location</a><button class="btn xs ghost" data-ack>Acknowledge</button></div>
      </div>
    </div>
  </div>

  <!-- Vocabulary -->
  <div class="grid">
    <div class="c12 card">
      <div class="card-head"><span class="card-title">Status chip vocabulary</span><span class="t-caption">Same words on web, mobile and reports</span></div>

      <div class="grid g16">
        <div class="c6 stack s8">
          <span class="eyebrow">People</span>
          <div class="row s8 wrap">
            <span class="chip ok"><span class="dot ok"></span>Active</span>
            <span class="chip info"><span class="dot info"></span>On Site</span>
            <span class="chip info"><span class="dot info"></span>Offshore</span>
            <span class="chip transit"><span class="dot transit"></span>In Transit</span>
            <span class="chip warn"><span class="dot warn"></span>Idle</span>
            <span class="chip warn"><span class="dot warn"></span>Stale</span>
            <span class="chip off"><span class="dot off"></span>Offline</span>
            <span class="chip crit"><span class="dot crit"></span>Alert</span>
          </div>
        </div>
        <div class="c6 stack s8">
          <span class="eyebrow">Assets</span>
          <div class="row s8 wrap">
            <span class="chip ok"><span class="dot ok"></span>Available</span>
            <span class="chip info"><span class="dot info"></span>Deployed</span>
            <span class="chip transit"><span class="dot transit"></span>In Transit</span>
            <span class="chip warn"><span class="dot warn"></span>Maintenance</span>
            <span class="chip crit"><span class="dot crit"></span>Missing</span>
            <span class="chip crit"><span class="dot crit"></span>Alert</span>
            <span class="chip unknown"><span class="dot unknown"></span>Unassigned</span>
          </div>
        </div>
      </div>

      <div class="divider"></div>

      <div class="grid g16">
        <div class="c3 stack s8">
          <span class="eyebrow">Freshness</span>
          <div class="stack s8">
            <span class="fresh live"><b>LIVE</b>12 sec ago</span>
            <span class="fresh recent"><b>RECENT</b>3 min ago</span>
            <span class="fresh stale"><b>STALE</b>27 min ago</span>
            <span class="fresh offline"><b>OFFLINE</b>2 h 14 min</span>
          </div>
          <span class="t-caption">&lt; 1 min · 1–5 min · 5–30 min · &gt; 30 min</span>
        </div>
        <div class="c3 stack s8">
          <span class="eyebrow">Severity</span>
          <div class="row s8"><span class="sev p1">P1</span><span class="t-caption">Critical</span></div>
          <div class="row s8"><span class="sev p2">P2</span><span class="t-caption">High</span></div>
          <div class="row s8"><span class="sev p3">P3</span><span class="t-caption">Warning</span></div>
          <div class="row s8"><span class="sev p4">P4</span><span class="t-caption">Information</span></div>
        </div>
        <div class="c3 stack s8">
          <span class="eyebrow">Dots</span>
          <div class="row s8"><span class="dot ok"></span><span class="t-caption">Success / active</span></div>
          <div class="row s8"><span class="dot info"></span><span class="t-caption">Info / on site / deployed</span></div>
          <div class="row s8"><span class="dot transit"></span><span class="t-caption">In transit</span></div>
          <div class="row s8"><span class="dot warn"></span><span class="t-caption">Warning / maintenance</span></div>
          <div class="row s8"><span class="dot crit"></span><span class="t-caption">Critical</span></div>
          <div class="row s8"><span class="dot off"></span><span class="t-caption">Offline (hollow)</span></div>
          <div class="row s8"><span class="dot unknown"></span><span class="t-caption">Unknown</span></div>
          <div class="row s8"><span class="dot ok pulse"></span><span class="t-caption">Live pulse</span></div>
        </div>
        <div class="c3 stack s8">
          <span class="eyebrow">Badges</span>
          <div class="row s8"><span class="badge">3</span><span class="t-caption">Count · attention</span></div>
          <div class="row s8"><span class="badge light">11</span><span class="t-caption">Count · neutral</span></div>
          <div class="row s8"><span class="chip neutral sm">Assigned only</span><span class="t-caption">Scope</span></div>
          <div class="row s8"><span class="chip outline sm">Filter</span><span class="t-caption">Outline</span></div>
        </div>
      </div>

      <div class="divider"></div>

      <div class="stack s8">
        <span class="eyebrow">Buttons</span>
        <div class="row s8 wrap">
          <button class="btn primary">Primary</button>
          <button class="btn secondary">Secondary</button>
          <button class="btn tertiary">Tertiary</button>
          <button class="btn destructive">Destructive</button>
          <button class="btn primary" disabled>Disabled</button>
          <span class="vdivider"></span>
          <button class="btn ghost sm"><i data-icon="download"></i>Ghost · sm</button>
          <button class="btn primary xs">Primary · xs</button>
          <button class="btn destructive solid sm">Destructive · solid</button>
          <button class="btn dark sm">Dark</button>
        </div>
      </div>

      <div class="divider"></div>

      <div class="stack s8">
        <span class="eyebrow">Form states</span>
        <div class="grid g16">
          <div class="c3 field"><label>Default</label><div class="input"><input placeholder="Serial number"></div><span class="help">As printed on the asset tag</span></div>
          <div class="c3 field"><label>Focus</label><div class="input" style="border-color:var(--accent);box-shadow:0 0 0 3px rgba(22,143,191,.15)"><input value="MBES-03-2201"></div><span class="help">Accent border + 3 px halo</span></div>
          <div class="c3 field invalid"><label>Error</label><div class="input"><input value="GPS-042"><i data-icon="alert" style="color:var(--s-crit)"></i></div><span class="err"><i data-icon="alert" class="ic-14"></i>Serial number already registered.</span></div>
          <div class="c3 field"><label>Disabled</label><div class="input" style="opacity:.5;background:var(--bg-2)"><input value="E280-11-8829184" disabled></div><span class="help">RFID assigned by scan only</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal + toast -->
  <div class="grid">
    <div class="c6 card">
      <div class="card-head"><span class="card-title">Modal</span><span class="t-caption">Confirm destructive actions, 440 px</span></div>
      <div class="overlay-demo">
        <div class="modal">
          <div class="row between top"><div class="t-h3">Remove GPS-029 from Andi Pratama?</div><button class="icon-btn" aria-label="Close"><i data-icon="x"></i></button></div>
          <p class="t-body muted">The asset returns to <b>Available</b> at Warehouse — Base Jakarta and the custody record closes at 15:42. Andi Pratama will be notified in the mobile app.</p>
          <dl class="kv"><dt>Asset</dt><dd>GPS-029 · GNSS receiver</dd><dt>Assigned since</dt><dd>28 Aug 2026 · Project Charlie</dd></dl>
          <div class="row s8" style="justify-content:flex-end"><button class="btn ghost">Cancel</button><button class="btn destructive solid">Remove</button></div>
        </div>
      </div>
    </div>

    <div class="c6 card">
      <div class="card-head"><span class="card-title">Toast &amp; banners</span><span class="t-caption">Transient vs persistent</span></div>
      <div class="stack">
        <div><div class="toast"><i data-icon="checkcircle"></i>Asset assigned to Project Alpha<button class="btn xs tertiary" style="color:var(--pageo-sky)">Undo</button></div><div class="t-caption mt4">Toast · bottom-left · dismisses after 5 s</div></div>
        <div class="banner info"><i data-icon="info"></i><span>Muster drill scheduled for <b>08 Sep 09:00</b> at Base Jakarta · 118 personnel expected</span><div class="banner-actions"><button class="btn xs ghost">Details</button></div></div>
        <div class="banner warn"><i data-icon="warning"></i><span>RFID reader <b>RD-07</b> offline since 07:12 · Warehouse aisle C reads may be delayed</span><div class="banner-actions"><button class="btn xs ghost">Open device</button></div></div>
        <div class="banner crit"><i data-icon="siren"></i><span><b>Muster in progress</b> · 96 / 118 confirmed · 4 min elapsed</span><div class="banner-actions"><a class="btn xs primary" href="muster.html">Open muster</a></div></div>
        <div class="banner offline"><i data-icon="wifioff"></i><span>Connection lost — showing last known data from <b>15:19</b></span><div class="banner-actions"><button class="btn xs ghost">Retry</button></div></div>
      </div>
    </div>
  </div>`;
  }
});
