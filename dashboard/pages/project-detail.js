/* Converted from web/project-detail.html — edit freely; delete "// converted" to mark as handwritten */
// converted
PN.page("project-detail", {
  title: "Project Alpha",
  icon: "waves",
  nav: "projects",
  crumb: "Global / Project Alpha / Overview",
  render() {
    return `<!-- Project header -->
  <div class="page-head">
    <div class="titles">
      <div class="eyebrow">Project Alpha · Offshore Construction Survey</div>
      <div class="row s12"><h1>Project Alpha</h1><span class="chip info"><span class="dot info"></span>Offshore</span><span class="chip neutral">Day 1 of 15</span></div>
      <div class="sub">04 Sep — 18 Sep 2026 · Client PT Pertamina Hulu Energi · Project Manager <a href="employee-detail.html">Andi Pratama</a> · Java Sea, Offshore Work Area</div>
    </div>
    <div class="actions">
      <button class="btn ghost sm"><i data-icon="download"></i>Export</button>
      <button class="btn secondary sm"><i data-icon="diamond"></i>Assign asset</button>
      <button class="btn primary sm"><i data-icon="users"></i>Assign personnel</button>
    </div>
  </div>

  <!-- KPI row -->
  <div class="grid kpis" style="grid-template-columns:repeat(4,minmax(0,1fr))">
    <div class="card kpi">
      <div class="eyebrow">Personnel</div>
      <div class="kpi-value">24<small>/ 26</small></div>
      <div class="kpi-lines">
        <span><span class="dot ok"></span>&nbsp;<span class="num">20</span>active</span>
        <span><span class="dot off"></span>&nbsp;<span class="num">4</span>offline</span>
      </div>
    </div>
    <div class="card kpi">
      <div class="eyebrow">Assets</div>
      <div class="kpi-value">47</div>
      <div class="kpi-lines">
        <span><span class="dot info"></span>&nbsp;<span class="num">42</span>deployed</span>
        <span><span class="dot ok"></span>&nbsp;<span class="num">5</span>available</span>
      </div>
    </div>
    <div class="card kpi">
      <div class="eyebrow">Vessels</div>
      <div class="kpi-value">2</div>
      <div class="kpi-lines">
        <span><span class="dot info"></span>&nbsp;<span class="num">12</span>on MV PAGEO 02</span>
        <span><span class="dot info"></span>&nbsp;<span class="num">8</span>on MV PAGEO 01</span>
      </div>
    </div>
    <div class="card kpi alert">
      <div class="eyebrow">Open alerts</div>
      <div class="kpi-value">1</div>
      <div class="kpi-lines">
        <span><span class="dot crit"></span>&nbsp;<span class="num">1</span>P2 · outside work area</span>
        <span><span class="dot warn"></span>&nbsp;<span class="num">0</span>warnings</span>
      </div>
    </div>
  </div>

  <!-- Operational stage -->
  <div class="card p16">
    <div class="card-head"><span class="card-title">Operational stage</span><span class="t-caption">Port / Vessel since 11:20 · next: Offshore Operation</span></div>
    <div class="flow">
      <div class="step done"><span class="n"><i data-icon="check" class="ic-14"></i></span><span>Base</span></div><span class="arrow done"></span>
      <div class="step done"><span class="n"><i data-icon="check" class="ic-14"></i></span><span>Preparation</span></div><span class="arrow done"></span>
      <div class="step done"><span class="n"><i data-icon="check" class="ic-14"></i></span><span>Assignment</span></div><span class="arrow done"></span>
      <div class="step done"><span class="n"><i data-icon="check" class="ic-14"></i></span><span>Mobilization</span></div><span class="arrow done"></span>
      <div class="step current"><span class="n">5</span><span>Port / Vessel</span></div><span class="arrow"></span>
      <div class="step"><span class="n">6</span><span>Offshore Operation</span></div><span class="arrow"></span>
      <div class="step"><span class="n">7</span><span>Demobilization</span></div><span class="arrow"></span>
      <div class="step"><span class="n">8</span><span>Closeout</span></div>
    </div>
  </div>

  <!-- Map + People / Assets -->
  <div class="grid">
    <div class="c8 card p0">
      <div class="card-head">
        <div class="row s8"><span class="card-title">Live project map</span><span class="chip ok sm"><span class="dot ok pulse"></span>Live · 9 sec ago</span></div>
        <div class="row s8">
          <div class="seg sm">
            <button data-layer="all" class="active">Combined</button>
            <button data-layer="people">People</button>
            <button data-layer="assets">Assets</button>
            <button data-layer="vessels">Vessels</button>
          </div>
          <a class="link" href="live-map.html">Open live map <i data-icon="arrowright" class="ic-14"></i></a>
        </div>
      </div>
      <div class="map flush" data-map="offshore" style="height:440px">
        <div data-fence="30,26 66,20 74,50 56,70 34,62" data-label="Offshore Work Area — Alpha"></div>

        <div class="mk vessel" style="left:48%;top:42%"><span class="sym"><i data-icon="ship"></i></span><span class="lbl">MV PAGEO 02<small>12 personnel · 18 assets</small></span></div>
        <div class="mk vessel" style="left:62%;top:34%"><span class="sym"><i data-icon="ship"></i></span><span class="lbl">MV PAGEO 01<small>8 personnel · 11 assets</small></span></div>

        <div class="mk person" style="left:52%;top:50%" data-popup="fahmi"><span class="sym"><i data-icon="user"></i></span><span class="lbl">Fahmi Syaban</span></div>
        <div class="mk person" style="left:45%;top:48%"><span class="sym"><i data-icon="user"></i></span><span class="lbl">Andi Pratama</span></div>
        <div class="mk person" style="left:56%;top:44%"><span class="sym"><i data-icon="user"></i></span></div>
        <div class="mk person" style="left:59%;top:40%"><span class="sym"><i data-icon="user"></i></span></div>
        <div class="mk person" style="left:66%;top:38%"><span class="sym"><i data-icon="user"></i></span></div>
        <div class="mk cluster" style="left:50%;top:38%"><span class="sym">14</span></div>
        <div class="mk person crit" style="left:79%;top:58%"><span class="sym"><i data-icon="user"></i></span><span class="lbl">Dimas Prasetyo<small>Outside work area · 34 min</small></span></div>
        <div class="mk person off" style="left:12%;top:74%"><span class="sym"><i data-icon="user"></i></span><span class="lbl">Islet camp<small>2 offline</small></span></div>

        <div class="mk asset" style="left:46%;top:56%"><span class="sym"><i data-icon="diamond"></i></span><span class="lbl">MBES-03</span></div>
        <div class="mk asset" style="left:54%;top:60%"><span class="sym"><i data-icon="diamond"></i></span><span class="lbl">GPS-042</span></div>
        <div class="mk asset" style="left:40%;top:44%"><span class="sym"><i data-icon="diamond"></i></span><span class="lbl">ROV-T27-04</span></div>
        <div class="mk cluster asset" style="left:61%;top:52%"><span class="sym">19</span></div>

        <div class="popup hide" data-for="fahmi" style="left:52%;top:50%">
          <div class="p-head"><span class="avatar sm">FS</span><div><div class="p-title">Fahmi Syaban</div><div class="p-sub">Survey Engineer · MV PAGEO 02</div></div></div>
          <dl class="kv"><dt>Status</dt><dd><span class="row s8"><span class="dot ok"></span>Active</span></dd><dt>Last update</dt><dd>15:42:16</dd><dt>Accuracy</dt><dd>± 8 m</dd><dt>Battery</dt><dd>72%</dd></dl>
          <div class="p-actions"><a class="btn xs secondary" href="employee-detail.html">Open profile</a></div>
        </div>

        <div class="map-ui bl">
          <div class="map-legend">
            <span class="lg"><span class="sym person"></span>Person</span>
            <span class="lg"><span class="sym asset"></span>Asset</span>
            <span class="lg"><span class="sym vessel"></span>Vessel</span>
            <span class="lg"><span class="sym fence"></span>Work area</span>
          </div>
        </div>
        <div class="map-ui bc"><span class="map-coords">-6.1042, 106.9311 · Zoom 13</span></div>
        <div class="map-ui br"><div class="map-ctl"><button aria-label="Zoom in"><i data-icon="plus"></i></button><button aria-label="Zoom out"><i data-icon="minus"></i></button><button aria-label="Fit to project"><i data-icon="crosshair"></i></button></div></div>
      </div>
    </div>

    <div class="c4 stack">
      <div class="card">
        <div class="card-head"><span class="card-title">People</span><a class="link" href="personnel.html">All personnel <i data-icon="arrowright" class="ic-14"></i></a></div>
        <div class="stat-list">
          <div class="stat"><span class="dot ok"></span><span class="n">17</span><span class="l">Active on site</span><div class="bar"><i style="width:65%;background:var(--s-success)"></i></div></div>
          <div class="stat"><span class="dot info"></span><span class="n">3</span><span class="l">On vessel</span><div class="bar"><i style="width:12%"></i></div></div>
          <div class="stat"><span class="dot off"></span><span class="n">4</span><span class="l">Offline</span><div class="bar"><i style="width:15%;background:var(--s-offline)"></i></div></div>
          <div class="stat"><span class="dot unknown"></span><span class="n">2</span><span class="l">Not checked in</span><div class="bar"><i style="width:8%;background:var(--s-unknown)"></i></div></div>
        </div>
        <div class="divider"></div>
        <dl class="kv"><dt>Accounted</dt><dd>24 / 26</dd><dt>Muster point</dt><dd>B · Deck 2 · MV PAGEO 02</dd><dt>Last full check</dt><dd>15:00 · 26 / 26</dd></dl>
      </div>
      <div class="card">
        <div class="card-head"><span class="card-title">Assets</span><a class="link" href="assets.html">Registry <i data-icon="arrowright" class="ic-14"></i></a></div>
        <div class="stat-list">
          <div class="stat"><span class="dot info"></span><span class="n">42</span><span class="l">Deployed</span><div class="bar"><i style="width:89%"></i></div></div>
          <div class="stat"><span class="dot ok"></span><span class="n">5</span><span class="l">Available</span><div class="bar"><i style="width:11%;background:var(--s-success)"></i></div></div>
          <div class="stat"><span class="dot crit"></span><span class="n">0</span><span class="l">Missing</span><div class="bar"><i style="width:0%;background:var(--s-crit)"></i></div></div>
        </div>
        <div class="divider"></div>
        <dl class="kv"><dt>Last RFID read</dt><dd>15:39 · Cable Set-07</dd><dt>Custody holders</dt><dd>14 personnel</dd></dl>
      </div>
    </div>
  </div>

  <!-- Mobilization + Personnel -->
  <div class="grid">
    <div class="c6 card p0">
      <div class="card-head">
        <div class="row s8"><span class="card-title">Mobilization checklist</span><span class="chip warn sm"><span class="dot warn"></span>1 pending</span></div>
        <a class="link" href="mobilization.html">Mobilization <i data-icon="arrowright" class="ic-14"></i></a>
      </div>
      <div class="stack s12" style="padding:16px 20px 0">
        <div class="row between"><span class="strong num">27 / 28 equipment ready</span><span class="t-caption">96% · updated 15:22</span></div>
        <div class="progress warn"><i style="width:96%"></i></div>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px">
          <div><div class="eyebrow">Ready</div><div class="strong num" style="font-size:16px">27 / 28</div></div>
          <div><div class="eyebrow">Scanned at dispatch</div><div class="strong num" style="font-size:16px">27 / 28</div></div>
          <div><div class="eyebrow">Received on vessel</div><div class="strong num" style="font-size:16px">26 / 28</div></div>
        </div>
      </div>
      <div class="checklist" style="padding:6px 20px 8px">
        <div class="ck ok"><span class="st"><i data-icon="check"></i></span><span>MBES</span><span class="sub">MBES-03</span><span class="right">Received · 11:32</span></div>
        <div class="ck ok"><span class="st"><i data-icon="check"></i></span><span>GPS Receiver</span><span class="sub">GPS-042</span><span class="right">Received · 11:32</span></div>
        <div class="ck ok"><span class="st"><i data-icon="check"></i></span><span>Gyro</span><span class="sub">Gyro-01</span><span class="right">Received · 11:34</span></div>
        <div class="ck ok"><span class="st"><i data-icon="check"></i></span><span>SVP</span><span class="sub">SVP-08</span><span class="right">Received · 11:34</span></div>
        <div class="ck ok"><span class="st"><i data-icon="check"></i></span><span>Side Scan Sonar</span><span class="sub">SONAR-004</span><span class="right">Received · 11:41</span></div>
        <div class="ck ok"><span class="st"><i data-icon="check"></i></span><span>Magnetometer</span><span class="sub">MAG-02</span><span class="right">Received · 11:41</span></div>
        <div class="ck ok"><span class="st"><i data-icon="check"></i></span><span>ROV Tooling</span><span class="sub">ROV-T27-04</span><span class="right">Received · 11:48</span></div>
        <div class="ck ok"><span class="st"><i data-icon="check"></i></span><span>Laptop Acquisition</span><span class="sub">Laptop-SV029</span><span class="right">Received · 11:50</span></div>
        <div class="ck ok"><span class="st"><i data-icon="check"></i></span><span>Power Supply</span><span class="sub">Battery Pack-04</span><span class="right">Received · 11:52</span></div>
        <div class="ck warn"><span class="st"><i data-icon="warning"></i></span><span>Cable Set</span><span class="sub">Cable Set-07 · Not scanned at dispatch gate</span><span class="right"><a href="asset-detail.html">Resolve</a></span></div>
      </div>
    </div>

    <div class="c6 card p0">
      <div class="card-head"><span class="card-title">Personnel</span><a class="link" href="personnel.html">All 26 <i data-icon="arrowright" class="ic-14"></i></a></div>
      <div class="table-wrap">
        <table class="table compact">
          <thead><tr><th>Employee</th><th>Role</th><th>Location</th><th>Status</th><th class="num">Last update</th></tr></thead>
          <tbody>
            <tr><td><a class="strong" href="employee-detail.html">Andi Pratama</a></td><td>Project Manager</td><td>MV PAGEO 02</td><td><span class="chip ok sm"><span class="dot ok"></span>Active</span></td><td class="num">15:42</td></tr>
            <tr><td><a class="strong" href="employee-detail.html">Fahmi Syaban</a></td><td>Survey Engineer</td><td>MV PAGEO 02</td><td><span class="chip ok sm"><span class="dot ok"></span>Active</span></td><td class="num">15:42</td></tr>
            <tr><td><a class="strong" href="employee-detail.html">Dewi Lestari</a></td><td>Data Processor</td><td>MV PAGEO 02</td><td><span class="chip ok sm"><span class="dot ok"></span>Active</span></td><td class="num">15:41</td></tr>
            <tr><td><a class="strong" href="employee-detail.html">Dimas Prasetyo</a></td><td>Survey Technician</td><td>Outside work area</td><td><span class="chip crit sm"><span class="dot crit"></span>Alert</span></td><td class="num">15:15</td></tr>
            <tr><td><a class="strong" href="employee-detail.html">Agus Setiawan</a></td><td>Engineer</td><td>Warehouse · Base</td><td><span class="chip warn sm"><span class="dot warn"></span>Idle</span></td><td class="num">15:39</td></tr>
            <tr><td><a class="strong" href="employee-detail.html">Taufik Hidayat</a></td><td>Party Chief</td><td>MV PAGEO 01</td><td><span class="chip info sm"><span class="dot info"></span>On Vessel</span></td><td class="num">15:42</td></tr>
            <tr><td><a class="strong" href="employee-detail.html">Nadia Safitri</a></td><td>HSE Officer</td><td>MV PAGEO 01</td><td><span class="chip info sm"><span class="dot info"></span>On Vessel</span></td><td class="num">15:40</td></tr>
            <tr><td><a class="strong" href="employee-detail.html">Bayu Nugroho</a></td><td>Deck Technician</td><td class="faint">—</td><td><span class="chip off sm"><span class="dot off"></span>Offline</span></td><td class="num">14:05</td></tr>
          </tbody>
        </table>
      </div>
      <div class="table-foot"><span>Showing 8 of 26</span><div class="pager"><button aria-label="Previous"><i data-icon="chevronleft" class="ic-14"></i></button><button class="active">1</button><button>2</button><button>3</button><button>4</button><button aria-label="Next"><i data-icon="chevronright" class="ic-14"></i></button></div></div>
    </div>
  </div>

  <!-- Activity + Vessels -->
  <div class="grid">
    <div class="c8 card p0">
      <div class="card-head"><span class="card-title">Recent activity</span><div class="seg sm"><button class="active">All</button><button>People</button><button>Assets</button><button>Alerts</button></div></div>
      <div class="feed" style="padding:4px 20px">
        <div class="ev"><span class="time">15:42</span><i data-icon="user"></i><div><b>Fahmi Syaban</b> position updated on MV PAGEO 02 <span class="sub">· accuracy ± 8 m</span></div><span class="chip ok sm"><span class="dot ok"></span>Live</span></div>
        <div class="ev"><span class="time">15:39</span><i data-icon="diamond"></i><div><b>Cable Set-07</b> detected at <b>MV PAGEO 02 · Deck reader RD-11</b></div><span class="chip transit sm">RFID</span></div>
        <div class="ev"><span class="time">15:38</span><i data-icon="warning"></i><div><b>Dimas Prasetyo</b> outside <b>Offshore Work Area</b> for 30 min</div><span class="chip crit sm"><span class="dot crit"></span>P2</span></div>
        <div class="ev"><span class="time">15:31</span><i data-icon="link"></i><div><b>GPS-022</b> assigned to <b>Project Alpha</b> by Ops Manager</div><span class="chip neutral sm">Assignment</span></div>
        <div class="ev"><span class="time">15:22</span><i data-icon="truck"></i><div>Mobilization · <b>27 / 28</b> equipment scanned at Dispatch Gate · Cable Set-07 pending</div><span class="chip warn sm">1 pending</span></div>
        <div class="ev"><span class="time">14:05</span><i data-icon="wifioff"></i><div><b>Bayu Nugroho</b> device offline · last seen MV PAGEO 01</div><span class="chip off sm"><span class="dot off"></span>Offline</span></div>
        <div class="ev"><span class="time">11:48</span><i data-icon="ship"></i><div><b>ROV-T27-04</b> received on <b>MV PAGEO 02</b> · custody Andi Pratama</div><span class="chip info sm">Received</span></div>
        <div class="ev"><span class="time">11:20</span><i data-icon="flag"></i><div>Stage changed to <b>Port / Vessel</b> · 24 personnel boarded at Tanjung Priok</div><span class="chip neutral sm">Stage</span></div>
      </div>
      <div class="card-foot row between"><span class="t-caption">Showing 8 of 214 events today</span><a class="link" href="asset-movement.html">Full movement log <i data-icon="arrowright" class="ic-14"></i></a></div>
    </div>

    <div class="c4 card">
      <div class="card-head"><span class="card-title">Vessels</span><a class="link" href="vessels.html">All vessels <i data-icon="arrowright" class="ic-14"></i></a></div>
      <div class="stack s8">
        <div class="entity" style="padding-top:0">
          <span class="entity-tile" style="padding:0;border:0;background:none"><span class="sym"><i data-icon="ship"></i></span></span>
          <div class="e-body"><div class="e-title"><a href="vessels.html">MV PAGEO 02</a></div><div class="e-sub">Survey vessel · at work area · 214° · 3.2 kn</div></div>
          <div class="e-right"><span class="chip info sm"><span class="dot info"></span>On station</span><span>12 personnel · 18 assets</span></div>
        </div>
        <div class="entity">
          <span class="entity-tile" style="padding:0;border:0;background:none"><span class="sym"><i data-icon="ship"></i></span></span>
          <div class="e-body"><div class="e-title"><a href="vessels.html">MV PAGEO 01</a></div><div class="e-sub">Support vessel · transit to work area · 12 nm</div></div>
          <div class="e-right"><span class="chip transit sm"><span class="dot transit"></span>In transit</span><span>8 personnel · 11 assets</span></div>
        </div>
      </div>
      <div class="divider"></div>
      <dl class="kv"><dt>Port of call</dt><dd>Tanjung Priok · Jetty 3</dd><dt>Next crew change</dt><dd>11 Sep 2026</dd><dt>Muster points</dt><dd>A · Bridge deck, B · Deck 2</dd></dl>
    </div>
  </div>`;
  }
});
