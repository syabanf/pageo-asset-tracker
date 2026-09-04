/* Converted from web/alerts.html — edit freely; delete "// converted" to mark as handwritten */
// converted
PN.page("alerts", {
  title: "Alert Center",
  icon: "bell",
  nav: "alerts",
  crumb: "Global / Operations / Alerts",
  render() {
    return `<div class="page-head">
    <div class="titles">
      <div class="eyebrow">Operations</div>
      <h1>Alert Center</h1>
      <div class="sub">People and assets · one queue, one severity scale</div>
    </div>
    <div class="actions">
      <a class="btn ghost sm" href="admin.html"><i data-icon="settings"></i>Alert rules</a>
      <button class="btn ghost sm"><i data-icon="download"></i>Export</button>
    </div>
  </div>

  <!-- KPI strip -->
  <div class="grid kpis" style="grid-template-columns:repeat(6,minmax(0,1fr))">
    <div class="card kpi compact alert"><div class="eyebrow">Open</div><div class="kpi-value">3</div><div class="kpi-lines"><span>Requires acknowledgement</span></div></div>
    <div class="card kpi compact"><div class="eyebrow">P1 critical</div><div class="kpi-value" style="color:var(--s-crit)">1</div><div class="kpi-lines"><span><span class="dot crit pulse"></span>&nbsp;SOS · 24 sec ago</span></div></div>
    <div class="card kpi compact"><div class="eyebrow">P2 high</div><div class="kpi-value">0</div><div class="kpi-lines"><span>1 acknowledged today</span></div></div>
    <div class="card kpi compact"><div class="eyebrow">P3 warning</div><div class="kpi-value">2</div><div class="kpi-lines"><span>1 person · 1 asset</span></div></div>
    <div class="card kpi compact"><div class="eyebrow">Acknowledged today</div><div class="kpi-value">11</div><div class="kpi-lines"><span>48 resolved this week</span></div></div>
    <div class="card kpi compact"><div class="eyebrow">Mean time to acknowledge</div><div class="kpi-value">4<small>min</small> 12<small>s</small></div><div class="kpi-lines"><span class="delta"><i data-icon="arrowdown" class="ic-14"></i>38 s faster than last week</span></div></div>
  </div>

  <!-- Tabs + filters -->
  <div class="stack s12">
    <div class="tabs">
      <button class="tab active">Open <span class="badge">3</span></button>
      <button class="tab">Acknowledged <span class="badge light">11</span></button>
      <button class="tab">Resolved <span class="badge light">48</span></button>
      <button class="tab">All</button>
    </div>
    <div class="filters">
      <span class="t-caption">Severity</span>
      <div class="seg sm"><button class="active">P1</button><button class="active">P2</button><button class="active">P3</button><button>P4</button></div>
      <span class="t-caption">Type</span>
      <div class="seg sm"><button class="active">All</button><button><i data-icon="user" class="ic-14"></i>Human</button><button><i data-icon="diamond" class="ic-14"></i>Asset</button></div>
      <div class="input select sm" style="width:180px"><i data-icon="clipboard"></i><span>All projects</span><i data-icon="chevrondown" class="chev"></i></div>
      <div class="input select sm" style="width:170px"><i data-icon="radio"></i><span>Any source</span><i data-icon="chevrondown" class="chev"></i></div>
      <span class="ml-auto t-caption">Sorted by severity, then time</span>
    </div>
  </div>

  <!-- List + detail -->
  <div class="grid">
    <div class="c5 stack s12">
      <div class="alert-card p1 crit" style="outline:2px solid var(--accent);outline-offset:-1px">
        <div class="a-head"><span class="sev p1">P1</span>Critical · Human<span class="when">24 sec ago</span></div>
        <div class="a-title">SOS signal received</div>
        <div class="a-meta"><span>Employee <b>Rizky Hakim</b> · ROV Pilot</span><span>Project Alpha · Restricted Zone · 15:38 WIB</span></div>
        <div class="a-actions"><a class="btn xs primary" href="live-map.html">View location</a><button class="btn xs ghost" data-ack>Acknowledge</button></div>
      </div>
      <div class="alert-card p3">
        <div class="a-head"><span class="sev p3">P3</span>Warning · Asset<span class="when">2 min ago</span></div>
        <div class="a-title">Asset not seen for 2 days</div>
        <div class="a-meta"><span><b>SONAR-012</b> · Side Scan Sonar · Project Charlie</span><span>Last reader: Gate 02 · 02 Sep 15:22</span></div>
        <div class="a-actions"><a class="btn xs secondary" href="asset-detail.html">Open asset</a><button class="btn xs ghost" data-ack>Acknowledge</button></div>
      </div>
      <div class="alert-card p3">
        <div class="a-head"><span class="sev p3">P3</span>Warning · Human<span class="when">11 min ago</span></div>
        <div class="a-title">No location update &gt; 30 min</div>
        <div class="a-meta"><span><b>Budi Santoso</b> · Technician · Project Charlie</span><span>Last position 14:20 · PAGEO Base · device offline</span></div>
        <div class="a-actions"><a class="btn xs secondary" href="employee-detail.html">Open profile</a><button class="btn xs ghost" data-ack>Acknowledge</button></div>
      </div>
      <div class="alert-card p2" style="opacity:.75">
        <div class="a-head"><span class="sev p2">P2</span>High · Human<span class="when">15:38</span></div>
        <div class="a-title">Unauthorized personnel entered Restricted Zone</div>
        <div class="a-meta"><span><b>Rizky Hakim</b> · Project Alpha · geofence Restricted Area</span><span>Acknowledged by <b>Maya Handayani</b> (QHSE) · 15:39 · escalated to P1 SOS</span></div>
        <div class="row s8"><span class="chip neutral sm"><i data-icon="check" class="ic-14"></i>Acknowledged</span><span class="t-caption">Linked to SOS #A-2611</span></div>
      </div>
      <div class="alert-card p4">
        <div class="a-head"><span class="sev p4">P4</span>Information · Asset<span class="when">08:00</span></div>
        <div class="a-title">Calibration expiring — SVP-07 in 14 days</div>
        <div class="a-meta"><span><b>SVP-07</b> · Sound velocity profiler · Warehouse</span><span>Due 18 Sep 2026 · vendor slot not booked</span></div>
        <div class="a-actions"><a class="btn xs secondary" href="asset-detail.html">Open asset</a><button class="btn xs ghost">Snooze 7 d</button></div>
      </div>
      <div class="alert-card p4">
        <div class="a-head"><span class="sev p4">P4</span>Information · Asset<span class="when">07:12</span></div>
        <div class="a-title">RFID reader RD-07 offline</div>
        <div class="a-meta"><span><b>RD-07</b> · Warehouse aisle C · Base Jakarta</span><span>Heartbeat missed 8 h 30 min · 3 other readers cover the zone</span></div>
        <div class="a-actions"><a class="btn xs secondary" href="admin.html">Open device</a><button class="btn xs ghost" data-ack>Acknowledge</button></div>
      </div>
      <div class="row between" style="padding:0 4px"><span class="t-caption">6 shown · 3 open, 1 acknowledged, 2 informational</span><a class="link" href="#">Load older</a></div>
    </div>

    <div class="c7 card">
      <div class="card-head">
        <div class="row s8"><span class="sev p1">P1</span><span class="card-title">SOS signal received</span><span class="chip crit sm"><span class="dot crit pulse"></span>Open</span><span class="chip neutral sm">Human</span><span class="chip info sm">Project Alpha</span></div>
        <span class="t-caption">Alert #A-2611 · 15:38:24 WIB</span>
      </div>
      <div class="map" data-map="coast" style="height:260px">
        <div data-fence="62,18 92,12 94,56 66,62" data-kind="restricted" data-label="Restricted Zone"></div>
        <div data-fence="30,50 54,42 60,74 36,84" data-label="Offshore Work Area — Alpha"></div>
        <div class="mk person crit" style="left:78%;top:38%"><span class="accuracy" style="width:44px;height:44px;left:-9px;top:-9px;background:rgba(196,61,61,.12);border-color:rgba(196,61,61,.4)"></span><span class="sym"><i data-icon="user"></i></span><span class="lbl">Rizky Hakim<small>SOS · ± 11 m</small></span></div>
        <div class="mk vessel" style="left:46%;top:60%"><span class="sym"><i data-icon="ship"></i></span><span class="lbl">MV PAGEO 02<small>1.8 km</small></span></div>
        <div class="mk person" style="left:52%;top:56%"><span class="sym"><i data-icon="user"></i></span><span class="lbl">Andi Pratama<small>Supervisor</small></span></div>
        <div class="map-ui bl"><span class="map-coords">-6.10320, 106.88110 · ± 11 m</span></div>
        <div class="map-ui br"><div class="map-ctl"><button aria-label="Zoom in"><i data-icon="plus"></i></button><button aria-label="Zoom out"><i data-icon="minus"></i></button></div></div>
      </div>
      <div class="kv-grid">
        <div><div class="k">Employee</div><div class="v"><a href="employee-detail.html">Rizky Hakim</a></div></div>
        <div><div class="k">Role</div><div class="v">ROV Pilot</div></div>
        <div><div class="k">Project</div><div class="v"><a href="project-detail.html">Project Alpha</a></div></div>
        <div><div class="k">Position</div><div class="v">-6.1032, 106.8811</div></div>
        <div><div class="k">Accuracy</div><div class="v">± 11 m</div></div>
        <div><div class="k">Received</div><div class="v">15:38:24</div></div>
        <div><div class="k">Device battery</div><div class="v">41%</div></div>
        <div><div class="k">Supervisor</div><div class="v">Andi Pratama</div></div>
      </div>
      <div class="divider"></div>
      <div class="row between"><span class="eyebrow">Escalation</span><span class="t-caption">Policy: SOS → QHSE + supervisor + vessel master</span></div>
      <div class="timeline">
        <div class="tl"><span class="time">15:38:24</span><span class="node"><span class="dot crit"></span></span><div class="body"><b>SOS received</b> from mobile app<div class="sub">Press-and-hold 2 s · position -6.1032, 106.8811 · ± 11 m</div></div></div>
        <div class="tl"><span class="time">15:38:26</span><span class="node"><span class="dot ok"></span></span><div class="body">Push sent to <b>QHSE</b> + <b>supervisor</b><div class="sub">Maya Handayani · Andi Pratama · delivered</div></div></div>
        <div class="tl"><span class="time">15:38:31</span><span class="node"><span class="dot ok"></span></span><div class="body">SMS fallback to <b>vessel master</b> MV PAGEO 02<div class="sub">Capt. Slamet Riyadi · delivered</div></div></div>
        <div class="tl"><span class="time">15:38:40</span><span class="node"><span class="dot warn"></span></span><div class="body"><b>Acknowledge pending</b><div class="sub">Escalates to Operations Manager if not acknowledged by 15:43:24</div></div></div>
        <div class="tl"><span class="time">—</span><span class="node"><span class="dot unknown"></span></span><div class="body"><span class="muted">Resolution</span><div class="sub">Awaiting response · location refreshes every 10 s while SOS is active</div></div></div>
      </div>
      <div class="divider"></div>
      <div class="row s8 wrap">
        <button class="btn sm secondary"><i data-icon="phone"></i>Call employee</button>
        <button class="btn sm secondary"><i data-icon="ship"></i>Notify vessel master</button>
        <span class="ml-auto"></span>
        <button class="btn sm primary" data-ack>Acknowledge</button>
        <button class="btn sm ghost">Resolve</button>
      </div>
    </div>
  </div>

  <!-- Catalogue -->
  <div class="grid">
    <div class="c12 card p0">
      <div class="card-head"><span class="card-title">Alert catalogue</span><span class="t-caption">Default severity and routing · editable in Administration › Thresholds</span></div>
      <div style="display:grid;grid-template-columns:1fr 1fr">
        <div style="border-right:1px solid var(--border)">
          <div class="row s8" style="padding:12px 20px 8px"><i data-icon="user" class="ic-16"></i><span class="eyebrow">Human alerts</span><span class="t-caption">7</span></div>
          <div class="table-wrap">
            <table class="table compact">
              <thead><tr><th>Alert</th><th>Default severity</th><th>Trigger</th><th>Notify</th></tr></thead>
              <tbody>
                <tr><td><b>SOS</b></td><td><span class="sev p1">P1</span></td><td>Press-and-hold 2 s in mobile app</td><td>QHSE · Supervisor · Vessel master</td></tr>
                <tr><td><b>Employee unexpectedly offline</b></td><td><span class="sev p3">P3</span></td><td>No heartbeat &gt; 30 min during active operation</td><td>Supervisor</td></tr>
                <tr><td><b>Restricted zone entry</b></td><td><span class="sev p2">P2</span></td><td>Geofence enter without authorization</td><td>QHSE · Supervisor</td></tr>
                <tr><td><b>Site departure</b></td><td><span class="sev p3">P3</span></td><td>Geofence exit during active shift</td><td>Supervisor</td></tr>
                <tr><td><b>No location update</b></td><td><span class="sev p3">P3</span></td><td>&gt; 30 min without position</td><td>Supervisor</td></tr>
                <tr><td><b>Operation anomaly</b></td><td><span class="sev p3">P3</span></td><td>Inactivity &gt; 45 min or shift overrun &gt; 12 h</td><td>Supervisor · Ops Manager</td></tr>
                <tr><td><b>Muster not confirmed</b></td><td><span class="sev p2">P2</span></td><td>No check-in 10 min after muster call</td><td>QHSE</td></tr>
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <div class="row s8" style="padding:12px 20px 8px"><i data-icon="diamond" class="ic-16"></i><span class="eyebrow">Asset alerts</span><span class="t-caption">8</span></div>
          <div class="table-wrap">
            <table class="table compact">
              <thead><tr><th>Alert</th><th>Default severity</th><th>Trigger</th><th>Notify</th></tr></thead>
              <tbody>
                <tr><td><b>Asset removed from assigned area</b></td><td><span class="sev p2">P2</span></td><td>Exit read outside a dispatch</td><td>Asset Manager</td></tr>
                <tr><td><b>Unauthorized movement</b></td><td><span class="sev p2">P2</span></td><td>Movement without active assignment</td><td>Asset Manager · QHSE</td></tr>
                <tr><td><b>Asset not returned</b></td><td><span class="sev p3">P3</span></td><td>Past expected return date</td><td>Warehouse</td></tr>
                <tr><td><b>Asset missing</b></td><td><span class="sev p2">P2</span></td><td>Not seen by any reader &gt; 48 h</td><td>Asset Manager</td></tr>
                <tr><td><b>RFID reader offline</b></td><td><span class="sev p4">P4</span></td><td>Reader heartbeat missed &gt; 15 min</td><td>Asset Manager</td></tr>
                <tr><td><b>Asset assigned to wrong project</b></td><td><span class="sev p3">P3</span></td><td>Read at a reader of another project</td><td>Project Manager</td></tr>
                <tr><td><b>Calibration expiring</b></td><td><span class="sev p4">P4</span></td><td>&lt; 14 days to calibration due</td><td>Asset Manager</td></tr>
                <tr><td><b>Maintenance due</b></td><td><span class="sev p4">P4</span></td><td>Maintenance schedule reached</td><td>Warehouse</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="card-foot row between"><span class="t-caption">Severity scale: P1 Critical · P2 High · P3 Warning · P4 Information</span><a class="link" href="admin.html">Edit thresholds <i data-icon="arrowright" class="ic-14"></i></a></div>
    </div>
  </div>`;
  }
});
