/* Converted from web/asset-detail.html — edit freely; delete "// converted" to mark as handwritten */
// converted
PN.page("asset-detail", {
  title: "MBES-03",
  icon: "diamond",
  nav: "assets",
  crumb: "Global / Assets / MBES-03",
  render() {
    return `<!-- Identity header -->
  <div class="page-head" style="align-items:flex-start">
    <div class="row s16 top">
      <span class="entity-tile" style="padding:0;border:0;background:none"><span class="sym dark" style="width:64px;height:64px;border-radius:12px"><i data-icon="diamond" class="ic-32"></i></span></span>
      <div class="titles">
        <div class="eyebrow"><a href="assets.html" style="color:inherit">Asset Registry</a> · Survey</div>
        <h1>MBES-03</h1>
        <div class="sub">Multibeam Echo Sounder · Kongsberg EM 2040C · SN 20401183</div>
        <div class="row s8 wrap mt4">
          <span class="chip info"><span class="dot info"></span>Deployed</span>
          <a class="chip neutral" href="project-detail.html"><i data-icon="clipboard" class="ic-14"></i>Project Alpha</a>
          <a class="chip neutral" href="employee-detail.html"><i data-icon="user" class="ic-14"></i>Custody: Fahmi Syaban</a>
          <span class="chip outline"><i data-icon="nfc" class="ic-14"></i>E280-11-8829184</span>
        </div>
      </div>
    </div>
    <div class="actions">
      <a class="btn ghost sm" href="assignment.html"><i data-icon="swap"></i>Reassign</a>
      <button class="btn ghost sm"><i data-icon="warning"></i>Report issue</button>
      <button class="icon-btn bordered" aria-label="More actions"><i data-icon="more"></i></button>
    </div>
  </div>

  <!-- Status + map -->
  <div class="grid">
    <div class="c4 card">
      <div class="card-head"><span class="card-title">RFID &amp; status</span><span class="fresh recent"><b>RECENT</b>3 min ago</span></div>
      <dl class="kv stack">
        <dt>RFID</dt><dd class="mono">E280-11-8829184 <span class="t-caption">· EPC Gen2 · passive UHF</span></dd>
        <dt>Status</dt><dd><span class="chip info sm"><span class="dot info"></span>DEPLOYED</span></dd>
        <dt>Project</dt><dd><a href="project-detail.html">Offshore Survey Alpha</a> <span class="t-caption">· Project Alpha</span></dd>
        <dt>Current location</dt><dd>MV PAGEO 02 <span class="t-caption">· Vessel Deck · Offshore Work Area</span></dd>
        <dt>Last seen</dt><dd class="num">04 Sep 2026 · 15:37 WIB</dd>
        <dt>Last reader</dt><dd>RD-11 · Vessel Deck <span class="t-caption">· RSSI −54 dBm</span></dd>
        <dt>Custodian</dt><dd><div class="row s8"><span class="avatar sm">FS</span><a href="employee-detail.html">Fahmi Syaban</a><span class="t-caption">· since 03 Sep</span></div></dd>
      </dl>
      <div class="divider"></div>
      <div class="row s8">
        <a class="btn secondary sm" href="live-map.html"><i data-icon="map"></i>Show on live map</a>
        <a class="btn ghost sm" href="asset-movement.html"><i data-icon="route"></i>Movement</a>
      </div>
    </div>

    <div class="c8 card p0">
      <div class="card-head">
        <div class="row s8"><span class="card-title">Location &amp; journey</span><span class="t-caption">Base → Port → Vessel → Site · 01–04 Sep</span></div>
        <div class="seg sm"><button class="active">Journey</button><button>Last seen</button></div>
      </div>
      <div class="map flush" data-map="offshore" style="height:460px">
        <div data-fence="46,26 66,22 72,46 58,58 44,50" data-label="Offshore Work Area — Alpha"></div>
        <div data-track="12,72 22,62 38,54 52,44 62,38" data-color="#08698F"></div>

        <div class="mk site" style="left:12%;top:72%"><span class="sym"><i data-icon="warehouse"></i></span><span class="lbl">PAGEO Base<small>Warehouse · RD-01 · 01 Sep</small></span></div>
        <div class="mk reader" style="left:22%;top:62%"><span class="sym"></span><span class="lbl">Port Jetty 3<small>RD-05 · 03 Sep 09:31</small></span></div>
        <div class="mk reader" style="left:38%;top:54%"><span class="sym"></span><span class="lbl">Vessel boarding<small>RD-11 · 03 Sep 10:02</small></span></div>
        <div class="mk reader" style="left:52%;top:44%"><span class="sym"></span><span class="lbl">Offshore transit<small>RD-11 · 04 Sep 06:14</small></span></div>
        <div class="mk vessel" style="left:62%;top:38%"><span class="sym"><i data-icon="ship"></i></span><span class="lbl">MV PAGEO 02<small>Offshore Site · heading 215°</small></span></div>
        <div class="mk asset" style="left:64%;top:43%" data-popup="mbes"><span class="sym"><i data-icon="diamond"></i></span><span class="lbl">MBES-03<small>RD-11 · 15:37</small></span></div>
        <div class="mk person" style="left:60%;top:45%"><span class="sym"><i data-icon="user"></i></span><span class="lbl">Fahmi Syaban<small>Custodian</small></span></div>

        <div class="popup" data-for="mbes" style="left:64%;top:43%">
          <div class="p-head"><span class="entity-tile" style="padding:0;border:0;background:none"><span class="sym dark" style="width:28px;height:28px"><i data-icon="diamond" class="ic-14"></i></span></span><div><div class="p-title">MBES-03</div><div class="p-sub">Multibeam Echo Sounder</div></div></div>
          <dl class="kv"><dt>Reader</dt><dd>RD-11 · Vessel Deck</dd><dt>Seen</dt><dd>15:37:20</dd><dt>Event</dt><dd>Seen</dd><dt>RSSI</dt><dd>−54 dBm</dd></dl>
        </div>

        <div class="map-ui tl">
          <div class="map-panel" style="min-width:200px">
            <span class="eyebrow">Last detection</span>
            <div><div class="strong">RD-11 · Vessel Deck</div><div class="t-caption">04 Sep 2026 · 15:37:20 WIB</div></div>
            <div class="t-caption">Position inherited from MV PAGEO 02 · <span class="num">-5.94210, 106.71844</span></div>
          </div>
        </div>
        <div class="map-ui bl">
          <div class="map-legend">
            <span class="lg"><span class="sym asset"></span>Asset</span>
            <span class="lg"><span class="sym vessel"></span>Vessel</span>
            <span class="lg"><span class="sym site"></span>Base</span>
            <span class="lg"><span class="sym reader"></span>RFID reader</span>
            <span class="lg"><span class="sym person"></span>Custodian</span>
            <span class="lg"><span class="sym fence"></span>Work area</span>
          </div>
        </div>
        <div class="map-ui br"><div class="map-ctl"><button aria-label="Zoom in"><i data-icon="plus"></i></button><button aria-label="Zoom out"><i data-icon="minus"></i></button><button aria-label="Locate"><i data-icon="locate"></i></button></div></div>
      </div>
    </div>
  </div>

  <!-- Metadata + journey + custody -->
  <div class="grid">
    <div class="c4 card">
      <div class="card-head"><span class="card-title">Metadata</span><a class="btn xs ghost" href="asset-form.html?id=MBES-03"><i data-icon="pencil"></i>Edit</a></div>
      <div class="kv-grid" style="grid-template-columns:repeat(2,minmax(0,1fr))">
        <div><div class="k">Manufacturer</div><div class="v">Kongsberg</div></div>
        <div><div class="k">Model</div><div class="v">EM 2040C</div></div>
        <div><div class="k">Serial number</div><div class="v">20401183</div></div>
        <div><div class="k">Category</div><div class="v">Survey</div></div>
        <div><div class="k">Owner</div><div class="v">PT Pageo Utama</div></div>
        <div><div class="k">Purchase date</div><div class="v">12 Mar 2023</div></div>
        <div><div class="k">Calibration</div><div class="v">18 Jun 2026</div><div class="t-caption">Valid to 18 Dec 2026 · <span class="ok">105 days left</span></div></div>
        <div><div class="k">Maintenance</div><div class="v">02 Aug 2026</div><div class="t-caption">Next 02 Nov 2026 · 90-day cycle</div></div>
        <div><div class="k">Custodian</div><div class="v"><a href="employee-detail.html">Fahmi Syaban</a></div><div class="t-caption">Survey Engineer</div></div>
        <div><div class="k">Assigned project</div><div class="v"><a href="project-detail.html">Project Alpha</a></div><div class="t-caption">04 Sep — 18 Sep 2026</div></div>
      </div>
    </div>

    <div class="c4 card">
      <div class="card-head"><span class="card-title">Asset journey</span><span class="t-caption">Reader detections · 4 days</span></div>
      <div class="timeline">
        <div class="tl"><span class="time">SEP 01</span><span class="node"><span class="dot unknown"></span></span><div class="body"><b>Warehouse</b> · Rack A2<div class="sub">RD-01 · Warehouse Gate A · 08:12 · Exit</div></div></div>
        <div class="tl"><span class="time">SEP 02</span><span class="node"><span class="dot warn"></span></span><div class="body"><b>Workshop</b> · pre-mob check<div class="sub">RD-03 · Workshop Bay A · 09:40 · Enter · custodian Agus Setiawan</div></div></div>
        <div class="tl"><span class="time">SEP 03</span><span class="node"><span class="dot transit"></span></span><div class="body"><b>Loading Area</b><div class="sub">RD-04 · Loading Area · 07:55 · Enter · scanned 27 / 28 Alpha lot</div></div></div>
        <div class="tl"><span class="time">SEP 03</span><span class="node"><span class="dot info"></span></span><div class="body"><b>Vessel PAGEO-02</b> · received<div class="sub">RD-11 · Vessel Deck · 10:02 · Enter · custody to Fahmi Syaban</div></div></div>
        <div class="tl"><span class="time">SEP 04</span><span class="node"><span class="dot ok"></span></span><div class="body"><b>Offshore Site</b> · deployed<div class="sub">RD-11 · Vessel Deck · 15:37 · Seen · Offshore Work Area — Alpha</div></div></div>
      </div>
      <div class="divider"></div>
      <a class="link" href="asset-movement.html" style="font-size:13px;font-weight:500;display:inline-flex;align-items:center;gap:4px">Full movement history <i data-icon="arrowright" class="ic-14"></i></a>
    </div>

    <div class="c4 stack">
      <div class="card">
        <div class="card-head"><span class="card-title">Custody history</span><span class="t-caption">3 records</span></div>
        <div>
          <div class="entity" style="padding-top:0">
            <span class="avatar sm">FS</span>
            <div class="e-body"><div class="e-title">Fahmi Syaban</div><div class="e-sub">Survey Engineer · Project Alpha</div></div>
            <div class="e-right"><span class="chip ok sm"><span class="dot ok"></span>Current</span><span>since 03 Sep 10:02</span></div>
          </div>
          <div class="entity">
            <span class="avatar sm">AS</span>
            <div class="e-body"><div class="e-title">Agus Setiawan</div><div class="e-sub">Engineer · Workshop pre-mob check</div></div>
            <div class="e-right"><span>01 Sep — 03 Sep</span><span class="t-caption">2 days</span></div>
          </div>
          <div class="entity">
            <span class="avatar sm" style="background:var(--pageo-mist);color:var(--text-2)"><i data-icon="warehouse" class="ic-14"></i></span>
            <div class="e-body"><div class="e-title">Warehouse</div><div class="e-sub">Base Jakarta · Rack A2 · no custodian</div></div>
            <div class="e-right"><span>12 Aug — 01 Sep</span><span class="t-caption">20 days</span></div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-head"><span class="card-title">Related alerts</span><a class="link" href="alerts.html">Alert center <i data-icon="arrowright" class="ic-14"></i></a></div>
        <div class="empty" style="padding:20px 16px">
          <i data-icon="shieldcheck"></i>
          <div class="eyebrow">No open alerts for this asset</div>
          <p>Last alert closed 19 Aug 2026 · calibration reminder acknowledged.</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Reader detections -->
  <div class="grid">
    <div class="c12 card p0">
      <div class="card-head">
        <div class="row s8"><span class="card-title">Reader detections</span><span class="t-caption">Last 10 of 214 · newest first</span></div>
        <div class="row s8">
          <div class="seg sm"><button class="active">All events</button><button>Enter / Exit</button><button>Seen</button></div>
          <button class="btn xs ghost"><i data-icon="download"></i>Export CSV</button>
        </div>
      </div>
      <div class="table-wrap">
        <table class="table compact">
          <thead><tr><th>Time</th><th>Reader</th><th>Reader location</th><th>Zone</th><th class="num">Signal RSSI</th><th>Event</th><th>Custodian at time</th></tr></thead>
          <tbody>
            <tr><td class="num">04 Sep 15:37:20</td><td class="mono">RD-11</td><td>MV PAGEO 02 · Vessel Deck</td><td>Offshore Work Area — Alpha</td><td class="num">−54 dBm</td><td><span class="chip info sm">Seen</span></td><td>Fahmi Syaban</td></tr>
            <tr><td class="num">04 Sep 14:37:18</td><td class="mono">RD-11</td><td>MV PAGEO 02 · Vessel Deck</td><td>Offshore Work Area — Alpha</td><td class="num">−56 dBm</td><td><span class="chip info sm">Seen</span></td><td>Fahmi Syaban</td></tr>
            <tr><td class="num">04 Sep 13:37:21</td><td class="mono">RD-11</td><td>MV PAGEO 02 · Vessel Deck</td><td>Offshore Work Area — Alpha</td><td class="num">−55 dBm</td><td><span class="chip info sm">Seen</span></td><td>Fahmi Syaban</td></tr>
            <tr><td class="num">04 Sep 06:14:02</td><td class="mono">RD-11</td><td>MV PAGEO 02 · Vessel Deck</td><td>Offshore transit</td><td class="num">−58 dBm</td><td><span class="chip info sm">Seen</span></td><td>Fahmi Syaban</td></tr>
            <tr><td class="num">03 Sep 10:02:44</td><td class="mono">RD-11</td><td>MV PAGEO 02 · Vessel Deck</td><td>Port Jetty 3</td><td class="num">−49 dBm</td><td><span class="chip ok sm">Enter</span></td><td>Fahmi Syaban</td></tr>
            <tr><td class="num">03 Sep 09:31:10</td><td class="mono">RD-05</td><td>Port Jetty 3 · Quay gate</td><td>Port Jetty 3</td><td class="num">−61 dBm</td><td><span class="chip transit sm">Exit</span></td><td>Agus Setiawan</td></tr>
            <tr><td class="num">03 Sep 08:20:37</td><td class="mono">RD-04</td><td>Loading Area · Bay 2</td><td>PAGEO Base</td><td class="num">−52 dBm</td><td><span class="chip transit sm">Exit</span></td><td>Agus Setiawan</td></tr>
            <tr><td class="num">03 Sep 07:55:09</td><td class="mono">RD-04</td><td>Loading Area · Bay 2</td><td>PAGEO Base</td><td class="num">−50 dBm</td><td><span class="chip ok sm">Enter</span></td><td>Agus Setiawan</td></tr>
            <tr><td class="num">02 Sep 09:40:52</td><td class="mono">RD-03</td><td>Workshop · Bay A</td><td>PAGEO Base</td><td class="num">−47 dBm</td><td><span class="chip ok sm">Enter</span></td><td>Agus Setiawan</td></tr>
            <tr><td class="num">01 Sep 08:12:15</td><td class="mono">RD-01</td><td>Warehouse · Gate A</td><td>PAGEO Base</td><td class="num">−53 dBm</td><td><span class="chip transit sm">Exit</span></td><td class="muted">Warehouse</td></tr>
          </tbody>
        </table>
      </div>
      <div class="table-foot"><span>Showing 10 of 214 detections</span><div class="pager"><button disabled><i data-icon="chevronleft" class="ic-14"></i></button><button class="active">1</button><button>2</button><button>3</button><button>…</button><button>22</button><button><i data-icon="chevronright" class="ic-14"></i></button></div></div>
    </div>
  </div>`;
  }
});
