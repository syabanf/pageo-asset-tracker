/* Converted from web/muster.html — edit freely; delete "// converted" to mark as handwritten */
// converted
PN.page("muster", {
  title: "Muster",
  icon: "flag",
  nav: "muster",
  crumb: "Global / People / Muster",
  render() {
    return `<div class="banner crit">
    <i data-icon="siren"></i>
    <span><b>Emergency muster in progress</b> — MV PAGEO 02 · initiated 15:38 by QHSE Officer · <span class="num strong" style="color:inherit">04:12</span> elapsed</span>
    <div class="banner-actions">
      <button class="btn sm ghost"><i data-icon="bell"></i>Broadcast reminder</button>
      <button class="btn sm destructive">End muster</button>
    </div>
  </div>

  <div class="page-head">
    <div class="titles">
      <div class="eyebrow">People · Muster</div>
      <h1>Emergency muster — MV PAGEO 02</h1>
      <div class="sub">Project Alpha · Muster Points A and B · 84 personnel on board · last confirmation 15:42:08</div>
    </div>
    <div class="actions">
      <button class="btn ghost sm"><i data-icon="history"></i>Past musters</button>
      <button class="btn ghost sm"><i data-icon="download"></i>Export report</button>
    </div>
  </div>

  <!-- KPI row -->
  <div class="grid kpis" style="grid-template-columns:repeat(5,minmax(0,1fr))">
    <div class="card kpi">
      <div class="eyebrow">Personnel expected</div>
      <div class="kpi-value">84</div>
      <div class="kpi-lines"><span>POB list · MV PAGEO 02 · 15:38</span><span><span class="num">45</span>Point A · <span class="num">39</span>Point B</span></div>
    </div>
    <div class="card kpi">
      <div class="eyebrow">Safe</div>
      <div class="kpi-value" style="color:var(--s-success)">76</div>
      <div class="kpi-lines"><span><span class="num">62</span>confirmed via app</span><span><span class="num">14</span>confirmed by supervisor</span></div>
      <span class="delta"><i data-icon="arrowup" class="ic-14"></i>90% accounted</span>
    </div>
    <div class="card kpi">
      <div class="eyebrow">Not confirmed</div>
      <div class="kpi-value" style="color:var(--s-warn)">5</div>
      <div class="kpi-lines"><span><span class="num">1</span>Point A · <span class="num">4</span>Point B</span><span>Device online · no response</span></div>
    </div>
    <div class="card kpi">
      <div class="eyebrow">Offline</div>
      <div class="kpi-value" style="color:var(--s-offline)">2</div>
      <div class="kpi-lines"><span>Last position &gt; 30 min</span><span>Both assigned Point B</span></div>
    </div>
    <div class="card kpi alert">
      <div class="eyebrow">SOS</div>
      <div class="kpi-value" style="color:var(--s-crit)">1</div>
      <div class="kpi-lines"><span><b>Rizky Hakim</b> · ROV Pilot</span><span>15:41 · Restricted Zone</span></div>
    </div>
  </div>

  <!-- Muster points + map -->
  <div class="grid">
    <div class="c5 stack">
      <div class="card">
        <div class="card-head">
          <div><div class="card-title">Muster Point A</div><div class="t-caption">Main deck forward · Muster leader Andi Pratama</div></div>
          <span class="chip crit sm"><span class="dot crit"></span>2 missing</span>
        </div>
        <div class="row s16" style="align-items:flex-end">
          <div class="kpi" style="flex:0 0 auto"><div class="kpi-value" style="font-size:36px">43<small>/ 45</small></div></div>
          <div class="grow" style="padding-bottom:6px">
            <div class="row between t-caption" style="margin-bottom:6px"><span>Personnel accounted</span><span class="num">96%</span></div>
            <div class="progress ok"><i style="width:96%"></i></div>
          </div>
        </div>
        <div class="divider"></div>
        <div class="eyebrow">Missing (2)</div>
        <div>
          <div class="entity" style="padding-top:0">
            <span class="avatar sm" style="background:var(--s-crit-bg);color:var(--s-crit)">RH</span>
            <div class="e-body"><div class="e-title">Employee 024 · Rizky Hakim</div><div class="e-sub">ROV Pilot · <span class="crit">SOS 15:41</span> · Restricted Zone · 180 m from Point A</div></div>
            <div class="row s4"><button class="btn xs ghost"><i data-icon="phone" class="ic-14"></i>Call</button><a class="btn xs secondary" href="live-map.html"><i data-icon="locate" class="ic-14"></i>Locate</a></div>
          </div>
          <div class="entity">
            <span class="avatar sm">DK</span>
            <div class="e-body"><div class="e-title">Employee 117 · Dedi Kurniawan</div><div class="e-sub">Deck Crew · <span class="warn">Not confirmed</span> · last seen Engine room 15:36</div></div>
            <div class="row s4"><button class="btn xs ghost"><i data-icon="phone" class="ic-14"></i>Call</button><a class="btn xs secondary" href="live-map.html"><i data-icon="locate" class="ic-14"></i>Locate</a></div>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-head">
          <div><div class="card-title">Muster Point B</div><div class="t-caption">Deck 2 aft · Muster leader Putri Handayani</div></div>
          <span class="chip warn sm"><span class="dot warn"></span>6 missing</span>
        </div>
        <div class="row s16" style="align-items:flex-end">
          <div class="kpi" style="flex:0 0 auto"><div class="kpi-value" style="font-size:36px">33<small>/ 39</small></div></div>
          <div class="grow" style="padding-bottom:6px">
            <div class="row between t-caption" style="margin-bottom:6px"><span>Personnel accounted</span><span class="num">85%</span></div>
            <div class="progress ok"><i style="width:85%"></i></div>
          </div>
        </div>
        <div class="divider"></div>
        <div class="eyebrow">Missing (6) · 4 not confirmed · 2 offline</div>
        <div>
          <div class="entity" style="padding-top:0">
            <span class="avatar sm">EP</span>
            <div class="e-body"><div class="e-title">Employee 031 · Eko Prasetyo</div><div class="e-sub">Surveyor · <span class="warn">Not confirmed</span> · Bridge deck 15:40</div></div>
            <div class="row s4"><button class="btn xs ghost"><i data-icon="phone" class="ic-14"></i>Call</button><a class="btn xs secondary" href="live-map.html"><i data-icon="locate" class="ic-14"></i>Locate</a></div>
          </div>
          <div class="entity">
            <span class="avatar sm">WN</span>
            <div class="e-body"><div class="e-title">Employee 058 · Wahyu Nugroho</div><div class="e-sub">Deck Crew · <span class="warn">Not confirmed</span> · Aft deck 15:41</div></div>
            <div class="row s4"><button class="btn xs ghost"><i data-icon="phone" class="ic-14"></i>Call</button><a class="btn xs secondary" href="live-map.html"><i data-icon="locate" class="ic-14"></i>Locate</a></div>
          </div>
          <div class="entity">
            <span class="avatar sm">SR</span>
            <div class="e-body"><div class="e-title">Employee 073 · Slamet Riyadi</div><div class="e-sub">Engine Rating · <span class="warn">Not confirmed</span> · Engine room 15:39</div></div>
            <div class="row s4"><button class="btn xs ghost"><i data-icon="phone" class="ic-14"></i>Call</button><a class="btn xs secondary" href="live-map.html"><i data-icon="locate" class="ic-14"></i>Locate</a></div>
          </div>
          <div class="entity">
            <span class="avatar sm">JS</span>
            <div class="e-body"><div class="e-title">Employee 089 · Joko Susilo</div><div class="e-sub">Cook · <span class="warn">Not confirmed</span> · Galley 15:38</div></div>
            <div class="row s4"><button class="btn xs ghost"><i data-icon="phone" class="ic-14"></i>Call</button><a class="btn xs secondary" href="live-map.html"><i data-icon="locate" class="ic-14"></i>Locate</a></div>
          </div>
          <div class="entity">
            <span class="avatar sm" style="background:var(--s-offline-bg);color:var(--s-offline)">IS</span>
            <div class="e-body"><div class="e-title">Employee 041 · Iwan Setiadi</div><div class="e-sub">ROV Technician · <span class="off">Offline</span> · last position 14:58 · ROV hangar</div></div>
            <div class="row s4"><button class="btn xs ghost"><i data-icon="phone" class="ic-14"></i>Call</button><a class="btn xs secondary" href="live-map.html"><i data-icon="locate" class="ic-14"></i>Locate</a></div>
          </div>
          <div class="entity">
            <span class="avatar sm" style="background:var(--s-offline-bg);color:var(--s-offline)">BH</span>
            <div class="e-body"><div class="e-title">Employee 066 · Bambang Hartono</div><div class="e-sub">Deck Crew · <span class="off">Offline</span> · last position 15:02 · Hold 2</div></div>
            <div class="row s4"><button class="btn xs ghost"><i data-icon="phone" class="ic-14"></i>Call</button><a class="btn xs secondary" href="live-map.html"><i data-icon="locate" class="ic-14"></i>Locate</a></div>
          </div>
        </div>
      </div>
    </div>

    <div class="c7 card p0">
      <div class="card-head">
        <div class="row s8"><span class="card-title">Muster map — MV PAGEO 02</span><span class="chip ok sm"><span class="dot ok pulse"></span>Live · 8 sec ago</span></div>
        <div class="row s8">
          <div class="seg sm"><button class="active">Missing only</button><button>Everyone</button></div>
          <a class="link" href="live-map.html">Open live map <i data-icon="arrowright" class="ic-14"></i></a>
        </div>
      </div>
      <div class="map flush" data-map="offshore" style="height:700px">
        <div data-fence="36,30 62,26 68,52 54,64 38,58" data-label="Offshore Work Area — Alpha"></div>
        <div data-fence="70,18 90,14 92,34 74,38" data-kind="restricted" data-label="Restricted Zone"></div>
        <div data-fence="44,38 56,36 57,46 46,48" data-kind="muster" data-label="Vessel muster area"></div>

        <div class="mk vessel" style="left:50%;top:42%"><span class="sym"><i data-icon="ship"></i></span><span class="lbl">MV PAGEO 02<small>84 on board · heading 215°</small></span></div>
        <div class="mk muster" style="left:46%;top:38%"><span class="sym"><i data-icon="plus"></i></span><span class="lbl">Muster Point A<small>43 / 45</small></span></div>
        <div class="mk muster" style="left:55%;top:47%"><span class="sym"><i data-icon="plus"></i></span><span class="lbl">Muster Point B<small>33 / 39</small></span></div>

        <div class="mk person warn" style="left:43%;top:46%"><span class="sym"><i data-icon="user"></i></span><span class="lbl">Dedi Kurniawan<small>Not confirmed · 15:36</small></span></div>
        <div class="mk person warn" style="left:52%;top:33%"><span class="sym"><i data-icon="user"></i></span><span class="lbl">Eko Prasetyo<small>Not confirmed · 15:40</small></span></div>
        <div class="mk person warn" style="left:59%;top:52%"><span class="sym"><i data-icon="user"></i></span><span class="lbl">Wahyu Nugroho<small>Not confirmed · 15:41</small></span></div>
        <div class="mk person warn" style="left:47%;top:54%"><span class="sym"><i data-icon="user"></i></span><span class="lbl">Slamet Riyadi<small>Not confirmed · 15:39</small></span></div>
        <div class="mk person warn" style="left:56%;top:40%"><span class="sym"><i data-icon="user"></i></span><span class="lbl">Joko Susilo<small>Not confirmed · 15:38</small></span></div>
        <div class="mk person off" style="left:41%;top:36%"><span class="sym"><i data-icon="user"></i></span><span class="lbl">Iwan Setiadi<small>Offline · 14:58</small></span></div>
        <div class="mk person off" style="left:53%;top:57%"><span class="sym"><i data-icon="user"></i></span><span class="lbl">Bambang Hartono<small>Offline · 15:02</small></span></div>
        <div class="mk person crit" style="left:80%;top:27%"><span class="sym"><i data-icon="user"></i></span><span class="lbl">Rizky Hakim<small>SOS · 15:41 · Restricted Zone</small></span></div>

        <div class="map-ui tr">
          <div class="map-panel" style="min-width:240px">
            <div class="row between"><span class="eyebrow" style="color:#8A5A05">Not confirmed (5)</span><span class="t-caption">04:12 elapsed</span></div>
            <div class="stack" style="gap:6px;font-size:12px">
              <div class="row between"><span class="row s8"><span class="dot warn"></span>Dedi Kurniawan</span><span class="muted num">A · 15:36</span></div>
              <div class="row between"><span class="row s8"><span class="dot warn"></span>Eko Prasetyo</span><span class="muted num">B · 15:40</span></div>
              <div class="row between"><span class="row s8"><span class="dot warn"></span>Wahyu Nugroho</span><span class="muted num">B · 15:41</span></div>
              <div class="row between"><span class="row s8"><span class="dot warn"></span>Slamet Riyadi</span><span class="muted num">B · 15:39</span></div>
              <div class="row between"><span class="row s8"><span class="dot warn"></span>Joko Susilo</span><span class="muted num">B · 15:38</span></div>
            </div>
            <div class="divider"></div>
            <div class="row between" style="font-size:12px"><span class="row s8"><span class="dot crit"></span><b>SOS · Rizky Hakim</b></span><span class="muted num">15:41</span></div>
            <div class="row s8"><button class="btn xs primary">Reminder to 5</button><a class="btn xs ghost" href="alerts.html">Alert center</a></div>
          </div>
        </div>
        <div class="map-ui bl">
          <div class="map-legend">
            <span class="lg"><span class="sym muster"></span>Muster point</span>
            <span class="lg"><span class="sym person" style="background:var(--s-warn)"></span>Not confirmed</span>
            <span class="lg"><span class="sym person" style="background:var(--s-offline)"></span>Offline</span>
            <span class="lg"><span class="sym person" style="background:var(--s-crit)"></span>SOS</span>
            <span class="lg"><span class="sym vessel"></span>Vessel</span>
            <span class="lg"><span class="sym fence"></span>Geofence</span>
          </div>
        </div>
        <div class="map-ui br"><div class="map-ctl"><button aria-label="Zoom in"><i data-icon="plus"></i></button><button aria-label="Zoom out"><i data-icon="minus"></i></button><button aria-label="Locate"><i data-icon="locate"></i></button></div></div>
      </div>
    </div>
  </div>

  <!-- Accountability table -->
  <div class="grid">
    <div class="c12 card p0">
      <div class="card-head">
        <div class="row s8"><span class="card-title">Accountability</span><span class="t-caption">84 personnel · sorted by status</span></div>
        <div class="row s8">
          <div class="seg sm"><button class="active">All · 84</button><button>Safe · 76</button><button>Not confirmed · 5</button><button>Offline · 2</button><button>SOS · 1</button></div>
          <div class="input sm" style="width:200px"><i data-icon="search"></i><input type="search" placeholder="Find person" aria-label="Find person"></div>
        </div>
      </div>
      <div class="table-wrap">
        <table class="table">
          <thead>
            <tr><th>Employee</th><th>Role</th><th>Assigned muster point</th><th>Status</th><th class="num">Confirmed at</th><th>Method</th><th>Last position</th><th></th></tr>
          </thead>
          <tbody>
            <tr>
              <td><div class="cell-entity"><span class="avatar sm" style="background:var(--s-crit-bg);color:var(--s-crit)">RH</span><div><a class="strong" href="employee-detail.html">Rizky Hakim</a><div class="sub">Employee 024</div></div></div></td>
              <td>ROV Pilot</td><td>Point A</td>
              <td><span class="chip crit sm"><span class="dot crit"></span>SOS</span></td>
              <td class="num">—</td><td>App · SOS hold</td>
              <td><span class="num">15:41:32</span> <span class="t-caption">· Restricted Zone · ± 9 m</span></td>
              <td class="actions"><a class="btn xs primary" href="live-map.html">View location</a></td>
            </tr>
            <tr>
              <td><div class="cell-entity"><span class="avatar sm">DK</span><div><a class="strong" href="employee-detail.html">Dedi Kurniawan</a><div class="sub">Employee 117</div></div></div></td>
              <td>Deck Crew</td><td>Point A</td>
              <td><span class="chip warn sm"><span class="dot warn"></span>Not confirmed</span></td>
              <td class="num">—</td><td>—</td>
              <td><span class="num">15:36:04</span> <span class="t-caption">· Engine room</span></td>
              <td class="actions"><button class="btn xs ghost">Mark safe</button></td>
            </tr>
            <tr>
              <td><div class="cell-entity"><span class="avatar sm">EP</span><div><a class="strong" href="employee-detail.html">Eko Prasetyo</a><div class="sub">Employee 031</div></div></div></td>
              <td>Surveyor</td><td>Point B</td>
              <td><span class="chip warn sm"><span class="dot warn"></span>Not confirmed</span></td>
              <td class="num">—</td><td>—</td>
              <td><span class="num">15:40:51</span> <span class="t-caption">· Bridge deck</span></td>
              <td class="actions"><button class="btn xs ghost">Mark safe</button></td>
            </tr>
            <tr>
              <td><div class="cell-entity"><span class="avatar sm">WN</span><div><a class="strong" href="employee-detail.html">Wahyu Nugroho</a><div class="sub">Employee 058</div></div></div></td>
              <td>Deck Crew</td><td>Point B</td>
              <td><span class="chip warn sm"><span class="dot warn"></span>Not confirmed</span></td>
              <td class="num">—</td><td>—</td>
              <td><span class="num">15:41:10</span> <span class="t-caption">· Aft deck</span></td>
              <td class="actions"><button class="btn xs ghost">Mark safe</button></td>
            </tr>
            <tr>
              <td><div class="cell-entity"><span class="avatar sm" style="background:var(--s-offline-bg);color:var(--s-offline)">IS</span><div><a class="strong" href="employee-detail.html">Iwan Setiadi</a><div class="sub">Employee 041</div></div></div></td>
              <td>ROV Technician</td><td>Point B</td>
              <td><span class="chip off sm"><span class="dot off"></span>Offline</span></td>
              <td class="num">—</td><td>—</td>
              <td><span class="num">14:58:22</span> <span class="t-caption">· ROV hangar · 44 min ago</span></td>
              <td class="actions"><button class="btn xs ghost">Mark safe</button></td>
            </tr>
            <tr>
              <td><div class="cell-entity"><span class="avatar sm">FS</span><div><a class="strong" href="employee-detail.html">Fahmi Syaban</a><div class="sub">Employee 012</div></div></div></td>
              <td>Survey Engineer</td><td>Point B</td>
              <td><span class="chip ok sm"><span class="dot ok"></span>Safe</span></td>
              <td class="num">15:39:48</td><td>App</td>
              <td><span class="num">15:42:08</span> <span class="t-caption">· Point B · ± 7 m</span></td>
              <td class="actions"><button class="icon-btn" aria-label="More"><i data-icon="more"></i></button></td>
            </tr>
            <tr>
              <td><div class="cell-entity"><span class="avatar sm">AP</span><div><a class="strong" href="employee-detail.html">Andi Pratama</a><div class="sub">Employee 007 · Muster leader A</div></div></div></td>
              <td>Survey Engineer</td><td>Point A</td>
              <td><span class="chip ok sm"><span class="dot ok"></span>Safe</span></td>
              <td class="num">15:38:41</td><td>App</td>
              <td><span class="num">15:42:02</span> <span class="t-caption">· Point A · ± 5 m</span></td>
              <td class="actions"><button class="icon-btn" aria-label="More"><i data-icon="more"></i></button></td>
            </tr>
            <tr>
              <td><div class="cell-entity"><span class="avatar sm">PH</span><div><a class="strong" href="employee-detail.html">Putri Handayani</a><div class="sub">Employee 019 · Muster leader B</div></div></div></td>
              <td>QHSE Officer</td><td>Point B</td>
              <td><span class="chip ok sm"><span class="dot ok"></span>Safe</span></td>
              <td class="num">15:38:20</td><td>App</td>
              <td><span class="num">15:42:05</span> <span class="t-caption">· Point B · ± 6 m</span></td>
              <td class="actions"><button class="icon-btn" aria-label="More"><i data-icon="more"></i></button></td>
            </tr>
            <tr>
              <td><div class="cell-entity"><span class="avatar sm">AS</span><div><a class="strong" href="employee-detail.html">Agus Setiawan</a><div class="sub">Employee 033</div></div></div></td>
              <td>Engineer</td><td>Point A</td>
              <td><span class="chip ok sm"><span class="dot ok"></span>Safe</span></td>
              <td class="num">15:40:12</td><td>Supervisor</td>
              <td><span class="num">15:40:12</span> <span class="t-caption">· Point A · by Andi Pratama</span></td>
              <td class="actions"><button class="icon-btn" aria-label="More"><i data-icon="more"></i></button></td>
            </tr>
            <tr>
              <td><div class="cell-entity"><span class="avatar sm">RH</span><div><a class="strong" href="employee-detail.html">Rudi Hartono</a><div class="sub">Employee 102</div></div></div></td>
              <td>Deck Technician</td><td>Point B</td>
              <td><span class="chip ok sm"><span class="dot ok"></span>Safe</span></td>
              <td class="num">15:41:55</td><td>Manual</td>
              <td><span class="num">15:41:55</span> <span class="t-caption">· Point B · entered by QHSE Officer</span></td>
              <td class="actions"><button class="icon-btn" aria-label="More"><i data-icon="more"></i></button></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="table-foot"><span>Showing 10 of 84 · missing first</span><div class="pager"><button disabled><i data-icon="chevronleft" class="ic-14"></i></button><button class="active">1</button><button>2</button><button>3</button><button>…</button><button>9</button><button><i data-icon="chevronright" class="ic-14"></i></button></div></div>
    </div>
  </div>

  <!-- Timeline + confirmations -->
  <div class="grid">
    <div class="c4 card">
      <div class="card-head"><span class="card-title">Muster timeline</span><span class="t-caption">04 Sep 2026 · WIB</span></div>
      <div class="timeline">
        <div class="tl"><span class="time">15:38</span><span class="node"><span class="dot crit"></span></span><div class="body"><b>Muster initiated</b><div class="sub">QHSE Officer Putri Handayani · reason: fire alarm, engine room</div></div></div>
        <div class="tl"><span class="time">15:39</span><span class="node"><span class="dot info"></span></span><div class="body"><b>Broadcast sent</b> · 84 devices<div class="sub">Push + SMS fallback · 82 delivered · 2 offline</div></div></div>
        <div class="tl"><span class="time">15:40</span><span class="node"><span class="dot ok"></span></span><div class="body"><b>62 confirmed</b><div class="sub">74% within 2 minutes · 58 via app · 4 by supervisor</div></div></div>
        <div class="tl"><span class="time">15:41</span><span class="node"><span class="dot crit"></span></span><div class="body"><b>SOS</b> · Rizky Hakim<div class="sub">P1 alert · Restricted Zone · 180 m from Point A</div></div></div>
        <div class="tl"><span class="time">15:42</span><span class="node"><span class="dot ok"></span></span><div class="body"><b>76 confirmed</b><div class="sub">5 not confirmed · 2 offline · 1 SOS</div></div></div>
      </div>
    </div>
    <div class="c8 card">
      <div class="card-head"><span class="card-title">Confirmations since initiation</span><span class="t-caption">Per 30 s · cumulative safe count</span></div>
      <div class="bars">
        <div class="bar s2" style="height:14%"></div><div class="bar s3" style="height:38%"></div><div class="bar s4" style="height:61%"></div><div class="bar s5" style="height:74%"></div>
        <div class="bar s5" style="height:80%"></div><div class="bar s6" style="height:85%"></div><div class="bar s6" style="height:88%"></div><div class="bar s6" style="height:90%"></div>
        <div class="bar muted" style="height:100%"></div>
      </div>
      <div class="bar-labels"><span>15:38:30</span><span>15:39:00</span><span>15:39:30</span><span>15:40:00</span><span>15:40:30</span><span>15:41:00</span><span>15:41:30</span><span>15:42:00</span><span>Expected</span></div>
      <div class="divider"></div>
      <div class="grid g16" style="grid-template-columns:repeat(4,minmax(0,1fr))">
        <div><div class="eyebrow">Time to 50%</div><div class="num strong" style="font-size:18px">1 m 12 s</div></div>
        <div><div class="eyebrow">Time to 90%</div><div class="num strong" style="font-size:18px">3 m 48 s</div></div>
        <div><div class="eyebrow">By app</div><div class="num strong" style="font-size:18px">62 <span class="muted" style="font-weight:400;font-size:13px">82%</span></div></div>
        <div><div class="eyebrow">By supervisor / manual</div><div class="num strong" style="font-size:18px">14 <span class="muted" style="font-weight:400;font-size:13px">18%</span></div></div>
      </div>
    </div>
  </div>`;
  }
});
