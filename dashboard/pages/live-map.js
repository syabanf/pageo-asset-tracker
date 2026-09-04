/* Converted from web/live-map.html — edit freely; delete "// converted" to mark as handwritten */
// converted
PN.page("live-map", {
  title: "Live Map",
  icon: "map",
  nav: "live-map",
  crumb: "Global / Operations / Live Map",
  pageCls: "flush",
  render() {
    return `<div style="display:grid;grid-template-columns:1fr 320px;height:calc(100vh - 64px);min-height:0">

    <!-- Map -->
    <div class="map flush" data-map="coast" style="height:100%;min-height:0">
      <div data-fence="46,28 64,22 72,44 58,56 44,48" data-label="Offshore Work Area — Alpha"></div>
      <div data-fence="80,10 96,8 97,24 82,26" data-kind="restricted" data-label="Restricted Zone"></div>
      <div data-fence="12,66 24,64 26,80 14,82" data-label="Port Tanjung Priok"></div>

      <!-- Vessels -->
      <div class="mk vessel" style="left:56%;top:40%" data-popup="v02"><span class="sym"><i data-icon="ship"></i></span><span class="lbl">MV PAGEO 02<small>12 personnel · 18 assets</small></span></div>
      <div class="mk vessel" style="left:66%;top:30%"><span class="sym"><i data-icon="ship"></i></span><span class="lbl">MV PAGEO 01<small>8 personnel · 11 assets</small></span></div>

      <!-- People -->
      <div class="mk cluster" style="left:52%;top:48%" data-popup="cluster42"><span class="sym">42</span></div>
      <div class="mk person" style="left:60%;top:53%" data-popup="fahmi"><span class="accuracy" style="width:64px;height:64px;left:50%;top:50%;transform:translate(-50%,-50%)"></span><span class="sym"><i data-icon="user"></i></span><span class="lbl">Fahmi Syaban<small>± 7 m</small></span></div>
      <div class="mk person" style="left:63%;top:46%"><span class="sym"><i data-icon="user"></i></span><span class="lbl">Andi Pratama</span></div>
      <div class="mk person" style="left:49%;top:36%"><span class="sym"><i data-icon="user"></i></span></div>
      <div class="mk person crit" style="left:88%;top:18%"><span class="sym"><i data-icon="user"></i></span><span class="lbl">Rizky Hakim<small>SOS · Restricted Zone</small></span></div>
      <div class="mk person off" style="left:20%;top:72%"><span class="sym"><i data-icon="user"></i></span><span class="lbl">Budi Santoso<small>Offline · 1h 22m</small></span></div>

      <!-- Assets -->
      <div class="mk asset" style="left:58%;top:44%" data-popup="mbes03"><span class="sym"><i data-icon="diamond"></i></span><span class="lbl">MBES-03</span></div>
      <div class="mk asset" style="left:18%;top:70%"><span class="sym"><i data-icon="diamond"></i></span></div>
      <div class="mk cluster asset" style="left:16%;top:76%"><span class="sym">31</span></div>
      <div class="mk asset warn" style="left:27%;top:60%"><span class="sym"><i data-icon="diamond"></i></span><span class="lbl">SONAR-012<small>Not seen · 2 days</small></span></div>

      <!-- Sites, readers, muster -->
      <div class="mk site" style="left:10%;top:56%"><span class="sym"><i data-icon="warehouse"></i></span><span class="lbl">PAGEO Base</span></div>
      <div class="mk reader" style="left:15%;top:66%"></div>
      <div class="mk reader" style="left:22%;top:78%"></div>
      <div class="mk muster" style="left:8%;top:60%"><span class="sym"><i data-icon="plus"></i></span><span class="lbl">Muster A</span></div>

      <!-- Popups -->
      <div class="popup" data-for="cluster42" style="left:52%;top:48%;min-width:184px">
        <div class="p-eyebrow">42 personnel</div>
        <dl class="kv" style="grid-template-columns:max-content 1fr">
          <dt><span class="row s8"><span class="dot ok"></span>Active</span></dt><dd class="num">31</dd>
          <dt><span class="row s8"><span class="dot info"></span>On vessel</span></dt><dd class="num">8</dd>
          <dt><span class="row s8"><span class="dot off"></span>Offline</span></dt><dd class="num">3</dd>
        </dl>
        <div class="p-actions"><button class="btn xs secondary">Zoom in</button><a class="btn xs ghost" href="personnel.html">List</a></div>
      </div>
      <div class="popup hide" data-for="fahmi" style="left:60%;top:53%">
        <div class="p-head"><span class="avatar sm">FS</span><div><div class="p-title">Fahmi Syaban</div><div class="p-sub">Survey Engineer · Project Alpha</div></div></div>
        <dl class="kv"><dt>Status</dt><dd><span class="row s8"><span class="dot ok"></span>Active</span></dd><dt>Last update</dt><dd>15:42</dd><dt>Accuracy</dt><dd>± 7 m</dd><dt>Battery</dt><dd>76%</dd></dl>
        <div class="p-actions"><a class="btn xs secondary" href="employee-detail.html">Open profile</a><button class="btn xs ghost">History</button></div>
      </div>
      <div class="popup hide" data-for="mbes03" style="left:58%;top:44%">
        <div class="p-head"><span class="entity-tile" style="padding:0;border:0"><span class="sym dark"><i data-icon="diamond"></i></span></span><div><div class="p-title">MBES-03</div><div class="p-sub">Multibeam Echo Sounder</div></div></div>
        <dl class="kv"><dt>Project</dt><dd>Alpha</dd><dt>Location</dt><dd>MV PAGEO 02</dd><dt>Last seen</dt><dd>3 min ago</dd><dt>Status</dt><dd><span class="chip info sm">Deployed</span></dd></dl>
        <div class="p-actions"><a class="btn xs secondary" href="asset-detail.html">Open asset</a></div>
      </div>
      <div class="popup hide" data-for="v02" style="left:56%;top:40%">
        <div class="p-head"><span class="entity-tile" style="padding:0;border:0"><span class="sym"><i data-icon="ship"></i></span></span><div><div class="p-title">MV PAGEO 02</div><div class="p-sub">Project Alpha · Offshore Work Area</div></div></div>
        <dl class="kv"><dt>Personnel</dt><dd>12</dd><dt>Assets</dt><dd>18</dd><dt>Heading</dt><dd>214° · 3.2 kn</dd></dl>
        <div class="p-actions"><a class="btn xs secondary" href="vessels.html">Open vessel</a></div>
      </div>

      <!-- Map UI -->
      <div class="map-ui tl">
        <div class="map-panel" style="min-width:260px">
          <div class="input sm"><i data-icon="search"></i><input type="search" placeholder="Find person, asset or vessel" aria-label="Find on map"></div>
          <div class="row between"><span class="eyebrow">Time window</span><span class="t-caption num">Last 1 h</span></div>
          <input type="range" min="0" max="24" value="1" aria-label="Time window in hours" style="width:100%;accent-color:var(--accent);margin:0">
          <div class="row between t-caption" style="font-size:10px"><span>Now</span><span>-6 h</span><span>-12 h</span><span>-24 h</span></div>
        </div>
      </div>
      <div class="map-ui bl">
        <div class="map-legend">
          <span class="lg"><span class="sym person"></span>Person</span>
          <span class="lg"><span class="sym asset"></span>Asset</span>
          <span class="lg"><span class="sym vessel"></span>Vessel</span>
          <span class="lg"><span class="sym site"></span>Site</span>
          <span class="lg"><span class="sym fence"></span>Geofence</span>
          <span class="lg"><span class="sym reader"></span>RFID reader</span>
          <span class="lg"><span class="sym muster"></span>Muster point</span>
        </div>
      </div>
      <div class="map-ui bc"><span class="map-coords">-6.18746, 106.82721 · Zoom 12 · WGS 84</span></div>
      <div class="map-ui br"><div class="map-ctl"><button aria-label="Zoom in"><i data-icon="plus"></i></button><button aria-label="Zoom out"><i data-icon="minus"></i></button><button aria-label="Locate"><i data-icon="locate"></i></button><button aria-label="Layers"><i data-icon="layers"></i></button></div></div>
    </div>

    <!-- Side panel -->
    <aside style="background:var(--surface);border-left:1px solid var(--border);overflow:auto;min-height:0;display:flex;flex-direction:column">

      <section style="padding:14px 16px;border-bottom:1px solid var(--border);display:flex;flex-direction:column;gap:10px">
        <div class="row between"><span class="eyebrow">Layer</span><span class="chip ok sm"><span class="dot ok pulse"></span>Live · 12 sec ago</span></div>
        <div class="seg sm" style="display:grid;grid-template-columns:repeat(4,1fr)">
          <button data-layer="all" class="active" style="padding:0;justify-content:center">Combined</button>
          <button data-layer="people" style="padding:0;justify-content:center">People</button>
          <button data-layer="assets" style="padding:0;justify-content:center">Assets</button>
          <button data-layer="vessels" style="padding:0;justify-content:center">Vessels</button>
        </div>
        <div class="row between t-caption"><span>Showing 121 people · 173 assets · 3 vessels</span></div>
      </section>

      <section style="padding:14px 16px;border-bottom:1px solid var(--border);display:flex;flex-direction:column;gap:8px">
        <div class="row between"><span class="eyebrow">Filters</span><a class="link" href="live-map.html" style="font-size:12px">Reset</a></div>
        <div style="display:grid;grid-template-columns:96px 1fr;gap:6px 8px;align-items:center;font-size:12px;color:var(--text-2)">
          <span>Project</span><div class="input sm select"><span>All projects</span><i data-icon="chevrondown" class="chev ic-14"></i></div>
          <span>Site</span><div class="input sm select"><span>All sites</span><i data-icon="chevrondown" class="chev ic-14"></i></div>
          <span>Vessel</span><div class="input sm select"><span>All vessels</span><i data-icon="chevrondown" class="chev ic-14"></i></div>
          <span>Department</span><div class="input sm select"><span>All departments</span><i data-icon="chevrondown" class="chev ic-14"></i></div>
          <span>Asset category</span><div class="input sm select"><span>All categories</span><i data-icon="chevrondown" class="chev ic-14"></i></div>
          <span>Asset status</span><div class="input sm select"><span>Any status</span><i data-icon="chevrondown" class="chev ic-14"></i></div>
          <span>Time window</span><div class="input sm select"><span>Last 1 h</span><i data-icon="chevrondown" class="chev ic-14"></i></div>
          <span>Alert status</span><div class="input sm select"><span>All · 1 open</span><i data-icon="chevrondown" class="chev ic-14"></i></div>
        </div>
      </section>

      <section style="padding:14px 16px;border-bottom:1px solid var(--border);display:flex;flex-direction:column;gap:10px">
        <div class="row between"><span class="eyebrow">Selected</span><span class="fresh live"><b>LIVE</b>12 sec ago</span></div>
        <div class="popup static">
          <div class="p-head"><span class="avatar">FS</span><div><div class="p-title">Fahmi Syaban</div><div class="p-sub">Survey Engineer</div></div></div>
          <dl class="kv">
            <dt>Project</dt><dd>Project Alpha</dd>
            <dt>Status</dt><dd><span class="row s8"><span class="dot ok"></span>Active</span></dd>
            <dt>Last update</dt><dd>15:42</dd>
            <dt>Accuracy</dt><dd>± 7 m</dd>
            <dt>Battery</dt><dd>76%</dd>
          </dl>
          <div class="p-actions"><a class="btn xs secondary" href="employee-detail.html">Open profile</a><button class="btn xs ghost">Track history</button></div>
        </div>

        <div class="eyebrow" style="margin-top:4px">Nearby</div>
        <div class="popup static" style="box-shadow:none">
          <div class="p-head"><span class="entity-tile" style="padding:0;border:0"><span class="sym dark"><i data-icon="diamond"></i></span></span><div><div class="p-title">MBES-03</div><div class="p-sub">Multibeam Echo Sounder</div></div></div>
          <dl class="kv">
            <dt>Project</dt><dd>Alpha</dd>
            <dt>Location</dt><dd>MV PAGEO 02</dd>
            <dt>Last seen</dt><dd>3 min ago</dd>
            <dt>Status</dt><dd><span class="chip info sm">Deployed</span></dd>
          </dl>
          <div class="p-actions"><a class="btn xs ghost" href="asset-detail.html">Open asset</a></div>
        </div>
        <div class="popup static" style="box-shadow:none">
          <div class="p-head"><span class="entity-tile" style="padding:0;border:0"><span class="sym"><i data-icon="ship"></i></span></span><div><div class="p-title">MV PAGEO 02</div><div class="p-sub">12 personnel · 18 assets</div></div></div>
          <dl class="kv">
            <dt>Project</dt><dd>Alpha</dd>
            <dt>Position</dt><dd>-6.1042, 106.9311</dd>
            <dt>Heading</dt><dd>214° · 3.2 kn</dd>
          </dl>
          <div class="p-actions"><a class="btn xs ghost" href="vessels.html">Open vessel</a></div>
        </div>
      </section>

      <section style="padding:14px 16px;display:flex;flex-direction:column;gap:10px">
        <div class="row between"><span class="eyebrow">Location freshness</span><span class="t-caption">Thresholds</span></div>
        <div class="stack s8" style="font-size:12px">
          <div class="row between"><span class="fresh live"><b>LIVE</b>12 sec ago</span><span class="t-caption num">&lt; 1 min</span></div>
          <div class="row between"><span class="fresh recent"><b>RECENT</b>3 min ago</span><span class="t-caption num">1 – 5 min</span></div>
          <div class="row between"><span class="fresh stale"><b>STALE</b>27 min ago</span><span class="t-caption num">5 – 30 min</span></div>
          <div class="row between"><span class="fresh offline"><b>OFFLINE</b>2h 14m</span><span class="t-caption num">&gt; 30 min</span></div>
        </div>
        <div class="note">Accuracy shown as a circle around the position. Thresholds are configurable in <a href="admin.html">Administration</a>.</div>
      </section>

    </aside>
  </div>`;
  }
});
