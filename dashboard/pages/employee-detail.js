/* Converted from web/employee-detail.html — edit freely; delete "// converted" to mark as handwritten */
// converted
PN.page("employee-detail", {
  title: "Fahmi Syaban",
  icon: "user",
  nav: "personnel",
  crumb: "Global / People / Personnel / Fahmi Syaban",
  render() {
    return `<!-- Identity header -->
  <div class="page-head" style="align-items:center">
    <div class="row s16">
      <span class="avatar xl">FS</span>
      <div class="titles">
        <div class="row s12"><h1>Fahmi Syaban</h1><span class="chip ok"><span class="dot ok"></span>Active</span><span class="chip info"><span class="dot info"></span>Project Alpha</span><span class="chip neutral">On Vessel · MV PAGEO 02</span></div>
        <div class="sub">Survey Engineer · Survey Department · PG-0142</div>
      </div>
    </div>
    <div class="actions">
      <button class="btn ghost sm"><i data-icon="mail"></i>Message</button>
      <button class="btn primary sm"><i data-icon="diamond"></i>Assign asset</button>
      <button class="icon-btn bordered" aria-label="More"><i data-icon="more"></i></button>
    </div>
  </div>

  <!-- Location + map -->
  <div class="grid">
    <div class="c4 card">
      <div class="card-head"><span class="card-title">Current location</span><span class="fresh live"><b>LIVE</b>12 sec ago</span></div>
      <dl class="kv stack">
        <div><dt>Lat / Long</dt><dd>-6.18746, 106.82721</dd></div>
        <div><dt>Accuracy</dt><dd>± 8 m <span class="t-caption">· GPS · 11 satellites</span></dd></div>
        <div><dt>Last update</dt><dd>15:42:16 <span class="t-caption">WIB</span></dd></div>
        <div><dt>Mobile battery</dt><dd>72%</dd></div>
        <div><dt>Tracking</dt><dd><span class="row s8"><span class="dot ok pulse"></span>ACTIVE <span class="t-caption">since 08:04</span></span></dd></div>
        <div><dt>Zone</dt><dd>Vessel — MV PAGEO 02 <span class="t-caption">· inside Offshore Work Area</span></dd></div>
      </dl>
      <div class="divider"></div>
      <div class="row s8"><a class="btn xs secondary" href="live-map.html">Show on live map</a><button class="btn xs ghost">Track history</button></div>
    </div>

    <div class="c8 card p0">
      <div class="card-head">
        <div class="row s8"><span class="card-title">Position and today's path</span><span class="t-caption">07:53 – 15:42 · 6 waypoints</span></div>
        <div class="seg sm"><button class="active">Today</button><button>Last 24 h</button><button>Project</button></div>
      </div>
      <div class="map flush" data-map="offshore" style="height:400px">
        <div data-fence="30,26 66,20 74,50 56,70 34,62" data-label="Offshore Work Area — Alpha"></div>
        <div data-track="10,74 18,66 26,60 34,52 44,48 52,50" data-color="#08698F"></div>

        <div class="mk site" style="left:10%;top:74%"><span class="sym"><i data-icon="anchor"></i></span><span class="lbl">Port Tanjung Priok<small>09:31 Boarding</small></span></div>
        <div class="mk vessel" style="left:48%;top:42%"><span class="sym"><i data-icon="ship"></i></span><span class="lbl">MV PAGEO 02</span></div>
        <div class="mk me" style="left:52%;top:50%"><span class="accuracy" style="width:56px;height:56px;left:50%;top:50%;transform:translate(-50%,-50%)"></span><span class="sym"></span><span class="lbl">Fahmi Syaban<small>15:42 · ± 8 m</small></span></div>

        <div class="map-ui bl">
          <div class="map-legend">
            <span class="lg"><span class="sym person"></span>Current position</span>
            <span class="lg"><span class="sym" style="width:14px;height:0;border-top:2px solid #08698F"></span>Today's path</span>
            <span class="lg"><span class="sym vessel"></span>Vessel</span>
            <span class="lg"><span class="sym fence"></span>Work area</span>
          </div>
        </div>
        <div class="map-ui bc"><span class="map-coords">-6.18746, 106.82721 · ± 8 m</span></div>
        <div class="map-ui br"><div class="map-ctl"><button aria-label="Zoom in"><i data-icon="plus"></i></button><button aria-label="Zoom out"><i data-icon="minus"></i></button><button aria-label="Center on employee"><i data-icon="locate"></i></button></div></div>
      </div>
    </div>
  </div>

  <!-- Metadata, assets, device -->
  <div class="grid">
    <div class="c4 card">
      <div class="card-head"><span class="card-title">Identity</span><a class="btn xs ghost" href="personnel-form.html?id=PG-0142"><i data-icon="pencil"></i>Edit</a></div>
      <div class="kv-grid" style="grid-template-columns:1fr 1fr">
        <div><div class="k">Employee ID</div><div class="v">PG-0142</div></div>
        <div><div class="k">Department</div><div class="v">Survey</div></div>
        <div><div class="k">Project</div><div class="v"><a href="project-detail.html">Project Alpha</a></div></div>
        <div><div class="k">Supervisor</div><div class="v"><a href="employee-detail.html">Andi Pratama</a></div></div>
        <div><div class="k">Contact</div><div class="v">+62 812-4471-0928</div></div>
        <div><div class="k">Emergency contact</div><div class="v">Rina Syaban · +62 813-2205-7714</div></div>
        <div><div class="k">Muster point</div><div class="v">B · Deck 2 · MV PAGEO 02</div></div>
        <div><div class="k">Certifications</div><div class="v">BOSIET <span class="t-caption">valid to 14 Mar 2027</span></div></div>
      </div>
    </div>

    <div class="c4 card">
      <div class="card-head"><span class="card-title">Assigned assets</span><span class="t-caption">4 in custody</span></div>
      <div>
        <div class="entity" style="padding-top:0">
          <span class="entity-tile" style="padding:0;border:0;background:none"><span class="sym dark"><i data-icon="diamond"></i></span></span>
          <div class="e-body"><div class="e-title"><a href="asset-detail.html">GPS-029</a></div><div class="e-sub">GNSS Receiver · since 04 Sep 08:47</div></div>
          <div class="e-right"><span class="chip info sm">Deployed</span></div>
        </div>
        <div class="entity">
          <span class="entity-tile" style="padding:0;border:0;background:none"><span class="sym dark"><i data-icon="diamond"></i></span></span>
          <div class="e-body"><div class="e-title"><a href="asset-detail.html">MBES-001</a></div><div class="e-sub">Multibeam Echo Sounder · since 04 Sep 08:52</div></div>
          <div class="e-right"><span class="chip info sm">Deployed</span></div>
        </div>
        <div class="entity">
          <span class="entity-tile" style="padding:0;border:0;background:none"><span class="sym dark"><i data-icon="monitor"></i></span></span>
          <div class="e-body"><div class="e-title"><a href="asset-detail.html">Laptop-SV029</a></div><div class="e-sub">Acquisition laptop · since 02 Sep 14:10</div></div>
          <div class="e-right"><span class="chip info sm">Deployed</span></div>
        </div>
        <div class="entity">
          <span class="entity-tile" style="padding:0;border:0;background:none"><span class="sym dark"><i data-icon="radio"></i></span></span>
          <div class="e-body"><div class="e-title"><a href="asset-detail.html">Radio-012</a></div><div class="e-sub">VHF handheld · since 04 Sep 09:05</div></div>
          <div class="e-right"><span class="chip info sm">Deployed</span></div>
        </div>
      </div>
      <div class="divider"></div>
      <div class="row between"><span class="t-caption">Last RFID read 15:39 · Deck reader RD-11</span><a class="link" href="assignment.html" style="font-size:12px">Assignment history</a></div>
    </div>

    <div class="c4 card">
      <div class="card-head"><span class="card-title">Device health</span><span class="chip ok sm"><span class="dot ok"></span>Healthy</span></div>
      <dl class="kv">
        <dt>Battery</dt><dd>72%</dd>
        <dt>GPS accuracy</dt><dd>± 8 m</dd>
        <dt>App version</dt><dd>1.4.2</dd>
        <dt>Last heartbeat</dt><dd>12 sec ago</dd>
        <dt>Offline buffer</dt><dd>0 events</dd>
        <dt>Device</dt><dd>Android · PN-MOB-0142</dd>
      </dl>
      <div class="divider"></div>
      <div class="row between"><span class="eyebrow">Battery today</span><span class="t-caption num">100% – 72%</span></div>
      <div class="sparkline">
        <svg viewBox="0 0 200 48" preserveAspectRatio="none" aria-label="Battery level over the day">
          <polygon points="0,4 23,7 46,10 69,13 92,16 115,20 138,23 161,26 184,29 200,32 200,48 0,48" fill="rgba(22,143,191,.12)"></polygon>
          <polyline points="0,4 23,7 46,10 69,13 92,16 115,20 138,23 161,26 184,29 200,32" fill="none" stroke="#168FBF" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></polyline>
          <circle cx="200" cy="32" r="3" fill="#fff" stroke="#168FBF" stroke-width="2"></circle>
        </svg>
      </div>
      <div class="row between t-caption" style="font-size:10px"><span>07:00</span><span>11:00</span><span>15:42</span></div>
    </div>
  </div>

  <!-- Timeline + geofence events -->
  <div class="grid">
    <div class="c6 card">
      <div class="card-head"><span class="card-title">Timeline</span><span class="t-caption">Thursday, 04 Sep 2026</span></div>
      <div class="timeline">
        <div class="tl"><span class="time">07:53</span><span class="node"><span class="dot info"></span></span><div class="body"><b>Arrived at Base</b><div class="sub">Geofence · PAGEO Base, Jakarta</div></div></div>
        <div class="tl"><span class="time">08:04</span><span class="node"><span class="dot ok"></span></span><div class="body"><b>Start Operation</b><div class="sub">Tracking started · Project Alpha</div></div></div>
        <div class="tl"><span class="time">08:47</span><span class="node"><span class="dot info"></span></span><div class="body"><b>Warehouse</b><div class="sub">4 assets scanned into custody · GPS-029, MBES-001, Laptop-SV029, Radio-012</div></div></div>
        <div class="tl"><span class="time">09:31</span><span class="node"><span class="dot info"></span></span><div class="body"><b>Vessel Boarding</b><div class="sub">MV PAGEO 02 · Port Tanjung Priok, Jetty 3</div></div></div>
        <div class="tl"><span class="time">10:02</span><span class="node"><span class="dot transit"></span></span><div class="body"><b>Offshore Transit</b><div class="sub">Left Port geofence · 3 h 18 min transit</div></div></div>
        <div class="tl"><span class="time">11:20</span><span class="node"><span class="dot info"></span></span><div class="body"><b>Project Site</b><div class="sub">Entered Offshore Work Area — Alpha</div></div></div>
        <div class="tl"><span class="time">15:42</span><span class="node"><span class="dot ok pulse"></span></span><div class="body"><b>Current Position</b><div class="sub">-6.18746, 106.82721 · ± 8 m · on MV PAGEO 02</div></div></div>
      </div>
    </div>

    <div class="c6 stack">
      <div class="card p0">
        <div class="card-head"><span class="card-title">Geofence events</span><a class="link" href="locations.html">Zones <i data-icon="arrowright" class="ic-14"></i></a></div>
        <div class="table-wrap">
          <table class="table compact">
            <thead><tr><th class="num">Time</th><th>Event</th><th>Zone</th><th>Rule</th></tr></thead>
            <tbody>
              <tr><td class="num">11:20</td><td>Entered Project Site</td><td>Offshore Work Area — Alpha</td><td><span class="chip ok sm">Expected</span></td></tr>
              <tr><td class="num">10:02</td><td>Left Port</td><td>Port Tanjung Priok</td><td><span class="chip ok sm">Expected</span></td></tr>
              <tr><td class="num">09:31</td><td>Entered Vessel</td><td>MV PAGEO 02</td><td><span class="chip ok sm">Expected</span></td></tr>
              <tr><td class="num">08:44</td><td>Entered Warehouse</td><td>PAGEO Base · Warehouse</td><td><span class="chip ok sm">Expected</span></td></tr>
              <tr><td class="num">07:53</td><td>Entered Base</td><td>PAGEO Base</td><td><span class="chip ok sm">Expected</span></td></tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="card p0">
        <div class="card-head"><span class="card-title">Operation history</span><span class="t-caption">Last 5 assignments</span></div>
        <div class="table-wrap">
          <table class="table compact">
            <thead><tr><th>Date</th><th>Project</th><th>Role</th><th class="num">Hours</th></tr></thead>
            <tbody>
              <tr><td class="tnum">04 Sep 2026</td><td><a href="project-detail.html">Project Alpha</a></td><td>Survey Engineer</td><td class="num">7.6</td></tr>
              <tr><td class="tnum">18 – 29 Aug 2026</td><td>Project Echo</td><td>Survey Engineer</td><td class="num">124</td></tr>
              <tr><td class="tnum">02 – 09 Aug 2026</td><td>Base Jakarta</td><td>Data processing</td><td class="num">56</td></tr>
              <tr><td class="tnum">06 – 27 Jul 2026</td><td>Project Bravo</td><td>Survey Engineer</td><td class="num">218</td></tr>
              <tr><td class="tnum">11 – 24 Jun 2026</td><td>Project Charlie</td><td>Survey Engineer</td><td class="num">102</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>`;
  }
});
