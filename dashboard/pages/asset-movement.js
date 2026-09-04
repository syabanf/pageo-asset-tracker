/* Converted from web/asset-movement.html — edit freely; delete "// converted" to mark as handwritten */
// converted
PN.page("asset-movement", {
  title: "Asset Movement",
  icon: "route",
  nav: "movement",
  crumb: "Global / Assets / Movement",
  render() {
    return `<div class="page-head">
    <div class="titles">
      <div class="eyebrow">Assets · Movement</div>
      <h1>Asset Movement</h1>
      <div class="sub">RFID reader detections and mobilization flow · 148 detections today · 11 / 12 readers online</div>
    </div>
    <div class="actions">
      <div class="seg sm"><button class="active">Today</button><button>7 d</button><button>30 d</button></div>
      <button class="btn ghost sm"><i data-icon="download"></i>Export</button>
    </div>
  </div>

  <!-- Flow + reader status -->
  <div class="grid">
    <div class="c8 card">
      <div class="card-head">
        <div class="row s8"><span class="card-title">Movement flow</span><span class="t-caption">Assets currently at each RFID stage</span></div>
        <span class="chip ok sm"><span class="dot ok pulse"></span>Live · 15:42</span>
      </div>
      <div class="flow" style="align-items:flex-start">
        <div class="step done" style="flex:1;min-width:0"><span class="n"><i data-icon="warehouse" class="ic-14"></i></span><span>Warehouse</span><div class="kpi compact" style="align-items:center;gap:2px"><div class="kpi-value" style="font-size:22px">481</div><span class="t-caption">available</span></div></div>
        <div class="arrow done" style="margin:14px 0 0"></div>
        <div class="step done" style="flex:1;min-width:0"><span class="n"><i data-icon="scanline" class="ic-14"></i></span><span>Dispatch Gate</span><div class="kpi compact" style="align-items:center;gap:2px"><div class="kpi-value" style="font-size:22px">9</div><span class="t-caption">scanned today</span></div></div>
        <div class="arrow done" style="margin:14px 0 0"></div>
        <div class="step done" style="flex:1;min-width:0"><span class="n"><i data-icon="link" class="ic-14"></i></span><span>Assigned</span><div class="kpi compact" style="align-items:center;gap:2px"><div class="kpi-value" style="font-size:22px">13</div><span class="t-caption">awaiting load</span></div></div>
        <div class="arrow done" style="margin:14px 0 0"></div>
        <div class="step done" style="flex:1;min-width:0"><span class="n"><i data-icon="truck" class="ic-14"></i></span><span>Loaded</span><div class="kpi compact" style="align-items:center;gap:2px"><div class="kpi-value" style="font-size:22px">18</div><span class="t-caption">to port</span></div></div>
        <div class="arrow done" style="margin:14px 0 0"></div>
        <div class="step current" style="flex:1;min-width:0"><span class="n"><i data-icon="anchor" class="ic-14"></i></span><span>Port / Vessel</span><div class="kpi compact" style="align-items:center;gap:2px"><div class="kpi-value" style="font-size:22px">27</div><span class="t-caption">in transit</span></div></div>
        <div class="arrow" style="margin:14px 0 0"></div>
        <div class="step" style="flex:1;min-width:0"><span class="n"><i data-icon="waves" class="ic-14"></i></span><span>Deployed</span><div class="kpi compact" style="align-items:center;gap:2px"><div class="kpi-value" style="font-size:22px">142</div><span class="t-caption">3 projects</span></div></div>
        <div class="arrow" style="margin:14px 0 0"></div>
        <div class="step" style="flex:1;min-width:0"><span class="n"><i data-icon="refresh" class="ic-14"></i></span><span>Returned</span><div class="kpi compact" style="align-items:center;gap:2px"><div class="kpi-value" style="font-size:22px">36</div><span class="t-caption">last 30 d</span></div></div>
      </div>
      <div class="divider"></div>
      <div class="card-head"><span class="card-title">Dwell time by zone</span><span class="t-caption">Median · deployed lots · last 30 d</span></div>
      <div class="hbars">
        <div class="hb"><span>Warehouse</span><div class="track"><i class="s2" style="width:52%"></i></div><span class="val">6.2 d</span></div>
        <div class="hb"><span>Workshop</span><div class="track"><i class="s2" style="width:12%"></i></div><span class="val">1.4 d</span></div>
        <div class="hb"><span>Loading Area</span><div class="track"><i class="s3" style="width:2%"></i></div><span class="val">3 h</span></div>
        <div class="hb"><span>Vessel</span><div class="track"><i style="width:100%"></i></div><span class="val">12 d</span></div>
        <div class="hb"><span>Offshore Site</span><div class="track"><i class="s4" style="width:75%"></i></div><span class="val">9 d</span></div>
      </div>
    </div>

    <div class="c4 card p0">
      <div class="card-head">
        <span class="card-title">Reader status</span>
        <div class="row s4"><span class="chip ok sm"><span class="dot ok"></span>11 online</span><span class="chip off sm"><span class="dot off"></span>1 offline</span></div>
      </div>
      <div style="padding:2px 20px">
        <div class="entity" style="padding:8px 0"><span class="mk reader" style="position:static;transform:none;cursor:default"><span class="sym"></span></span><div class="e-body"><div class="e-title">RD-01 · Warehouse Gate A</div><div class="e-sub">PAGEO Base · 2 antennas</div></div><div class="e-right"><span class="chip ok sm"><span class="dot ok"></span>Online</span><span>15:42</span></div></div>
        <div class="entity" style="padding:8px 0"><span class="mk reader" style="position:static;transform:none;cursor:default"><span class="sym"></span></span><div class="e-body"><div class="e-title">RD-02 · Dispatch Gate</div><div class="e-sub">PAGEO Base · 4 antennas</div></div><div class="e-right"><span class="chip ok sm"><span class="dot ok"></span>Online</span><span>15:41</span></div></div>
        <div class="entity" style="padding:8px 0"><span class="mk reader" style="position:static;transform:none;cursor:default"><span class="sym"></span></span><div class="e-body"><div class="e-title">RD-03 · Workshop</div><div class="e-sub">PAGEO Base · Bay A</div></div><div class="e-right"><span class="chip ok sm"><span class="dot ok"></span>Online</span><span>15:40</span></div></div>
        <div class="entity" style="padding:8px 0"><span class="mk reader" style="position:static;transform:none;cursor:default"><span class="sym"></span></span><div class="e-body"><div class="e-title">RD-04 · Loading Area</div><div class="e-sub">PAGEO Base · Bay 2</div></div><div class="e-right"><span class="chip ok sm"><span class="dot ok"></span>Online</span><span>15:39</span></div></div>
        <div class="entity" style="padding:8px 0"><span class="mk reader" style="position:static;transform:none;cursor:default"><span class="sym"></span></span><div class="e-body"><div class="e-title">RD-05 · Port Jetty 3</div><div class="e-sub">Tanjung Priok · Quay gate</div></div><div class="e-right"><span class="chip ok sm"><span class="dot ok"></span>Online</span><span>15:38</span></div></div>
        <div class="entity" style="padding:8px 0"><span class="mk reader" style="position:static;transform:none;cursor:default"><span class="sym"></span></span><div class="e-body"><div class="e-title">RD-06 · Workshop Bay B</div><div class="e-sub">PAGEO Base · ROV bay</div></div><div class="e-right"><span class="chip ok sm"><span class="dot ok"></span>Online</span><span>15:35</span></div></div>
        <div class="entity" style="padding:8px 0"><span class="mk reader off" style="position:static;transform:none;cursor:default"><span class="sym"></span></span><div class="e-body"><div class="e-title">RD-07 · Port Gate</div><div class="e-sub">Tanjung Priok · <span class="warn">last heartbeat 13:28</span></div></div><div class="e-right"><span class="chip off sm"><span class="dot off"></span>Offline</span><span>2 h 14 m</span></div></div>
        <div class="entity" style="padding:8px 0"><span class="mk reader" style="position:static;transform:none;cursor:default"><span class="sym"></span></span><div class="e-body"><div class="e-title">RD-11 · MV PAGEO 02 Deck</div><div class="e-sub">Vessel · main deck</div></div><div class="e-right"><span class="chip ok sm"><span class="dot ok"></span>Online</span><span>15:42</span></div></div>
        <div class="entity" style="padding:8px 0"><span class="mk reader" style="position:static;transform:none;cursor:default"><span class="sym"></span></span><div class="e-body"><div class="e-title">RD-12 · MV PAGEO 02 Hold</div><div class="e-sub">Vessel · hold 2</div></div><div class="e-right"><span class="chip ok sm"><span class="dot ok"></span>Online</span><span>15:41</span></div></div>
        <div class="entity" style="padding:8px 0"><span class="mk reader" style="position:static;transform:none;cursor:default"><span class="sym"></span></span><div class="e-body"><div class="e-title">RD-21 · MV PAGEO 01</div><div class="e-sub">Vessel · main deck</div></div><div class="e-right"><span class="chip ok sm"><span class="dot ok"></span>Online</span><span>15:37</span></div></div>
        <div class="entity" style="padding:8px 0"><span class="mk reader" style="position:static;transform:none;cursor:default"><span class="sym"></span></span><div class="e-body"><div class="e-title">RD-22 · MV PAGEO 01 Hold</div><div class="e-sub">Vessel · ROV hangar</div></div><div class="e-right"><span class="chip ok sm"><span class="dot ok"></span>Online</span><span>15:36</span></div></div>
        <div class="entity" style="padding:8px 0"><span class="mk reader" style="position:static;transform:none;cursor:default"><span class="sym"></span></span><div class="e-body"><div class="e-title">RD-31 · MV PAGEO 03 Deck</div><div class="e-sub">Vessel · main deck</div></div><div class="e-right"><span class="chip ok sm"><span class="dot ok"></span>Online</span><span>15:12</span></div></div>
      </div>
      <div class="card-foot row between"><span class="t-caption">Heartbeat every 60 s · offline after 5 min</span><a class="link" href="locations.html">Reader map <i data-icon="arrowright" class="ic-14"></i></a></div>
    </div>
  </div>

  <!-- Detection log -->
  <div class="grid">
    <div class="c12 card p0">
      <div class="card-head">
        <div class="row s8"><span class="card-title">Detection log</span><span class="t-caption">148 detections today · newest first</span></div>
        <a class="link" href="assets.html">Asset registry <i data-icon="arrowright" class="ic-14"></i></a>
      </div>
      <div class="filters" style="padding:12px 20px;border-bottom:1px solid var(--border)">
        <div class="input sm" style="width:240px"><i data-icon="search"></i><input type="search" placeholder="Search asset ID or RFID" aria-label="Search detections"></div>
        <div class="input sm"><i data-icon="radio"></i><select aria-label="Reader"><option>Reader · All</option><option>RD-01 Warehouse Gate A</option><option>RD-02 Dispatch Gate</option><option>RD-03 Workshop</option><option>RD-04 Loading Area</option><option>RD-05 Port Jetty 3</option><option>RD-11 MV PAGEO 02 Deck</option><option>RD-12 MV PAGEO 02 Hold</option><option>RD-21 MV PAGEO 01</option><option>RD-31 MV PAGEO 03 Deck</option></select></div>
        <div class="input sm"><i data-icon="pin"></i><select aria-label="Zone"><option>Zone · All</option><option>PAGEO Base</option><option>Port Jetty 3</option><option>Vessel</option><option>Offshore Work Area</option></select></div>
        <div class="input sm"><i data-icon="activity"></i><select aria-label="Event"><option>Event · All</option><option>Enter</option><option>Exit</option><option>Seen</option></select></div>
        <span class="ml-auto t-caption">Auto-refresh 30 s</span>
      </div>
      <div class="table-wrap">
        <table class="table compact">
          <thead><tr><th>Time</th><th>Asset</th><th>Description</th><th>Reader</th><th>Zone</th><th>Event</th><th>Project</th><th>Status</th></tr></thead>
          <tbody>
            <tr><td class="num">15:41:52</td><td><a class="strong" href="asset-detail.html">MBES-001</a></td><td>Multibeam Echo Sounder</td><td><span class="mono">RD-11</span> · Vessel Deck</td><td>Offshore Work Area</td><td><span class="chip info sm">Seen</span></td><td>Project Alpha</td><td><span class="chip info sm"><span class="dot info"></span>Deployed</span></td></tr>
            <tr><td class="num">15:41:50</td><td><a class="strong" href="asset-detail.html">GPS-029</a></td><td>GNSS Receiver</td><td><span class="mono">RD-11</span> · Vessel Deck</td><td>Offshore Work Area</td><td><span class="chip info sm">Seen</span></td><td>Project Alpha</td><td><span class="chip info sm"><span class="dot info"></span>Deployed</span></td></tr>
            <tr><td class="num">15:41:48</td><td><a class="strong" href="asset-detail.html">Laptop-SV029</a></td><td>Acquisition Laptop</td><td><span class="mono">RD-11</span> · Vessel Deck</td><td>Offshore Work Area</td><td><span class="chip info sm">Seen</span></td><td>Project Alpha</td><td><span class="chip info sm"><span class="dot info"></span>Deployed</span></td></tr>
            <tr><td class="num">15:40:31</td><td><a class="strong" href="asset-detail.html">Radio-012</a></td><td>VHF Handheld</td><td><span class="mono">RD-11</span> · Vessel Deck</td><td>Offshore Work Area</td><td><span class="chip info sm">Seen</span></td><td>Project Alpha</td><td><span class="chip info sm"><span class="dot info"></span>Deployed</span></td></tr>
            <tr><td class="num">15:37:20</td><td><a class="strong" href="asset-detail.html">MBES-03</a></td><td>Multibeam Echo Sounder</td><td><span class="mono">RD-11</span> · Vessel Deck</td><td>Offshore Work Area</td><td><span class="chip info sm">Seen</span></td><td>Project Alpha</td><td><span class="chip info sm"><span class="dot info"></span>Deployed</span></td></tr>
            <tr><td class="num">15:37:04</td><td><a class="strong" href="asset-detail.html">ROV-T27-04</a></td><td>ROV Tooling Skid</td><td><span class="mono">RD-21</span> · MV PAGEO 01</td><td>Offshore Work Area</td><td><span class="chip info sm">Seen</span></td><td>Project Bravo</td><td><span class="chip info sm"><span class="dot info"></span>Deployed</span></td></tr>
            <tr><td class="num">15:22:41</td><td><a class="strong" href="asset-detail.html">GPS-042</a></td><td>GNSS Receiver</td><td><span class="mono">RD-01</span> · Warehouse Gate A</td><td>PAGEO Base</td><td><span class="chip ok sm">Enter</span></td><td class="muted">—</td><td><span class="chip ok sm"><span class="dot ok"></span>Available</span></td></tr>
            <tr><td class="num">15:18:09</td><td><a class="strong" href="asset-detail.html">PSU-05</a></td><td>Power Supply 24 V</td><td><span class="mono">RD-02</span> · Dispatch Gate</td><td>PAGEO Base</td><td><span class="chip transit sm">Exit</span></td><td>Project Charlie</td><td><span class="chip transit sm"><span class="dot transit"></span>In transit</span></td></tr>
            <tr><td class="num">15:15:33</td><td><a class="strong" href="asset-detail.html">Laptop-SV031</a></td><td>Acquisition Laptop</td><td><span class="mono">RD-02</span> · Dispatch Gate</td><td>PAGEO Base</td><td><span class="chip transit sm">Exit</span></td><td>Project Charlie</td><td><span class="chip transit sm"><span class="dot transit"></span>In transit</span></td></tr>
            <tr><td class="num">15:12:07</td><td><a class="strong" href="asset-detail.html">Gyro-01</a></td><td>Gyrocompass</td><td><span class="mono">RD-31</span> · MV PAGEO 03 Deck</td><td>Port Jetty 3</td><td><span class="chip ok sm">Enter</span></td><td>Project Charlie</td><td><span class="chip info sm"><span class="dot info"></span>Deployed</span></td></tr>
            <tr><td class="num">15:12:05</td><td><a class="strong" href="asset-detail.html">SVP-03</a></td><td>Sound Velocity Profiler</td><td><span class="mono">RD-31</span> · MV PAGEO 03 Deck</td><td>Port Jetty 3</td><td><span class="chip ok sm">Enter</span></td><td>Project Charlie</td><td><span class="chip info sm"><span class="dot info"></span>Deployed</span></td></tr>
            <tr><td class="num">15:02:18</td><td><a class="strong" href="asset-detail.html">SVP-07</a></td><td>Sound Velocity Profiler</td><td><span class="mono">RD-12</span> · MV PAGEO 02 Hold</td><td>Vessel</td><td><span class="chip info sm">Seen</span></td><td>Project Alpha</td><td><span class="chip unknown sm"><span class="dot unknown"></span>Unassigned</span></td></tr>
            <tr><td class="num">15:02:16</td><td><a class="strong" href="asset-detail.html">MAG-02</a></td><td>Marine Magnetometer</td><td><span class="mono">RD-12</span> · MV PAGEO 02 Hold</td><td>Vessel</td><td><span class="chip info sm">Seen</span></td><td>Project Alpha</td><td><span class="chip unknown sm"><span class="dot unknown"></span>Unassigned</span></td></tr>
            <tr><td class="num">14:05:44</td><td><a class="strong" href="asset-detail.html">Cable Set-07</a></td><td>Deck Cable Set 50 m</td><td><span class="mono">RD-01</span> · Warehouse Gate A</td><td>PAGEO Base</td><td><span class="chip transit sm">Exit</span></td><td>Project Charlie</td><td><span class="chip warn sm"><span class="dot warn"></span>Not seen at RD-02</span></td></tr>
          </tbody>
        </table>
      </div>
      <div class="table-foot"><span>Showing 14 of 148 detections today</span><div class="pager"><button disabled><i data-icon="chevronleft" class="ic-14"></i></button><button class="active">1</button><button>2</button><button>3</button><button>…</button><button>11</button><button><i data-icon="chevronright" class="ic-14"></i></button></div></div>
    </div>
  </div>

  <!-- Charts -->
  <div class="grid">
    <div class="c6 card">
      <div class="card-head"><span class="card-title">Movements per hour</span><span class="t-caption">Enter + Exit events · today</span></div>
      <div class="bars">
        <div class="bar s2" style="height:8%"></div><div class="bar s2" style="height:12%"></div><div class="bar s3" style="height:30%"></div><div class="bar s4" style="height:58%"></div>
        <div class="bar s5" style="height:74%"></div><div class="bar s5" style="height:66%"></div><div class="bar s4" style="height:42%"></div><div class="bar s3" style="height:26%"></div>
        <div class="bar s4" style="height:48%"></div><div class="bar s6" style="height:100%"></div><div class="bar s6" style="height:88%"></div><div class="bar s5" style="height:62%"></div>
      </div>
      <div class="bar-labels"><span>04</span><span>05</span><span>06</span><span>07</span><span>08</span><span>09</span><span>10</span><span>11</span><span>12</span><span>13</span><span>14</span><span>15</span></div>
      <div class="divider"></div>
      <dl class="kv"><dt>Peak</dt><dd>31 events · 13:00 · Charlie dispatch</dd><dt>Total today</dt><dd>148 · 92 Enter · 41 Exit · 15 Seen</dd></dl>
    </div>
    <div class="c6 card">
      <div class="card-head"><span class="card-title">Top moved assets today</span><span class="t-caption">Reader transitions</span></div>
      <div class="hbars">
        <div class="hb"><span><a href="asset-detail.html">Cable Set-07</a></span><div class="track"><i class="warn" style="width:100%"></i></div><span class="val">6</span></div>
        <div class="hb"><span><a href="asset-detail.html">MBES-001</a></span><div class="track"><i style="width:83%"></i></div><span class="val">5</span></div>
        <div class="hb"><span><a href="asset-detail.html">GPS-029</a></span><div class="track"><i style="width:67%"></i></div><span class="val">4</span></div>
        <div class="hb"><span><a href="asset-detail.html">Laptop-SV029</a></span><div class="track"><i style="width:67%"></i></div><span class="val">4</span></div>
        <div class="hb"><span><a href="asset-detail.html">Radio-012</a></span><div class="track"><i class="s3" style="width:50%"></i></div><span class="val">3</span></div>
        <div class="hb"><span><a href="asset-detail.html">ROV-T27-04</a></span><div class="track"><i class="s3" style="width:50%"></i></div><span class="val">3</span></div>
        <div class="hb"><span><a href="asset-detail.html">Gyro-01</a></span><div class="track"><i class="s2" style="width:33%"></i></div><span class="val">2</span></div>
      </div>
      <div class="divider"></div>
      <div class="t-caption"><span class="warn">Cable Set-07</span> moved 6 times without a Dispatch Gate read — possible tag fault or hand-carried past RD-02.</div>
    </div>
  </div>`;
  }
});
