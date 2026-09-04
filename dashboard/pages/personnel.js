/* Converted from web/personnel.html — edit freely; delete "// converted" to mark as handwritten */
// converted
PN.page("personnel", {
  title: "Personnel",
  icon: "users",
  nav: "personnel",
  crumb: "Global / People / Personnel",
  render() {
    return `<div class="page-head">
    <div class="titles">
      <div class="eyebrow">People</div>
      <h1>Personnel</h1>
      <div class="sub">Mobilization, presence and safety — 128 on operation</div>
    </div>
    <div class="actions">
      <div class="seg sm"><button>Comfortable</button><button class="active">Default</button><button>Compact</button></div>
      <button class="btn ghost sm"><i data-icon="columns"></i>Columns</button>
      <button class="btn ghost sm"><i data-icon="download"></i>Export</button>
      <button class="btn primary sm"><i data-icon="link"></i>Assign to project</button>
    </div>
  </div>

  <!-- Filters -->
  <div class="filters">
    <div class="input sm" style="width:260px"><i data-icon="search"></i><input type="search" placeholder="Search name, ID or role" aria-label="Search personnel"></div>
    <div class="input sm select"><span>Project · All</span><i data-icon="chevrondown" class="chev"></i></div>
    <div class="input sm select"><span>Site · All</span><i data-icon="chevrondown" class="chev"></i></div>
    <div class="input sm select"><span>Vessel · All</span><i data-icon="chevrondown" class="chev"></i></div>
    <div class="input sm select"><span>Department · All</span><i data-icon="chevrondown" class="chev"></i></div>
    <div class="input sm select"><span>Status · All</span><i data-icon="chevrondown" class="chev"></i></div>
    <label class="row s8 ml-auto" style="font-size:13px;color:var(--text-2)"><span class="switch" role="switch" aria-checked="false"></span>Show offline only</label>
  </div>

  <!-- Status legend -->
  <div class="row s8 wrap">
    <span class="chip ok"><span class="dot ok"></span>Active <span class="num">128</span></span>
    <span class="chip info"><span class="dot info"></span>On Site <span class="num">96</span></span>
    <span class="chip info"><span class="dot info"></span>Offshore <span class="num">41</span></span>
    <span class="chip transit"><span class="dot transit"></span>In Transit <span class="num">12</span></span>
    <span class="chip off"><span class="dot off"></span>Offline <span class="num">7</span></span>
    <span class="chip crit"><span class="dot crit"></span>Alert <span class="num">2</span></span>
    <span class="t-caption ml-auto">Freshness: Live &lt; 1 min · Recent 1–5 · Stale 5–30 · Offline &gt; 30 min</span>
  </div>

  <!-- Registry table -->
  <div class="card p0">
    <div class="table-wrap">
      <table class="table">
        <thead>
          <tr>
            <th style="width:40px"><span class="checkbox" role="checkbox" aria-checked="false" aria-label="Select all"></span></th>
            <th class="sortable">Employee <i data-icon="chevronsupdown"></i></th>
            <th>Role</th>
            <th>Department</th>
            <th>Project</th>
            <th>Location</th>
            <th>Status</th>
            <th>Freshness</th>
            <th class="sortable num">Last update <i data-icon="arrowdown"></i></th>
            <th class="num">Battery</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><span class="checkbox" role="checkbox" aria-checked="false"></span></td>
            <td><div class="cell-entity"><span class="avatar">AP</span><div><a class="strong" href="employee-detail.html">Andi Pratama</a><div class="sub">PG-0107</div></div></div></td>
            <td>Surveyor</td><td>Survey</td><td><a href="project-detail.html">Project Alpha</a></td><td>MV PAGEO 02</td>
            <td><span class="chip ok sm"><span class="dot ok"></span>Active</span></td>
            <td><span class="fresh live"><b>LIVE</b>8 sec ago</span></td>
            <td class="num">15:42:31</td><td class="num">84%</td>
            <td class="actions"><button class="icon-btn" aria-label="More"><i data-icon="more"></i></button></td>
          </tr>
          <tr>
            <td><span class="checkbox" role="checkbox" aria-checked="false"></span></td>
            <td><div class="cell-entity"><span class="avatar" style="background:var(--s-crit-bg);color:var(--s-crit)">RH</span><div><a class="strong" href="employee-detail.html">Rizky Hakim</a><div class="sub">PG-0121</div></div></div></td>
            <td>ROV Pilot</td><td>ROV</td><td><a href="project-detail.html">Project Bravo</a></td><td>Offshore Site</td>
            <td><span class="chip crit sm"><span class="dot crit pulse"></span>Alert · SOS</span></td>
            <td><span class="fresh live"><b>LIVE</b>21 sec ago</span></td>
            <td class="num">15:41:52</td><td class="num">63%</td>
            <td class="actions"><button class="icon-btn" aria-label="More"><i data-icon="more"></i></button></td>
          </tr>
          <tr>
            <td><span class="checkbox" role="checkbox" aria-checked="false"></span></td>
            <td><div class="cell-entity"><span class="avatar">AS</span><div><a class="strong" href="employee-detail.html">Agus Setiawan</a><div class="sub">PG-0098</div></div></div></td>
            <td>Engineer</td><td>Engineering</td><td><a href="project-detail.html">Project Alpha</a></td><td>Warehouse · Base</td>
            <td><span class="chip warn sm"><span class="dot warn"></span>Idle</span></td>
            <td><span class="fresh recent"><b>RECENT</b>3 min ago</span></td>
            <td class="num">15:39:04</td><td class="num">91%</td>
            <td class="actions"><button class="icon-btn" aria-label="More"><i data-icon="more"></i></button></td>
          </tr>
          <tr>
            <td><span class="checkbox" role="checkbox" aria-checked="false"></span></td>
            <td><div class="cell-entity"><span class="avatar" style="background:var(--s-offline-bg);color:var(--s-offline)">BS</span><div><a class="strong" href="employee-detail.html">Budi Santoso</a><div class="sub">PG-0133</div></div></div></td>
            <td>Technician</td><td>Maintenance</td><td><a href="project-detail.html">Project Charlie</a></td><td class="faint">—</td>
            <td><span class="chip off sm"><span class="dot off"></span>Offline</span></td>
            <td><span class="fresh offline"><b>OFFLINE</b>1h 22m</span></td>
            <td class="num">14:20:11</td><td class="num faint">—</td>
            <td class="actions"><button class="icon-btn" aria-label="More"><i data-icon="more"></i></button></td>
          </tr>
          <tr>
            <td><span class="checkbox" role="checkbox" aria-checked="false"></span></td>
            <td><div class="cell-entity"><span class="avatar">FS</span><div><a class="strong" href="employee-detail.html">Fahmi Syaban</a><div class="sub">PG-0142</div></div></div></td>
            <td>Survey Engineer</td><td>Survey</td><td><a href="project-detail.html">Project Alpha</a></td><td>MV PAGEO 02</td>
            <td><span class="chip ok sm"><span class="dot ok"></span>Active</span></td>
            <td><span class="fresh live"><b>LIVE</b>12 sec ago</span></td>
            <td class="num">15:42:16</td><td class="num">72%</td>
            <td class="actions"><button class="icon-btn" aria-label="More"><i data-icon="more"></i></button></td>
          </tr>
          <tr>
            <td><span class="checkbox" role="checkbox" aria-checked="false"></span></td>
            <td><div class="cell-entity"><span class="avatar">DL</span><div><a class="strong" href="employee-detail.html">Dewi Lestari</a><div class="sub">PG-0156</div></div></div></td>
            <td>Data Processor</td><td>Survey</td><td><a href="project-detail.html">Project Alpha</a></td><td>MV PAGEO 02</td>
            <td><span class="chip ok sm"><span class="dot ok"></span>Active</span></td>
            <td><span class="fresh live"><b>LIVE</b>30 sec ago</span></td>
            <td class="num">15:41:58</td><td class="num">58%</td>
            <td class="actions"><button class="icon-btn" aria-label="More"><i data-icon="more"></i></button></td>
          </tr>
          <tr>
            <td><span class="checkbox" role="checkbox" aria-checked="false"></span></td>
            <td><div class="cell-entity"><span class="avatar">HW</span><div><a class="strong" href="employee-detail.html">Hendra Wijaya</a><div class="sub">PG-0088</div></div></div></td>
            <td>Party Chief</td><td>Survey</td><td><a href="project-detail.html">Project Bravo</a></td><td>MV PAGEO 01</td>
            <td><span class="chip info sm"><span class="dot info"></span>Offshore</span></td>
            <td><span class="fresh live"><b>LIVE</b>15 sec ago</span></td>
            <td class="num">15:42:13</td><td class="num">77%</td>
            <td class="actions"><button class="icon-btn" aria-label="More"><i data-icon="more"></i></button></td>
          </tr>
          <tr>
            <td><span class="checkbox" role="checkbox" aria-checked="false"></span></td>
            <td><div class="cell-entity"><span class="avatar">PR</span><div><a class="strong" href="employee-detail.html">Putri Ayu Rahmawati</a><div class="sub">PG-0171</div></div></div></td>
            <td>QHSE Officer</td><td>QHSE</td><td><a href="project-detail.html">Project Charlie</a></td><td>Port Tanjung Priok</td>
            <td><span class="chip info sm"><span class="dot info"></span>On Site</span></td>
            <td><span class="fresh recent"><b>RECENT</b>2 min ago</span></td>
            <td class="num">15:40:20</td><td class="num">88%</td>
            <td class="actions"><button class="icon-btn" aria-label="More"><i data-icon="more"></i></button></td>
          </tr>
          <tr>
            <td><span class="checkbox" role="checkbox" aria-checked="false"></span></td>
            <td><div class="cell-entity"><span class="avatar" style="background:var(--s-crit-bg);color:var(--s-crit)">DP</span><div><a class="strong" href="employee-detail.html">Dimas Prasetyo</a><div class="sub">PG-0115</div></div></div></td>
            <td>Survey Technician</td><td>Survey</td><td><a href="project-detail.html">Project Alpha</a></td><td>Outside work area</td>
            <td><span class="chip crit sm"><span class="dot crit"></span>Alert · Zone</span></td>
            <td><span class="fresh stale"><b>STALE</b>27 min ago</span></td>
            <td class="num">15:15:40</td><td class="num">41%</td>
            <td class="actions"><button class="icon-btn" aria-label="More"><i data-icon="more"></i></button></td>
          </tr>
          <tr>
            <td><span class="checkbox" role="checkbox" aria-checked="false"></span></td>
            <td><div class="cell-entity"><span class="avatar">YF</span><div><a class="strong" href="employee-detail.html">Yoga Firmansyah</a><div class="sub">PG-0163</div></div></div></td>
            <td>ROV Technician</td><td>ROV</td><td><a href="project-detail.html">Project Bravo</a></td><td>MV PAGEO 01</td>
            <td><span class="chip info sm"><span class="dot info"></span>Offshore</span></td>
            <td><span class="fresh live"><b>LIVE</b>9 sec ago</span></td>
            <td class="num">15:42:29</td><td class="num">69%</td>
            <td class="actions"><button class="icon-btn" aria-label="More"><i data-icon="more"></i></button></td>
          </tr>
          <tr>
            <td><span class="checkbox" role="checkbox" aria-checked="false"></span></td>
            <td><div class="cell-entity"><span class="avatar">SN</span><div><a class="strong" href="employee-detail.html">Siti Nurhaliza</a><div class="sub">PG-0179</div></div></div></td>
            <td>Logistics Coordinator</td><td>Logistics</td><td><a href="project-detail.html">Base Jakarta</a></td><td>PAGEO Base</td>
            <td><span class="chip info sm"><span class="dot info"></span>On Site</span></td>
            <td><span class="fresh recent"><b>RECENT</b>4 min ago</span></td>
            <td class="num">15:38:33</td><td class="num">95%</td>
            <td class="actions"><button class="icon-btn" aria-label="More"><i data-icon="more"></i></button></td>
          </tr>
          <tr>
            <td><span class="checkbox" role="checkbox" aria-checked="false"></span></td>
            <td><div class="cell-entity"><span class="avatar">RK</span><div><a class="strong" href="employee-detail.html">Rendi Kurniawan</a><div class="sub">PG-0124</div></div></div></td>
            <td>Geotechnical Engineer</td><td>Engineering</td><td><a href="project-detail.html">Project Echo</a></td><td>Port Tanjung Priok</td>
            <td><span class="chip transit sm"><span class="dot transit"></span>In Transit</span></td>
            <td><span class="fresh recent"><b>RECENT</b>1 min ago</span></td>
            <td class="num">15:41:10</td><td class="num">52%</td>
            <td class="actions"><button class="icon-btn" aria-label="More"><i data-icon="more"></i></button></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="table-foot">
      <span>Showing 1–12 of 128</span>
      <div class="row s12">
        <span>Rows <span class="strong">12</span></span>
        <div class="pager"><button aria-label="Previous"><i data-icon="chevronleft" class="ic-14"></i></button><button class="active">1</button><button>2</button><button>3</button><button>…</button><button>11</button><button aria-label="Next"><i data-icon="chevronright" class="ic-14"></i></button></div>
      </div>
    </div>
  </div>`;
  }
});
