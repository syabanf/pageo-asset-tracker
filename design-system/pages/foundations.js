// handwritten
PN.page('foundations', {
  title: 'Foundations', icon: 'layers', nav: 'foundations',
  render() {
    const sw = (arr) => '<div class="swatches">' + arr.map(s => `<div class="swatch"><i style="background:${s[1]}${s[3] ? ';border-color:var(--border-2)' : ''}"></i><b>${s[0]}</b><span>${s[1]}</span><small>${s[2]}</small></div>`).join('') + '</div>';
    const core = [['Black', '#171A1C', 'Logo, strong heading'], ['Carbon', '#24292D', 'Primary text'], ['Slate', '#667078', 'Secondary text'], ['Steel', '#919A9F', 'Muted UI'], ['Mist', '#EEF2F4', 'Background', 1], ['Fog', '#F7F9FA', 'Secondary background', 1], ['White', '#FFFFFF', 'Surface', 1], ['Sky', '#C7EBF8', 'Brand accent'], ['Ocean', '#168FBF', 'Interactive primary'], ['Deep', '#08698F', 'Hover / active']];
    const sem = [['Success', '#17875D', 'Normal / active'], ['Information', '#168FBF', 'Informational'], ['Warning', '#D89414', 'Attention'], ['Critical', '#C43D3D', 'Emergency, SOS'], ['Offline', '#7C858A', 'No signal'], ['Unknown', '#B1B8BC', 'Not determined'], ['Transit', '#4FB7D9', 'Mobilized / moving']];
    const map = [['Land', '#E6ECEF', 'Land fill', 1], ['Shoreline', '#C4D5DD', 'Coast stroke', 1], ['Sea', '#DFF3FA', 'Water', 1], ['Depth', '#B6E0EF', 'Bathymetry', 1], ['Boundary', '#168FBF', 'Geofence / route']];
    const seq = [['seq-1', '#DFF3FA', 'Lowest', 1], ['seq-2', '#BCE7F5', '', 1], ['seq-3', '#8AD5ED', '', 1], ['seq-4', '#4FB7D9', ''], ['seq-5', '#168FBF', ''], ['seq-6', '#08698F', 'Highest']];
    const type = [['Display', 32, 600, 'Operations at a Glance'], ['H1', 28, 600, 'Project Overview'], ['H2', 22, 600, 'Personnel Tracking'], ['H3', 18, 600, 'Asset Management'], ['Body Large', 16, 400, 'Supporting text for important information.'], ['Body', 14, 400, 'This is the default body text for most content.'], ['Label', 13, 500, 'FIELD LABEL'], ['Caption', 12, 400, 'Additional information and notes.'], ['Micro', 11, 500, 'GPS · 3 SEC AGO']];
    const mtype = [['Mobile H1', 26], ['H2', 21], ['H3', 18], ['Body', 16], ['Label', 14], ['Caption', 13], ['Button', 16]];
    const icons = Object.keys(PN.icons);
    return `
      <div class="ds-hero">${C.eyebrow('01 · Foundations')}<h1>Tokens, type, space and symbols.</h1><p>Primitive values feed semantic aliases, which feed component tokens. Components never carry hard-coded colors — <span class="ds-token">blue.500</span> → <span class="ds-token">action.primary</span> → <span class="ds-token">button.primary.background</span>.</p></div>

      <section class="ds-section" id="brand">
        <div class="ds-head"><span class="no">1.1</span><h2>Brand direction</h2><p>Derived from the PAGEO website character — a proposed digital palette, not a corporate guideline</p></div>
        <div class="grid">
          <div class="c4 card dark p24" style="justify-content:space-between;min-height:180px"><div class="logo"><span class="logo-mark" data-logo style="width:190px"></span><span class="logo-sub">Navigator</span></div><div class="t-caption">Wordmark on Black. The “E” carries Sky as the single brand accent.</div></div>
          <div class="c4 card p24" style="justify-content:space-between;min-height:180px"><div class="logo dark"><span class="logo-mark" data-logo style="width:190px"></span><span class="logo-sub">Navigator</span></div><div class="t-caption">Wordmark on White. The “E” switches to Ocean for contrast.</div></div>
          <div class="c4 card p24" style="gap:8px"><div class="eyebrow">Voice</div><div class="t-h3">From data to a safer tomorrow.</div><p class="t-caption">Precise, technical and calm. Uppercase is reserved for short labels — PROJECT STATUS, LAST DETECTED, VESSEL, ASSET ID — never for sentences.</p></div>
        </div>
      </section>

      <section class="ds-section" id="color">
        <div class="ds-head"><span class="no">1.2</span><h2>Color</h2><p>Core palette · semantic · map · sequential analytics</p></div>
        <div class="ds-sub">Core palette</div>${sw(core)}
        <div class="ds-sub">Semantic colors</div>${sw(sem)}
        <div class="ds-desc">Semantic colors appear as a dot, a chip tint, a severity stripe or a text color. Do not turn entire cards into saturated red or amber backgrounds unless it is an exceptional emergency state (mobile muster, SOS).</div>
        <div class="ds-demo-grid">
          <div class="ds-demo"><div class="ds-label">Tinted backgrounds for chips and banners</div><div class="row s8 wrap">${C.chip('ok', 'Active')}${C.chip('info', 'On Site')}${C.chip('transit', 'In Transit')}${C.chip('warn', 'Maintenance')}${C.chip('crit', 'Alert')}${C.chip('off', 'Offline')}${C.chip('unknown', 'Unknown')}</div></div>
          <div class="ds-demo"><div class="ds-label">Dots — the smallest unit of status</div><div class="row s16 wrap" style="font-size:13px"><span class="row s8">${C.dot('ok', true)}Active</span><span class="row s8">${C.dot('info')}Deployed</span><span class="row s8">${C.dot('transit')}In transit</span><span class="row s8">${C.dot('warn')}Warning</span><span class="row s8">${C.dot('crit')}Critical</span><span class="row s8">${C.dot('off')}Offline</span><span class="row s8">${C.dot('unknown')}Unknown</span></div></div>
        </div>
        <div class="ds-sub">Map palette</div>${sw(map)}
        <div class="ds-sub">Sequential analytics palette</div>${sw(seq)}
        <div class="ds-demo"><div class="ds-label">Sequential palette in use — deployed assets per day</div>${C.bars([42, 48, 55, 61, 70, 74, 79, 83, 88, 91, 95, 97], ['W1', '', '', 'W2', '', '', 'W3', '', '', 'W4', '', ''], { seq: true, height: 96 })}</div>
      </section>

      <section class="ds-section" id="typography">
        <div class="ds-head"><span class="no">1.3</span><h2>Typography</h2><p>Inter · tabular numerals for every operational value</p></div>
        <div class="grid">
          <div class="c4 card p24" style="gap:6px"><div style="font-size:88px;font-weight:700;line-height:1;letter-spacing:-.04em">Aa</div><div class="t-h2">Inter</div><div class="t-caption">Clean. Technical. Readable. Excellent for tables, numeric data, coordinates and timestamps, and consistent across web and mobile.</div><div class="divider"></div><div class="ds-label">Tabular numerals</div><div class="tnum" style="font-size:18px;font-weight:500;line-height:1.5">14:42:18<br>-6.228901<br>106.829302<br>± 7 m<br>128</div><div class="ds-token">font-variant-numeric: tabular-nums</div></div>
          <div class="c8 card p24"><div class="ds-label">Dashboard type scale</div><div class="ds-specimen">${type.map(t => `<div class="meta"><b>${t[0]}</b>${t[1]} / ${t[2]}</div><div style="font-size:${t[1]}px;font-weight:${t[2]};line-height:1.25;${t[0] === 'Label' || t[0] === 'Micro' ? 'letter-spacing:.06em;text-transform:uppercase;color:var(--text-2)' : ''}${t[0] === 'Caption' ? 'color:var(--text-2)' : ''}">${t[3]}</div>`).join('')}</div>
            <div class="divider"></div><div class="ds-label">Mobile type scale</div><div class="row s24 wrap">${mtype.map(t => `<div><div class="t-micro">${t[0]}</div><div style="font-size:${t[1]}px;font-weight:600;line-height:1.2">${t[1]}</div></div>`).join('')}</div><div class="ds-desc">Important field information never relies on very small text. Mobile body is 16 px, labels 14 px, captions 13 px.</div></div>
        </div>
      </section>

      <section class="ds-section" id="spacing">
        <div class="ds-head"><span class="no">1.4</span><h2>Spacing, radius, elevation</h2><p>4-point base grid · restrained radii · border before shadow</p></div>
        <div class="ds-demo-grid">
          <div class="ds-demo"><div class="ds-label">Spacing (4 pt grid)</div><div class="spacing-row">${[4, 8, 12, 16, 20, 24, 32, 40, 48, 64].map(s => `<div class="sp"><i style="width:${s}px;height:${s}px"></i>${s}</div>`).join('')}</div>${C.kv([['Card padding', '20 / 24'], ['Table cell', '12 × 16'], ['Section gap', '32'], ['Page gap', '40'], ['Mobile padding', '16']])}</div>
          <div class="ds-demo"><div class="ds-label">Corner radius</div><div class="radius-row">${[['XS', 4], ['S', 6], ['M', 8], ['L', 12], ['XL', 16], ['Pill', 999]].map(r => `<div class="rd"><i style="border-radius:${r[1]}px"></i>${r[0]} · ${r[1]}</div>`).join('')}</div><div class="ds-desc">Default card radius in v2 is <b>12 px</b> (L); buttons and inputs use 10 px; chips and pills 999 px; mobile cards 16 px.</div>
            <div class="ds-label" style="margin-top:8px">Elevation</div><div class="elev-row"><div class="el" style="border:1px solid var(--border)"><b>Surface</b>1 px border · default card</div><div class="el" style="box-shadow:var(--shadow-float)"><b>Floating</b>0 8 24 rgba(20,29,34,.10)</div><div class="el" style="box-shadow:var(--shadow-modal)"><b>Modal</b>Dialogs, popovers, map popups</div></div></div>
        </div>
      </section>

      <section class="ds-section" id="grid">
        <div class="ds-head"><span class="no">1.5</span><h2>Grid &amp; layout</h2><p>Sidebar 256 px · 12 columns · margin 32 · gutter 24 · max width 1640</p></div>
        <div class="ds-demo"><div class="grid-demo">${'<i></i>'.repeat(12)}</div><div class="row s24 wrap" style="font-size:12px;color:var(--text-2)"><span>12 columns</span><span>Margin 32 px</span><span>Gutter 24 px</span><span>Desktop target 1440 – 1920 px</span></div>
          ${C.table({ bare: true, cols: [{ key: 'bp', label: 'Breakpoint' }, { key: 'layout', label: 'Layout' }, { key: 'notes', label: 'Notes' }], rows: [
            { bp: '≥ 1440', layout: 'Full desktop dashboard', notes: 'Expanded 256 px sidebar, 12-column content, tables at default density' },
            { bp: '1024 – 1439', layout: 'Collapsed sidebar', notes: '68 px icon rail, search shortened, KPI cards wrap to 2 rows' },
            { bp: '768 – 1023', layout: 'Tablet operational layout', notes: 'Cards stack to full width, KPIs 2-up, map keeps priority' },
            { bp: '< 768', layout: 'Mobile-specific navigation', notes: 'Do not shrink the desktop dashboard — use the mobile app layouts' }
          ] })}</div>
      </section>

      <section class="ds-section" id="icons">
        <div class="ds-head"><span class="no">1.6</span><h2>Iconography</h2><p>Lucide · 20 px desktop · 24 px mobile · 1.75 px stroke · never emoji</p></div>
        <div class="icon-grid">${icons.map(i => `<div class="ig">${C.icon(i)}<span>${i}</span></div>`).join('')}</div>
      </section>

      <section class="ds-section" id="motion">
        <div class="ds-head"><span class="no">1.7</span><h2>Motion &amp; accessibility</h2></div>
        <div class="ds-demo-grid">
          <div class="ds-demo" style="gap:10px"><div class="ds-label">Motion</div><div class="row s16"><span class="row s8">${C.dot('ok', true)}Live pulse</span><span class="m-icon-ring info scanning" style="width:40px;height:40px">${C.icon('nfc', 'ic-18')}</span><span class="t-caption">Scanning rings</span></div><div class="ds-desc">Motion is reserved for live state (pulse on a live dot, scanning rings, sync spinner) and short transitions (120 ms hover, 150 ms switch). Skeletons shimmer; nothing bounces. Every animation is disabled under <span class="ds-token">prefers-reduced-motion</span>.</div></div>
          <div class="ds-demo" style="gap:10px"><div class="ds-label">Accessibility</div>${C.kv([['Contrast', 'Body text ≥ 4.5 : 1 · chip text on tint ≥ 4.5 : 1'], ['Focus', '2 px Ocean outline, 2 px offset on every control'], ['Touch', '44 px minimum, 48–52 px in the field'], ['Status', 'Never color alone — dot + text, or icon + text'], ['Numbers', 'Tabular, right-aligned in tables, with units (± 7 m, 2 h 14 m)']])}</div>
        </div>
      </section>`;
  }
});
