/* Converted from web/assets.html — edit freely; delete "// converted" to mark as handwritten */
// converted
PN.page("assets", {
  title: "Asset Registry",
  icon: "diamond",
  nav: "assets",
  crumb: "Global / Assets / Asset Registry",
  render() {
    return `<div class="page-head">
    <div class="titles">
      <div class="eyebrow">Assets · Registry</div>
      <h1>Asset Registry</h1>
      <div class="sub">RFID equipment custody, mobilization and accountability — 684 registered</div>
    </div>
    <div class="actions">
      <div class="seg sm"><button class="active"><i data-icon="list" class="ic-14"></i>Compact</button><button><i data-icon="menu" class="ic-14"></i>Comfortable</button></div>
      <button class="btn ghost sm"><i data-icon="columns"></i>Columns</button>
      <button class="btn ghost sm"><i data-icon="download"></i>Export</button>
      <button class="btn primary sm"><i data-icon="plus"></i>Register asset</button>
    </div>
  </div>

  <!-- KPI strip -->
  <div class="grid kpis g16" style="grid-template-columns:repeat(7,minmax(0,1fr))">
    <div class="card kpi compact p16"><div class="eyebrow">Total</div><div class="kpi-value">684</div><div class="kpi-lines"><span><span class="dot unknown"></span>&nbsp;All categories</span></div></div>
    <div class="card kpi compact p16"><div class="eyebrow">Available</div><div class="kpi-value">481</div><div class="kpi-lines"><span><span class="dot ok"></span>&nbsp;Warehouse · workshop</span></div></div>
    <div class="card kpi compact p16"><div class="eyebrow">Deployed</div><div class="kpi-value">142</div><div class="kpi-lines"><span><span class="dot info"></span>&nbsp;3 projects · 2 vessels</span></div></div>
    <div class="card kpi compact p16"><div class="eyebrow">In transit</div><div class="kpi-value">27</div><div class="kpi-lines"><span><span class="dot transit"></span>&nbsp;Base ↔ port</span></div></div>
    <div class="card kpi compact p16"><div class="eyebrow">Maintenance</div><div class="kpi-value">18</div><div class="kpi-lines"><span><span class="dot warn"></span>&nbsp;4 calibration due</span></div></div>
    <div class="card kpi compact p16"><div class="eyebrow">Missing</div><div class="kpi-value" style="color:var(--s-crit)">3</div><div class="kpi-lines"><span><span class="dot crit"></span>&nbsp;Not seen &gt; 48 h</span></div></div>
    <div class="card kpi compact p16"><div class="eyebrow">Unassigned</div><div class="kpi-value">13</div><div class="kpi-lines"><span><span class="dot unknown"></span>&nbsp;In project, no custodian</span></div></div>
  </div>

  <!-- Filters -->
  <div class="filters">
    <div class="input sm" style="width:260px"><i data-icon="search"></i><input type="search" placeholder="Search asset ID, description, RFID…" aria-label="Search assets"></div>
    <div class="input sm"><i data-icon="layers"></i><select aria-label="Category"><option>Category · All</option><option>Survey</option><option>Positioning</option><option>ROV</option><option>Comms</option><option>IT</option><option>Power</option></select></div>
    <div class="input sm"><i data-icon="clipboard"></i><select aria-label="Project"><option>Project · All</option><option>Project Alpha</option><option>Project Bravo</option><option>Project Charlie</option><option>Unassigned</option></select></div>
    <div class="input sm"><i data-icon="pin"></i><select aria-label="Location"><option>Location · All</option><option>Warehouse</option><option>Workshop</option><option>Loading Area</option><option>Port Jetty 3</option><option>MV PAGEO 01</option><option>MV PAGEO 02</option><option>MV PAGEO 03</option><option>Offshore Site</option><option>Unknown</option></select></div>
    <div class="input sm"><i data-icon="circledot"></i><select aria-label="Status"><option>Status · All</option><option>Available</option><option>Deployed</option><option>In transit</option><option>Maintenance</option><option>Missing / Alert</option><option>Unassigned</option></select></div>
    <div class="input sm"><i data-icon="user"></i><select aria-label="Custodian"><option>Custodian · All</option><option>Fahmi Syaban</option><option>Andi Pratama</option><option>Rizky Hakim</option><option>Agus Setiawan</option><option>Budi Santoso</option><option>Warehouse</option></select></div>
    <label class="row s8" style="font-size:13px;color:var(--text-2);margin-left:4px"><span class="switch" role="switch" aria-label="Calibration due"></span>Calibration due</label>
    <span class="ml-auto t-caption">Showing all · sorted by last seen · updated 15:42</span>
  </div>

  <!-- Table -->
  <div class="card p0">
    <div class="table-wrap">
      <table class="table">
        <thead>
          <tr>
            <th style="width:36px"><span class="checkbox"></span></th>
            <th class="sortable">Asset</th>
            <th class="sortable">Category</th>
            <th class="sortable">Project</th>
            <th class="sortable">Location</th>
            <th class="sortable">Custodian</th>
            <th class="sortable">Last seen <i data-icon="arrowdown"></i></th>
            <th class="sortable">Status</th>
            <th class="sortable num">Calibration due</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><span class="checkbox"></span></td>
            <td><div class="cell-entity"><span class="entity-tile" style="padding:0;border:0;background:none"><span class="sym dark" style="width:30px;height:30px"><i data-icon="diamond" class="ic-14"></i></span></span><div><a class="strong" href="asset-detail.html">MBES-001</a><div class="sub">Multibeam Echo Sounder · Kongsberg EM 2040C</div></div></div></td>
            <td>Survey</td><td><a href="project-detail.html">Project Alpha</a></td><td>Vessel A · MV PAGEO 02</td><td>Andi Pratama</td>
            <td><div class="num">15:41</div><div class="t-caption">RD-11 · Vessel Deck</div></td>
            <td><span class="chip info sm"><span class="dot info"></span>Deployed</span></td>
            <td class="num">18 Dec 2026</td>
            <td class="actions"><button class="icon-btn" aria-label="More"><i data-icon="more"></i></button></td>
          </tr>
          <tr>
            <td><span class="checkbox"></span></td>
            <td><div class="cell-entity"><span class="entity-tile" style="padding:0;border:0;background:none"><span class="sym dark" style="width:30px;height:30px"><i data-icon="diamond" class="ic-14"></i></span></span><div><a class="strong" href="asset-detail.html">ROV-T27-04</a><div class="sub">ROV Tooling Skid · Inspection class</div></div></div></td>
            <td>ROV</td><td><a href="project-detail.html">Project Bravo</a></td><td>Offshore Site · MV PAGEO 01</td><td>Dimas Saputra</td>
            <td><div class="num">15:37</div><div class="t-caption">RD-21 · MV PAGEO 01 Deck</div></td>
            <td><span class="chip info sm"><span class="dot info"></span>Deployed</span></td>
            <td class="num muted">—</td>
            <td class="actions"><button class="icon-btn" aria-label="More"><i data-icon="more"></i></button></td>
          </tr>
          <tr>
            <td><span class="checkbox"></span></td>
            <td><div class="cell-entity"><span class="entity-tile" style="padding:0;border:0;background:none"><span class="sym dark" style="width:30px;height:30px"><i data-icon="diamond" class="ic-14"></i></span></span><div><a class="strong" href="asset-detail.html">GPS-042</a><div class="sub">GNSS Receiver · Trimble R12i</div></div></div></td>
            <td>Positioning</td><td class="muted">—</td><td>Warehouse · Rack B3</td><td class="muted">Warehouse</td>
            <td><div class="num">15:22</div><div class="t-caption">RD-01 · Warehouse Gate A</div></td>
            <td><span class="chip ok sm"><span class="dot ok"></span>Available</span></td>
            <td class="num">02 Oct 2026</td>
            <td class="actions"><button class="icon-btn" aria-label="More"><i data-icon="more"></i></button></td>
          </tr>
          <tr>
            <td><span class="checkbox"></span></td>
            <td><div class="cell-entity"><span class="entity-tile" style="padding:0;border:0;background:none"><span class="sym crit" style="width:30px;height:30px"><i data-icon="diamond" class="ic-14"></i></span></span><div><a class="strong" href="asset-detail.html">SONAR-012</a><div class="sub">Side Scan Sonar · EdgeTech 4125</div></div></div></td>
            <td>Survey</td><td><a href="project-detail.html">Project Charlie</a></td><td class="crit">Unknown</td><td>Budi Santoso</td>
            <td><div class="num crit">2 days</div><div class="t-caption">RD-02 · Dispatch Gate · 02 Sep 15:22</div></td>
            <td><span class="chip crit sm"><span class="dot crit"></span>Alert</span></td>
            <td class="num">30 Nov 2026</td>
            <td class="actions"><a class="btn xs ghost" href="alerts.html">Open alert</a></td>
          </tr>
          <tr>
            <td><span class="checkbox"></span></td>
            <td><div class="cell-entity"><span class="entity-tile" style="padding:0;border:0;background:none"><span class="sym dark" style="width:30px;height:30px"><i data-icon="diamond" class="ic-14"></i></span></span><div><a class="strong" href="asset-detail.html">MBES-03</a><div class="sub">Multibeam Echo Sounder · Kongsberg EM 2040C</div></div></div></td>
            <td>Survey</td><td><a href="project-detail.html">Project Alpha</a></td><td>MV PAGEO 02 · Deck</td><td>Fahmi Syaban</td>
            <td><div class="num">15:37</div><div class="t-caption">RD-11 · Vessel Deck</div></td>
            <td><span class="chip info sm"><span class="dot info"></span>Deployed</span></td>
            <td class="num">18 Dec 2026</td>
            <td class="actions"><button class="icon-btn" aria-label="More"><i data-icon="more"></i></button></td>
          </tr>
          <tr>
            <td><span class="checkbox"></span></td>
            <td><div class="cell-entity"><span class="entity-tile" style="padding:0;border:0;background:none"><span class="sym dark" style="width:30px;height:30px"><i data-icon="diamond" class="ic-14"></i></span></span><div><a class="strong" href="asset-detail.html">GPS-029</a><div class="sub">GNSS Receiver · Trimble R12i</div></div></div></td>
            <td>Positioning</td><td><a href="project-detail.html">Project Alpha</a></td><td>MV PAGEO 02 · Deck</td><td>Andi Pratama</td>
            <td><div class="num">15:41</div><div class="t-caption">RD-11 · Vessel Deck</div></td>
            <td><span class="chip info sm"><span class="dot info"></span>Deployed</span></td>
            <td class="num">14 Jan 2027</td>
            <td class="actions"><button class="icon-btn" aria-label="More"><i data-icon="more"></i></button></td>
          </tr>
          <tr>
            <td><span class="checkbox"></span></td>
            <td><div class="cell-entity"><span class="entity-tile" style="padding:0;border:0;background:none"><span class="sym dark" style="width:30px;height:30px"><i data-icon="monitor" class="ic-14"></i></span></span><div><a class="strong" href="asset-detail.html">Laptop-SV029</a><div class="sub">Acquisition Laptop · Dell Precision 7680</div></div></div></td>
            <td>IT</td><td><a href="project-detail.html">Project Alpha</a></td><td>MV PAGEO 02 · Survey room</td><td>Andi Pratama</td>
            <td><div class="num">15:41</div><div class="t-caption">RD-11 · Vessel Deck</div></td>
            <td><span class="chip info sm"><span class="dot info"></span>Deployed</span></td>
            <td class="num muted">—</td>
            <td class="actions"><button class="icon-btn" aria-label="More"><i data-icon="more"></i></button></td>
          </tr>
          <tr>
            <td><span class="checkbox"></span></td>
            <td><div class="cell-entity"><span class="entity-tile" style="padding:0;border:0;background:none"><span class="sym dark" style="width:30px;height:30px"><i data-icon="radio" class="ic-14"></i></span></span><div><a class="strong" href="asset-detail.html">Radio-012</a><div class="sub">VHF Handheld · Icom IC-M94D</div></div></div></td>
            <td>Comms</td><td><a href="project-detail.html">Project Alpha</a></td><td>MV PAGEO 02 · Deck</td><td>Andi Pratama</td>
            <td><div class="num">15:40</div><div class="t-caption">RD-11 · Vessel Deck</div></td>
            <td><span class="chip info sm"><span class="dot info"></span>Deployed</span></td>
            <td class="num muted">—</td>
            <td class="actions"><button class="icon-btn" aria-label="More"><i data-icon="more"></i></button></td>
          </tr>
          <tr>
            <td><span class="checkbox"></span></td>
            <td><div class="cell-entity"><span class="entity-tile" style="padding:0;border:0;background:none"><span class="sym dark" style="width:30px;height:30px"><i data-icon="compass" class="ic-14"></i></span></span><div><a class="strong" href="asset-detail.html">Gyro-01</a><div class="sub">Gyrocompass · Teledyne TSS Meridian</div></div></div></td>
            <td>Positioning</td><td><a href="project-detail.html">Project Charlie</a></td><td>MV PAGEO 03 · Deck</td><td>Agus Setiawan</td>
            <td><div class="num">15:12</div><div class="t-caption">RD-31 · MV PAGEO 03 Deck</div></td>
            <td><span class="chip info sm"><span class="dot info"></span>Deployed</span></td>
            <td class="num">05 Feb 2027</td>
            <td class="actions"><button class="icon-btn" aria-label="More"><i data-icon="more"></i></button></td>
          </tr>
          <tr>
            <td><span class="checkbox"></span></td>
            <td><div class="cell-entity"><span class="entity-tile" style="padding:0;border:0;background:none"><span class="sym dark" style="width:30px;height:30px"><i data-icon="diamond" class="ic-14"></i></span></span><div><a class="strong" href="asset-detail.html">SVP-07</a><div class="sub">Sound Velocity Profiler · Valeport SWiFT</div></div></div></td>
            <td>Survey</td><td><a href="project-detail.html">Project Alpha</a></td><td>MV PAGEO 02 · Hold</td><td class="muted">—</td>
            <td><div class="num">15:02</div><div class="t-caption">RD-12 · MV PAGEO 02 Hold</div></td>
            <td><span class="chip unknown sm"><span class="dot unknown"></span>Unassigned</span></td>
            <td class="num warn">22 Sep 2026</td>
            <td class="actions"><a class="btn xs ghost" href="assignment.html">Assign</a></td>
          </tr>
          <tr>
            <td><span class="checkbox"></span></td>
            <td><div class="cell-entity"><span class="entity-tile" style="padding:0;border:0;background:none"><span class="sym dark" style="width:30px;height:30px"><i data-icon="diamond" class="ic-14"></i></span></span><div><a class="strong" href="asset-detail.html">MAG-02</a><div class="sub">Marine Magnetometer · Geometrics G-882</div></div></div></td>
            <td>Survey</td><td><a href="project-detail.html">Project Alpha</a></td><td>MV PAGEO 02 · Hold</td><td class="muted">—</td>
            <td><div class="num">15:02</div><div class="t-caption">RD-12 · MV PAGEO 02 Hold</div></td>
            <td><span class="chip unknown sm"><span class="dot unknown"></span>Unassigned</span></td>
            <td class="num">08 Mar 2027</td>
            <td class="actions"><a class="btn xs ghost" href="assignment.html">Assign</a></td>
          </tr>
          <tr>
            <td><span class="checkbox"></span></td>
            <td><div class="cell-entity"><span class="entity-tile" style="padding:0;border:0;background:none"><span class="sym dark" style="width:30px;height:30px"><i data-icon="zap" class="ic-14"></i></span></span><div><a class="strong" href="asset-detail.html">Cable Set-07</a><div class="sub">Deck Cable Set 50 m · MBES + GNSS</div></div></div></td>
            <td>Power</td><td><a href="project-detail.html">Project Charlie</a></td><td>Warehouse → Port Jetty 3</td><td class="muted">—</td>
            <td><div class="num">14:05</div><div class="t-caption">RD-01 · Warehouse Gate A · <span class="warn">not seen at RD-02</span></div></td>
            <td><span class="chip transit sm"><span class="dot transit"></span>In transit</span></td>
            <td class="num muted">—</td>
            <td class="actions"><button class="icon-btn" aria-label="More"><i data-icon="more"></i></button></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="table-foot">
      <span>Showing 1–12 of 684 · 0 selected</span>
      <div class="row s12">
        <span class="row s8">Rows <div class="input sm" style="height:28px;width:70px;padding:0 8px"><select aria-label="Rows per page"><option>12</option><option>25</option><option>50</option></select></div></span>
        <div class="pager"><button disabled><i data-icon="chevronleft" class="ic-14"></i></button><button class="active">1</button><button>2</button><button>3</button><button>4</button><button>…</button><button>57</button><button><i data-icon="chevronright" class="ic-14"></i></button></div>
      </div>
    </div>
  </div>`;
  }
});
