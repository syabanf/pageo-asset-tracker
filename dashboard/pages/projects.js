/* Converted from web/projects.html — edit freely; delete "// converted" to mark as handwritten */
// converted
PN.page("projects", {
  title: "Projects",
  icon: "clipboard",
  nav: "projects",
  crumb: "Global / Operations / Projects",
  render() {
    return `<div class="page-head">
    <div class="titles">
      <div class="eyebrow">Operations</div>
      <h1>Projects</h1>
      <div class="sub">Project is the center of the data model — personnel, assets, vessels and alerts roll up to it</div>
    </div>
    <div class="actions">
      <button class="btn ghost sm"><i data-icon="download"></i>Export</button>
      <button class="btn primary sm"><i data-icon="plus"></i>New project</button>
    </div>
  </div>

  <!-- Filters -->
  <div class="filters">
    <div class="input sm" style="width:260px"><i data-icon="search"></i><input type="search" placeholder="Search project, client or vessel" aria-label="Search projects"></div>
    <div class="input sm select"><span>Status · All</span><i data-icon="chevrondown" class="chev"></i></div>
    <div class="input sm select"><span>Type · All</span><i data-icon="chevrondown" class="chev"></i></div>
    <div class="input sm select"><span>Vessel · All</span><i data-icon="chevrondown" class="chev"></i></div>
    <div class="input sm select"><span>Site · All</span><i data-icon="chevrondown" class="chev"></i></div>
    <div class="input sm select"><i data-icon="calendar"></i><span>Sep 2026</span><i data-icon="chevrondown" class="chev"></i></div>
    <div class="seg sm ml-auto"><button class="active">Active</button><button>Planned</button><button>Closed</button><button>All</button></div>
  </div>

  <!-- KPI strip -->
  <div class="grid kpis g16" style="grid-template-columns:repeat(4,minmax(0,1fr))">
    <div class="card kpi compact p16">
      <div class="eyebrow">Active projects</div>
      <div class="kpi-value">7</div>
      <div class="kpi-lines"><span><span class="dot ok"></span>&nbsp;<span class="num">1</span>planned · starts 22 Sep</span></div>
    </div>
    <div class="card kpi compact p16">
      <div class="eyebrow">Offshore</div>
      <div class="kpi-value">3</div>
      <div class="kpi-lines"><span><span class="dot info"></span>&nbsp;<span class="num">53</span>personnel on vessels</span></div>
    </div>
    <div class="card kpi compact p16">
      <div class="eyebrow">Onshore</div>
      <div class="kpi-value">4</div>
      <div class="kpi-lines"><span><span class="dot warn"></span>&nbsp;<span class="num">1</span>mobilizing · <span class="num" style="min-width:0">1</span>demobilizing</span></div>
    </div>
    <div class="card kpi compact alert p16">
      <div class="eyebrow">Open alerts</div>
      <div class="kpi-value">1</div>
      <div class="kpi-lines"><span><span class="dot crit"></span>&nbsp;<span class="num">1</span>P2 · Project Alpha</span></div>
    </div>
  </div>

  <!-- Registry table -->
  <div class="card p0">
    <div class="table-wrap">
      <table class="table">
        <thead>
          <tr>
            <th class="sortable">Project <i data-icon="chevronsupdown"></i></th>
            <th>Status</th>
            <th>Vessel</th>
            <th>Site</th>
            <th class="num">Personnel</th>
            <th class="num">Assets</th>
            <th class="num">Open alerts</th>
            <th>Start – End</th>
            <th class="sortable">Last activity <i data-icon="arrowdown"></i></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><div class="cell-entity"><span class="entity-tile" style="padding:0;border:0;background:none"><span class="sym"><i data-icon="waves"></i></span></span><div><a class="strong" href="project-detail.html">Project Alpha</a><div class="sub">Offshore Construction Survey</div></div></div></td>
            <td><span class="chip info sm"><span class="dot info"></span>Offshore</span></td>
            <td>MV PAGEO 02</td>
            <td>Offshore Work Area · Java Sea</td>
            <td class="num">24 / 26</td>
            <td class="num">47</td>
            <td class="num"><span class="sev p2">1</span></td>
            <td class="tnum">04 Sep – 18 Sep 2026</td>
            <td class="tnum">15:42</td>
            <td class="actions"><button class="icon-btn" aria-label="More"><i data-icon="more"></i></button></td>
          </tr>
          <tr>
            <td><div class="cell-entity"><span class="entity-tile" style="padding:0;border:0;background:none"><span class="sym"><i data-icon="waves"></i></span></span><div><a class="strong" href="project-detail.html">Project Bravo</a><div class="sub">Pipeline Inspection ROV</div></div></div></td>
            <td><span class="chip info sm"><span class="dot info"></span>Offshore</span></td>
            <td>MV PAGEO 01</td>
            <td>Pipeline KP 12 – 48</td>
            <td class="num">18 / 18</td>
            <td class="num">31</td>
            <td class="num faint">0</td>
            <td class="tnum">28 Aug – 12 Sep 2026</td>
            <td class="tnum">15:41</td>
            <td class="actions"><button class="icon-btn" aria-label="More"><i data-icon="more"></i></button></td>
          </tr>
          <tr>
            <td><div class="cell-entity"><span class="entity-tile" style="padding:0;border:0;background:none"><span class="sym"><i data-icon="anchor"></i></span></span><div><a class="strong" href="project-detail.html">Project Charlie</a><div class="sub">Port Bathymetry</div></div></div></td>
            <td><span class="chip warn sm"><span class="dot warn"></span>Mobilizing</span></td>
            <td class="faint">—</td>
            <td>Tanjung Priok</td>
            <td class="num">9 / 12</td>
            <td class="num">22</td>
            <td class="num faint">0</td>
            <td class="tnum">05 Sep – 11 Sep 2026</td>
            <td class="tnum">15:22</td>
            <td class="actions"><button class="icon-btn" aria-label="More"><i data-icon="more"></i></button></td>
          </tr>
          <tr>
            <td><div class="cell-entity"><span class="entity-tile" style="padding:0;border:0;background:none"><span class="sym"><i data-icon="layers"></i></span></span><div><a class="strong" href="project-detail.html">Project Delta</a><div class="sub">Geotechnical Site Investigation</div></div></div></td>
            <td><span class="chip unknown sm"><span class="dot unknown"></span>Planned</span></td>
            <td>MV PAGEO 03</td>
            <td>Natuna Block B</td>
            <td class="num">0 / 14</td>
            <td class="num">12</td>
            <td class="num faint">0</td>
            <td class="tnum">22 Sep – 20 Oct 2026</td>
            <td class="tnum">02 Sep</td>
            <td class="actions"><button class="icon-btn" aria-label="More"><i data-icon="more"></i></button></td>
          </tr>
          <tr>
            <td><div class="cell-entity"><span class="entity-tile" style="padding:0;border:0;background:none"><span class="sym"><i data-icon="route"></i></span></span><div><a class="strong" href="project-detail.html">Project Echo</a><div class="sub">Cable Route Survey</div></div></div></td>
            <td><span class="chip transit sm"><span class="dot transit"></span>Demobilizing</span></td>
            <td>MV PAGEO 03</td>
            <td>Tanjung Priok</td>
            <td class="num">14 / 14</td>
            <td class="num">29</td>
            <td class="num faint">0</td>
            <td class="tnum">11 Aug – 05 Sep 2026</td>
            <td class="tnum">15:30</td>
            <td class="actions"><button class="icon-btn" aria-label="More"><i data-icon="more"></i></button></td>
          </tr>
          <tr>
            <td><div class="cell-entity"><span class="entity-tile" style="padding:0;border:0;background:none"><span class="sym"><i data-icon="crosshair"></i></span></span><div><a class="strong" href="project-detail.html">Project Foxtrot</a><div class="sub">Jetty Positioning</div></div></div></td>
            <td><span class="chip ok sm"><span class="dot ok"></span>Onshore</span></td>
            <td class="faint">—</td>
            <td>Cilegon Jetty 2</td>
            <td class="num">6 / 6</td>
            <td class="num">9</td>
            <td class="num faint">0</td>
            <td class="tnum">01 Sep – 09 Sep 2026</td>
            <td class="tnum">15:38</td>
            <td class="actions"><button class="icon-btn" aria-label="More"><i data-icon="more"></i></button></td>
          </tr>
          <tr>
            <td><div class="cell-entity"><span class="entity-tile" style="padding:0;border:0;background:none"><span class="sym"><i data-icon="waves"></i></span></span><div><a class="strong" href="project-detail.html">Project Golf</a><div class="sub">Subsea Inspection</div></div></div></td>
            <td><span class="chip info sm"><span class="dot info"></span>Offshore</span></td>
            <td>MV Bina Marine 71</td>
            <td>Madura Strait Platform C</td>
            <td class="num">11 / 12</td>
            <td class="num">19</td>
            <td class="num faint">0</td>
            <td class="tnum">30 Aug – 14 Sep 2026</td>
            <td class="tnum">15:40</td>
            <td class="actions"><button class="icon-btn" aria-label="More"><i data-icon="more"></i></button></td>
          </tr>
          <tr>
            <td><div class="cell-entity"><span class="entity-tile" style="padding:0;border:0;background:none"><span class="sym"><i data-icon="building"></i></span></span><div><a class="strong" href="project-detail.html">Base Jakarta</a><div class="sub">Warehouse &amp; workshop</div></div></div></td>
            <td><span class="chip ok sm"><span class="dot ok"></span>Onshore</span></td>
            <td class="faint">—</td>
            <td>PAGEO Base · Jakarta</td>
            <td class="num">38 / 38</td>
            <td class="num">481</td>
            <td class="num faint">0</td>
            <td class="tnum">Permanent</td>
            <td class="tnum">15:42</td>
            <td class="actions"><button class="icon-btn" aria-label="More"><i data-icon="more"></i></button></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="table-foot">
      <span>Showing 1–8 of 8 projects · <span class="num">120</span> personnel expected · <span class="num">650</span> assets assigned</span>
      <div class="pager"><button aria-label="Previous"><i data-icon="chevronleft" class="ic-14"></i></button><button class="active">1</button><button aria-label="Next"><i data-icon="chevronright" class="ic-14"></i></button></div>
    </div>
  </div>`;
  }
});
