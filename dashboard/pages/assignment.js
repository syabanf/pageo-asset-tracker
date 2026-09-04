/* Converted from web/assignment.html — edit freely; delete "// converted" to mark as handwritten */
// converted
PN.page("assignment", {
  title: "Assignment",
  icon: "link",
  nav: "assignment",
  crumb: "Global / Assets / Assignment",
  render() {
    return `<div class="page-head">
    <div class="titles">
      <div class="eyebrow">Assets · Assignment</div>
      <h1>Assignment</h1>
      <div class="sub">Person → Project → Asset custody · who holds what, per project</div>
    </div>
    <div class="actions">
      <button class="btn ghost sm"><i data-icon="download"></i>Export</button>
      <button class="btn primary sm"><i data-icon="link"></i>Assign asset</button>
    </div>
  </div>

  <!-- Project selector -->
  <div class="row s12 wrap">
    <div class="input select" style="width:300px"><i data-icon="clipboard"></i><span>Offshore Survey Alpha</span><i data-icon="chevrondown" class="chev"></i></div>
    <span class="chip neutral"><i data-icon="users" class="ic-14"></i>12 people</span>
    <span class="chip neutral"><i data-icon="diamond" class="ic-14"></i>18 equipment</span>
    <span class="chip ok"><span class="dot ok"></span>15 custody confirmed</span>
    <span class="chip warn"><span class="dot warn"></span>5 unassigned in project</span>
    <span class="ml-auto t-caption">Project Alpha · MV PAGEO 02 · 04 Sep — 18 Sep 2026 · Ops Manager: Dewi Anggraini</span>
  </div>

  <!-- Personnel / assigned / unassigned -->
  <div class="grid">
    <div class="c4 card">
      <div class="card-head"><span class="card-title">Personnel</span><div class="input sm" style="width:150px"><i data-icon="search"></i><input type="search" placeholder="Find" aria-label="Find person"></div></div>
      <div>
        <div class="entity" style="padding-top:0"><span class="avatar sm">DA</span><div class="e-body"><div class="e-title">Dewi Anggraini</div><div class="e-sub">Party Chief</div></div><div class="e-right"><span class="num">1 asset</span></div></div>
        <div class="entity" style="background:var(--accent-bg);margin:0 -20px;padding:10px 20px"><span class="avatar sm">AP</span><div class="e-body"><div class="e-title">Andi Pratama</div><div class="e-sub">Survey Engineer · Muster leader A</div></div><div class="e-right"><span class="num strong" style="color:var(--pageo-deep)">4 assets</span><i data-icon="chevronright" class="ic-14" style="color:var(--pageo-deep)"></i></div></div>
        <div class="entity"><span class="avatar sm">FS</span><div class="e-body"><div class="e-title">Fahmi Syaban</div><div class="e-sub">Survey Engineer</div></div><div class="e-right"><span class="num">3 assets</span></div></div>
        <div class="entity"><span class="avatar sm">RH</span><div class="e-body"><div class="e-title">Rizky Hakim</div><div class="e-sub">ROV Pilot</div></div><div class="e-right"><span class="num">2 assets</span></div></div>
        <div class="entity"><span class="avatar sm">YF</span><div class="e-body"><div class="e-title">Yoga Firmansyah</div><div class="e-sub">Data Processor</div></div><div class="e-right"><span class="num">2 assets</span></div></div>
        <div class="entity"><span class="avatar sm">BS</span><div class="e-body"><div class="e-title">Bayu Setiawan</div><div class="e-sub">ROV Technician</div></div><div class="e-right"><span class="num">2 assets</span></div></div>
        <div class="entity"><span class="avatar sm">AS</span><div class="e-body"><div class="e-title">Agus Setiawan</div><div class="e-sub">Engineer</div></div><div class="e-right"><span class="num">1 asset</span></div></div>
        <div class="entity"><span class="avatar sm">PH</span><div class="e-body"><div class="e-title">Putri Handayani</div><div class="e-sub">QHSE Officer · Muster leader B</div></div><div class="e-right"><span class="num">1 asset</span></div></div>
        <div class="entity"><span class="avatar sm">FN</span><div class="e-body"><div class="e-title">Fajar Nugraha</div><div class="e-sub">Geophysicist</div></div><div class="e-right"><span class="num">1 asset</span></div></div>
        <div class="entity"><span class="avatar sm">RH</span><div class="e-body"><div class="e-title">Rudi Hartono</div><div class="e-sub">Deck Technician</div></div><div class="e-right"><span class="num">1 asset</span></div></div>
        <div class="entity"><span class="avatar sm">LH</span><div class="e-body"><div class="e-title">Lukman Hakim</div><div class="e-sub">Navigator</div></div><div class="e-right"><span class="muted">No assets</span></div></div>
        <div class="entity"><span class="avatar sm">SD</span><div class="e-body"><div class="e-title">Sinta Dewi</div><div class="e-sub">Medic</div></div><div class="e-right"><span class="muted">No assets</span></div></div>
      </div>
    </div>

    <div class="c5 card">
      <div class="card-head">
        <div><div class="card-title">Assigned to Survey Engineer — Andi Pratama</div><div class="t-caption">Employee 007 · Project Alpha · MV PAGEO 02</div></div>
        <span class="chip info sm"><span class="dot info"></span>4 assets</span>
      </div>
      <div class="stack s8">
        <div class="entity-tile">
          <span class="sym dark"><i data-icon="diamond"></i></span>
          <div class="grow"><div class="strong"><a href="asset-detail.html">GPS-029</a></div><div class="t-caption">GNSS Receiver · Trimble R12i · custody since 03 Sep 09:14</div></div>
          <span class="chip info sm"><span class="dot info"></span>Deployed</span>
          <button class="icon-btn" aria-label="Remove GPS-029"><i data-icon="x" class="ic-16"></i></button>
        </div>
        <div class="entity-tile">
          <span class="sym dark"><i data-icon="diamond"></i></span>
          <div class="grow"><div class="strong"><a href="asset-detail.html">MBES-001</a></div><div class="t-caption">Multibeam Echo Sounder · Kongsberg EM 2040C · custody since 03 Sep 09:20</div></div>
          <span class="chip info sm"><span class="dot info"></span>Deployed</span>
          <button class="icon-btn" aria-label="Remove MBES-001"><i data-icon="x" class="ic-16"></i></button>
        </div>
        <div class="entity-tile">
          <span class="sym dark"><i data-icon="diamond"></i></span>
          <div class="grow"><div class="strong"><a href="asset-detail.html">Laptop-SV029</a></div><div class="t-caption">Acquisition Laptop · Dell Precision 7680 · custody since 03 Sep 09:22</div></div>
          <span class="chip info sm"><span class="dot info"></span>Deployed</span>
          <button class="icon-btn" aria-label="Remove Laptop-SV029"><i data-icon="x" class="ic-16"></i></button>
        </div>
        <div class="entity-tile">
          <span class="sym dark"><i data-icon="diamond"></i></span>
          <div class="grow"><div class="strong"><a href="asset-detail.html">Radio-012</a></div><div class="t-caption">VHF Handheld · Icom IC-M94D · custody since 03 Sep 09:22</div></div>
          <span class="chip info sm"><span class="dot info"></span>Deployed</span>
          <button class="icon-btn" aria-label="Remove Radio-012"><i data-icon="x" class="ic-16"></i></button>
        </div>
      </div>
      <div class="row between">
        <span class="t-caption">All 4 custody scans confirmed · last scan 15:41 · RD-11</span>
        <button class="btn secondary sm"><i data-icon="plus"></i>Add asset</button>
      </div>
      <div class="field">
        <label for="scan-asset">Scan or search asset ID</label>
        <div class="input"><i data-icon="scanline"></i><input id="scan-asset" type="text" placeholder="e.g. SVP-07 or E280-11-…"><span class="t-caption">Enter</span></div>
        <span class="help">Only assets already assigned to Project Alpha can be placed in custody. Custody is confirmed when Andi scans the tag on the mobile app.</span>
      </div>
    </div>

    <div class="c3 card">
      <div class="card-head"><span class="card-title">Unassigned in project</span><span class="chip warn sm">5</span></div>
      <div>
        <div class="entity" style="padding-top:0"><div class="e-body"><div class="e-title"><a href="asset-detail.html">SVP-07</a></div><div class="e-sub">Sound Velocity Profiler · Hold · RD-12</div></div><button class="btn xs ghost">Assign</button></div>
        <div class="entity"><div class="e-body"><div class="e-title"><a href="asset-detail.html">MAG-02</a></div><div class="e-sub">Marine Magnetometer · Hold · RD-12</div></div><button class="btn xs ghost">Assign</button></div>
        <div class="entity"><div class="e-body"><div class="e-title"><a href="asset-detail.html">Battery Pack-04</a></div><div class="e-sub">Li-ion 24 V · Hold · RD-12</div></div><button class="btn xs ghost">Assign</button></div>
        <div class="entity"><div class="e-body"><div class="e-title"><a href="asset-detail.html">Cable Set-08</a></div><div class="e-sub">Deck cable set 50 m · Deck · RD-11</div></div><button class="btn xs ghost">Assign</button></div>
        <div class="entity"><div class="e-body"><div class="e-title"><a href="asset-detail.html">Radio-030</a></div><div class="e-sub">VHF Handheld · Bridge · RD-11</div></div><button class="btn xs ghost">Assign</button></div>
      </div>
      <div class="divider"></div>
      <div class="t-caption">Assigned to the project, no custodian. Unassigned assets are counted in project inventory but do not appear on any person's checklist.</div>
    </div>
  </div>

  <!-- Assignment matrix -->
  <div class="grid">
    <div class="c12 card p0">
      <div class="card-head">
        <div class="row s8"><span class="card-title">Assignment matrix — Project Alpha</span><span class="t-caption">8 custodians · 18 assets · 15 confirmed</span></div>
        <div class="row s8"><div class="seg sm"><button class="active">By person</button><button>By asset</button></div><button class="btn xs ghost"><i data-icon="download"></i>Export</button></div>
      </div>
      <div class="table-wrap">
        <table class="table">
          <thead><tr><th>Person</th><th>Role</th><th>Project</th><th>Assets</th><th>Custody confirmed</th><th class="num">Last scan</th><th></th></tr></thead>
          <tbody>
            <tr class="selected">
              <td><div class="cell-entity"><span class="avatar sm">AP</span><div><a class="strong" href="employee-detail.html">Andi Pratama</a><div class="sub">Employee 007</div></div></div></td>
              <td>Survey Engineer</td><td>Project Alpha</td>
              <td><div class="row s4 wrap"><span class="chip neutral sm">GPS-029</span><span class="chip neutral sm">MBES-001</span><span class="chip neutral sm">Laptop-SV029</span><span class="chip neutral sm">Radio-012</span></div></td>
              <td><span class="row s8 ok"><i data-icon="checkcircle" class="ic-16"></i><span class="num">4 / 4</span></span></td>
              <td class="num">15:41 · RD-11</td>
              <td class="actions"><button class="icon-btn" aria-label="More"><i data-icon="more"></i></button></td>
            </tr>
            <tr>
              <td><div class="cell-entity"><span class="avatar sm">FS</span><div><a class="strong" href="employee-detail.html">Fahmi Syaban</a><div class="sub">Employee 012</div></div></div></td>
              <td>Survey Engineer</td><td>Project Alpha</td>
              <td><div class="row s4 wrap"><span class="chip neutral sm">MBES-03</span><span class="chip neutral sm">GPS-14</span><span class="chip neutral sm">Radio-021</span></div></td>
              <td><span class="row s8 ok"><i data-icon="checkcircle" class="ic-16"></i><span class="num">3 / 3</span></span></td>
              <td class="num">15:37 · RD-11</td>
              <td class="actions"><button class="icon-btn" aria-label="More"><i data-icon="more"></i></button></td>
            </tr>
            <tr>
              <td><div class="cell-entity"><span class="avatar sm">RH</span><div><a class="strong" href="employee-detail.html">Rizky Hakim</a><div class="sub">Employee 024</div></div></div></td>
              <td>ROV Pilot</td><td>Project Alpha</td>
              <td><div class="row s4 wrap"><span class="chip neutral sm">ROV-T27-01</span><span class="chip neutral sm">Radio-018</span></div></td>
              <td><span class="row s8 ok"><i data-icon="checkcircle" class="ic-16"></i><span class="num">2 / 2</span></span></td>
              <td class="num">14:58 · RD-12</td>
              <td class="actions"><button class="icon-btn" aria-label="More"><i data-icon="more"></i></button></td>
            </tr>
            <tr>
              <td><div class="cell-entity"><span class="avatar sm">YF</span><div><a class="strong" href="employee-detail.html">Yoga Firmansyah</a><div class="sub">Employee 045</div></div></div></td>
              <td>Data Processor</td><td>Project Alpha</td>
              <td><div class="row s4 wrap"><span class="chip neutral sm">Laptop-SV031</span><span class="chip neutral sm">Radio-014</span></div></td>
              <td><span class="row s8"><span class="chip warn sm"><span class="dot warn"></span>Pending</span><span class="t-caption num">1 / 2 · Radio-014 unscanned</span></span></td>
              <td class="num">10:14 · RD-11</td>
              <td class="actions"><button class="btn xs ghost">Remind</button></td>
            </tr>
            <tr>
              <td><div class="cell-entity"><span class="avatar sm">BS</span><div><a class="strong" href="employee-detail.html">Bayu Setiawan</a><div class="sub">Employee 061</div></div></div></td>
              <td>ROV Technician</td><td>Project Alpha</td>
              <td><div class="row s4 wrap"><span class="chip neutral sm">ROV-T27-02</span><span class="chip neutral sm">Radio-019</span></div></td>
              <td><span class="row s8 ok"><i data-icon="checkcircle" class="ic-16"></i><span class="num">2 / 2</span></span></td>
              <td class="num">15:02 · RD-12</td>
              <td class="actions"><button class="icon-btn" aria-label="More"><i data-icon="more"></i></button></td>
            </tr>
            <tr>
              <td><div class="cell-entity"><span class="avatar sm">AS</span><div><a class="strong" href="employee-detail.html">Agus Setiawan</a><div class="sub">Employee 033</div></div></div></td>
              <td>Engineer</td><td>Project Alpha</td>
              <td><div class="row s4 wrap"><span class="chip neutral sm">PSU-02</span></div></td>
              <td><span class="row s8 ok"><i data-icon="checkcircle" class="ic-16"></i><span class="num">1 / 1</span></span></td>
              <td class="num">09:40 · RD-03</td>
              <td class="actions"><button class="icon-btn" aria-label="More"><i data-icon="more"></i></button></td>
            </tr>
            <tr>
              <td><div class="cell-entity"><span class="avatar sm">FN</span><div><a class="strong" href="employee-detail.html">Fajar Nugraha</a><div class="sub">Employee 078</div></div></div></td>
              <td>Geophysicist</td><td>Project Alpha</td>
              <td><div class="row s4 wrap"><span class="chip neutral sm">MAG-01</span></div></td>
              <td><span class="row s8"><span class="chip warn sm"><span class="dot warn"></span>Pending</span><span class="t-caption">assigned 15:31 by Ops Manager</span></span></td>
              <td class="num muted">—</td>
              <td class="actions"><button class="btn xs ghost">Remind</button></td>
            </tr>
            <tr>
              <td><div class="cell-entity"><span class="avatar sm">RH</span><div><a class="strong" href="employee-detail.html">Rudi Hartono</a><div class="sub">Employee 102</div></div></div></td>
              <td>Deck Technician</td><td>Project Alpha</td>
              <td><div class="row s4 wrap"><span class="chip neutral sm">Cable Set-05</span></div></td>
              <td><span class="row s8"><span class="chip warn sm"><span class="dot warn"></span>Pending</span><span class="t-caption">assigned 15:33 by Ops Manager</span></span></td>
              <td class="num muted">—</td>
              <td class="actions"><button class="btn xs ghost">Remind</button></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="table-foot"><span>Showing 8 custodians · 4 people without custody · 5 assets unassigned</span><a class="link" href="assets.html">Asset registry <i data-icon="arrowright" class="ic-14"></i></a></div>
    </div>
  </div>

  <!-- Relationship model -->
  <div class="grid">
    <div class="c12 card">
      <div class="card-head"><span class="card-title">Relationship model</span><span class="t-caption">Project-centric custody · brief §26</span></div>
      <div class="row s24 top wrap">
        <div class="flow" style="flex:0 0 420px;padding:8px 0">
          <div class="step done" style="flex:1"><span class="n"><i data-icon="user" class="ic-14"></i></span><span class="strong">Person</span><span class="t-caption">Andi Pratama</span></div>
          <div class="arrow done" style="margin-bottom:40px"></div>
          <div class="step done" style="flex:1"><span class="n"><i data-icon="clipboard" class="ic-14"></i></span><span class="strong">Project</span><span class="t-caption">Offshore Survey Alpha</span></div>
          <div class="arrow done" style="margin-bottom:40px"></div>
          <div class="step done" style="flex:1"><span class="n"><i data-icon="diamond" class="ic-14"></i></span><span class="strong">Asset</span><span class="t-caption">GPS-029 · 3 more</span></div>
        </div>
        <div class="grow" style="font-size:13px;color:var(--text-2);max-width:72ch;line-height:1.55">
          <p><b style="color:var(--text)">Custody always flows through the project.</b> A person is assigned to a project; an asset is assigned to the same project; only then can the asset be placed in that person's custody. An asset can be in one project and one person's custody at a time.</p>
          <p class="mt8"><b style="color:var(--text)">Confirmation is a scan, not a form.</b> Assignment by the Ops Manager creates a <span class="chip warn sm" style="vertical-align:middle">Pending</span> record; it becomes confirmed when the custodian scans the RFID tag in the mobile app or the tag is read by a reader while the person is inside the same geofence.</p>
          <p class="mt8"><b style="color:var(--text)">Reassign transfers, return releases.</b> Reassigning closes the previous custody record and opens a new one. An asset returned to the warehouse (RD-01) is released from both the person and the project and becomes Available.</p>
        </div>
      </div>
    </div>
  </div>`;
  }
});
