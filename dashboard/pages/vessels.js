/* Converted from web/vessels.html — edit freely; delete "// converted" to mark as handwritten */
// converted
PN.page("vessels", {
  title: "Vessels",
  icon: "ship",
  nav: "vessels",
  crumb: "Global / Operations / Vessels",
  render() {
    return `<div class="page-head">
    <div class="titles">
      <div class="eyebrow">Operations</div>
      <h1>Vessels</h1>
      <div class="sub">Fleet presence, personnel on board and equipment custody · 3 vessels · 2 offshore · 1 alongside</div>
    </div>
    <div class="actions">
      <button class="btn ghost sm"><i data-icon="download"></i>Export</button>
      <button class="btn primary sm"><i data-icon="plus"></i>Add vessel</button>
    </div>
  </div>

  <!-- Vessel cards -->
  <div class="grid">
    <div class="c4 card">
      <div class="row s12 top">
        <span class="entity-tile" style="padding:0;border:0;background:none"><span class="sym dark"><i data-icon="ship"></i></span></span>
        <div class="grow">
          <div class="row s8"><span class="card-title">MV PAGEO 01</span><span class="chip info sm"><span class="dot info"></span>Offshore</span></div>
          <div class="t-caption"><a href="project-detail.html">Project Bravo</a> · Pipeline Inspection ROV</div>
        </div>
        <button class="icon-btn" aria-label="More"><i data-icon="morev"></i></button>
      </div>
      <div class="kv-grid" style="grid-template-columns:repeat(2,minmax(0,1fr))">
        <div><div class="k">Personnel</div><div class="v big">8</div></div>
        <div><div class="k">Assets</div><div class="v big">11</div></div>
        <div><div class="k">Position</div><div class="v">-5.9123, 106.7512</div></div>
        <div><div class="k">Heading / speed</div><div class="v">214° · 3.2 kn</div></div>
        <div><div class="k">Readers online</div><div class="v">2 / 2</div></div>
        <div><div class="k">Last AIS</div><div class="v"><span class="fresh live"><b>LIVE</b>15:41</span></div></div>
      </div>
      <div>
        <div class="stackbar"><i style="width:75%;background:var(--s-success)"></i><i style="width:12.5%;background:var(--s-warn)"></i><i style="width:12.5%;background:var(--s-offline)"></i></div>
        <div class="legend mt8"><span><i style="background:var(--s-success)"></i>6 active</span><span><i style="background:var(--s-warn)"></i>1 idle</span><span><i style="background:var(--s-offline)"></i>1 offline</span></div>
      </div>
      <div class="row s8"><a class="btn sm secondary" href="vessel-detail.html">Open</a><a class="btn sm ghost" href="live-map.html"><i data-icon="map"></i>Live map</a></div>
    </div>

    <div class="c4 card">
      <div class="row s12 top">
        <span class="entity-tile" style="padding:0;border:0;background:none"><span class="sym dark"><i data-icon="ship"></i></span></span>
        <div class="grow">
          <div class="row s8"><span class="card-title">MV PAGEO 02</span><span class="chip info sm"><span class="dot info"></span>On site</span></div>
          <div class="t-caption"><a href="project-detail.html">Project Alpha</a> · Offshore Construction Survey</div>
        </div>
        <button class="icon-btn" aria-label="More"><i data-icon="morev"></i></button>
      </div>
      <div class="kv-grid" style="grid-template-columns:repeat(2,minmax(0,1fr))">
        <div><div class="k">Personnel</div><div class="v big">12</div></div>
        <div><div class="k">Assets</div><div class="v big">18</div></div>
        <div><div class="k">Position</div><div class="v">-5.9840, 106.8215</div></div>
        <div><div class="k">Heading / speed</div><div class="v">087° · 0.4 kn</div></div>
        <div><div class="k">Readers online</div><div class="v">2 / 2</div></div>
        <div><div class="k">Last AIS</div><div class="v"><span class="fresh live"><b>LIVE</b>15:41</span></div></div>
      </div>
      <div>
        <div class="stackbar"><i style="width:83.3%;background:var(--s-success)"></i><i style="width:8.3%;background:var(--s-info)"></i><i style="width:8.3%;background:var(--s-warn)"></i></div>
        <div class="legend mt8"><span><i style="background:var(--s-success)"></i>10 active</span><span><i style="background:var(--s-info)"></i>1 in transit</span><span><i style="background:var(--s-warn)"></i>1 idle</span></div>
      </div>
      <div class="row s8"><a class="btn sm secondary" href="vessel-detail.html">Open</a><a class="btn sm ghost" href="live-map.html"><i data-icon="map"></i>Live map</a></div>
    </div>

    <div class="c4 card">
      <div class="row s12 top">
        <span class="entity-tile" style="padding:0;border:0;background:none"><span class="sym dark"><i data-icon="ship"></i></span></span>
        <div class="grow">
          <div class="row s8"><span class="card-title">MV PAGEO 03</span><span class="chip neutral sm"><span class="dot unknown"></span>Alongside</span></div>
          <div class="t-caption">Port Tanjung Priok · <a href="project-detail.html">Project Delta</a> planned 08 Sep</div>
        </div>
        <button class="icon-btn" aria-label="More"><i data-icon="morev"></i></button>
      </div>
      <div class="kv-grid" style="grid-template-columns:repeat(2,minmax(0,1fr))">
        <div><div class="k">Personnel</div><div class="v big">0</div></div>
        <div><div class="k">Assets loaded</div><div class="v big">6</div></div>
        <div><div class="k">Position</div><div class="v">-6.1045, 106.8834</div></div>
        <div><div class="k">Heading / speed</div><div class="v">— · 0.0 kn</div></div>
        <div><div class="k">Readers online</div><div class="v">2 / 2</div></div>
        <div><div class="k">Last AIS</div><div class="v"><span class="fresh recent"><b>RECENT</b>15:38</span></div></div>
      </div>
      <div>
        <div class="stackbar"></div>
        <div class="legend mt8"><span><i style="background:var(--pageo-mist)"></i>No personnel on board · crew joins 07 Sep</span></div>
      </div>
      <div class="row s8"><a class="btn sm secondary" href="vessel-detail.html">Open</a><a class="btn sm ghost" href="live-map.html"><i data-icon="map"></i>Live map</a></div>
    </div>
  </div>

  <!-- Map + boarding log -->
  <div class="grid">
    <div class="c8 card p0">
      <div class="card-head">
        <div class="row s8"><span class="card-title">Fleet map</span><span class="chip ok sm"><span class="dot ok pulse"></span>AIS · 15:41</span></div>
        <div class="row s8"><div class="seg sm"><button class="active">Last 6 h</button><button>24 h</button><button>Voyage</button></div><a class="link" href="live-map.html">Open live map <i data-icon="arrowright" class="ic-14"></i></a></div>
      </div>
      <div class="map flush" data-map="coast" style="height:460px">
        <div data-fence="46,28 64,22 72,44 58,56 44,48" data-label="Offshore Work Area — Alpha"></div>
        <div data-fence="12,66 24,64 26,80 14,82" data-label="Port Tanjung Priok — Jetty 3"></div>
        <div data-track="38,12 42,18 46,24 50,31 53,36 56,40"></div>
        <div data-track="80,8 76,14 72,20 68,26 64,32" data-color="#4FB7D9"></div>

        <div class="mk vessel" style="left:56%;top:40%" data-popup="p02"><span class="sym"><i data-icon="ship"></i></span><span class="lbl">MV PAGEO 02<small>087° · 0.4 kn</small></span></div>
        <div class="mk vessel" style="left:64%;top:32%" data-popup="p01"><span class="sym"><i data-icon="ship"></i></span><span class="lbl">MV PAGEO 01<small>214° · 3.2 kn</small></span></div>
        <div class="mk vessel" style="left:27%;top:70%" data-popup="p03"><span class="sym"><i data-icon="ship"></i></span><span class="lbl">MV PAGEO 03<small>Alongside · Jetty 3</small></span></div>
        <div class="mk cluster" style="left:52%;top:47%"><span class="sym">24</span></div>
        <div class="mk site" style="left:16%;top:70%"><span class="sym"><i data-icon="anchor"></i></span></div>

        <div class="popup" data-for="p02" style="left:56%;top:40%">
          <div class="p-head"><span class="entity-tile" style="padding:0;border:0;background:none"><span class="sym dark" style="width:28px;height:28px"><i data-icon="ship" class="ic-16"></i></span></span><div><div class="p-title">MV PAGEO 02</div><div class="p-sub">Project Alpha · Offshore Work Area</div></div></div>
          <dl class="kv"><dt>Personnel</dt><dd>12</dd><dt>Assets</dt><dd>18</dd><dt>Position</dt><dd>-5.9840, 106.8215</dd><dt>Heading / speed</dt><dd>087° · 0.4 kn</dd><dt>Last AIS</dt><dd class="ok">15:41 · Live</dd></dl>
          <div class="p-actions"><a class="btn xs secondary" href="vessel-detail.html">Open vessel</a><button class="btn xs ghost">Personnel</button></div>
        </div>
        <div class="popup hide" data-for="p01" style="left:64%;top:32%">
          <div class="p-head"><div><div class="p-title">MV PAGEO 01</div><div class="p-sub">Project Bravo · transit to KP 42</div></div></div>
          <dl class="kv"><dt>Personnel</dt><dd>8</dd><dt>Assets</dt><dd>11</dd><dt>Last AIS</dt><dd class="ok">15:41 · Live</dd></dl>
        </div>
        <div class="popup hide" data-for="p03" style="left:27%;top:70%">
          <div class="p-head"><div><div class="p-title">MV PAGEO 03</div><div class="p-sub">Alongside · Port Tanjung Priok</div></div></div>
          <dl class="kv"><dt>Personnel</dt><dd>0</dd><dt>Assets loaded</dt><dd>6</dd><dt>Last AIS</dt><dd>15:38</dd></dl>
        </div>

        <div class="map-ui bl">
          <div class="map-legend">
            <span class="lg"><span class="sym vessel"></span>Vessel</span>
            <span class="lg"><span class="sym person"></span>Personnel cluster</span>
            <span class="lg"><span class="sym fence"></span>Work area</span>
            <span class="lg"><span class="sym site"></span>Port</span>
            <span class="lg"><i style="display:inline-block;width:14px;height:2px;background:#08698F"></i>Track 6 h</span>
          </div>
        </div>
        <div class="map-ui br"><div class="map-ctl"><button aria-label="Zoom in"><i data-icon="plus"></i></button><button aria-label="Zoom out"><i data-icon="minus"></i></button><button aria-label="Locate"><i data-icon="locate"></i></button></div></div>
        <div class="map-ui tl"><span class="map-coords">-5.98400, 106.82150 · AIS every 60 s</span></div>
      </div>
    </div>

    <div class="c4 card p0">
      <div class="card-head"><span class="card-title">Boarding log</span><span class="t-caption">All vessels · today</span></div>
      <div class="timeline" style="padding:16px 20px">
        <div class="tl"><span class="time">15:42</span><span class="node"><span class="dot info"></span></span><div class="body"><b>Andi Pratama</b> boarded MV PAGEO 02<div class="sub">Geofence enter · reader RD-V2-01</div></div></div>
        <div class="tl"><span class="time">15:31</span><span class="node"><span class="dot info"></span></span><div class="body"><b>Fahmi Syaban</b> boarded MV PAGEO 02<div class="sub">Crew boat CB-3 · from Jetty 3</div></div></div>
        <div class="tl"><span class="time">14:55</span><span class="node"><span class="dot unknown"></span></span><div class="body"><b>Sari Wulandari</b> disembarked MV PAGEO 02<div class="sub">Crew change · to Jetty 3</div></div></div>
        <div class="tl"><span class="time">14:10</span><span class="node"><span class="dot info"></span></span><div class="body"><b>Agus Setiawan</b> boarded MV PAGEO 01<div class="sub">Geofence enter · helideck</div></div></div>
        <div class="tl"><span class="time">12:36</span><span class="node"><span class="dot unknown"></span></span><div class="body"><b>Hendra Gunawan</b> disembarked MV PAGEO 01<div class="sub">Medical · to Base Jakarta</div></div></div>
        <div class="tl"><span class="time">09:20</span><span class="node"><span class="dot info"></span></span><div class="body"><b>Capt. Slamet Riyadi</b> boarded MV PAGEO 02<div class="sub">Vessel master · shift start</div></div></div>
        <div class="tl"><span class="time">08:05</span><span class="node"><span class="dot info"></span></span><div class="body"><b>Dedi Kurniawan</b> boarded MV PAGEO 02<div class="sub">Crew boat CB-1 · from Jetty 3</div></div></div>
        <div class="tl"><span class="time">06:40</span><span class="node"><span class="dot unknown"></span></span><div class="body"><b>Yusuf Maulana</b> disembarked MV PAGEO 03<div class="sub">Loading complete · alongside</div></div></div>
      </div>
      <div class="card-foot row between"><span class="t-caption">8 of 23 events</span><a class="link" href="personnel.html">Personnel <i data-icon="arrowright" class="ic-14"></i></a></div>
    </div>
  </div>

  <!-- Personnel on board -->
  <div class="grid">
    <div class="c12 card p0">
      <div class="card-head">
        <div class="row s8"><span class="card-title">Personnel on board — MV PAGEO 02</span><span class="chip info sm">12 on board</span><span class="chip ok sm"><span class="dot ok"></span>10 live</span></div>
        <div class="row s8"><div class="input sm" style="width:220px"><i data-icon="search"></i><input placeholder="Search personnel"></div><button class="btn xs ghost"><i data-icon="download"></i>Export</button></div>
      </div>
      <div class="table-wrap">
        <table class="table">
          <thead><tr><th>Name</th><th>Role</th><th>Boarded at</th><th>Cabin / deck</th><th>Status</th><th>Last update</th><th class="num">Battery</th></tr></thead>
          <tbody>
            <tr><td><span class="cell-entity"><span class="avatar sm">SR</span><div><b>Capt. Slamet Riyadi</b><div class="sub">Vessel master</div></div></span></td><td>Master</td><td>09:20</td><td>Bridge · Deck 4</td><td><span class="chip ok sm"><span class="dot ok"></span>Active</span></td><td><span class="fresh live"><b>LIVE</b>18 sec ago</span></td><td class="num">88%</td></tr>
            <tr><td><span class="cell-entity"><span class="avatar sm">FS</span><div><b><a href="employee-detail.html">Fahmi Syaban</a></b><div class="sub">EMP-0412</div></div></span></td><td>Survey Engineer</td><td>15:31</td><td>Survey room · Deck 2</td><td><span class="chip ok sm"><span class="dot ok"></span>Active</span></td><td><span class="fresh live"><b>LIVE</b>12 sec ago</span></td><td class="num">76%</td></tr>
            <tr><td><span class="cell-entity"><span class="avatar sm">AP</span><div><b><a href="employee-detail.html">Andi Pratama</a></b><div class="sub">EMP-0287</div></div></span></td><td>Party Chief</td><td>15:42</td><td>Survey room · Deck 2</td><td><span class="chip ok sm"><span class="dot ok"></span>Active</span></td><td><span class="fresh live"><b>LIVE</b>8 sec ago</span></td><td class="num">91%</td></tr>
            <tr><td><span class="cell-entity"><span class="avatar sm">DK</span><div><b>Dedi Kurniawan</b><div class="sub">EMP-0533</div></div></span></td><td>ROV Supervisor</td><td>08:05</td><td>ROV hangar · Main deck</td><td><span class="chip ok sm"><span class="dot ok"></span>Active</span></td><td><span class="fresh live"><b>LIVE</b>30 sec ago</span></td><td class="num">64%</td></tr>
            <tr><td><span class="cell-entity"><span class="avatar sm">RK</span><div><b>Rina Kartika</b><div class="sub">EMP-0601</div></div></span></td><td>Data Processor</td><td>08:05</td><td>Cabin 6 · Deck 3</td><td><span class="chip ok sm"><span class="dot ok"></span>Active</span></td><td><span class="fresh live"><b>LIVE</b>44 sec ago</span></td><td class="num">52%</td></tr>
            <tr><td><span class="cell-entity"><span class="avatar sm">BP</span><div><b>Bagus Prasetyo</b><div class="sub">EMP-0378</div></div></span></td><td>Surveyor</td><td>08:05</td><td>Aft deck</td><td><span class="chip ok sm"><span class="dot ok"></span>Active</span></td><td><span class="fresh live"><b>LIVE</b>15 sec ago</span></td><td class="num">70%</td></tr>
            <tr><td><span class="cell-entity"><span class="avatar sm">TW</span><div><b>Teguh Wibowo</b><div class="sub">EMP-0455</div></div></span></td><td>Deck Technician</td><td>08:05</td><td>Aft deck</td><td><span class="chip ok sm"><span class="dot ok"></span>Active</span></td><td><span class="fresh live"><b>LIVE</b>22 sec ago</span></td><td class="num">83%</td></tr>
            <tr><td><span class="cell-entity"><span class="avatar sm">IN</span><div><b>Ilham Nugraha</b><div class="sub">EMP-0619</div></div></span></td><td>ROV Pilot</td><td>08:05</td><td>ROV hangar · Main deck</td><td><span class="chip ok sm"><span class="dot ok"></span>Active</span></td><td><span class="fresh live"><b>LIVE</b>36 sec ago</span></td><td class="num">58%</td></tr>
            <tr><td><span class="cell-entity"><span class="avatar sm">MH</span><div><b>Maya Handayani</b><div class="sub">EMP-0644</div></div></span></td><td>QHSE Officer</td><td>09:20</td><td>Cabin 2 · Deck 3</td><td><span class="chip ok sm"><span class="dot ok"></span>Active</span></td><td><span class="fresh live"><b>LIVE</b>50 sec ago</span></td><td class="num">67%</td></tr>
            <tr><td><span class="cell-entity"><span class="avatar sm">WS</span><div><b>Wahyu Saputra</b><div class="sub">EMP-0502</div></div></span></td><td>Geophysicist</td><td>08:05</td><td>Survey room · Deck 2</td><td><span class="chip ok sm"><span class="dot ok"></span>Active</span></td><td><span class="fresh live"><b>LIVE</b>27 sec ago</span></td><td class="num">73%</td></tr>
            <tr><td><span class="cell-entity"><span class="avatar sm">EF</span><div><b>Eko Firmansyah</b><div class="sub">EMP-0571</div></div></span></td><td>Mechanic</td><td>08:05</td><td>Engine room</td><td><span class="chip warn sm"><span class="dot warn"></span>Idle</span></td><td><span class="fresh stale"><b>STALE</b>19 min ago</span></td><td class="num">31%</td></tr>
            <tr><td><span class="cell-entity"><span class="avatar sm">PA</span><div><b>Putri Anggraini</b><div class="sub">EMP-0688</div></div></span></td><td>Medic</td><td>08:05</td><td>Sick bay · Deck 3</td><td><span class="chip transit sm"><span class="dot transit"></span>In Transit</span></td><td><span class="fresh recent"><b>RECENT</b>2 min ago</span></td><td class="num">45%</td></tr>
          </tbody>
        </table>
      </div>
      <div class="table-foot"><span>12 personnel · POB reconciled with vessel master 15:30</span><div class="pager"><button>‹</button><button class="active">1</button><button>›</button></div></div>
    </div>
  </div>

  <!-- Equipment on board -->
  <div class="grid">
    <div class="c12 card p0">
      <div class="card-head">
        <div class="row s8"><span class="card-title">Equipment on board — MV PAGEO 02</span><span class="chip info sm">18 assets</span></div>
        <a class="link" href="assets.html">Asset registry <i data-icon="arrowright" class="ic-14"></i></a>
      </div>
      <div class="table-wrap">
        <table class="table compact">
          <thead><tr><th>Asset</th><th>Category</th><th>RFID</th><th>Custodian</th><th>On board since</th><th>Last reader</th><th>Status</th></tr></thead>
          <tbody>
            <tr><td><span class="cell-entity"><i data-icon="diamond" class="ic-16"></i><b><a href="asset-detail.html">MBES-03</a></b></span></td><td>Multibeam echosounder</td><td class="mono">E280-11-8829184</td><td>Fahmi Syaban</td><td>28 Aug</td><td>RD-V2-01 · 15:39</td><td><span class="chip info sm"><span class="dot info"></span>Deployed</span></td></tr>
            <tr><td><span class="cell-entity"><i data-icon="diamond" class="ic-16"></i><b><a href="asset-detail.html">ROV-T27-04</a></b></span></td><td>ROV</td><td class="mono">E280-11-8829201</td><td>Dedi Kurniawan</td><td>28 Aug</td><td>RD-V2-02 · 15:12</td><td><span class="chip info sm"><span class="dot info"></span>Deployed</span></td></tr>
            <tr><td><span class="cell-entity"><i data-icon="diamond" class="ic-16"></i><b><a href="asset-detail.html">GPS-042</a></b></span></td><td>GNSS receiver</td><td class="mono">E280-11-8829310</td><td>Andi Pratama</td><td>28 Aug</td><td>RD-V2-01 · 15:42</td><td><span class="chip info sm"><span class="dot info"></span>Deployed</span></td></tr>
            <tr><td><span class="cell-entity"><i data-icon="diamond" class="ic-16"></i><b><a href="asset-detail.html">Gyro-01</a></b></span></td><td>Gyrocompass</td><td class="mono">E280-11-8829377</td><td>Bagus Prasetyo</td><td>28 Aug</td><td>RD-V2-01 · 14:58</td><td><span class="chip info sm"><span class="dot info"></span>Deployed</span></td></tr>
            <tr><td><span class="cell-entity"><i data-icon="diamond" class="ic-16"></i><b><a href="asset-detail.html">Laptop-SV029</a></b></span></td><td>IT</td><td class="mono">E280-11-8829402</td><td>Rina Kartika</td><td>28 Aug</td><td>RD-V2-01 · 15:40</td><td><span class="chip info sm"><span class="dot info"></span>Deployed</span></td></tr>
            <tr><td><span class="cell-entity"><i data-icon="diamond" class="ic-16"></i><b><a href="asset-detail.html">Radio-012</a></b></span></td><td>Comms</td><td class="mono">E280-11-8829418</td><td>Capt. Slamet Riyadi</td><td>28 Aug</td><td>RD-V2-01 · 15:41</td><td><span class="chip info sm"><span class="dot info"></span>Deployed</span></td></tr>
            <tr><td><span class="cell-entity"><i data-icon="diamond" class="ic-16"></i><b><a href="asset-detail.html">Cable Set-07</a></b></span></td><td>Survey</td><td class="mono">E280-11-8829455</td><td>Teguh Wibowo</td><td>28 Aug</td><td>RD-V2-02 · 13:05</td><td><span class="chip info sm"><span class="dot info"></span>Deployed</span></td></tr>
            <tr><td><span class="cell-entity"><i data-icon="diamond" class="ic-16"></i><b><a href="asset-detail.html">Battery Pack-04</a></b></span></td><td>Power</td><td class="mono">E280-11-8829471</td><td>Eko Firmansyah</td><td>02 Sep</td><td>RD-V2-02 · 11:20</td><td><span class="chip warn sm"><span class="dot warn"></span>Maintenance</span></td></tr>
          </tbody>
        </table>
      </div>
      <div class="table-foot"><span>Showing 8 of 18 · custody reconciled at last vessel scan 15:12</span><div class="pager"><button>‹</button><button class="active">1</button><button>2</button><button>3</button><button>›</button></div></div>
    </div>
  </div>`;
  }
});
