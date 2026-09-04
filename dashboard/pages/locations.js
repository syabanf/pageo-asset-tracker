/* Converted from web/locations.html — edit freely; delete "// converted" to mark as handwritten */
// converted
PN.page("locations", {
  title: "Locations",
  icon: "pin",
  nav: "locations",
  crumb: "Global / Operations / Locations",
  render() {
    return `<div class="page-head">
    <div class="titles">
      <div class="eyebrow">Operations</div>
      <h1>Locations &amp; Geofences</h1>
      <div class="sub">Zones, rules and site presence · 8 zones · 8 rules · 12 readers</div>
    </div>
    <div class="actions">
      <button class="btn ghost sm"><i data-icon="download"></i>Export</button>
      <button class="btn primary sm"><i data-icon="plus"></i>New geofence</button>
    </div>
  </div>

  <!-- Zone list + map -->
  <div class="grid">
    <div class="c4 card p0">
      <div class="card-head"><span class="card-title">Zones</span><span class="t-caption">8 zones · 1 attention</span></div>
      <div style="padding:4px 20px">
        <a class="entity" href="#" style="color:inherit">
          <span class="entity-tile" style="padding:0;border:0;background:none"><span class="sym"><i data-icon="warehouse"></i></span></span>
          <div class="e-body"><div class="e-title">PAGEO Base</div><div class="e-sub">Base · Jakarta · polygon</div></div>
          <div class="e-right"><span class="chip ok sm"><span class="dot ok"></span>Active</span><span><span class="num">38</span> people · <span class="num">481</span> assets</span></div>
        </a>
        <a class="entity" href="#" style="color:inherit">
          <span class="entity-tile" style="padding:0;border:0;background:none"><span class="sym"><i data-icon="building"></i></span></span>
          <div class="e-body"><div class="e-title">Warehouse</div><div class="e-sub">Warehouse · Base Jakarta · 4 readers</div></div>
          <div class="e-right"><span class="chip ok sm"><span class="dot ok"></span>Active</span><span><span class="num">6</span> people · <span class="num">412</span> assets</span></div>
        </a>
        <a class="entity" href="#" style="color:inherit">
          <span class="entity-tile" style="padding:0;border:0;background:none"><span class="sym"><i data-icon="anchor"></i></span></span>
          <div class="e-body"><div class="e-title">Port Tanjung Priok</div><div class="e-sub">Port · Jetty 3 · Project Charlie</div></div>
          <div class="e-right"><span class="chip warn sm"><span class="dot warn"></span>Mobilizing</span><span><span class="num">9</span> people · <span class="num">22</span> assets</span></div>
        </a>
        <a class="entity" href="#" style="color:inherit">
          <span class="entity-tile" style="padding:0;border:0;background:none"><span class="sym"><i data-icon="ship"></i></span></span>
          <div class="e-body"><div class="e-title">Vessel MV PAGEO 02</div><div class="e-sub">Vessel · moving zone · Project Alpha</div></div>
          <div class="e-right"><span class="chip info sm"><span class="dot info"></span>Offshore</span><span><span class="num">12</span> people · <span class="num">18</span> assets</span></div>
        </a>
        <a class="entity" href="#" style="color:inherit">
          <span class="entity-tile" style="padding:0;border:0;background:none"><span class="sym"><i data-icon="pin"></i></span></span>
          <div class="e-body"><div class="e-title">Project Site Alpha</div><div class="e-sub">Project site · Offshore Construction Survey</div></div>
          <div class="e-right"><span class="chip info sm"><span class="dot info"></span>On Site</span><span><span class="num">24</span> people · <span class="num">47</span> assets</span></div>
        </a>
        <a class="entity" href="#" style="color:inherit">
          <span class="entity-tile" style="padding:0;border:0;background:none"><span class="sym"><i data-icon="waves"></i></span></span>
          <div class="e-body"><div class="e-title">Offshore Work Area</div><div class="e-sub">Work area · radius 1.5 km · Alpha</div></div>
          <div class="e-right"><span class="chip info sm"><span class="dot info"></span>Active</span><span><span class="num">26</span> people · <span class="num">47</span> assets</span></div>
        </a>
        <a class="entity" href="#" style="color:inherit">
          <span class="entity-tile" style="padding:0;border:0;background:none"><span class="sym crit"><i data-icon="warning"></i></span></span>
          <div class="e-body"><div class="e-title">Restricted Area</div><div class="e-sub">Restricted · platform exclusion zone</div></div>
          <div class="e-right"><span class="chip crit sm"><span class="dot crit"></span>1 unauthorized</span><span><span class="num">1</span> person · <span class="num">0</span> assets</span></div>
        </a>
        <a class="entity" href="#" style="color:inherit">
          <span class="entity-tile" style="padding:0;border:0;background:none"><span class="sym ok"><i data-icon="flag"></i></span></span>
          <div class="e-body"><div class="e-title">Muster Point A/B</div><div class="e-sub">Muster · Base Jakarta · 2 points</div></div>
          <div class="e-right"><span class="chip neutral sm">Standby</span><span><span class="num">0</span> people · <span class="num">0</span> assets</span></div>
        </a>
      </div>
      <div class="card-foot row between"><span class="t-caption">Sorted by type · updated 15:42</span><a class="link" href="live-map.html">Live map <i data-icon="arrowright" class="ic-14"></i></a></div>
    </div>

    <div class="c8 card p0">
      <div class="card-head">
        <div class="row s8"><span class="card-title">Geofence map — Base Jakarta &amp; Port</span><span class="chip ok sm"><span class="dot ok pulse"></span>Live · 12 sec ago</span></div>
        <div class="seg sm"><button class="active">Zones</button><button>Readers</button><button>Heatmap</button></div>
      </div>
      <div class="map flush" data-map="harbor" style="height:520px">
        <div data-fence="5,70 24,68 26,88 6,90" data-label="PAGEO Base"></div>
        <div data-fence="30,74 44,72 45,86 31,88" data-label="Warehouse"></div>
        <div data-fence="54,64 72,62 74,82 56,84" data-label="Port Tanjung Priok — Jetty 3"></div>
        <div data-fence="78,12 96,10 97,30 80,32" data-kind="restricted" data-label="Restricted Area"></div>
        <div data-fence="12,92 22,92 22,97 12,97" data-kind="muster" data-label="Muster Point A"></div>

        <!-- Base -->
        <div class="mk site" style="left:8%;top:72%"><span class="sym"><i data-icon="warehouse"></i></span><span class="lbl">PAGEO Base</span></div>
        <div class="mk cluster" style="left:14%;top:78%"><span class="sym">31</span></div>
        <div class="mk person" style="left:20%;top:74%"><span class="sym"><i data-icon="user"></i></span><span class="lbl">Andi Pratama</span></div>
        <div class="mk person off" style="left:10%;top:84%"><span class="sym"><i data-icon="user"></i></span><span class="lbl">Budi Santoso<small>Offline · 14:20</small></span></div>
        <div class="mk reader" style="left:24%;top:78%"></div>
        <div class="mk muster" style="left:17%;top:94%"><span class="sym"><i data-icon="plus"></i></span></div>

        <!-- Warehouse -->
        <div class="mk cluster asset" style="left:37%;top:80%"><span class="sym">412</span></div>
        <div class="mk asset" style="left:33%;top:76%"><span class="sym"><i data-icon="diamond"></i></span><span class="lbl">MBES-001</span></div>
        <div class="mk asset warn" style="left:41%;top:84%"><span class="sym"><i data-icon="diamond"></i></span><span class="lbl">SONAR-012<small>Not seen · 2 days</small></span></div>
        <div class="mk reader" style="left:30.5%;top:80%"></div>
        <div class="mk reader" style="left:44.5%;top:80%"></div>
        <div class="mk reader off" style="left:37%;top:87%"></div>

        <!-- Port -->
        <div class="mk site" style="left:58%;top:66%"><span class="sym"><i data-icon="anchor"></i></span><span class="lbl">Jetty 3</span></div>
        <div class="mk vessel" style="left:66%;top:58%"><span class="sym"><i data-icon="ship"></i></span><span class="lbl">MV PAGEO 03<small>Alongside</small></span></div>
        <div class="mk cluster" style="left:62%;top:74%"><span class="sym">9</span></div>
        <div class="mk asset" style="left:68%;top:72%"><span class="sym"><i data-icon="diamond"></i></span><span class="lbl">GPS-042</span></div>
        <div class="mk reader" style="left:56%;top:70%"></div>
        <div class="mk reader" style="left:72%;top:70%"></div>

        <!-- Restricted -->
        <div class="mk person crit" style="left:88%;top:22%"><span class="sym"><i data-icon="user"></i></span><span class="lbl">Rizky Hakim<small>SOS · unauthorized entry</small></span></div>

        <!-- Sea -->
        <div class="mk vessel" style="left:48%;top:30%"><span class="sym"><i data-icon="ship"></i></span><span class="lbl">MV PAGEO 02<small>12 personnel · 18 assets</small></span></div>

        <div class="map-ui tr">
          <div class="map-panel" style="width:280px">
            <div class="row between"><span class="eyebrow">Geofence editor</span><span class="chip neutral sm">Editing</span></div>
            <div class="field"><label>Name</label><div class="input sm"><input value="Warehouse"></div></div>
            <div class="field"><label>Type</label><div class="input select sm"><i data-icon="building"></i><span>Warehouse</span><i data-icon="chevrondown" class="chev"></i></div></div>
            <div class="field"><label>Radius / polygon</label>
              <div class="row s8"><div class="seg sm"><button>Radius</button><button class="active">Polygon</button></div><span class="t-caption">4 vertices · 0.9 ha</span></div>
            </div>
            <div class="field"><label>Assigned projects</label><div class="input sm" style="height:auto;min-height:32px;padding:4px 8px;flex-wrap:wrap;gap:4px"><span class="chip neutral sm">Alpha</span><span class="chip neutral sm">Charlie</span><span class="faint">+ add</span></div></div>
            <div class="field"><label>Rules</label>
              <div class="stack s8" style="font-size:12px">
                <span class="row s8"><span class="checkbox on"><i data-icon="check"></i></span>Asset exit without dispatch</span>
                <span class="row s8"><span class="checkbox on"><i data-icon="check"></i></span>Dwell &gt; 30 min at gate</span>
                <span class="row s8"><span class="checkbox"></span>Person enter / exit</span>
              </div>
            </div>
            <div class="row s8 mt4"><button class="btn sm primary">Save</button><button class="btn sm ghost">Cancel</button></div>
          </div>
        </div>
        <div class="map-ui bl">
          <div class="map-legend">
            <span class="lg"><span class="sym person"></span>Person</span>
            <span class="lg"><span class="sym asset"></span>Asset</span>
            <span class="lg"><span class="sym vessel"></span>Vessel</span>
            <span class="lg"><span class="sym fence"></span>Geofence</span>
            <span class="lg"><span class="sym reader"></span>Reader</span>
            <span class="lg"><span class="sym muster"></span>Muster</span>
          </div>
        </div>
        <div class="map-ui br"><div class="map-ctl"><button aria-label="Zoom in"><i data-icon="plus"></i></button><button aria-label="Zoom out"><i data-icon="minus"></i></button><button aria-label="Draw polygon"><i data-icon="pencil"></i></button><button aria-label="Locate"><i data-icon="locate"></i></button></div></div>
        <div class="map-ui tl"><span class="map-coords">-6.10452, 106.88341 · scale 1 : 5 000</span></div>
      </div>
    </div>
  </div>

  <!-- Rules + events -->
  <div class="grid">
    <div class="c7 card p0">
      <div class="card-head"><span class="card-title">Rules</span><div class="row s8"><span class="t-caption">7 enabled · 1 disabled</span><button class="btn xs ghost"><i data-icon="plus"></i>Add rule</button></div></div>
      <div class="table-wrap">
        <table class="table compact">
          <thead><tr><th>Rule</th><th>Zone</th><th>Trigger</th><th>Severity</th><th>Notify</th><th>Enabled</th></tr></thead>
          <tbody>
            <tr><td><b>Employee entered Project Site</b></td><td>Project Site Alpha</td><td>Enter</td><td><span class="sev p4">P4</span></td><td>Supervisor</td><td><span class="switch on"></span></td></tr>
            <tr><td><b>Employee left Project Site</b></td><td>Project Site Alpha</td><td>Exit</td><td><span class="sev p3">P3</span></td><td>Supervisor</td><td><span class="switch on"></span></td></tr>
            <tr><td><b>Unauthorized personnel entered Restricted Zone</b></td><td>Restricted Area</td><td>Unauthorized</td><td><span class="sev p2">P2</span></td><td>QHSE · Supervisor</td><td><span class="switch on"></span></td></tr>
            <tr><td><b>Employee remained outside assigned zone &gt; 30 min</b></td><td>Offshore Work Area</td><td>Dwell &gt; 30 min</td><td><span class="sev p3">P3</span></td><td>Supervisor</td><td><span class="switch on"></span></td></tr>
            <tr><td><b>Asset left Warehouse without dispatch</b></td><td>Warehouse</td><td>Exit</td><td><span class="sev p2">P2</span></td><td>QHSE</td><td><span class="switch on"></span></td></tr>
            <tr><td><b>Personnel boarded vessel</b></td><td>Vessel MV PAGEO 02</td><td>Enter</td><td><span class="sev p4">P4</span></td><td>Supervisor</td><td><span class="switch on"></span></td></tr>
            <tr><td><b>Asset dwell at port before loading</b></td><td>Port Tanjung Priok</td><td>Dwell &gt; 30 min</td><td><span class="sev p3">P3</span></td><td>Supervisor</td><td><span class="switch"></span></td></tr>
            <tr><td><b>Muster point reached</b></td><td>Muster Point A/B</td><td>Enter</td><td><span class="sev p4">P4</span></td><td>QHSE</td><td><span class="switch on"></span></td></tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="c5 card p0">
      <div class="card-head"><span class="card-title">Recent geofence events</span><a class="link" href="alerts.html">Alert center <i data-icon="arrowright" class="ic-14"></i></a></div>
      <div class="feed" style="padding:4px 20px">
        <div class="ev"><span class="time">15:42</span><i data-icon="ship"></i><div><b>Andi Pratama</b> entered <b>Vessel MV PAGEO 02</b></div><span class="chip info sm">Enter</span></div>
        <div class="ev"><span class="time">15:39</span><i data-icon="diamond"></i><div><b>MBES-001</b> read at <b>Warehouse</b> gate RD-04 <span class="sub">· dispatch matched</span></div><span class="chip transit sm">Exit</span></div>
        <div class="ev"><span class="time">15:38</span><i data-icon="warning"></i><div><b>Rizky Hakim</b> entered <b>Restricted Area</b> <span class="sub">· unauthorized</span></div><span class="chip crit sm"><span class="dot crit"></span>P2</span></div>
        <div class="ev"><span class="time">15:31</span><i data-icon="pin"></i><div><b>Fahmi Syaban</b> entered <b>Project Site Alpha</b></div><span class="chip info sm">Enter</span></div>
        <div class="ev"><span class="time">15:22</span><i data-icon="anchor"></i><div><b>GPS-042</b> read at <b>Port Tanjung Priok</b> RD-09 <span class="sub">· Project Charlie</span></div><span class="chip transit sm">Enter</span></div>
        <div class="ev"><span class="time">15:04</span><i data-icon="waves"></i><div><b>Agus Setiawan</b> outside <b>Offshore Work Area</b> 32 min</div><span class="chip warn sm"><span class="dot warn"></span>P3</span></div>
        <div class="ev"><span class="time">14:48</span><i data-icon="pin"></i><div><b>Sari Wulandari</b> left <b>Project Site Alpha</b> <span class="sub">· shift end</span></div><span class="chip neutral sm">Exit</span></div>
        <div class="ev"><span class="time">14:20</span><i data-icon="wifioff"></i><div><b>Budi Santoso</b> last seen inside <b>PAGEO Base</b> <span class="sub">· device offline</span></div><span class="chip off sm"><span class="dot off"></span>Offline</span></div>
      </div>
      <div class="card-foot row between"><span class="t-caption">Showing 8 of 214 events today</span><a class="link" href="asset-movement.html">Movement log <i data-icon="arrowright" class="ic-14"></i></a></div>
    </div>
  </div>

  <!-- Site presence -->
  <div class="grid">
    <div class="c12 card p0">
      <div class="card-head"><span class="card-title">Site presence</span><span class="t-caption">Who and what is inside each zone right now · 15:42 WIB</span></div>
      <div class="table-wrap">
        <table class="table">
          <thead><tr><th>Zone</th><th>Type</th><th class="num">People now</th><th class="num">Assets now</th><th>Readers</th><th>Last event</th><th>Freshness</th></tr></thead>
          <tbody>
            <tr><td><span class="cell-entity"><i data-icon="warehouse" class="ic-16"></i><b>PAGEO Base</b></span></td><td>Base</td><td class="num">38</td><td class="num">481</td><td><span class="num">2</span> / 2 online</td><td>15:41 · Andi Pratama exit</td><td><span class="fresh live"><b>LIVE</b>12 sec ago</span></td></tr>
            <tr><td><span class="cell-entity"><i data-icon="building" class="ic-16"></i><b>Warehouse</b></span></td><td>Warehouse</td><td class="num">6</td><td class="num">412</td><td><span class="num">3</span> / 4 online</td><td>15:39 · MBES-001 dispatched</td><td><span class="fresh live"><b>LIVE</b>41 sec ago</span></td></tr>
            <tr><td><span class="cell-entity"><i data-icon="anchor" class="ic-16"></i><b>Port Tanjung Priok</b></span></td><td>Port</td><td class="num">9</td><td class="num">22</td><td><span class="num">2</span> / 2 online</td><td>15:22 · GPS-042 read RD-09</td><td><span class="fresh recent"><b>RECENT</b>3 min ago</span></td></tr>
            <tr><td><span class="cell-entity"><i data-icon="ship" class="ic-16"></i><b>Vessel MV PAGEO 02</b></span></td><td>Vessel</td><td class="num">12</td><td class="num">18</td><td><span class="num">2</span> / 2 online</td><td>15:42 · Andi Pratama boarded</td><td><span class="fresh live"><b>LIVE</b>8 sec ago</span></td></tr>
            <tr><td><span class="cell-entity"><i data-icon="pin" class="ic-16"></i><b>Project Site Alpha</b></span></td><td>Project site</td><td class="num">24</td><td class="num">47</td><td>—</td><td>15:31 · Fahmi Syaban enter</td><td><span class="fresh live"><b>LIVE</b>20 sec ago</span></td></tr>
            <tr><td><span class="cell-entity"><i data-icon="waves" class="ic-16"></i><b>Offshore Work Area</b></span></td><td>Work area</td><td class="num">26</td><td class="num">47</td><td>—</td><td>15:04 · Agus Setiawan dwell</td><td><span class="fresh live"><b>LIVE</b>20 sec ago</span></td></tr>
            <tr><td><span class="cell-entity"><i data-icon="warning" class="ic-16 crit"></i><b>Restricted Area</b></span></td><td>Restricted</td><td class="num crit">1</td><td class="num">0</td><td>—</td><td>15:38 · Rizky Hakim unauthorized entry</td><td><span class="fresh live"><b>LIVE</b>24 sec ago</span></td></tr>
            <tr><td><span class="cell-entity"><i data-icon="flag" class="ic-16"></i><b>Muster Point A/B</b></span></td><td>Muster</td><td class="num">0</td><td class="num">0</td><td><span class="num">1</span> / 1 online</td><td>28 Aug · Drill completed 118 / 118</td><td><span class="fresh offline"><b>IDLE</b>7 d</span></td></tr>
          </tbody>
        </table>
      </div>
      <div class="table-foot"><span>8 zones · presence recomputed every 30 s</span><a class="link" href="reports.html">Location history report</a></div>
    </div>
  </div>`;
  }
});
