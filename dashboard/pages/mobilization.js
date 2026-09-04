/* Converted from web/mobilization.html — edit freely; delete "// converted" to mark as handwritten */
// converted
PN.page("mobilization", {
  title: "Mobilization",
  icon: "truck",
  nav: "mobilization",
  crumb: "Global / People / Mobilization",
  render() {
    return `<div class="page-head">
    <div class="titles">
      <div class="eyebrow">People · Mobilization</div>
      <h1>Mobilization</h1>
      <div class="sub">Personnel and equipment movement from base to vessel · 3 active · 04 Sep 2026</div>
    </div>
    <div class="actions">
      <button class="btn ghost sm"><i data-icon="download"></i>Export</button>
      <button class="btn primary sm"><i data-icon="plus"></i>New mobilization</button>
    </div>
  </div>

  <div class="tabs" data-tabs="mob">
    <button class="tab active" data-tab="active">Active <span class="badge light">3</span></button>
    <button class="tab" data-tab="planned">Planned <span class="badge light">2</span></button>
    <button class="tab" data-tab="completed">Completed <span class="badge light">14</span></button>
  </div>

  <!-- Active mobilizations -->
  <div class="grid" data-panel="active" data-panel-group="mob">

    <div class="c4 card">
      <div class="card-head">
        <div><div class="card-title">Project Alpha</div><div class="t-caption">Offshore Construction Survey · MV PAGEO 02</div></div>
        <span class="chip ok sm"><span class="dot ok"></span>Mobilized</span>
      </div>
      <div class="flow">
        <div class="step done" style="min-width:60px;flex:0 0 auto"><span class="n"><i data-icon="check" class="ic-14"></i></span><span>Prepare</span></div>
        <div class="arrow done"></div>
        <div class="step done" style="min-width:60px;flex:0 0 auto"><span class="n"><i data-icon="check" class="ic-14"></i></span><span>Dispatch</span></div>
        <div class="arrow done"></div>
        <div class="step done" style="min-width:60px;flex:0 0 auto"><span class="n"><i data-icon="check" class="ic-14"></i></span><span>Port</span></div>
        <div class="arrow done"></div>
        <div class="step done" style="min-width:60px;flex:0 0 auto"><span class="n"><i data-icon="check" class="ic-14"></i></span><span>Vessel</span></div>
      </div>
      <div>
        <div class="row between" style="font-size:13px"><span class="muted">Personnel checked in</span><span class="strong num">26 / 26</span></div>
        <div class="progress ok mt8"><i style="width:100%"></i></div>
      </div>
      <div>
        <div class="row between" style="font-size:13px"><span class="muted">Equipment received on vessel</span><span class="strong num">47 / 47</span></div>
        <div class="progress ok mt8"><i style="width:100%"></i></div>
        <div class="grid g16 mt8" style="grid-template-columns:repeat(3,minmax(0,1fr))">
          <div><div class="eyebrow">Ready</div><div class="num strong" style="font-size:14px">47 / 47</div></div>
          <div><div class="eyebrow">Scanned</div><div class="num strong" style="font-size:14px">47 / 47</div></div>
          <div><div class="eyebrow">Received</div><div class="num strong" style="font-size:14px">47 / 47</div></div>
        </div>
      </div>
      <div class="row between">
        <span class="t-caption">Completed 04 Sep · 11:20 · Tanjung Priok</span>
        <a class="btn ghost sm" href="mobilization.html">Open checklist</a>
      </div>
    </div>

    <div class="c4 card">
      <div class="card-head">
        <div><div class="card-title">Project Charlie</div><div class="t-caption">Port Bathymetry · MV PAGEO 03 · Tanjung Priok</div></div>
        <span class="chip warn sm"><span class="dot warn"></span>In progress</span>
      </div>
      <div class="flow">
        <div class="step done" style="min-width:60px;flex:0 0 auto"><span class="n"><i data-icon="check" class="ic-14"></i></span><span>Prepare</span></div>
        <div class="arrow done"></div>
        <div class="step current" style="min-width:60px;flex:0 0 auto"><span class="n">2</span><span>Dispatch</span></div>
        <div class="arrow"></div>
        <div class="step" style="min-width:60px;flex:0 0 auto"><span class="n">3</span><span>Port</span></div>
        <div class="arrow"></div>
        <div class="step" style="min-width:60px;flex:0 0 auto"><span class="n">4</span><span>Vessel</span></div>
      </div>
      <div>
        <div class="row between" style="font-size:13px"><span class="muted">Personnel checked in</span><span class="strong num">24 / 26</span></div>
        <div class="progress mt8"><i style="width:92%"></i></div>
      </div>
      <div>
        <div class="row between" style="font-size:13px"><span class="muted">Equipment scanned at Dispatch Gate</span><span class="strong num">27 / 28</span></div>
        <div class="progress warn mt8"><i style="width:96%"></i></div>
        <div class="grid g16 mt8" style="grid-template-columns:repeat(3,minmax(0,1fr))">
          <div><div class="eyebrow">Ready</div><div class="num strong" style="font-size:14px">27 / 28</div></div>
          <div><div class="eyebrow">Scanned</div><div class="num strong" style="font-size:14px">27 / 28</div></div>
          <div><div class="eyebrow">Received</div><div class="num strong" style="font-size:14px">26 / 28</div></div>
        </div>
      </div>
      <div class="row between">
        <span class="t-caption"><span class="warn">1 item not detected</span> · Dispatch Gate RD-02</span>
        <a class="btn secondary sm" href="mobilization.html">Open checklist</a>
      </div>
    </div>

    <div class="c4 card">
      <div class="card-head">
        <div><div class="card-title">Project Delta</div><div class="t-caption">Nearshore Geotechnical · MV PAGEO 01 · Cilegon</div></div>
        <span class="chip neutral sm"><i data-icon="calendar" class="ic-14"></i>Planned · 08 Sep</span>
      </div>
      <div class="flow">
        <div class="step current" style="min-width:60px;flex:0 0 auto"><span class="n">1</span><span>Prepare</span></div>
        <div class="arrow"></div>
        <div class="step" style="min-width:60px;flex:0 0 auto"><span class="n">2</span><span>Dispatch</span></div>
        <div class="arrow"></div>
        <div class="step" style="min-width:60px;flex:0 0 auto"><span class="n">3</span><span>Port</span></div>
        <div class="arrow"></div>
        <div class="step" style="min-width:60px;flex:0 0 auto"><span class="n">4</span><span>Vessel</span></div>
      </div>
      <div>
        <div class="row between" style="font-size:13px"><span class="muted">Personnel confirmed for roster</span><span class="strong num">11 / 14</span></div>
        <div class="progress mt8"><i style="width:79%"></i></div>
      </div>
      <div>
        <div class="row between" style="font-size:13px"><span class="muted">Equipment ready at warehouse</span><span class="strong num">9 / 19</span></div>
        <div class="progress mt8"><i style="width:47%"></i></div>
        <div class="grid g16 mt8" style="grid-template-columns:repeat(3,minmax(0,1fr))">
          <div><div class="eyebrow">Ready</div><div class="num strong" style="font-size:14px">9 / 19</div></div>
          <div><div class="eyebrow">Scanned</div><div class="num strong" style="font-size:14px">0 / 19</div></div>
          <div><div class="eyebrow">Received</div><div class="num strong" style="font-size:14px">0 / 19</div></div>
        </div>
      </div>
      <div class="row between">
        <span class="t-caption">Dispatch window 07 Sep 06:00 · 4 days out</span>
        <a class="btn ghost sm" href="mobilization.html">Open checklist</a>
      </div>
    </div>
  </div>

  <!-- Planned mobilizations -->
  <div class="grid hide" data-panel="planned" data-panel-group="mob">
    <div class="c12 card p0">
      <div class="table-wrap">
        <table class="table">
          <thead><tr><th>Project</th><th>Vessel / site</th><th>Dispatch</th><th class="num">Personnel</th><th class="num">Equipment</th><th>Status</th><th></th></tr></thead>
          <tbody>
            <tr><td><a class="strong" href="project-detail.html">Project Echo</a><div class="t-caption">Coastal Erosion Survey</div></td><td>MV PAGEO 03 · Semarang</td><td class="num">15 Sep 2026</td><td class="num">8 / 10</td><td class="num">6 / 22</td><td><span class="chip neutral sm">Planned</span></td><td class="actions"><a class="btn xs ghost" href="mobilization.html">Open</a></td></tr>
            <tr><td><a class="strong" href="project-detail.html">Project Bravo — Phase 2</a><div class="t-caption">Pipeline Inspection ROV</div></td><td>MV PAGEO 01 · Balikpapan</td><td class="num">22 Sep 2026</td><td class="num">14 / 18</td><td class="num">3 / 31</td><td><span class="chip neutral sm">Planned</span></td><td class="actions"><a class="btn xs ghost" href="mobilization.html">Open</a></td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <!-- Completed mobilizations -->
  <div class="grid hide" data-panel="completed" data-panel-group="mob">
    <div class="c12 card p0">
      <div class="table-wrap">
        <table class="table">
          <thead><tr><th>Project</th><th>Vessel / site</th><th>Completed</th><th class="num">Personnel</th><th class="num">Equipment</th><th class="num">Duration</th><th>Result</th></tr></thead>
          <tbody>
            <tr><td><a class="strong" href="project-detail.html">Project Alpha</a><div class="t-caption">Offshore Construction Survey</div></td><td>MV PAGEO 02 · Tanjung Priok</td><td class="num">04 Sep 2026 · 11:20</td><td class="num">26 / 26</td><td class="num">47 / 47</td><td class="num">3 h 17 m</td><td><span class="chip ok sm"><span class="dot ok"></span>Complete</span></td></tr>
            <tr><td><a class="strong" href="project-detail.html">Project Bravo</a><div class="t-caption">Pipeline Inspection ROV</div></td><td>MV PAGEO 01 · Balikpapan</td><td class="num">28 Aug 2026 · 14:05</td><td class="num">18 / 18</td><td class="num">31 / 31</td><td class="num">4 h 02 m</td><td><span class="chip ok sm"><span class="dot ok"></span>Complete</span></td></tr>
            <tr><td><a class="strong" href="project-detail.html">Project Bravo — Demob</a><div class="t-caption">Pipeline Inspection ROV</div></td><td>Base Jakarta</td><td class="num">19 Aug 2026 · 16:40</td><td class="num">18 / 18</td><td class="num">30 / 31</td><td class="num">5 h 22 m</td><td><span class="chip warn sm"><span class="dot warn"></span>1 unreturned</span></td></tr>
            <tr><td><a class="strong" href="project-detail.html">Project Kilo</a><div class="t-caption">Jetty Bathymetry</div></td><td>MV PAGEO 03 · Cirebon</td><td class="num">11 Aug 2026 · 09:52</td><td class="num">9 / 9</td><td class="num">14 / 14</td><td class="num">2 h 08 m</td><td><span class="chip ok sm"><span class="dot ok"></span>Complete</span></td></tr>
            <tr><td><a class="strong" href="project-detail.html">Project Juliet</a><div class="t-caption">Cable Route Survey</div></td><td>MV PAGEO 02 · Merak</td><td class="num">02 Aug 2026 · 13:15</td><td class="num">22 / 24</td><td class="num">38 / 38</td><td class="num">3 h 44 m</td><td><span class="chip ok sm"><span class="dot ok"></span>Complete</span></td></tr>
          </tbody>
        </table>
      </div>
      <div class="table-foot"><span>Showing 5 of 14 completed mobilizations</span><div class="pager"><button disabled><i data-icon="chevronleft" class="ic-14"></i></button><button class="active">1</button><button>2</button><button>3</button><button><i data-icon="chevronright" class="ic-14"></i></button></div></div>
    </div>
  </div>

  <!-- Checklist + personnel -->
  <div class="grid">
    <div class="c7 card p0">
      <div class="card-head">
        <div class="row s8"><span class="card-title">Equipment checklist — Project Charlie</span><span class="chip warn sm">27 / 28 scanned</span></div>
        <div class="row s8"><span class="t-caption">Dispatch Gate RD-02 · updated 15:22</span><button class="btn xs ghost"><i data-icon="scanline"></i>Rescan</button></div>
      </div>
      <div class="checklist" style="padding:4px 20px">
        <div class="ck ok"><span class="st"><i data-icon="check"></i></span><div>MBES <span class="sub">· MBES-02 · Multibeam Echo Sounder</span></div><span class="right">RD-02 · 15:04</span></div>
        <div class="ck ok"><span class="st"><i data-icon="check"></i></span><div>GPS Receiver <span class="sub">· GPS-031 · GNSS RTK</span></div><span class="right">RD-02 · 15:04</span></div>
        <div class="ck ok"><span class="st"><i data-icon="check"></i></span><div>Gyro <span class="sub">· Gyro-01 · Gyrocompass</span></div><span class="right">RD-02 · 15:06</span></div>
        <div class="ck ok"><span class="st"><i data-icon="check"></i></span><div>SVP <span class="sub">· SVP-03 · Sound Velocity Profiler</span></div><span class="right">RD-02 · 15:06</span></div>
        <div class="ck ok"><span class="st"><i data-icon="check"></i></span><div>Side Scan Sonar <span class="sub">· SONAR-008 · Towfish + winch</span></div><span class="right">RD-02 · 15:09</span></div>
        <div class="ck ok"><span class="st"><i data-icon="check"></i></span><div>Magnetometer <span class="sub">· MAG-01 · Marine magnetometer</span></div><span class="right">RD-02 · 15:09</span></div>
        <div class="ck ok"><span class="st"><i data-icon="check"></i></span><div>ROV Tooling <span class="sub">· ROV-T27-02 · Inspection skid</span></div><span class="right">RD-02 · 15:13</span></div>
        <div class="ck ok"><span class="st"><i data-icon="check"></i></span><div>Laptop Acquisition <span class="sub">· Laptop-SV031 · QINSy workstation</span></div><span class="right">RD-02 · 15:15</span></div>
        <div class="ck ok"><span class="st"><i data-icon="check"></i></span><div>Power Supply <span class="sub">· PSU-05 · 24 V DC rack</span></div><span class="right">RD-02 · 15:18</span></div>
        <div class="ck warn"><span class="st"><i data-icon="warning"></i></span><div>Cable Set <span class="sub">· Cable Set-07 · Deck cable set 50 m</span></div><span class="right warn" style="font-weight:500">Not detected</span></div>
      </div>
      <div style="padding:4px 20px 16px">
        <div class="banner warn">
          <i data-icon="warning" class="ic-16"></i>
          <span><b>Cable Set-07</b> not detected at Dispatch Gate RD-02 — last seen Warehouse 14:05 · RD-01</span>
          <div class="banner-actions"><a class="btn xs ghost" href="asset-detail.html">Asset history</a><button class="btn xs ghost">Mark missing</button></div>
        </div>
      </div>
      <div class="card-foot row between">
        <span class="t-caption">Ready <span class="num strong">27 / 28</span> · Scanned <span class="num strong">27 / 28</span> · Received <span class="num strong">26 / 28</span></span>
        <a class="link" href="asset-movement.html">Movement log <i data-icon="arrowright" class="ic-14"></i></a>
      </div>
    </div>

    <div class="c5 card p0">
      <div class="card-head">
        <span class="card-title">Personnel — Project Charlie</span>
        <span class="chip info sm"><span class="dot info"></span>24 / 26 checked in</span>
      </div>
      <div class="table-wrap">
        <table class="table compact">
          <thead><tr><th>Person</th><th>From → To</th><th>Stage</th><th class="num">Time</th></tr></thead>
          <tbody>
            <tr><td><div class="cell-entity"><span class="avatar sm">AS</span><div><a href="employee-detail.html" class="strong">Agus Setiawan</a><div class="sub">Engineer</div></div></div></td><td>Base Jakarta → Port Jetty 3</td><td><span class="chip info sm"><span class="dot info"></span>At port</span></td><td class="num">14:52</td></tr>
            <tr><td><div class="cell-entity"><span class="avatar sm">DL</span><div><a href="employee-detail.html" class="strong">Dewi Lestari</a><div class="sub">Party Chief</div></div></div></td><td>Base Jakarta → Port Jetty 3</td><td><span class="chip info sm"><span class="dot info"></span>At port</span></td><td class="num">14:40</td></tr>
            <tr><td><div class="cell-entity"><span class="avatar sm">YM</span><div><a href="employee-detail.html" class="strong">Yusuf Maulana</a><div class="sub">Deck Technician</div></div></div></td><td>Port Jetty 3 → MV PAGEO 03</td><td><span class="chip ok sm"><span class="dot ok"></span>On vessel</span></td><td class="num">15:12</td></tr>
            <tr><td><div class="cell-entity"><span class="avatar sm">TP</span><div><a href="employee-detail.html" class="strong">Teguh Prasetyo</a><div class="sub">Coxswain</div></div></div></td><td>Port Jetty 3 → MV PAGEO 03</td><td><span class="chip ok sm"><span class="dot ok"></span>On vessel</span></td><td class="num">15:12</td></tr>
            <tr><td><div class="cell-entity"><span class="avatar sm">HW</span><div><a href="employee-detail.html" class="strong">Hendra Wijaya</a><div class="sub">Surveyor</div></div></div></td><td>Base Jakarta → Port Jetty 3</td><td><span class="chip transit sm"><span class="dot transit"></span>In transit</span></td><td class="num">ETA 15:55</td></tr>
            <tr><td><div class="cell-entity"><span class="avatar sm">SR</span><div><a href="employee-detail.html" class="strong">Sari Rahmawati</a><div class="sub">Data Processor</div></div></div></td><td>Base Jakarta → Port Jetty 3</td><td><span class="chip transit sm"><span class="dot transit"></span>In transit</span></td><td class="num">ETA 15:55</td></tr>
            <tr><td><div class="cell-entity"><span class="avatar sm">RK</span><div><a href="employee-detail.html" class="strong">Rina Kartika</a><div class="sub">QHSE Officer</div></div></div></td><td>Base Jakarta → Port Jetty 3</td><td><span class="chip neutral sm">At base</span></td><td class="num">ETA 16:30</td></tr>
            <tr><td><div class="cell-entity"><span class="avatar sm">BS</span><div><a href="employee-detail.html" class="strong">Budi Santoso</a><div class="sub">Technician</div></div></div></td><td>Base Jakarta → Port Jetty 3</td><td><span class="chip off sm"><span class="dot off"></span>At base · offline</span></td><td class="num">14:20</td></tr>
          </tbody>
        </table>
      </div>
      <div class="table-foot"><span>Showing 8 of 26 · 2 not yet checked in</span><a class="link" href="personnel.html">Personnel registry <i data-icon="arrowright" class="ic-14"></i></a></div>
    </div>
  </div>

  <!-- Movement log -->
  <div class="grid">
    <div class="c12 card p0">
      <div class="card-head">
        <span class="card-title">Movement log</span>
        <div class="row s8">
          <div class="seg sm"><button class="active">All</button><button>RFID</button><button>Geofence</button><button>Check-in</button></div>
          <a class="link" href="asset-movement.html">Full log <i data-icon="arrowright" class="ic-14"></i></a>
        </div>
      </div>
      <div class="feed" style="padding:4px 20px">
        <div class="ev"><span class="time">15:22</span><i data-icon="nfc"></i><div><b>27 / 28</b> Project Charlie equipment scanned at <b>Dispatch Gate RD-02</b> <span class="sub">· Cable Set-07 not detected</span></div><span class="chip warn sm">RFID · 1 pending</span></div>
        <div class="ev"><span class="time">15:12</span><i data-icon="ship"></i><div><b>Yusuf Maulana</b>, <b>Teguh Prasetyo</b> entered geofence <b>Vessel — MV PAGEO 03</b> <span class="sub">· Port Jetty 3</span></div><span class="chip info sm">Geofence</span></div>
        <div class="ev"><span class="time">15:12</span><i data-icon="diamond"></i><div><b>Gyro-01</b>, <b>SVP-03</b> received at <b>MV PAGEO 03 Deck</b> reader RD-31 <span class="sub">· Project Charlie</span></div><span class="chip transit sm">RFID</span></div>
        <div class="ev"><span class="time">14:52</span><i data-icon="pin"></i><div><b>Agus Setiawan</b> checked in at <b>Port Jetty 3</b> <span class="sub">· accuracy ± 6 m</span></div><span class="chip ok sm"><span class="dot ok"></span>Check-in</span></div>
        <div class="ev"><span class="time">14:40</span><i data-icon="anchor"></i><div><b>Dewi Lestari</b> entered geofence <b>Port Jetty 3</b> <span class="sub">· from Base Jakarta · 1 h 12 m in transit</span></div><span class="chip info sm">Geofence</span></div>
        <div class="ev"><span class="time">14:05</span><i data-icon="warehouse"></i><div><b>Cable Set-07</b> last seen at <b>Warehouse Gate A</b> reader RD-01 <span class="sub">· exit not recorded at RD-02</span></div><span class="chip transit sm">RFID</span></div>
      </div>
      <div class="card-foot row between"><span class="t-caption">Showing 6 of 148 movement events today · all projects</span><span class="t-caption">RFID readers online 11 / 12</span></div>
    </div>
  </div>`;
  }
});
