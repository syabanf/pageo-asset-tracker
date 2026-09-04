/* Converted from web/admin.html — edit freely; delete "// converted" to mark as handwritten */
// converted
PN.page("admin", {
  title: "Administration",
  icon: "settings",
  nav: "admin",
  crumb: "Global / System / Administration",
  render() {
    return `<div class="page-head">
    <div class="titles">
      <div class="eyebrow">System</div>
      <h1>Administration</h1>
      <div class="sub">Roles, users, devices and operational thresholds</div>
    </div>
    <div class="actions">
      <button class="btn ghost sm"><i data-icon="history"></i>Audit log</button>
      <button class="btn primary sm"><i data-icon="check"></i>Save changes</button>
    </div>
  </div>

  <div class="tabs">
    <a class="tab active" href="#roles">Roles &amp; access</a>
    <a class="tab" href="#users">Users <span class="badge light">42</span></a>
    <a class="tab" href="#devices">Devices <span class="badge light">147</span></a>
    <a class="tab" href="#thresholds">Thresholds</a>
    <a class="tab" href="#integrations">Integrations</a>
  </div>

  <!-- (a) Roles & access -->
  <div class="grid" id="roles">
    <div class="c12 card p0">
      <div class="card-head">
        <div><div class="eyebrow">Roles &amp; access</div><span class="card-title">RBAC matrix</span></div>
        <div class="row s8"><span class="row s4 t-caption"><span class="checkbox on" style="pointer-events:none"><i data-icon="check"></i></span>Full</span><span class="row s4 t-caption"><span class="chip neutral sm">Assigned only</span>Scoped</span><span class="row s4 t-caption"><span class="checkbox" style="pointer-events:none"></span>None</span></div>
      </div>
      <div class="table-wrap">
        <table class="table">
          <thead><tr><th>Role</th><th>Projects</th><th>People</th><th>Assets</th><th>Alerts</th><th>Muster</th><th>Reports</th><th>Admin</th><th>Mobile</th></tr></thead>
          <tbody>
            <tr><td><b>Super Admin</b><div class="t-caption">Entire system</div></td><td><span class="checkbox on"><i data-icon="check"></i></span></td><td><span class="checkbox on"><i data-icon="check"></i></span></td><td><span class="checkbox on"><i data-icon="check"></i></span></td><td><span class="checkbox on"><i data-icon="check"></i></span></td><td><span class="checkbox on"><i data-icon="check"></i></span></td><td><span class="checkbox on"><i data-icon="check"></i></span></td><td><span class="checkbox on"><i data-icon="check"></i></span></td><td><span class="checkbox on"><i data-icon="check"></i></span></td></tr>
            <tr><td><b>Management</b><div class="t-caption">All operational dashboards</div></td><td><span class="checkbox on"><i data-icon="check"></i></span></td><td><span class="checkbox on"><i data-icon="check"></i></span></td><td><span class="checkbox on"><i data-icon="check"></i></span></td><td><span class="checkbox on"><i data-icon="check"></i></span></td><td><span class="checkbox on"><i data-icon="check"></i></span></td><td><span class="checkbox on"><i data-icon="check"></i></span></td><td><span class="checkbox"></span></td><td><span class="checkbox"></span></td></tr>
            <tr><td><b>Operations Manager</b><div class="t-caption">Projects + workforce + assets</div></td><td><span class="checkbox on"><i data-icon="check"></i></span></td><td><span class="checkbox on"><i data-icon="check"></i></span></td><td><span class="checkbox on"><i data-icon="check"></i></span></td><td><span class="checkbox on"><i data-icon="check"></i></span></td><td><span class="checkbox on"><i data-icon="check"></i></span></td><td><span class="checkbox on"><i data-icon="check"></i></span></td><td><span class="checkbox"></span></td><td><span class="checkbox on"><i data-icon="check"></i></span></td></tr>
            <tr><td><b>QHSE</b><div class="t-caption">Personnel, alerts, muster</div></td><td><span class="chip neutral sm">Assigned only</span></td><td><span class="checkbox on"><i data-icon="check"></i></span></td><td><span class="checkbox"></span></td><td><span class="checkbox on"><i data-icon="check"></i></span></td><td><span class="checkbox on"><i data-icon="check"></i></span></td><td><span class="chip neutral sm">Assigned only</span></td><td><span class="checkbox"></span></td><td><span class="checkbox on"><i data-icon="check"></i></span></td></tr>
            <tr><td><b>Project Manager</b><div class="t-caption">Assigned project</div></td><td><span class="chip neutral sm">Assigned only</span></td><td><span class="chip neutral sm">Assigned only</span></td><td><span class="chip neutral sm">Assigned only</span></td><td><span class="chip neutral sm">Assigned only</span></td><td><span class="chip neutral sm">Assigned only</span></td><td><span class="chip neutral sm">Assigned only</span></td><td><span class="checkbox"></span></td><td><span class="checkbox on"><i data-icon="check"></i></span></td></tr>
            <tr><td><b>Asset Manager</b><div class="t-caption">Assets &amp; RFID</div></td><td><span class="checkbox"></span></td><td><span class="checkbox"></span></td><td><span class="checkbox on"><i data-icon="check"></i></span></td><td><span class="chip neutral sm">Assigned only</span></td><td><span class="checkbox"></span></td><td><span class="chip neutral sm">Assigned only</span></td><td><span class="checkbox"></span></td><td><span class="checkbox on"><i data-icon="check"></i></span></td></tr>
            <tr><td><b>Warehouse</b><div class="t-caption">Inventory &amp; RFID movement</div></td><td><span class="checkbox"></span></td><td><span class="checkbox"></span></td><td><span class="chip neutral sm">Assigned only</span></td><td><span class="chip neutral sm">Assigned only</span></td><td><span class="checkbox"></span></td><td><span class="chip neutral sm">Assigned only</span></td><td><span class="checkbox"></span></td><td><span class="checkbox on"><i data-icon="check"></i></span></td></tr>
            <tr><td><b>Supervisor</b><div class="t-caption">Assigned personnel</div></td><td><span class="chip neutral sm">Assigned only</span></td><td><span class="chip neutral sm">Assigned only</span></td><td><span class="checkbox"></span></td><td><span class="chip neutral sm">Assigned only</span></td><td><span class="chip neutral sm">Assigned only</span></td><td><span class="checkbox"></span></td><td><span class="checkbox"></span></td><td><span class="checkbox on"><i data-icon="check"></i></span></td></tr>
            <tr><td><b>Employee</b><div class="t-caption">Own mobile application</div></td><td><span class="checkbox"></span></td><td><span class="checkbox"></span></td><td><span class="checkbox"></span></td><td><span class="checkbox"></span></td><td><span class="checkbox"></span></td><td><span class="checkbox"></span></td><td><span class="checkbox"></span></td><td><span class="checkbox on"><i data-icon="check"></i></span></td></tr>
          </tbody>
        </table>
      </div>
      <div class="card-foot"><div class="note row s8"><i data-icon="info" class="ic-14"></i>A Project Manager normally sees only the project, people, assets, locations, alerts and reports relevant to their assignment.</div></div>
    </div>
  </div>

  <!-- (b) Users -->
  <div class="grid" id="users">
    <div class="c12 card p0">
      <div class="card-head">
        <div><div class="eyebrow">Users</div><span class="card-title">42 users · 39 active</span></div>
        <div class="row s8"><div class="input sm" style="width:220px"><i data-icon="search"></i><input placeholder="Search users"></div><div class="input select sm" style="width:150px"><span>All roles</span><i data-icon="chevrondown" class="chev"></i></div><button class="btn sm primary"><i data-icon="plus"></i>Invite user</button></div>
      </div>
      <div class="table-wrap">
        <table class="table">
          <thead><tr><th>User</th><th>Email</th><th>Role</th><th>Projects</th><th>Status</th><th>Last sign-in</th><th class="actions"></th></tr></thead>
          <tbody>
            <tr><td><span class="cell-entity"><span class="avatar sm">HW</span><b>Hendra Wijaya</b></span></td><td>hendra.wijaya@pageo.co.id</td><td><span class="chip neutral sm">Super Admin</span></td><td>All</td><td><span class="chip ok sm"><span class="dot ok"></span>Active</span></td><td>04 Sep 15:10</td><td class="actions"><button class="icon-btn" aria-label="More"><i data-icon="morev"></i></button></td></tr>
            <tr><td><span class="cell-entity"><span class="avatar sm">OM</span><b>Rudi Hartono</b></span></td><td>rudi.hartono@pageo.co.id</td><td><span class="chip neutral sm">Operations Manager</span></td><td>All</td><td><span class="chip ok sm"><span class="dot ok"></span>Active</span></td><td>04 Sep 16:02</td><td class="actions"><button class="icon-btn" aria-label="More"><i data-icon="morev"></i></button></td></tr>
            <tr><td><span class="cell-entity"><span class="avatar sm">MH</span><b>Maya Handayani</b></span></td><td>maya.handayani@pageo.co.id</td><td><span class="chip neutral sm">QHSE</span></td><td>All</td><td><span class="chip ok sm"><span class="dot ok"></span>Active</span></td><td>04 Sep 15:39</td><td class="actions"><button class="icon-btn" aria-label="More"><i data-icon="morev"></i></button></td></tr>
            <tr><td><span class="cell-entity"><span class="avatar sm">AP</span><b>Andi Pratama</b></span></td><td>andi.pratama@pageo.co.id</td><td><span class="chip neutral sm">Project Manager</span></td><td>Alpha</td><td><span class="chip ok sm"><span class="dot ok"></span>Active</span></td><td>04 Sep 14:48</td><td class="actions"><button class="icon-btn" aria-label="More"><i data-icon="morev"></i></button></td></tr>
            <tr><td><span class="cell-entity"><span class="avatar sm">NS</span><b>Nina Sari</b></span></td><td>nina.sari@pageo.co.id</td><td><span class="chip neutral sm">Asset Manager</span></td><td>All</td><td><span class="chip ok sm"><span class="dot ok"></span>Active</span></td><td>04 Sep 13:21</td><td class="actions"><button class="icon-btn" aria-label="More"><i data-icon="morev"></i></button></td></tr>
            <tr><td><span class="cell-entity"><span class="avatar sm">JS</span><b>Joko Susilo</b></span></td><td>joko.susilo@pageo.co.id</td><td><span class="chip neutral sm">Warehouse</span></td><td>Base Jakarta</td><td><span class="chip ok sm"><span class="dot ok"></span>Active</span></td><td>04 Sep 15:39</td><td class="actions"><button class="icon-btn" aria-label="More"><i data-icon="morev"></i></button></td></tr>
            <tr><td><span class="cell-entity"><span class="avatar sm">AS</span><b>Agus Setiawan</b></span></td><td>agus.setiawan@pageo.co.id</td><td><span class="chip neutral sm">Supervisor</span></td><td>Bravo</td><td><span class="chip ok sm"><span class="dot ok"></span>Active</span></td><td>04 Sep 14:10</td><td class="actions"><button class="icon-btn" aria-label="More"><i data-icon="morev"></i></button></td></tr>
            <tr><td><span class="cell-entity"><span class="avatar sm">FS</span><b>Fahmi Syaban</b></span></td><td>fahmi.syaban@pageo.co.id</td><td><span class="chip neutral sm">Employee</span></td><td>Alpha</td><td><span class="chip warn sm"><span class="dot warn"></span>Invited</span></td><td>—</td><td class="actions"><button class="icon-btn" aria-label="More"><i data-icon="morev"></i></button></td></tr>
          </tbody>
        </table>
      </div>
      <div class="table-foot"><span>Showing 8 of 42</span><div class="pager"><button>‹</button><button class="active">1</button><button>2</button><button>3</button><button>4</button><button>5</button><button>6</button><button>›</button></div></div>
    </div>
  </div>

  <!-- (c) Devices -->
  <div class="grid" id="devices">
    <div class="c4 stack">
      <div class="card kpi">
        <div class="eyebrow">Mobile devices</div>
        <div class="kpi-value">135</div>
        <div class="kpi-lines">
          <span><span class="dot ok"></span>&nbsp;<span class="num">128</span>reporting</span>
          <span><span class="dot off"></span>&nbsp;<span class="num">7</span>offline</span>
        </div>
        <div class="progress ok"><i style="width:94.8%"></i></div>
        <span class="t-caption">App v2.4.1 on 121 devices · 14 pending update</span>
      </div>
      <div class="card kpi">
        <div class="eyebrow">RFID readers</div>
        <div class="kpi-value">12</div>
        <div class="kpi-lines">
          <span><span class="dot ok"></span>&nbsp;<span class="num">11</span>online</span>
          <span><span class="dot warn"></span>&nbsp;<span class="num">1</span>offline</span>
        </div>
        <div class="progress ok"><i style="width:91.7%"></i></div>
        <span class="t-caption">RD-07 offline since 07:12 · Warehouse aisle C</span>
      </div>
    </div>
    <div class="c8 card p0">
      <div class="card-head">
        <div><div class="eyebrow">Devices</div><span class="card-title">Device registry</span></div>
        <div class="row s8"><div class="seg sm"><button class="active">All</button><button>Mobile</button><button>Reader</button></div><button class="btn xs ghost"><i data-icon="plus"></i>Register device</button></div>
      </div>
      <div class="table-wrap">
        <table class="table compact">
          <thead><tr><th>Device</th><th>Type</th><th>Assigned to</th><th>Version</th><th class="num">Battery</th><th>Last heartbeat</th><th>Status</th></tr></thead>
          <tbody>
            <tr><td><span class="cell-entity"><i data-icon="smartphone" class="ic-16"></i><b>MOB-0412</b></span></td><td>Mobile</td><td>Fahmi Syaban</td><td class="mono">App 2.4.1</td><td class="num">76%</td><td><span class="fresh live"><b>LIVE</b>12 sec ago</span></td><td><span class="chip ok sm"><span class="dot ok"></span>Reporting</span></td></tr>
            <tr><td><span class="cell-entity"><i data-icon="smartphone" class="ic-16"></i><b>MOB-0287</b></span></td><td>Mobile</td><td>Andi Pratama</td><td class="mono">App 2.4.1</td><td class="num">91%</td><td><span class="fresh live"><b>LIVE</b>8 sec ago</span></td><td><span class="chip ok sm"><span class="dot ok"></span>Reporting</span></td></tr>
            <tr><td><span class="cell-entity"><i data-icon="smartphone" class="ic-16"></i><b>MOB-0198</b></span></td><td>Mobile</td><td>Rizky Hakim</td><td class="mono">App 2.4.1</td><td class="num">41%</td><td><span class="fresh live"><b>LIVE</b>4 sec ago</span></td><td><span class="chip crit sm"><span class="dot crit"></span>SOS active</span></td></tr>
            <tr><td><span class="cell-entity"><i data-icon="smartphone" class="ic-16"></i><b>MOB-0356</b></span></td><td>Mobile</td><td>Budi Santoso</td><td class="mono">App 2.3.8</td><td class="num">—</td><td><span class="fresh offline"><b>OFFLINE</b>1 h 22 min</span></td><td><span class="chip off sm"><span class="dot off"></span>Offline</span></td></tr>
            <tr><td><span class="cell-entity"><i data-icon="smartphone" class="ic-16"></i><b>MOB-0521</b></span></td><td>Mobile</td><td>Agus Setiawan</td><td class="mono">App 2.4.1</td><td class="num">58%</td><td><span class="fresh recent"><b>RECENT</b>3 min ago</span></td><td><span class="chip ok sm"><span class="dot ok"></span>Reporting</span></td></tr>
            <tr><td><span class="cell-entity"><i data-icon="radio" class="ic-16"></i><b>RD-04</b></span></td><td>Reader</td><td>Warehouse · Dispatch Gate</td><td class="mono">FW 1.9.2</td><td class="num">Mains</td><td><span class="fresh live"><b>LIVE</b>30 sec ago</span></td><td><span class="chip ok sm"><span class="dot ok"></span>Online</span></td></tr>
            <tr><td><span class="cell-entity"><i data-icon="radio" class="ic-16"></i><b>RD-07</b></span></td><td>Reader</td><td>Warehouse · Aisle C</td><td class="mono">FW 1.8.6</td><td class="num">Mains</td><td><span class="fresh offline"><b>OFFLINE</b>8 h 30 min</span></td><td><span class="chip warn sm"><span class="dot warn"></span>Offline</span></td></tr>
            <tr><td><span class="cell-entity"><i data-icon="radio" class="ic-16"></i><b>RD-V2-01</b></span></td><td>Reader</td><td>MV PAGEO 02 · Main deck</td><td class="mono">FW 1.9.2</td><td class="num">Mains</td><td><span class="fresh live"><b>LIVE</b>18 sec ago</span></td><td><span class="chip ok sm"><span class="dot ok"></span>Online</span></td></tr>
          </tbody>
        </table>
      </div>
      <div class="table-foot"><span>Showing 8 of 147</span><div class="pager"><button>‹</button><button class="active">1</button><button>2</button><button>3</button><button>…</button><button>19</button><button>›</button></div></div>
    </div>
  </div>

  <!-- (d) Thresholds -->
  <div class="grid" id="thresholds">
    <div class="c7 card">
      <div class="card-head"><div><div class="eyebrow">Thresholds</div><span class="card-title">Location freshness</span></div><span class="t-caption">Applies to people and mobile devices</span></div>
      <div class="grid g16">
        <div class="c3 field"><label><span class="fresh live"><b>LIVE</b></span> under</label><div class="input"><input type="number" value="1"><span class="muted">min</span></div></div>
        <div class="c3 field"><label><span class="fresh recent"><b>RECENT</b></span> from – to</label><div class="input"><input type="number" value="1" style="width:2.5em;flex:0"><span class="faint">–</span><input type="number" value="5"><span class="muted">min</span></div></div>
        <div class="c3 field"><label><span class="fresh stale"><b>STALE</b></span> from – to</label><div class="input"><input type="number" value="5" style="width:2.5em;flex:0"><span class="faint">–</span><input type="number" value="30"><span class="muted">min</span></div></div>
        <div class="c3 field"><label><span class="fresh offline"><b>OFFLINE</b></span> over</label><div class="input"><input type="number" value="30"><span class="muted">min</span></div></div>
      </div>
      <div class="divider"></div>
      <div class="row between"><span class="eyebrow">Operation anomalies</span><span class="t-caption">Raise P3 when exceeded</span></div>
      <div class="grid g16">
        <div class="c6 field"><label>Long inactivity warning</label><div class="input"><i data-icon="clock"></i><input type="number" value="45"><span class="muted">min</span></div><span class="help">No movement while shift is active</span></div>
        <div class="c6 field"><label>Shift overrun warning</label><div class="input"><i data-icon="history"></i><input type="number" value="12"><span class="muted">h</span></div><span class="help">Continuous operation without check-out</span></div>
        <div class="c6 field"><label>Outside assigned zone</label><div class="input"><i data-icon="pin"></i><span class="faint">&gt;</span><input type="number" value="30"><span class="muted">min</span></div><span class="help">Employee remained outside assigned geofence</span></div>
        <div class="c6 field"><label>GPS accuracy warning</label><div class="input"><i data-icon="locate"></i><span class="faint">&gt;</span><input type="number" value="25"><span class="muted">m</span></div><span class="help">Position shown with reduced confidence</span></div>
      </div>
      <div class="row s8"><button class="btn sm primary">Save</button><button class="btn sm ghost">Reset to defaults</button><span class="ml-auto t-caption">Last changed 12 Aug by Hendra Wijaya</span></div>
    </div>

    <div class="c5 card">
      <div class="card-head"><div><div class="eyebrow">Thresholds</div><span class="card-title">Privacy</span></div><i data-icon="shieldcheck" class="ic-16 ok"></i></div>
      <div class="stack">
        <div class="row between top"><div><div class="t-label">Tracking only during active operation</div><div class="t-caption">Location is collected between check-in and check-out only.</div></div><span class="switch on"></span></div>
        <div class="divider"></div>
        <div class="row between top"><div><div class="t-label">Show tracking status in mobile app</div><div class="t-caption">Employees always see when tracking is on. Cannot be disabled.</div></div><span class="switch on" style="opacity:.45;pointer-events:none"></span></div>
        <div class="divider"></div>
        <div class="field"><label>Retain location history</label><div class="input select"><i data-icon="calendar"></i><span>90 days</span><i data-icon="chevrondown" class="chev"></i></div><span class="help">Aggregated reports are kept; raw positions are purged after this period.</span></div>
        <div class="divider"></div>
        <div class="row between top"><div><div class="t-label">Purpose limitation</div><div class="t-caption">Operational safety and asset custody only. No performance scoring.</div></div><span class="chip ok sm"><i data-icon="check" class="ic-14"></i>Enforced</span></div>
      </div>
      <div class="note row s8"><i data-icon="info" class="ic-14"></i>Changes to privacy settings are recorded in the audit log and notified to QHSE.</div>
    </div>
  </div>

  <!-- (e) Integrations -->
  <div class="grid" id="integrations">
    <div class="c12 card p0">
      <div class="card-head"><div><div class="eyebrow">Integrations</div><span class="card-title">Connected systems</span></div><button class="btn xs ghost"><i data-icon="plus"></i>Add integration</button></div>
      <div style="padding:4px 20px">
        <div class="entity">
          <span class="entity-tile" style="padding:0;border:0;background:none"><span class="sym"><i data-icon="navigation"></i></span></span>
          <div class="e-body"><div class="e-title">AIS feed</div><div class="e-sub">Vessel positions · MV PAGEO 01 / 02 / 03 · poll every 60 s</div></div>
          <div class="e-right"><span class="chip ok sm"><span class="dot ok"></span>Connected</span><span>Last message 15:41 · 3 vessels</span></div>
          <button class="btn xs ghost">Configure</button>
        </div>
        <div class="entity">
          <span class="entity-tile" style="padding:0;border:0;background:none"><span class="sym"><i data-icon="radio"></i></span></span>
          <div class="e-body"><div class="e-title">RFID reader gateway</div><div class="e-sub">12 readers · MQTT · Base Jakarta, Port, MV PAGEO 02</div></div>
          <div class="e-right"><span class="chip warn sm"><span class="dot warn"></span>1 reader offline</span><span>11 / 12 online · 1,842 reads today</span></div>
          <button class="btn xs ghost">Configure</button>
        </div>
        <div class="entity">
          <span class="entity-tile" style="padding:0;border:0;background:none"><span class="sym"><i data-icon="users"></i></span></span>
          <div class="e-body"><div class="e-title">HRIS sync</div><div class="e-sub">Employee master data, roles and shift rosters · nightly</div></div>
          <div class="e-right"><span class="chip ok sm"><span class="dot ok"></span>Connected</span><span>Last sync 04 Sep 02:00 · 214 records</span></div>
          <button class="btn xs ghost">Configure</button>
        </div>
        <div class="entity">
          <span class="entity-tile" style="padding:0;border:0;background:none"><span class="sym"><i data-icon="mail"></i></span></span>
          <div class="e-body"><div class="e-title">Email / SMS gateway</div><div class="e-sub">Alert notifications and scheduled reports · SMS fallback for P1</div></div>
          <div class="e-right"><span class="chip warn sm"><span class="dot warn"></span>Degraded</span><span>1 delivery failed 03 Sep 18:00 · retrying</span></div>
          <button class="btn xs ghost">Configure</button>
        </div>
      </div>
    </div>
  </div>`;
  }
});
