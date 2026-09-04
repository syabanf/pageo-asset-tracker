/* Converted from web/reports.html — edit freely; delete "// converted" to mark as handwritten */
// converted
PN.page("reports", {
  title: "Reports",
  icon: "file",
  nav: "reports",
  crumb: "Global / Reporting / Reports",
  render() {
    return `<div class="page-head">
    <div class="titles">
      <div class="eyebrow">Reporting</div>
      <h1>Reports</h1>
      <div class="sub">Personnel, asset and QHSE reporting · 19 reports · 5 scheduled</div>
    </div>
    <div class="actions">
      <button class="btn ghost sm"><i data-icon="calendar"></i>Schedule report</button>
      <button class="btn primary sm"><i data-icon="download"></i>Export</button>
    </div>
  </div>

  <div class="grid">
    <!-- Catalogue -->
    <div class="c3 card p0">
      <div class="card-head"><span class="card-title">Catalogue</span><span class="t-caption">19</span></div>
      <div style="padding:8px 0 12px">
        <div class="eyebrow" style="padding:8px 20px 4px">Personnel</div>
        <a class="row s8" href="#" style="padding:6px 20px;font-size:13px;color:var(--text)"><i data-icon="users" class="ic-14 faint"></i>Personnel by project</a>
        <a class="row s8" href="#" style="padding:6px 20px;font-size:13px;color:var(--text)"><i data-icon="clock" class="ic-14 faint"></i>Attendance / operation history</a>
        <a class="row s8" href="#" style="padding:6px 20px;font-size:13px;color:var(--text)"><i data-icon="history" class="ic-14 faint"></i>Work-hour history</a>
        <a class="row s8" href="#" style="padding:6px 20px;font-size:13px;color:var(--text)"><i data-icon="ship" class="ic-14 faint"></i>Offshore personnel history</a>
        <a class="row s8" href="#" style="padding:6px 20px;font-size:13px;color:var(--text)"><i data-icon="pin" class="ic-14 faint"></i>Location history</a>
        <a class="row s8" href="#" style="padding:6px 20px;font-size:13px;color:var(--text)"><i data-icon="truck" class="ic-14 faint"></i>Project mobilization history</a>
        <div class="divider" style="margin:8px 20px"></div>
        <div class="eyebrow" style="padding:8px 20px 4px">Asset</div>
        <a class="row s8" href="#" style="padding:6px 20px;font-size:13px;color:var(--accent-2);background:var(--accent-bg);font-weight:500;border-left:3px solid var(--accent);padding-left:17px"><i data-icon="gauge" class="ic-14"></i>Asset utilization</a>
        <a class="row s8" href="#" style="padding:6px 20px;font-size:13px;color:var(--text)"><i data-icon="route" class="ic-14 faint"></i>Asset movement</a>
        <a class="row s8" href="#" style="padding:6px 20px;font-size:13px;color:var(--text)"><i data-icon="link" class="ic-14 faint"></i>Equipment assigned per project</a>
        <a class="row s8" href="#" style="padding:6px 20px;font-size:13px;color:var(--text)"><i data-icon="clock" class="ic-14 faint"></i>Asset dwell time</a>
        <a class="row s8" href="#" style="padding:6px 20px;font-size:13px;color:var(--text)"><i data-icon="alert" class="ic-14 faint"></i>Missing assets</a>
        <a class="row s8" href="#" style="padding:6px 20px;font-size:13px;color:var(--text)"><i data-icon="swap" class="ic-14 faint"></i>Asset transfer</a>
        <a class="row s8" href="#" style="padding:6px 20px;font-size:13px;color:var(--text)"><i data-icon="box" class="ic-14 faint"></i>Asset inventory</a>
        <a class="row s8" href="#" style="padding:6px 20px;font-size:13px;color:var(--text)"><i data-icon="wrench" class="ic-14 faint"></i>Calibration &amp; maintenance due</a>
        <div class="divider" style="margin:8px 20px"></div>
        <div class="eyebrow" style="padding:8px 20px 4px">QHSE</div>
        <a class="row s8" href="#" style="padding:6px 20px;font-size:13px;color:var(--text)"><i data-icon="siren" class="ic-14 faint"></i>SOS history</a>
        <a class="row s8" href="#" style="padding:6px 20px;font-size:13px;color:var(--text)"><i data-icon="warning" class="ic-14 faint"></i>Restricted-area incidents</a>
        <a class="row s8" href="#" style="padding:6px 20px;font-size:13px;color:var(--text)"><i data-icon="flag" class="ic-14 faint"></i>Muster reports</a>
        <a class="row s8" href="#" style="padding:6px 20px;font-size:13px;color:var(--text)"><i data-icon="shield" class="ic-14 faint"></i>Safety violations</a>
        <a class="row s8" href="#" style="padding:6px 20px;font-size:13px;color:var(--text)"><i data-icon="smartphone" class="ic-14 faint"></i>Tracking-device availability</a>
      </div>
    </div>

    <!-- Report view -->
    <div class="c9 card">
      <div class="card-head">
        <div><span class="card-title">Asset utilization — Aug 2026</span><div class="t-caption">Deployed-days ÷ available-days per asset · excludes assets in maintenance</div></div>
        <div class="row s8"><button class="btn sm primary"><i data-icon="play"></i>Run</button><button class="btn sm ghost"><i data-icon="download"></i>Export</button></div>
      </div>
      <div class="filters">
        <div class="input select sm" style="width:210px"><i data-icon="calendar"></i><span>01 Aug – 31 Aug 2026</span><i data-icon="chevrondown" class="chev"></i></div>
        <div class="input select sm" style="width:160px"><i data-icon="clipboard"></i><span>Project · All</span><i data-icon="chevrondown" class="chev"></i></div>
        <div class="input select sm" style="width:160px"><i data-icon="tag"></i><span>Category · All</span><i data-icon="chevrondown" class="chev"></i></div>
        <span class="ml-auto t-caption">Last run 04 Sep 15:02 · 684 assets · 31 days</span>
      </div>

      <div class="kpi-row">
        <div class="card kpi compact tinted"><div class="eyebrow">Utilization</div><div class="kpi-value">61<small>%</small></div><div class="kpi-lines"><span class="delta"><i data-icon="arrowup" class="ic-14"></i>4 pts vs Jul</span></div></div>
        <div class="card kpi compact tinted"><div class="eyebrow">Deployed-days</div><div class="kpi-value">4,212</div><div class="kpi-lines"><span>of 6,905 available</span></div></div>
        <div class="card kpi compact tinted"><div class="eyebrow">Idle assets</div><div class="kpi-value">118</div><div class="kpi-lines"><span>0 deployed-days in Aug</span></div></div>
        <div class="card kpi compact tinted"><div class="eyebrow">Avg dwell at base</div><div class="kpi-value">6.2<small>d</small></div><div class="kpi-lines"><span>between deployments</span></div></div>
      </div>

      <div class="grid g16">
        <div class="c5">
          <div class="row between"><span class="eyebrow">Utilization by category</span><span class="t-caption">Aug</span></div>
          <div class="hbars mt8">
            <div class="hb"><span>Survey</span><div class="track"><i class="s4" style="width:78%"></i></div><span class="val">78%</span></div>
            <div class="hb"><span>ROV</span><div class="track"><i class="s4" style="width:71%"></i></div><span class="val">71%</span></div>
            <div class="hb"><span>Positioning</span><div class="track"><i style="width:64%"></i></div><span class="val">64%</span></div>
            <div class="hb"><span>IT</span><div class="track"><i class="s3" style="width:55%"></i></div><span class="val">55%</span></div>
            <div class="hb"><span>Comms</span><div class="track"><i class="s2" style="width:42%"></i></div><span class="val">42%</span></div>
            <div class="hb"><span>Power</span><div class="track"><i class="s2" style="width:38%"></i></div><span class="val">38%</span></div>
          </div>
        </div>
        <div class="c7">
          <div class="row between"><span class="eyebrow">Deployed assets per day</span><span class="t-caption">Peak 226 · 22 Aug</span></div>
          <div class="bars mt8" style="gap:3px">
            <div class="bar s3" style="height:62%"></div><div class="bar s3" style="height:58%"></div><div class="bar s4" style="height:55%"></div><div class="bar s4" style="height:70%"></div><div class="bar s5" style="height:74%"></div><div class="bar s5" style="height:78%"></div><div class="bar s5" style="height:66%"></div>
            <div class="bar s3" style="height:48%"></div><div class="bar s3" style="height:52%"></div><div class="bar s5" style="height:80%"></div><div class="bar s5" style="height:84%"></div><div class="bar s6" style="height:88%"></div><div class="bar s6" style="height:90%"></div><div class="bar s6" style="height:86%"></div>
            <div class="bar s4" style="height:72%"></div><div class="bar s3" style="height:60%"></div><div class="bar s2" style="height:44%"></div><div class="bar s3" style="height:50%"></div><div class="bar s5" style="height:76%"></div><div class="bar s5" style="height:82%"></div><div class="bar s6" style="height:92%"></div>
            <div class="bar s6" style="height:95%"></div><div class="bar s6" style="height:91%"></div><div class="bar s6" style="height:84%"></div><div class="bar s4" style="height:70%"></div><div class="bar s3" style="height:58%"></div><div class="bar s2" style="height:46%"></div><div class="bar s4" style="height:64%"></div>
            <div class="bar s5" style="height:78%"></div><div class="bar s6" style="height:86%"></div><div class="bar s6" style="height:88%"></div>
          </div>
          <div class="bar-labels"><span>01 Aug</span><span>08 Aug</span><span>15 Aug</span><span>22 Aug</span><span>29 Aug</span></div>
          <div class="legend mt8"><span><i style="background:var(--seq-2)"></i>&lt; 120</span><span><i style="background:var(--seq-3)"></i>120–150</span><span><i style="background:var(--seq-4)"></i>150–180</span><span><i style="background:var(--seq-5)"></i>180–210</span><span><i style="background:var(--seq-6)"></i>&gt; 210</span></div>
        </div>
      </div>

      <div class="divider"></div>
      <div class="row between"><span class="eyebrow">Utilization by asset</span><div class="row s8"><div class="input sm" style="width:200px"><i data-icon="search"></i><input placeholder="Filter assets"></div><div class="seg sm"><button class="active">Highest</button><button>Lowest</button></div></div></div>
      <div class="table-wrap" style="margin:0 -20px">
        <table class="table compact">
          <thead><tr><th style="padding-left:20px">Asset</th><th>Category</th><th class="num">Deployed days</th><th class="num">Idle days</th><th>Projects</th><th style="width:220px;padding-right:20px">Utilization</th></tr></thead>
          <tbody>
            <tr><td style="padding-left:20px"><b><a href="asset-detail.html">MBES-03</a></b></td><td>Survey</td><td class="num">29</td><td class="num">2</td><td>Alpha</td><td style="padding-right:20px"><span class="row s8"><span class="progress grow"><i style="width:94%"></i></span><span class="num" style="min-width:36px;text-align:right">94%</span></span></td></tr>
            <tr><td style="padding-left:20px"><b><a href="asset-detail.html">ROV-T27-04</a></b></td><td>ROV</td><td class="num">28</td><td class="num">3</td><td>Bravo · Alpha</td><td style="padding-right:20px"><span class="row s8"><span class="progress grow"><i style="width:90%"></i></span><span class="num" style="min-width:36px;text-align:right">90%</span></span></td></tr>
            <tr><td style="padding-left:20px"><b><a href="asset-detail.html">GPS-042</a></b></td><td>Positioning</td><td class="num">27</td><td class="num">4</td><td>Alpha</td><td style="padding-right:20px"><span class="row s8"><span class="progress grow"><i style="width:87%"></i></span><span class="num" style="min-width:36px;text-align:right">87%</span></span></td></tr>
            <tr><td style="padding-left:20px"><b><a href="asset-detail.html">Gyro-01</a></b></td><td>Positioning</td><td class="num">26</td><td class="num">5</td><td>Alpha</td><td style="padding-right:20px"><span class="row s8"><span class="progress grow"><i style="width:84%"></i></span><span class="num" style="min-width:36px;text-align:right">84%</span></span></td></tr>
            <tr><td style="padding-left:20px"><b><a href="asset-detail.html">MBES-001</a></b></td><td>Survey</td><td class="num">24</td><td class="num">7</td><td>Charlie · Alpha</td><td style="padding-right:20px"><span class="row s8"><span class="progress grow"><i style="width:77%"></i></span><span class="num" style="min-width:36px;text-align:right">77%</span></span></td></tr>
            <tr><td style="padding-left:20px"><b><a href="asset-detail.html">Cable Set-07</a></b></td><td>Survey</td><td class="num">22</td><td class="num">9</td><td>Alpha</td><td style="padding-right:20px"><span class="row s8"><span class="progress grow"><i style="width:71%"></i></span><span class="num" style="min-width:36px;text-align:right">71%</span></span></td></tr>
            <tr><td style="padding-left:20px"><b><a href="asset-detail.html">Laptop-SV029</a></b></td><td>IT</td><td class="num">20</td><td class="num">11</td><td>Alpha · Charlie</td><td style="padding-right:20px"><span class="row s8"><span class="progress grow"><i style="width:65%"></i></span><span class="num" style="min-width:36px;text-align:right">65%</span></span></td></tr>
            <tr><td style="padding-left:20px"><b><a href="asset-detail.html">GPS-029</a></b></td><td>Positioning</td><td class="num">18</td><td class="num">13</td><td>Charlie</td><td style="padding-right:20px"><span class="row s8"><span class="progress grow"><i style="width:58%"></i></span><span class="num" style="min-width:36px;text-align:right">58%</span></span></td></tr>
            <tr><td style="padding-left:20px"><b><a href="asset-detail.html">Radio-012</a></b></td><td>Comms</td><td class="num">16</td><td class="num">15</td><td>Alpha</td><td style="padding-right:20px"><span class="row s8"><span class="progress grow"><i style="width:52%"></i></span><span class="num" style="min-width:36px;text-align:right">52%</span></span></td></tr>
            <tr><td style="padding-left:20px"><b><a href="asset-detail.html">GPS-14</a></b></td><td>Positioning</td><td class="num">12</td><td class="num">19</td><td>Bravo</td><td style="padding-right:20px"><span class="row s8"><span class="progress warn grow"><i style="width:39%"></i></span><span class="num" style="min-width:36px;text-align:right">39%</span></span></td></tr>
            <tr><td style="padding-left:20px"><b><a href="asset-detail.html">Radio-021</a></b></td><td>Comms</td><td class="num">9</td><td class="num">22</td><td>Charlie</td><td style="padding-right:20px"><span class="row s8"><span class="progress warn grow"><i style="width:29%"></i></span><span class="num" style="min-width:36px;text-align:right">29%</span></span></td></tr>
            <tr><td style="padding-left:20px"><b><a href="asset-detail.html">Battery Pack-04</a></b></td><td>Power</td><td class="num">4</td><td class="num">27</td><td>Alpha</td><td style="padding-right:20px"><span class="row s8"><span class="progress warn grow"><i style="width:13%"></i></span><span class="num" style="min-width:36px;text-align:right">13%</span></span></td></tr>
          </tbody>
        </table>
      </div>
      <div class="row between"><span class="t-caption">Showing 12 of 684 assets</span><div class="pager"><button>‹</button><button class="active">1</button><button>2</button><button>3</button><button>…</button><button>57</button><button>›</button></div></div>
    </div>
  </div>

  <!-- Scheduled -->
  <div class="grid">
    <div class="c12 card p0">
      <div class="card-head"><span class="card-title">Scheduled reports</span><button class="btn xs ghost"><i data-icon="plus"></i>New schedule</button></div>
      <div class="table-wrap">
        <table class="table">
          <thead><tr><th>Report</th><th>Schedule</th><th>Recipients</th><th>Format</th><th>Last run</th><th>Status</th><th class="actions"></th></tr></thead>
          <tbody>
            <tr><td><b>Personnel by project</b><div class="t-caption">All projects · daily snapshot</div></td><td>Daily · 06:00 WIB</td><td>Operations Manager · Project Managers (3)</td><td>PDF</td><td>04 Sep 06:00</td><td><span class="chip ok sm"><span class="dot ok"></span>Sent</span></td><td class="actions"><button class="icon-btn" aria-label="More"><i data-icon="morev"></i></button></td></tr>
            <tr><td><b>Asset utilization</b><div class="t-caption">All categories · monthly</div></td><td>Monthly · 1st · 07:00</td><td>Management · Asset Manager</td><td>XLSX</td><td>01 Sep 07:00</td><td><span class="chip ok sm"><span class="dot ok"></span>Sent</span></td><td class="actions"><button class="icon-btn" aria-label="More"><i data-icon="morev"></i></button></td></tr>
            <tr><td><b>Calibration &amp; maintenance due</b><div class="t-caption">Next 30 days</div></td><td>Weekly · Mon · 07:30</td><td>Warehouse · Asset Manager</td><td>XLSX</td><td>31 Aug 07:30</td><td><span class="chip ok sm"><span class="dot ok"></span>Sent</span></td><td class="actions"><button class="icon-btn" aria-label="More"><i data-icon="morev"></i></button></td></tr>
            <tr><td><b>SOS history</b><div class="t-caption">QHSE weekly review</div></td><td>Weekly · Fri · 16:00</td><td>QHSE · Management</td><td>PDF</td><td>28 Aug 16:00</td><td><span class="chip info sm"><span class="dot info"></span>Due today</span></td><td class="actions"><button class="icon-btn" aria-label="More"><i data-icon="morev"></i></button></td></tr>
            <tr><td><b>Tracking-device availability</b><div class="t-caption">Mobile + readers</div></td><td>Daily · 18:00 WIB</td><td>Operations Manager</td><td>CSV</td><td>03 Sep 18:00</td><td><span class="chip warn sm"><span class="dot warn"></span>Delivery failed</span></td><td class="actions"><button class="icon-btn" aria-label="More"><i data-icon="morev"></i></button></td></tr>
          </tbody>
        </table>
      </div>
      <div class="table-foot"><span>5 schedules · timezone Asia/Jakarta (WIB)</span><span>Delivery via Email/SMS gateway</span></div>
    </div>
  </div>`;
  }
});
